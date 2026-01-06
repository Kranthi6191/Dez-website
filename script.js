const firebaseConfig = {
  apiKey: "AIzaSyAg5xZeGOUIaaOSJ7_Okn-Y5nEjdUsjwWU",
  authDomain: "wright-trainers.firebaseapp.com",
  databaseURL: "https://wright-trainers-default-rtdb.firebaseio.com/",
  projectId: "wright-trainers",
  appId: "1:935622740076:web:c2c0bcb281527e9e64b049"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

let trainerName = localStorage.getItem('trainerName') || null;
let currentMode = 'guess'; 
let score = 0; let pokemonNameList = []; let isShiny = false;
const typesPool = ['fire','water','grass','electric','ice','fighting','poison','ground','flying','psychic','bug','rock','ghost','dragon','dark','steel','fairy','normal'];

// 1. Navigation Logic Fix
function switchPage(targetId) {
    document.querySelectorAll('.page-section').forEach(section => section.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));

    const targetSection = document.getElementById(targetId);
    const targetLink = document.querySelector(`[data-target="${targetId}"]`);

    if (targetSection) targetSection.classList.add('active');
    if (targetLink) targetLink.classList.add('active');
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        switchPage(this.getAttribute('data-target'));
    });
});

// 2. Trainer Identity
function checkTrainerName() {
    if (!trainerName) {
        trainerName = prompt("Welcome, Elite Trainer! Enter your name to compete:");
        if (trainerName) localStorage.setItem('trainerName', trainerName);
        else trainerName = "Guest Trainer";
    }
}

// 3. Theme & Game Logic
function toggleTheme() {
    document.body.classList.toggle('night-mode');
    const btn = document.getElementById('theme-toggle');
    btn.textContent = document.body.classList.contains('night-mode') ? "☀️ Day Mode" : "🌙 Night Mode";
}

function switchGame(mode) {
    currentMode = mode;
    score = 0; document.getElementById('current-score').textContent = "0";
    document.querySelectorAll('.game-tab').forEach(b => b.classList.remove('active'));
    event.target.classList.add('active');
    document.getElementById('game-title').textContent = mode === 'guess' ? "Who's That Pokémon?" : "What's the Type?";
    initGame();
}

async function initGame() {
    if (pokemonNameList.length === 0) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1025`);
        const data = await res.json();
        pokemonNameList = data.results.map(p => p.name.toUpperCase());
    }
    const options = document.getElementById('game-options');
    const img = document.getElementById('game-image');
    const alert = document.getElementById('shiny-alert');
    img.classList.remove('revealed', 'shiny'); alert.classList.add('hidden');
    
    isShiny = Math.random() < 0.1;
    const randomId = Math.floor(Math.random() * 1025) + 1;
    const pkmn = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`).then(r => r.json());
    
    img.src = isShiny ? pkmn.sprites.other['official-artwork'].front_shiny : pkmn.sprites.other['official-artwork'].front_default;
    if (isShiny) { img.classList.add('shiny'); alert.classList.remove('hidden'); }
    if (currentMode === 'type') img.classList.add('revealed');

    options.innerHTML = '';
    let correct = currentMode === 'guess' ? pkmn.name.toUpperCase() : pkmn.types[0].type.name;
    let pool = currentMode === 'guess' ? pokemonNameList : typesPool;

    let choices = [correct];
    while(choices.length < 4) {
        let rand = pool[Math.floor(Math.random() * pool.length)];
        if(!choices.includes(rand)) choices.push(rand);
    }
    choices.sort(() => Math.random() - 0.5).forEach(choice => {
        const btn = document.createElement('button');
        btn.textContent = choice.toUpperCase();
        btn.onclick = () => {
            img.classList.add('revealed');
            if(choice === correct) {
                score += isShiny ? 5 : 1;
                document.getElementById('game-feedback').textContent = "AWESOME!";
            } else {
                db.ref('combatLog').push({ trainer: trainerName, pokemon: correct.toUpperCase(), streak: score, time: Date.now() });
                if (score > 0) db.ref('leaderboard').push({ name: trainerName, score: score });
                score = 0;
                document.getElementById('game-feedback').textContent = `IT WAS ${correct.toUpperCase()}!`;
            }
            document.getElementById('current-score').textContent = score;
            setTimeout(initGame, 2000);
        };
        options.appendChild(btn);
    });
}

function loadLog() {
    db.ref('combatLog').limitToLast(8).on('value', snap => {
        const log = document.getElementById('combat-log');
        log.innerHTML = '';
        let entries = [];
        snap.forEach(c => entries.push(c.val()));
        entries.reverse().forEach(e => {
            log.innerHTML += `<li>⚔️ <b>${e.trainer}</b> streak ended at <b>${e.pokemon}</b> (${e.streak})</li>`;
        });
    });
}

function loadLB() {
    db.ref('leaderboard').orderByChild('score').on('value', snap => {
        const lb = document.getElementById('leaderboard-body');
        let scores = [];
        snap.forEach(c => scores.push({key: c.key, ...c.val()}));
        scores.sort((a,b) => b.score - a.score);
        if (scores.length > 5) { for (let i = 5; i < scores.length; i++) db.ref('leaderboard').child(scores[i].key).remove(); scores = scores.slice(0, 5); }
        lb.innerHTML = '';
        scores.forEach((e, i) => { lb.innerHTML += `<tr><td>#${i+1}</td><td>${e.name.toUpperCase()}</td><td>${e.score}</td></tr>`; });
    });
}

async function changeGen(s, e, title, btn) {
    document.querySelectorAll('.gen-tab').forEach(b => b.classList.remove('active')); btn.classList.add('active');
    const grid = document.getElementById('pokemon-grid');
    grid.innerHTML = '<p>Searching grass...</p>';
    const promises = [];
    for (let i = s; i <= e; i++) promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json()));
    const list = await Promise.all(promises);
    grid.innerHTML = '';
    list.forEach(p => {
        const card = document.createElement('div');
        card.className = 'pokemon-card';
        card.innerHTML = `<img src="${p.sprites.front_default}"><h3>${p.name.toUpperCase()}</h3>`;
        card.onclick = () => { document.getElementById('detail-modal').style.display='flex'; document.getElementById('detail-name').textContent=p.name.toUpperCase(); document.getElementById('detail-image').src=p.sprites.other['official-artwork'].front_default; };
        grid.appendChild(card);
    });
}

function closeM() { document.getElementById('detail-modal').style.display='none'; }
checkTrainerName();
changeGen(1, 151, 'Gen 1', document.querySelector('.gen-tab')); 
initGame(); 
loadLB(); 
loadLog();
