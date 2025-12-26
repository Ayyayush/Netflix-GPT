// ================= MOCK GPT ENGINE =================
// Simulates GPT reasoning for Netflix-GPT (NO OpenAI needed)

export const mockGptResponse = (query) => {
  const q = query.toLowerCase();

  /* ================= ACTION ================= */
  if (q.includes("action")) {
    return [
      "Mad Max: Fury Road",
      "John Wick",
      "The Dark Knight",
      "Gladiator",
      "Dhoom 2",
    ];
  }

  /* ================= ROMANTIC ================= */
  if (q.includes("romantic") || q.includes("love")) {
    return [
      "Titanic",
      "La La Land",
      "Veer-Zaara",
      "Dilwale Dulhania Le Jayenge",
      "Before Sunrise",
    ];
  }

  /* ================= COMEDY ================= */
  if (q.includes("comedy") || q.includes("funny")) {
    return [
      "3 Idiots",
      "Hera Pheri",
      "The Hangover",
      "Superbad",
      "Jo Jeeta Wohi Sikandar",
    ];
  }

  /* ================= THRILLER ================= */
  if (q.includes("thriller") || q.includes("suspense")) {
    return [
      "Gone Girl",
      "Se7en",
      "Andhadhun",
      "Shutter Island",
      "Drishyam",
    ];
  }

  /* ================= HORROR ================= */
  if (q.includes("horror") || q.includes("scary")) {
    return [
      "The Conjuring",
      "Hereditary",
      "Bhoot",
      "Tumbbad",
      "Insidious",
    ];
  }

  /* ================= SCI-FI ================= */
  if (q.includes("sci") || q.includes("science") || q.includes("future")) {
    return [
      "Interstellar",
      "Inception",
      "The Matrix",
      "Blade Runner 2049",
      "Arrival",
    ];
  }

  /* ================= FANTASY ================= */
  if (q.includes("fantasy")) {
    return [
      "Harry Potter and the Sorcerer's Stone",
      "The Lord of the Rings: The Fellowship of the Ring",
      "Avatar",
      "Pan's Labyrinth",
      "The Hobbit",
    ];
  }

  /* ================= PATRIOTIC / WAR ================= */
  if (q.includes("gadar") || q.includes("patriotic") || q.includes("war")) {
    return [
      "Gadar 2",
      "Border",
      "Kesari",
      "Lagaan",
      "LOC Kargil",
    ];
  }

  /* ================= CRIME ================= */
  if (q.includes("crime") || q.includes("mafia")) {
    return [
      "The Godfather",
      "Scarface",
      "Gangs of Wasseypur",
      "Goodfellas",
      "Donnie Brasco",
    ];
  }



  /* ======================================================
     🌍 HOLLYWOOD
     ====================================================== */
  if (q.includes("hollywood")) {
    return [
      "Inception",
      "Interstellar",
      "The Dark Knight",
      "Forrest Gump",
      "Avengers: Endgame",
    ];
  }

  /* ======================================================
     🇮🇳 BOLLYWOOD
     ====================================================== */
  if (q.includes("bollywood") || q.includes("hindi")) {
    return [
      "3 Idiots",
      "Dangal",
      "Lagaan",
      "PK",
      "Gully Boy",
    ];
  }

  /* ======================================================
     🎬 SOUTH INDIAN (TAMIL / TELUGU / MALAYALAM)
     ====================================================== */
  if (
    q.includes("south") ||
    q.includes("tamil") ||
    q.includes("telugu") ||
    q.includes("malayalam")
  ) {
    return [
      "Baahubali: The Beginning",
      "Baahubali 2: The Conclusion",
      "RRR",
      "Vikram",
      "Drishyam",
    ];
  }

  /* ======================================================
     🇰🇷 KOREAN MOVIES / K-DRAMA
     ====================================================== */
  if (q.includes("korean") || q.includes("k-drama") || q.includes("kdrama")) {
    return [
      "Parasite",
      "Train to Busan",
      "Oldboy",
      "The Handmaiden",
      "Memories of Murder",
    ];
  }

  /* ======================================================
     🇨🇳 CHINESE MOVIES
     ====================================================== */
  if (q.includes("chinese") || q.includes("china")) {
    return [
      "Crouching Tiger, Hidden Dragon",
      "Hero",
      "House of Flying Daggers",
      "Infernal Affairs",
      "The Wandering Earth",
    ];
  }

  /* ======================================================
     ⭐ ACTOR BASED (HOLLYWOOD)
     ====================================================== */
  if (q.includes("leonardo") || q.includes("dicaprio")) {
    return [
      "Inception",
      "The Wolf of Wall Street",
      "Titanic",
      "Shutter Island",
      "Django Unchained",
    ];
  }

  if (q.includes("tom cruise")) {
    return [
      "Mission: Impossible – Fallout",
      "Top Gun",
      "Top Gun: Maverick",
      "Edge of Tomorrow",
      "Minority Report",
    ];
  }

  /* ======================================================
     ⭐ ACTOR BASED (BOLLYWOOD)
     ====================================================== */
  if (q.includes("shah rukh") || q.includes("srk")) {
    return [
      "Pathaan",
      "My Name Is Khan",
      "Chak De! India",
      "Swades",
      "Dil Se",
    ];
  }

  if (q.includes("salman")) {
    return [
      "Bajrangi Bhaijaan",
      "Sultan",
      "Kick",
      "Ek Tha Tiger",
      "Wanted",
    ];
  }

  if (q.includes("amir") || q.includes("aamir")) {
    return [
      "Dangal",
      "3 Idiots",
      "Lagaan",
      "Taare Zameen Par",
      "PK",
    ];
  }

  /* ======================================================
     🎥 DIRECTOR BASED
     ====================================================== */
  if (q.includes("nolan")) {
    return [
      "Inception",
      "Interstellar",
      "The Dark Knight",
      "Tenet",
      "Dunkirk",
    ];
  }

  if (q.includes("rajamauli")) {
    return [
      "Baahubali: The Beginning",
      "Baahubali 2: The Conclusion",
      "RRR",
      "Eega",
      "Magadheera",
    ];
  }


  /* ================= ANIMATION ================= */
  if (q.includes("animation") || q.includes("kids")) {
    return [
      "Toy Story",
      "Spirited Away",
      "The Lion King",
      "Up",
      "Finding Nemo",
    ];
  }

  /* ================= FAMILY ================= */
  if (q.includes("family")) {
    return [
      "Taare Zameen Par",
      "Kapoor & Sons",
      "Little Miss Sunshine",
      "The Pursuit of Happyness",
      "Coco",
    ];
  }

  /* ================= TOP RATED ================= */
  if (q.includes("top") || q.includes("best") || q.includes("rated")) {
    return [
      "The Shawshank Redemption",
      "The Godfather",
      "The Dark Knight",
      "Schindler's List",
      "12 Angry Men",
    ];
  }

  /* ================= UPCOMING ================= */
  if (q.includes("upcoming") || q.includes("new")) {
    return [
      "Dune: Part Two",
      "Deadpool & Wolverine",
      "Joker: Folie à Deux",
      "Avatar 3",
      "Mission: Impossible 8",
    ];
  }

  /* ================= MOOD BASED ================= */
  if (q.includes("sad") || q.includes("emotional")) {
    return [
      "Grave of the Fireflies",
      "The Green Mile",
      "Hachi: A Dog's Tale",
      "Manchester by the Sea",
      "Kal Ho Naa Ho",
    ];
  }

  if (q.includes("inspiring") || q.includes("motivational")) {
    return [
      "The Pursuit of Happyness",
      "Rocky",
      "Chak De! India",
      "Forrest Gump",
      "Whiplash",
    ];
  }


    /* ======================================================
     ⭐ UNDERRATED MOVIES
     ====================================================== */
  if (q.includes("underrated")) {
    return [
      "Udaan",
      "October",
      "The Secret Life of Walter Mitty",
      "Moon",
      "The Nice Guys",
    ];
  }

  /* ======================================================
     🏆 ACADEMY AWARD / OSCAR WINNERS
     ====================================================== */
  if (
    q.includes("oscar") ||
    q.includes("academy award") ||
    q.includes("award winners")
  ) {
    return [
      "Parasite",
      "Everything Everywhere All at Once",
      "The Shape of Water",
      "No Country for Old Men",
      "Gladiator",
    ];
  }

  /* ======================================================
     🎥 MUST WATCH MOVIES
     ====================================================== */
  if (q.includes("must watch") || q.includes("recommended")) {
    return [
      "The Shawshank Redemption",
      "Forrest Gump",
      "Inception",
      "Interstellar",
      "3 Idiots",
    ];
  }

  /* ======================================================
     🧑‍🎤 GEN Z / TRENDING MOVIES
     ====================================================== */
  if (q.includes("genz") || q.includes("trending") || q.includes("viral")) {
    return [
      "Barbie",
      "Oppenheimer",
      "Spider-Man: Across the Spider-Verse",
      "Dune",
      "Everything Everywhere All at Once",
    ];
  }

  /* ======================================================
     😢 TRAGIC / SAD MOVIES
     ====================================================== */
  if (q.includes("tragic") || q.includes("heartbreaking")) {
    return [
      "Grave of the Fireflies",
      "Requiem for a Dream",
      "Manchester by the Sea",
      "The Green Mile",
      "Kal Ho Naa Ho",
    ];
  }

  /* ======================================================
     🎌 ANIME MOVIES
     ====================================================== */
  if (q.includes("anime")) {
    return [
      "Your Name",
      "A Silent Voice",
      "Spirited Away",
      "Akira",
      "Weathering With You",
    ];
  }

  /* ======================================================
     🧒 CARTOON / ANIMATED MOVIES
     ====================================================== */
  if (q.includes("cartoon") || q.includes("animated")) {
    return [
      "Toy Story",
      "Up",
      "Finding Nemo",
      "The Lion King",
      "Coco",
    ];
  }

  /* ======================================================
     📼 90s MOVIES
     ====================================================== */
  if (q.includes("90s") || q.includes("1990")) {
    return [
      "Titanic",
      "Jurassic Park",
      "The Matrix",
      "Forrest Gump",
      "Terminator 2: Judgment Day",
    ];
  }

  /* ======================================================
     📀 2000s MOVIES
     ====================================================== */
  if (q.includes("2000s") || q.includes("2000")) {
    return [
      "The Dark Knight",
      "Gladiator",
      "Lord of the Rings: The Return of the King",
      "Avatar",
      "Spider-Man 2",
    ];
  }

  /* ======================================================
     🎞️ CULT CLASSICS
     ====================================================== */
  if (q.includes("cult")) {
    return [
      "Fight Club",
      "Pulp Fiction",
      "Donnie Darko",
      "The Big Lebowski",
      "American Psycho",
    ];
  }

  /* ======================================================
     🎯 ONE-TIME WATCH / FUN
     ====================================================== */
  if (q.includes("one time") || q.includes("time pass")) {
    return [
      "Red Notice",
      "Fast & Furious 7",
      "Jumanji: Welcome to the Jungle",
      "Now You See Me",
      "The Gray Man",
    ];
  }

  /* ======================================================
     🧠 INTELLECTUAL / THINKING MOVIES
     ====================================================== */
  if (q.includes("mind") || q.includes("thinking") || q.includes("complex")) {
    return [
      "Inception",
      "Tenet",
      "Primer",
      "The Prestige",
      "Shutter Island",
    ];
  }


    /* ======================================================
     😊 FEEL-GOOD / HAPPY MOVIES
     ====================================================== */
  if (q.includes("feel good") || q.includes("happy") || q.includes("uplifting")) {
    return [
      "Forrest Gump",
      "The Intern",
      "Paddington 2",
      "Little Miss Sunshine",
      "Zindagi Na Milegi Dobara",
    ];
  }

  /* ======================================================
     💔 BREAKUP / HEARTBROKEN
     ====================================================== */
  if (q.includes("breakup") || q.includes("heartbroken")) {
    return [
      "Eternal Sunshine of the Spotless Mind",
      "Blue Valentine",
      "Tamasha",
      "La La Land",
      "500 Days of Summer",
    ];
  }

  /* ======================================================
     🌙 LATE NIGHT / SLOW MOVIES
     ====================================================== */
  if (q.includes("late night") || q.includes("night")) {
    return [
      "Lost in Translation",
      "Her",
      "Before Sunrise",
      "Midnight in Paris",
      "Call Me by Your Name",
    ];
  }

  /* ======================================================
     🧘 CALM / PEACEFUL MOVIES
     ====================================================== */
  if (q.includes("calm") || q.includes("peaceful") || q.includes("relax")) {
    return [
      "The Secret Life of Walter Mitty",
      "Into the Wild",
      "Chef",
      "Paterson",
      "Eat Pray Love",
    ];
  }

  /* ======================================================
     🥳 PARTY / FUN MOVIES
     ====================================================== */
  if (q.includes("party") || q.includes("fun")) {
    return [
      "The Hangover",
      "Project X",
      "Superbad",
      "Dil Chahta Hai",
      "Yeh Jawaani Hai Deewani",
    ];
  }

  /* ======================================================
     🎉 HOLI MOVIES
     ====================================================== */
  if (q.includes("holi")) {
    return [
      "Yeh Jawaani Hai Deewani",
      "Sholay",
      "Baghban",
      "Waqt",
      "Silsila",
    ];
  }

  /* ======================================================
     🪔 DIWALI MOVIES
     ====================================================== */
  if (q.includes("diwali")) {
    return [
      "Kabhi Khushi Kabhie Gham",
      "Prem Ratan Dhan Payo",
      "Hum Saath-Saath Hain",
      "Sooryavanshi",
      "Golmaal",
    ];
  }

  /* ======================================================
     🎄 CHRISTMAS MOVIES
     ====================================================== */
  if (q.includes("christmas") || q.includes("xmas")) {
    return [
      "Home Alone",
      "The Holiday",
      "Love Actually",
      "Die Hard",
      "Klaus",
    ];
  }

  /* ======================================================
     🔥 LATEST / NEW RELEASES
     ====================================================== */
  if (q.includes("latest") || q.includes("recent") || q.includes("new release")) {
    return [
      "Oppenheimer",
      "Barbie",
      "Dune: Part Two",
      "Jawan",
      "Animal",
    ];
  }

  /* ======================================================
     🧠 DEEP / PHILOSOPHICAL
     ====================================================== */
  if (q.includes("deep") || q.includes("philosophical")) {
    return [
      "The Tree of Life",
      "Synecdoche, New York",
      "The Fountain",
      "Life of Pi",
      "Arrival",
    ];
  }

  /* ======================================================
     😎 SOLO WATCH / ME TIME
     ====================================================== */
  if (q.includes("solo") || q.includes("me time")) {
    return [
      "Into the Wild",
      "Joker",
      "Taxi Driver",
      "Her",
      "Nightcrawler",
    ];
  }

    /* ======================================================
     📺 WEB SERIES (GENERAL)
     ====================================================== */
  if (q.includes("web series") || q.includes("series") || q.includes("tv")) {
    return [
      "Breaking Bad",
      "Stranger Things",
      "Money Heist",
      "The Boys",
      "Game of Thrones",
    ];
  }

  /* ======================================================
     🇮🇳 INDIAN WEB SERIES
     ====================================================== */
  if (q.includes("indian web") || q.includes("hindi series")) {
    return [
      "Mirzapur",
      "The Family Man",
      "Sacred Games",
      "Panchayat",
      "Asur",
    ];
  }

  /* ======================================================
     🦸 SUPERHERO / AVENGERS / MCU
     ====================================================== */
  if (
    q.includes("avengers") ||
    q.includes("marvel") ||
    q.includes("mcu") ||
    q.includes("superhero")
  ) {
    return [
      "Avengers: Endgame",
      "Avengers: Infinity War",
      "Iron Man",
      "Captain America: Civil War",
      "Thor: Ragnarok",
    ];
  }

  /* ======================================================
     🦇 DC SUPERHEROES
     ====================================================== */
  if (q.includes("dc") || q.includes("batman")) {
    return [
      "The Dark Knight",
      "Joker",
      "Man of Steel",
      "The Batman",
      "Justice League (Snyder Cut)",
    ];
  }

  /* ======================================================
     🧬 MULTIVERSE / TIME TRAVEL
     ====================================================== */
  if (
    q.includes("multiverse") ||
    q.includes("time travel") ||
    q.includes("timeline")
  ) {
    return [
      "Avengers: Endgame",
      "Interstellar",
      "Tenet",
      "Predestination",
      "Doctor Strange",
    ];
  }

  /* ======================================================
     🧟 ZOMBIE / APOCALYPSE
     ====================================================== */
  if (q.includes("zombie") || q.includes("apocalypse")) {
    return [
      "World War Z",
      "Train to Busan",
      "28 Days Later",
      "I Am Legend",
      "The Walking Dead",
    ];
  }

  /* ======================================================
     🕵️ DETECTIVE / MYSTERY
     ====================================================== */
  if (q.includes("detective") || q.includes("mystery")) {
    return [
      "Sherlock",
      "Knives Out",
      "Se7en",
      "Zodiac",
      "True Detective",
    ];
  }

  /* ======================================================
     🏴‍☠️ ADVENTURE / TREASURE
     ====================================================== */
  if (q.includes("adventure") || q.includes("treasure")) {
    return [
      "Pirates of the Caribbean",
      "Indiana Jones",
      "National Treasure",
      "The Mummy",
      "Uncharted",
    ];
  }

  /* ======================================================
     🎮 GAMING / VIRTUAL WORLD
     ====================================================== */
  if (q.includes("gaming") || q.includes("virtual")) {
    return [
      "Ready Player One",
      "Free Guy",
      "Tron: Legacy",
      "Wreck-It Ralph",
      "Sword Art Online",
    ];
  }

  /* ======================================================
     🏫 COLLEGE / YOUTH
     ====================================================== */
  if (q.includes("college") || q.includes("student") || q.includes("youth")) {
    return [
      "3 Idiots",
      "Chhichhore",
      "Dead Poets Society",
      "Dil Chahta Hai",
      "Yeh Jawaani Hai Deewani",
    ];
  }

  /* ======================================================
     👨‍👩‍👧 FRIENDS / GROUP WATCH
     ====================================================== */
  if (q.includes("friends") || q.includes("group")) {
    return [
      "Dil Chahta Hai",
      "Zindagi Na Milegi Dobara",
      "Hangover",
      "Golmaal",
      "Ocean's Eleven",
    ];
  }

  /* ======================================================
     🔪 DARK / BRUTAL / INTENSE
     ====================================================== */
  if (q.includes("dark") || q.includes("brutal")) {
    return [
      "Joker",
      "Nightcrawler",
      "Fight Club",
      "American Psycho",
      "No Country for Old Men",
    ];
  }



  /* ================= DEFAULT SMART FALLBACK ================= */
  return [
    "Inception",
    "Interstellar",
    "The Dark Knight",
    "Forrest Gump",
    "Avengers: Endgame",
  ];
};
