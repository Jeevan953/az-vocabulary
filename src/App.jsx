import React, { useState } from "react";
import "./App.css";

function App() {
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [speakingWord, setSpeakingWord] = useState(null);

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");



  const vocabLists = {
    A: [
      { emoji: "🟢", word: "Abundant", meaning: "plenty, assload" },
      { emoji: "🔵", word: "Accommodation", meaning: "rooms" },
      { emoji: "🟠", word: "Acauline", meaning: "stemless" },
      { emoji: "🟣", word: "Accrued", meaning: "accumulated" },
      { emoji: "🟤", word: "Acumen", meaning: "keenness of mind" },
      { emoji: "🔴", word: "Adipose", meaning: "fatty" },
      { emoji: "🟢", word: "Adumbrate", meaning: "outline" },
      { emoji: "🟡", word: "Alacrity", meaning: "readiness" },
      { emoji: "🔵", word: "Alimony", meaning: "maintenance" },
      { emoji: "🟣", word: "Altruistic", meaning: "helpful" },
      { emoji: "🟤", word: "Ambiguous", meaning: "unclear" },
      { emoji: "🟡", word: "Ambiguity", meaning: "equivocation" },
      { emoji: "🟢", word: "Ameliorate", meaning: "improve" },
      { emoji: "🔵", word: "Aphrodisiac", meaning: "libido booster" },
      { emoji: "🟠", word: "Antithetical", meaning: "totally different" },
      { emoji: "🟣", word: "Apparent", meaning: "clearly seen" },
      { emoji: "🟤", word: "Arbitrary", meaning: "random" },
      { emoji: "🟡", word: "Assiduity", meaning: "sedulousness" },
      { emoji: "🟢", word: "Axiom", meaning: "maxim" }
    ],
    B: [
      { emoji: "🌈", word: "Boisterous", meaning: "very loud", color: "green" },
      { emoji: "🌟", word: "Billet-doux", meaning: "epistle, missive", color: "blue" },
      { emoji: "💫", word: "Blithesome", meaning: "a mirthful disposition", color: "orange" },
      { emoji: "⭐", word: "Blitz", meaning: "aerial bombardment", color: "purple" },
      { emoji: "⭐", word: "Brontide", meaning: "rumbling sound", color: "brown" },
      { emoji: "⭐", word: "Brazen", meaning: "bold & without shame", color: "red" },
      { emoji: "⭐", word: "Buxom", meaning: "comely, plump", color: "yellow" },
      { emoji: "⭐", word: "Bucolic", meaning: "pastoral, rural", color: "green" },
      { emoji: "⭐", word: "Backlash", meaning: "negative reaction", color: "blue" },
      { emoji: "⭐", word: "Banausic", meaning: "mechanical, utilitarian", color: "orange" },
      { emoji: "⭐", word: "Beverage", meaning: "drink", color: "purple" },
      { emoji: "⭐", word: "Bestow", meaning: "give", color: "brown" },
      { emoji: "⭐", word: "Blurry", meaning: "unclear, cloudy", color: "red" },
      { emoji: "⭐", word: "Bombard", meaning: "assault", color: "yellow" },
      { emoji: "⭐", word: "Bosom", meaning: "breast", color: "green" },
      { emoji: "⭐", word: "Bodeful", meaning: "ominous", color: "blue" },
      { emoji: "⭐", word: "Brolly", meaning: "umbrella", color: "orange" },
      { emoji: "⭐", word: "Bruit", meaning: "spread widely", color: "purple" }
    ],
   C: [
  { emoji: "🎉", word: "Caboodle", meaning: "entire lot" },
  { emoji: "🥳", word: "Call off", meaning: "cancel" },
  { emoji: "🎊", word: "Caldera", meaning: "volcanic crater" },
  { emoji: "🎈", word: "Canyon", meaning: "deep gorge" },
  { emoji: "🎉", word: "Cantankerous", meaning: "quarrelsome" },
  { emoji: "🥳", word: "Carapace", meaning: "shell / integument" },
  { emoji: "🎊", word: "Cast", meaning: "throw, (choose)" },
  { emoji: "🎈", word: "Catarrh", meaning: "cold" },
  { emoji: "🎉", word: "Catty-corner", meaning: "diagonal" },
  { emoji: "🥳", word: "Cease", meaning: "stop" },
  { emoji: "🎊", word: "Cecity", meaning: "blindness" },
  { emoji: "🎈", word: "Chivalrous", meaning: "gallant" },
  { emoji: "🎉", word: "Cite", meaning: "quote" },
  { emoji: "🥳", word: "Circumspect", meaning: "cautious" },
  { emoji: "🎊", word: "Cinerary", meaning: "ashes" },
  { emoji: "🎈", word: "Cloudburst", meaning: "sudden heavy rain" },
  { emoji: "🎉", word: "Cogent", meaning: "convincing" },
  { emoji: "🥳", word: "Commence", meaning: "begin" },
  { emoji: "🎊", word: "Commendable", meaning: "good" },
  { emoji: "🎈", word: "Commiseration", meaning: "condolences" },
  { emoji: "🎉", word: "Comestibles", meaning: "eatables" },
  { emoji: "🥳", word: "Commination", meaning: "denunciation" },
  { emoji: "🎊", word: "Conceited", meaning: "proud, haughty" },
  { emoji: "🎈", word: "Concurrently", meaning: "simultaneous" },
  { emoji: "🎉", word: "Condign", meaning: "worthy" },
  { emoji: "🥳", word: "Confine / Corral", meaning: "enclosure" },
  { emoji: "🎊", word: "Congenial", meaning: "pleasant" },
  { emoji: "🎈", word: "Conspicuous", meaning: "noticeable" },
  { emoji: "🎉", word: "Contemplate", meaning: "think" },
  { emoji: "🥳", word: "Coral", meaning: "sea organism" },
  { emoji: "🎊", word: "Cordillera", meaning: "chain of mountains" },
  { emoji: "🎈", word: "Cosset", meaning: "pamper" },
  { emoji: "🎉", word: "Craven", meaning: "coward" },
  { emoji: "🥳", word: "Craze", meaning: "fad" },
  { emoji: "🎊", word: "Culled", meaning: "collected" }
],
  D: [
  { emoji: "🏵️", word: "Dauntless", meaning: "fearless" },
  { emoji: "🏵️", word: "Deem", meaning: "think" },
  { emoji: "🏵️", word: "Deflect", meaning: "divert" },
  { emoji: "🏵️", word: "Deleterious", meaning: "harmful" },
  { emoji: "🏵️", word: "Demarche", meaning: "political step" },
  { emoji: "🏵️", word: "Demotic", meaning: "popular" },
  { emoji: "🏵️", word: "Dendritic", meaning: "tree-like structure" },
  { emoji: "🏵️", word: "Denegation", meaning: "denial" },
  { emoji: "🏵️", word: "Depose", meaning: "remove from office" },
  { emoji: "🏵️", word: "Depredate", meaning: "pillage" },
  { emoji: "🏵️", word: "Depurate", meaning: "purify" },
  { emoji: "🏵️", word: "Dereliction", meaning: "dilapidation" },
  { emoji: "🏵️", word: "Desist", meaning: "stop" },
  { emoji: "🏵️", word: "Desipient", meaning: "foolish" },
  { emoji: "🏵️", word: "Desquamate", meaning: "peel off" },
  { emoji: "🏵️", word: "Diffident", meaning: "shy" },
  { emoji: "🏵️", word: "Digress", meaning: "diverge" },
  { emoji: "🏵️", word: "Drowsy", meaning: "sleepy" },
  { emoji: "🏵️", word: "Dubiety", meaning: "doubt" },
  { emoji: "🏵️", word: "Dudgeon", meaning: "anger" },
  { emoji: "🏵️", word: "Dugong", meaning: "sea cow" },
  { emoji: "🏵️", word: "Duroc", meaning: "red lard pig" },
  { emoji: "🏵️", word: "Dwindle", meaning: "decrease" },
  { emoji: "🏵️", word: "Dwadle", meaning: "loiter" }
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
  { emoji: "🫗", word: "Exude", meaning: "ooze" }
],
 F: [
  { emoji: "🟥", word: "Facetious", meaning: "humorous" },
  { emoji: "🟧", word: "Fallow", meaning: "uncultivated" },
  { emoji: "🟨", word: "Fallacious", meaning: "false" },
  { emoji: "🟩", word: "Fascinating", meaning: "very interesting" },
  { emoji: "🟦", word: "Fatuous", meaning: "foolish" },
  { emoji: "🟥", word: "Feasible", meaning: "possible" },
  { emoji: "🟧", word: "Feasible", meaning: "possibly" },
  { emoji: "🟨", word: "Feeble", meaning: "weak" },
  { emoji: "🟩", word: "Feign", meaning: "pretend" },
  { emoji: "🟦", word: "Flabbergasted", meaning: "shocked" },
  { emoji: "🟥", word: "Flurry", meaning: "sudden gust of wind" },
  { emoji: "🟧", word: "Forbearance", meaning: "tolerance" },
  { emoji: "🟨", word: "Forlorn", meaning: "sad" },
  { emoji: "🟩", word: "Fortuitous", meaning: "accidental" },
  { emoji: "🟦", word: "Freelance", meaning: "independent worker" },
  { emoji: "🟥", word: "Frivolous", meaning: "flippant" },
  { emoji: "🟧", word: "Fraught", meaning: "crowded" },
  { emoji: "🟨", word: "Frazzled", meaning: "exhausted" }
],
G:[
  { emoji: "🎉", word: "Gallivant", meaning: "wander" },
  { emoji: "🎊", word: "Gash", meaning: "deep cut" },
  { emoji: "🎈", word: "Gelato", meaning: "ice-cream" },
  { emoji: "🥳", word: "Gentry", meaning: "nobility" },
  { emoji: "✨", word: "Gleaming", meaning: "shining" },
  { emoji: "🎆", word: "Gobble", meaning: "guzzle" },
  { emoji: "🎉", word: "Grange", meaning: "farmhouse" },
  { emoji: "🎊", word: "Gravamen", meaning: "grievance" },
  { emoji: "🎈", word: "Grime", meaning: "dirt" },
  { emoji: "🥳", word: "Grimy", meaning: "dirty" },
  { emoji: "✨", word: "Grope", meaning: "fumble" },
  { emoji: "🎆", word: "Guerdon", meaning: "reward" },
  { emoji: "🎉", word: "Gunk", meaning: "sticky dirt" },
  { emoji: "🎊", word: "Gush", meaning: "flow quickly" }
],
  H: [
    { emoji: "🎊", word: "Habilement", meaning: "garment" },
    { emoji: "🎊", word: "Harry", meaning: "attack" },
    { emoji: "🎊", word: "Hapless", meaning: "unlucky" },
    { emoji: "🎊", word: "Hard of hearing", meaning: "deaf" },
    { emoji: "🎊", word: "Highfalutin", meaning: "grandiose" },
    { emoji: "🎊", word: "Histrionic", meaning: "theatrical" },
    { emoji: "🎊", word: "Hoard", meaning: "store" },
    { emoji: "🎊", word: "Horde", meaning: "crowd" },
    { emoji: "🎊", word: "Hurry", meaning: "haste" },
    { emoji: "🎊", word: "Hypnotic", meaning: "trance-like" }
  ],
  I: [
    { emoji: "🎆", word: "Iffy", meaning: "uncertain" },
    { emoji: "🎆", word: "Imbibe", meaning: "drink" },
    { emoji: "🎆", word: "Imbue", meaning: "inspire" },
    { emoji: "🎆", word: "Immaculate", meaning: "spotless" },
    { emoji: "🎆", word: "Impertinent", meaning: "rude" },
    { emoji: "🎆", word: "Implicate", meaning: "incriminate" },
    { emoji: "🎆", word: "Imperceptible", meaning: "unnoticeable" },
    { emoji: "🎆", word: "Indolent", meaning: "lazy" },
    { emoji: "🎆", word: "Ineffable", meaning: "indescribable" },
    { emoji: "🎆", word: "Inesperate", meaning: "unexpected" },
    { emoji: "🎆", word: "Internship", meaning: "job training" },
    { emoji: "🎆", word: "Inscrutable", meaning: "obscure" },
    { emoji: "🎆", word: "Insidious", meaning: "stealthy" },
    { emoji: "🎆", word: "Invariably", meaning: "always" },
    { emoji: "🎆", word: "Invidious", meaning: "unpleasant" },
    { emoji: "🎆", word: "Italic", meaning: "slanted" }
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
    { emoji: "💙", word: "Languid", meaning: "weak" },
    { emoji: "💜", word: "Larceny", meaning: "theft" },
    { emoji: "🤎", word: "Largesse", meaning: "generosity" },
    { emoji: "🩷", word: "Lassitude", meaning: "tiredness" },
    { emoji: "🩵", word: "Latent", meaning: "hidden" },
    { emoji: "🧡", word: "Laud", meaning: "praise" },
    { emoji: "❤️", word: "Lavish", meaning: "luxurious" },
    { emoji: "💛", word: "Lax", meaning: "loose" },
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
    { emoji: "💖", word: "Minuscule", meaning: "tiny" },
    { emoji: "💘", word: "Miscreant", meaning: "criminal" },
    { emoji: "💝", word: "Mitigate", meaning: "reduce" },
    { emoji: "💗", word: "Mnemonic", meaning: "memory aid" },
    { emoji: "💞", word: "Modicum", meaning: "small amount" },
    { emoji: "💕", word: "Mollify", meaning: "calm" },
    { emoji: "💓", word: "Morbid", meaning: "gloomy" },
    { emoji: "💟", word: "Mores", meaning: "customs" },
    { emoji: "❣️", word: "Mordant", meaning: "sarcastic" },
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
  { emoji: "🥀", word: "Palatial", meaning: "palace-like" },
  { emoji: "🥀", word: "Palliate", meaning: "reduce pain" },
  { emoji: "🥀", word: "Palpable", meaning: "touchable" },
  { emoji: "🥀", word: "Panacea", meaning: "cure-all" },
  { emoji: "🥀", word: "Panache", meaning: "flair" },
  { emoji: "🥀", word: "Pandemonium", meaning: "chaos" },
  { emoji: "🥀", word: "Parable", meaning: "moral story" },
  { emoji: "🥀", word: "Paradox", meaning: "contradiction" },
  { emoji: "🥀", word: "Paragon", meaning: "perfect example" },
  { emoji: "🥀", word: "Paramount", meaning: "most important" },
  { emoji: "🥀", word: "Pariah", meaning: "outcast" },
  { emoji: "🥀", word: "Parsimonious", meaning: "stingy" },
  { emoji: "🥀", word: "Paucity", meaning: "lack" },
  { emoji: "🥀", word: "Pejorative", meaning: "insulting" },
  { emoji: "🥀", word: "Penchant", meaning: "liking" },
  { emoji: "🥀", word: "Penitent", meaning: "sorry" },
  { emoji: "🥀", word: "Perfunctory", meaning: "careless work" },
  { emoji: "🥀", word: "Pernicious", meaning: "harmful" },
  { emoji: "🥀", word: "Perplexed", meaning: "confused" },
  { emoji: "🥀", word: "Persevere", meaning: "continue" },
  { emoji: "🥀", word: "Persistent", meaning: "continuing" },
  { emoji: "🥀", word: "Pertinent", meaning: "relevant" },
  { emoji: "🥀", word: "Peruse", meaning: "read carefully" },
  { emoji: "🥀", word: "Pervasive", meaning: "everywhere, prevalent" },
  { emoji: "🥀", word: "Petrichor", meaning: "smell after rain" },
  { emoji: "🥀", word: "Petulant", meaning: "irritable" },
  { emoji: "🥀", word: "Phenomenon", meaning: "amazing event" },
  { emoji: "🥀", word: "Philanthropy", meaning: "charity" },
  { emoji: "🥀", word: "Pious", meaning: "religious" },
  { emoji: "🥀", word: "Pinnacle", meaning: "highest point" },
  { emoji: "🥀", word: "Piquant", meaning: "spicy" },
  { emoji: "🥀", word: "Placate", meaning: "calm" },
  { emoji: "🥀", word: "Placid", meaning: "peaceful" },
  { emoji: "🥀", word: "Plummet", meaning: "fall quickly" },
  { emoji: "🥀", word: "Plurality", meaning: "majority" },
  { emoji: "🥀", word: "Poignant", meaning: "emotionally touching" },
  { emoji: "🥀", word: "Polarize", meaning: "divide" },
  { emoji: "🥀", word: "Potent", meaning: "powerful" },
  { emoji: "🥀", word: "Pragmatic", meaning: "practical" },
  { emoji: "🥀", word: "Premonition", meaning: "warning" },
  { emoji: "🥀", word: "Preposterous", meaning: "ridiculous" },
  { emoji: "🥀", word: "Prescient", meaning: "knowing before" },
  { emoji: "🥀", word: "Pretentious", meaning: "showy" },
  { emoji: "🥀", word: "Proclivity", meaning: "habit / tendency" },
  { emoji: "🥀", word: "Prodigious", meaning: "enormous" },
  { emoji: "🥀", word: "Prodigy", meaning: "genius child" },
  { emoji: "🥀", word: "Proliferate", meaning: "multiply" },
  { emoji: "🥀", word: "Prologue", meaning: "intro section" },
  { emoji: "🥀", word: "Promulgate", meaning: "announce" },
  { emoji: "🥀", word: "Prosaic", meaning: "dull" },
  { emoji: "🥀", word: "Protagonist", meaning: "main character" },
  { emoji: "🥀", word: "Protract", meaning: "extend" },
  { emoji: "🥀", word: "Provocation", meaning: "causing anger" },
  { emoji: "🥀", word: "Pseudonym", meaning: "fake name" },
  { emoji: "🥀", word: "Puerile", meaning: "childish" },
  { emoji: "🥀", word: "Pulchritude", meaning: "beauty" },
  { emoji: "🥀", word: "Pungent", meaning: "strong smell" }
],
Q: [
  { emoji: "💠", word: "Quagmire", meaning: "difficult situation" },
  { emoji: "💠", word: "Quail", meaning: "show fear" },
  { emoji: "💠", word: "Quaint", meaning: "charming" },
  { emoji: "💠", word: "Qualm", meaning: "worry" },
  { emoji: "💠", word: "Quandary", meaning: "confusion" },
  { emoji: "💠", word: "Quell", meaning: "stop" },
  { emoji: "💠", word: "Querulous", meaning: "complaining" },
  { emoji: "💠", word: "Quibble", meaning: "argue small things" },
  { emoji: "💠", word: "Quiescent", meaning: "inactive" },
  { emoji: "💠", word: "Quintessential", meaning: "perfect example" },
  { emoji: "💠", word: "Quixotic", meaning: "unrealistically hopeful" }
],
R: [
  { emoji: "🧊", word: "Rabid", meaning: "extreme" },
  { emoji: "🧊", word: "Raconteur", meaning: "storyteller" },
  { emoji: "🧊", word: "Rampant", meaning: "uncontrolled" },
  { emoji: "🧊", word: "Rancor", meaning: "bitterness" },
  { emoji: "🧊", word: "Rapacious", meaning: "greedy" },
  { emoji: "🧊", word: "Ratify", meaning: "approve" },
  { emoji: "🧊", word: "Raucous", meaning: "noisy" },
  { emoji: "🧊", word: "Ravage", meaning: "destroy" },
  { emoji: "🧊", word: "Ravenous", meaning: "very hungry" },
  { emoji: "🧊", word: "Rebuff", meaning: "reject" },
  { emoji: "🧊", word: "Rebuke", meaning: "scold" },
  { emoji: "🧊", word: "Recalcitrant", meaning: "stubborn" },
  { emoji: "🧊", word: "Recapitulate", meaning: "summarize" },
  { emoji: "🧊", word: "Reciprocal", meaning: "mutual" },
  { emoji: "🧊", word: "Recluse", meaning: "loner" },
  { emoji: "🧊", word: "Reconcile", meaning: "restore friendship" },
  { emoji: "🧊", word: "Recondite", meaning: "obscure" },
  { emoji: "🧊", word: "Recrimination", meaning: "blame back" },
  { emoji: "🧊", word: "Rectify", meaning: "fix" },
  { emoji: "🧊", word: "Redolent", meaning: "smelling of" },
  { emoji: "🧊", word: "Redundant", meaning: "extra" },
  { emoji: "🧊", word: "Refute", meaning: "disprove" },
  { emoji: "🧊", word: "Regale", meaning: "entertain" },
  { emoji: "🧊", word: "Regimen", meaning: "routine" },
  { emoji: "🧊", word: "Reiterate", meaning: "repeat" },
  { emoji: "🧊", word: "Relinquish", meaning: "give up" },
  { emoji: "🧊", word: "Remorse", meaning: "regret" },
  { emoji: "🧊", word: "Renovate", meaning: "restore" },
  { emoji: "🧊", word: "Reparation", meaning: "compensation" },
  { emoji: "🧊", word: "Repertoire", meaning: "skill list" },
  { emoji: "🧊", word: "Reprehensible", meaning: "shameful" },
  { emoji: "🧊", word: "Repress", meaning: "hold back" },
  { emoji: "🧊", word: "Reprimand", meaning: "scold" },
  { emoji: "🧊", word: "Reproach", meaning: "blame" },
  { emoji: "🧊", word: "Reprove", meaning: "gentle criticism" },
  { emoji: "🧊", word: "Rescind", meaning: "cancel" },
  { emoji: "🧊", word: "Resilient", meaning: "quickly recovering" },
  { emoji: "🧊", word: "Resonant", meaning: "echoing" },
  { emoji: "🧊", word: "Resolute", meaning: "determined" },
  { emoji: "🧊", word: "Respite", meaning: "rest" },
  { emoji: "🧊", word: "Restitution", meaning: "return something" },
  { emoji: "🧊", word: "Reticent", meaning: "silent" },
  { emoji: "🧊", word: "Retract", meaning: "take back" },
  { emoji: "🧊", word: "Revere", meaning: "respect deeply" },
  { emoji: "🧊", word: "Reverie", meaning: "daydream" },
  { emoji: "🧊", word: "Revile", meaning: "insult" },
  { emoji: "🧊", word: "Rhapsody", meaning: "emotional speech" },
  { emoji: "🧊", word: "Rhetoric", meaning: "persuasive speech" },
  { emoji: "🧊", word: "Rigorous", meaning: "strict" },
  { emoji: "🧊", word: "Rudimentary", meaning: "basic" },
  { emoji: "🧊", word: "Rue", meaning: "regret" }
],
S: [
  { emoji: "💎", word: "Sallow", meaning: "unhealthy look" },
  { emoji: "💎", word: "Scanty", meaning: "less" },
  { emoji: "💎", word: "Scholar", meaning: "student" },
  { emoji: "💎", word: "Scour", meaning: "scrub" },
  { emoji: "💎", word: "Scurry", meaning: "move quickly" },
  { emoji: "💎", word: "Sedentary", meaning: "sitting" },
  { emoji: "💎", word: "Serviette", meaning: "napkin" },
  { emoji: "💎", word: "Sinuous", meaning: "winding" },
  { emoji: "💎", word: "Slapdash", meaning: "careless" },
  { emoji: "💎", word: "Slumber", meaning: "sleep" },
  { emoji: "💎", word: "Sneak", meaning: "move quietly" },
  { emoji: "💎", word: "Squeamish", meaning: "nervous" },
  { emoji: "💎", word: "Stymie", meaning: "obstruct" },
  { emoji: "💎", word: "Succedaneum", meaning: "substitute" },
  { emoji: "💎", word: "Submissive", meaning: "obedient" },
  { emoji: "💎", word: "Suborned", meaning: "bribed" },
  { emoji: "💎", word: "Subpar", meaning: "below average" },
  { emoji: "💎", word: "Soaring", meaning: "rising" },
  { emoji: "💎", word: "Sod", meaning: "grassy land" },
  { emoji: "💎", word: "Solemn", meaning: "serious" },
  { emoji: "💎", word: "Solemnly", meaning: "seriously" },
  { emoji: "💎", word: "Spillway", meaning: "dam water exit" },
  { emoji: "💎", word: "Stoical", meaning: "unemotional" },
  { emoji: "💎", word: "Super-duper", meaning: "very great" },
  { emoji: "💎", word: "Swamped", meaning: "very busy" },
  { emoji: "💎", word: "So hectic", meaning: "very busy" }
],
T: [
  { emoji: "🌟", word: "Tableau", meaning: "picture" },
  { emoji: "🌟", word: "Take off", meaning: "depart" },
  { emoji: "🌟", word: "Tarry", meaning: "delay" },
  { emoji: "🌟", word: "Teamwork", meaning: "cooperative work" },
  { emoji: "🌟", word: "Throe", meaning: "spasm" },
  { emoji: "🌟", word: "Toadying", meaning: "sycophancy" },
  { emoji: "🌟", word: "Totile", meaning: "twisted" },
  { emoji: "🌟", word: "Traverse", meaning: "walk" },
  { emoji: "🌟", word: "Turpitude", meaning: "wickedness" }
],
U: [
  { emoji: "⚜️", word: "Unflappable", meaning: "calm" },
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

