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
let score = 0; let pokemonNameList = []; let currentGenList = [];

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

function toggleTheme() {
    document.body.classList.toggle('night-mode');
    const btn = document.getElementById('theme-toggle');
    btn.textContent = document.body.classList.contains('night-mode') ? "☀️ Day Mode" : "🌙 Night Mode";
}

async function initGame() {
    if (pokemonNameList.length === 0) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=1025`);
        const data = await res.json();
        pokemonNameList = data.results.map(p => p.name.toUpperCase());
    }
    const options = document.getElementById('game-options');
    const img = document.getElementById('game-image');
    img.classList.remove('revealed');
    
    const randomId = Math.floor(Math.random() * 1025) + 1;
    const pkmn = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`).then(r => r.json());
    const correctName = pkmn.name.toUpperCase();
    
    img.src = pkmn.sprites.other['official-artwork'].front_default;

    options.innerHTML = '';
    let choices = [correctName];
    while(choices.length < 4) {
        let rand = pokemonNameList[Math.floor(Math.random() * 1025)];
        if(!choices.includes(rand)) choices.push(rand);
    }
    choices.sort(() => Math.random() - 0.5).forEach(choice => {
        const btn = document.createElement('button');
        btn.textContent = choice;
        btn.onclick = () => {
            img.classList.add('revealed');
            if(choice === correctName) {
                score++;
                document.getElementById('game-feedback').textContent = "CORRECT!";
            } else {
                if (score > 0) db.ref('leaderboard').push({ name: trainerName || "Guest", score: score });
                score = 0;
                document.getElementById('game-feedback').textContent = `WRONG! IT WAS ${correctName}`;
            }
            document.getElementById('current-score').textContent = score;
            setTimeout(initGame, 2000);
        };
        options.appendChild(btn);
    });
}

function summonPokemon(pkmn) {
    const overlay = document.getElementById('summon-overlay');
    overlay.classList.remove('hidden');
    setTimeout(() => {
        overlay.classList.add('hidden');
        openModal(pkmn);
    }, 1200);
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
    getEvolutionChain(pkmn);
}

async function getEvolutionChain(pkmn) {
    const evoContainer = document.getElementById('evolution-chain');
    evoContainer.innerHTML = '...';
    try {
        const speciesRes = await fetch(pkmn.species.url);
        const speciesData = await speciesRes.json();
        const evoRes = await fetch(speciesData.evolution_chain.url);
        const evoData = await evoRes.json();
        evoContainer.innerHTML = '';
        let curr = evoData.chain;
        while (curr) {
            const pkmnId = curr.species.url.split('/').slice(-2, -1)[0];
            const img = document.createElement('img');
            img.src = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkmnId}.png`;
            img.onclick = async () => { 
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkmnId}`); 
                summonPokemon(await res.json()); 
            };
            evoContainer.appendChild(img);
            curr = curr.evolves_to[0];
            if (curr) evoContainer.innerHTML += ' <span>→</span> ';
        }
    } catch { evoContainer.innerHTML = 'None'; }
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

function closeM() { document.getElementById('detail-modal').style.display='none'; }

changeGen(1, 151, 'Gen 1', document.querySelector('.gen-tab')); 
initGame();
