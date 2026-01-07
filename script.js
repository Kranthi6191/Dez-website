const firebaseConfig = {
  apiKey: "AIzaSyAg5xZeGOUIaaOSJ7_Okn-Y5nEjdUsjwWU",
  authDomain: "wright-trainers.firebaseapp.com",
  databaseURL: "https://wright-trainers-default-rtdb.firebaseio.com/",
  projectId: "wright-trainers",
  appId: "1:935622740076:web:c2c0bcb281527e9e64b049"
};
firebase.initializeApp(firebaseConfig);
const db = firebase.database();

let currentScore = 0; 
let pokemonNameList = []; 
let isShiny = false;
let currentMode = 'guess';

// FULL WEAKNESS CHART
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

function switchPage(id) {
    document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
    document.querySelectorAll('.nav-link').forEach(l => {
        l.classList.remove('active');
        if(l.getAttribute('data-target') === id) l.classList.add('active');
    });
    const target = document.getElementById(id);
    if(target) target.classList.add('active');
}

// SETUP & LISTENERS
document.addEventListener('DOMContentLoaded', () => {
    changeGen(1, 151, document.querySelector('.gen-tab'));
    initGame();
    loadLB(); // Load Leaderboard immediately
    loadLog();
    
    // Enter key support for search
    const searchInput = document.getElementById('pkmn-search');
    if (searchInput) {
        searchInput.addEventListener('keypress', function (e) {
            if (e.key === 'Enter') handleSearch();
        });
    }
});

// ROBUST LEADERBOARD LOADER
function loadLB() {
    const lb = document.getElementById('leaderboard-body');
    
    db.ref('leaderboard').on('value', snap => {
        lb.innerHTML = ''; // Clear existing rows
        
        if (!snap.exists()) {
            lb.innerHTML = '<tr><td colspan="3">No Champions Yet</td></tr>';
            return;
        }

        let scores = [];
        snap.forEach(c => {
            const val = c.val();
            // SAFETY CHECK: Only accepts valid scores to prevent "stuck" board
            if (val && val.name && typeof val.score === 'number') {
                scores.push(val);
            }
        });

        // Sort Highest to Lowest
        scores.sort((a,b) => b.score - a.score);
        
        // Display Top 5
        if (scores.length === 0) {
            lb.innerHTML = '<tr><td colspan="3">Waiting for Data...</td></tr>';
        } else {
            scores.slice(0, 5).forEach((e, i) => {
                lb.innerHTML += `<tr><td>#${i+1}</td><td>${e.name.toUpperCase()}</td><td>${e.score}</td></tr>`;
            });
        }
    });
}

async function handleSearch() {
    const query = document.getElementById('pkmn-search').value.trim().toLowerCase();
    if (!query) return;
    document.getElementById('summon-overlay').classList.remove('hidden');
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
        if (!res.ok) throw new Error();
        const pkmn = await res.json();
        setTimeout(() => {
            document.getElementById('summon-overlay').classList.add('hidden');
            openModal(pkmn);
        }, 800);
    } catch {
        document.getElementById('summon-overlay').classList.add('hidden');
        alert("Pokémon not found! Try a number or exact name.");
    }
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
    document.getElementById('shiny-alert').classList.add('hidden');
    
    // Shiny Logic
    isShiny = Math.random() < 0.1;
    const randomId = Math.floor(Math.random() * 1025) + 1;
    const pkmn = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`).then(r => r.json());
    
    img.src = isShiny ? pkmn.sprites.other['official-artwork'].front_shiny : pkmn.sprites.other['official-artwork'].front_default;
    if (isShiny) { img.classList.add('shiny'); document.getElementById('shiny-alert').classList.remove('hidden'); }
    if (currentMode === 'type') img.classList.add('revealed');
    
    options.innerHTML = '';
    let correct = currentMode === 'guess' ? pkmn.name.toUpperCase() : pkmn.types[0].type.name;
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
                handleGameOver(currentScore, pkmn.name.toUpperCase());
                currentScore = 0; 
                document.getElementById('game-feedback').textContent = `IT WAS ${pkmn.name.toUpperCase()}!`;
            }
            document.getElementById('current-score').textContent = currentScore;
            setTimeout(initGame, 2000);
        };
        options.appendChild(btn);
    });
}

function handleGameOver(s, name) {
    if (s > 0) {
        const tName = prompt("CHAMPION STREAK! Enter a Trainer Nickname for the Hall of Fame:");
        if (tName) {
            db.ref('leaderboard').push({ name: tName, score: s });
            db.ref('combatLog').push({ trainer: tName, pokemon: name, streak: s, time: Date.now() });
        }
    }
}

function summonPokemon(p) {
    document.getElementById('summon-overlay').classList.remove('hidden');
    setTimeout(() => { document.getElementById('summon-overlay').classList.add('hidden'); openModal(p); }, 800);
}

async function openModal(p) {
    document.getElementById('detail-name').textContent = p.name.toUpperCase();
    document.getElementById('detail-image').src = p.sprites.other['official-artwork'].front_default;
    document.getElementById('detail-id').textContent = p.id;
    
    const types = p.types.map(t => t.type.name.toLowerCase());
    document.getElementById('detail-type').textContent = types.join(', ').toUpperCase();
    
    let weaknesses = new Set();
    types.forEach(t => { 
        if (typeWeaknesses[t]) {
            typeWeaknesses[t].forEach(w => weaknesses.add(w)); 
        }
    });
    document.getElementById('detail-weakness').textContent = Array.from(weaknesses).join(', ').toUpperCase() || "NONE";
    
    document.getElementById('stat-hp').textContent = p.stats[0].base_stat;
    document.getElementById('stat-attack').textContent = p.stats[1].base_stat;
    document.getElementById('stat-defense').textContent = p.stats[2].base_stat;
    document.getElementById('detail-modal').style.display = 'flex';
    getEvolutionChain(p);
}

async function getEvolutionChain(p) {
    const evoContainer = document.getElementById('evolution-chain');
    evoContainer.innerHTML = 'Searching...';
    try {
        const speciesRes = await fetch(p.species.url);
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
            if (curr) evoContainer.innerHTML += ' → ';
        }
    } catch { evoContainer.innerHTML = 'None'; }
}

async function changeGen(s, e, btn) {
    document.querySelectorAll('.gen-tab').forEach(b => b.classList.remove('active')); 
    if(btn) btn.classList.add('active');
    const grid = document.getElementById('pokemon-grid'); 
    grid.innerHTML = 'Searching tall grass...';
    const promises = []; 
    for (let i = s; i <= e; i++) promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json()));
    const list = await Promise.all(promises); 
    grid.innerHTML = '';
    list.forEach(p => {
        const card = document.createElement('div'); card.className = 'pokemon-card';
        card.innerHTML = `<img src="${p.sprites.front_default}"><h3>${p.name.toUpperCase()}</h3>`;
        card.onclick = () => { summonPokemon(p); }; 
        grid.appendChild(card);
    });
}

function switchGame(mode, btn) {
    currentMode = mode; currentScore = 0; document.getElementById('current-score').textContent = "0";
    document.querySelectorAll('.game-btn').forEach(b => b.classList.remove('active')); btn.classList.add('active');
    initGame();
}

function loadLog() {
    db.ref('combatLog').limitToLast(6).on('value', snap => {
        const log = document.getElementById('combat-log'); log.innerHTML = '';
        snap.forEach(c => { const e = c.val(); log.innerHTML = `<li>⚔️ <b>${e.trainer || "Trainer"}</b> streak: ${e.streak} at ${e.pokemon}</li>` + log.innerHTML; });
    });
}

function closeM() { document.getElementById('detail-modal').style.display = 'none'; }
function toggleTheme() { document.body.classList.toggle('night-mode'); }
