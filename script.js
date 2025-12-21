const grid = document.getElementById('pokemon-grid');
const modal = document.getElementById('detail-modal');
const closeModal = document.getElementById('close-modal');

// --- POKEDEX LOGIC ---

async function changeGen(start, end, title, region, btn) {
    // UI Updates
    document.getElementById('pokedex-title').textContent = title;
    document.getElementById('pokedex-subtitle').textContent = `${region} Region Encyclopedia`;
    
    document.querySelectorAll('.gen-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');

    grid.innerHTML = '<p style="grid-column: 1/-1;">Loading Pokemon...</p>';

    try {
        // Fetch all pokemon in the range at once for speed
        const promises = [];
        for (let i = start; i <= end; i++) {
            promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json()));
        }
        
        const pokemonList = await Promise.all(promises);
        grid.innerHTML = '';
        
        pokemonList.forEach(pokemon => {
            const card = document.createElement('div');
            card.className = 'pokemon-card';
            const name = pokemon.name.toUpperCase();
            
            card.innerHTML = `
                <img src="${pokemon.sprites.front_default}" alt="${name}">
                <h2>${name}</h2>
                <p>ID: #${pokemon.id}</p>
            `;
            card.onclick = () => openModal(pokemon);
            grid.appendChild(card);
        });
    } catch (err) {
        grid.innerHTML = '<p>Error loading data.</p>';
    }
}

function openModal(pokemon) {
    document.getElementById('detail-name').textContent = pokemon.name.toUpperCase();
    document.getElementById('detail-id').textContent = pokemon.id;
    document.getElementById('detail-type').textContent = pokemon.types.map(t => t.type.name.toUpperCase()).join(' / ');
    document.getElementById('detail-image').src = pokemon.sprites.other['official-artwork'].front_default;
    
    document.getElementById('stat-hp').textContent = pokemon.stats[0].base_stat;
    document.getElementById('stat-attack').textContent = pokemon.stats[1].base_stat;
    document.getElementById('stat-defense').textContent = pokemon.stats[2].base_stat;
    
    modal.classList.add('active');
}

// --- MINI GAME LOGIC ---

async function initGame() {
    const feedback = document.getElementById('game-feedback');
    const optionsContainer = document.getElementById('game-options');
    const gameImg = document.getElementById('game-image');
    
    feedback.textContent = "Loading mystery Pokemon...";
    optionsContainer.innerHTML = '';
    gameImg.classList.remove('revealed');

    // Pick random Pokemon from first 151
    const randomId = Math.floor(Math.random() * 151) + 1;
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`);
    const pokemon = await res.json();
    const correctName = pokemon.name.toUpperCase();

    gameImg.src = pokemon.sprites.other['official-artwork'].front_default;
    feedback.textContent = "";

    // Generate 4 options
    let choices = [correctName];
    while(choices.length < 4) {
        const dummyId = Math.floor(Math.random() * 151) + 1;
        if(dummyId !== randomId) {
            // Usually we'd fetch names, but for speed we'll use a pre-set list or simple randoms
            choices.push(`PKMN_${dummyId}`); 
        }
    }

    choices.sort(() => Math.random() - 0.5).forEach(choice => {
        const btn = document.createElement('button');
        btn.textContent = choice === `PKMN_${choice.split('_')[1]}` ? "???" : choice; 
        // Real logic would fetch 3 other names, but for now we mark them as ??? or dummy text
        
        btn.onclick = () => {
            gameImg.classList.add('revealed');
            if(choice === correctName) {
                feedback.textContent = "Correct! It's " + correctName;
                feedback.style.color = "green";
            } else {
                feedback.textContent = "Wrong! It was " + correctName;
                feedback.style.color = "red";
            }
            setTimeout(initGame, 3000); // Reset after 3 seconds
        };
        optionsContainer.appendChild(btn);
    });
}

// --- GLOBAL NAVIGATION ---

closeModal.onclick = () => modal.classList.remove('active');

document.querySelectorAll('.nav-link').forEach(link => {
    link.onclick = (e) => {
        e.preventDefault();
        document.querySelectorAll('.nav-link').forEach(n => n.classList.remove('active'));
        document.querySelectorAll('.page-section').forEach(p => p.classList.remove('active'));
        
        link.classList.add('active');
        document.getElementById(link.dataset.target).classList.add('active');
    };
});

// Start
changeGen(1, 151, 'Generation 1', 'Kanto', document.querySelector('.gen-btn'));
initGame();
