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

function switchPage(id) {
  document.querySelectorAll('.page-section').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-link').forEach(l => l.classList.remove('active'));
  document.getElementById(id).classList.add('active');
  document.querySelector(`[data-target="${id}"]`)?.classList.add('active');
}

async function handleSearch() {
  const q = document.getElementById('pkmn-search').value.trim().toLowerCase();
  if (!q) return;
  document.getElementById('summon-overlay').classList.remove('hidden');
  try {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${q}`);
    if (!res.ok) throw new Error();
    const pkmn = await res.json();
    setTimeout(() => {
      document.getElementById('summon-overlay').classList.add('hidden');
      openModal(pkmn);
    }, 700);
  } catch {
    document.getElementById('summon-overlay').classList.add('hidden');
    alert('Pokémon not found');
  }
}

function summonPokemon(p) {
  document.getElementById('summon-overlay').classList.remove('hidden');
  setTimeout(() => {
    document.getElementById('summon-overlay').classList.add('hidden');
    openModal(p);
  }, 700);
}

function openModal(p) {
  document.getElementById('detail-name').textContent = p.name.toUpperCase();
  document.getElementById('detail-image').src =
    p.sprites.other['official-artwork'].front_default || p.sprites.front_default;
  document.getElementById('detail-id').textContent = p.id;
  document.getElementById('detail-type').textContent =
    p.types.map(t => t.type.name).join(', ').toUpperCase();
  document.getElementById('stat-hp').textContent = p.stats[0].base_stat;
  document.getElementById('stat-attack').textContent = p.stats[1].base_stat;
  document.getElementById('stat-defense').textContent = p.stats[2].base_stat;
  document.getElementById('detail-modal').style.display = 'flex';
}

function closeM() {
  document.getElementById('detail-modal').style.display = 'none';
}

function toggleTheme() {
  document.body.classList.toggle('night-mode');
  document.getElementById('theme-toggle').textContent =
    document.body.classList.contains('night-mode') ? '☀️ Day Mode' : '🌙 Night Mode';
}

async function changeGen(start, end, btn) {
  document.querySelectorAll('.gen-tab').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
  const grid = document.getElementById('pokemon-grid');
  grid.innerHTML = '<p>Searching tall grass...</p>';
  const cards = [];
  for (let i = start; i <= end; i++) {
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
    const p = await res.json();
    cards.push(`
      <div class="pokemon-card" onclick="summonPokemon(${JSON.stringify(p).replace(/"/g,'&quot;')})">
        <img src="${p.sprites.front_default}">
        <h3>${p.name.toUpperCase()}</h3>
      </div>
    `);
  }
  grid.innerHTML = cards.join('');
}

changeGen(1,151,document.querySelector('.gen-tab'));
