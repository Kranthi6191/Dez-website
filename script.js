const grid = document.getElementById('pokemon-grid');
const modal = document.getElementById('detail-modal');
const closeModal = document.getElementById('close-modal');
const summonOverlay = document.getElementById('summon-overlay');

let score = 0; let best = 0;
// Total Pokemon count as of Gen 9
const TOTAL_POKEMON = 1025;
let pokemonNameList = [];

// 1. COMPLETE WEAKNESS MAP (Corrected for accuracy)
const typeWeaknesses = {
    normal: ['fighting'],
    fire: ['water', 'ground', 'rock'],
    water: ['electric', 'grass'],
    grass: ['fire', 'ice', 'poison', 'flying', 'bug'],
    electric: ['ground'],
    ice: ['fire', 'fighting', 'rock', 'steel'],
    fighting: ['flying', 'psychic', 'fairy'],
    poison: ['ground', 'psychic'],
    ground: ['water', 'grass', 'ice'],
    flying: ['electric', 'ice', 'rock'],
    psychic: ['bug', 'ghost', 'dark'],
    bug: ['fire', 'flying', 'rock'],
    rock: ['water', 'grass', 'fighting', 'ground', 'steel'],
    ghost: ['ghost', 'dark'],
    dragon: ['ice', 'dragon', 'fairy'],
    dark: ['fighting', 'bug', 'fairy'],
    steel: ['fire', 'fighting', 'ground'],
    fairy: ['poison', 'steel']
};

// --- NAVIGATION ---
function switchPage(targetId) {
    document.querySelectorAll('.nav-link, .page-section').forEach(el => el.classList.remove('active'));
    document.getElementById(targetId).classList.add('active');
    const navLink = document.querySelector(`[data-target="${targetId}"]`);
    if (navLink) navLink.classList.add('active');
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.onclick = (e) => {
        e.preventDefault();
        switchPage(link.dataset.target);
    };
});

// --- POKEDEX & SEARCH ---
async function changeGen(start, end, title, btn) {
    document.getElementById('pokedex-title').textContent = title;
    document.querySelectorAll('.gen-btn').forEach(b => b.classList.remove('active'));
    if(btn) btn.classList.add('active');

    grid.innerHTML = '<p>Searching the tall grass...</p>';
    
    const promises = [];
    for (let i = start; i <= end; i++) {
        promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json()));
    }
    
    const list = await Promise.all(promises);
    grid.innerHTML = '';
    
    list.forEach(pkmn => {
        const card = document.createElement('div');
        card.className = 'pokemon-card';
        card.innerHTML = `
            <img src="${pkmn.sprites.front_default}">
            <h3>${pkmn.name.toUpperCase()}</h3>
        `;
        card.onclick = () => summonPokemon(pkmn);
        grid.appendChild(card);
    });
}

async function handleSearch() {
    const query = document.getElementById('pkmn-search').value.toLowerCase().trim();
    if (!query) return;

    grid.innerHTML = `<p>Searching the world for ${query}...</p>`;

    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
        if (!res.ok) throw new Error();
        const pkmn = await res.json();
        
        grid.innerHTML = '';
        const card = document.createElement('div');
        card.className = 'pokemon-card';
        card.innerHTML = `<img src="${pkmn.sprites.front_default}"><h3>${pkmn.name.toUpperCase()}</h3>`;
        card.onclick = () => summonPokemon(pkmn);
        grid.appendChild(card);
        
        summonPokemon(pkmn);
    } catch {
        grid.innerHTML = `<p style="color:red;">Pokémon not found. Try name or ID (1-${TOTAL_POKEMON}).</p>`;
    }
}

// --- SUMMON & MODAL LOGIC ---
function summonPokemon(pkmn) {
    summonOverlay.classList.remove('hidden');
    summonOverlay.classList.add('animate-summon');
    setTimeout(() => {
        summonOverlay.classList.add('hidden');
        summonOverlay.classList.remove('animate-summon');
        openModal(pkmn);
    }, 800);
}

// 2. UPDATED MODAL FUNCTION (Fixes the red weakness issue)
function openModal(pkmn) {
    document.getElementById('detail-name').textContent = pkmn.name.toUpperCase();
    document.getElementById('detail-image').src = pkmn.sprites.other['official-artwork'].front_default;
    document.getElementById('detail-id').textContent = pkmn.id;
    
    // Get Types in lowercase
    const types = pkmn.types.map(t => t.type.name.toLowerCase());
    document.getElementById('detail-type').textContent = types.join(', ');

    // Calculate Weaknesses using Set to avoid duplicates
    let weaknesses = new Set();
    types.forEach(t => {
        let typeInfo = typeWeaknesses[t];
        if (typeInfo) {
            typeInfo.forEach(w => weaknesses.add(w));
        }
    });

    const weaknessList = Array.from(weaknesses).join(', ');
    document.getElementById('detail-weakness').textContent = weaknessList.length > 0 ? weaknessList : "None";
    
    document.getElementById('stat-hp').textContent = pkmn.stats[0].base_stat;
    document.getElementById('stat-attack').textContent = pkmn.stats[1].base_stat;
    document.getElementById('stat-defense').textContent = pkmn.stats[2].base_stat;
    
    modal.classList.add('active');
}

// --- GAME LOGIC (ALL 9 GENS) ---
async function initGame() {
    // Fetch all names once for optimized decoys
    if (pokemonNameList.length === 0) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${TOTAL_POKEMON}`);
        const data = await res.json();
        pokemonNameList = data.results.map(p => p.name.toUpperCase());
    }

    const options = document.getElementById('game-options');
    const img = document.getElementById('game-image');
    const feedback = document.getElementById('game-feedback');
    img.classList.remove('revealed'); feedback.textContent = "";

    // Pick random Pokemon from Gen 1 to Gen 9
    const randomId = Math.floor(Math.random() * TOTAL_POKEMON) + 1;
    const pkmn = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`).then(r => r.json());
    const correctName = pkmn.name.toUpperCase();
    img.src = pkmn.sprites.other['official-artwork'].front_default;
    options.innerHTML = '';

    let choices = [correctName];
    while(choices.length < 4) {
        let randName = pokemonNameList[Math.floor(Math.random() * TOTAL_POKEMON)];
        if(!choices.includes(randName)) choices.push(randName);
    }

    choices.sort(() => Math.random() - 0.5).forEach(choice => {
        const btn = document.createElement('button');
        btn.textContent = choice;
        btn.onclick = () => {
            img.classList.add('revealed');
            if(choice === correctName) {
                score++; feedback.textContent = "CORRECT!";
                if(score > best) best = score;
            } else { score = 0; feedback.textContent = `WRONG! It was ${correctName}`; }
            document.getElementById('current-score').textContent = score;
            document.getElementById('high-score').textContent = best;
            setTimeout(initGame, 2000);
        };
        options.appendChild(btn);
    });
}

// Global Event Listeners
closeModal.onclick = () => modal.classList.remove('active');
window.onclick = (e) => { if(e.target === modal) modal.classList.remove('active'); }
document.getElementById('pkmn-search').addEventListener('keypress', (e) => { if (e.key === 'Enter') handleSearch(); });

// Initialization
changeGen(1, 151, 'Gen 1'); // Load Gen 1 by default
initGame(); // Start game engine
