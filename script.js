const grid = document.getElementById('pokemon-grid');
const modal = document.getElementById('detail-modal');
const closeModal = document.getElementById('close-modal');

let score = 0; let best = 0;

// --- POKEDEX ---
async function changeGen(start, end, title, region, btn) {
    document.getElementById('pokedex-title').textContent = title;
    document.querySelectorAll('.gen-btn').forEach(b => b.classList.remove('active'));
    if(btn) btn.classList.add('active');

    grid.innerHTML = '<p>Searching tall grass...</p>';
    const promises = [];
    for (let i = start; i <= end; i++) {
        promises.push(fetch(`https://pokeapi.co/api/v2/pokemon/${i}`).then(res => res.json()));
    }
    const list = await Promise.all(promises);
    grid.innerHTML = '';
    list.forEach(pkmn => {
        const card = document.createElement('div');
        card.className = 'pokemon-card';
        card.innerHTML = `<img src="${pkmn.sprites.front_default}"><h3>${pkmn.name.toUpperCase()}</h3>`;
        card.onclick = () => openModal(pkmn);
        grid.appendChild(card);
    });
}

function openModal(pkmn) {
    document.getElementById('detail-name').textContent = pkmn.name.toUpperCase();
    document.getElementById('detail-image').src = pkmn.sprites.other['official-artwork'].front_default;
    document.getElementById('stat-hp').textContent = pkmn.stats[0].base_stat;
    document.getElementById('stat-attack').textContent = pkmn.stats[1].base_stat;
    document.getElementById('stat-defense').textContent = pkmn.stats[2].base_stat;
    modal.classList.add('active');
}

// --- CATCH ANIMATION ---
function throwPokeball() {
    const ball = document.getElementById('flying-pokeball');
    ball.classList.remove('hidden');
    ball.style.top = "90%";
    ball.style.left = "50%";
    ball.style.opacity = "1";

    setTimeout(() => {
        ball.style.transform = "translateY(-400px) rotate(720deg) scale(1.5)";
    }, 50);

    setTimeout(() => {
        ball.style.opacity = "0";
        setTimeout(() => {
            ball.classList.add('hidden');
            ball.style.transform = "none";
            alert("Gotcha! Pokemon was caught!");
            modal.classList.remove('active');
        }, 300);
    }, 800);
}

// --- GAME LOGIC ---
async function initGame() {
    const options = document.getElementById('game-options');
    const img = document.getElementById('game-image');
    const feedback = document.getElementById('game-feedback');
    img.classList.remove('revealed'); feedback.textContent = "";

    const randomId = Math.floor(Math.random() * 493) + 1;
    const pkmn = await fetch(`https://pokeapi.co/api/v2/pokemon/${randomId}`).then(r => r.json());
    const correctName = pkmn.name.toUpperCase();
    img.src = pkmn.sprites.other['official-artwork'].front_default;
    options.innerHTML = '';

    let choices = [correctName];
    while(choices.length < 4) {
        let randId = Math.floor(Math.random() * 493) + 1;
        let dummy = await fetch(`https://pokeapi.co/api/v2/pokemon/${randId}`).then(r => r.json());
        if(!choices.includes(dummy.name.toUpperCase())) choices.push(dummy.name.toUpperCase());
    }

    choices.sort(() => Math.random() - 0.5).forEach(choice => {
        const btn = document.createElement('button');
        btn.textContent = choice;
        btn.onclick = () => {
            img.classList.add('revealed');
            if(choice === correctName) {
                score++; feedback.textContent = "CORRECT!";
                if(score > best) best = score;
            } else { score = 0; feedback.textContent = "WRONG!"; }
            document.getElementById('current-score').textContent = score;
            document.getElementById('high-score').textContent = best;
            setTimeout(initGame, 2000);
        };
        options.appendChild(btn);
    });
}

// Navigation
closeModal.onclick = () => modal.classList.remove('active');
document.querySelectorAll('.nav-link').forEach(link => {
    link.onclick = (e) => {
        e.preventDefault();
        document.querySelectorAll('.nav-link, .page-section').forEach(el => el.classList.remove('active'));
        link.classList.add('active');
        document.getElementById(link.dataset.target).classList.add('active');
    };
});

changeGen(1, 151, 'Generation 1', 'Kanto');
initGame();
