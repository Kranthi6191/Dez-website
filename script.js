// --- DATA (Full Gen 1 List: 1-151) ---
const pokemonData = [
  {
    id: 1,
    name: "Bulbasaur",
    type: "Grass/Poison",
    description: "A strange seed was planted on its back at birth. The plant sprouts and grows larger as it grows.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    stats: { hp: 45, attack: 49, defense: 49 },
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"]
  },
  {
    id: 2,
    name: "Ivysaur",
    type: "Grass/Poison",
    description: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    stats: { hp: 60, attack: 62, defense: 63 },
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"]
  },
  {
    id: 3,
    name: "Venusaur",
    type: "Grass/Poison",
    description: "The plant on its back blooms when it absorbs solar energy. It stays on the move to seek light.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    stats: { hp: 80, attack: 82, defense: 83 },
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"]
  },
  {
    id: 4,
    name: "Charmander",
    type: "Fire",
    description: "The flame at the tip of its tail is an indication of its health. If it is healthy, the flame burns brightly.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    stats: { hp: 39, attack: 52, defense: 43 },
    weaknesses: ["Water", "Ground", "Rock"]
  },
  {
    id: 5,
    name: "Charmeleon",
    type: "Fire",
    description: "It has a barbaric nature. In battle, it whips its flaming tail around and slashes with sharp claws.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    stats: { hp: 58, attack: 64, defense: 58 },
    weaknesses: ["Water", "Ground", "Rock"]
  },
  {
    id: 6,
    name: "Charizard",
    type: "Fire/Flying",
    description: "A Charizard flies about in search of powerful opponents. It breathes fire of such great heat that it melts anything.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    stats: { hp: 78, attack: 84, defense: 78 },
    weaknesses: ["Water", "Electric", "Rock"]
  },
  {
    id: 7,
    name: "Squirtle",
    type: "Water",
    description: "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    stats: { hp: 44, attack: 48, defense: 65 },
    weaknesses: ["Electric", "Grass"]
  },
  {
    id: 8,
    name: "Wartortle",
    type: "Water",
    description: "It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    stats: { hp: 59, attack: 63, defense: 80 },
    weaknesses: ["Electric", "Grass"]
  },
  {
    id: 9,
    name: "Blastoise",
    type: "Water",
    description: "A brutal Pokémon with a cannon on its shell. The cannon's water jet can smash concrete walls.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    stats: { hp: 79, attack: 83, defense: 100 },
    weaknesses: ["Electric", "Grass"]
  },
  {
    id: 10,
    name: "Caterpie",
    type: "Bug",
    description: "For protection, it releases a horrible stench from the antenna on its head to drive away enemies.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    stats: { hp: 45, attack: 30, defense: 35 },
    weaknesses: ["Fire", "Flying", "Rock"]
  },
  {
    id: 11,
    name: "Metapod",
    type: "Bug",
    description: "It is waiting for the moment to evolve. In this quiet stage, it will only harden its shell if it is attacked.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    stats: { hp: 50, attack: 20, defense: 55 },
    weaknesses: ["Fire", "Flying", "Rock"]
  },
  {
    id: 12,
    name: "Butterfree",
    type: "Bug/Flying",
    description: "It loves the honey of flowers and can locate flower patches that have even the tiniest amount of pollen.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    stats: { hp: 60, attack: 45, defense: 50 },
    weaknesses: ["Fire", "Electric", "Ice", "Flying", "Rock"]
  },
  {
    id: 13,
    name: "Weedle",
    type: "Bug/Poison",
    description: "It attacks using the sharp, two-inch poison barb on its head. It eats its weight in leaves every day.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
    stats: { hp: 40, attack: 35, defense: 30 },
    weaknesses: ["Fire", "Flying", "Psychic", "Rock"]
  },
  {
    id: 14,
    name: "Kakuna",
    type: "Bug/Poison",
    description: "Able to move only slightly. When endangered, it may stick out its stinger and fiercely poison its foe.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
    stats: { hp: 45, attack: 25, defense: 50 },
    weaknesses: ["Fire", "Flying", "Psychic", "Rock"]
  },
  {
    id: 15,
    name: "Beedrill",
    type: "Bug/Poison",
    description: "It has three poison stingers, one on its tail and one on each of its two large forearms.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
    stats: { hp: 65, attack: 90, defense: 40 },
    weaknesses: ["Fire", "Flying", "Psychic", "Rock"]
  },
  {
    id: 16,
    name: "Pidgey",
    type: "Normal/Flying",
    description: "It is docile and prefers to avoid conflict. If disturbed, however, it can ferociously strike back.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
    stats: { hp: 40, attack: 45, defense: 40 },
    weaknesses: ["Electric", "Ice", "Rock"]
  },
  {
    id: 17,
    name: "Pidgeotto",
    type: "Normal/Flying",
    description: "This Pokémon flies at a speed of Mach 2, creating a powerful draft that can bend trees.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
    stats: { hp: 63, attack: 60, defense: 55 },
    weaknesses: ["Electric", "Ice", "Rock"]
  },
  {
    id: 18,
    name: "Pidgeot",
    type: "Normal/Flying",
    description: "Its strong wings can carry it at Mach 2 speed. It is a beautiful sight when it flies at full tilt.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
    stats: { hp: 83, attack: 80, defense: 75 },
    weaknesses: ["Electric", "Ice", "Rock"]
  },
  {
    id: 19,
    name: "Rattata",
    type: "Normal",
    description: "Its hard fangs grow continually. If it doesn't gnaw on something, they will become too long.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    stats: { hp: 30, attack: 56, defense: 35 },
    weaknesses: ["Fighting"]
  },
  {
    id: 20,
    name: "Raticate",
    type: "Normal",
    description: "Its hind feet are webbed. They are used for swimming, so it can also acquire prey from water.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
    stats: { hp: 55, attack: 81, defense: 60 },
    weaknesses: ["Fighting"]
  },
  {
    id: 21,
    name: "Spearow",
    type: "Normal/Flying",
    description: "Inept at flying high. However, it can fly around very fast to protect its territory.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
    stats: { hp: 40, attack: 60, defense: 30 },
    weaknesses: ["Electric", "Ice", "Rock"]
  },
  {
    id: 22,
    name: "Fearow",
    type: "Normal/Flying",
    description: "A Pokémon that makes a great migratory bird. It will never let down its guard from the sky.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
    stats: { hp: 65, attack: 90, defense: 65 },
    weaknesses: ["Electric", "Ice", "Rock"]
  },
  {
    id: 23,
    name: "Ekans",
    type: "Poison",
    description: "It is highly likely to be hiding in short grass, looking for a chance to strike at unwary prey.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
    stats: { hp: 35, attack: 60, defense: 44 },
    weaknesses: ["Ground", "Psychic"]
  },
  {
    id: 24,
    name: "Arbok",
    type: "Poison",
    description: "The pattern on its belly is said to have six variations. Each is said to represent a different species.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
    stats: { hp: 60, attack: 95, defense: 69 },
    weaknesses: ["Ground", "Psychic"]
  },
  {
    id: 25,
    name: "Pikachu",
    type: "Electric",
    description: "It lives in forests and generates electricity in the pouches on its cheeks.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    stats: { hp: 35, attack: 55, defense: 40 },
    weaknesses: ["Ground"]
  },
  {
    id: 26,
    name: "Raichu",
    type: "Electric",
    description: "It can store up to 100,000 volts of electricity in its body, giving off a light glow.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
    stats: { hp: 60, attack: 90, defense: 55 },
    weaknesses: ["Ground"]
  },
  {
    id: 27,
    name: "Sandshrew",
    type: "Ground",
    description: "Its body is dry skin. When it curls up in a ball, it is protected from all attack.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
    stats: { hp: 50, attack: 75, defense: 85 },
    weaknesses: ["Water", "Grass", "Ice"]
  },
  {
    id: 28,
    name: "Sandslash",
    type: "Ground",
    description: "Its body is covered with sharp spines, which it uses to attack when threatened.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
    stats: { hp: 75, attack: 100, defense: 110 },
    weaknesses: ["Water", "Grass", "Ice"]
  },
  {
    id: 29,
    name: "Nidoran♀",
    type: "Poison",
    description: "Although small, it is surprisingly powerful. It uses its spikes to ward off enemies.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
    stats: { hp: 55, attack: 47, defense: 52 },
    weaknesses: ["Ground", "Psychic"]
  },
  {
    id: 30,
    name: "Nidorina",
    type: "Poison",
    description: "The female's horn develops slowly. Prefers not to fight since the tips of its horns won't grow back if broken.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
    stats: { hp: 70, attack: 62, defense: 67 },
    weaknesses: ["Ground", "Psychic"]
  },
  {
    id: 31,
    name: "Nidoqueen",
    type: "Poison/Ground",
    description: "Its hard, scale-covered body is like armor. It uses its power to crush its foes.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
    stats: { hp: 90, attack: 92, defense: 87 },
    weaknesses: ["Water", "Ice", "Ground", "Psychic"]
  },
  {
    id: 32,
    name: "Nidoran♂",
    type: "Poison",
    description: "The male's horn is hard as diamond. It is always listening with its large ears.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
    stats: { hp: 46, attack: 57, defense: 40 },
    weaknesses: ["Ground", "Psychic"]
  },
  {
    id: 33,
    name: "Nidorino",
    type: "Poison",
    description: "An aggressive Pokémon that is quick to attack. The horn on its head is thicker than Nidoran's.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
    stats: { hp: 61, attack: 72, defense: 57 },
    weaknesses: ["Ground", "Psychic"]
  },
  {
    id: 34,
    name: "Nidoking",
    type: "Poison/Ground",
    description: "It is recognized by its thick tail and fearsome horn. It is so powerful, it can topple a tower.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
    stats: { hp: 81, attack: 102, defense: 77 },
    weaknesses: ["Water", "Ice", "Ground", "Psychic"]
  },
  {
    id: 35,
    name: "Clefairy",
    type: "Fairy",
    description: "It is said that happiness will come to anyone who sees a gathering of Clefairy dancing under a full moon.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
    stats: { hp: 70, attack: 45, defense: 48 },
    weaknesses: ["Poison", "Steel"]
  },
  {
    id: 36,
    name: "Clefable",
    type: "Fairy",
    description: "A timid Pokémon that is rarely seen, it will flee instantly if it senses people approaching.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
    stats: { hp: 95, attack: 70, defense: 73 },
    weaknesses: ["Poison", "Steel"]
  },
  {
    id: 37,
    name: "Vulpix",
    type: "Fire",
    description: "At the time of its birth, it has just one tail. The tail splits from the tip as it grows older.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
    stats: { hp: 38, attack: 41, defense: 40 },
    weaknesses: ["Water", "Ground", "Rock"]
  },
  {
    id: 38,
    name: "Ninetales",
    type: "Fire",
    description: "It is said to live for 1,000 years, and each of its tails is imbued with a different psychic power.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
    stats: { hp: 73, attack: 76, defense: 75 },
    weaknesses: ["Water", "Ground", "Rock"]
  },
  {
    id: 39,
    name: "Jigglypuff",
    type: "Normal/Fairy",
    description: "When its huge eyes waver, it is singing a mysteriously soothing melody that lulls its enemies to sleep.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
    stats: { hp: 115, attack: 45, defense: 20 },
    weaknesses: ["Poison", "Steel"]
  },
  {
    id: 40,
    name: "Wigglytuff",
    type: "Normal/Fairy",
    description: "Its soft and rubbery body expands and contracts like a balloon. It can move with a light, bouncy motion.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
    stats: { hp: 140, attack: 70, defense: 45 },
    weaknesses: ["Poison", "Steel"]
  },
  {
    id: 41,
    name: "Zubat",
    type: "Poison/Flying",
    description: "It emits ultrasonic cries while flying, but it can find its way even in the darkest caves.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
    stats: { hp: 40, attack: 45, defense: 35 },
    weaknesses: ["Electric", "Ice", "Psychic", "Rock"]
  },
  {
    id: 42,
    name: "Golbat",
    type: "Poison/Flying",
    description: "Once it starts sucking blood, it will not stop until it is full, even if the prey is a larger Pokémon.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
    stats: { hp: 75, attack: 80, defense: 70 },
    weaknesses: ["Electric", "Ice", "Psychic", "Rock"]
  },
  {
    id: 43,
    name: "Oddish",
    type: "Grass/Poison",
    description: "During the day, it keeps its face buried in the ground. At night, it wanders around to sow its seeds.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
    stats: { hp: 45, attack: 50, defense: 55 },
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"]
  },
  {
    id: 44,
    name: "Gloom",
    type: "Grass/Poison",
    description: "A horrible smell is always wafting from its mouth. It is so powerful, it can knock out a trainer.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
    stats: { hp: 60, attack: 65, defense: 70 },
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"]
  },
  {
    id: 45,
    name: "Vileplume",
    type: "Grass/Poison",
    description: "The larger its petals, the more poisonous its pollen. It will scatter it to paralyze its foe.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
    stats: { hp: 75, attack: 80, defense: 85 },
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"]
  },
  {
    id: 46,
    name: "Paras",
    type: "Bug/Grass",
    description: "The mushrooms on its back are called tochukaso. They grow on the bug and steal nutrients from it.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
    stats: { hp: 35, attack: 70, defense: 55 },
    weaknesses: ["Fire", "Ice", "Poison", "Flying", "Bug", "Rock"]
  },
  {
    id: 47,
    name: "Parasect",
    type: "Bug/Grass",
    description: "A bug-type Pokémon with a parasitic mushroom that has taken over the host. It is mostly silent.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
    stats: { hp: 60, attack: 95, defense: 80 },
    weaknesses: ["Fire", "Ice", "Poison", "Flying", "Bug", "Rock"]
  },
  {
    id: 48,
    name: "Venonat",
    type: "Bug/Poison",
    description: "Its large, bug eyes act as radar. They can check out its surroundings 360 degrees, even in the dark.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
    stats: { hp: 60, attack: 55, defense: 50 },
    weaknesses: ["Fire", "Flying", "Psychic", "Rock"]
  },
  {
    id: 49,
    name: "Venomoth",
    type: "Bug/Poison",
    description: "It scatters highly toxic dust from its large wings. It is found at night in grassy areas.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
    stats: { hp: 70, attack: 65, defense: 60 },
    weaknesses: ["Fire", "Flying", "Psychic", "Rock"]
  },
  {
    id: 50,
    name: "Diglett",
    type: "Ground",
    description: "A Pokémon that lives underground. Because it spends its life below the surface, it is rarely seen.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
    stats: { hp: 10, attack: 55, defense: 25 },
    weaknesses: ["Water", "Grass", "Ice"]
  },
  {
    id: 51,
    name: "Dugtrio",
    type: "Ground",
    description: "These triplets move at high speeds, twisting and turning, to cause the ground to tremble and shake.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
    stats: { hp: 35, attack: 100, defense: 50 },
    weaknesses: ["Water", "Grass", "Ice"]
  },
  {
    id: 52,
    name: "Meowth",
    type: "Normal",
    description: "It sleeps all day, then prowls at night, hunting for coins or other round, shiny objects.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
    stats: { hp: 40, attack: 45, defense: 35 },
    weaknesses: ["Fighting"]
  },
  {
    id: 53,
    name: "Persian",
    type: "Normal",
    description: "Its magnificent coat of fur is a symbol of status. It is a very haughty and proud Pokémon.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
    stats: { hp: 65, attack: 70, defense: 60 },
    weaknesses: ["Fighting"]
  },
  {
    id: 54,
    name: "Psyduck",
    type: "Water",
    description: "It is constantly wracked by a headache. It uses psychic power when the headache gets too intense.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
    stats: { hp: 50, attack: 52, defense: 48 },
    weaknesses: ["Electric", "Grass"]
  },
  {
    id: 55,
    name: "Golduck",
    type: "Water",
    description: "It is said that this Pokémon's psychic power is amplified when it is swimming in a lake or river.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
    stats: { hp: 80, attack: 82, defense: 78 },
    weaknesses: ["Electric", "Grass"]
  },
  {
    id: 56,
    name: "Mankey",
    type: "Fighting",
    description: "It lives in tree colonies. If one starts to shake, the whole colony will become agitated.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
    stats: { hp: 40, attack: 80, defense: 35 },
    weaknesses: ["Flying", "Psychic", "Fairy"]
  },
  {
    id: 57,
    name: "Primeape",
    type: "Fighting",
    description: "It is always mad. Stomping, squealing, and thrashing its arms are all signs of its incredible anger.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
    stats: { hp: 65, attack: 105, defense: 60 },
    weaknesses: ["Flying", "Psychic", "Fairy"]
  },
  {
    id: 58,
    name: "Growlithe",
    type: "Fire",
    description: "A Pokémon with a loyal nature. It will fiercely protect its Trainer from harm.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
    stats: { hp: 55, attack: 70, defense: 45 },
    weaknesses: ["Water", "Ground", "Rock"]
  },
  {
    id: 59,
    name: "Arcanine",
    type: "Fire",
    description: "A legendary Pokémon. Its speed is said to be so fast, it can run 6,200 miles in a single day.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
    stats: { hp: 90, attack: 110, defense: 80 },
    weaknesses: ["Water", "Ground", "Rock"]
  },
  {
    id: 60,
    name: "Poliwag",
    type: "Water",
    description: "The spiral pattern on its belly appears to be its internal organs, which are clearly visible through its skin.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
    stats: { hp: 40, attack: 50, defense: 40 },
    weaknesses: ["Electric", "Grass"]
  },
  {
    id: 61,
    name: "Poliwhirl",
    type: "Water",
    description: "Its body is constantly moist. It is a powerful swimmer that can easily swim across an ocean.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
    stats: { hp: 65, attack: 65, defense: 65 },
    weaknesses: ["Electric", "Grass"]
  },
  {
    id: 62,
    name: "Poliwrath",
    type: "Water/Fighting",
    description: "An incredibly skilled swimmer. It can swim even in the most turbulent, freezing seas.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
    stats: { hp: 90, attack: 95, defense: 95 },
    weaknesses: ["Electric", "Grass", "Flying", "Psychic", "Fairy"]
  },
  {
    id: 63,
    name: "Abra",
    type: "Psychic",
    description: "If it decides to teleport randomly, it can sometimes get lost in the middle of nowhere.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
    stats: { hp: 25, attack: 20, defense: 15 },
    weaknesses: ["Bug", "Ghost", "Dark"]
  },
  {
    id: 64,
    name: "Kadabra",
    type: "Psychic",
    description: "If it uses its powers, it emits an alpha wave that makes the heads of people nearby ache.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
    stats: { hp: 40, attack: 35, defense: 30 },
    weaknesses: ["Bug", "Ghost", "Dark"]
  },
  {
    id: 65,
    name: "Alakazam",
    type: "Psychic",
    description: "It's able to use psychic power to calculate the trajectory of every battle move it makes.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
    stats: { hp: 55, attack: 50, defense: 45 },
    weaknesses: ["Bug", "Ghost", "Dark"]
  },
  {
    id: 66,
    name: "Machop",
    type: "Fighting",
    description: "Always strives to get stronger, practicing all kinds of martial arts until its muscles are solid rock.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
    stats: { hp: 70, attack: 80, defense: 50 },
    weaknesses: ["Flying", "Psychic", "Fairy"]
  },
  {
    id: 67,
    name: "Machoke",
    type: "Fighting",
    description: "It is so powerful, it can lift a sumo wrestler with one hand. Its belt prevents it from using its full power.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
    stats: { hp: 80, attack: 100, defense: 70 },
    weaknesses: ["Flying", "Psychic", "Fairy"]
  },
  {
    id: 68,
    name: "Machamp",
    type: "Fighting",
    description: "Its four arms are always moving. It can launch a flurry of 1,000 punches in just two seconds.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
    stats: { hp: 90, attack: 130, defense: 80 },
    weaknesses: ["Flying", "Psychic", "Fairy"]
  },
  {
    id: 69,
    name: "Bellsprout",
    type: "Grass/Poison",
    description: "Its thin, flexible body lets it bend and sway to avoid any attack, however strong it may be.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
    stats: { hp: 50, attack: 75, defense: 35 },
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"]
  },
  {
    id: 70,
    name: "Weepinbell",
    type: "Grass/Poison",
    description: "It is easily recognized by the large, bulbous lid on its head. It has a sticky liquid it uses to capture prey.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
    stats: { hp: 65, attack: 90, defense: 50 },
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"]
  },
  {
    id: 71,
    name: "Victreebel",
    type: "Grass/Poison",
    description: "The sight of its prey wriggling in its mouth is said to be a truly horrifying sight.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
    stats: { hp: 80, attack: 105, defense: 65 },
    weaknesses: ["Fire", "Ice", "Flying", "Psychic"]
  },
  {
    id: 72,
    name: "Tentacool",
    type: "Water/Poison",
    description: "It is almost entirely water. If it is removed from the sea, it dries up like a raisin.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
    stats: { hp: 40, attack: 40, defense: 35 },
    weaknesses: ["Electric", "Ground", "Psychic"]
  },
  {
    id: 73,
    name: "Tentacruel",
    type: "Water/Poison",
    description: "It has a large, blue, dome-like head. Its 80 tentacles can ensnare prey and deliver powerful poison.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
    stats: { hp: 80, attack: 70, defense: 65 },
    weaknesses: ["Electric", "Ground", "Psychic"]
  },
  {
    id: 74,
    name: "Geodude",
    type: "Rock/Ground",
    description: "Found in rocky mountain areas. It uses its arms to swing itself up cliffsides.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
    stats: { hp: 40, attack: 80, defense: 100 },
    weaknesses: ["Water", "Grass", "Ice", "Fighting", "Ground", "Steel"]
  },
  {
    id: 75,
    name: "Graveler",
    type: "Rock/Ground",
    description: "Lives on high mountains. It rolls off steep cliffs, becoming more scratched and rugged the farther it falls.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
    stats: { hp: 55, attack: 95, defense: 115 },
    weaknesses: ["Water", "Grass", "Ice", "Fighting", "Ground", "Steel"]
  },
  {
    id: 76,
    name: "Golem",
    type: "Rock/Ground",
    description: "Once it retracts its head, arms, and legs into its shell, it can withstand a dynamite blast.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
    stats: { hp: 80, attack: 120, defense: 130 },
    weaknesses: ["Water", "Grass", "Ice", "Fighting", "Ground", "Steel"]
  },
  {
    id: 77,
    name: "Ponyta",
    type: "Fire",
    description: "Its legs grow strong by running constantly, so it can clear tall towers and other obstacles with ease.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
    stats: { hp: 50, attack: 85, defense: 55 },
    weaknesses: ["Water", "Ground", "Rock"]
  },
  {
    id: 78,
    name: "Rapidash",
    type: "Fire",
    description: "A fire Pokémon that is known for its incredible speed, it can run up to 150 miles per hour.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
    stats: { hp: 65, attack: 100, defense: 70 },
    weaknesses: ["Water", "Ground", "Rock"]
  },
  {
    id: 79,
    name: "Slowpoke",
    type: "Water/Psychic",
    description: "It is always lost in thought, but it is too slow to realize what it is thinking about.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
    stats: { hp: 90, attack: 65, defense: 65 },
    weaknesses: ["Electric", "Grass", "Bug", "Ghost", "Dark"]
  },
  {
    id: 80,
    name: "Slowbro",
    type: "Water/Psychic",
    description: "A Shellder latches on to its tail, which causes a chemical reaction that makes it stand up and fight.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
    stats: { hp: 95, attack: 75, defense: 110 },
    weaknesses: ["Electric", "Grass", "Bug", "Ghost", "Dark"]
  },
  {
    id: 81,
    name: "Magnemite",
    type: "Electric/Steel",
    description: "The magnets on its sides generate a powerful magnetic field, allowing it to float in the air.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
    stats: { hp: 25, attack: 35, defense: 70 },
    weaknesses: ["Fire", "Fighting", "Ground"]
  },
  {
    id: 82,
    name: "Magneton",
    type: "Electric/Steel",
    description: "Three Magnemite are linked together by a strong magnetic force. It's often found in power plants.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
    stats: { hp: 50, attack: 60, defense: 95 },
    weaknesses: ["Fire", "Fighting", "Ground"]
  },
  {
    id: 83,
    name: "Farfetch'd",
    type: "Normal/Flying",
    description: "The leek it carries is used as a weapon. It will protect the leek fiercely and use it in battle.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
    stats: { hp: 52, attack: 90, defense: 55 },
    weaknesses: ["Electric", "Ice", "Rock"]
  },
  {
    id: 84,
    name: "Doduo",
    type: "Normal/Flying",
    description: "A two-headed Pokémon that was discovered as a sudden mutation. It runs at high speed on its two legs.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
    stats: { hp: 35, attack: 85, defense: 45 },
    weaknesses: ["Electric", "Ice", "Rock"]
  },
  {
    id: 85,
    name: "Dodrio",
    type: "Normal/Flying",
    description: "One of its heads is always alert. It can run at speeds of over 60 mph on grassy plains.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
    stats: { hp: 60, attack: 110, defense: 70 },
    weaknesses: ["Electric", "Ice", "Rock"]
  },
  {
    id: 86,
    name: "Seel",
    type: "Water",
    description: "It lives in the sea near icebergs. Its thick, white fur protects it from the cold.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
    stats: { hp: 65, attack: 45, defense: 55 },
    weaknesses: ["Electric", "Grass"]
  },
  {
    id: 87,
    name: "Dewgong",
    type: "Water/Ice",
    description: "It is a sleek, beautiful Pokémon. It loves to swim in icy cold water and can withstand blizzards.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
    stats: { hp: 90, attack: 70, defense: 80 },
    weaknesses: ["Electric", "Grass", "Fighting", "Rock"]
  },
  {
    id: 88,
    name: "Grimer",
    type: "Poison",
    description: "It was generated when chemical sludge was dumped into the sea. It lives in filthy places.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
    stats: { hp: 80, attack: 80, defense: 50 },
    weaknesses: ["Ground", "Psychic"]
  },
  {
    id: 89,
    name: "Muk",
    type: "Poison",
    description: "Its stench is so powerful, it can cause fainting. It is always covered in a disgusting, slimy residue.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
    stats: { hp: 105, attack: 105, defense: 75 },
    weaknesses: ["Ground", "Psychic"]
  },
  {
    id: 90,
    name: "Shellder",
    type: "Water",
    description: "Its shell is harder than a diamond. It is surprisingly fast, chasing after its prey underwater.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
    stats: { hp: 30, attack: 65, defense: 100 },
    weaknesses: ["Electric", "Grass"]
  },
  {
    id: 91,
    name: "Cloyster",
    type: "Water/Ice",
    description: "Its shell is harder than a diamond. It only opens its shell to attack its prey with its spike.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
    stats: { hp: 50, attack: 95, defense: 180 },
    weaknesses: ["Electric", "Grass", "Fighting", "Rock"]
  },
  {
    id: 92,
    name: "Gastly",
    type: "Ghost/Poison",
    description: "A Pokémon composed of gas. It can suffocate its prey by enveloping it in its toxic fumes.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
    stats: { hp: 30, attack: 35, defense: 30 },
    weaknesses: ["Ground", "Psychic", "Ghost", "Dark"]
  },
  {
    id: 93,
    name: "Haunter",
    type: "Ghost/Poison",
    description: "Its touch can be fatal. It tries to lick its prey in the dark, and its lick causes endless shivering.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
    stats: { hp: 45, attack: 50, defense: 45 },
    weaknesses: ["Ground", "Psychic", "Ghost", "Dark"]
  },
  {
    id: 94,
    name: "Gengar",
    type: "Ghost/Poison",
    description: "It is said to be the shadow of a human that was lost in the dark. It enjoys playing tricks on people.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
    stats: { hp: 60, attack: 65, defense: 60 },
    weaknesses: ["Ground", "Psychic", "Ghost", "Dark"]
  },
  {
    id: 95,
    name: "Onix",
    type: "Rock/Ground",
    description: "It usually lives underground. It can burrow through the earth at a speed of 50 mph.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
    stats: { hp: 35, attack: 45, defense: 160 },
    weaknesses: ["Water", "Grass", "Ice", "Fighting", "Ground", "Steel"]
  },
  {
    id: 96,
    name: "Drowzee",
    type: "Psychic",
    description: "If you sleep next to a Drowzee, it will put its nose to your head and eat your dreams.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
    stats: { hp: 60, attack: 48, defense: 45 },
    weaknesses: ["Bug", "Ghost", "Dark"]
  },
  {
    id: 97,
    name: "Hypno",
    type: "Psychic",
    description: "It carries a pendulum-like object, which it swings in front of its opponent to hypnotize them.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
    stats: { hp: 85, attack: 73, defense: 70 },
    weaknesses: ["Bug", "Ghost", "Dark"]
  },
  {
    id: 98,
    name: "Krabby",
    type: "Water",
    description: "Its pincers are very hard. They will fall off if it is hit by a strong attack, but they grow back quickly.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
    stats: { hp: 30, attack: 105, defense: 90 },
    weaknesses: ["Electric", "Grass"]
  },
  {
    id: 99,
    name: "Kingler",
    type: "Water",
    description: "The large pincer on its claw is incredibly powerful. It can crack open the shell of a Cloyster.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
    stats: { hp: 55, attack: 130, defense: 115 },
    weaknesses: ["Electric", "Grass"]
  },
  {
    id: 100,
    name: "Voltorb",
    type: "Electric",
    description: "A mysterious Pokémon that is often mistaken for a Poké Ball. It can suddenly explode without warning.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
    stats: { hp: 40, attack: 30, defense: 50 },
    weaknesses: ["Ground"]
  },
  {
    id: 101,
    name: "Electrode",
    type: "Electric",
    description: "It is constantly charged with electrical energy. It will explode with little to no provocation.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
    stats: { hp: 60, attack: 50, defense: 70 },
    weaknesses: ["Ground"]
  },
  {
    id: 102,
    name: "Exeggcute",
    type: "Grass/Psychic",
    description: "A group of six eggs, usually found in thick underbrush. They communicate with each other telepathically.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
    stats: { hp: 60, attack: 40, defense: 80 },
    weaknesses: ["Fire", "Ice", "Poison", "Flying", "Bug", "Ghost", "Dark"]
  },
  {
    id: 103,
    name: "Exeggutor",
    type: "Grass/Psychic",
    description: "A Pokémon with three heads. If one falls off, it becomes an Exeggcute to find new allies.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
    stats: { hp: 95, attack: 95, defense: 85 },
    weaknesses: ["Fire", "Ice", "Poison", "Flying", "Bug", "Ghost", "Dark"]
  },
  {
    id: 104,
    name: "Cubone",
    type: "Ground",
    description: "It wears the skull of its deceased mother on its head. It cries when it sees a full moon.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
    stats: { hp: 50, attack: 50, defense: 95 },
    weaknesses: ["Water", "Grass", "Ice"]
  },
  {
    id: 105,
    name: "Marowak",
    type: "Ground",
    description: "It is an evolution of Cubone, having overcome the grief of its mother. It battles using a bone as a weapon.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
    stats: { hp: 60, attack: 80, defense: 110 },
    weaknesses: ["Water", "Grass", "Ice"]
  },
  {
    id: 106,
    name: "Hitmonlee",
    type: "Fighting",
    description: "Its legs are freely extendable and can strike a powerful kick from any distance.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
    stats: { hp: 50, attack: 120, defense: 53 },
    weaknesses: ["Flying", "Psychic", "Fairy"]
  },
  {
    id: 107,
    name: "Hitmonchan",
    type: "Fighting",
    description: "Its punches slice the air. They are launched at such high speed, even a slight graze could cause a burn.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
    stats: { hp: 50, attack: 105, defense: 79 },
    weaknesses: ["Flying", "Psychic", "Fairy"]
  },
  {
    id: 108,
    name: "Lickitung",
    type: "Normal",
    description: "Its tongue is twice the length of its body. It can be moved like an arm for grabbing food and attacking.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
    stats: { hp: 90, attack: 55, defense: 75 },
    weaknesses: ["Fighting"]
  },
  {
    id: 109,
    name: "Koffing",
    type: "Poison",
    description: "Because it stores several kinds of toxic gases in its body, it is prone to exploding without warning.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
    stats: { hp: 40, attack: 65, defense: 95 },
    weaknesses: ["Ground", "Psychic"]
  },
  {
    id: 110,
    name: "Weezing",
    type: "Poison",
    description: "It grows by feeding on gases released by garbage. Though very rare, triplets have been found.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
    stats: { hp: 65, attack: 90, defense: 120 },
    weaknesses: ["Ground", "Psychic"]
  },
  {
    id: 111,
    name: "Rhyhorn",
    type: "Ground/Rock",
    description: "Its massive bones are 1,000 times harder than human bones. It can easily knock a trailer flying.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
    stats: { hp: 80, attack: 85, defense: 95 },
    weaknesses: ["Water", "Grass", "Ice", "Fighting", "Ground", "Steel"]
  },
  {
    id: 112,
    name: "Rhydon",
    type: "Ground/Rock",
    description: "Protected by an armor-like hide, it is capable of living in molten lava of 3,600 degrees.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
    stats: { hp: 105, attack: 130, defense: 120 },
    weaknesses: ["Water", "Grass", "Ice", "Fighting", "Ground", "Steel"]
  },
  {
    id: 113,
    name: "Chansey",
    type: "Normal",
    description: "A rare and elusive Pokémon that is said to bring happiness to those who manage to get it.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
    stats: { hp: 250, attack: 5, defense: 5 },
    weaknesses: ["Fighting"]
  },
  {
    id: 114,
    name: "Tangela",
    type: "Grass",
    description: "The whole body is swathed with wide vines that are similar to seaweed. Its vines shake as it walks.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
    stats: { hp: 65, attack: 55, defense: 115 },
    weaknesses: ["Fire", "Ice", "Poison", "Flying", "Bug"]
  },
  {
    id: 115,
    name: "Kangaskhan",
    type: "Normal",
    description: "The infant rarely ventures out of its mother's protective pouch until it is 3 years old.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
    stats: { hp: 105, attack: 95, defense: 80 },
    weaknesses: ["Fighting"]
  },
  {
    id: 116,
    name: "Horsea",
    type: "Water",
    description: "Known to shoot down flying bugs with precision blasts of ink from the surface of the water.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
    stats: { hp: 30, attack: 40, defense: 70 },
    weaknesses: ["Electric", "Grass"]
  },
  {
    id: 117,
    name: "Seadra",
    type: "Water",
    description: "It is capable of swimming backwards by rapidly flapping its wing-like pectoral fins and stout tail.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
    stats: { hp: 55, attack: 65, defense: 95 },
    weaknesses: ["Electric", "Grass"]
  },
  {
    id: 118,
    name: "Goldeen",
    type: "Water",
    description: "Its tail fin billows like an elegant dress. It creates a beautiful sight as it swims.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
    stats: { hp: 45, attack: 67, defense: 60 },
    weaknesses: ["Electric", "Grass"]
  },
  {
    id: 119,
    name: "Seaking",
    type: "Water",
    description: "In the autumn spawning season, they can be seen swimming powerfully up rivers and creeks.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
    stats: { hp: 80, attack: 92, defense: 65 },
    weaknesses: ["Electric", "Grass"]
  },
  {
    id: 120,
    name: "Staryu",
    type: "Water",
    description: "An enigmatic Pokémon that can effortlessly regenerate any appendage it loses in battle.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
    stats: { hp: 30, attack: 45, defense: 55 },
    weaknesses: ["Electric", "Grass"]
  },
  {
    id: 121,
    name: "Starmie",
    type: "Water/Psychic",
    description: "Its central core glows with the seven colors of the rainbow. Some people value the core as a gem.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
    stats: { hp: 60, attack: 75, defense: 85 },
    weaknesses: ["Electric", "Grass", "Bug", "Ghost", "Dark"]
  },
  {
    id: 122,
    name: "Mr. Mime",
    type: "Psychic/Fairy",
    description: "If interrupted while it is miming, it will slap around the offender with its broad hands.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
    stats: { hp: 40, attack: 45, defense: 65 },
    weaknesses: ["Poison", "Ghost", "Steel"]
  },
  {
    id: 123,
    name: "Scyther",
    type: "Bug/Flying",
    description: "With ninja-like agility and speed, it can create the illusion that there is more than one.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
    stats: { hp: 70, attack: 110, defense: 80 },
    weaknesses: ["Fire", "Electric", "Ice", "Flying", "Rock"]
  },
  {
    id: 124,
    name: "Jynx",
    type: "Ice/Psychic",
    description: "It seductively wiggles its hips as it walks. It can cause people to dance in unison with it.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
    stats: { hp: 65, attack: 50, defense: 35 },
    weaknesses: ["Fire", "Bug", "Rock", "Ghost", "Dark", "Steel"]
  },
  {
    id: 125,
    name: "Electabuzz",
    type: "Electric",
    description: "Normally found near power plants, they can wander away and cause major blackouts in cities.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
    stats: { hp: 65, attack: 83, defense: 57 },
    weaknesses: ["Ground"]
  },
  {
    id: 126,
    name: "Magmar",
    type: "Fire",
    description: "Its body always burns with an orange glow that enables it to hide perfectly among flames.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
    stats: { hp: 65, attack: 95, defense: 57 },
    weaknesses: ["Water", "Ground", "Rock"]
  },
  {
    id: 127,
    name: "Pinsir",
    type: "Bug",
    description: "If it fails to crush the victim in its pincers, it will swing it around and toss it hard.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
    stats: { hp: 65, attack: 125, defense: 100 },
    weaknesses: ["Fire", "Flying", "Rock"]
  },
  {
    id: 128,
    name: "Tauros",
    type: "Normal",
    description: "When it targets an enemy, it charges furiously while whipping its body with its long tails.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
    stats: { hp: 75, attack: 100, defense: 95 },
    weaknesses: ["Fighting"]
  },
  {
    id: 129,
    name: "Magikarp",
    type: "Water",
    description: "In the distant past, it was somewhat stronger than the horribly weak descendants that exist today.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
    stats: { hp: 20, attack: 10, defense: 55 },
    weaknesses: ["Electric", "Grass"]
  },
  {
    id: 130,
    name: "Gyarados",
    type: "Water/Flying",
    description: "Rarely seen in the wild. Huge and vicious, it is capable of destroying entire cities in a rage.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
    stats: { hp: 95, attack: 125, defense: 79 },
    weaknesses: ["Electric", "Rock"]
  },
  {
    id: 131,
    name: "Lapras",
    type: "Water/Ice",
    description: "A Pokémon that has been overhunted almost to extinction. It can ferry people across the water.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
    stats: { hp: 130, attack: 85, defense: 80 },
    weaknesses: ["Electric", "Grass", "Fighting", "Rock"]
  },
  {
    id: 132,
    name: "Ditto",
    type: "Normal",
    description: "Capable of copying an enemy's genetic code to instantly transform into a duplicate of the enemy.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    stats: { hp: 48, attack: 48, defense: 48 },
    weaknesses: ["Fighting"]
  },
  {
    id: 133,
    name: "Eevee",
    type: "Normal",
    description: "Its genetic code is irregular. It may mutate if it is exposed to radiation from element stones.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
    stats: { hp: 55, attack: 55, defense: 50 },
    weaknesses: ["Fighting"]
  },
  {
    id: 134,
    name: "Vaporeon",
    type: "Water",
    description: "Lives close to water. Its long tail is ridged with a fin which is often mistaken for a mermaid's.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
    stats: { hp: 130, attack: 65, defense: 60 },
    weaknesses: ["Electric", "Grass"]
  },
  {
    id: 135,
    name: "Jolteon",
    type: "Electric",
    description: "It accumulates negative ions in the atmosphere to blast out 10000-volt lightning bolts.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
    stats: { hp: 65, attack: 65, defense: 60 },
    weaknesses: ["Ground"]
  },
  {
    id: 136,
    name: "Flareon",
    type: "Fire",
    description: "When storing thermal energy in its body, its temperature could soar to over 1600 degrees.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
    stats: { hp: 65, attack: 130, defense: 60 },
    weaknesses: ["Water", "Ground", "Rock"]
  },
  {
    id: 137,
    name: "Porygon",
    type: "Normal",
    description: "A Pokémon that consists entirely of programming code. Capable of moving freely in cyberspace.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
    stats: { hp: 65, attack: 60, defense: 70 },
    weaknesses: ["Fighting"]
  },
  {
    id: 138,
    name: "Omanyte",
    type: "Rock/Water",
    description: "Although long extinct, in rare cases, it can be genetically resurrected from fossils.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
    stats: { hp: 35, attack: 40, defense: 100 },
    weaknesses: ["Electric", "Grass", "Fighting", "Ground"]
  },
  {
    id: 139,
    name: "Omastar",
    type: "Rock/Water",
    description: "A prehistoric Pokémon that died out when its heavy shell made it impossible to catch prey.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
    stats: { hp: 70, attack: 60, defense: 125 },
    weaknesses: ["Electric", "Grass", "Fighting", "Ground"]
  },
  {
    id: 140,
    name: "Kabuto",
    type: "Rock/Water",
    description: "A Pokémon that was resurrected from a fossil found in what was once the ocean floor eons ago.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
    stats: { hp: 30, attack: 80, defense: 90 },
    weaknesses: ["Electric", "Grass", "Fighting", "Ground"]
  },
  {
    id: 141,
    name: "Kabutops",
    type: "Rock/Water",
    description: "Its sleek shape is perfect for swimming. It slashes prey with its claws and drains the body fluids.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
    stats: { hp: 60, attack: 115, defense: 105 },
    weaknesses: ["Electric", "Grass", "Fighting", "Ground"]
  },
  {
    id: 142,
    name: "Aerodactyl",
    type: "Rock/Flying",
    description: "A ferocious, prehistoric Pokémon that goes for the enemy's throat with its serrated saw-like fangs.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
    stats: { hp: 80, attack: 105, defense: 65 },
    weaknesses: ["Water", "Electric", "Ice", "Rock", "Steel"]
  },
  {
    id: 143,
    name: "Snorlax",
    type: "Normal",
    description: "Very lazy. Just eats and sleeps. As its rotund bulk builds, it becomes steadily more slothful.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
    stats: { hp: 160, attack: 110, defense: 65 },
    weaknesses: ["Fighting"]
  },
  {
    id: 144,
    name: "Articuno",
    type: "Ice/Flying",
    description: "A legendary bird Pokémon that is said to appear to doomed people who are lost in icy mountains.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
    stats: { hp: 90, attack: 85, defense: 100 },
    weaknesses: ["Fire", "Electric", "Rock", "Steel"]
  },
  {
    id: 145,
    name: "Zapdos",
    type: "Electric/Flying",
    description: "A legendary bird Pokémon that is said to appear from clouds while dropping enormous lightning bolts.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
    stats: { hp: 90, attack: 90, defense: 85 },
    weaknesses: ["Ice", "Rock"]
  },
  {
    id: 146,
    name: "Moltres",
    type: "Fire/Flying",
    description: "Known as the legendary bird of fire. Every flap of its wings creates a dazzling flash of flames.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
    stats: { hp: 90, attack: 100, defense: 90 },
    weaknesses: ["Water", "Electric", "Rock"]
  },
  {
    id: 147,
    name: "Dratini",
    type: "Dragon",
    description: "Long considered a mythical Pokémon until recently when a small colony was found living underwater.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
    stats: { hp: 41, attack: 64, defense: 45 },
    weaknesses: ["Ice", "Dragon", "Fairy"]
  },
  {
    id: 148,
    name: "Dragonair",
    type: "Dragon",
    description: "A mystical Pokémon that exudes a gentle aura. Has the ability to change climate conditions.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
    stats: { hp: 61, attack: 84, defense: 65 },
    weaknesses: ["Ice", "Dragon", "Fairy"]
  },
  {
    id: 149,
    name: "Dragonite",
    type: "Dragon/Flying",
    description: "An extremely rarely seen marine Pokémon. Its intelligence is said to match that of humans.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
    stats: { hp: 91, attack: 134, defense: 95 },
    weaknesses: ["Ice", "Rock", "Dragon", "Fairy"]
  },
  {
    id: 150,
    name: "Mewtwo",
    type: "Psychic",
    description: "It was created by a scientist after years of horrific gene splicing and DNA engineering experiments.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
    stats: { hp: 106, attack: 110, defense: 90 },
    weaknesses: ["Bug", "Ghost", "Dark"]
  },
  {
    id: 151,
    name: "Mew",
    type: "Psychic",
    description: "So rare that it is still said to be a mirage by many experts. Only a few people have seen it worldwide.",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
    stats: { hp: 100, attack: 100, defense: 100 },
    weaknesses: ["Bug", "Ghost", "Dark"]
  }
];
// --- POKEDEX RENDER LOGIC ---

const grid = document.getElementById('pokemon-grid');
const modal = document.getElementById('detail-modal');
const closeModal = document.getElementById('close-modal');

// Modal Elements
const detailName = document.getElementById('detail-name');
const detailImg = document.getElementById('detail-image');
const detailId = document.getElementById('detail-id');
const detailType = document.getElementById('detail-type');
const detailDesc = document.getElementById('detail-description');

// 1. Render Cards
function renderPokemon() {
    grid.innerHTML = '';
    pokemonData.forEach(poke => {
        const card = document.createElement('div');
        card.classList.add('pokemon-card');
        card.innerHTML = `
            <img src="${poke.imageUrl}" alt="${poke.name}">
            <h2>${poke.name}</h2>
            <p>ID: #${poke.id}</p>
        `;
        
        // Add click event to open modal
        card.addEventListener('click', () => openModal(poke));
        
        grid.appendChild(card);
    });
}

// 2. Modal Functions
function openModal(pokemon) {
    detailName.textContent = pokemon.name;
    detailImg.src = pokemon.imageUrl;
    detailImg.alt = pokemon.name;
    detailId.textContent = `#${pokemon.id}`;
    detailType.textContent = pokemon.type;
    detailDesc.textContent = pokemon.description;
    
    modal.classList.add('active');
}

closeModal.addEventListener('click', () => {
    modal.classList.remove('active');
});

// Close modal if clicking outside content
window.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('active');
    }
});

// --- NAVIGATION LOGIC (New) ---

const navLinks = document.querySelectorAll('.nav-link');
const pages = document.querySelectorAll('.page-section');

navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();

        // 1. Remove active class from all links
        navLinks.forEach(nav => nav.classList.remove('active'));
        // 2. Add active class to clicked link
        link.classList.add('active');

        // 3. Hide all pages
        pages.forEach(page => page.classList.remove('active'));

        // 4. Show target page
        const targetId = link.getAttribute('data-target');
        document.getElementById(targetId).classList.add('active');
    });
});

// Initial Render
renderPokemon();
