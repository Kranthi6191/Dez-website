const firebaseConfig = {
  apiKey: "AIzaSyAg5xZeGOUIaaOSJ7_Okn-Y5nEjdUsjwWU",
  authDomain: "wright-trainers.firebaseapp.com",
  databaseURL: "https://wright-trainers-default-rtdb.firebaseio.com/",
  projectId: "wright-trainers",
  appId: "1:935622740076:web:c2c0bcb281527e9e64b049"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

let currentScore = 0; let pokemonNameList = []; let isShiny = false; let currentMode = 'guess';

const typeWeaknesses = {
    normal: ['fighting'], fire: ['water', 'ground', 'rock'], water: ['electric', 'grass'],
    grass: ['fire', 'ice', 'poison', 'flying', 'bug'], electric: ['ground'],
    ice: ['fire', 'fighting', 'rock', 'steel'], fighting: ['flying', 'psychic', 'fairy'],
    poison: ['ground', 'psychic'], ground: ['water', 'grass', 'ice'],
    flying: ['electric', 'ice', 'rock'], psychic: ['bug', 'ghost', 'dark'],
    bug: ['fire', 'flying', 'rock'], rock: ['water', 'grass', 'fighting', 'ground', 'steel'],
    ghost: ['ghost', 'dark'], dragon: ['ice', 'dragon', 'fairy'],
    dark: ['fighting', 'bug', 'fairy'], steel: ['fire', 'fighting', 'ground'],
    fairy: ['poison', 'steel']
};

function switchPage(targetId) {
    document.querySelectorAll('.page-section').forEach(section => section.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(link => link.classList.remove('active'));
    const targetSection = document.getElementById(targetId);
    const targetLink = document.querySelector(`[data-target="${targetId}"]`);
    if (targetSection) targetSection.classList.add('active');
    if (targetLink) targetLink.classList.add('active');
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', function(e) { e.preventDefault(); switchPage(this.getAttribute('data-target')); });
});

async function initGame() {
    if (pokemonNameList.length === 0) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1025`);
        const data = await res.json();
        pokemonNameList = data.results.map(p => p.name.toUpperCase());
    }
    const options = document.getElementById('game-options');
    const img = document.getElementById('game-image');
    img.classList.remove('revealed', 'shiny'); 
    document.getElementById('shiny-alert').classList.add('hidden');
    
    isShiny = Math.random() < 0.1;
    const randomId = Math.floor(Math.random() * 1025) + 1;
    const pkmn = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`).then(r => r.json());
    const correctName = pkmn.name.toUpperCase();
    
    img.src = isShiny ? pkmn.sprites.other['official-artwork'].front_shiny : pkmn.sprites.other['official-artwork'].front_default;
    if (isShiny) { img.classList.add('shiny'); document.getElementById('shiny-alert').classList.remove('hidden'); }
    if (currentMode === 'type') img.classList.add('revealed');

    options.innerHTML = '';
    let correct = currentMode === 'guess' ? correctName : pkmn.types[0].type.name;
    const typesPool = ['fire','water','grass','electric','ice','fighting','poison','ground','flying','psychic','bug','rock','ghost','dragon','dark','steel','fairy','normal'];
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
                currentScore += isShiny ? 5 : 1;
                document.getElementById('game-feedback').textContent = "CORRECT!";
            } else {
                handleGameOver(currentScore, correct.toUpperCase());
                currentScore = 0;
                document.getElementById('game-feedback').textContent = `IT WAS ${correct.toUpperCase()}!`;
            }
            document.getElementById('current-score').textContent = currentScore;
            setTimeout(initGame, 2000);
        };
        options.appendChild(btn);
    });
}

function handleGameOver(s, name) {
    if (s > 0) {
        const tName = prompt("NEW RECORD! Enter your Trainer Name:");
        if (tName) {
            db.ref('leaderboard').push({ name: tName, score: s });
            db.ref('combatLog').push({ trainer: tName, pokemon: name, streak: s, time: Date.now() });
        }
    }
}

function summonPokemon(pkmn) {
    document.getElementById('summon-overlay').classList.remove('hidden');
    setTimeout(() => { document.getElementById('summon-overlay').classList.add('hidden'); openModal(pkmn); }, 800);
}

async function openModal(pkmn) {
    document.getElementById('detail-name').textContent = pkmn.name.toUpperCase();
    document.getElementById('detail-image').src = pkmn.sprites.other['official-artwork'].front_default;
    document.getElementById('detail-id').textContent = pkmn.id;
    const types = pkmn.types.map(t => t.type.name.toLowerCase());
    document.getElementById('detail-type').textContent = types.join(', ').toUpperCase();
    let weaknesses = new Set();
    types.forEach(t => { if (typeWeaknesses[t]) typeWeaknesses[t].forEach(w => weaknesses.add(w)); });
    document.getElementById('detail-weakness').textContent = Array.from(weaknesses).join(', ').toUpperCase() || "NONE";
    document.getElementById('stat-hp').textContent = pkmn.stats[0].base_stat;
    document.getElementById('stat-attack').textContent = pkmn.stats[1].base_stat;
    document.getElementById('stat-defense').textContent = pkmn.stats[2].base_stat;
    document.getElementById('detail-modal').style.display = 'flex';
}

async function changeGen(s, e, title, btn) {
    document.querySelectorAll('.gen-tab').forEach(b => b.classList.remove('active')); btn.classList.add('active');
    const grid = document.getElementById('pokemon-grid');
    grid.innerHTML = '<p>Searching tall grass...</p>';
    const promises = [];
    for (let i = s; i <= e; i++) promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json()));
    const list = await Promise.all(promises);
    grid.innerHTML = '';
    list.forEach(p => {
        const card = document.createElement('div');
        card.className = 'pokemon-card';
        card.innerHTML = `<img src="${p.sprites.front_default}"><h3>${p.name.toUpperCase()}</h3>`;
        card.onclick = () => { summonPokemon(p); };
        grid.appendChild(card);
    });
}

function loadLog() {
    db.ref('combatLog').limitToLast(6).on('value', snap => {
        const log = document.getElementById('combat-log');
        log.innerHTML = '';
        snap.forEach(c => {
            const e = c.val();
            log.innerHTML = `<li>⚔️ <b>${e.trainer || "Trainer"}</b> ended streak at <b>${e.pokemon}</b> (${e.streak})</li>` + log.innerHTML;
        });
    });
}

function loadLB() {
    db.ref('leaderboard').on('value', snap => {
        const lb = document.getElementById('leaderboard-body');
        let scores = [];
        snap.forEach(c => scores.push(c.val()));
        scores.sort((a,b) => b.score - a.score);
        lb.innerHTML = '';
        scores.slice(0, 5).forEach((e, i) => {
            lb.innerHTML += `<tr><td>#${i+1}</td><td>${e.name.toUpperCase()}</td><td>${e.score}</td></tr>`;
        });
    });
}

function closeM() { document.getElementById('detail-modal').style.display = 'none'; }
changeGen(1, 151, 'Gen 1', document.querySelector('.gen-tab')); initGame(); loadLB(); loadLog();
