import React, { useState } from "react";
import "./App.css";

function App() {
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [speakingWord, setSpeakingWord] = useState(null);

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");



  const vocabLists = {
    A: [
  { emoji: "🌾", word: "Abundant", meaning: "plenty, assload" },         // crops = plenty
  { emoji: "🏨", word: "Accommodation", meaning: "rooms" },             // hotel/rooms
  { emoji: "🌱", word: "Acauline", meaning: "stemless" },               // stemless plant
  { emoji: "💰", word: "Accrued", meaning: "accumulated" },             // accumulated wealth
  { emoji: "🧠", word: "Acumen", meaning: "keenness of mind" },         // brain
  { emoji: "🥓", word: "Adipose", meaning: "fatty" },                   // fat
  { emoji: "✏️", word: "Adumbrate", meaning: "outline" },               // outline sketch
  { emoji: "⚡", word: "Alacrity", meaning: "readiness" },              // lightning = quickness
  { emoji: "💵", word: "Alimony", meaning: "maintenance" },             // money
  { emoji: "🤝", word: "Altruistic", meaning: "helpful" },              // helping hands
  { emoji: "❓", word: "Ambiguous", meaning: "unclear" },                // question mark
  { emoji: "⚖️", word: "Ambiguity", meaning: "equivocation" },          // scales = balance/unclear
  { emoji: "🔧", word: "Ameliorate", meaning: "improve" },              // tools = improve/fix
  { emoji: "🍫", word: "Aphrodisiac", meaning: "libido booster" },      // chocolate = aphrodisiac
  { emoji: "↔️", word: "Antithetical", meaning: "totally different" },   // opposite arrows
  { emoji: "👀", word: "Apparent", meaning: "clearly seen" },           // eyes = clearly visible
  { emoji: "📌", word: "Apropos", meaning: "relevant" },                // pin = on point/relevant
  { emoji: "🎲", word: "Arbitrary", meaning: "random" },                // dice = random
  { emoji: "📚", word: "Assiduity", meaning: "sedulousness" },          // books = diligence
  { emoji: "📜", word: "Axiom", meaning: "maxim" }                      // scroll = rule/maxim
],
   B: [
  { emoji: "📣", word: "Boisterous", meaning: "very loud" },             // megaphone
  { emoji: "🛠️", word: "Bolster", meaning: "support" },                // tools = support
  { emoji: "💌", word: "Billet-doux", meaning: "epistle, missive" },    // love letter
  { emoji: "😄", word: "Blithesome", meaning: "a mirthful disposition" },// happy face
  { emoji: "💥", word: "Blitz", meaning: "aerial bombardment" },        // explosion
  { emoji: "🌩️", word: "Brontide", meaning: "rumbling sound" },        // thunder
  { emoji: "😎", word: "Brazen", meaning: "bold & without shame" },     // confident face
  { emoji: "🍑", word: "Buxom", meaning: "comely, plump" },            // plump peach
  { emoji: "🌳", word: "Bucolic", meaning: "pastoral, rural" },        // tree = rural
  { emoji: "💢", word: "Backlash", meaning: "negative reaction" },      // anger symbol
  { emoji: "⚙️", word: "Banausic", meaning: "mechanical, utilitarian" },// gear = mechanical
  { emoji: "🥤", word: "Beverage", meaning: "drink" },                 // cup/drink
  { emoji: "🎁", word: "Bestow", meaning: "give" },                     // gift
  { emoji: "🌫️", word: "Blurry", meaning: "unclear, cloudy" },         // fog
  { emoji: "💣", word: "Bombard", meaning: "assault" },                 // bomb
  { emoji: "🌪️", word: "Bodeful", meaning: "ominous" },                // tornado = ominous
  { emoji: "☂️", word: "Brolly", meaning: "umbrella" },                 // umbrella
  { emoji: "📢", word: "Bruit", meaning: "spread widely" },             // loudspeaker = spread
  { emoji: "😐", word: "Brusque", meaning: "a curt reply" }            // neutral face = blunt/curt
], 
   C: [
  { emoji: "📦", word: "Caboodle", meaning: "entire lot" },            // box = everything
  { emoji: "❌", word: "Call off", meaning: "cancel" },               // cross mark = cancel
  { emoji: "🌋", word: "Caldera", meaning: "volcanic crater" },       // volcano
  { emoji: "🏞️", word: "Canyon", meaning: "deep gorge" },            // canyon landscape
  { emoji: "😡", word: "Cantankerous", meaning: "quarrelsome" },      // angry face
  { emoji: "🎭", word: "Capricious", meaning: "fickle" },             // masks = changing moods
  { emoji: "🐢", word: "Carapace", meaning: "shell / integument" },   // turtle shell
  { emoji: "🎯", word: "Cast", meaning: "throw, (choose)" },          // dartboard = throw
  { emoji: "🎰", word: "Casino", meaning: "gambling house" },         // slot machine
  { emoji: "🤧", word: "Catarrh", meaning: "cold" },                  // sneezing face
  { emoji: "🔷", word: "Catty-corner", meaning: "diagonal" },         // diamond = diagonal
  { emoji: "🛑", word: "Cease", meaning: "stop" },                     // stop sign
  { emoji: "🙈", word: "Cecity", meaning: "blindness" },              // see-no-evil monkey
  { emoji: "🤴", word: "Chivalrous", meaning: "gallant" },            // knight/prince
  { emoji: "📝", word: "Cite", meaning: "quote" },                     // paper/note
  { emoji: "🧐", word: "Circumspect", meaning: "cautious" },          // monocle = careful
  { emoji: "⚰️", word: "Cinerary", meaning: "ashes" },                // urn
  { emoji: "🌧️", word: "Cloudburst", meaning: "sudden heavy rain" }, // heavy rain
  { emoji: "💡", word: "Cogent", meaning: "convincing" },             // lightbulb = clear idea
  { emoji: "🧠", word: "Cognition", meaning: "awareness" },           // brain
  { emoji: "🏁", word: "Commence", meaning: "begin" },                // starting flag
  { emoji: "👍", word: "Commendable", meaning: "good" },              // thumbs up
  { emoji: "🤗", word: "Commiseration", meaning: "condolences" },     // hugging face
  { emoji: "🍽️", word: "Comestibles", meaning: "eatables" },         // plate/food
  { emoji: "📢", word: "Commination", meaning: "denunciation" },      // loudspeaker = announce punishment
  { emoji: "😤", word: "Conceited", meaning: "proud, haughty" },      // proud face
  { emoji: "⏱️", word: "Concurrently", meaning: "simultaneous" },     // stopwatch = simultaneous timing
  { emoji: "🏆", word: "Condign", meaning: "worthy" },                 // trophy = deserved
  { emoji: "🐄", word: "Confine / Corral", meaning: "enclosure" },    // fenced animal
  { emoji: "😊", word: "Congenial", meaning: "pleasant" },            // smiling face
  { emoji: "👀", word: "Conspicuous", meaning: "noticeable" },        // eyes = noticeable
  { emoji: "🤔", word: "Contemplate", meaning: "think" },             // thinking face
  { emoji: "🐠", word: "Coral", meaning: "sea organism" },            // coral/sea life
  { emoji: "🏔️", word: "Cordillera", meaning: "chain of mountains" },// mountain chain
  { emoji: "🚫", word: "Cordoned off", meaning: "closed off" },       // prohibited sign
  { emoji: "🛁", word: "Cosset", meaning: "pamper" },                 // bathtub = pampering
  { emoji: "🐥", word: "Craven", meaning: "coward" },                 // scared chick
  { emoji: "🔥", word: "Craze", meaning: "fad" },                     // trending fire
  { emoji: "📥", word: "Culled", meaning: "collected" }               // inbox = gathered/collected
],
 D: [
  { emoji: "🦁", word: "Dauntless", meaning: "fearless" },           // lion = fearless
  { emoji: "💭", word: "Deem", meaning: "think" },                  // thought bubble
  { emoji: "↩️", word: "Deflect", meaning: "divert" },              // arrow deflecting
  { emoji: "☠️", word: "Deleterious", meaning: "harmful" },         // skull = harmful
  { emoji: "🏛️", word: "Demarche", meaning: "political step" },     // government building
  { emoji: "🧑‍🤝‍🧑", word: "Demotic", meaning: "popular" },         // people together
  { emoji: "🌿", word: "Dendritic", meaning: "tree-like structure" },// branch/tree
  { emoji: "🚫", word: "Denegation", meaning: "denial" },           // prohibited sign
  { emoji: "📤", word: "Depose", meaning: "remove from office" },    // outbox/removed
  { emoji: "🏴‍☠️", word: "Depredate", meaning: "pillage" },         // pirate flag = pillage
  { emoji: "💸", word: "Deprivation", meaning: "poverty" },         // empty wallet
  { emoji: "💧", word: "Depurate", meaning: "purify" },             // water drop = purify
  { emoji: "🏚️", word: "Dereliction", meaning: "dilapidation" },    // broken house
  { emoji: "🛑", word: "Desist", meaning: "stop" },                  // stop sign
  { emoji: "🤡", word: "Desipient", meaning: "foolish" },           // clown = foolish
  { emoji: "🩹", word: "Desquamate", meaning: "peel off" },          // bandage = peeling skin
  { emoji: "🙈", word: "Diffident", meaning: "shy" },               // shy monkey
  { emoji: "↩️", word: "Digress", meaning: "diverge" },             // arrow turning
  { emoji: "💪", word: "Diligent", meaning: "hardworking" },        // flexed arm
  { emoji: "🔹", word: "Diminutive", meaning: "tiny" },             // small diamond
  { emoji: "😵", word: "Discombobulate", meaning: "confuse" },      // dizzy face
  { emoji: "⚖️", word: "Discriminatory", meaning: "unfair treatment" }, // scales = justice
  { emoji: "😟", word: "Disconcert", meaning: "upset" },            // worried face
  { emoji: "😒", word: "Disdain", meaning: "scorn" },               // unimpressed face
  { emoji: "🧹", word: "Disheveled", meaning: "untidy" },           // messy broom
  { emoji: "🌧️", word: "Dismal", meaning: "gloomy" },              // rainy cloud
  { emoji: "✋", word: "Dissuade", meaning: "persuade not to" },     // hand = stop/prevent
  { emoji: "😴", word: "Drowsy", meaning: "sleepy" },               // sleeping face
  { emoji: "❓", word: "Dubiety", meaning: "doubt" },                // question mark
  { emoji: "😠", word: "Dudgeon", meaning: "anger" },               // angry face
  { emoji: "🐋", word: "Dugong", meaning: "sea cow" },              // sea cow
  { emoji: "🐖", word: "Duroc", meaning: "red lard pig" },           // pig
  { emoji: "📉", word: "Dwindle", meaning: "decrease" },            // downward chart
  { emoji: "🚶‍♂️", word: "Dwadle", meaning: "loiter" }             // slow walking
],
  E: [
  { emoji: "🏛️", word: "Edifice", meaning: "building" },
  { emoji: "💖", word: "Effusive", meaning: "overly emotional" },
  { emoji: "🚪", word: "Egress", meaning: "exit" },
  { emoji: "😄", word: "Elated", meaning: "very happy" },
  { emoji: "🎭", word: "Elicit", meaning: "evoke" },
  { emoji: "🚀", word: "Embark", meaning: "begin" },
  { emoji: "✅", word: "Endorse", meaning: "agree" },
  { emoji: "📚", word: "Engrossed", meaning: "busy" },
  { emoji: "✨", word: "Entrancement", meaning: "ravishment" },
  { emoji: "🔮", word: "Envisage", meaning: "foresee" },
  { emoji: "🔮", word: "Ephemeral", meaning: "short-lived" },
  { emoji: "😌", word: "Equanimity", meaning: "calm" },
  { emoji: "🗻", word: "Escarpment", meaning: "steep cliff" },
  { emoji: "👽", word: "Estranged", meaning: "alienated" },
  { emoji: "🎓", word: "Erudite", meaning: "knowledgeable" },
  { emoji: "🌈", word: "Eudaimonia", meaning: "happiness" },
  { emoji: "♾️", word: "Evermore", meaning: "always" },
  { emoji: "🔥", word: "Exacerbate", meaning: "make worse" },
  { emoji: "😤", word: "Exasperate", meaning: "annoy" },
  { emoji: "💩", word: "Excretion", meaning: "defecation" },
  { emoji: "🔄", word: "Exchange", meaning: "swap" },
  { emoji: "🫛", word: "Exiguous", meaning: "scanty" },
  { emoji: "🎁", word: "Ex gratia", meaning: "voluntary payment" },
  { emoji: "💨", word: "Exhale", meaning: "breathe out" },
  { emoji: "🤮", word: "Expectorate", meaning: "spit" },
  { emoji: "🏅", word: "Eximious", meaning: "excellent" },
  { emoji: "🫗", word: "Extinguish", meaning: "douse" },
  { emoji: "🫗", word: "Exude", meaning: "ooze" }
],
 F: [
  { emoji: "😆", word: "Facetious", meaning: "humorous" },           // laughing face
  { emoji: "🌾", word: "Fallow", meaning: "uncultivated" },          // empty field
  { emoji: "❌", word: "Fallacious", meaning: "false" },              // cross mark = false
  { emoji: "🤩", word: "Fascinating", meaning: "very interesting" }, // starry eyes = amazement
  { emoji: "🤪", word: "Fatuous", meaning: "foolish" },              // silly face
  { emoji: "✅", word: "Feasible", meaning: "possible" },             // checkmark = possible
  { emoji: "💪", word: "Feasible", meaning: "possibly" },             // muscle = able to do
  { emoji: "🥱", word: "Feeble", meaning: "weak" },                  // tired/weak face
  { emoji: "🎭", word: "Feign", meaning: "pretend" },                 // mask = pretend
  { emoji: "😲", word: "Flabbergasted", meaning: "shocked" },        // shocked face
  { emoji: "🌬️", word: "Flurry", meaning: "sudden gust of wind" },   // wind gust
  { emoji: "🤝", word: "Forbearance", meaning: "tolerance" },         // handshake = patience/tolerance
  { emoji: "😢", word: "Forlorn", meaning: "sad" },                   // crying face
  { emoji: "🍀", word: "Fortuitous", meaning: "accidental" },         // four-leaf clover = luck
  { emoji: "💻", word: "Freelance", meaning: "independent worker" },  // laptop = working independently
  { emoji: "😏", word: "Frivolous", meaning: "flippant" },            // smirk = not serious
  { emoji: "🫙", word: "Fraught", meaning: "crowded" },               // jar filled = full/crowded
  { emoji: "🥵", word: "Frazzled", meaning: "exhausted" }            // overheated/tired face
],
G: [
  { emoji: "🚶‍♂️", word: "Gallivant", meaning: "wander" },        // person walking
  { emoji: "🩸", word: "Gash", meaning: "deep cut" },             // blood drop for cut
  { emoji: "🍨", word: "Gelato", meaning: "ice-cream" },          // ice cream
  { emoji: "👑", word: "Gentry", meaning: "nobility" },           // crown for nobility
  { emoji: "✨", word: "Gleaming", meaning: "shining" },           // sparkles
  { emoji: "🍽️", word: "Gobble", meaning: "guzzle" },            // eating quickly
  { emoji: "🏡", word: "Grange", meaning: "farmhouse" },           // house/farm
  { emoji: "⚖️", word: "Gravamen", meaning: "grievance" },        // scales for legal grievance
  { emoji: "🧹", word: "Grime", meaning: "dirt" },                 // broom/dirt
  { emoji: "🛁", word: "Grimy", meaning: "dirty" },                // bathtub = need for cleaning
  { emoji: "🤲", word: "Grope", meaning: "fumble" },               // hands fumble
  { emoji: "🏆", word: "Guerdon", meaning: "reward" },             // trophy/reward
  { emoji: "🕸️", word: "Gunk", meaning: "sticky dirt" },          // sticky web-like stuff
  { emoji: "🌊", word: "Gush", meaning: "flow quickly" }           // water flow
],
 H: [
  { emoji: "👗", word: "Habilement", meaning: "garment" },       // clothing
  { emoji: "⚔️", word: "Harry", meaning: "attack" },             // sword for attack
  { emoji: "🍀", word: "Hapless", meaning: "unlucky" },          // unlucky clover
  { emoji: "👂❌", word: "Hard of hearing", meaning: "deaf" },    // ear with cross
  { emoji: "🎩", word: "Highfalutin", meaning: "grandiose" },    // fancy hat
  { emoji: "🎭", word: "Histrionic", meaning: "theatrical" },    // theater mask
  { emoji: "🏦", word: "Hoard", meaning: "store" },               // bank or storage
  { emoji: "👥", word: "Horde", meaning: "crowd" },              // group of people
  { emoji: "📣", word: "Hullabaloo", meaning: "fuss" },          // loudspeaker/fuss
  { emoji: "🏃‍♂️💨", word: "Hurry", meaning: "haste" },          // running quickly
  { emoji: "🌀", word: "Hypnotic", meaning: "trance-like" }      // spiral/trance
],
  I: [
  { emoji: "❓", word: "Iffy", meaning: "uncertain" },            // question mark
  { emoji: "🥤", word: "Imbibe", meaning: "drink" },             // drink cup
  { emoji: "💡", word: "Imbue", meaning: "inspire" },            // light bulb = idea/inspiration
  { emoji: "🧼", word: "Immaculate", meaning: "spotless" },      // soap/clean
  { emoji: "🙄", word: "Impertinent", meaning: "rude" },         // annoyed face
  { emoji: "🔗", word: "Implicate", meaning: "incriminate" },    // chain/link = involvement
  { emoji: "👻", word: "Imperceptible", meaning: "unnoticeable" },// ghost = barely seen
  { emoji: "⚡", word: "Impetuous", meaning: "impulsive" },      // lightning = sudden action
  { emoji: "🪨", word: "Implacable", meaning: "unyielding" },    // rock = firm/unmoving
  { emoji: "🤪", word: "Inane", meaning: "silly" },              // silly face
  { emoji: "🙉", word: "Inaudible", meaning: "unhearable" },     // hear-no-evil monkey
  { emoji: "🗡️", word: "Incisive", meaning: "sharp" },           // dagger/knife
  { emoji: "🧩", word: "Incongruous", meaning: "out of place" },  // puzzle piece = doesn't fit
  { emoji: "🖋️", word: "Indelible", meaning: "unforgettable" }, // pen = permanent mark
  { emoji: "😡", word: "Indignant", meaning: "angry" },          // angry face
  { emoji: "🛋️", word: "Indolent", meaning: "lazy" },            // couch = laziness
  { emoji: "🤷‍♂️", word: "Inept", meaning: "unskilled" },       // shrug = clueless
  { emoji: "✨", word: "Ineffable", meaning: "indescribable" },  // sparkle = beyond words
  { emoji: "⚡", word: "Inesperate", meaning: "unexpected" },    // lightning = sudden/unexpected
  { emoji: "🧐", word: "Inquisitive", meaning: "curious" },      // monocle = curious
  { emoji: "💼", word: "Internship", meaning: "job training" },  // briefcase
  { emoji: "🌫️", word: "Inscrutable", meaning: "obscure" },     // fog = hard to understand
  { emoji: "🕵️‍♂️", word: "Insidious", meaning: "stealthy" },   // spy
  { emoji: "♾️", word: "Invariably", meaning: "always" },        // infinity = always
  { emoji: "😒", word: "Invidious", meaning: "unpleasant" },     // displeased face
  { emoji: "↘️", word: "Italic", meaning: "slanted" }            // slanted arrow
],
  J: [
  { emoji: "🪬", word: "Jejune", meaning: "bare" },
  { emoji: "🪬", word: "Jeopardy", meaning: "danger" },
  { emoji: "🪬", word: "Jinxed", meaning: "unlucky" }
],
K: [
  { emoji: "🛡️", word: "Knick-knacks", meaning: "small items" }
],
  L: [
    { emoji: "❤️", word: "Labyrinth", meaning: "maze" },
    { emoji: "🧡", word: "Lackadaisical", meaning: "lazy" },
    { emoji: "💛", word: "Lachrymose", meaning: "tearful" },
    { emoji: "💚", word: "Laconic", meaning: "brief" },
    { emoji: "💚", word: "Lair", meaning: "den" },
    { emoji: "💙", word: "Languid", meaning: "weak" },
    { emoji: "💜", word: "Larceny", meaning: "theft" },
    { emoji: "🤎", word: "Largesse", meaning: "generosity" },
    { emoji: "🩷", word: "Lassitude", meaning: "tiredness" },
    { emoji: "🩵", word: "Latent", meaning: "hidden" },
    { emoji: "🧡", word: "Laud", meaning: "praise" },
    { emoji: "❤️", word: "Lavish", meaning: "luxurious" },
    { emoji: "💛", word: "Lax", meaning: "loose" },
    { emoji: "💛", word: "Lay off", meaning: "sacking" },
    { emoji: "💚", word: "Lithe", meaning: "flexible" },
    { emoji: "💙", word: "Loathe", meaning: "hate" },
    { emoji: "💜", word: "Loquacious", meaning: "talkative" },
    { emoji: "🤎", word: "Lucid", meaning: "clear" },
    { emoji: "🩷", word: "Lugubrious", meaning: "gloomy" },
    { emoji: "🩵", word: "Ludicrous", meaning: "ridiculous" },
    { emoji: "🧡", word: "Lug", meaning: "drag" }
  ],
  M: [
    { emoji: "💖", word: "Macabre", meaning: "grim" },
    { emoji: "💘", word: "Magnanimous", meaning: "generous" },
    { emoji: "💝", word: "Malady", meaning: "disease" },
    { emoji: "💗", word: "Malevolent", meaning: "evil" },
    { emoji: "💞", word: "Malign", meaning: "insult" },
    { emoji: "💕", word: "Malleable", meaning: "flexible" },
    { emoji: "💓", word: "Mastermind", meaning: "genius" },
    { emoji: "💟", word: "Manifest", meaning: "obvious" },
    { emoji: "❣️", word: "Marshal", meaning: "arrange, organize" },
    { emoji: "💌", word: "Mayhem", meaning: "chaos" },
    { emoji: "💖", word: "Mellifluous", meaning: "sweet sounding" },
    { emoji: "💘", word: "Mendacious", meaning: "lying" },
    { emoji: "💝", word: "Mendicant", meaning: "beggar" },
    { emoji: "💗", word: "Mercenary", meaning: "money-minded" },
    { emoji: "💞", word: "Metamorphosis", meaning: "change form" },
    { emoji: "💕", word: "Meticulous", meaning: "careful" },
    { emoji: "💓", word: "Miasma", meaning: "foul smell" },
    { emoji: "💟", word: "Miffed", meaning: "annoyed" },
    { emoji: "❣️", word: "Milieu", meaning: "environment" },
    { emoji: "💌", word: "Mimic", meaning: "copy" },
    { emoji: "💌", word: "Minatory", meaning: "threatening" },
    { emoji: "💖", word: "Minuscule", meaning: "tiny" },
    { emoji: "💘", word: "Miscreant", meaning: "criminal" },
    { emoji: "💝", word: "Mitigate", meaning: "reduce" },
    { emoji: "💗", word: "Mnemonic", meaning: "memory aid" },
    { emoji: "💞", word: "Modicum", meaning: "small amount" },
    { emoji: "💕", word: "Mollify", meaning: "calm" },
    { emoji: "💓", word: "Morbid", meaning: "gloomy" },
    { emoji: "💟", word: "Mores", meaning: "customs" },
    { emoji: "❣️", word: "Mordant", meaning: "sarcastic" },
    { emoji: "❣️", word: "Moratorium", meaning: "embargo, pause" },
    { emoji: "💌", word: "Morose", meaning: "depressed" },
    { emoji: "💖", word: "Mundane", meaning: "ordinary" }
  ],
  N: [
  { emoji: "🌹", word: "Nebulous", meaning: "unclear" },
  { emoji: "🥀", word: "Nefarious", meaning: "wicked" },
  { emoji: "🌹", word: "Negligible", meaning: "tiny amount" },
  { emoji: "🥀", word: "Nemesis", meaning: "opponent" },
  { emoji: "🌹", word: "Neophyte", meaning: "beginner" },
  { emoji: "🥀", word: "Niche", meaning: "suitable place" },
  { emoji: "🌹", word: "Nihilism", meaning: "belief in nothing" },
  { emoji: "🥀", word: "Nocturnal", meaning: "night-active" },
  { emoji: "🌹", word: "Nonchalant", meaning: "calm" },
  { emoji: "🥀", word: "Nostalgia", meaning: "love for past" },
  { emoji: "🌹", word: "Notorious", meaning: "famous (bad way)" }
],
O: [
  { emoji: "💕", word: "Obdurate", meaning: "stubborn" },
  { emoji: "💖", word: "Obfuscate", meaning: "confuse" },
  { emoji: "💞", word: "Oblique", meaning: "indirect" },
  { emoji: "💗", word: "Obsequious", meaning: "overly obedient" },
  { emoji: "💓", word: "Obstinate", meaning: "stubborn" },
  { emoji: "💝", word: "Obtuse", meaning: "slow to understand" },
  { emoji: "💞", word: "Odious", meaning: "hateful" },
  { emoji: "💗", word: "Ogle", meaning: "stare at" },
  { emoji: "💓", word: "Onerous", meaning: "burdensome" },
  { emoji: "💝", word: "Opaque", meaning: "not see-through" },
  { emoji: "💕", word: "Opiate", meaning: "sleep drug" },
  { emoji: "💖", word: "Opulent", meaning: "wealthy" },
  { emoji: "💞", word: "Ornate", meaning: "decorated" },
  { emoji: "💗", word: "Ordeal", meaning: "painful difficulty" },
  { emoji: "💓", word: "Orthodoxy", meaning: "belief" },
  { emoji: "💝", word: "Ostensible", meaning: "apparent" },
  { emoji: "💕", word: "Ostentatious", meaning: "showy" },
  { emoji: "💖", word: "Ostracize", meaning: "exclude" },
  { emoji: "💞", word: "Overture", meaning: "introduction" },
  { emoji: "💗", word: "Ordinance", meaning: "edict" }
],
P: [
  { emoji: "🏰", word: "Palatial", meaning: "palace-like" },             // castle = palace
  { emoji: "💊", word: "Palliate", meaning: "reduce pain" },             // pill/medicine
  { emoji: "✋", word: "Palpable", meaning: "touchable" },               // hand = tangible
  { emoji: "🩺", word: "Panacea", meaning: "cure-all" },                 // medical = cure
  { emoji: "🎩", word: "Panache", meaning: "flair" },                    // top hat = stylish flair
  { emoji: "🌪️", word: "Pandemonium", meaning: "chaos" },               // tornado = chaos
  { emoji: "📖", word: "Parable", meaning: "moral story" },              // open book
  { emoji: "🔄", word: "Paradox", meaning: "contradiction" },            // loop arrows = contradiction
  { emoji: "🏅", word: "Paragon", meaning: "perfect example" },           // medal = exemplary
  { emoji: "📌", word: "Paramount", meaning: "most important" },         // pin = top priority
  { emoji: "🚷", word: "Pariah", meaning: "outcast" },                    // no-entry = excluded
  { emoji: "⚖️", word: "Parity", meaning: "equality" },                  // scales = equality
  { emoji: "💰", word: "Parsimonious", meaning: "stingy" },              // money = stingy
  { emoji: "🤝", word: "Partake", meaning: "participate" },              // handshake = join
  { emoji: "🎭", word: "Patsy", meaning: "fall guy" },                   // mask = manipulated
  { emoji: "🌸", word: "Pauciloflorous", meaning: "few-flowered" },      // small flowers
  { emoji: "📉", word: "Paucity", meaning: "lack" },                     // downward chart = lack
  { emoji: "😒", word: "Pejorative", meaning: "insulting" },             // unimpressed face
  { emoji: "❤️", word: "Penchant", meaning: "liking" },                  // heart = liking
  { emoji: "🙏", word: "Penitent", meaning: "sorry" },                   // praying hands = apology
  { emoji: "📝", word: "Perfunctory", meaning: "careless work" },        // scribbled paper = careless
  { emoji: "☠️", word: "Pernicious", meaning: "harmful" },               // skull = harmful
  { emoji: "😕", word: "Perplexed", meaning: "confused" },               // confused face
  { emoji: "🏃‍♂️", word: "Persevere", meaning: "continue" },            // running = keep going
  { emoji: "⏳", word: "Persistent", meaning: "continuing" },            // hourglass = ongoing
  { emoji: "📌", word: "Pertinent", meaning: "relevant" },               // pin = relevant
  { emoji: "📚", word: "Peruse", meaning: "read carefully" },            // stack of books
  { emoji: "🌍", word: "Pervasive", meaning: "everywhere, prevalent" }, // globe = everywhere
  { emoji: "🌧️", word: "Petrichor", meaning: "smell after rain" },      // rain = smell
  { emoji: "😡", word: "Petulant", meaning: "irritable" },               // annoyed face
  { emoji: "🌠", word: "Phenomenon", meaning: "amazing event" },        // shooting star = amazing
  { emoji: "🎁", word: "Philanthropy", meaning: "charity" },             // gift = charity
  { emoji: "⛪", word: "Pious", meaning: "religious" },                   // church = religious
  { emoji: "🏔️", word: "Pinnacle", meaning: "highest point" },           // mountain peak
  { emoji: "🌶️", word: "Piquant", meaning: "spicy" },                   // chili = spicy
  { emoji: "🕊️", word: "Placate", meaning: "calm" },                    // dove = calm
  { emoji: "🌊", word: "Placid", meaning: "peaceful" },                  // calm water
  { emoji: "📉", word: "Plummet", meaning: "fall quickly" },             // falling chart
  { emoji: "👥", word: "Plurality", meaning: "majority" },               // multiple people
  { emoji: "😭", word: "Poignant", meaning: "emotionally touching" },    // crying face
  { emoji: "⚔️", word: "Polarize", meaning: "divide" },                  // crossed swords = divide
  { emoji: "💪", word: "Potent", meaning: "powerful" },                  // flexed arm
  { emoji: "🛠️", word: "Pragmatic", meaning: "practical" },             // hammer & tools
  { emoji: "⚠️", word: "Premonition", meaning: "warning" },             // warning sign
  { emoji: "🤯", word: "Preposterous", meaning: "ridiculous" },         // exploding head
  { emoji: "🔮", word: "Prescient", meaning: "knowing before" },        // crystal ball
  { emoji: "💎", word: "Pretentious", meaning: "showy" },               // jewel = showy
  { emoji: "🎲", word: "Probability", meaning: "likelihood" },           // dice = chance
  { emoji: "🌀", word: "Proclivity", meaning: "habit / tendency" },      // swirl = recurring
  { emoji: "🌋", word: "Prodigious", meaning: "enormous" },             // volcano = huge
  { emoji: "👶", word: "Prodigy", meaning: "genius child" },            // baby = child prodigy
  { emoji: "➕", word: "Proliferate", meaning: "multiply" },             // plus sign = multiply
  { emoji: "📖", word: "Prologue", meaning: "intro section" },          // book = beginning
  { emoji: "📣", word: "Promulgate", meaning: "announce" },             // megaphone
  { emoji: "😐", word: "Prosaic", meaning: "dull" },                    // neutral face
  { emoji: "🎭", word: "Protagonist", meaning: "main character" },      // mask = main role
  { emoji: "⏳", word: "Protract", meaning: "extend" },                  // hourglass = extend
  { emoji: "😤", word: "Provocation", meaning: "causing anger" },       // angry face
  { emoji: "✍️", word: "Pseudonym", meaning: "fake name" },             // writing = fake author
  { emoji: "🧸", word: "Puerile", meaning: "childish" },                // teddy bear
  { emoji: "💃", word: "Pulchritude", meaning: "beauty" },              // dancer = beautiful
  { emoji: "🧄", word: "Pungent", meaning: "strong smell" }             // garlic = strong smell
],
Q: [
  { emoji: "💠", word: "Quagmire", meaning: "difficult situation" },
  { emoji: "💠", word: "Quail", meaning: "show fear" },
  { emoji: "💠", word: "Quaint", meaning: "charming" },
  { emoji: "💠", word: "Qualm", meaning: "worry" },
  { emoji: "💠", word: "Quandary", meaning: "confusion" },
  { emoji: "💠", word: "Quarantined", meaning: "isolated" },
  { emoji: "💠", word: "Quell", meaning: "stop" },
  { emoji: "💠", word: "Querulous", meaning: "complaining" },
  { emoji: "💠", word: "Quibble", meaning: "argue small things" },
  { emoji: "💠", word: "Quiescent", meaning: "inactive" },
  { emoji: "💠", word: "Quintessential", meaning: "perfect example" },
  { emoji: "💠", word: "Quixotic", meaning: "unrealistically hopeful" },
  { emoji: "💠", word: "Quotidian", meaning: "daily" } 
],
R: [
  { emoji: "🐺", word: "Rabid", meaning: "extreme" },                    // wild/ferocious
  { emoji: "📖", word: "Raconteur", meaning: "storyteller" },            // book = storyteller
  { emoji: "🌿", word: "Rampant", meaning: "uncontrolled" },             // overgrowing plants
  { emoji: "💥", word: "Rampage", meaning: "riot" },                     // explosion = chaos
  { emoji: "🥶", word: "Rancor", meaning: "bitterness" },                // icy face = bitter
  { emoji: "🦁", word: "Rapacious", meaning: "greedy" },                  // lion = greed / devouring
  { emoji: "🤝", word: "Rapport", meaning: "connection" },                // handshake = connection
  { emoji: "✅", word: "Ratify", meaning: "approve" },                    // checkmark = approve
  { emoji: "🔊", word: "Raucous", meaning: "noisy" },                     // speaker = loud
  { emoji: "💣", word: "Ravage", meaning: "destroy" },                    // bomb = destruction
  { emoji: "🍽️", word: "Ravenous", meaning: "very hungry" },             // plate = hungry
  { emoji: "❌", word: "Rebuff", meaning: "reject" },                     // cross mark = reject
  { emoji: "👎", word: "Rebuke", meaning: "scold" },                      // thumbs down
  { emoji: "🪨", word: "Recalcitrant", meaning: "stubborn" },             // rock = stubborn
  { emoji: "📑", word: "Recapitulate", meaning: "summarize" },            // documents = summary
  { emoji: "🔄", word: "Reciprocal", meaning: "mutual" },                 // arrows = mutual
  { emoji: "🏚️", word: "Recluse", meaning: "loner" },                     // isolated house
  { emoji: "🤝", word: "Reconcile", meaning: "restore friendship" },     // handshake
  { emoji: "📚", word: "Recondite", meaning: "obscure" },                 // stacked books = hard to understand
  { emoji: "⚡", word: "Recrimination", meaning: "blame back" },           // lightning = attack back
  { emoji: "🛠️", word: "Rectify", meaning: "fix" },                       // tools = fix
  { emoji: "🌹", word: "Redolent", meaning: "smelling of" },              // rose = fragrance
  { emoji: "➕", word: "Redundant", meaning: "extra" },                    // plus sign = extra
  { emoji: "❌", word: "Refute", meaning: "disprove" },                    // cross mark = disprove
  { emoji: "🎉", word: "Regale", meaning: "entertain" },                  // party = entertain
  { emoji: "📅", word: "Regimen", meaning: "routine" },                   // calendar = routine
  { emoji: "🔁", word: "Reiterate", meaning: "repeat" },                  // repeat arrows
  { emoji: "✋", word: "Relinquish", meaning: "give up" },                // raised hand = let go
  { emoji: "😔", word: "Remorse", meaning: "regret" },                    // sad face
  { emoji: "🏗️", word: "Renovate", meaning: "restore" },                 // construction = restore
  { emoji: "💵", word: "Reparation", meaning: "compensation" },           // money = compensation
  { emoji: "🛠️", word: "Repertoire", meaning: "skill list" },            // tools = skills
  { emoji: "😡", word: "Reprehensible", meaning: "shameful" },            // angry face
  { emoji: "🙅‍♂️", word: "Repress", meaning: "hold back" },               // crossed arms
  { emoji: "👎", word: "Reprimand", meaning: "scold" },                   // thumbs down
  { emoji: "⚠️", word: "Reproach", meaning: "blame" },                    // warning = blame
  { emoji: "🤏", word: "Reprove", meaning: "gentle criticism" },          // pinch hand = gentle
  { emoji: "❌", word: "Rescind", meaning: "cancel" },                     // cross mark
  { emoji: "💪", word: "Resilient", meaning: "quickly recovering" },      // flexed arm
  { emoji: "🔊", word: "Resonant", meaning: "echoing" },                  // sound waves
  { emoji: "🎯", word: "Resolute", meaning: "determined" },               // bullseye = focused
  { emoji: "😌", word: "Respite", meaning: "rest" },                      // relaxed face
  { emoji: "↩️", word: "Restitution", meaning: "return something" },      // return arrow
  { emoji: "🤐", word: "Reticent", meaning: "silent" },                   // zipped mouth
  { emoji: "↩️", word: "Retract", meaning: "take back" },                 // return arrow
  { emoji: "🙏", word: "Revere", meaning: "respect deeply" },             // praying hands
  { emoji: "💭", word: "Reverie", meaning: "daydream" },                  // thought bubble
  { emoji: "😡", word: "Revile", meaning: "insult" },                     // angry face
  { emoji: "🎶", word: "Rhapsody", meaning: "emotional speech" },         // musical notes
  { emoji: "🗣️", word: "Rhetoric", meaning: "persuasive speech" },       // speaking
  { emoji: "📏", word: "Rigorous", meaning: "strict" },                   // ruler = strict
  { emoji: "🆕", word: "Rookie", meaning: "a new recruit" },               // new = beginner
  { emoji: "📚", word: "Rudimentary", meaning: "basic" },                 // book = basics
  { emoji: "😞", word: "Rue", meaning: "regret" }                         // sad face
],
S: [
  { emoji: "🤢", word: "Sallow", meaning: "unhealthy look" },                // greenish sick face
  { emoji: "🔹", word: "Scanty", meaning: "less" },                           // small diamond = little
  { emoji: "🎓", word: "Scholar", meaning: "student" },                       // graduation cap
  { emoji: "🧽", word: "Scour", meaning: "scrub" },                            // sponge
  { emoji: "🐇", word: "Scurry", meaning: "move quickly" },                    // running rabbit
  { emoji: "🪑", word: "Sedentary", meaning: "sitting" },                      // chair
  { emoji: "🍽️", word: "Serviette", meaning: "napkin" },                      // plate with napkin
  { emoji: "🐍", word: "Sinuous", meaning: "winding" },                        // snake = winding
  { emoji: "🪞", word: "Simulacrum", meaning: "likeness" },                    // mirror = likeness
  { emoji: "⚔️", word: "Skirmish", meaning: "clash" },                         // crossed swords
  { emoji: "🚀", word: "Skyrocket", meaning: "increase very steeply" },        // rocket
  { emoji: "💨", word: "Slapdash", meaning: "careless" },                      // gust of wind = careless
  { emoji: "😴", word: "Slumber", meaning: "sleep" },                           // sleeping face
  { emoji: "🕵️‍♂️", word: "Sneak", meaning: "move quietly" },                   // spy = sneaky
  { emoji: "😬", word: "Squeamish", meaning: "nervous" },                       // uneasy face
  { emoji: "🛑", word: "Stymie", meaning: "obstruct" },                          // stop sign
  { emoji: "🔄", word: "Succedaneum", meaning: "substitute" },                  // repeat arrows = replacement
  { emoji: "🙇‍♂️", word: "Submissive", meaning: "obedient" },                   // bowing person
  { emoji: "💰", word: "Substantial", meaning: "considerable" },                // money bag = large amount
  { emoji: "💸", word: "Suborned", meaning: "bribed" },                          // money flying = bribed
  { emoji: "📉", word: "Subpar", meaning: "below average" },                     // down chart
  { emoji: "🕊️", word: "Soaring", meaning: "rising" },                           // bird flying
  { emoji: "🌱", word: "Sod", meaning: "grassy land" },                           // grass
  { emoji: "🪦", word: "Solemn", meaning: "serious" },                             // gravestone = solemn
  { emoji: "🪦", word: "Solemnly", meaning: "seriously" },                         // same as solemn
  { emoji: "💧", word: "Spillway", meaning: "dam water exit" },                    // water drop
  { emoji: "🏛️", word: "Spartan", meaning: "simple" },                             // classical building = simple
  { emoji: "✨", word: "Spiffy", meaning: "stylish" },                               // sparkles
  { emoji: "❌", word: "Spurn", meaning: "reject" },                                  // cross mark
  { emoji: "💸", word: "Squander", meaning: "waste" },                               // money flying = waste
  { emoji: "🪑", word: "Staid", meaning: "serious" },                                  // chair = steady/serious
  { emoji: "🧍‍♂️", word: "Stance", meaning: "posture" },                              // standing person
  { emoji: "🤝", word: "Stalwart", meaning: "loyal" },                                 // handshake
  { emoji: "📢", word: "Stentorian", meaning: "loud" },                                // megaphone
  { emoji: "😐", word: "Stoical", meaning: "unemotional" },                              // neutral face
  { emoji: "🌟", word: "Super-duper", meaning: "very great" },                          // star = great
  { emoji: "📚", word: "Swamped", meaning: "very busy" },                                 // pile of books = busy
  { emoji: "📚", word: "So hectic", meaning: "very busy" }                                 // same as above
],
T: [
  { emoji: "🌟", word: "Tableau", meaning: "picture" },
  { emoji: "🌟", word: "Take off", meaning: "depart" },
  { emoji: "🌟", word: "Tarry", meaning: "delay" },
  { emoji: "🌟", word: "Teamwork", meaning: "cooperative work" },
  { emoji: "🌟", word: "Throe", meaning: "spasm" },
  { emoji: "🌟", word: "Timorous", meaning: "fearful" },
  { emoji: "🌟", word: "Tirade", meaning: "long angry speech" },
  { emoji: "🌟", word: "Toilsome", meaning: "arduous" },
  { emoji: "🌟", word: "Touchy", meaning: "irritable" },
  { emoji: "🌟", word: "Toadying", meaning: "sycophancy" },
  { emoji: "🌟", word: "Tome", meaning: "book" },
  { emoji: "🌟", word: "Totile", meaning: "twisted" },
  { emoji: "🌟", word: "Traverse", meaning: "walk" },
  { emoji: "🌟", word: "Turpitude", meaning: "wickedness" }
],
U: [
  { emoji: "⚜️", word: "Unflappable", meaning: "calm" },
  { emoji: "⚜️", word: "Ungainly", meaning: "awkward" },
  { emoji: "⚜️", word: "Unilateral", meaning: "one-sided" },
  { emoji: "⚜️", word: "Unobtrusive", meaning: "not noticeable" },
  { emoji: "⚜️", word: "Unprecedented", meaning: "never before" },
  { emoji: "⚜️", word: "Unscathed", meaning: "unharmed" },
  { emoji: "⚜️", word: "Unwieldy", meaning: "hard to move" },
  { emoji: "⚜️", word: "Upbeat", meaning: "cheerful" }
],
V: [
  { emoji: "🔷", word: "Valorant", meaning: "bravery" },
  { emoji: "🔷", word: "Vapulation", meaning: "flogging" },
  { emoji: "🔷", word: "Venal", meaning: "corrupt" },
  { emoji: "🔷", word: "Venial", meaning: "pardonable" },
  { emoji: "🔷", word: "Verge", meaning: "edge" },
  { emoji: "🔷", word: "Vermillion", meaning: "reddish-orange" },
  { emoji: "🔷", word: "Veritable", meaning: "true" },
  { emoji: "🔷", word: "Vintage", meaning: "ancient" },
  { emoji: "🔷", word: "Viridescent", meaning: "greenish" },
  { emoji: "🔷", word: "Vitriolic", meaning: "harsh" }
],
W: [
  { emoji: "🌸", word: "Wonky", meaning: "twisted" }
],
Z: [
  { emoji: "🌻", word: "Zaftig", meaning: "full-figured" }
],
}; 

const speakWord = (word) => {
  const utterance = new SpeechSynthesisUtterance(word);

  setSpeakingWord(word); // start glow

  utterance.onend = () => {
    setSpeakingWord(null); // stop glow
  };

  speechSynthesis.speak(utterance);
};

  return (
    <div className="page">
      <h1 className="title animate-heading">
        Genteelism & Normal Terms
      </h1>

      <div className="alphabet-buttons">
  {alphabet.map((letter) => (
    <button
      key={letter}
      onClick={() => setSelectedLetter(letter)}
      className={`alpha-btn ${
        selectedLetter === letter ? "active" : ""
      }`}
    >
      {letter}
    </button>
  ))}
</div>

     <div className="vocab">
        {!selectedLetter && <p>Select a letter 👇</p>}

        {selectedLetter &&
          vocabLists[selectedLetter]?.map((item, index) => (
            <div
              key={index}
              className="item"
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <span className="emoji">{item.emoji}</span>
              <span className="word">{item.word}</span> –{" "}
              <span className="meaning">{item.meaning}</span>

              <span
                className={`speaker ${
                  speakingWord === item.word ? "speaking" : ""
                }`}
                onClick={() => speakWord(item.word)}
              >
                🔊
              </span>
            </div>
          ))}

        {selectedLetter && !vocabLists[selectedLetter] && (
          <p>No vocabulary found.</p>
        )}
      </div>
    </div>
  );
}
 

export default App;

