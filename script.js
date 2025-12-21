// --- CONFIGURATION ---
const POKEMON_COUNT = 151;
const grid = document.getElementById('pokemon-grid');
const modal = document.getElementById('detail-modal');
const closeModal = document.getElementById('close-modal');

// --- MODAL ELEMENTS ---
const detailName = document.getElementById('detail-name');
const detailImg = document.getElementById('detail-image');
const detailId = document.getElementById('detail-id');
const detailType = document.getElementById('detail-type');
const detailDesc = document.getElementById('detail-description');

// Stat Slots
const hpStat = document.getElementById('stat-hp');
const attackStat = document.getElementById('stat-attack');
const defenseStat = document.getElementById('stat-defense');

// --- 1. FETCH & RENDER DATA ---
async function initPokedex() {
    grid.innerHTML = '<p style="color: white; grid-column: 1/-1; text-align: center;">Loading Kanto Pokedex...</p>';
    
    try {
        // We fetch all 151 in order
        for (let i = 1; i <= POKEMON_COUNT; i++) {
            const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
            const pokemon = await response.json();
            createCard(pokemon);
        }
        // Remove loading text once finished
        const loadingMsg = grid.querySelector('p');
        if (loadingMsg) loadingMsg.remove();
        
    } catch (error) {
        console.error("Error loading Pokemon:", error);
        grid.innerHTML = '<p style="color: red;">Failed to load Pokedex. Please refresh.</p>';
    }
}

// --- 2. CREATE CARD UI ---
function createCard(pokemon) {
    const card = document.createElement('div');
    card.classList.add('pokemon-card');
    
    const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    
    // Using the official high-quality artwork for the cards
    card.innerHTML = `
        <img src="${pokemon.sprites.front_default}" alt="${name}" loading="lazy">
        <h2>${name}</h2>
        <p>ID: #${pokemon.id}</p>
    `;
    
    card.addEventListener('click', () => openModal(pokemon));
    grid.appendChild(card);
}

// --- 3. MODAL LOGIC (THE STATS) ---
function openModal(pokemon) {
    const name = pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1);
    
    // Basic Info
    detailName.textContent = name;
    detailId.textContent = pokemon.id;
    detailType.textContent = pokemon.types.map(t => t.type.name.toUpperCase()).join(' / ');
    detailDesc.textContent = `A powerful Pokémon from the Kanto region. Base stats are listed below:`;
    
    // Images (Official Artwork looks better in modals)
    detailImg.src = pokemon.sprites.other['official-artwork'].front_default || pokemon.sprites.front_default;
    
    // Map Stats from API (Index 0=HP, 1=Attack, 2=Defense)
    hpStat.textContent = pokemon.stats[0].base_stat;
    attackStat.textContent = pokemon.stats[1].base_stat;
    defenseStat.textContent = pokemon.stats[2].base_stat;

    modal.classList.add('active');
}

// --- 4. NAVIGATION & CLOSING ---

// Close Modal Events
closeModal.addEventListener('click', () => modal.classList.remove('active'));

window.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
});

// Navigation Logic
const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page-section');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // Toggle Active Link
        navLinks.forEach(nav => nav.classList.remove('active'));
        link.classList.add('active');

        // Toggle Active Page
        pages.forEach(page => page.classList.remove('active'));
        const targetId = link.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});

// --- INITIALIZE ---
initPokedex();
