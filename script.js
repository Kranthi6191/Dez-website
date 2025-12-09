const pokemonData = [
    {
        id: 1,
        name: "Bulbasaur",
        type: "Grass/Poison",
        description: "A strange seed was planted on its back at birth. The plant sprouts and grows larger as it grows.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png"
    },
    {
        id: 2,
        name: "Ivysaur",
        type: "Grass/Poison",
        description: "When the bulb on its back grows large, it appears to lose the ability to stand on its hind legs.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png"
    },
    {
        id: 3,
        name: "Venusaur",
        type: "Grass/Poison",
        description: "The plant on its back blooms when it absorbs solar energy. It stays on the move to seek light.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png"
    },
    {
        id: 4,
        name: "Charmander",
        type: "Fire",
        description: "The flame at the tip of its tail is an indication of its health. If it is healthy, the flame burns brightly.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png"
    },
    {
        id: 5,
        name: "Charmeleon",
        type: "Fire",
        description: "It has a barbaric nature. In battle, it whips its flaming tail around and slashes with sharp claws.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png"
    },
    {
        id: 6,
        name: "Charizard",
        type: "Fire/Flying",
        description: "A Charizard flies about in search of powerful opponents. It breathes fire of such great heat that it melts anything.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png"
    },
    {
        id: 7,
        name: "Squirtle",
        type: "Water",
        description: "When it retracts its long neck into its shell, it squirts out water with vigorous force.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png"
    },
    {
        id: 8,
        name: "Wartortle",
        type: "Water",
        description: "It is recognized as a symbol of longevity. If its shell has algae on it, that Wartortle is very old.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png"
    },
    {
        id: 9,
        name: "Blastoise",
        type: "Water",
        description: "A brutal Pokémon with a cannon on its shell. The cannon's water jet can smash concrete walls.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png"
    },
    {
        id: 10,
        name: "Caterpie",
        type: "Bug",
        description: "For protection, it releases a horrible stench from the antenna on its head to drive away enemies.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png"
    },
    {
        id: 11,
        name: "Metapod",
        type: "Bug",
        description: "It is waiting for the moment to evolve. In this quiet stage, it will only harden its shell if it is attacked.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png"
    },
    {
        id: 12,
        name: "Butterfree",
        type: "Bug/Flying",
        description: "It loves the honey of flowers and can locate flower patches that have even the tiniest amount of pollen.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png"
    },
    {
        id: 13,
        name: "Weedle",
        type: "Bug/Poison",
        description: "It attacks using the sharp, two-inch poison barb on its head. It eats its weight in leaves every day.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png"
    },
    {
        id: 14,
        name: "Kakuna",
        type: "Bug/Poison",
        description: "Able to move only slightly. When endangered, it may stick out its stinger and fiercely poison its foe.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png"
    },
    {
        id: 15,
        name: "Beedrill",
        type: "Bug/Poison",
        description: "It has three poison stingers, one on its tail and one on each of its two large forearms.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png"
    },
    {
        id: 16,
        name: "Pidgey",
        type: "Normal/Flying",
        description: "It is docile and prefers to avoid conflict. If disturbed, however, it can ferociously strike back.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png"
    },
    {
        id: 17,
        name: "Pidgeotto",
        type: "Normal/Flying",
        description: "This Pokémon flies at a speed of Mach 2, creating a powerful draft that can bend trees.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png"
    },
    {
        id: 18,
        name: "Pidgeot",
        type: "Normal/Flying",
        description: "Its strong wings can carry it at Mach 2 speed. It is a beautiful sight when it flies at full tilt.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png"
    },
    {
        id: 19,
        name: "Rattata",
        type: "Normal",
        description: "Its hard fangs grow continually. If it doesn't gnaw on something, they will become too long.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png"
    },
    {
        id: 20,
        name: "Raticate",
        type: "Normal",
        description: "Its hind feet are webbed. They are used for swimming, so it can also acquire prey from water.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png"
    },
    {
        id: 21,
        name: "Spearow",
        type: "Normal/Flying",
        description: "Inept at flying high. However, it can fly around very fast to protect its territory.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png"
    },
    {
        id: 22,
        name: "Fearow",
        type: "Normal/Flying",
        description: "A Pokémon that makes a great migratory bird. It will never let down its guard from the sky.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png"
    },
    {
        id: 23,
        name: "Ekans",
        type: "Poison",
        description: "It is highly likely to be hiding in short grass, looking for a chance to strike at unwary prey.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png"
    },
    {
        id: 24,
        name: "Arbok",
        type: "Poison",
        description: "The pattern on its belly is said to have six variations. Each is said to represent a different species.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png"
    },
    {
        id: 25,
        name: "Pikachu",
        type: "Electric",
        description: "It lives in forests and generates electricity in the pouches on its cheeks.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png"
    },
    {
        id: 26,
        name: "Raichu",
        type: "Electric",
        description: "It can store up to 100,000 volts of electricity in its body, giving off a light glow.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png"
    },
    {
        id: 27,
        name: "Sandshrew",
        type: "Ground",
        description: "Its body is dry skin. When it curls up in a ball, it is protected from all attack.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png"
    },
    {
        id: 28,
        name: "Sandslash",
        type: "Ground",
        description: "Its body is covered with sharp spines, which it uses to attack when threatened.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png"
    },
    {
        id: 29,
        name: "Nidoran♀",
        type: "Poison",
        description: "Although small, it is surprisingly powerful. It uses its spikes to ward off enemies.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png"
    },
    {
        id: 30,
        name: "Nidorina",
        type: "Poison",
        description: "The female's horn develops slowly. Prefers not to fight since the tips of its horns won't grow back if broken.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png"
    },
    {
        id: 31,
        name: "Nidoqueen",
        type: "Poison/Ground",
        description: "Its hard, scale-covered body is like armor. It uses its power to crush its foes.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png"
    },
    {
        id: 32,
        name: "Nidoran♂",
        type: "Poison",
        description: "The male's horn is hard as diamond. It is always listening with its large ears.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png"
    },
    {
        id: 33,
        name: "Nidorino",
        type: "Poison",
        description: "An aggressive Pokémon that is quick to attack. The horn on its head is thicker than Nidoran's.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png"
    },
    {
        id: 34,
        name: "Nidoking",
        type: "Poison/Ground",
        description: "It is recognized by its thick tail and fearsome horn. It is so powerful, it can topple a tower.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png"
    },
    {
        id: 35,
        name: "Clefairy",
        type: "Fairy",
        description: "It is said that happiness will come to anyone who sees a gathering of Clefairy dancing under a full moon.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png"
    },
    {
        id: 36,
        name: "Clefable",
        type: "Fairy",
        description: "A timid Pokémon that is rarely seen, it will flee instantly if it senses people approaching.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png"
    },
    {
        id: 37,
        name: "Vulpix",
        type: "Fire",
        description: "At the time of its birth, it has just one tail. The tail splits from the tip as it grows older.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png"
    },
    {
        id: 38,
        name: "Ninetales",
        type: "Fire",
        description: "It is said to live for 1,000 years, and each of its tails is imbued with a different psychic power.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png"
    },
    {
        id: 39,
        name: "Jigglypuff",
        type: "Normal/Fairy",
        description: "When its huge eyes waver, it is singing a mysteriously soothing melody that lulls its enemies to sleep.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png"
    },
    {
        id: 40,
        name: "Wigglytuff",
        type: "Normal/Fairy",
        description: "Its soft and rubbery body expands and contracts like a balloon. It can move with a light, bouncy motion.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png"
    },
    {
        id: 41,
        name: "Zubat",
        type: "Poison/Flying",
        description: "It emits ultrasonic cries while flying, but it can find its way even in the darkest caves.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png"
    },
    {
        id: 42,
        name: "Golbat",
        type: "Poison/Flying",
        description: "Once it starts sucking blood, it will not stop until it is full, even if the prey is a larger Pokémon.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png"
    },
    {
        id: 43,
        name: "Oddish",
        type: "Grass/Poison",
        description: "During the day, it keeps its face buried in the ground. At night, it wanders around to sow its seeds.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png"
    },
    {
        id: 44,
        name: "Gloom",
        type: "Grass/Poison",
        description: "A horrible smell is always wafting from its mouth. It is so powerful, it can knock out a trainer.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png"
    },
    {
        id: 45,
        name: "Vileplume",
        type: "Grass/Poison",
        description: "The larger its petals, the more poisonous its pollen. It will scatter it to paralyze its foe.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png"
    },
    {
        id: 46,
        name: "Paras",
        type: "Bug/Grass",
        description: "The mushrooms on its back are called tochukaso. They grow on the bug and steal nutrients from it.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png"
    },
    {
        id: 47,
        name: "Parasect",
        type: "Bug/Grass",
        description: "A bug-type Pokémon with a parasitic mushroom that has taken over the host. It is mostly silent.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png"
    },
    {
        id: 48,
        name: "Venonat",
        type: "Bug/Poison",
        description: "Its large, bug eyes act as radar. They can check out its surroundings 360 degrees, even in the dark.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png"
    },
    {
        id: 49,
        name: "Venomoth",
        type: "Bug/Poison",
        description: "It scatters highly toxic dust from its large wings. It is found at night in grassy areas.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png"
    },
    {
        id: 50,
        name: "Diglett",
        type: "Ground",
        description: "A Pokémon that lives underground. Because it spends its life below the surface, it is rarely seen.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png"
    },
    {
        id: 51,
        name: "Dugtrio",
        type: "Ground",
        description: "These triplets move at high speeds, twisting and turning, to cause the ground to tremble and shake.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png"
    },
    {
        id: 52,
        name: "Meowth",
        type: "Normal",
        description: "It sleeps all day, then prowls at night, hunting for coins or other round, shiny objects.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png"
    },
    {
        id: 53,
        name: "Persian",
        type: "Normal",
        description: "Its magnificent coat of fur is a symbol of status. It is a very haughty and proud Pokémon.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png"
    },
    {
        id: 54,
        name: "Psyduck",
        type: "Water",
        description: "It is constantly wracked by a headache. It uses psychic power when the headache gets too intense.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png"
    },
    {
        id: 55,
        name: "Golduck",
        type: "Water",
        description: "It is said that this Pokémon's psychic power is amplified when it is swimming in a lake or river.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png"
    },
    {
        id: 56,
        name: "Mankey",
        type: "Fighting",
        description: "It lives in tree colonies. If one starts to shake, the whole colony will become agitated.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png"
    },
    {
        id: 57,
        name: "Primeape",
        type: "Fighting",
        description: "It is always mad. Stomping, squealing, and thrashing its arms are all signs of its incredible anger.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png"
    },
    {
        id: 58,
        name: "Growlithe",
        type: "Fire",
        description: "A Pokémon with a loyal nature. It will fiercely protect its Trainer from harm.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png"
    },
    {
        id: 59,
        name: "Arcanine",
        type: "Fire",
        description: "A legendary Pokémon. Its speed is said to be so fast, it can run 6,200 miles in a single day.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png"
    },
    {
        id: 60,
        name: "Poliwag",
        type: "Water",
        description: "The spiral pattern on its belly appears to be its internal organs, which are clearly visible through its skin.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png"
    },
    {
        id: 61,
        name: "Poliwhirl",
        type: "Water",
        description: "Its body is constantly moist. It is a powerful swimmer that can easily swim across an ocean.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png"
    },
    {
        id: 62,
        name: "Poliwrath",
        type: "Water/Fighting",
        description: "An incredibly skilled swimmer. It can swim even in the most turbulent, freezing seas.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png"
    },
    {
        id: 63,
        name: "Abra",
        type: "Psychic",
        description: "If it decides to teleport randomly, it can sometimes get lost in the middle of nowhere.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png"
    },
    {
        id: 64,
        name: "Kadabra",
        type: "Psychic",
        description: "If it uses its powers, it emits an alpha wave that makes the heads of people nearby ache.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png"
    },
    {
        id: 65,
        name: "Alakazam",
        type: "Psychic",
        description: "It's able to use psychic power to calculate the trajectory of every battle move it makes.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png"
    },
    {
        id: 66,
        name: "Machop",
        type: "Fighting",
        description: "Always strives to get stronger, practicing all kinds of martial arts until its muscles are solid rock.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png"
    },
    {
        id: 67,
        name: "Machoke",
        type: "Fighting",
        description: "It is so powerful, it can lift a sumo wrestler with one hand. Its belt prevents it from using its full power.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png"
    },
    {
        id: 68,
        name: "Machamp",
        type: "Fighting",
        description: "Its four arms are always moving. It can launch a flurry of 1,000 punches in just two seconds.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png"
    },
    {
        id: 69,
        name: "Bellsprout",
        type: "Grass/Poison",
        description: "Its thin, flexible body lets it bend and sway to avoid any attack, however strong it may be.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png"
    },
    {
        id: 70,
        name: "Weepinbell",
        type: "Grass/Poison",
        description: "It is easily recognized by the large, bulbous lid on its head. It has a sticky liquid it uses to capture prey.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png"
    },
    {
        id: 71,
        name: "Victreebel",
        type: "Grass/Poison",
        description: "The sight of its prey wriggling in its mouth is said to be a truly horrifying sight.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png"
    },
    {
        id: 72,
        name: "Tentacool",
        type: "Water/Poison",
        description: "It is almost entirely water. If it is removed from the sea, it dries up like a raisin.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png"
    },
    {
        id: 73,
        name: "Tentacruel",
        type: "Water/Poison",
        description: "It has a large, blue, dome-like head. Its 80 tentacles can ensnare prey and deliver powerful poison.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png"
    },
    {
        id: 74,
        name: "Geodude",
        type: "Rock/Ground",
        description: "Found in rocky mountain areas. It uses its arms to swing itself up cliffsides.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png"
    },
    {
        id: 75,
        name: "Graveler",
        type: "Rock/Ground",
        description: "Lives on high mountains. It rolls off steep cliffs, becoming more scratched and rugged the farther it falls.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png"
    },
    {
        id: 76,
        name: "Golem",
        type: "Rock/Ground",
        description: "Once it retracts its head, arms, and legs into its shell, it can withstand a dynamite blast.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png"
    },
    {
        id: 77,
        name: "Ponyta",
        type: "Fire",
        description: "Its legs grow strong by running constantly, so it can clear tall towers and other obstacles with ease.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png"
    },
    {
        id: 78,
        name: "Rapidash",
        type: "Fire",
        description: "A fire Pokémon that is known for its incredible speed, it can run up to 150 miles per hour.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png"
    },
    {
        id: 79,
        name: "Slowpoke",
        type: "Water/Psychic",
        description: "It is always lost in thought, but it is too slow to realize what it is thinking about.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png"
    },
    {
        id: 80,
        name: "Slowbro",
        type: "Water/Psychic",
        description: "A Shellder latches on to its tail, which causes a chemical reaction that makes it stand up and fight.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png"
    },
    {
        id: 81,
        name: "Magnemite",
        type: "Electric/Steel",
        description: "The magnets on its sides generate a powerful magnetic field, allowing it to float in the air.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png"
    },
    {
        id: 82,
        name: "Magneton",
        type: "Electric/Steel",
        description: "Three Magnemite are linked together by a strong magnetic force. It's often found in power plants.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png"
    },
    {
        id: 83,
        name: "Farfetch'd",
        type: "Normal/Flying",
        description: "The leek it carries is used as a weapon. It will protect the leek fiercely and use it in battle.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png"
    },
    {
        id: 84,
        name: "Doduo",
        type: "Normal/Flying",
        description: "A two-headed Pokémon that was discovered as a sudden mutation. It runs at high speed on its two legs.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png"
    },
    {
        id: 85,
        name: "Dodrio",
        type: "Normal/Flying",
        description: "One of its heads is always alert. It can run at speeds of over 60 mph on grassy plains.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png"
    },
    {
        id: 86,
        name: "Seel",
        type: "Water",
        description: "It lives in the sea near icebergs. Its thick, white fur protects it from the cold.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png"
    },
    {
        id: 87,
        name: "Dewgong",
        type: "Water/Ice",
        description: "It is a sleek, beautiful Pokémon. It loves to swim in icy cold water and can withstand blizzards.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png"
    },
    {
        id: 88,
        name: "Grimer",
        type: "Poison",
        description: "It was generated when chemical sludge was dumped into the sea. It lives in filthy places.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png"
    },
    {
        id: 89,
        name: "Muk",
        type: "Poison",
        description: "Its stench is so powerful, it can cause fainting. It is always covered in a disgusting, slimy residue.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png"
    },
    {
        id: 90,
        name: "Shellder",
        type: "Water",
        description: "Its shell is harder than a diamond. It is surprisingly fast, chasing after its prey underwater.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png"
    },
    {
        id: 91,
        name: "Cloyster",
        type: "Water/Ice",
        description: "Its shell is harder than a diamond. It only opens its shell to attack its prey with its spike.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png"
    },
    {
        id: 92,
        name: "Gastly",
        type: "Ghost/Poison",
        description: "A Pokémon composed of gas. It can suffocate its prey by enveloping it in its toxic fumes.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png"
    },
    {
        id: 93,
        name: "Haunter",
        type: "Ghost/Poison",
        description: "Its touch can be fatal. It tries to lick its prey in the dark, and its lick causes endless shivering.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png"
    },
    {
        id: 94,
        name: "Gengar",
        type: "Ghost/Poison",
        description: "It is said to be the shadow of a human that was lost in the dark. It enjoys playing tricks on people.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png"
    },
    {
        id: 95,
        name: "Onix",
        type: "Rock/Ground",
        description: "It usually lives underground. It can burrow through the earth at a speed of 50 mph.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png"
    },
    {
        id: 96,
        name: "Drowzee",
        type: "Psychic",
        description: "If you sleep next to a Drowzee, it will put its nose to your head and eat your dreams.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png"
    },
    {
        id: 97,
        name: "Hypno",
        type: "Psychic",
        description: "It carries a pendulum-like object, which it swings in front of its opponent to hypnotize them.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png"
    },
    {
        id: 98,
        name: "Krabby",
        type: "Water",
        description: "Its pincers are very hard. They will fall off if it is hit by a strong attack, but they grow back quickly.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png"
    },
    {
        id: 99,
        name: "Kingler",
        type: "Water",
        description: "The large pincer on its claw is incredibly powerful. It can crack open the shell of a Cloyster.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png"
    },
    {
        id: 100,
        name: "Voltorb",
        type: "Electric",
        description: "A mysterious Pokémon that is often mistaken for a Poké Ball. It can suddenly explode without warning.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png"
    },
    {
        id: 101,
        name: "Electrode",
        type: "Electric",
        description: "It is constantly charged with electrical energy. It will explode with little to no provocation.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png"
    },
    {
        id: 102,
        name: "Exeggcute",
        type: "Grass/Psychic",
        description: "A group of six eggs, usually found in thick underbrush. They communicate with each other telepathically.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png"
    },
    {
        id: 103,
        name: "Exeggutor",
        type: "Grass/Psychic",
        description: "A Pokémon with three heads. If one falls off, it becomes an Exeggcute to find new allies.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png"
    },
    {
        id: 104,
        name: "Cubone",
        type: "Ground",
        description: "It wears the skull of its deceased mother on its head. It cries when it sees a full moon.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png"
    },
    {
        id: 105,
        name: "Marowak",
        type: "Ground",
        description: "It is an evolution of Cubone, having overcome the grief of its mother. It battles using a bone as a weapon.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png"
    },
    {
        id: 106,
        name: "Hitmonlee",
        type: "Fighting",
        description: "Its legs are freely extendable and can strike a powerful kick from any position.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png"
    },
    {
        id: 107,
        name: "Hitmonchan",
        type: "Fighting",
        description: "It constantly practices punching with its fists. It can even punch at the speed of a bullet.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png"
    },
    {
        id: 108,
        name: "Lickitung",
        type: "Normal",
        description: "Its tongue is twice as long as its body. It can extend it quickly and coil around its prey.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png"
    },
    {
        id: 109,
        name: "Koffing",
        type: "Poison",
        description: "It has a light-as-air body that contains a variety of toxic gases. It sometimes explodes when angry.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png"
    },
    {
        id: 110,
        name: "Weezing",
        type: "Poison",
        description: "It is a rare case of an evolution by accident. It is constantly filled with toxic fumes.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png"
    },
    {
        id: 111,
        name: "Rhyhorn",
        type: "Ground/Rock",
        description: "Its body is covered with plate armor, which allows it to charge through a mountain.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png"
    },
    {
        id: 112,
        name: "Rhydon",
        type: "Ground/Rock",
        description: "Its hide is so tough that a direct cannon hit won't even leave a scratch.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png"
    },
    {
        id: 113,
        name: "Chansey",
        type: "Normal",
        description: "It lays eggs every day. The eggs are said to be delicious and are delivered to kindhearted people.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png"
    },
    {
        id: 114,
        name: "Tangela",
        type: "Grass",
        description: "Its body is completely obscured by blue vines. If a vine is broken, it quickly regrows another.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png"
    },
    {
        id: 115,
        name: "Kangaskhan",
        type: "Normal",
        description: "The mother raises its baby in a pouch on its belly. It will fight fiercely to protect its child.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png"
    },
    {
        id: 116,
        name: "Horsea",
        type: "Water",
        description: "It is a fragile Pokémon that secretes ink from its mouth to distract enemies.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png"
    },
    {
        id: 117,
        name: "Seadra",
        type: "Water",
        description: "It can swim backward while swiftly spinning its fins. It has venomous spines on its head.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png"
    },
    {
        id: 118,
        name: "Goldeen",
        type: "Water",
        description: "It is a very graceful swimmer. The beautiful tail fin is often mistaken for a flower fluttering underwater.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png"
    },
    {
        id: 119,
        name: "Seaking",
        type: "Water",
        description: "In the autumn, the males' horns develop into their most magnificent, majestic form.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png"
    },
    {
        id: 120,
        name: "Staryu",
        type: "Water",
        description: "An enigmatic Pokémon that radiates a bright red core at the center of its body.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png"
    },
    {
        id: 121,
        name: "Starmie",
        type: "Water/Psychic",
        description: "Its central core flashes seven colors. Due to its mysterious nature, it is sometimes called 'the gem of the sea'.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png"
    },
    {
        id: 122,
        name: "Mr. Mime",
        type: "Psychic/Fairy",
        description: "It is a master of pantomime. It creates invisible walls that are so real, they can block attacks.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png"
    },
    {
        id: 123,
        name: "Scyther",
        type: "Bug/Flying",
        description: "It is blindingly fast. Its scythes are so sharp, it can slice through a thick log in one swipe.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png"
    },
    {
        id: 124,
        name: "Jynx",
        type: "Ice/Psychic",
        description: "It speaks in a language that seems to be that of humans. Its movements are like dancing.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png"
    },
    {
        id: 125,
        name: "Electabuzz",
        type: "Electric",
        description: "It has a ferocious nature. It can be found in power plants, feeding on the electrical current.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png"
    },
    {
        id: 126,
        name: "Magmar",
        type: "Fire",
        description: "It lives in the craters of volcanoes. It will bathe in the molten lava to heal its wounds.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png"
    },
    {
        id: 127,
        name: "Pinsir",
        type: "Bug",
        description: "It grips its prey with its horns and crushes them with incredible force. It cannot stand cold temperatures.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png"
    },
    {
        id: 128,
        name: "Tauros",
        type: "Normal",
        description: "A wild Pokémon with three tails. It is known for its uncontrollable bursts of energy and power.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png"
    },
    {
        id: 129,
        name: "Magikarp",
        type: "Water",
        description: "It is said to be the world's weakest Pokémon. In battle, it can only splash around feebly.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png"
    },
    {
        id: 130,
        name: "Gyarados",
        type: "Water/Flying",
        description: "The result of a horrific transformation. It has an extremely vicious nature and an unparalleled lust for destruction.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png"
    },
    {
        id: 131,
        name: "Lapras",
        type: "Water/Ice",
        description: "A kindhearted Pokémon that loves to ferry people across the water. It can understand human speech.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png"
    },
    {
        id: 132,
        name: "Ditto",
        type: "Normal",
        description: "It can transform into anything, but its face always remains slightly off, giving away its true form.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png"
    },
    {
        id: 133,
        name: "Eevee",
        type: "Normal",
        description: "A rare Pokémon that can evolve into multiple forms depending on the environment and how it's raised.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png"
    },
    {
        id: 134,
        name: "Vaporeon",
        type: "Water",
        description: "Its body structure is similar to water molecules. It can melt into water and disappear.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png"
    },
    {
        id: 135,
        name: "Jolteon",
        type: "Electric",
        description: "It can gather negative ions from the air to fire off 10,000-volt electric attacks.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png"
    },
    {
        id: 136,
        name: "Flareon",
        type: "Fire",
        description: "It stores heat in its internal flame sac, which can reach temperatures of almost 3,000 degrees Fahrenheit.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png"
    },
    {
        id: 137,
        name: "Porygon",
        type: "Normal",
        description: "A virtual Pokémon created by programming code. It can revert to pure data and enter cyberspace.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png"
    },
    {
        id: 138,
        name: "Omanyte",
        type: "Rock/Water",
        description: "A Pokémon that was revived from a fossil. It is said to have lived in the sea since ancient times.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png"
    },
    {
        id: 139,
        name: "Omastar",
        type: "Rock/Water",
        description: "The tentacles surrounding its mouth are powerful enough to crush and open a Shellder's shell.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png"
    },
    {
        id: 140,
        name: "Kabuto",
        type: "Rock/Water",
        description: "A Pokémon that was revived from a fossil. It is said to have lived on the seabed 300 million years ago.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png"
    },
    {
        id: 141,
        name: "Kabutops",
        type: "Rock/Water",
        description: "It is an extremely fast swimmer. It slashes its enemies with its sharp, sickle-like claws.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png"
    },
    {
        id: 142,
        name: "Aerodactyl",
        type: "Rock/Flying",
        description: "A vicious, prehistoric Pokémon that was resurrected from a fossil. It dominates the skies.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png"
    },
    {
        id: 143,
        name: "Snorlax",
        type: "Normal",
        description: "It is not satisfied unless it eats over 880 pounds of food every day. It only wakes up to eat.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png"
    },
    {
        id: 144,
        name: "Articuno",
        type: "Ice/Flying",
        description: "A legendary bird Pokémon that is said to appear before trainers who are lost in icy mountains.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png"
    },
    {
        id: 145,
        name: "Zapdos",
        type: "Electric/Flying",
        description: "A legendary bird Pokémon that is said to live in thunderstorm clouds, constantly crackling with power.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png"
    },
    {
        id: 146,
        name: "Moltres",
        type: "Fire/Flying",
        description: "A legendary bird Pokémon that has a passion for fire. It is said to migrate from the south.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png"
    },
    {
        id: 147,
        name: "Dratini",
        type: "Dragon",
        description: "A mystical Pokémon that is said to live in the deepest waters. It sheds its skin as it grows.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png"
    },
    {
        id: 148,
        name: "Dragonair",
        type: "Dragon",
        description: "It is said to make rain fall when it appears. It has a gentle aura and a soft, beautiful glow.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png"
    },
    {
        id: 149,
        name: "Dragonite",
        type: "Dragon/Flying",
        description: "A rare and kindhearted sea Pokémon that is said to rescue people from drowning at sea.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png"
    },
    {
        id: 150,
        name: "Mewtwo",
        type: "Psychic",
        description: "A Pokémon whose DNA was repeatedly recombined and genetically engineered. It is a beast of incredible power.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png"
    },
    {
        id: 151,
        name: "Mew",
        type: "Psychic",
        description: "A mythical Pokémon, said to contain the genetic code of all Pokémon. It can transform into any Pokémon.",
        imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png"
    }
];

// ... rest of your script.js code (from the previous answer)
const grid = document.getElementById('pokemon-grid');
const modal = document.getElementById('detail-modal');
const closeModalBtn = document.getElementById('close-modal');

// Function to generate the HTML for a single Pokémon card
function createPokemonCard(pokemon) {
    const card = document.createElement('div');
    card.classList.add('pokemon-card');
    card.setAttribute('data-id', pokemon.id);

    // Creative Color for the card based on the type (simple example)
    // You could expand this for more types!
    let typeColor = '#aaaaaa'; // Default color
    if (pokemon.type.includes('Grass')) typeColor = '#7AC74C';
    else if (pokemon.type.includes('Fire')) typeColor = '#EE8130';
    else if (pokemon.type.includes('Water')) typeColor = '#6390F0';
    else if (pokemon.type.includes('Electric')) typeColor = '#F7D02C';
    else if (pokemon.type.includes('Psychic')) typeColor = '#F95587';
    else if (pokemon.type.includes('Normal')) typeColor = '#A8A77A';
    else if (pokemon.type.includes('Fighting')) typeColor = '#C22E28';
    
    card.style.border = `4px solid ${typeColor}`;

    card.innerHTML = `
        <img src="${pokemon.imageUrl}" alt="${pokemon.name}">
        <p>#${String(pokemon.id).padStart(3, '0')}</p>
        <h2>${pokemon.name}</h2>
    `;

    card.addEventListener('click', () => showPokemonDetails(pokemon));

    return card;
}

// Function to populate the detail modal and show it (the "zoom-in")
function showPokemonDetails(pokemon) {
    document.getElementById('detail-name').textContent = pokemon.name;
    document.getElementById('detail-image').src = pokemon.imageUrl;
    document.getElementById('detail-image').alt = pokemon.name;
    document.getElementById('detail-id').textContent = String(pokemon.id).padStart(3, '0');
    document.getElementById('detail-type').textContent = pokemon.type;
    document.getElementById('detail-description').textContent = pokemon.description;
    
    // Add the 'active' class to trigger the CSS fade and scale transition
    modal.classList.add('active');
    document.body.style.overflow = 'hidden'; // Prevent scrolling the background
}

// Function to close the detail modal
function closePokemonDetails() {
    // Remove the 'active' class to trigger the CSS reverse fade and scale transition
    modal.classList.remove('active');

    // Wait for the transition to complete before allowing background scroll again
    setTimeout(() => {
        document.body.style.overflow = '';
    }, 400); // Must match the longest transition time in CSS (.modal-content transition)
}

// Event Listeners for the modal
closeModalBtn.addEventListener('click', closePokemonDetails);

// Close modal when clicking outside the content
modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closePokemonDetails();
    }
});

// Close modal with the ESC key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closePokemonDetails();
    }
});

// Initial function call to render all cards
function renderPokemonGrid() {
    pokemonData.forEach(pokemon => {
        grid.appendChild(createPokemonCard(pokemon));
    });
}

// Run the render function when the script loads
renderPokemonGrid();
