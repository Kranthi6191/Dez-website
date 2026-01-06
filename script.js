const firebaseConfig = {
  apiKey: "AIzaSyAg5xZeGOUIaaOSJ7_Okn-Y5nEjdUsjwWU",
  authDomain: "wright-trainers.firebaseapp.com",
  databaseURL: "https://wright-trainers-default-rtdb.firebaseio.com/",
  projectId: "wright-trainers",
  storageBucket: "wright-trainers.firebasestorage.app",
  messagingSenderId: "935622740076",
  appId: "1:935622740076:web:c2c0bcb281527e9e64b049",
  measurementId: "G-0H6NWK1LW9"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.database();

const grid = document.getElementById('pokemon-grid');
const modal = document.getElementById('detail-modal');
const closeModal = document.getElementById('close-modal');
const summonOverlay = document.getElementById('summon-overlay');
const TOTAL_POKEMON = 1025;

let score = 0; let best = 0;
let pokemonNameList = [];
let currentGenList = [];

function switchPage(targetId) {
    document.querySelectorAll('.nav-link, .page-section').forEach(el => el.classList.remove('active'));
    document.getElementById(targetId).classList.add('active');
    const navLink = document.querySelector(`[data-target="${targetId}"]`);
    if (navLink) navLink.classList.add('active');
}

document.querySelectorAll('.nav-link').forEach(link => {
    link.onclick = (e) => { e.preventDefault(); switchPage(link.dataset.target); };
});

async function changeGen(start, end, title, btn) {
    document.getElementById('pokedex-title').textContent = title;
    document.querySelectorAll('.gen-tab').forEach(b => b.classList.remove('active'));
    if(btn) btn.classList.add('active');
    document.getElementById('type-filter').value = "all";
    grid.innerHTML = '<p>Searching tall grass...</p>';
    const promises = [];
    for (let i = start; i <= end; i++) {
        promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json()));
    }
    currentGenList = await Promise.all(promises);
    displayPokemon(currentGenList);
}

function displayPokemon(list) {
    grid.innerHTML = '';
    list.forEach(pkmn => {
        const card = document.createElement('div');
        card.className = 'pokemon-card';
        card.innerHTML = `<img src="${pkmn.sprites.front_default}"><h3>${pkmn.name.toUpperCase()}</h3>`;
        card.onclick = () => summonPokemon(pkmn);
        grid.appendChild(card);
    });
}

function filterByType() {
    const selectedType = document.getElementById('type-filter').value;
    if (selectedType === "all") displayPokemon(currentGenList);
    else displayPokemon(currentGenList.filter(pkmn => pkmn.types.some(t => t.type.name === selectedType)));
}

async function handleSearch() {
    const query = document.getElementById('pkmn-search').value.toLowerCase().trim();
    if (!query) return;
    try {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${query}`);
        const pkmn = await res.json();
        displayPokemon([pkmn]);
        summonPokemon(pkmn);
    } catch { alert("Pokémon not found!"); }
}

function summonPokemon(pkmn) {
    summonOverlay.classList.remove('hidden');
    summonOverlay.classList.add('animate-summon');
    setTimeout(() => {
        summonOverlay.classList.add('hidden');
        summonOverlay.classList.remove('animate-summon');
        openModal(pkmn);
    }, 800);
}

async function openModal(pkmn) {
    document.getElementById('detail-name').textContent = pkmn.name.toUpperCase();
    document.getElementById('detail-image').src = pkmn.sprites.other['official-artwork'].front_default;
    document.getElementById('detail-id').textContent = pkmn.id;
    document.getElementById('detail-type').textContent = pkmn.types.map(t => t.type.name.toUpperCase()).join(', ');
    document.getElementById('stat-hp').textContent = pkmn.stats[0].base_stat;
    document.getElementById('stat-attack').textContent = pkmn.stats[1].base_stat;
    document.getElementById('stat-defense').textContent = pkmn.stats[2].base_stat;
    modal.classList.add('active');
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
            const div = document.createElement('div');
            div.className = 'evo-item';
            div.innerHTML = `<img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pkmnId}.png" style="width:50px;">`;
            div.onclick = async () => {
                const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${pkmnId}`);
                const data = await res.json();
                openModal(data);
            };
            evoContainer.appendChild(div);
            curr = curr.evolves_to[0];
            if (curr) evoContainer.innerHTML += '<span>→</span>';
        }
    } catch { evoContainer.innerHTML = 'None'; }
}

async function initGame() {
    if (pokemonNameList.length === 0) {
        const res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${TOTAL_POKEMON}`);
        const data = await res.json();
        pokemonNameList = data.results.map(p => p.name.toUpperCase());
    }
    const options = document.getElementById('game-options');
    const img = document.getElementById('game-image');
    img.classList.remove('revealed');
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
                score++; 
                document.getElementById('game-feedback').textContent = "AWESOME!";
            } else {
                checkHighScore(score);
                score = 0; 
                document.getElementById('game-feedback').textContent = `IT WAS ${correctName}!`;
            }
            document.getElementById('current-score').textContent = score;
            setTimeout(initGame, 2000);
        };
        options.appendChild(btn);
    });
}

function checkHighScore(finalScore) {
    if (finalScore > 0) {
        const name = prompt("TOP 5 STREAK! Enter Trainer Name:");
        if (name) {
            db.ref('leaderboard').push({ name, score: finalScore, time: Date.now() });
        }
    }
}

function loadLeaderboard() {
    db.ref('leaderboard').orderByChild('score').on('value', snap => {
        const lbBody = document.getElementById('leaderboard-body');
        let scores = [];
        snap.forEach(c => {
            scores.push({key: c.key, ...c.val()});
        });
        scores.sort((a,b) => b.score - a.score);
        
        // AUTO-DELETE Logic: Keep only top 5 in database
        if (scores.length > 5) {
            for (let i = 5; i < scores.length; i++) {
                db.ref('leaderboard').child(scores[i].key).remove();
            }
            scores = scores.slice(0, 5);
        }

        lbBody.innerHTML = '';
        scores.forEach((e, i) => {
            lbBody.innerHTML += `<tr><td>#${i+1}</td><td>${e.name.toUpperCase()}</td><td>${e.score}</td></tr>`;
        });
    });
}

closeModal.onclick = () => modal.classList.remove('active');
window.onclick = (e) => { if(e.target === modal) modal.classList.remove('active'); }
document.getElementById('pkmn-search').addEventListener('keypress', (e) => { if (e.key === 'Enter') handleSearch(); });

changeGen(1, 151, 'Gen 1');
initGame();
loadLeaderboard();
