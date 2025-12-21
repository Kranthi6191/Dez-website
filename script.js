// Global Selectors
const grid = document.getElementById('pokemon-grid');
const modal = document.getElementById('detail-modal');
const closeModal = document.getElementById('close-modal');

// Game Tracking
let streak = 0;
let best = 0;

// --- POKEDEX FUNCTIONALITY ---
async function changeGen(start, end, title, region, btn) {
    document.getElementById('pokedex-title').textContent = title;
    document.getElementById('pokedex-subtitle').textContent = `${region} Region Encyclopedia`;
    
    document.querySelectorAll('.gen-btn').forEach(b => b.classList.remove('active'));
    if(btn) btn.classList.add('active');

    grid.innerHTML = '<p>Loading Pokedex...</p>';

    try {
        const promises = [];
        for (let i = start; i <= end; i++) {
            promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json()));
        }
        const pokemonList = await Promise.all(promises);
        grid.innerHTML = '';
        
        pokemonList.forEach(pokemon => {
            const card = document.createElement('div');
            card.className = 'pokemon-card';
            card.innerHTML = `
                <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
                <h3>${pokemon.name.toUpperCase()}</h3>
                <p>#${pokemon.id}</p>
            `;
            card.onclick = () => openModal(pokemon);
            grid.appendChild(card);
        });
    } catch (err) {
        grid.innerHTML = '<p>Oops! Failed to load data.</p>';
    }
}

function openModal(pokemon) {
    document.getElementById('detail-name').textContent = pokemon.name.toUpperCase();
    document.getElementById('detail-image').src = pokemon.sprites.other['official-artwork'].front_default;
    document.getElementById('detail-id').textContent = pokemon.id;
    document.getElementById('detail-type').textContent = pokemon.types.map(t => t.type.name.toUpperCase()).join(' / ');
    
    document.getElementById('stat-hp').textContent = pokemon.stats[0].base_stat;
    document.getElementById('stat-attack').textContent = pokemon.stats[1].base_stat;
    document.getElementById('stat-defense').textContent = pokemon.stats[2].base_stat;
    
    modal.classList.add('active');
}

// --- MINI GAME FUNCTIONALITY ---
async function initGame() {
    const feedback = document.getElementById('game-feedback');
    const optionsContainer = document.getElementById('game-options');
    const gameImg = document.getElementById('game-image');
    
    optionsContainer.innerHTML = '<span>Scanning tall grass...</span>';
    gameImg.classList.remove('revealed');
    feedback.textContent = "";

    // Pick random Pokemon from all generations (up to 898)
    const randomId = Math.floor(Math.random() * 898) + 1;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    const pokemon = await res.json();
    const correctName = pokemon.name.toUpperCase();

    gameImg.src = pokemon.sprites.other['official-artwork'].front_default;
    optionsContainer.innerHTML = '';

    // Fetch 3 other real names for options
    let choices = [correctName];
    while(choices.length < 4) {
        const dummyId = Math.floor(Math.random() * 898) + 1;
        if(dummyId !== randomId) {
            const dummyRes = await fetch(`https://pokeapi.co/api/v2/pokemon/${dummyId}`);
            const dummyPkmn = await dummyRes.json();
            const dummyName = dummyPkmn.name.toUpperCase();
            if(!choices.includes(dummyName)) choices.push(dummyName);
        }
    }

    // Shuffle and Create Buttons
    choices.sort(() => Math.random() - 0.5).forEach(choice => {
        const btn = document.createElement('button');
        btn.textContent = choice;
        btn.onclick = () => {
            gameImg.classList.add('revealed');
            // Disable buttons after choice
            document.querySelectorAll('#game-options button').forEach(b => b.disabled = true);
            
            if(choice === correctName) {
                streak++;
                feedback.textContent = `Correct! It's ${correctName}!`;
                feedback.style.color = "var(--success)";
                if(streak > best) best = streak;
            } else {
                streak = 0;
                feedback.textContent = `Incorrect! It was ${correctName}.`;
                feedback.style.color = "var(--accent)";
            }
            
            updateScoreUI();
            setTimeout(initGame, 2500); // Start next round
        };
        optionsContainer.appendChild(btn);
    });
}

function updateScoreUI() {
    document.getElementById('current-score').textContent = streak;
    document.getElementById('high-score').textContent = best;
}

// --- GLOBAL NAVIGATION & EVENT LISTENERS ---
closeModal.onclick = () => modal.classList.remove('active');
window.onclick = (e) => { if(e.target === modal) modal.classList.remove('active'); };

document.querySelectorAll('.nav-link').forEach(link => {
    link.onclick = (e) => {
        e.preventDefault();
        document.querySelectorAll('.nav-link, .page-section').forEach(el => el.classList.remove('active'));
        link.classList.add('active');
        document.getElementById(link.dataset.target).classList.add('active');
    };
});

// Start the Pokedex on Gen 1 and start the Game
changeGen(1, 151, 'Generation 1', 'Kanto');
initGame();
