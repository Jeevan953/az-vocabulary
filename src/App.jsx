import React, { useState } from "react";
import "./App.css";
console.log("build version 2");

function App() {
  const [selectedLetter, setSelectedLetter] = useState(null);
  const [speakingWord, setSpeakingWord] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");

  const vocabLists = {

    A: [
{ emoji: "🚫", word: "Abjure", meaning: "to renounce or reject", example: "He abjured his former beliefs." },
{ emoji: "🌱", word: "Acauline", meaning: "stemless", example: "The acauline plant hugged the ground, its leaves spreading directly from the roots." },
{ emoji: "🎒", word: "Accoutrements", meaning: "belongings or equipment", example: "He packed all his accoutrements for the trip." },
{ emoji: "💰", word: "Accrued", meaning: "accumulated", example: "Over the years, a significant amount of interest had accrued in his savings account." },
{ emoji: "🍓", word: "Achenes", meaning: "strawberry seeds", example: "Strawberry achenes are on the surface." },
{ emoji: "🦶", word: "Achilles’ heel", meaning: "weak point", example: "Speed is his Achilles’ heel." },
{ emoji: "⚫", word: "Achromatopsia", meaning: "total color-blindness", example: "Achromatopsia causes a person to see only in grayscale." },
{ emoji: "👍", word: "Acquiesce", meaning: "agree quietly", example: "She acquiesced to the demand." },
{ emoji: "🧠", word: "Acumen", meaning: "keenness of mind", example: "Her business acumen allowed her to turn the small startup into a multinational corporation." },
{ emoji: "🙏", word: "Adjure", meaning: "to urge or beg earnestly", example: "I adjure you to tell the truth." },
{ emoji: "📄", word: "Addendum", meaning: "an appendix", example: "Please see the addendum at the end of the report for the detailed statistical data." },
{ emoji: "🥓", word: "Adipose", meaning: "fatty", example: "The doctor advised him to reduce his intake of adipose tissue to lower his cholesterol." },
{ emoji: "✏️", word: "Adumbrate", meaning: "outline", example: "In the first chapter, the author briefly adumbrates the key themes explored in the rest of the book." },
{ emoji: "⏳", word: "Aeon", meaning: "epoch/ a very long period of time", example: "It felt like an aeon before he heard the results." },
{ emoji: "📝", word: "Affiant", meaning: "affidavit signer", example: "The affiant signed the legal document in court." },
{ emoji: "🐱", word: "Ailurophile", meaning: "lover of cats", example: "As an ailurophile, she owned five cats." },
{ emoji: "⚪", word: "Alabaster", meaning: "smooth white", example: "Her skin was alabaster." },
{ emoji: "⚡", word: "Alacrity", meaning: "readiness", example: "When the manager asked for a volunteer, she stepped forward with alacrity." },
{ emoji: "💵", word: "Alimony", meaning: "maintenance", example: "As part of the divorce settlement, he was required to pay alimony to his former spouse." },
{ emoji: "🍟", word: "Allumette", meaning: "matchstick cut", example: "Potatoes were sliced into allumette." },
{ emoji: "🤲", word: "Almoner", meaning: "charity distributor", example: "The almoner helped the poor." },
{ emoji: "🤝", word: "Altruistic", meaning: "helpful", example: "His decision to donate his entire bonus to the local shelter was a completely altruistic act." },
{ emoji: "❓", word: "Ambiguous", meaning: "unclear", example: "The contract was written in an ambiguous way, leading to disagreements between the two parties." },
{ emoji: "⚖️", word: "Ambiguity", meaning: "equivocation", example: "The lawyer took advantage of a legal ambiguity to get the charges dropped." },
{ emoji: "🔧", word: "Ameliorate", meaning: "improve", example: "The new park was built to ameliorate living conditions in the densely populated neighborhood." },
{ emoji: "💸", word: "Amerce", meaning: "punish by fine", example: "The court decided to amerce him for the offense." },
{ emoji: "🍫", word: "Aphrodisiac", meaning: "libido booster", example: "Throughout history, chocolate has had a reputation for being a powerful aphrodisiac." },
{ emoji: "📣", word: "Annunciate", meaning: "announce", example: "They annunciated the decision." },
{ emoji: "🦕", word: "Antediluvian", meaning: "very old-fashioned", example: "His views are antediluvian." },
{ emoji: "↔️", word: "Antithetical", meaning: "totally different", example: "His belief in strict government control is antithetical to her ideas of personal freedom." },
{ emoji: "😌", word: "Aplomb", meaning: "confidence and poise", example: "She handled the situation with aplomb." },
{ emoji: "👀", word: "Apparent", meaning: "clearly seen", example: "It was immediately apparent that the team had not prepared for the presentation." },
{ emoji: "📌", word: "Apropos", meaning: "relevant", example: "His comments about the budget were interesting but not entirely apropos to the discussion about marketing." },
{ emoji: "🐜", word: "Apteral", meaning: "wingless", example: "The insect was apteral and could not fly." },
{ emoji: "🎲", word: "Arbitrary", meaning: "random", example: "The rules for the contest seemed completely arbitrary, with no clear reason for them." },
{ emoji: "🧸", word: "Arctophile", meaning: "collector of teddy bears", img: process.env.PUBLIC_URL + "/images/teddy.jpg", example: "Her room showed she was an arctophile." },
{ emoji: "💯", word: "Arrant", meaning: "complete or utter", example: "That was an arrant lie." },
{ emoji: "🥥🌴", word: "Areca palm", meaning: "ornamental feathery palm",  img: process.env.PUBLIC_URL + "/images/Areca palm.webp", example: "The areca palm brightened the room.", category: "palm" },
{ emoji: "🌱", word: "Artichoke", meaning: "edible plant with tender heart", example: "He steamed the artichoke." },
{ emoji: "📚", word: "Assiduity", meaning: "sedulousness", example: "Through sheer assiduity and dedication, he mastered the difficult language in just two years." },
{ emoji: "🏨", word: "Auberge", meaning: "inn", example: "They stayed at a charming auberge in the countryside." },
{ emoji: "🍆", word: "Aubergine", meaning: "eggplant", example: "She cooked a delicious aubergine curry." },
{ emoji: "🟤", word: "Auburn", meaning: "reddish brown", img: process.env.PUBLIC_URL + "/images/Auburn.jpg", example: "She had auburn hair.", category: "color" },
{ emoji: "📈", word: "Augment", meaning: "enhance or increase", example: "They augmented the team." },
{ emoji: "😇", word: "Aureole", meaning: "halo", img: process.env.PUBLIC_URL + "/images/aureole.jpg", example: "The saint was painted with a glowing aureole." },
{ emoji: "🌏", word: "Austral", meaning: "southern",  img: process.env.PUBLIC_URL + "/images/Compass.jpg", category: "direction", example: "Penguins live in the austral regions." },
{ emoji: "📜", word: "-Axiom-", meaning: "maxim", example: "The old axiom 'honesty is the best policy' still holds true in most situations." },
{ emoji: "🦎", word: "Axolotl", meaning: "aquatic salamander", example: "The axolotl retained gills." }         
],
   B: [
{ emoji: "🍷", word: "Bacchanalian", meaning: "wild and drunken", example: "The festival turned into a bacchanalian feast." },
{ emoji: "😄", word: "Badinage", meaning: "banter", example: "Their friendly badinage filled the room with laughter." },
{ emoji: "🥮", word: "Baklava", meaning: "sweet layered pastry", example: "They shared baklava." },
{ emoji: "🎭", word: "Balaclava", meaning: "ski mask", example: "He wore a balaclava in winter." },
{ emoji: "🐋", word: "Baleen", meaning: "whalebone", example: "Baleen helps whales filter food from water." },
{ emoji: "🙄", word: "Baloney", meaning: "nonsense", example: "That excuse is pure baloney." },
{ emoji: "📣", word: "Ballyhoo", meaning: "noisy advertisement", example: "The film was all ballyhoo." },
{ emoji: "🎍🌴", word: "Bamboo palm", meaning: "reed-like indoor palm", example: "The bamboo palm formed a cluster." },
{ emoji: "🌀", word: "Bamboozle", meaning: "deceive or trick", example: "He tried to bamboozle the customers." },
{ emoji: "🐎", word: "Barding", meaning: "armour for horses", example: "The knight’s horse wore heavy barding." },
{ emoji: "🤪", word: "Barmy", meaning: "crazy", example: "That idea sounds completely barmy." },
{ emoji: "🚖", word: "Barouche", meaning: "carriage", example: "They rode through the park in a barouche." },
{ emoji: "🐖", word: "Barrow", meaning: "castrated male pig", example: "The farmer raised a barrow for market sale." },
{ emoji: "💢", word: "Backlash", meaning: "negative reaction", example: "The company faced a significant backlash from customers after announcing the price increase." },
{ emoji: "⚙️", word: "Banausic", meaning: "mechanical, utilitarian", example: "He found the banausic routine of the assembly line to be mind-numbingly dull." },
{ emoji: "🤎", word: "Beige", meaning: "light sandy brown", example: "She wore a beige coat." },
{ emoji: "⚔️", word: "Beleaguered", meaning: "besieged or troubled", example: "The beleaguered city held on bravely." },
{ emoji: "🙏", word: "Benison", meaning: "blessing", example: "The priest gave his benison to the crowd." },
{ emoji: "🖤", word: "Besmirch", meaning: "discredit or tarnish", example: "The rumor tried to besmirch her reputation." },
{ emoji: "🎁", word: "Bestow", meaning: "give", example: "The queen will bestow a knighthood upon him for his services to the country." },
{ emoji: "⚠️", word: "Bestiality", meaning: "intercourse with animals", example: "Bestiality is illegal and condemned in most societies.", tag: "confusing" },
{ emoji: "📐", word: "Bevelled", meaning: "splayed", example: "The edges were bevelled for a smooth finish." },
{ emoji: "🥤", word: "Beverage", meaning: "drink", example: "Please refrain from consuming any beverage inside the library." },
{ emoji: "🕵️", word: "Bewray", meaning: "reveal / divulge", example: "His trembling voice seemed to bewray the secret." },
{ emoji: "🍺", word: "Bibulous", meaning: "addicted to drink", example: "His bibulous habits affected his health." },
{ emoji: "🤢", word: "Bilious", meaning: "unpleasant", example: "The room was painted a bilious green." },
{ emoji: "💌", word: "Billet-doux", meaning: "epistle, missive", example: "She found an old shoebox filled with love letters, each one a tender billet-doux from her husband during the war." },
{ emoji: "🥩", word: "Biltong", meaning: "dried cured meat", example: "Biltong is a popular snack in South Africa." },
{ emoji: "🩶🌴", word: "Bismarck palm", meaning: "silver-blue fan palm", example: "The Bismarck palm looked striking." },
{ emoji: "😄", word: "Blithesome", meaning: "a mirthful disposition", example: "Her blithesome spirit was contagious, lifting the mood of everyone in the room." },
{ emoji: "💥", word: "Blitz", meaning: "aerial bombardment", example: "The city was devastated during the blitz, with entire neighborhoods reduced to rubble." },
{ emoji: "🍊", word: "Blood Orange", meaning: "red-fleshed citrus fruit", example: "The blood orange had deep color." },
{ emoji: "😅", word: "Blooper", meaning: "mistake", example: "The actor laughed at his own blooper." },
{ emoji: "🗯️", word: "Bloviate", meaning: "speak pompously", example: "He bloviated for hours." },
{ emoji: "🌫️", word: "Blurry", meaning: "unclear, cloudy", example: "Without my glasses, the street signs are just a blurry mess." },
{ emoji: "🔥", word: "Bodacious", meaning: "attractive", example: "Everyone at the party couldn't help but stare at her bodacious outfit." },
{ emoji: "🧠", word: "Boffin", meaning: "scientific expert", example: "The boffin solved the problem." },
{ emoji: "📣", word: "Boisterous", meaning: "very loud", example: "The boisterous crowd cheered wildly as their team scored the winning goal." },
{ emoji: "🥬", word: "Bok choy", meaning: "Chinese cabbage", example: "She stir-fried bok choy.", img: process.env.PUBLIC_URL + "/images/Bok choy.jpg", category: "Vegetable", },
{ emoji: "🛠️", word: "Bolster", meaning: "support", example: "The company introduced new benefits to bolster employee morale during the transition." },
{ emoji: "🦘", word: "Boomer", meaning: "adult male kangaroo", example: "The boomer stood tall, watching over the group." },
{ emoji: "💣", word: "Bombard", meaning: "assault", example: "The reporters began to bombard the spokesperson with questions as soon as she stepped off the podium." },
{ emoji: "🌪️", word: "Bodeful", meaning: "ominous", example: "The sudden silence in the forest felt bodeful, as if something terrible was about to happen." },
{ emoji: "🤰", word: "Borborygmus", meaning: "rumbling noise in intestines", example: "My borborygmus embarrassed me in class." },
{ emoji: "🤰", word: "Boreal", meaning: "relating to the north",  category: "direction", img: process.env.PUBLIC_URL + "/images/Compass.jpg", example: "The boreal toad is a species native to Colorado." },
{ emoji: "🍲", word: "Bouillabaisse", meaning: "a French fish stew", example: "They enjoyed bouillabaisse by the seaside." },
{ emoji: "🏢", word: "Bourgeoisie", meaning: "middle class people", example: "The bourgeoisie dominated trade." },
{ emoji: "🧠", word: "Boy wonder", meaning: "a young prodigy", example: "The boy wonder solved complex problems easily." },
{ emoji: "😎", word: "Brazen", meaning: "bold & without shame", example: "He made a brazen attempt to take credit for his colleague's work during the meeting." },
{ emoji: "🐘", word: "Brobdingnagian", meaning: "absurdly large", example: "They built a brobdingnagian statue." },
{ emoji: "☂️", word: "Brolly", meaning: "umbrella", example: "Don't forget your brolly, it looks like it's going to rain." },
{ emoji: "😴", word: "Bromide", meaning: "trite remark", tag: "confusing", example: "The speech was full of boring bromides." },
{ emoji: "🌩️", word: "Brontide", meaning: "rumbling sound", example: "They could hear the low brontide of thunder in the distance, warning of the approaching storm." },
{ emoji: "📢", word: "Bruit", meaning: "spread widely", example: "It was bruited about that the CEO would be stepping down at the end of the year." },
{ emoji: "🗑️", word: "Brummagem", meaning: "trash", example: "The market sold cheap brummagem goods." },
{ emoji: "🔪", word: "Brunoise", meaning: "very fine dice cut", example: "The chef chopped carrots into brunoise." },
{ emoji: "😐", word: "Brusque", meaning: "a curt reply", example: "When I asked if he needed help, he gave a brusque 'no' and walked away." },
{ emoji: "🍑", word: "Buxom", meaning: "comely, plump", example: "In Renaissance paintings, women were often depicted as buxom figures, embodying the era's ideal of beauty." },
{ emoji: "🌳", word: "Bucolic", meaning: "pastoral, rural", example: "They left the bustling city for a quiet, bucolic life in the countryside." },
{ emoji: "👄", word: "Buccal", meaning: "pertaining to mouth", example: "The dentist examined the buccal cavity." },
{ emoji: "🥇", word: "Bullion", meaning: "gold or silver in bulk", example: "The vault contained bullion bars." }
], 
   C: [
{ emoji: "📦", word: "Caboodle", meaning: "entire lot", example: "When he moved out, he took the whole caboodle—furniture, books, and even the kitchen sink." },
{ emoji: "❌", word: "Call off", meaning: "cancel", example: "Due to the approaching hurricane, they had to call off the outdoor wedding." },
{ emoji: "🌋", word: "Caldera", meaning: "volcanic crater", example: "The hikers peered over the edge into the massive caldera, a vast depression where the mountain peak once stood." },
{ emoji: "🔥", word: "Calefacient", meaning: "producing warmth or heat", example: "The calefacient balm eased his sore muscles." },
{ emoji: "🖋️", word: "Calligraphy", meaning: "beautiful handwriting", example: "She practices calligraphy daily." },
{ emoji: "🐣", word: "Callow", meaning: "inexperienced or immature", example: "He was a callow youth at the time." },
{ emoji: "⚔️", word: "Camisado", meaning: "a surprise night attack", example: "The soldiers launched a camisado." },
{ emoji: "🗞️", word: "Canard", meaning: "rumor", example: "The story turned out to be a political canard." },
{ emoji: "🥐", word: "Cannoli", meaning: "tube-shaped pastry", example: "He ordered a cannoli." },
{ emoji: "🏞️", word: "Canyon", meaning: "deep gorge", example: "The river had carved a magnificent canyon through the desert rock over millions of years." },
{ emoji: "😡", word: "Cantankerous", meaning: "quarrelsome", example: "The cantankerous old man shouted at the children for merely walking past his house." },
{ emoji: "🐓", word: "Capon", meaning: "castrated rooster", example: "Capon meat is known for its tenderness." },
{ emoji: "🎭", word: "Capricious", meaning: "fickle", example: "The movie's plot was hard to follow, with its capricious characters changing their allegiances in every scene." },
{ emoji: "🍊", word: "Cara Cara Orange", meaning: "pink-fleshed navel orange", example: "The cara cara orange was sweet." },
{ emoji: "🐢", word: "Carapace", meaning: "shell / integument", example: "The turtle retreated into its hard carapace when it sensed danger." },
{ emoji: "🧗", word: "Carabiner", meaning: "D-shaped metal loop used in rock climbing", example: "He clipped the rope to the carabiner." },
{ emoji: "⚔️", word: "Carnage", meaning: "slaughter", example: "The battlefield was filled with carnage." },
{ emoji: "🎉", word: "Carouse", meaning: "party or celebrate noisily", example: "They caroused all night after their victory." },
{ emoji: "✋", word: "Carpal", meaning: "relating to the wrist", example: "He suffered from carpal pain." },
{ emoji: "🎯", word: "Cast", meaning: "throw, (choose)", example: "The fisherman stood on the shore and prepared to cast his line into the water." },
{ emoji: "🎰", word: "Casino", meaning: "gambling house", example: "They spent the evening at the casino, trying their luck at the roulette tables." },
{ emoji: "🤧", word: "Catarrh", meaning: "cold", example: "He was suffering from a bad case of catarrh, his nose constantly running and his head feeling heavy." },
{ emoji: "🔷", word: "Catty-corner", meaning: "diagonal", example: "The little coffee shop is catty-corner from the library, right across the intersection." },
{ emoji: "🎭", word: "Camouflage", meaning: "disguise or concealment", example: "The soldier used camouflage to blend into the forest." },
{ emoji: "🛑", word: "Cease", meaning: "stop", example: "The company was ordered to cease its illegal dumping practices immediately." },
{ emoji: "🙈", word: "Cecity", meaning: "blindness", example: "The play explores the theme of moral cecity, where characters are willfully blind to the truth." },
{ emoji: "⚰️", word: "Cenotaph", meaning: "empty tomb", example: "The cenotaph was built to honor fallen soldiers." },
{ emoji: "🦌", word: "Cervine", meaning: "related to deer", example: "The cervine creature moved gracefully." },
{ emoji: "🔵", word: "Cerulean", meaning: "deep sky blue", example: "The ocean looked cerulean." },
{ emoji: "💡", word: "Chandelier", meaning: "a decorative hanging light", example: "A crystal chandelier hung in the hall." },
{ emoji: "🎭", word: "Charade", meaning: "false show or pretence", example: "Their friendship was just a charade." },
{ emoji: "💰", word: "Cheesesparing", meaning: "penny-pinching", example: "His cheesesparing habits annoyed his friends." },
{ emoji: "🎭", word: "Chicanery", meaning: "deception or trickery", example: "The deal was full of legal chicanery." },
{ emoji: "❄️", word: "Chionophile", meaning: "lover of cold weather", example: "He is a chionophile who enjoys winter." },
{ emoji: "🤴", word: "Chivalrous", meaning: "gallant", example: "He was incredibly chivalrous, always holding the door open and offering his seat to anyone in need." },
{ emoji: "📏", word: "Chord", meaning: "line joining two points on a curve", example: "The chord cut across the circle." },
{ emoji: "🪶", word: "Chowry", meaning: "fly whisk (chamer)", img: process.env.PUBLIC_URL + "/images/chowry.jpg", example: "The priest waved a chowry during the ritual ceremony." },
{ emoji: "⏱️", word: "Chronostasis", meaning: "illusion during eye movement", example: "The clock seemed frozen due to chronostasis." },
{ emoji: "🍩", word: "Churro", meaning: "fried dough", example: "She dipped the churro in chocolate." },
{ emoji: "📝", word: "Cite", meaning: "quote", example: "Be sure to cite your sources properly in the bibliography to avoid plagiarism." },
{ emoji: "🧐", word: "Circumspect", meaning: "cautious", example: "Given the sensitive nature of the negotiations, the diplomat had to be very circumspect in his choice of words." },
{ emoji: "⚰️", word: "Cinerary", meaning: "ashes", example: "The family placed the cinerary urn containing his remains in a quiet corner of the cemetery." },
{ emoji: "🎓", word: "Clerisy", meaning: "a group of highly educated people", example: "The clerisy gathered to discuss philosophy and literature." },
{ emoji: "🍊", word: "Clementine", meaning: "small seedless orange", example: "The clementine was juicy." },
{ emoji: "🎓", word: "Clerisy", meaning: "educated intellectual group", example: "The clerisy debated philosophy." },
{ emoji: "🌧️", word: "Cloudburst", meaning: "sudden heavy rain", example: "We were caught in a sudden cloudburst and were soaked to the bone within minutes." },
{ emoji: "💡", word: "Cogent", meaning: "convincing", example: "The lawyer presented a cogent argument that left the jury with no reasonable doubt." },
{ emoji: "🧠", word: "Cognition", meaning: "awareness", example: "The study focused on how sleep deprivation affects cognition and decision-making abilities." },
{ emoji: "📚", word: "Collated", meaning: "collected", example: "The data was carefully collated before analysis." },
{ emoji: "⛏️", word: "Collier", meaning: "coal miner", example: "The collier entered the mine." },
{ emoji: "😊", word: "Comely", meaning: "attractive or pleasant-looking", example: "She had a comely appearance." },
{ emoji: "🏁", word: "Commence", meaning: "begin", example: "The ceremony will commence promptly at 10 a.m., so please arrive early." },
{ emoji: "👍", word: "Commendable", meaning: "good", example: "Her efforts to organize the charity fundraiser were truly commendable." },
{ emoji: "🤗", word: "Commiseration", meaning: "condolences", example: "I sent a letter of commiseration to my friend after she lost her beloved pet." },
{ emoji: "🍽️", word: "Comestibles", meaning: "eatables", example: "The market was filled with stalls offering every kind of comestible, from fresh bread to exotic fruits." },
{ emoji: "📢", word: "Commination", meaning: "denunciation", example: "The priest's sermon was a fierce commination of the congregation's materialistic ways." },
{ emoji: "🥬", word: "Coleslaw", meaning: "sliced cabbage salad", example: "He ordered coleslaw with fries." },
{ emoji: "🍽️", word: "Collation", meaning: "repast", example: "A light collation was served after the meeting." },
{ emoji: "😤", word: "Conceited", meaning: "proud, haughty", example: "He was so conceited that he spent the entire party talking about his own accomplishments." },
{ emoji: "⏱️", word: "Concurrently", meaning: "simultaneous", example: "The two conferences were held concurrently, making it impossible to attend both." },
{ emoji: "🏆", word: "Condign", meaning: "worthy", example: "The scientist received a condign reward for her groundbreaking research." },
{ emoji: "😊", word: "Congenial", meaning: "pleasant", example: "We had a congenial chat with our new neighbors over coffee." },
{ emoji: "👀", word: "Conspicuous", meaning: "noticeable", example: "Her bright red hair made her conspicuous in the crowd." },
{ emoji: "🔁", word: "Consistently", meaning: "always", example: "He consistently arrives early." },
{ emoji: "🤔", word: "Contemplate", meaning: "think", example: "He sat quietly by the lake to contemplate his next move." },
{ emoji: "😤", word: "Contumacious", meaning: "refractory", example: "The contumacious student refused to obey the rules." },
{ emoji: "😤", word: "Contumelious", meaning: "scornful and insulting", example: "He used contumelious language." },
{ emoji: "❓", word: "Conundrum", meaning: "confusing problem", example: "It created a financial conundrum." },
{ emoji: "👍", word: "Copacetic", meaning: "going well", example: "Everything is copacetic now." },
{ emoji: "💧", word: "Copious", meaning: "profuse", example: "She took copious notes during the lecture." },
{ emoji: "🐠", word: "Coral", meaning: "sea organism", example: "The vibrant coral reef was teeming with colorful fish." },
{ emoji: "🏔️", word: "Cordillera", meaning: "chain of mountains", example: "The Andes form a vast cordillera along the western coast of South America." },
{ emoji: "🚫", word: "Cordoned off", meaning: "closed off", example: "The police cordoned off the street to investigate the accident." },
{ emoji: "🪄", word: "Cornucopia", meaning: "symbol of abundance", example: "The basket was a cornucopia of fruits." },
{ emoji: "🍔", word: "Corpulent", meaning: "very overweight", example: "The corpulent figure in the painting was a symbol of wealth and excess." },
{ emoji: "🐄", word: "Corral", meaning: "enclosure", example: "The cowboys worked together to corral the wild horses into a fenced enclosure." },
{ emoji: "🛁", word: "Cosset", meaning: "pamper", example: "They loved to cosset their dog, buying it gourmet treats and a velvet bed." },
{ emoji: "🚫", word: "Costive", meaning: "constipated", example: "He felt costive after eating too much junk food." },
{ emoji: "🥒", word: "Courgette", meaning: "zucchini", example: "The soup contained sliced courgette." },
{ emoji: "🐥", word: "Craven", meaning: "coward", example: "His craven refusal to stand up for his beliefs disappointed his friends." },
{ emoji: "🔥", word: "Craze", meaning: "fad", example: "The latest fitness craze involves wearing weighted vests while doing everyday chores." },
{ emoji: "🍻", word: "Crapulence", meaning: "sickness from overeating or drinking", example: "The morning after the wedding feast, he was overcome with a terrible feeling of crapulence." },
{ emoji: "👍", word: "Cromulent", meaning: "adequate", example: "The explanation was perfectly cromulent." },
{ emoji: "🍮", word: "Croquembouche", meaning: "cone of caramel-bound pastry puffs", example: "They served croquembouche at the wedding." },
{ emoji: "😠", word: "Crotchety", meaning: "grumpy", example: "The crotchety old man complained about everything." },
{ emoji: "📥", word: "Culled", meaning: "collected", example: "She culled the best recipes from her grandmother's collection to publish in a small cookbook." },
{ emoji: "👴", word: "Curmudgeon", meaning: "bad-tempered", example: "The curmudgeon refused to talk to anyone." },
{ emoji: "👓", word: "Cursorily", meaning: "superficially", example: "He read the report cursorily." }    
],
 D: [
{ emoji: "💧", word: "Dank", meaning: "damp and musty", example: "The cave was dark and dank." },
{ emoji: "🦁", word: "Dauntless", meaning: "fearless", example: "The dauntless firefighter rushed into the burning building to save the family." },
{ emoji: "💥", word: "Debacle", meaning: "complete failure", example: "The event turned into a debacle." },
{ emoji: "🤵", word: "Debonair", meaning: "neat", example: "He looked incredibly debonair in his perfectly tailored tuxedo." },
{ emoji: "🎩", word: "Decorum", meaning: "propriety", example: "The students behaved with decorum during the visit of the university president." },
{ emoji: "💭", word: "Deem", meaning: "think", example: "The committee will deem your application complete once all documents are received." },
{ emoji: "↩️", word: "Deflect", meaning: "divert", example: "The politician tried to deflect the criticism by changing the subject." },
{ emoji: "🍽️", word: "Deipnosophist", meaning: "a person skilled in dinner conversation", example: "He impressed everyone as a deipnosophist." },
{ emoji: "☠️", word: "Deleterious", meaning: "harmful", example: "The chemicals in the factory had a deleterious effect on the health of local residents." },
{ emoji: "🤤", word: "Delectable", meaning: "delicious", example: "The dessert was absolutely delectable." },
{ emoji: "🏛️", word: "Demarche", meaning: "political step", example: "As a diplomatic demarche, the ambassador requested an urgent meeting with the foreign minister." },
{ emoji: "🧑‍🤝‍🧑", word: "Demotic", meaning: "popular", example: "The new mayor's demotic style of speaking appealed to ordinary voters." },
{ emoji: "🌿", word: "Dendritic", meaning: "tree-like structure", example: "The lightning left a dendritic pattern on the surface of the sand." },
{ emoji: "🚫", word: "Denegation", meaning: "denial", example: "His constant denegation of the accusations only made him look more guilty." },
{ emoji: "🎭", word: "Denouement", meaning: "final resolution of a story", example: "The novel’s denouement tied all loose ends." },
{ emoji: "📤", word: "Depose", meaning: "remove from office", example: "The generals led a coup to depose the unpopular dictator." },
{ emoji: "🟢", word: "Deuteranopia", meaning: "green-blindness", example: "People with deuteranopia cannot distinguish green shades well." },
{ emoji: "🕴️", word: "Dapper", meaning: "neat and stylish", example: "He looked dapper in his suit." },
{ emoji: "🐆", word: "Dappled", meaning: "spotted", example: "Sunlight created a dappled pattern on the ground." },
{ emoji: "🌴📅", word: "Date palm", meaning: "palm producing dates", example: "The date palm bore sweet fruit." },
{ emoji: "😐", word: "Deadpan", meaning: "expressionless face", example: "He delivered the joke in a deadpan tone." },
{ emoji: "🔍", word: "Decipherability", meaning: "clearness", example: "The handwriting lacked decipherability." },
{ emoji: "🤹", word: "Deft", meaning: "skilful", example: "She made a deft move." },
{ emoji: "📮", word: "Deltiologist", meaning: "collector of postcards", example: "The deltiologist had rare vintage cards." },
{ emoji: "😈", word: "Depravity", meaning: "moral corruption or wickedness", example: "The novel explores the depths of human depravity." },
{ emoji: "🏴‍☠️", word: "Depredate", meaning: "pillage", example: "The invading army began to depredate every village along the coast." },
{ emoji: "💸", word: "Deprivation", meaning: "poverty", example: "The family lived in a state of deprivation, struggling to afford basic necessities." },
{ emoji: "💧", word: "Depurate", meaning: "purify", example: "The water treatment plant uses a series of filters to depurate the city's water supply." },
{ emoji: "🏚️", word: "Dereliction", meaning: "dilapidation", example: "The old mansion fell into a state of dereliction after years of neglect." },
{ emoji: "🌍", word: "Diaspora", meaning: "dispersion of people", example: "The diaspora spread across many countries." },
{ emoji: "🌫️", word: "Dingy", meaning: "gloomy and dirty", example: "The room looked dingy." },
{ emoji: "🤫", word: "Discreet", meaning: "prudent", example: "He gave a discreet response",  tag: "confusing." },
{ emoji: "🔲", word: "Discrete", meaning: "separate", example: "The data is divided into discrete parts",  tag: "confusing." },
{ emoji: "🛑", word: "Desist", meaning: "stop", example: "The court ordered the company to desist from using the copyrighted material." },
{ emoji: "🤡", word: "Desipient", meaning: "foolish", example: "His desipient remarks during the serious meeting annoyed everyone." },
{ emoji: "🩹", word: "Desquamate", meaning: "peel off", example: "After a bad sunburn, his skin began to desquamate in large, unsightly flakes." },
{ emoji: "📉", word: "Desuetude", meaning: "state of disuse", example: "The custom fell into desuetude." },
{ emoji: "🪶", word: "Diaphanous", meaning: "sheer/fine", example: "She wore a beautiful dress made of a diaphanous silk fabric." },
{ emoji: "🎶", word: "Diapason", meaning: "gamut", example: "The orchestra played across the full diapason of notes." },
{ emoji: "🔤", word: "Diaeresis", meaning: "two dots over a vowel (e.g., naïve)", example: "The diaeresis appears in words like coöperate." },
{ emoji: "🙈", word: "Diffident", meaning: "shy", example: "He was diffident about sharing his opinions in front of such a large group." },
{ emoji: "↩️", word: "Digress", meaning: "diverge", example: "Let me digress for a moment to tell you a relevant personal story." },
{ emoji: "😠", word: "Dilberted", meaning: "exploited or treated unfairly", example: "Employees felt dilberted by management." },
{ emoji: "🤔", word: "Dilemma", meaning: "predicament", example: "She faced the dilemma of choosing between a high-paying job she hated and a low-paying job she loved." },
{ emoji: "💪", word: "Diligent", meaning: "hardworking", example: "Through diligent study, she managed to pass the difficult exam." },
{ emoji: "✂️", word: "Dimidiate", meaning: "halved", example: "The cake was dimidiate into two equal parts." },
{ emoji: "🔹", word: "Diminutive", meaning: "tiny", example: "A diminutive figure appeared in the doorway—it was a small child." },
{ emoji: "😵", word: "Discombobulate", meaning: "confuse", example: "The sudden change of plans completely discombobulated him." },
{ emoji: "⚖️", word: "Discriminatory", meaning: "unfair treatment", example: "The new law was criticized for being discriminatory against minority groups." },
{ emoji: "😟", word: "Disconcert", meaning: "upset", example: "It disconcerted her to find that her flight had been canceled." },
{ emoji: "😒", word: "Disdain", meaning: "scorn", example: "She looked at the messy room with clear disdain." },
{ emoji: "🧹", word: "Disheveled", meaning: "untidy", example: "He arrived at work looking disheveled, as if he had just rolled out of bed." },
{ emoji: "🌧️", word: "Dismal", meaning: "gloomy", example: "The weather was dismal, with gray skies and constant rain." },
{ emoji: "📣", word: "Disseminate", meaning: "spread widely", example: "The internet helps disseminate information quickly." },
{ emoji: "✋", word: "Dissuade", meaning: "persuade not to", example: "I tried to dissuade him from quitting his job, but his mind was made up." },
{ emoji: "😭", word: "Distraught", meaning: "very upset", example: "The parents were distraught when their child went missing." },
{ emoji: "🤔", word: "Distrait", meaning: "absent-minded", example: "She seemed distrait and forgot her keys." },
{ emoji: "😖", word: "Dither", meaning: "be anxious or confused", example: "He dithered before deciding." },
{ emoji: "🎵", word: "Ditty", meaning: "short simple poem", example: "She sang a cheerful ditty." },
{ emoji: "🚶", word: "Divagation", meaning: "wandering from the main topic", example: "His speech turned into a long divagation instead of staying focused." },
{ emoji: "😢", word: "Dolorous", meaning: "sorrowful", example: "She gave a dolorous speech at the funeral." },
{ emoji: "👀", word: "Double take", meaning: "looking again in surprise", example: "He did a double take at the price." },
{ emoji: "🐉🌴", word: "Dragon palm", meaning: "dragon tree-like palm", example: "The dragon palm looked exotic." },
{ emoji: "😴", word: "Drowsy", meaning: "sleepy", example: "The medication made her feel drowsy, so she decided to lie down." },
{ emoji: "❓", word: "Dubiety", meaning: "doubt", example: "There is considerable dubiety surrounding the accuracy of the witness's testimony." },
{ emoji: "😠", word: "Dudgeon", meaning: "anger", example: "He stormed out of the room in high dudgeon after the argument." },
{ emoji: "🐋", word: "Dugong", meaning: "sea cow", img: process.env.PUBLIC_URL + "/images/dugong.webp", example: "The dugong grazed peacefully on the seagrass in the shallow waters." },
{ emoji: "⛓️", word: "Duress", meaning: "coercion", example: "He signed the agreement under duress." },
{ emoji: "🐖", word: "Duroc", meaning: "red lard pig", example: "The farmer raised Duroc pigs, known for their high-quality meat." },
{ emoji: "💤", word: "Dwale", meaning: "a sleeping potion", example: "The potion acted like a dwale." },
{ emoji: "📉", word: "Dwindle", meaning: "decrease", example: "As the night wore on, the crowd at the party began to dwindle." },
{ emoji: "🚶‍♂️", word: "Dwadle", meaning: "loiter", example: "Don't dwadle on your way home; we need you here to help with dinner." }
],
  E: [
{ emoji: "🙂", word: "Eccedentesiast", meaning: "one who fakes a smile", example: "He looked like an eccedentesiast." },
{ emoji: "🐍", word: "Ecdysis", meaning: "molting", example: "The snake underwent ecdysis to shed its old skin." },
{ emoji: "🌟", word: "Eclat", meaning: "brilliant or conspicuous success", example: "The event was a great success, carried out with éclat." }, 
{ emoji: "🏛️", word: "Edifice", meaning: "building esp. an impressive one", example: "The grand edifice stood in the city center, its towering columns visible from miles away." },
{ emoji: "📖", word: "Edification", meaning: "mental or moral improvement", example: "The lecture was meant for the edification of students." },
{ emoji: "🥤", word: "Effervescent", meaning: "bubbly", example: "Her effervescent personality made her the life of every party she attended." },
{ emoji: "😤", word: "Effrontery", meaning: "rude boldness", example: "He had the effrontery to interrupt." },
{ emoji: "💖", word: "Effusive", meaning: "overly emotional", example: "She was effusive in her praise, thanking everyone multiple times with tears in her eyes." },
{ emoji: "🚪", word: "Egress", meaning: "exit", example: "The theater was so crowded that finding a clear egress in an emergency would be difficult." },
{ emoji: "❌", word: "Egregious", meaning: "conspicuously bad", example: "The mistake was so egregious that it couldn't be ignored." },
{ emoji: "👻", word: "Eidolon", meaning: "ghost", example: "The ruins were said to be haunted by an eidolon." },
{ emoji: "⚡", word: "Elan", meaning: "energy or enthusiasm", example: "She danced with great elan." },
{ emoji: "😄", word: "Elated", meaning: "very happy", example: "She was elated when she received the news of her promotion." },
{ emoji: "👻", word: "Eldritch", meaning: "strange and eerie", example: "An eldritch sound echoed in the forest." },
{ emoji: "🎭", word: "Elicit", meaning: "evoke", example: "The speaker's powerful words managed to elicit a strong emotional response from the audience." },
{ emoji: "🧪", word: "Elixir", meaning: "a magical or medicinal potion", example: "The herbal elixir restored his energy." },
{ emoji: "🎤", word: "Elocutionist", meaning: "skilled speaker", example: "The elocutionist impressed the crowd." },
{ emoji: "🚀", word: "Embark", meaning: "begin", example: "After months of planning, they were finally ready to embark on their world tour." },
{ emoji: "🙂", word: "Embonpoint", meaning: "pleasantly plump", example: "She had graceful embonpoint." },
{ emoji: "🎤", word: "Emcee", meaning: "compere", example: "She acted as the emcee for the event." },
{ emoji: "✅", word: "Endorse", meaning: "agree", example: "The union has decided to endorse the new contract after lengthy negotiations." },
{ emoji: "📚", word: "Engrossed", meaning: "busy", example: "He was so engrossed in his book that he didn't hear the phone ringing." },
{ emoji: "🛋️", word: "Ensconce", meaning: "settle or place snugly", example: "He ensconced himself comfortably in the chair." },
{ emoji: "✨", word: "Entrancement", meaning: "ravishment", example: "The audience sat in a state of complete entrancement as the magician performed his tricks." },
{ emoji: "🫀", word: "Entrails", meaning: "intestines/bowels", example: "The hunter examined the animal’s entrails." },
{ emoji: "🔮", word: "Envisage", meaning: "foresee", example: "The project manager envisaged a completed tower standing tall within two years." },
{ emoji: "🔮", word: "Ephemeral", meaning: "short-lived", example: "The beauty of a rainbow is ephemeral, vanishing as quickly as it appears." },
{ emoji: "😈", word: "Epicaricacy", meaning: "joy at others' misfortune", example: "His epicaricacy showed when his rival failed." },
{ emoji: "⚧️", word: "Epicene", meaning: "hermaphrodite", example: "The term epicene can refer to gender-neutral traits." },
{ emoji: "😌", word: "Equanimity", meaning: "calm", example: "Even in the midst of the crisis, she maintained her equanimity and made rational decisions." },
{ emoji: "🗻", word: "Escarpment", meaning: "steep cliff", example: "The hikers stopped at the edge of the escarpment to admire the valley far below." },
{ emoji: "👽", word: "Estranged", meaning: "alienated", example: "He had been estranged from his family for many years after a bitter argument." },
{ emoji: "🍗", word: "Esurient", meaning: "greedy", example: "His esurient appetite led him to overeat." },
{ emoji: "🌫️", word: "Ethereal", meaning: "delicate beauty", example: "The ethereal music seemed to float through the air like a gentle mist." },
{ emoji: "🎓", word: "Erudite", meaning: "knowledgeable", example: "The professor was an erudite scholar who could speak on many subjects with authority." },
{ emoji: "🌈", word: "Eudaimonia", meaning: "happiness", example: "The ancient Greeks believed that true eudaimonia came from living a virtuous life." },
{ emoji: "👤", word: "Eunuch", meaning: "castrated man", example: "Historically, eunuchs served in royal courts." },
{ emoji: "♾️", word: "Evermore", meaning: "always", example: "The lovers promised to cherish each other evermore." },
{ emoji: "🔪", word: "Eviscerate", meaning: "remove the essential parts, making useless", example: "The new policy eviscerated the original purpose of the program." },
{ emoji: "🔥", word: "Exacerbate", meaning: "make worse", example: "His harsh comments only served to exacerbate an already tense situation." },
{ emoji: "😤", word: "Exasperate", meaning: "annoy", example: "It will exasperate me if you keep interrupting while I'm trying to explain." },
{ emoji: "💩", word: "Excretion", meaning: "defecation", example: "The process of excretion is essential for removing waste products from the body." },
{ emoji: "🔥", word: "Excoriate", meaning: "denounce harshly", example: "The critic excoriated the film in his review." },
{ emoji: "🫛", word: "Exiguous", meaning: "scanty/meager", example: "The family survived on the exiguous income from their small farm." },
{ emoji: "🎁", word: "Ex gratia", meaning: "voluntary payment", example: "The company made an ex gratia payment to the injured worker, though they denied legal responsibility." },
{ emoji: "🤮", word: "Expectorate", meaning: "spit", example: "Please do not expectorate on the sidewalk; it's unhygienic and unpleasant." },
{ emoji: "🏅", word: "Eximious", meaning: "excellent", example: "The soldier received an award for his eximious service to the nation." },
{ emoji: "🪙", word: "Exonumist", meaning: "collector of tokens and medals", example: "The exonumist displayed his collection." },
{ emoji: "📖", word: "Expounder", meaning: "one who explains", example: "The expounder clarified the text." },
{ emoji: "🫗", word: "Extinguish", meaning: "douse", example: "The firefighters worked for hours to extinguish the massive blaze." },
{ emoji: "🫗", word: "Exude", meaning: "ooze", example: "She seemed to exude confidence as she walked onto the stage to give her speech." },
{ emoji: "🎉", word: "Exult", meaning: "rejoice greatly", example: "They exulted in their victory." }
],
 F: [
{ emoji: "😆", word: "Facetious", meaning: "humorous", example: "I was being facetious when I said we should replace all the computers with typewriters." },
{ emoji: "🤖", word: "Factitious", meaning: "artificial", example: "The story sounded factitious and not real." },
{ emoji: "🤝", word: "Fair and square", meaning: "honest", example: "I won the game fair and square, without any cheating." },
{ emoji: "🌾", word: "Fallow", meaning: "uncultivated", example: "Farmers leave fields fallow for a season to allow the soil to recover its nutrients." },
{ emoji: "❌", word: "Fallacious", meaning: "false", example: "His argument was fallacious because it was based on incorrect assumptions." },
{ emoji: "🗡️", word: "Falchion", meaning: "sword", example: "The warrior carried a sharp falchion." },
{ emoji: "🪭🌴", word: "Fan palm", meaning: "palm with fan-shaped leaves", example: "The fan palm spread wide." },
{ emoji: "🐕", word: "Fancier", meaning: "breeder", example: "He is a fancier who raises rare birds." },
{ emoji: "🤩", word: "Fascinating", meaning: "very interesting", example: "The documentary about deep-sea creatures was absolutely fascinating." },
{ emoji: "🔍", word: "Fastidious", meaning: "picky", example: "He was so fastidious about his appearance that he would never leave the house with a hair out of place." },
{ emoji: "🎭", word: "Fatalist", meaning: "one who believes in fate", example: "The fatalist accepted whatever happened." },
{ emoji: "🤪", word: "Fatuous", meaning: "foolish", example: "She ignored his fatuous comments and focused on the real issues." },
{ emoji: "✅", word: "Feasible", meaning: "possible", example: "We need to determine if completing the project by Friday is feasible." },
{ emoji: "🤒", word: "Febrile", meaning: "feverish", example: "She felt febrile and weak all day." },
{ emoji: "🎭", word: "Feign", meaning: "pretend", example: "She decided to feign interest in his long story about golf." },
{ emoji: "🦊", word: "Fennec", meaning: "small desert fox with large ears", example: "The fennec emerged at night." },
{ emoji: "🐺", word: "Feral", meaning: "untamed", example: "The rescue center cares for feral cats that are too wild to be adopted as pets." },
{ emoji: "🔥", word: "Fervent", meaning: "ardent", example: "She is a fervent supporter of the team." },
{ emoji: "🔥", word: "Fervid", meaning: "ardent", example: "He spoke with fervid passion about his dream." },
{ emoji: "😊", word: "Felicity", meaning: "happiness", example: "The couple's felicity was evident in their constant smiles and laughter." },
{ emoji: "✈️", word: "Fernweh", meaning: "farsickness, longing to travel", example: "Looking at travel brochures only made his fernweh worse." },
{ emoji: "🤢", word: "Fetid", meaning: "malodorous", example: "The room had a fetid smell." },
{ emoji: "🕵️", word: "Filch", meaning: "pilfer", example: "He tried to filch money from the drawer." },
{ emoji: "🍋", word: "Finger lime", meaning: "elongated citrus fruit", example: "The chef sprinkled finger lime pearls." },
{ emoji: "😲", word: "Flabbergasted", meaning: "shocked", example: "I was flabbergasted when I saw the total on the restaurant bill." },
{ emoji: "😡", word: "Flagitious", meaning: "atrocious", example: "The criminal committed a flagitious act." },
{ emoji: "✨", word: "Flecked", meaning: "spotted", example: "The stone was flecked with gold." },
{ emoji: "🍀", word: "Fluke", meaning: "stroke of good luck", example: "Winning the lottery was just a fluke." },
{ emoji: "🌬️", word: "Flurry", meaning: "sudden gust of wind", example: "A sudden flurry of wind scattered the leaves across the lawn." },
{ emoji: "😵", word: "Flummox", meaning: "bewilder", example: "The tricky crossword puzzle completely flummoxed him." },
{ emoji: "🤝", word: "Forbearance", meaning: "tolerance", example: "The teacher showed great forbearance with the noisy class." },
{ emoji: "😢", word: "Forlorn", meaning: "sad", example: "The lost puppy looked forlorn, sitting alone in the rain." },
{ emoji: "🗣️", word: "Forthright", meaning: "honest", example: "I appreciate her forthright manner; you always know exactly what she's thinking." },
{ emoji: "🍀", word: "Fortuitous", meaning: "accidental", example: "Our meeting at the airport was entirely fortuitous, as neither of us had planned it." },
{ emoji: "🦊🌴", word: "Foxtail palm", meaning: "fluffy frond palm", example: "The foxtail palm had bushy leaves." },
{ emoji: "🪶", word: "Frailty", meaning: "weakness", example: "The frailty of the old bridge meant it could not support heavy trucks." },
{ emoji: "💻", word: "Freelance", meaning: "independent worker", example: "She left her corporate job to work as a freelance graphic designer." },
{ emoji: "😣", word: "Fret", meaning: "be anxious", example: "Don't fret about it." },
{ emoji: "😏", word: "Frivolous", meaning: "flippant", example: "The court dismissed the case as frivolous and lacking any legal merit." },
{ emoji: "🫙", word: "Fraught", meaning: "crowded", example: "The silence in the room was fraught with tension after the argument." },
{ emoji: "🥵", word: "Frazzled", meaning: "exhausted", example: "After dealing with crying children and a flooded kitchen all morning, she felt completely frazzled." },
{ emoji: "👻", word: "Freak", meaning: "creepy", example: "That movie had a really freaky vibe." } 
],
G: [
{ emoji: "🐒", word: "Galago", meaning: "nocturnal primate (bush baby)", example: "The galago leapt between branches." },
{ emoji: "🚶‍♂️", word: "Gallivant", meaning: "wander", example: "Instead of working, he decided to gallivant around the city with his friends all day." },
{ emoji: "✨", word: "Galore", meaning: "aplenty", example: "There were snacks galore." },
{ emoji: "🐑", word: "Gamboling", meaning: "frolicking or playing joyfully", example: "The lambs were gamboling in the meadow." },
{ emoji: "🦣", word: "Gargantuan", meaning: "huge", example: "The company served a gargantuan portion of pasta that could have fed a family of four." },
{ emoji: "📦", word: "Garnered", meaning: "collected or gathered", example: "She garnered praise for her work." },
{ emoji: "🩸", word: "Gash", meaning: "deep cut", example: "He suffered a nasty gash on his leg after falling on some sharp rocks." },
{ emoji: "😬", word: "Gaucherie", meaning: "awkwardness", example: "He tried to hide his social gaucherie." },
{ emoji: "🐃", word: "Gaur", meaning: "Indian bison", example: "A gaur stood in the forest." },
{ emoji: "🍨", word: "Gelato", meaning: "ice-cream", example: "We stopped at a little cafe in Rome to enjoy some authentic Italian gelato." },
{ emoji: "🐎", word: "Gelding", meaning: "castrated horse", example: "The gelding was calm and easy to train." },
{ emoji: "👑", word: "Gentry", meaning: "nobility", example: "The local gentry lived in large manor houses and owned most of the land in the county." },
{ emoji: "🥒", word: "Gherkin", meaning: "a small pickle", example: "He added a gherkin to his sandwich." },
{ emoji: "🦷", word: "Gingival", meaning: "pertaining to gums", example: "He had gingival problems." },
{ emoji: "🤏", word: "Gingerly", meaning: "cautiously", example: "He gingerly lifted the fragile vase." },
{ emoji: "✨", word: "Gleaming", meaning: "shining", example: "The gleaming new sports car sat in the showroom, attracting everyone's attention." },
{ emoji: "🪒", word: "Glabrous", meaning: "smooth", example: "The plant leaves were glabrous and shiny." },
{ emoji: "😤", word: "Gloating", meaning: "great satisfaction at others' misfortune", example: "He couldn't stop gloating after winning." },
{ emoji: "🍽️", word: "Gobble", meaning: "guzzle", example: "The children were so hungry they began to gobble their dinner without saying a word." },
{ emoji: "😲", word: "Gobsmacked", meaning: "completely astonished", example: "I was absolutely gobsmacked when I heard I had won the lottery." },
{ emoji: "🏡", word: "Grange", meaning: "farmhouse", example: "The old grange had been converted into a beautiful bed and breakfast." },
{ emoji: "⚖️", word: "Gravamen", meaning: "grievance", example: "The gravamen of his complaint was that he had been unfairly passed over for promotion." },
{ emoji: "🗣️", word: "Gregarious", meaning: "sociable", example: "She's so gregarious that she makes friends wherever she goes." },
{ emoji: "✍️", word: "Griffonage", meaning: "illegible handwriting", example: "His notes were pure griffonage." },
{ emoji: "🧹", word: "Grime", meaning: "dirt", example: "The windows were covered with a thick layer of grime from the busy street." },
{ emoji: "🛁", word: "Grimy", meaning: "dirty", example: "After working on the car all afternoon, his hands were grimy with oil and grease." },
{ emoji: "🤲", word: "Grope", meaning: "fumble", example: "He had to grope in the dark to find the light switch." },
{ emoji: "✨", word: "Gaudery", meaning: "showy display", example: "The ceremony was full of gaudery." },
{ emoji: "🏆", word: "Guerdon", meaning: "reward", example: "The medal was a fitting guerdon for his years of dedicated service." },
{ emoji: "😂", word: "Guffaw", meaning: "loud laughter", example: "He burst into a guffaw." },
{ emoji: "🕸️", word: "Gunk", meaning: "sticky dirt", example: "There was a lot of gunk clogging up the drain." },
{ emoji: "🌊", word: "Gush", meaning: "flow quickly", example: "Water began to gush from the broken pipe, flooding the basement." }
],
 H: [
{ emoji: "👗", word: "Habilement", meaning: "garment", example: "The historical museum displayed a habilement worn by a queen in the 16th century." },
{ emoji: "♻️", word: "Hackneyed", meaning: "overused cliché", example: "The speech was hackneyed." },
{ emoji: "😡", word: "Hectoring", meaning: "bullying or intimidating", example: "He used a hectoring tone in meetings." },
{ emoji: "💰", word: "Haggle", meaning: "negotiate price", example: "They haggled over the cost." },
{ emoji: "⚔️", word: "Harry", meaning: "attack", example: "The Viking ships would appear on the horizon, ready to harry the coastal villages." },
{ emoji: "🍀", word: "Hapless", meaning: "unlucky", example: "The hapless traveler missed his flight, lost his luggage, and then got caught in a downpour." },
{ emoji: "🎲", word: "Happenstance", meaning: "coincidence", example: "We met again by pure happenstance." },
{ emoji: "🤔", word: "Haply", meaning: "perhaps or by chance", example: "Haply, we may meet again." },
{ emoji: "😶", word: "Hebetude", meaning: "stupidity", example: "His he betude made it hard to understand simple things." },
{ emoji: "📚", word: "Hectic", meaning: "very busy", example: "The office gets so hectic right before the deadline." },
{ emoji: "🔗", word: "Hendiadys", meaning: "two words expressing one idea", example: "Sound and fury is hendiadys." },
{ emoji: "🧠", word: "Heuristic", meaning: "problem-solving shortcut", example: "He used a heuristic to guess quickly." },
{ emoji: "🦌", word: "Havier", meaning: "castrated deer", example: "The havier was kept separate from the herd." },
{ emoji: "🪓", word: "Hewn", meaning: "cut/mown", example: "The stone was hewn from the mountain." },
{ emoji: "🚗", word: "Highway hypnosis", meaning: "trance while driving", example: "He reached home with no memory due to highway hypnosis." },
{ emoji: "🎩", word: "Highfalutin", meaning: "grandiose", example: "We ignored his highfalutin ideas and stuck to a simple, practical plan." },
{ emoji: "🎭", word: "Histrionic", meaning: "theatrical", example: "Her histrionic reaction to a small scratch on her car drew stares from everyone on the street." },
{ emoji: "🏡", word: "Hiraeth", meaning: "longing for home", example: "Living abroad for many years, he felt a deep sense of hiraeth for the hills of his childhood." },
{ emoji: "🏦", word: "Hoard", meaning: "store", example: "The dragon guarded a vast hoard of gold and jewels in its cave." },
{ emoji: "🏠", word: "Homester", meaning: "person who enjoys staying home", example: "He is a happy homester." },
{ emoji: "⛪", word: "Homily", meaning: "sermon", example: "The priest delivered a thoughtful homily." },
{ emoji: "👥", word: "Horde", meaning: "crowd", example: "A horde of fans rushed the stage when the band started playing." },
{ emoji: "🦊", word: "Hornswoggle", meaning: "deceive", example: "The con man tried to hornswoggle the old lady into giving him her life savings." },
{ emoji: "📣", word: "Hullabaloo", meaning: "fuss", example: "There was a big hullabaloo when the principal announced the school would be closed for a week." },
{ emoji: "🚔", word: "Hoosegow", meaning: "jail", example: "The sheriff threw the rowdy cowboy into the hoosegow for the night." },
{ emoji: "🏃‍♂️💨", word: "Hurry", meaning: "haste", example: "We need to hurry if we want to catch the last train." },
{ emoji: "🎉", word: "Hype", meaning: "excitement", example: "Despite all the hype, the new movie turned out to be quite disappointing." },
{ emoji: "😴", word: "Hypnic jerk", meaning: "sudden muscle twitch while falling asleep", example: "I woke up from a hypnic jerk." }
],
  I: [
{ emoji: "🎵", word: "Ictus", meaning: "stress", example: "In poetry, the ictus falls on the stressed syllable." },
{ emoji: "🪪", word: "Identity theft", meaning: "stealing personal information", example: "He became a victim of identity theft." },
{ emoji: "🏞️", word: "Idyllic", meaning: "peaceful", example: "They spent a week in an idyllic cottage by the lake, far from the noise of the city." },
{ emoji: "❓", word: "Iffy", meaning: "uncertain", example: "The weather forecast for our picnic tomorrow looks a bit iffy." },
{ emoji: "🥤", word: "Imbibe", meaning: "drink", example: "It is important to imbibe plenty of water during hot weather." },
{ emoji: "💡", word: "Imbue", meaning: "inspire", example: "His speeches never failed to imbue his followers with a sense of purpose." },
{ emoji: "🧶", word: "Imbroglio", meaning: "complication", example: "The situation turned into a political imbroglio." },
{ emoji: "🧼", word: "Immaculate", meaning: "spotless", example: "Her house was always immaculate, as if no one actually lived there." },
{ emoji: "🙄", word: "Impertinent", meaning: "rude", example: "The journalist asked an impertinent question about the actor's personal life." },
{ emoji: "🔗", word: "Implicate", meaning: "incriminate", example: "The stolen goods found in his car served to implicate him in the robbery." },
{ emoji: "👻", word: "Imperceptible", meaning: "unnoticeable", example: "The difference between the two shades of white was almost imperceptible." },
{ emoji: "⚡", word: "Impetuous", meaning: "impulsive", example: "His impetuous decision to quit his job without another one lined up worried his family." },
{ emoji: "🪨", word: "Implacable", meaning: "unyielding", example: "The prosecutor was implacable in her pursuit of justice for the victims." },
{ emoji: "🔁", word: "Importunately", meaning: "asking repeatedly", example: "He importunately requested help until someone finally agreed." },
{ emoji: "🤪", word: "Inane", meaning: "silly", example: "The reality TV show was filled with inane comments and pointless drama." },
{ emoji: "🙉", word: "Inaudible", meaning: "unhearable", example: "The speaker's voice was so quiet it was almost inaudible in the back of the hall." },
{ emoji: "🗡️", word: "Incisive", meaning: "sharp", example: "The critic's incisive review cut right to the heart of the film's problems." },
{ emoji: "🧩", word: "Incongruous", meaning: "out of place", example: "The modern sculpture looked incongruous among the historic buildings." },
{ emoji: "🖋️", word: "Indelible", meaning: "unforgettable", example: "The tragic event left an indelible mark on her memory." },
{ emoji: "😡", word: "Indignant", meaning: "angry", example: "She was indignant when her boss took credit for her idea." },
{ emoji: "😞", word: "Indigent", meaning: "very poor", example: "The charity helps indigent families." },
{ emoji: "🛋️", word: "Indolent", meaning: "lazy", example: "His indolent nature meant he spent most weekends lying on the sofa watching TV." },
{ emoji: "💪", word: "Indomitable", meaning: "impossible to defeat", example: "Her indomitable spirit helped her overcome every obstacle." },
{ emoji: "🍺", word: "Inebriated", meaning: "drunk", example: "He was too inebriated to walk straight." },
{ emoji: "🤷‍♂️", word: "Inept", meaning: "unskilled", example: "He was so inept at fixing things that he accidentally made the leak worse." },
{ emoji: "✨", word: "Ineffable", meaning: "indescribable", example: "Looking at the Grand Canyon for the first time, she felt a sense of ineffable wonder." },
{ emoji: "😴", word: "Inertia", meaning: "lethargy", example: "Morning inertia slowed him." },
{ emoji: "😍", word: "Infatuated", meaning: "obsessed", example: "He was completely infatuated with his new girlfriend, thinking about her constantly." },
{ emoji: "⛔", word: "Ineluctable", meaning: "unavoidable", example: "Death is ineluctable." },
{ emoji: "⚡", word: "Inesperate", meaning: "unexpected", example: "Her inesperate arrival at the party surprised everyone, especially since she lived overseas." },
{ emoji: "🌳", word: "Ingrained", meaning: "deep rooted", example: "These values are ingrained in our culture." },
{ emoji: "🍽️", word: "Ingurgitate", meaning: "swallow greedily", example: "He ingurgitated the food quickly." },
{ emoji: "💬", word: "Innuendo", meaning: "an indirect hint or insinuation", example: "His comment was full of innuendo." },
{ emoji: "🧐", word: "Inquisitive", meaning: "curious", example: "Inquisitive by nature, the child was always asking 'why?'" },
{ emoji: "💼", word: "Internship", meaning: "job training", example: "She applied for a summer internship at a marketing firm to gain some experience." },
{ emoji: "🌫️", word: "Inscrutable", meaning: "obscure", example: "The motives of the mysterious stranger remained inscrutable." },
{ emoji: "🕵️‍♂️", word: "Insidious", meaning: "stealthy", example: "The disease has an insidious onset, with symptoms that are barely noticeable at first." },
{ emoji: "😠", word: "Insolence", meaning: "rude behaviour", example: "His insolence toward the teacher was unacceptable." },
{ emoji: "😌", word: "Insouciant", meaning: "carefree or nonchalant", example: "He remained insouciant despite the chaos." },
{ emoji: "🥣", word: "Inspissated", meaning: "thickened", example: "The sauce became inspissated after boiling." },
{ emoji: "⛔", word: "Interdict", meaning: "forbid", example: "The treaty interdicts the use of chemical weapons." },
{ emoji: "♾️", word: "Invariably", meaning: "always", example: "He is invariably late for our meetings, no matter what time we schedule them." },
{ emoji: "🗣️", word: "Inveigle", meaning: "persuade by flattery", example: "She inveigled him into helping." },
{ emoji: "😒", word: "Invidious", meaning: "unpleasant", example: "Choosing between the two candidates was an invidious task, as they were both highly qualified." },
{ emoji: "🛡️", word: "Irrefragable", meaning: "unanswerable", example: "His argument was irrefragable." }
],
  J: [
{ emoji: "🍇", word: "Jabuticaba", meaning: "Brazilian grape tree fruit", example: "The jabuticaba grows on the trunk." },  
{ emoji: "😩", word: "Jaded", meaning: "wearied or bored from overexposure", example: "He felt jaded after years of routine work." },
{ emoji: "🪬", word: "Jejune", meaning: "bare", example: "The room was jejune and empty, containing only a single chair." },
{ emoji: "🍳", word: "Jentacular", meaning: "pertaining to breakfast", example: "They served a jentacular meal early in the morning." },
{ emoji: "🪬", word: "Jeopardy", meaning: "danger", example: "The reckless decision put the entire mission in jeopardy." },
{ emoji: "🛫", word: "Jettison", meaning: "throw overboard", example: "The plane jettisoned fuel before landing." },
{ emoji: "⚡", word: "Jiffy", meaning: "a very short time", example: "I'll be back in a jiffy." },
{ emoji: "🪬", word: "Jinxed", meaning: "unlucky", example: "I think this car is jinxed; it's broken down three times this month." },
{ emoji: "😰", word: "Jittery", meaning: "nervous", example: "The candidate was jittery before his important job interview." },
{ emoji: "🦘", word: "Joey", meaning: "baby kangaroo", example: "The joey peeked out from its mother's pouch." },
{ emoji: "😄", word: "Jocoserius", meaning: "half joking and half serious", example: "His jocoserius tone made it hard to know if he was serious." },
{ emoji: "🔪", word: "Julienne", meaning: "cut into thin strips", example: "She julienned the carrots." }    
],
K: [
{ emoji: "⚙️", word: "Kaput", meaning: "not working", example: "My phone is kaput." },
{ emoji: "🐕", word: "Kennel", meaning: "shelter for a dog", example: "The puppy slept inside the kennel." },
{ emoji: "💥", word: "Kerfuffle", meaning: "commotion", example: "There was a major kerfuffle at the airport when the flight was suddenly cancelled." },
{ emoji: "😒", word: "Killjoy", meaning: "Wet blanket /person who spoils others' pleasure", example: "Don't be a killjoy — let everyone enjoy the party." },
{ emoji: "🔥", word: "Kiln", meaning: "an oven or furnace for firing pottery", example: "The clay pots were baked in the kiln." },
{ emoji: "👪", word: "Kinfolk", meaning: "family members", example: "His kinfolk gathered." },
{ emoji: "🤴🌴", word: "King palm", meaning: "smooth-trunked tall palm", example: "The king palm stood elegant." },
{ emoji: "🛡️", word: "Knick-knacks", meaning: "small items", example: "Her shelves were covered with little knick-knacks she had collected from her travels." },
{ emoji: "⛰️", word: "Knoll", meaning: "a small hill or mound", example: "They sat on a grassy knoll." },
{ emoji: "🐨", word: "Koala", meaning: "tree-dwelling marsupial", example: "A koala clung to the eucalyptus." },
{ emoji: "🙇‍♂️", word: "Kowtow", meaning: "act subserviently", example: "He refused to kowtow." },
{ emoji: "👏", word: "Kudos", meaning: "praise", example: "Kudos to the team for finishing early." },
{ emoji: "🍊", word: "Kumquat", meaning: "small oval citrus fruit", example: "She tasted a sour kumquat." },
{ emoji: "🐖", word: "Kunekune", meaning: "a small domesticated pig breed", example: "The farm raised kunekune pigs." }
],
L: [
{ emoji: "⚖️", word: "Labile", meaning: "unstable", example: "His mood was labile and changed quickly." },
{ emoji: "❤️", word: "Labyrinth", meaning: "maze", example: "The ancient palace had a complicated labyrinth of corridors and secret passages." },
{ emoji: "🧡", word: "Lackadaisical", meaning: "lazy", example: "His lackadaisical approach to his studies resulted in poor grades." },
{ emoji: "💛", word: "Lachrymose", meaning: "tearful", example: "The lachrymose movie left everyone in the theater reaching for tissues." },
{ emoji: "💚", word: "Laconic", meaning: "brief", example: "His laconic reply was simply, 'I'll be there.'" },
{ emoji: "📦", word: "Laden", meaning: "heavily loaded", example: "The truck was laden with goods." },
{ emoji: "🎋🌴", word: "Lady palm", meaning: "clumping fan palm", example: "The lady palm grew in shade." },
{ emoji: "💚", word: "Lair", meaning: "den", example: "The bear retreated to its lair deep in the forest for the winter." },
{ emoji: "🔥", word: "Lambent", meaning: "flickering", example: "The lambent flames danced in the dark." },
{ emoji: "💙", word: "Languid", meaning: "weak", example: "The hot summer afternoon made her feel languid and sleepy." },
{ emoji: "🏮", word: "Lantern", meaning: "a portable light", example: "They carried a lantern through the dark forest." },
{ emoji: "🐇", word: "Lapin", meaning: "rabbit (especially for meat)", example: "Lapin dishes are popular in some cuisines." },
{ emoji: "💜", word: "Larceny", meaning: "theft", example: "He was arrested and charged with petit larceny for stealing a wallet." },
{ emoji: "🤎", word: "Largesse", meaning: "generosity", example: "The university benefited from the largesse of a wealthy alumnus who donated millions." },
{ emoji: "🩷", word: "Lassitude", meaning: "tiredness", example: "A feeling of lassitude overcame her after the long journey." },
{ emoji: "🩵", word: "Latent", meaning: "hidden", example: "The photographer had a latent talent for capturing emotion that only emerged later in his career." },
{ emoji: "🧡", word: "Laud", meaning: "praise", example: "Critics lauded the director's latest film as a masterpiece." },
{ emoji: "❤️", word: "Lavish", meaning: "luxurious", example: "The wedding was a lavish affair with a five-course meal and a live orchestra." },
{ emoji: "💛", word: "Lax", meaning: "loose", example: "Security at the airport was surprisingly lax, with no one checking bags." },
{ emoji: "💛", word: "Lay off", meaning: "sacking", example: "The struggling company had to lay off 200 workers." },
{ emoji: "🐇", word: "Leveret", meaning: "young hare", example: "A leveret hid in the grass." },
{ emoji: "🤝", word: "Liaise", meaning: "cooperate", example: "My job is to liaise between the design team and the clients." },
{ emoji: "🤝", word: "Liaison", meaning: "communication between groups", example: "She acted as a liaison between the two departments." },
{ emoji: "💘", word: "Limerence", meaning: "romantic infatuation", example: "He was in a state of limerence, unable to think of anyone but his new love interest." },
{ emoji: "💧", word: "Limpid", meaning: "clear and transparent", example: "The lake had limpid water." },
{ emoji: "🍯", word: "Lincture", meaning: "cough syrup", example: "The doctor prescribed a lincture for his cough." },
{ emoji: "💚", word: "Lithe", meaning: "flexible", example: "The dancer had a lithe and graceful body." },
{ emoji: "😡", word: "Livid", meaning: "furious", example: "She was livid when she heard the news." },
{ emoji: "💙", word: "Loathe", meaning: "hate", example: "I absolutely loathe getting up early on cold winter mornings." },
{ emoji: "🧽", word: "Loofah", meaning: "bathing sponge", example: "He scrubbed with a loofah." },
{ emoji: "💜", word: "Loquacious", meaning: "talkative", example: "The loquacious taxi driver told us his entire life story during the short ride." },
{ emoji: "🤎", word: "Lucid", meaning: "clear", example: "The professor gave a lucid explanation of a very complex theory." },
{ emoji: "🩷", word: "Lugubrious", meaning: "gloomy", example: "The dog had a lugubrious expression, as if it hadn't been fed in weeks." },
{ emoji: "🩵", word: "Ludicrous", meaning: "ridiculous", example: "It's ludicrous to think we can drive to New York in two hours." },
{ emoji: "🧡", word: "Lug", meaning: "drag", example: "I had to lug my heavy suitcase up three flights of stairs." },
{ emoji: "🪶", word: "Lyrebird", meaning: "Australian bird that mimics sounds", example: "The lyrebird copied chainsaw noises." }
],
  M: [
{ emoji: "💖", word: "Macabre", meaning: "grim", example: "The museum had a macabre exhibit featuring ancient torture devices." },
{ emoji: "🍲", word: "Macédoine", meaning: "larger dice than brunoise", example: "The salad used macédoine vegetables." },
{ emoji: "🟥", word: "Madder", meaning: "crimson red", example: "The cloth was dyed madder." },
{ emoji: "💘", word: "Magnanimous", meaning: "generous", example: "The magnanimous winner praised his opponent's skill after the match." },
{ emoji: "🏰🌴", word: "Majesty palm", meaning: "tropical indoor palm", example: "The majesty palm needed humidity." },
{ emoji: "💝", word: "Malady", meaning: "disease", example: "He suffered from a mysterious malady that doctors couldn't diagnose." },
{ emoji: "💗", word: "Malevolent", meaning: "evil", example: "The villain had a malevolent grin as he revealed his wicked plan." },
{ emoji: "💞", word: "Malign", meaning: "insult", example: "She warned him not to malign his colleagues, as it would damage his reputation." },
{ emoji: "💕", word: "Malleable", meaning: "flexible", example: "Gold is a malleable metal that can be hammered into thin sheets." },
{ emoji: "💓", word: "Mastermind", meaning: "genius", example: "The criminal mastermind planned the heist for months." },
{ emoji: "⛓️", word: "Manacle", meaning: "shackles", example: "The prisoner was bound in manacles." },
{ emoji: "💟", word: "Manifest", meaning: "obvious", example: "His relief was manifest when he heard the good news." },
{ emoji: "🔓", word: "Manumission", meaning: "release from slavery", example: "The document granted his manumission." },
{ emoji: "❣️", word: "Marshal", meaning: "arrange, organize", example: "She helped marshal the troops for the parade." },
{ emoji: "📏", word: "Martinet", meaning: "a strict disciplinarian", example: "The teacher was a martinet in class." },
{ emoji: "🎭", word: "Mascaron", meaning: "decorative sculpted face ornament", example: "The building had a mascaron above the door." },
{ emoji: "🔗", word: "Masochism", meaning: "pleasure from one's own pain", example: "He joked that studying all night felt like masochism." },
{ emoji: "💌", word: "Mayhem", meaning: "chaos", example: "There was complete mayhem when someone pulled the fire alarm." },
{ emoji: "💖", word: "Mellifluous", meaning: "sweet sounding", example: "The singer's mellifluous voice captivated the audience." },
{ emoji: "💘", word: "Mendacious", meaning: "lying", example: "The mendacious politician was caught making false promises." },
{ emoji: "💝", word: "Mendicant", meaning: "beggar", example: "A mendicant sat outside the temple, asking for alms." },
{ emoji: "💗", word: "Mercenary", meaning: "money-minded", example: "His motives were purely mercenary; he only cared about the paycheck." },
{ emoji: "🔄", word: "Metempsychosis", meaning: "transmigration of soul", example: "He believed in metempsychosis." },
{ emoji: "💞", word: "Metamorphosis", meaning: "change form", example: "The caterpillar's metamorphosis into a butterfly is a fascinating process." },
{ emoji: "💕", word: "Meticulous", meaning: "careful", example: "She was meticulous about her work, checking every detail twice." },
{ emoji: "💓", word: "Miasma", meaning: "foul smell", example: "A miasma of decay hung over the swamp." },
{ emoji: "💟", word: "Miffed", meaning: "annoyed", example: "He was a bit miffed that she forgot his birthday." },
{ emoji: "🌾", word: "Mickle", meaning: "great quantity", example: "Many a little makes a mickle." },
{ emoji: "❣️", word: "Milieu", meaning: "environment", example: "He grew up in a artistic milieu, surrounded by painters and musicians." },
{ emoji: "💌", word: "Mimic", meaning: "copy", example: "The parrot can mimic human speech perfectly." },
{ emoji: "💌", word: "Minatory", meaning: "threatening", example: "The dark clouds had a minatory appearance, suggesting an impending storm." },
{ emoji: "💖", word: "Minuscule", meaning: "tiny", example: "The chance of finding a mistake was minuscule." },
{ emoji: "💘", word: "Miscreant", meaning: "criminal", example: "The miscreant was caught and brought to justice." },
{ emoji: "💝", word: "Mitigate", meaning: "reduce", example: "Measures were taken to mitigate the effects of the oil spill." },
{ emoji: "💗", word: "Mnemonic", meaning: "memory aid", example: "She used a mnemonic device to remember the order of the planets." },
{ emoji: "💞", word: "Modicum", meaning: "small amount", example: "Anyone with a modicum of common sense would have avoided that situation." },
{ emoji: "➗", word: "Moiety", meaning: "half", example: "He inherited a moiety of his father’s property." },
{ emoji: "💕", word: "Mollify", meaning: "calm", example: "He tried to mollify the angry customer with an apology and a refund." },
{ emoji: "😑", word: "Monotony", meaning: "ennui", example: "The monotony of daily work bored him." },
{ emoji: "⛪", word: "Monstrance", meaning: "sacred vessel used in Catholic Church", img: process.env.PUBLIC_URL + "/images/Monstrance.webp", example: "The priest held the monstrance." },
{ emoji: "🌧️", word: "Moody", meaning: "temperamental", example: "He could be moody, happy one moment and sullen the next." },
{ emoji: "💓", word: "Morbid", meaning: "gloomy", example: "She had a morbid fascination with stories about ghosts." },
{ emoji: "💟", word: "Mores", meaning: "customs", example: "The book explores the social mores of Victorian England." },
{ emoji: "❣️", word: "Mordant", meaning: "sarcastic", example: "The critic was known for his mordant wit and sharp reviews." },
{ emoji: "❣️", word: "Moratorium", meaning: "embargo, pause", example: "The government declared a moratorium on new oil drilling." },
{ emoji: "💌", word: "Morose", meaning: "depressed", example: "He became morose after losing his job." },
{ emoji: "🐆", word: "Mottled", meaning: "spotted", example: "The bird had mottled brown feathers that helped it blend in with the forest floor." },
{ emoji: "🎭", word: "Mountebank", meaning: "a charlatan or fraud", example: "The salesman was nothing but a mountebank." },
{ emoji: "👩", word: "Muliebrity", meaning: "womanly qualities", example: "The character symbolized grace and muliebrity." },
{ emoji: "💖", word: "Mundane", meaning: "ordinary", example: "After the excitement of the trip, everyday life seemed mundane." },
{ emoji: "🪖", word: "Myrmidon", meaning: "blind loyal follower", example: "The tyrant relied on myrmidons." }
],
  N: [
{ emoji: "🌹", word: "Nebulous", meaning: "unclear", example: "The details of the plan were still nebulous, with many questions unanswered." },
{ emoji: "📍🌴", word: "Needle palm", meaning: "cold-hardy spiny palm", example: "The needle palm tolerated frost." },
{ emoji: "🥀", word: "Nefarious", meaning: "wicked", example: "The villain was involved in all kinds of nefarious activities, from smuggling to extortion." },
{ emoji: "🌹", word: "Negligible", meaning: "tiny amount", example: "The difference in price between the two options was negligible." },
{ emoji: "🥀", word: "Nemesis", meaning: "opponent", example: "He finally faced his old nemesis in the championship match." },
{ emoji: "🌹", word: "Neophyte", meaning: "beginner", example: "As a neophyte in the world of investing, she sought advice from experienced friends." },
{ emoji: "👶", word: "Neoteny", meaning: "juvenilization", example: "Axolotls show neoteny." },
{ emoji: "🥀", word: "Niche", meaning: "suitable place", example: "She found her niche as a graphic designer for a small, creative agency." },
{ emoji: "🌹", word: "Nihilism", meaning: "belief in nothing", example: "His philosophy of nihilism led him to reject all moral principles." },
{ emoji: "📈", word: "Nimiety", meaning: "excess", example: "There was a nimiety of decorations at the event." },
{ emoji: "🥀", word: "Nocturnal", meaning: "night-active", example: "Owls are nocturnal birds of prey, hunting under the cover of darkness." },
{ emoji: "🌹", word: "Nonchalant", meaning: "calm", example: "He tried to appear nonchalant when he walked into the room, despite his nervousness." },
{ emoji: "🌹", word: "Norfolk island pine", meaning: "indoor, decorative houseplant", img: process.env.PUBLIC_URL + "/images/Norfolk Island Pine.jpg", example: "a popular living Christmas tree due to its symmetrical, tiered branches and soft needles." },
{ emoji: "🥀", word: "Nostalgia", meaning: "love for past", example: "Looking at old photographs filled her with a sense of nostalgia for her childhood." },
{ emoji: "🌹", word: "Notorious", meaning: "famous (bad way)", example: "The area was notorious for its high crime rate." },
{ emoji: "💍", word: "Nubile", meaning: "marriageable", example: "She was considered nubile by society." },
{ emoji: "📅", word: "Nudiustertian", meaning: "day before yesterday", example: "I saw him nudiustertian." },
{ emoji: "🚫", word: "Nugatory", meaning: "worthless", example: "The effort proved nugatory." },
{ emoji: "🐶", word: "Nuzzling", meaning: "rub gently with nose", example: "The puppy kept nuzzling her." }
],
O: [
{ emoji: "💕", word: "Obdurate", meaning: "stubborn", example: "Despite our pleas, he remained obdurate and refused to change his mind." },
{ emoji: "💖", word: "Obfuscate", meaning: "confuse", example: "The politician tried to obfuscate the issue by giving vague and evasive answers." },
{ emoji: "💞", word: "Oblique", meaning: "indirect", example: "She made an oblique reference to his past mistakes without mentioning them directly." },
{ emoji: "😒", word: "Obnoxious", meaning: "rude/awful", example: "His obnoxious behavior at the party offended many of the guests." },
{ emoji: "🙏", word: "Obsecration", meaning: "solemn request or plea (often in prayer)", example: "In his obsecration, he prayed earnestly for guidance and strength." },
{ emoji: "💗", word: "Obsequious", meaning: "overly obedient", example: "The obsequious waiter bowed constantly and agreed with everything they said." },
{ emoji: "💓", word: "Obstinate", meaning: "stubborn", example: "The obstinate child refused to eat his vegetables no matter what." },
{ emoji: "💝", word: "Obtuse", meaning: "slow to understand", example: "Am I being obtuse? I just don't understand what you're trying to say." },
{ emoji: "🌇", word: "Occidental", meaning: "western", example: "The city reflects occidental traditions." },
{ emoji: "#️⃣", word: "Octothorpe", meaning: "the symbol #", example: "Type an octothorpe before the tag." },
{ emoji: "💞", word: "Odious", meaning: "hateful", example: "The odious dictator was responsible for the suffering of millions." },
{ emoji: "💗", word: "Ogle", meaning: "stare at", example: "It's rude to ogle people as they walk by." },
{ emoji: "💓", word: "Onerous", meaning: "burdensome", example: "The new manager assigned her onerous tasks that kept her at work until midnight." },
{ emoji: "🥚", word: "Oologist", meaning: "collector of bird eggs", example: "The oologist studied rare eggs." },
{ emoji: "💝", word: "Opaque", meaning: "not see-through", example: "The window was made of opaque glass to ensure privacy." },
{ emoji: "💕", word: "Opiate", meaning: "sleep drug", example: "The doctor prescribed an opiate to help him sleep after the surgery." },
{ emoji: "🐭", word: "Opossum", meaning: "nocturnal marsupial", example: "An opossum crossed the road." },
{ emoji: "💢", word: "Opprobrium", meaning: "contempt", example: "The decision brought public opprobrium." },
{ emoji: "⚔️", word: "Oppugn", meaning: "to challenge or attack", example: "The lawyer tried to oppugn the witness’s credibility." },
{ emoji: "📚", word: "Opsimath", meaning: "late learner", example: "He became an opsimath at sixty." },
{ emoji: "💖", word: "Opulent", meaning: "wealthy", example: "The hotel lobby was decorated in an opulent style with gold fixtures and velvet curtains." },
{ emoji: "💞", word: "Ornate", meaning: "decorated", example: "The ceiling of the cathedral was covered with ornate carvings." },
{ emoji: "😠", word: "Ornery", meaning: "bad-tempered", example: "The old man was ornery and difficult." },
{ emoji: "💗", word: "Ordeal", meaning: "painful difficulty", example: "The family went through a terrible ordeal during the flood." },
{ emoji: "🙏", word: "Orison", meaning: "prayer", example: "He said a quiet orison before sleeping." },
{ emoji: "💓", word: "Orthodoxy", meaning: "belief", example: "He challenged the religious orthodoxy of his time with new ideas." },
{ emoji: "🥱", word: "Oscitation", meaning: "yawning or drowsiness", example: "The long lecture caused widespread oscitation." },
{ emoji: "💝", word: "Ostensible", meaning: "apparent", example: "The ostensible reason for the meeting was to discuss the budget, but really it was about layoffs." },
{ emoji: "💕", word: "Ostentatious", meaning: "showy", example: "Her diamond necklace was beautiful but a bit ostentatious for a casual lunch." },
{ emoji: "💖", word: "Ostracize", meaning: "exclude", example: "The community decided to ostracize him after he broke their most important rule." },
{ emoji: "💞", word: "Overture", meaning: "introduction", example: "The opera began with a dramatic overture." },
{ emoji: "💗", word: "Ordinance", meaning: "edict", example: "The city passed an ordinance banning smoking in public parks." },
{ emoji: "🌅", word: "Oriental", meaning: "eastern", example: "He enjoys oriental art and culture." },
{ emoji: "🏔️", word: "Orophile", meaning: "lover of mountains", example: "The orophile spent weekends hiking." },
{ emoji: "📢", word: "Overtly", meaning: "openly", example: "He overtly criticized the decision." },
{ emoji: "😰", word: "Overwrought", meaning: "very upset", example: "She became overwrought before the exam." },
{ emoji: "💪", word: "Oxter", meaning: "armpit", example: "He tucked the book under his oxter." }
],
P: [
{ emoji: "🏰", word: "Palatial", meaning: "palace-like", example: "The celebrity's mansion was absolutely palatial, with dozens of rooms and a huge pool." },
{ emoji: "🍽️", word: "Palatable", meaning: "edible", example: "The meal was simple but palatable." },
{ emoji: "🦴", word: "Palaeontologist", meaning: "one who studies fossils", example: "The palaeontologist discovered a dinosaur bone." },
{ emoji: "💊", word: "Palliate", meaning: "reduce pain", example: "The doctor gave him medicine to palliate the symptoms but couldn't cure the disease." },
{ emoji: "✋", word: "Palpable", meaning: "touchable", example: "The tension in the room was palpable as they waited for the test results." },
{ emoji: "🌾🌴", word: "Palmyra palm", meaning: "tall tropical palm", example: "Palmyra palms lined the fields." },
{ emoji: "🔄", word: "Paradox", meaning: "contradiction", example: "It's a paradox that the calmest person can be the most stressed inside." },
{ emoji: "🏅", word: "Paragon", meaning: "perfect example", example: "She is considered a paragon of virtue and kindness in the community." },
{ emoji: "🧥", word: "Parka", meaning: "weatherproof coat with hood", example: "He wore a parka in the snowstorm." },
{ emoji: "📌", word: "Paramount", meaning: "most important", example: "Safety is of paramount importance when working with heavy machinery." },
{ emoji: "🚷", word: "Pariah", meaning: "outcast", example: "After the scandal, he became a social pariah and was shunned by his former friends." },
{ emoji: "⚖️", word: "Parity", meaning: "equality", example: "The women's team demanded parity with the men's team in terms of funding." },
{ emoji: "🏡🌴", word: "Parlor palm", meaning: "indoor decorative palm", example: "A parlor palm sat near the window." },
{ emoji: "💰", word: "Parsimonious", meaning: "stingy", example: "Her parsimonious husband refused to pay for a taxi, even though it was raining." },
{ emoji: "🥕", word: "Parsnip", meaning: "root vegetable related to carrot", example: "Roasted parsnip tasted sweet." },
{ emoji: "🤝", word: "Partake", meaning: "participate", example: "Would you like to partake in the festivities?" },
{ emoji: "🧑‍💼", word: "Parvenu", meaning: "an upstart or newly rich person", example: "The parvenu tried to fit into high society." },
{ emoji: "🎭", word: "Patsy", meaning: "fall guy", example: "He was set up to be the patsy and take the blame for the crime." },
{ emoji: "🌸", word: "Pauciloflorous", meaning: "few-flowered", example: "The botanist identified a rare, pauciloflorous orchid with only a single bloom." },
{ emoji: "📉", word: "Paucity", meaning: "lack", example: "There is a paucity of good restaurants in this small town." },
{ emoji: "🥕", word: "Paysanne", meaning: "rustic thin irregular cut", example: "Vegetables were cut paysanne style." },
{ emoji: "😒", word: "Pejorative", meaning: "insulting", example: "He used a pejorative term to describe his opponent, which caused offense." },
{ emoji: "❤️", word: "Penchant", meaning: "liking", example: "She has a penchant for expensive designer handbags." },
{ emoji: "🙏", word: "Penitent", meaning: "sorry", example: "The penitent sinner asked for forgiveness." },
{ emoji: "⏳", word: "Perduring", meaning: "long-lasting", example: "Their friendship proved perduring despite distance." },
{ emoji: "📝", word: "Perfunctory", meaning: "careless work", example: "He gave the report only a perfunctory glance before signing it." },
{ emoji: "☠️", word: "Pernicious", meaning: "harmful", example: "The pernicious effects of the drug can last a lifetime." },
{ emoji: "😕", word: "Perplexed", meaning: "confused", example: "The student was perplexed by the complex math problem." },
{ emoji: "🏃‍♂️", word: "Persevere", meaning: "continue", example: "Despite many setbacks, she decided to persevere and finish the project." },
{ emoji: "😄", word: "Persiflage", meaning: "light banter or playful talk", example: "Their conversation was full of witty persiflage." },
{ emoji: "🍊", word: "Persimmon", meaning: "berry-like fruit", example: "The persimmon ripened in autumn." },
{ emoji: "⏳", word: "Persistent", meaning: "continuing", example: "His persistent cough finally prompted him to see a doctor." },
{ emoji: "🧠", word: "Perspicience", meaning: "keen understanding or insight", example: "Her perspicience helped her solve the complex problem quickly." },
{ emoji: "📌", word: "Pertinent", meaning: "relevant", example: "Please limit your comments to issues pertinent to the discussion." },
{ emoji: "📚", word: "Peruse", meaning: "read carefully", example: "She perused the document, looking for any hidden clauses." },
{ emoji: "🌍", word: "Pervasive", meaning: "everywhere, prevalent", example: "The influence of social media is pervasive in modern society." },
{ emoji: "🔍", word: "Persnickety", meaning: "overly concerned with small details", example: "She is persnickety about grammar and punctuation." },
{ emoji: "🌧️", word: "Petrichor", meaning: "smell after rain", example: "The petrichor after the summer storm was fresh and clean." },
{ emoji: "😡", word: "Petulant", meaning: "irritable", example: "The petulant child stamped his foot and refused to eat his dinner." },
{ emoji: "🌠", word: "Phenomenon", meaning: "amazing event", example: "The northern lights are a beautiful natural phenomenon." },
{ emoji: "🎁", word: "Philanthropy", meaning: "charity", example: "His philanthropy included donations to hospitals and schools." },
{ emoji: "📬", word: "Philatelist", meaning: "collector of stamps", img: process.env.PUBLIC_URL + "/images/stamps.avif", example: "He became a philatelist at a young age." },
{ emoji: "💘", word: "Philtre", meaning: "a love potion", example: "The story mentioned a magical philtre." },
{ emoji: "📦", word: "Phillumenist", meaning: "collector of matchbox labels", img: process.env.PUBLIC_URL + "/images/matches.webp", example: "The phillumenist saved rare match labels." },
{ emoji: "🐄", word: "Piebald", meaning: "mottled", example: "The piebald horse had black and white patches." },
{ emoji: "🎨", word: "Pied", meaning: "multi-coloured", example: "The dog had a pied coat." },
{ emoji: "⛪", word: "Pious", meaning: "religious", example: "She was a pious woman who attended church every Sunday." },
{ emoji: "🏔️", word: "Pinnacle", meaning: "highest point", example: "Winning the award marked the pinnacle of her career." },
{ emoji: "🌶️", word: "Piquant", meaning: "spicy", example: "The sauce had a piquant flavor that lingered on the tongue." },
{ emoji: "🕊️", word: "Placate", meaning: "calm", example: "He tried to placate the crying baby with a toy." },
{ emoji: "🌊", word: "Placid", meaning: "peaceful", example: "The lake was placid, reflecting the mountains perfectly." },
{ emoji: "🗣️", word: "Platitude", meaning: "trite remark", tag: "confusing", example: "He offered only platitudes instead of real advice." },
{ emoji: "👨‍✈️", word: "Platoon", meaning: "squad", example: "The platoon marched forward." },
{ emoji: "🌊", word: "Plenitude", meaning: "an abundance", example: "There was a plenitude of food at the feast." },
{ emoji: "🌊", word: "Plethora", meaning: "an abundance", example: "There is a plethora of options available." },
{ emoji: "😟", word: "Plight", meaning: "difficult situation", example: "They sympathized with the refugee's plight." },
{ emoji: "📉", word: "Plummet", meaning: "fall quickly", example: "Stock prices plummeted after the bad economic news." },
{ emoji: "👥", word: "Plurality", meaning: "majority", example: "He won the election with a plurality of the votes." },
{ emoji: "🏹", word: "Poacher", meaning: "person who illegally hunts animals", example: "The ranger caught a poacher in the forest." },
{ emoji: "😭", word: "Poignant", meaning: "emotionally touching", example: "The film's ending was poignant and brought tears to my eyes." },
{ emoji: "⚔️", word: "Pogroms", meaning: "violent persecution of a group", example: "History records many tragic pogroms." },
{ emoji: "⚔️", word: "Polarize", meaning: "divide", example: "The controversial issue continues to polarize the nation." },
{ emoji: "😊", word: "Pollyanna", meaning: "cheerful", example: "He remained a Pollyanna despite difficulties." },
{ emoji: "🔤", word: "Polysemous", meaning: "having multiple meanings", example: "The word 'bank' is polysemous." },
{emoji: "🟫", word: "Poncho", meaning: "blanket-like cloak", example: "She pulled on a poncho when it started raining." },
{ emoji: "🐴🌴", word: "Ponytail palm", meaning: "swollen-base plant", example: "The ponytail palm stored water." },
{ emoji: "🔤", word: "Postpositive", meaning: "placed after the word it modifies", example: "In some languages, adjectives are postpositive." },
{ emoji: "💪", word: "Potent", meaning: "powerful", example: "The medicine is very potent, so use it carefully." },
{ emoji: "🛠️", word: "Pragmatic", meaning: "practical", example: "We need a pragmatic solution, not a theoretical one." },
{ emoji: "❤️", word: "Predilection", meaning: "a preference or special liking", example: "She has a predilection for classical music." },
{ emoji: "⛪", word: "Prelate", meaning: "high-ranking clergy", example: "The prelate led the ceremony." },
{ emoji: "⚠️", word: "Premonition", meaning: "warning", example: "She had a premonition that something bad was going to happen." },
{ emoji: "⚖️", word: "Preponderate", meaning: "have more influence", example: "Economic factors preponderated." },
{ emoji: "🤯", word: "Preposterous", meaning: "ridiculous", example: "The idea that he could run a marathon is preposterous; he can't even walk a mile." },
{ emoji: "🔮", word: "Prescient", meaning: "knowing before", example: "His prescient warnings about the economic crisis were ignored." },
{ emoji: "🎩", word: "Prestidigitation", meaning: "performing magic tricks", example: "The magician amazed us with prestidigitation." },
{ emoji: "💎", word: "Pretentious", meaning: "showy", example: "The restaurant was pretentious, with overly fancy dishes and high prices." },
{ emoji: "🎲", word: "Probability", meaning: "likelihood", example: "There is a high probability of rain this afternoon." },
{ emoji: "🌀", word: "Proclivity", meaning: "habit / tendency", example: "He has a proclivity for exaggerating his achievements." },
{ emoji: "🌋", word: "Prodigious", meaning: "enormous", example: "The project required a prodigious amount of effort and resources." },
{ emoji: "👶", word: "Prodigy", meaning: "genius child", example: "Mozart was a musical prodigy, composing music from a very young age." },
{ emoji: "➕", word: "Proliferate", meaning: "multiply", example: "Social media platforms have proliferated in the last decade." },
{ emoji: "🗣️", word: "Prolix", meaning: "wordy or long-winded", example: "His speech was prolix and tiring." },
{ emoji: "📖", word: "Prologue", meaning: "intro section", example: "The prologue sets the scene for the rest of the novel." },
{ emoji: "📣", word: "Promulgate", meaning: "announce", example: "The new law was promulgated by the president." },
{ emoji: "😐", word: "Prosaic", meaning: "dull", example: "He found the task prosaic and boring." },
{ emoji: "🎭", word: "Protagonist", meaning: "main character", example: "The protagonist of the story is a young girl searching for her father." },
{ emoji: "🔴", word: "Protanopia", meaning: "red-blindness", example: "Protanopia affects the perception of red colors." },
{ emoji: "⏳", word: "Protract", meaning: "extend", example: "They decided to protract the negotiations rather than rush to an agreement." },
{ emoji: "😤", word: "Provocation", meaning: "causing anger", example: "He reacted violently, even under slight provocation." },
{ emoji: "🔞", word: "Prurient", meaning: "obscene or indecent", example: "The magazine contained prurient content." },
{ emoji: "✍️", word: "Pseudonym", meaning: "fake name", example: "The author wrote under a pseudonym to protect his identity." },
{ emoji: "🧸", word: "Puerile", meaning: "childish", example: "His puerile sense of humor was not appreciated in the boardroom." },
{ emoji: "💃", word: "Pulchritude", meaning: "physical beauty", example: "The movie star was renowned for her pulchritude." },
{ emoji: "🧄", word: "Pungent", meaning: "strong smell", example: "A pungent odor of garlic filled the kitchen." },
{ emoji: "🕵️", word: "Purloined", meaning: "stolen", example: "He purloined the book." },
{ emoji: "🚧", word: "Pylon", meaning: "traffic cone", example: "The construction workers placed bright orange pylons around the open manhole." }
],
Q: [
{ emoji: "💠", word: "Quagmire", meaning: "difficult situation", example: "The company found itself in a financial quagmire after the market crashed." },
{ emoji: "💠", word: "Quail", meaning: "show fear", example: "He tends to quail at the thought of speaking in front of a large audience." },
{ emoji: "💠", word: "Quaint", meaning: "charming", example: "They stayed in a quaint little cottage with thatched roof and flower boxes." },
{ emoji: "💠", word: "Qualm", meaning: "worry", example: "I have no qualms about recommending her for the position; she's highly qualified." },
{ emoji: "💠", word: "Quandary", meaning: "Predicament,confusion", example: "I'm in a quandary about which job offer to accept." },
{ emoji: "📏", word: "Quantifiable", meaning: "measurable", example: "The results were quantifiable." },
{ emoji: "💠", word: "Quarantined", meaning: "isolated", example: "The passengers were quarantined on the ship to prevent the spread of the virus." },
{ emoji: "👸🌴", word: "Queen palm", meaning: "fast-growing feather palm", example: "The queen palm towered above." },
{ emoji: "💠", word: "Quell", meaning: "stop", example: "The police were called in to quell the riot." },
{ emoji: "💠", word: "Querulous", meaning: "complaining", example: "The querulous patient constantly complained about the hospital food and the noise." },
{ emoji: "💠", word: "Quibble", meaning: "argue small things", example: "Let's not quibble over such minor details; we have bigger issues to discuss." },
{ emoji: "🧐", word: "Quidnunc", meaning: "an inquisitive person", example: "The village quidnunc always knew everyone's business." },
{ emoji: "💠", word: "Quiescent", meaning: "inactive", example: "The volcano had been quiescent for centuries, but scientists knew it could erupt again." },
{ emoji: "💠", word: "Quintessential", meaning: "perfect example", example: "She is the quintessential English rose, with her fair skin and polite manner." },
{ emoji: "💠", word: "Quixotic", meaning: "unrealistically hopeful", example: "His plan to end world poverty was noble but ultimately quixotic." },
{ emoji: "🐹", word: "Quokka", meaning: "small Australian marsupial", example: "The quokka appeared friendly." },
{ emoji: "💰", word: "Quomodocunquizing", meaning: "making money in any way possible", example: "He believed in quomodocunquizing, earning money by any means." },
{ emoji: "💠", word: "Quotidian", meaning: "daily", example: "She found beauty in the quotidian tasks of cooking and cleaning." }
],
R: [
{ emoji: "🐺", word: "Rabid", meaning: "extreme", example: "He is a rabid fan of the football team and never misses a game." },
{ emoji: "🦝", word: "Raccoon", meaning: "nocturnal mammal", example: "The raccoon searched for food." },
{ emoji: "📖", word: "Raconteur", meaning: "storyteller", example: "My grandfather was a brilliant raconteur who could keep us entertained for hours." },
{ emoji: "🤪", word: "Rambunctious", meaning: "boisterous", example: "The rambunctious kids ran around." },
{ emoji: "🌿", word: "Rampant", meaning: "uncontrolled", example: "Corruption was rampant in the government, with officials taking bribes openly." },
{ emoji: "💥", word: "Rampage", meaning: "riot", example: "The fans went on a rampage after their team lost the championship." },
{ emoji: "🌲", word: "Rampike", meaning: "standing dead tree", example: "A rampike stood in the field." },
{ emoji: "🥶", word: "Rancor", meaning: "bitterness", example: "He felt no rancor towards the man who had defeated him." },
{ emoji: "🦁", word: "Rapacious", meaning: "greedy", example: "The rapacious developer bought up all the land and built ugly apartment blocks." },
{ emoji: "🤝", word: "Rapport", meaning: "connection", example: "As a teacher, she had a great rapport with her students." },
{ emoji: "🤝", word: "Rapprochement", meaning: "restoration of relations", example: "The nations sought rapprochement." },
{ emoji: "🍛", word: "Ratatouille", meaning: "a vegetable stew", example: "She cooked ratatouille for dinner." },
{ emoji: "✅", word: "Ratify", meaning: "approve", example: "The senate voted to ratify the treaty." },
{ emoji: "🔊", word: "Raucous", meaning: "noisy", example: "A raucous crowd celebrated the victory in the streets." },
{ emoji: "😏", word: "Raunchy", meaning: "lewd / obscene", example: "The comedian told a few raunchy jokes." },
{ emoji: "💣", word: "Ravage", meaning: "destroy", example: "The hurricane ravaged the coastal towns, leaving behind only ruins." },
{ emoji: "🍽️", word: "Ravenous", meaning: "very hungry", example: "After the long hike, I was absolutely ravenous." },
{ emoji: "❌", word: "Rebuff", meaning: "reject", example: "She rebuffed all his advances politely but firmly." },
{ emoji: "👎", word: "Rebuke", meaning: "scold", example: "The manager rebuked her staff for being late." },
{ emoji: "🪨", word: "Recalcitrant", meaning: "stubborn", example: "The recalcitrant child refused to apologize." },
{ emoji: "📑", word: "Recapitulate", meaning: "summarize", example: "Let me recapitulate the main points of my argument." },
{ emoji: "🔄", word: "Reciprocal", meaning: "mutual", example: "Their dislike for each other was reciprocal." },
{ emoji: "🏚️", word: "Recluse", meaning: "loner", example: "The old man was a recluse who rarely left his house." },
{ emoji: "🤝", word: "Reconcile", meaning: "restore friendship", example: "The couple finally reconciled after months of separation." },
{ emoji: "📚", word: "Recondite", meaning: "obscure", example: "The professor specialized in some recondite area of medieval history." },
{ emoji: "🔍", word: "Reconnoiter", meaning: "explore to gather information", example: "They went ahead to reconnoiter the area before the mission." },
{ emoji: "⚡", word: "Recrimination", meaning: "blame back", example: "The meeting ended in bitter recrimination, with each side blaming the other." },
{ emoji: "🛠️", word: "Rectify", meaning: "fix", example: "We must rectify the mistake immediately before it causes more problems." },
{ emoji: "✋", word: "Recusant", meaning: "refuses authority", example: "The recusant ignored the rule." },
{ emoji: "🌹", word: "Redolent", meaning: "smelling of", example: "The kitchen was redolent of freshly baked bread." },
{ emoji: "🛡️", word: "Redoubtable", meaning: "formidable", example: "She proved a redoubtable opponent." },
{ emoji: "➕", word: "Redundant", meaning: "extra", example: "With the new software, many of the old jobs became redundant." },
{ emoji: "✨", word: "Refulgence", meaning: "brightness", example: "The moon shone with silvery refulgence." },
{ emoji: "❌", word: "Refute", meaning: "disprove", example: "The lawyer refuted the witness's testimony with new evidence." },
{ emoji: "🎉", word: "Regale", meaning: "entertain", example: "He regaled us with stories of his travels in Asia." },
{ emoji: "📅", word: "Regimen", meaning: "routine", example: "She follows a strict fitness regimen, exercising every morning." },
{ emoji: "🪖", word: "Regimented", meaning: "strictly controlled", example: "The school followed a regimented schedule." },
{ emoji: "🔁", word: "Reiterate", meaning: "repeat", example: "Let me reiterate how important it is to be on time." },
{ emoji: "✋", word: "Relinquish", meaning: "give up", example: "He was forced to relinquish control of the company." },
{ emoji: "😔", word: "Remorse", meaning: "regret", example: "The criminal showed no remorse for his actions." },
{ emoji: "🏗️", word: "Renovate", meaning: "restore", example: "They bought an old house and renovated it completely." },
{ emoji: "💵", word: "Reparation", meaning: "compensation", example: "The country paid reparations to the victims of the war." },
{ emoji: "💬", word: "Repartee", meaning: "witty clever answers", example: "Her quick repartee made the conversation lively." },
{ emoji: "🛠️", word: "Repertoire", meaning: "skill list", example: "The magician's repertoire included card tricks and illusions." },
{ emoji: "🔁", word: "Repetitively", meaning: "repeatedly", example: "He asked the same question repetitively." },
{ emoji: "🤝", word: "Rapprochement", meaning: "restoration of friendly relations", example: "There was a rapprochement between the two countries." },
{ emoji: "😡", word: "Reprehensible", meaning: "shameful", example: "His behavior was absolutely reprehensible." },
{ emoji: "🙅‍♂️", word: "Repress", meaning: "hold back", example: "She tried to repress her anger, but it showed in her voice." },
{ emoji: "👎", word: "Reprimand", meaning: "scold", example: "The boss gave him a severe reprimand for being late." },
{ emoji: "⚠️", word: "Reproach", meaning: "blame", example: "Her expression was full of reproach." },
{ emoji: "😈", word: "Reprobate", meaning: "evil person", example: "The villain was a reprobate." },
{ emoji: "🤏", word: "Reprove", meaning: "gentle criticism", example: "The teacher reproved the student for talking in class." },
{ emoji: "❌", word: "Rescind", meaning: "cancel", example: "The company rescinded its job offer after the candidate's background check." },
{ emoji: "💪", word: "Resilient", meaning: "quickly recovering", example: "Children are often resilient and recover quickly from illness." },
{ emoji: "🔊", word: "Resonant", meaning: "echoing", example: "He had a deep, resonant voice that commanded attention." },
{ emoji: "🎯", word: "Resolute", meaning: "determined", example: "She remained resolute in her decision to leave." },
{ emoji: "😌", word: "Respite", meaning: "rest", example: "The brief ceasefire provided a respite from the fighting." },
{ emoji: "↩️", word: "Restitution", meaning: "return something", example: "The court ordered the restitution of the stolen property." },
{ emoji: "🕸️", word: "Retiary", meaning: "shrewd / net-like", example: "She used a retiary plan to trap the opponent." },
{ emoji: "🤐", word: "Reticent", meaning: "silent", example: "He was reticent about his past and rarely spoke of it." },
{ emoji: "🕸️", word: "Reticulated", meaning: "net-like patterned", example: "The giraffe has reticulated markings." },
{ emoji: "↩️", word: "Retract", meaning: "take back", example: "The newspaper had to retract its earlier story after discovering it was false." },
{ emoji: "🙏", word: "Revere", meaning: "respect deeply", example: "In many cultures, people revere their ancestors." },
{ emoji: "💭", word: "Reverie", meaning: "daydream", example: "She was lost in a reverie, thinking about her upcoming vacation." },
{ emoji: "😡", word: "Revile", meaning: "insult", example: "The politician was reviled in the press for his scandalous behavior." },
{ emoji: "🎶", word: "Rhapsody", meaning: "emotional speech", example: "He went into a rhapsody about the beauty of the Italian countryside." },
{ emoji: "🗣️", word: "Rhetoric", meaning: "persuasive speech", example: "The candidate's campaign rhetoric was powerful but lacked substance." },
{ emoji: "🗣️", word: "Rhodomontade", meaning: "boastful talk", example: "His speech was full of rhodomontade." },
{ emoji: "😏", word: "Ribaldry", meaning: "impolite or vulgar humour", example: "The comedian was known for his ribaldry." },
{ emoji: "🪑", word: "Rickety", meaning: "ramshackle", example: "They lived in a rickety old house." },
{ emoji: "📜", word: "Rigmarole", meaning: "long complicated procedure", example: "We went through the rigmarole of paperwork." },
{ emoji: "📏", word: "Rigorous", meaning: "strict", example: "The selection process is rigorous and only the best candidates are chosen." },
{ emoji: "🆕", word: "Rookie", meaning: "a new recruit", example: "The rookie police officer was nervous on his first day." },
{ emoji: "👑🌴", word: "Royal palm", meaning: "tall ornamental palm", example: "Royal palms lined the avenue.", category: "palm" },
{ emoji: "📚", word: "Rudimentary", meaning: "basic or fundamental", example: "I have only a rudimentary understanding of how engines work." },
{ emoji: "😞", word: "Rue", meaning: "regret", example: "He will rue the day he decided to quit his job." },
{ emoji: "🟤", word: "Rufous", meaning: "reddish brown", example: "The bird had rufous feathers." },
{ emoji: "🟤", word: "Russet", meaning: "dark reddish brown", example: "Russet leaves covered the ground." }          
],
S: [
<<<<<<< HEAD
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
=======
{ emoji: "🌞🌴", word: "Sabal palm", meaning: "Cabbage Palm: fan-leaved hardy palm", img: process.env.PUBLIC_URL + "/images/Sabal palm.jpg", example: "The sabal palm tolerated heat.", category: "palm" },
{ emoji: "🏖️", word: "Sabulous", meaning: "sandy", example: "They walked along the sabulous shore." },
{ emoji: "⚡", word: "Sadism", meaning: "malicious joy in hurting others", example: "The villain's sadism was obvious." },
{ emoji: "🖤", word: "Sadomasochism", meaning: "algolagnia: pleasure from giving or receiving pain", example: "The novel explored sadomasochism themes." },
{ emoji: "🌿🌴", word: "Sago palm", meaning: "cycad resembling palm", img: process.env.PUBLIC_URL + "/images/Sago palm.jpg", example: "The sago palm grew slowly.", category: "palm" },
{ emoji: "🤢", word: "Sallow", meaning: "unhealthy look", example: "After weeks of illness, his skin had taken on a sallow, yellowish tone." },
{ emoji: "🌿", word: "Salubrious", meaning: "healthy or health-giving", example: "The fresh mountain air was truly salubrious." },
{ emoji: "🍖", word: "Salami", meaning: "cured dried sausage", example: "He ordered a salami pizza." },
{ emoji: "😏", word: "Sardonic", meaning: "mocking or cynical", example: "He gave a sardonic smile at the remark." },
{ emoji: "💃", word: "Sashay", meaning: "walk in a showy confident way", example: "A bright citrusy whiff of perfume wafted from her as she sashayed down the mahogany stairs." },
{ emoji: "🍊", word: "Satsuma", meaning: "a type of small orange", example: "She peeled a satsuma." },
{ emoji: "🪨", word: "Scabrous", meaning: "rough", example: "The scabrous surface hurt his hands." },
{ emoji: "😏", word: "Schadenfreude", meaning: "pleasure at others' troubles", example: "She felt schadenfreude when the boastful team lost." },
{ emoji: "🎓", word: "Scholar", meaning: "student", example: "She was a brilliant scholar who won many academic awards." },
{ emoji: "🐿️", word: "Sciurine", meaning: "related to squirrels", example: "The sciurine animal jumped across trees." },
{ emoji: "🕯️", word: "Sconce", meaning: "a wall-mounted light", img: process.env.PUBLIC_URL + "/images/Sconce light.webp", example: "The hallway was lit by antique sconces." },
{ emoji: "👀", word: "Scopaesthesia", meaning: "psychic staring effect", example: "He turned around due to scopaesthesia." },
{ emoji: "🧽", word: "Scour", meaning: "scrub", example: "She had to scour the burnt pot to remove the blackened residue." },
{ emoji: "🧭", word: "Scourer", meaning: "frequent traveler", example: "The scourer explored many cities." },
{ emoji: "🤝", word: "Scrouge", meaning: "huddle closely", example: "They scrouged together for warmth." },
{ emoji: "🙏", word: "Scrounge", meaning: "beg", example: "He would often scrounge for loose change to buy a cup of coffee." },
{ emoji: "🤤", word: "Scrumptious", meaning: "delicious", example: "The cake looked scrumptious." },
{ emoji: "🐇", word: "Scurry", meaning: "move quickly", example: "The mice scurried back into their holes when the cat appeared." },
{ emoji: "🪑", word: "Sedentary", meaning: "sitting", example: "His sedentary lifestyle led to various health problems." },
{ emoji: "♾️", word: "Sempiternal", meaning: "everlasting", example: "Their love felt sempiternal." },
{ emoji: "❄️", word: "Septentrional", meaning: "northern", example: "The septentrional winds were very cold." },
{ emoji: "🏰", word: "Seraglio", meaning: "harem, zenana", example: "The palace had a guarded seraglio." },
{ emoji: "🕊️", word: "Serene", meaning: "calm", example: "The view of the lake at sunset was absolutely serene." },
{ emoji: "🍀", word: "Serendipity", meaning: "lucky find", example: "Finding that rare book in a small shop was pure serendipity." },
{ emoji: "🪚", word: "Serrated", meaning: "toothed like a saw", example: "Most roses have serrated leaves." },
{ emoji: "🍽️", word: "Serviette", meaning: "napkin", example: "He tucked the serviette into his collar before starting his meal." },
{ emoji: "🧩", word: "Shard", meaning: "fragment", example: "A shard of glass lay on the floor." },
{ emoji: "🐖", word: "Shoat", meaning: "a young pig", example: "The farmer raised a shoat in the pen." },
{ emoji: "🐍", word: "Sinuous", meaning: "winding", example: "The river followed a sinuous path through the valley." },
{ emoji: "🪞", word: "Simulacrum", meaning: "likeness", example: "The doll was an eerie simulacrum of a real baby." },
{ emoji: "💼", word: "Sinecure", meaning: "well-paid position with little responsibility", example: "He landed a sinecure that paid well but required minimal effort." },
{ emoji: "🏃", word: "Skedaddle", meaning: "run away", example: "The children skedaddled when it started raining." },
{ emoji: "🧐", word: "Skeptical", meaning: "doubting", example: "I'm skeptical about his claims of having seen a UFO." },
{ emoji: "📉", word: "Skewed", meaning: "distorted", example: "The picture looked skewed on the wall." },
{ emoji: "⚔️", word: "Skirmish", meaning: "clash", example: "There was a brief skirmish between the two groups of fans after the match." },
{ emoji: "🚀", word: "Skyrocket", meaning: "increase very steeply", example: "Prices for housing have skyrocketed in recent years." },
{ emoji: "🥤", word: "Slake", meaning: "quench", example: "He drank water to slake his thirst." },
{ emoji: "💨", word: "Slapdash", meaning: "careless", example: "He did a slapdash job on the painting, leaving drips everywhere." },
{ emoji: "😴", word: "Slumber", meaning: "sleep", example: "The baby fell into a deep and peaceful slumber." },
{ emoji: "😉", word: "Smicker", meaning: "smile coyly", example: "She smickered at the compliment." },
{ emoji: "🍽️", word: "Smorgasbord", meaning: "variety of foods", example: "The buffet was a smorgasbord." },
{ emoji: "🕵️‍♂️", word: "Sneak", meaning: "move quietly", example: "They tried to sneak out of the house without waking their parents." },
{ emoji: "🏷️", word: "Sobriquet", meaning: "a nickname", example: "He earned the sobriquet 'The Great' after his achievements." },
{ emoji: "🥊", word: "Sockdolager", meaning: "a decisive blow or final argument", example: "His final point was a real sockdolager." },
{ emoji: "👥", word: "Sonder", meaning: "realizing everyone has a life story", example: "Walking through the crowded station, he was overcome with a feeling of sonder." },
{ emoji: "🕊️", word: "Soaring", meaning: "rising", example: "The eagle was soaring high above the mountains." },
{ emoji: "🌱", word: "Sod", meaning: "Sward/grassy land", example: "They laid fresh sod in the backyard to create a new lawn." },
{ emoji: "🪦", word: "Solemnly", meaning: "seriously", example: "He solemnly promised to always tell the truth." },
{ emoji: "💤", word: "Sopor", meaning: "deep sleep or unconsciousness", example: "The drug caused sopor." },
{ emoji: "💧", word: "Spillway", meaning: "dam water exit", example: "The dam's spillway was opened to release excess water after the heavy rains." },
{ emoji: "🏛️", word: "Spartan", meaning: "simple", example: "The monk lived in a spartan room with only a bed and a chair." },
{ emoji: "✨", word: "Spiffy", meaning: "stylish", example: "He looked spiffy in his new suit and polished shoes." },
{ emoji: "🧵🌴", word: "Spindle palm", meaning: "palm with swollen trunk", img: process.env.PUBLIC_URL + "/images/Spindle palm.webp", example: "The spindle palm had a bulging middle.", category: "palm" },
{ emoji: "🔦", word: "Spotlight", meaning: "a strong focused light", example: "The actor stood under the spotlight." },
{ emoji: "❌", word: "Spurn", meaning: "reject", example: "She spurned his offer of marriage, breaking his heart." },
{ emoji: "💸", word: "Squander", meaning: "waste", example: "He won the lottery but squandered all the money within a year." },
{emoji: "🪟", word: "Squeegee", meaning: "wiper", example: "She used a squeegee to clean the glass." },
{ emoji: "🎭", word: "Specious", meaning: "misleading but plausible", example: "It sounded specious but false." },
{ emoji: "🗣️", word: "Squabble", meaning: "quibble", example: "They had a small squabble over trivial matters." },
{ emoji: "😬", word: "Squeamish", meaning: "nervous", example: "He's squeamish about seeing blood or any kind of medical procedure." },
{ emoji: "🐄", word: "Steer", meaning: "castrated male cattle", example: "The rancher raised a steer for beef production." },
{ emoji: "🛑", word: "Stymie", meaning: "obstruct", example: "The lack of funding has stymied the project for months." },
{ emoji: "🪑", word: "Staid", meaning: "serious", example: "The staid old bank manager disapproved of their casual dress." },
{ emoji: "🧍‍♂️", word: "Stance", meaning: "posture", example: "The athlete took a relaxed stance before taking the shot." },
{ emoji: "🕵️", word: "Stalking", meaning: "repeatedly following someone", example: "Stalking is a serious crime." },
{ emoji: "🤝", word: "Stalwart", meaning: "loyal", example: "She has been a stalwart supporter of the charity for many years." },
{ emoji: "📊", word: "Stakeholder", meaning: "interested party", example: "All stakeholders in the project were invited to the meeting." },
{ emoji: "📜", word: "Statute", meaning: "law, rule", example: "The statute was passed last year." },
{ emoji: "🏗️", word: "Steeplejack", meaning: "worker on tall structures", example: "The steeplejack climbed the tower." },
{ emoji: "📢", word: "Stentorian", meaning: "loud", example: "His stentorian voice could be heard above the noise of the crowd." },
{ emoji: "😵", word: "Stifle", meaning: "suffocate", example: "The smoke began to stifle him." },
{ emoji: "😐", word: "Stoical", meaning: "unemotional/impassive", example: "He remained stoical even when hearing the bad news." },
{ emoji: "🔥", word: "Stoke", meaning: "stir up a fire", example: "He stoked the fire to keep warm." },
{ emoji: "🌸", word: "Strew", meaning: "sprinkle", example: "They strew flowers on the path." },
{ emoji: "🚧", word: "Stymie", meaning: "hamper", example: "The budget cuts have stymied our plans for expansion." },
{ emoji: "🔄", word: "Succedaneum", meaning: "substitute", example: "Honey can be used as a succedaneum for sugar in some recipes." },
{ emoji: "🙇‍♂️", word: "Submissive", meaning: "obedient", example: "The dog was trained to be submissive and follow every command." },
{ emoji: "💰", word: "Substantial", meaning: "considerable", example: "They received a substantial amount of money from the insurance claim." },
{ emoji: "💸", word: "Suborned", meaning: "bribed", example: "The witness was suborned into giving false testimony." },
{ emoji: "📉", word: "Subpar", meaning: "below average", example: "His performance was subpar and the manager was not impressed." },
{ emoji: "🧼", word: "Sully", meaning: "soiled or tarnished", example: "The scandal sullied his name." },
{ emoji: "😠", word: "Surly", meaning: "bad-tempered", example: "The guard gave a surly reply." },
{ emoji: "💪", word: "Subdue", meaning: "overcome", example: "The police subdued the suspect." },
{ emoji: "👑", word: "Subjugate", meaning: "conquer", example: "The empire tried to subjugate neighboring lands." },
{ emoji: "🐿️", word: "Sugar glider", meaning: "small gliding marsupial", example: "The sugar glider jumped between trees." },
{ emoji: "👑", word: "Sumptuous", meaning: "luxurious", example: "They enjoyed a sumptuous dinner." },
{ emoji: "🌟", word: "Super-duper", meaning: "very great", example: "We had a super-duper time at the amusement park." },
{emoji: "💰", word: "Super pricey", meaning: "very expensive", example: "That watch is super pricey." },
{ emoji: "📦", word: "Superincumbent", meaning: "lying on top and pressing down", example: "The superincumbent weight caused the structure to collapse." },
{ emoji: "📈", word: "Surge", meaning: "sudden increase", example: "There was a surge in prices." },
{ emoji: "🧍", word: "Svelte", meaning: "thin", example: "The svelte model walked gracefully down the runway." },
{ emoji: "📚", word: "Swamped", meaning: "very busy", example: "I'm absolutely swamped with work at the moment." },
{ emoji: "🥵", word: "Sweltering", meaning: "very hot", example: "It was a sweltering summer day, and everyone sought shade." },
{ emoji: "🧩", word: "Synecdoche", meaning: "part used to represent whole", example: "'Wheels' is synecdoche for car." }             
],

T: [
{ emoji: "🌟", word: "Tableau", meaning: "picture", example: "The visitors stood still, creating a beautiful tableau that looked like an old painting." },
{ emoji: "🍊", word: "Tangerine", meaning: "a small citrus fruit", example: "He ate a sweet tangerine." },
{ emoji: "🌟", word: "Tarry", meaning: "delay", example: "We mustn't tarry if we want to catch the last bus home." },
{ emoji: "🤎", word: "Taupe", meaning: "greyish brown", example: "The walls were taupe." },
{ emoji: "📜", word: "Tenet", meaning: "core principle", example: "Honesty is a central tenet of the group." },
{ emoji: "🔄", word: "Tergiversation", meaning: "evasion or equivocation", example: "His tergiversation made it hard to trust his words." },
{ emoji: "🏠🌴", word: "Thatch palm", meaning: "palm used for roofing", example: "They used thatch palm leaves for huts.", category: "palm" },
{ emoji: "🌟", word: "Throe", meaning: "spasm", example: "In the throes of grief, she couldn't speak for several minutes." },
{ emoji: "🤦", word: "Throttlebottom", meaning: "incompetent official", example: "The minister was a throttlebottom." },
{ emoji: "🐎", word: "Thoroughbred", meaning: "purebred", example: "The horse is a famous thoroughbred." },
{ emoji: "📌", word: "Thumbtack", meaning: "pushpin", example: "She fixed the note with a thumbtack." },
{ emoji: "🌟", word: "Timorous", meaning: "fearful", example: "The timorous kitten hid under the sofa whenever someone entered the room." },
{ emoji: "🧪", word: "Tincture", meaning: "alcoholic solution", example: "The medicine was prepared as a tincture." },
{ emoji: "🌟", word: "Tirade", meaning: "long angry speech", example: "The boss launched into a tirade about the poor sales figures." },
{ emoji: "🌟", word: "Toilsome", meaning: "arduous", example: "Clearing the overgrown field was a toilsome task that took all weekend." },
{ emoji: "🌟", word: "Touchy", meaning: "irritable", example: "He's been touchy all day; I think something is bothering him." },
{ emoji: "🌟", word: "Toadying", meaning: "sycophancy", example: "His constant toadying to the manager made him unpopular with his colleagues." },
{ emoji: "🌟", word: "Tome", meaning: "book", example: "She spent the afternoon reading a heavy tome about ancient history." },
{ emoji: "✂️🌳", word: "Topiary", meaning: "shaping plants into forms", example: "The garden featured topiary animals." },
{ emoji: "🌵", word: "Torrid", meaning: "very hot and dry", example: "They crossed the torrid desert." },
{ emoji: "🌟", word: "Totile", meaning: "twisted", example: "The old tree had a totile trunk that had grown in a spiral over the centuries." },
{ emoji: "🚫", word: "Trafficking", meaning: "illegal trade in people or goods", example: "Authorities cracked down on trafficking." },
{ emoji: "🌟", word: "Traverse", meaning: "walk", example: "The hikers planned to traverse the entire mountain range in two weeks." },
{ emoji: "🌀", word: "Trance", meaning: "hypnotic state", example: "She stared in a trance." },
{ emoji: "🌅", word: "Tranquillity", meaning: "peace", example: "He loved the tranquillity of the early morning, before the city woke up." },
{ emoji: "🚀", word: "Trailblazer", meaning: "pioneer", example: "She was a trailblazer in the field of computer science, breaking barriers for women." },
{ emoji: "🧳🌴", word: "Traveler's palm", meaning: "fan-shaped Madagascar plant", example: "The traveler's palm spread like a giant fan." },
{ emoji: "✂️", word: "Trenchant", meaning: "sharp, keen", example: "Her trenchant analysis impressed everyone." },
{ emoji: "🔵", word: "Tritanopia", meaning: "blue-yellow color blindness", example: "Tritanopia is a rare form of color blindness." },
{ emoji: "✨", word: "Trouvaille", meaning: "a lucky or lovely discovery", example: "The antique shop was a real trouvaille." },
{ emoji: "😠", word: "Truculent", meaning: "ruthless", example: "He gave a truculent response to criticism." },
{ emoji: "🎈", word: "Turgid", meaning: "swollen", example: "The river became turgid after heavy rain." },
{ emoji: "🧀", word: "Turophile", meaning: "lover of cheese", example: "As a turophile, she tried every cheese." },
{ emoji: "🌟", word: "Turpitude", meaning: "wickedness", example: "The novel explores the moral turpitude of a corrupt politician." }
],
U: [
{ emoji: "🍾", word: "Ullage", meaning: "unfilled space in a container", example: "The bottle had some ullage." },
{ emoji: "🧑‍🦱", word: "Ulotrichous", meaning: "curly-haired", example: "The ulotrichous child smiled brightly." },
{ emoji: "🗣️", word: "Ultracrepidarian", meaning: "gives opinions beyond knowledge", example: "Stop being ultracrepidarian." },
{ emoji: "😞", word: "Unassuaged", meaning: "unsatisfied", example: "His thirst remained unassuaged after one glass of water." },
{ emoji: "👻", word: "Uncanny", meaning: "strange", example: "She had an uncanny ability to guess the future." },
{ emoji: "😞", word: "Underprivileged", meaning: "poor or disadvantaged", example: "The charity supports underprivileged children." },
{ emoji: "🧴", word: "Unguent", meaning: "ointment", example: "He applied an unguent to the wound." },
{ emoji: "🛡️", word: "Unimpeachable", meaning: "entirely trustworthy", example: "Her honesty is unimpeachable." },
{ emoji: "😵‍💫", word: "Unkempt", meaning: "disheveled", example: "He arrived with unkempt hair and clothes." },
{ emoji: "⚜️", word: "Unflappable", meaning: "calm", example: "Even in the middle of the crisis, the pilot remained unflappable." },
{ emoji: "⚜️", word: "Ungainly", meaning: "awkward", example: "The swan looked ungainly as it waddled on land, but was graceful in the water." },
{ emoji: "⚜️", word: "Unilateral", meaning: "one-sided", example: "The company took a unilateral decision to cut benefits without consulting employees." },
{ emoji: "⚜️", word: "Unobtrusive", meaning: "not noticeable", example: "The waiter was efficient and unobtrusive, refilling glasses without interrupting our conversation." },
{ emoji: "⚜️", word: "Unprecedented", meaning: "never before", example: "The heatwave was unprecedented in the region's recorded history." },
{ emoji: "⚜️", word: "Unscathed", meaning: "unharmed", example: "Amazingly, the driver walked away from the car accident completely unscathed." },
{ emoji: "⚜️", word: "Unwieldy", meaning: "hard to move", example: "The large box was unwieldy and difficult to carry up the stairs alone." },
{ emoji: "😠", word: "Upbraid", meaning: "severely scold", example: "The teacher upbraided him for being late." },
{ emoji: "⚜️", word: "Upbeat", meaning: "cheerful", example: "Despite the rainy weather, she remained upbeat and positive." },
{ emoji: "🎯", word: "Upshot", meaning: "outcome", example: "The upshot of the meeting was positive." },
{ emoji: "🎩", word: "Urbane", meaning: "refined", example: "He is an urbane gentleman with good manners." }
],
V: [
{ emoji: "🎭", word: "Vagary", meaning: "caprice", example: "The vagaries of the weather ruined their plans." },
{ emoji: "🍊", word: "Valencia Orange", meaning: "juice orange variety", example: "Valencia oranges are used for juice." },
{ emoji: "🔷", word: "Valorant", meaning: "bravery", example: "The soldier's valorant actions on the battlefield earned him a medal of honor." },
{ emoji: "🏃", word: "Vamoose", meaning: "skedaddle", example: "We decided to vamoose before the storm hit." },
{ emoji: "😐", word: "Vapid", meaning: "insipid", example: "The movie was dull and vapid." },
{ emoji: "🔷", word: "Vapulation", meaning: "flogging", example: "In ancient times, vapulation was a common punishment for minor offenses." },
{ emoji: "🔮", word: "Vaticination", meaning: "prophecy", example: "The priest made a vaticination about the future." },
{ emoji: "📚", word: "Vellichor", meaning: "strange nostalgia of old bookshops", example: "Walking through the dusty aisles, she was overcome with a sense of vellichor." },
{ emoji: "🔷", word: "Venal", meaning: "corrupt", example: "The venal politician accepted bribes from lobbyists in exchange for favors." },
{ emoji: "⚔️", word: "Vendetta", meaning: "hostility", example: "The families had a long-standing vendetta." },
{ emoji: "🔷", word: "Venial", meaning: "pardonable", example: "His mistake was venial, so the teacher simply warned him not to repeat it." },
{ emoji: "🌿", word: "Verdant", meaning: "green", example: "The hills were lush and verdant." },
{ emoji: "🌿", word: "Verdure", meaning: "green vegetation", example: "Spring brought lush verdure." },
{ emoji: "🔷", word: "Verge", meaning: "edge", example: "The country was on the verge of economic collapse." },
{ emoji: "🔷", word: "Veritable", meaning: "true", example: "The meal was a veritable feast, with more food than we could possibly eat." },
{ emoji: "🔷", word: "Vermillion", meaning: "reddish-orange", example: "The sunset painted the sky in brilliant shades of vermillion and gold." },
{ emoji: "🎭", word: "Versatile", meaning: "many-sided", example: "She is a versatile artist skilled in many forms." },
{ emoji: "🎢", word: "Vicissitude", meaning: "change or ordeal of life", example: "Life is full of vicissitudes." },
{ emoji: "📖", word: "Vignette", meaning: "a short literary description", example: "The book contains beautiful vignettes of village life." },
{ emoji: "🔷", word: "Vintage", meaning: "ancient", example: "He collects vintage cars from the 1920s." },
{ emoji: "🌱", word: "Virescent", meaning: "becoming green or turning green", example: "The leaves looked virescent in early spring." },
{ emoji: "☠️", word: "Virulent", meaning: "extremely harmful", example: "The virus is highly virulent." },
{ emoji: "🔷", word: "Viridescent", meaning: "greenish", example: "In spring, the hills become viridescent with new grass." },
{ emoji: "🫀", word: "Viscera", meaning: "internal organs of the body", example: "The injury affected his viscera." },
{ emoji: "🔷", word: "Vitriolic", meaning: "harsh", example: "Her vitriolic comments about his work deeply hurt his feelings." },
{ emoji: "🤬", word: "Vituperation", meaning: "abusive language", example: "The debate was full of vituperation." },
{ emoji: "🦊", word: "Vixen", meaning: "female fox", example: "The vixen protected her cubs fiercely." },
{ emoji: "🌋", word: "Vog", meaning: "volcanic smog", example: "The island was covered in vog." }
],
W: [
{ emoji: "🌬️", word: "Waft", meaning: "carry gently through the air", example: "The aroma of food wafted through the house." },
{ emoji: "🦘", word: "Wallaby", meaning: "small kangaroo", example: "The wallaby hopped quickly through the forest." },
{ emoji: "🏆", word: "Walloper", meaning: "a decisive or big winner", example: "The team scored a walloper victory." },
{ emoji: "🐰", word: "Warren", meaning: "a network of burrows", example: "The rabbits lived in a warren." },
{ emoji: "🍷", word: "Wassail", meaning: "mulled wine", example: "They served warm wassail at the festival." },
{ emoji: "🍼", word: "Wean", meaning: "help baby start eating solid food", example: "She began to wean the baby." },
{ emoji: "🤏", word: "Well-nigh", meaning: "almost", example: "Climbing the steep mountain trail was well-nigh impossible in the dark." },
{ emoji: "🌧️", word: "Weltschmerz", meaning: "deep sadness", example: "Reading news about global conflicts often fills him with a sense of weltschmerz." },
{ emoji: "🐏", word: "Wether", meaning: "castrated ram", example: "The wether grazed calmly in the field." },
{ emoji: "👃", word: "Whiff", meaning: "a brief smell", example: "I caught a whiff of perfume." },
{ emoji: "⏳", word: "Whilom", meaning: "former", example: "He was the whilom king of the land." },
{ emoji: "🎭", word: "Whimsical", meaning: "playfully unusual", example: "He decorated the room in a whimsical style." },
{ emoji: "🌬️🌴", word: "Windmill palm", meaning: "cold-hardy fan palm", img: process.env.PUBLIC_URL + "/images/Windmill palm.jpg", example: "The windmill palm waved in breeze.", category: "palm" },
{ emoji: "😊", word: "Winsome", meaning: "charming", example: "Her winsome smile won everyone's heart." },
{ emoji: "🌙", word: "Wistfulness", meaning: "yearning", example: "As she looked through old photographs, a feeling of wistfulness for her childhood came over her." },
{ emoji: "🥀", word: "Wizened", meaning: "dried up", example: "The old man's face was wizened with age." },
{ emoji: "😔", word: "Woebegone", meaning: "sad", example: "The lost puppy had a woebegone expression that melted everyone's hearts." },
{ emoji: "🌸", word: "Wonky", meaning: "twisted", example: "The table is a bit wonky because one of its legs is shorter than the others." }
],
X: [
{ emoji: "🥤", word: "Xertz", meaning: "gulp quickly", example: "He xertzed the drink." },
{ emoji: "🌳", word: "Xyloid", meaning: "woody", example: "The xyloid texture made the material strong." },
{ emoji: "🪵", word: "Xylopolist", meaning: "seller of timber", example: "The xylopolist supplied wood." }
],
Y: [
{ emoji: "🌊", word: "Yazo", meaning: "a large natural stream of water", example: "The village depended on the nearby yazo." },
{ emoji: "🌼", word: "Ylang Ylang", meaning: "fragrant flower commonly known in Tamil as Manoranjitham (மனோரஞ்சிதம்)", img: process.env.PUBLIC_URL + "/images/Ylang ylang.jpg", example: "The garden smelled of ylang ylang blossoms." },
{ emoji: "🔥", word: "Yen", meaning: "strong desire", example: "She had a yen to travel the world." },
{ emoji: "🎶", word: "Yodel", meaning: "a form of singing with rapid pitch changes., the late kishore kumar Indian playback artiste, was an exponent of this type of singing", example: "He learned to yodel in the mountains." },
{ emoji: "📜", word: "Yore", meaning: "long ago", example: "Stories of yore still fascinate us today." },
{ emoji: "🤠", word: "Yokel", meaning: "bumpkin", example: "He was unfairly dismissed as a yokel." },
{ emoji: "🗡️🌴", word: "Yucca palm", img: process.env.PUBLIC_URL + "/images/Yucca palm.webp", meaning: "yucca plant resembling palm", example: "The yucca palm had stiff leaves.", category: "palm" },
{ emoji: "😋", word: "Yummy", meaning: "delicious", example: "The cake was absolutely yummy." }
],
Z: [
  { emoji: "🌻", word: "Zaftig", meaning: "full-figured", example: "The painter was known for his portraits of zaftig women, celebrating their curves." },
  { emoji: "🐂", word: "Zebu", meaning: "humped ox",  img: process.env.PUBLIC_URL + "/images/zebu.jpg", example: "The farmer owned a sturdy zebu." },
  { emoji: "8️⃣", word: "Zenzizenzizenzic", meaning: "the eighth power of a number", img: process.env.PUBLIC_URL + "/images/8th power.jpg", example: "Mathematicians use zenzizenzizenzic for x⁸." },
  { emoji: "🍃", word: "Zephyr", meaning: "a soft gentle breeze", example: "A cool zephyr blew across the field." },
  { emoji: "✨", word: "Zingy", meaning: "vibrant and lively", example: "The sauce had a zingy flavor." },
  { emoji: "✨", word: "Zinnia", meaning: "an annual flowering plant in the sunflower family ", example: "We planted a vibrant row of pink and yellow zinnias along the fence", img: process.env.PUBLIC_URL + "/images/Zinnia.jpg", category: "flower" },
  { emoji: "🧟🌴", word: "Zombie palm", meaning: "Madagascar palm with spiny trunk", img: process.env.PUBLIC_URL + "/images/Zombie palm.webp", example: "The zombie palm stood with a thorny stem.", category: "palm" }
  ]
}; 
 
  // Function to search across all letters
  const getSearchResults = () => {
    if (!searchTerm.trim()) return null;
    
    const results = [];
    const searchLower = searchTerm.toLowerCase();
    
    // Loop through all letters in vocabLists
    Object.keys(vocabLists).forEach((letter) => {
      const items = vocabLists[letter];
      items.forEach((item) => {
        if (item.word.toLowerCase().includes(searchLower)) {
          results.push({
            ...item,
            letter: letter // Add which letter this word belongs to
          });
        }
      });
    });
    
    return results;
  };

  const speakWord = (word) => {
    if (speakingWord) {
      window.speechSynthesis.cancel();
    }
    setSpeakingWord(word);
    const utterance = new SpeechSynthesisUtterance(word);
    utterance.lang = "en-US";
    utterance.onend = () => setSpeakingWord(null);
    window.speechSynthesis.speak(utterance);
  };

  const getWordClass = (word) => {
    const specialWords = {
      "Bacchanalian": "typewriter",
      "Bullion": "bullion-gold",
      "Brobdingnagian": "brobdingnagian-3d",
      "Badinage": "anim-chat-underline font-badinage",
      "Baklava": "anim-honey-layer font-baklava",
      "Balaclava": "anim-mask-slide font-balaclava",
      "Baleen": "anim-wave-filter font-baleen",
      "Baloney": "anim-nonsense-strike font-baloney",
      "Ballyhoo": "anim-ad-banner font-ballyhoo",
      "Bamboo palm": "anim-bamboo-sway font-bamboopalm",
      "Bamboozle": "anim-trick-glide font-bamboozle",
      "Barding": "anim-armor-line font-barding",
      "Barmy": "anim-crazy-zigzag font-barmy",
      "Barouche": "anim-carriage-roll font-barouche",
      "Barrow": "anim-heavy-track font-barrow",
      "Backlash": "anim-reverse-swipe font-backlash",
      "Banausic": "anim-gear-track font-banausic",
      "Beige": "anim-sand-sheen font-beige",
      "Beleaguered": "anim-siege-lines font-beleaguered",
      "Benison": "anim-blessing-rays font-benison",
      "Besmirch": "anim-smear-glitch font-besmirch",
      "Bestow": "anim-gift-slide font-bestow",
      "Bestiality": "anim-warning-static font-warning",
      "Bevelled": "anim-angle-cut font-bevelled",
      "Beverage": "anim-liquid-wave font-beverage",
      "Bewray": "anim-secret-reveal font-bewray",
      "Bibulous": "anim-drunk-sway font-bibulous",
      "Bilious": "anim-toxic-ooze font-bilious",
       "Billet-doux": "anim-love-scroll font-billet",
      "Biltong": "anim-dry-strip font-biltong",
      "Blithesome": "anim-happy-bubbles font-blithesome",
      "Blitz": "anim-war-flash font-blitz",
      "Blood Orange": "anim-citrus-pulse font-bloodorange",
      "Blooper": "anim-error-bounce font-blooper",
      "Bloviate": "anim-talk-wave font-bloviate",
      "Blurry": "anim-fog-smear font-blurry",
      "Bodacious": "anim-glam-sheen font-bodacious",
      "Boffin": "anim-brain-grid font-boffin",
      "Boisterous": "anim-noise-bars font-boisterous",
      "Caboodle": "neon",
      "Caldera": "caldera-volcano",
      "Calefacient": "calefacient-heat",
      "Calligraphy": "calligraphy-write",
      "Dank": "mist",
      "Dwindle": "dwindle-fade",
      "Dwadle": "dwadle-drift",
      "Eccedentesiast": "fake-smile",
      "Facetious": "funny-wave",
      "Factitious": "anim-glitch",
      "Fair and square": "anim-balance",
      "Fallow": "anim-drift",
      "Fallacious": "anim-distort",
      "Falchion": "anim-swipe",
      "Fancier": "anim-cycle",
      "Fascinating": "anim-pulse-glow",
      "Fastidious": "anim-clean",
      "Fatalist": "anim-loop",
      "Fatuous": "anim-wobble",
      "Feasible": "anim-check-path",
      "Febrile": "anim-heat-wave",
      "Feign": "anim-feign",
      "Feral": "anim-wild",
      "Fervent": "anim-flame-strong",
      "Fervid": "anim-flame-fast",
      "Felicity": "anim-happy-bounce",
      "Fernweh": "anim-drift-far",
      "Fetid": "anim-stink-wave",
      "Filch": "anim-sneak",
      "Flabbergasted": "anim-shock",
      "Flagitious": "anim-intense-shake",
      "Flecked": "anim-speckle",
      "Fluke": "anim-lucky-pop",
      "Flurry": "anim-gust",
      "Flummox": "anim-confuse",
      "Forbearance": "anim-calm-hold",
      "Forlorn": "anim-sad-drop",
      "Forthright": "anim-straight-line",
      "Fortuitous": "anim-random-pop",
      "Frailty": "anim-weak",
      "Freelance": "anim-free",
      "Fret": "anim-anxious",
      "Frivolous": "anim-light-spin",
      "Fraught": "anim-tense",
      "Frazzled": "anim-burnout",
      "Freak": "anim-creepy",
      "Galago": "night-bounce",
       "Gallivant": "anim-walk font-casual",
      "Galore": "anim-sparkle font-fancy",
      "Gamboling": "anim-bounce font-playful",
      "Gargantuan": "anim-big font-heavy",
      "Garnered": "anim-collect font-clean",
      "Gash": "anim-slice font-sharp",
      "Gaucherie": "anim-awkward font-quirky",
      "Gelato": "anim-melt-swish font-gelato",
      "Gentry": "anim-elegant font-noble",
      "Gherkin": "anim-pickle font-funky",
      "Gingival": "anim-pulse-soft font-medical",
      "Gingerly": "anim-careful font-light",
      "Gleaming": "anim-shine font-luxury",
      "Glabrous": "anim-smooth font-clean-modern",
      "Gloating": "anim-smirk font-bold-taunt",
      "Gobble": "anim-chomp font-hungry",
      "Gobsmacked": "anim-explode font-shock",
      "Grange": "anim-rustic font-country",
      "Gravamen": "anim-heavy font-legal",
      "Gregarious": "anim-social font-friendly",
      "Griffonage": "anim-scribble font-handwrite",
      "Grime": "anim-dust font-gritty",
      "Grimy": "anim-smudge font-oily",
      "Grope": "anim-search font-blind",
      "Gaudery": "anim-flash font-glam",
      "Guerdon": "anim-medal font-victory",
      "Guffaw": "anim-laugh font-fun",
      "Gunk": "anim-sticky font-goo",
      "Gush": "anim-wave-flow font-fluid",
      "Habilement": "icicle",
      "Hackneyed": "anim-flicker-fade font-worn",
      "Hectoring": "anim-red-strike font-command",
      "Haggle": "anim-price-flash font-market",
      "Harry": "anim-slash-attack font-war",
      "Hapless": "anim-fall-luck font-unlucky",
      "Happenstance": "anim-random-flash font-fate",
      "Haply": "anim-soft-blink font-mystic",
      "Hebetude": "anim-dazed font-dull",
      "Hectic": "anim-chaotic-strobe font-rush",
      "Hendiadys": "anim-dual-flash font-literary",
      "Heuristic": "anim-neural-flash font-cyber",
      "Havier": "anim-stag-stomp font-forest",
      "Hewn": "anim-axe-strike font-stone",
      "Highway hypnosis": "anim-road-trance font-neon",
      "Highfalutin": "anim-grand-flare font-luxury",
      "Histrionic": "anim-stage-lightning font-theatre",
      "Hiraeth": "anim-home-glow font-nostalgia",
      "Hoard": "anim-gold-flash font-treasure",
      "Homester": "anim-cozy-pulse font-home",
      "Homily": "anim-sacred-glow font-sermon",
      "Horde": "anim-crowd-thunder font-chaos",
      "Hornswoggle": "anim-trick-zap font-conman",
      "Hullabaloo": "anim-noise-burst font-chaos-party",
      "Hoosegow": "anim-jail-bars font-western",
      "Hurry": "anim-speed-rush font-racer",
      "Hype": "anim-neon-hype font-club",
      "Hypnic jerk": "anim-sleep-shock font-dream",
      "Ictus": "ictus-beat",
      "Identity theft": "anim-data-fracture font-digital",
      "Idyllic": "anim-petal-fall font-peaceful",
      "Iffy": "anim-uncertain-float font-cloudy",
      "Imbibe": "anim-liquid-wave font-refresh",
      "Imbue": "anim-light-sprinkle font-inspired",
      "Imbroglio": "anim-thread-tangle font-knotted",
      "Immaculate": "anim-clean-glow font-pure",
      "Impertinent": "anim-rude-flick font-sassy",
      "Implicate": "anim-chain-pulse font-evidence",
      "Imperceptible": "anim-fade-whisper font-ghostly",
      "Impetuous": "anim-lightning-rush font-electric",
      "Implacable": "anim-stone-weight font-solid",
      "Importunately": "anim-repeat-ring font-demanding",
      "Inane": "anim-goofy-wobble font-silly",
      "Inaudible": "anim-whisper-fade font-silent",
      "Incisive": "anim-blade-flash font-sharp",
      "Incongruous": "anim-misaligned-shift font-odd",
      "Indelible": "anim-ink-stain font-memory",
      "Indignant": "anim-fire-rage font-fury",
      "Indigent": "anim-faded-droop font-poor",
      "Indolent": "anim-slouch-sway font-lazy",
      "Indomitable": "anim-thunder-rise font-unstoppable",
      "Inebriated": "anim-dizzy-lights font-party",
      "Inept": "anim-clumsy-blink font-goofy",
      "Ineffable": "anim-divine-glow font-elegant",
      "Inertia": "anim-slow-drift font-heavy",
      "Infatuated": "anim-heart-bulbs font-romantic",
      "Ineluctable": "anim-fate-chain font-doom",
      "Inesperate": "anim-surprise-flash font-electric",
      "Ingrained": "anim-root-grow font-nature",
      "Ingurgitate": "anim-gulp-bounce font-hungry",
      "Innuendo": "anim-whisper-led font-secret",
      "Inquisitive": "anim-curious-spark font-smart",
      "Internship": "anim-paper-spark font-office",
      "Inscrutable": "anim-mist-fall font-mystery",
      "Insidious": "anim-shadow-creep font-stealth",
      "Insolence": "anim-anger-burst font-rude",
      "Insouciant": "anim-feather-float font-carefree",
      "Inspissated": "anim-thick-drip font-heavy-liquid",
      "Interdict": "anim-ban-slash font-warning",
      "Invariably": "anim-loop-particles font-infinite",
      "Inveigle": "anim-charm-spray font-persuasion",
      "Invidious": "anim-toxic-fade font-unpleasant",
      "Irrefragable": "anim-shield-glow font-unbreakable",
      "Jabuticaba": "fruit-drop",
      "Jaded": "anim-drain-dash font-weary",
      "Jejune": "anim-empty-cursor font-barren",
      "Jentacular": "anim-morning-toast font-breakfast",
      "Jeopardy": "anim-danger-blink font-risk",
      "Jettison": "anim-throw-dash font-flight",
      "Jiffy": "anim-speed-cursor font-fast",
      "Jinxed": "anim-bad-luck-glitch font-cursed",
      "Jittery": "anim-nervous-shake font-anxious",
      "Joey": "anim-hop-lines font-cute",
      "Jocoserius": "anim-half-smile-dash font-playful",
      "Julienne": "anim-slice-cut font-chef",
      "Kaput": "kaput-glitch",
      "Kennel": "anim-paw-dots font-pet",
      "Kerfuffle": "anim-chaos-burst font-commotion",
      "Killjoy": "anim-party-fade font-spoiler",
      "Kiln": "anim-ember-rise font-fire",
      "Kinfolk": "anim-family-orbit font-home",
      "King palm": "anim-palm-sway font-tropical",
      "Knick-knacks": "anim-trinket-spark font-curio",
      "Knoll": "anim-hill-wave font-earthy",
      "Koala": "anim-leaf-fall font-cute",
      "Kowtow": "anim-bow-lines font-submissive",
      "Kudos": "anim-confetti-dots font-praise",
      "Kumquat": "anim-citrus-pop font-fruity",
      "Kunekune": "anim-piggy-bounce font-farm",
      "Labile": "labile-unstable",
      "Labyrinth": "anim-maze-lines font-maze",
      "Lackadaisical": "anim-slouch-drift font-lazy",
      "Lachrymose": "anim-teardrop-fall font-sad",
      "Laconic": "anim-short-blink font-minimal",
      "Laden": "anim-heavy-load font-cargo",
      "Lair": "anim-den-shadow font-cave",
      "Lambent": "anim-fire-flicker font-flame",
      "Languid": "anim-slow-wave font-drowsy",
      "Lantern": "anim-lantern-glow font-light",
      "Larceny": "anim-stealth-glitch font-thief",
      "Largesse": "anim-golden-sparkle font-generous",
      "Lassitude": "anim-droopy-fade font-weary",
      "Latent": "anim-hidden-pulse font-secretive",
      "Laud": "anim-praise-burst font-celebration",
      "Lavish": "anim-luxury-glow font-luxury",
      "Lax": "anim-loose-wave font-relaxed",
      "Lay off": "anim-fall-away font-dismissed",
      "Liaise": "anim-link-flow font-cooperate",
      "Liaison": "anim-bridge-pulse font-connection",
      "Limerence": "anim-heart-drift font-romantic",
      "Limpid": "anim-water-glass font-clear",
      "Lincture": "anim-syrup-drip font-medicine",
      "Lithe": "anim-ribbon-flex font-graceful",
      "Livid": "anim-rage-burn font-furious",
      "Loathe": "anim-cold-recoil font-hate",
      "Loofah": "anim-bubble-scrub font-bath",
      "Loquacious": "anim-chat-burst font-talkative",
      "Lucid": "anim-crystal-wave font-clearmind",
      "Lugubrious": "anim-gloom-drip font-melancholy",
      "Ludicrous": "anim-wobble-crazy font-ridiculous",
      "Lug": "anim-heavy-drag font-weight",
      "Macabre": "macabre-creepy",
      "Malady": "anim-sick-pulse font-malady",
      "Malevolent": "anim-evil-glitch font-malevolent",
      "Malign": "anim-toxic-slash font-malign",
      "Malleable": "anim-flex-morph font-malleable",
      "Mastermind": "anim-brainwave font-mastermind",
      "Manacle": "anim-chain-clink font-manacle",
      "Manifest": "anim-reveal-light font-manifest",
      "Manumission": "anim-break-free font-manumission",
      "Marshal": "anim-command-march font-marshal",
      "Martinet": "anim-strict-snap font-martinet",
      "Mascaron": "anim-mask-theatre font-mascaron",
      "Masochism": "anim-pain-pulse font-masochism",
      "Mayhem": "anim-revolve-scale font-chaos",
      "Mellifluous": "anim-side-slide font-melodic",
      "Mendacious": "anim-twister font-liar",
      "Mendicant": "anim-drop-vanish font-beggar",
      "Mercenary": "anim-revolve-drop font-money",
      "Metempsychosis": "anim-soul-cycle font-mystic",
      "Metamorphosis": "anim-transform-spin font-butterfly",
      "Meticulous": "anim-precision-lock font-careful",
      "Miasma": "anim-toxic-fog font-foul",
      "Miffed": "anim-annoy-bounce font-irritated",
      "Mickle": "anim-abundance-wave font-plenty",
      "Milieu": "anim-sheen font-milieu",
      "Mimic": "anim-glitch-copy font-mimic",
      "Minatory": "anim-danger-flash font-minatory",
      "Minuscule": "anim-tiny-sparkle font-minuscule",
      "Miscreant": "anim-criminal-glitch font-miscreant",
      "Mitigate": "anim-soften-wave font-mitigate",
      "Mnemonic": "anim-memory-pulse font-mnemonic",
      "Modicum": "anim-small-sheen font-modicum",
      "Moiety": "anim-half-split font-moiety",
      "Mollify": "anim-calm-drift font-mollify",
      "Monotony": "anim-tonyhawk font-monotony",
      "Magnanimous": "anim-golden-embrace font-magnanimous",
      "Moody": "anim-mood-shift font-moody",
      "Morbid": "anim-shadow-fade font-morbid",
      "Mores": "anim-cultural-ring font-mores",
      "Mordant": "anim-sarcasm-slash font-mordant",
      "Moratorium": "anim-pause-freeze font-moratorium",
      "Morose": "anim-rain-drift font-morose",
      "Mottled": "anim-speckle-flicker font-mottled",
      "Mountebank": "anim-fraud-glitch font-mountebank",
      "Muliebrity": "anim-elegance-bloom font-muliebrity",
      "Mundane": "anim-plain-loop font-mundane",
      "Myrmidon": "anim-march-obey font-myrmidon",
      "Nebulous": "nebulous-fog",
      "Nefarious": "anim-shadow-check font-nefarious",
      "Negligible": "anim-micro-lines font-negligible",
      "Nemesis": "anim-cross-strike font-nemesis",
      "Neophyte": "anim-beginner-grid font-neophyte",
      "Neoteny": "anim-youth-bounce font-neoteny",
      "Niche": "anim-pocket-pattern font-niche",
      "Nihilism": "anim-void-fade font-nihilism",
      "Nimiety": "anim-overflow-check font-nimiety",
      "Nocturnal": "anim-night-stripes font-nocturnal",
      "Nonchalant": "anim-soft-flow font-nonchalant",
      "Nostalgia": "anim-retro-fade font-nostalgia",
      "Notorious": "anim-danger-stripes font-notorious",
      "Nubile": "anim-ring-glow font-nubile",
      "Nudiustertian": "anim-time-scroll font-nudiustertian",
      "Nugatory": "anim-vanish-bars font-nugatory",
      "Nuzzling": "anim-nuzzle-wave font-nuzzling",
      "Obfuscate": "anim-gel-smear font-obfuscate",
      "Oblique": "anim-slant-gel font-oblique",
      "Obnoxious": "anim-toxic-jelly font-obnoxious",
      "Obsecration": "anim-prayer-drip font-obsecration",
      "Obsequious": "anim-bouncy-bow font-obsequious",
      "Obstinate": "anim-sticky-block font-obstinate",
      "Obtuse": "anim-slow-melt font-obtuse",
      "Octothorpe": "anim-hash-gel font-octothorpe",
      "Odious": "anim-ooze-dark font-odious",
      "Ogle": "anim-eye-jelly font-ogle",
      "Onerous": "anim-heavy-gel font-onerous",
      "Oologist": "anim-egg-wobble font-oologist",
      "Opaque": "anim-frost-gel font-opaque",
      "Opiate": "anim-drowsy-float font-opiate",
      "Opprobrium": "anim-shatter-pulse font-opprobrium",
      "Oppugn": "anim-slash-impact font-oppugn",
      "Opsimath": "anim-book-rise font-opsimath",
      "Opulent": "anim-gold-liquid font-opulent",
      "Ornate": "anim-carved-wave font-ornate",
      "Ornery": "anim-angry-jolt font-ornery",
      "Ordeal": "anim-heavy-drip font-ordeal",
      "Orison": "anim-prayer-aura font-orison",
      "Orthodoxy": "anim-wheel-faith font-orthodoxy",
      "Oscitation": "anim-yawn-wheel font-oscitation",
      "Ostensible": "anim-front-wheel-glass font-ostensible",
      "Ostentatious": "anim-gold-wheel-spin font-ostentatious",
      "Ostracize": "anim-exile-wheel font-ostracize",
      "Overture": "anim-music-wheel font-overture",
      "Ordinance": "anim-law-wheel font-ordinance",
      "Oriental": "anim-east-wheel font-oriental",
      "Orophile": "anim-mountain-wheel font-orophile",
      "Overtly": "anim-open-wheel font-overtly",
      "Overwrought": "anim-panic-wheel font-overwrought",
      "Oxter": "anim-axle-wheel font-oxter",
      "Abjure": "nadir-sink",
      "Achilles’ heel": "achilles-heel",
      "Acumen": "acumen-brain",
      "Accrued": "accrued-grow",
      "Adjure": "adjure-plead",
      "Addendum": "addendum-append",
      "Adipose": "adipose-squish",
      "Adumbrate": "adumbrate-draw",
      "Altruistic": "altruistic-heart",
      "Aplomb": "aplomb-glow",
      "Antediluvian": "antediluvian-fossil",
      "Antithetical": "antithetical-spotlight",
      "Apparent": "apparent-spotlight",
      "Apropos": "apropos-pin",
      "Assiduity": "assiduity-work",
      "Obdurate": "obdurate-fire",
      "Palatial": "palatial-stone",
      "Palatable": "anim-tasty-wave font-palatable",
      "Palaeontologist": "anim-fossil-dig font-palaeontologist",
      "Palliate": "anim-healing-pulse font-palliate",
      "Palpable": "anim-touch-bounce font-palpable",
      "Paradox": "anim-paradox font-paradox",
      "Paragon": "anim-halo font-paragon",
      "Parka": "anim-snow-drift font-parka",
      "Paramount": "anim-crown-rise font-paramount",
      "Pariah": "anim-fade-away font-pariah",
      "Parity": "anim-balance-bar font-parity",
      "Parsimonious": "anim-coin-shake font-parsimonious",
      "Parsnip": "anim-root-grow font-parsnip",
      "Partake": "anim-cheers font-partake",
      "Parvenu": "anim-gloss-slide font-parvenu",
      "Patsy": "anim-fall-stumble font-patsy",
      "Pauciloflorous": "anim-flower-bloom font-pauciloflorous",
      "Paucity": "anim-empty-fade font-paucity",
      "Paysanne": "anim-chop-lines font-paysanne",
      "Pejorative": "anim-sharp-slash font-pejorative",
      "Penchant": "anim-heart-float font-penchant",
      "Penitent": "anim-prayer-bow font-penitent",
      "Perduring": "anim-endless-ring font-perduring",
      "Perfunctory": "anim-lazy-scan font-perfunctory",
      "Pernicious": "anim-toxic-wave font-pernicious",
      "Perplexed": "anim-confused-spin font-perplexed",
      "Persevere": "anim-forward-march font-persevere",
      "Persiflage": "anim-chat-bounce font-persiflage",
      "Persistent": "anim-endless-pulse font-persistent",
      "Perspicience": "anim-insight-beam font-perspicience",
      "Pertinent": "anim-pin-focus font-pertinent",
      "Peruse": "anim-page-scan font-peruse",
      "Pervasive": "anim-spread-wave font-pervasive",
      "Persnickety": "anim-detail-zoom font-persnickety",
      "Petrichor": "anim-rain-mist font-petrichor",
      "Petulant": "anim-angry-shake font-petulant",
      "Phenomenon": "anim-cosmic-ring font-phenomenon",
      "Philanthropy": "anim-gift-glow font-philanthropy",
      "Philatelist": "anim-stamp-flick font-philatelist",
      "Philtre": "anim-love-potion font-philtre",
      "Phillumenist": "anim-match-flare font-phillumenist",
      "Piebald": "anim-patch-flow font-piebald",
      "Pied": "anim-pied",
      "Pious": "anim-pious",
      "Pinnacle": "anim-pinnacle",
      "Piquant": "anim-piquant",
      "Placate": "anim-placate",
      "Placid": "anim-placid",
      "Platitude": "anim-platitude",
      "Platoon": "anim-platoon",
      "Plenitude": "anim-plenitude",
      "Plethora": "anim-plethora",
      "Plight": "anim-plight",
      "Plummet": "anim-plummet",
      "Plurality": "anim-plurality",
      "Poacher": "anim-poacher",
      "Poignant": "anim-poignant",
      "Pogroms": "anim-pogroms",
      "Polarize": "anim-polarize",
      "Pollyanna": "anim-pollyanna",
      "Polysemous": "anim-polysemous",
      "Poncho": "anim-poncho",
      "Postpositive": "anim-postpositive",
      "Potent": "anim-potent",
      "Pragmatic": "anim-pragmatic",
      "Predilection": "anim-predilection",
      "Prelate": "anim-prelate",
      "Premonition": "anim-premonition",
      "Preponderate": "anim-preponderate",
      "Preposterous": "anim-preposterous",
      "Prescient": "anim-prescient",
      "Prestidigitation": "anim-prestidigitation",
      "Pretentious": "anim-pretentious",
      "Probability": "anim-probability",
      "Proclivity": "anim-proclivity",
      "Prodigious": "anim-prodigious",
      "Prodigy": "anim-prodigy",
      "Proliferate": "anim-proliferate",
      "Prolix": "anim-prolix",
      "Prologue": "anim-prologue",
      "Promulgate": "anim-promulgate",
      "Prosaic": "anim-prosaic",
      "Prosaic": "anim-boring-fade",
      "Protagonist": "anim-hero-spotlight",
      "Protanopia": "anim-colorblind-shift",
      "Protract": "anim-stretch-expand",
      "Provocation": "anim-angry-shake",
      "Prurient": "anim-neon-warning",
      "Pseudonym": "anim-secret-mask",
      "Puerile": "anim-child-bounce",
      "Pulchritude": "anim-beauty-glow",
      "Pungent": "anim-smell-wave",
      "Purloined": "anim-sneaky-slide",
      "Pylon": "anim-traffic-blink",
      "Quagmire": "quagmire-mud",
      "Quail": "anim-fear-ripple",
      "Quaint": "anim-vintage-wave",
      "Qualm": "anim-anxious-glitch",
      "Quandary": "anim-maze-shift",
      "Quantifiable": "anim-measure-lines",
      "Quarantined": "anim-isolation-pulse",
      "Queen palm": "anim-palm-sway",
      "Quell": "anim-suppression-smash",
      "Querulous": "anim-complain-shake",
      "Quibble": "anim-tiny-wiggle",
      "Quidnunc": "anim-curious-peek",
      "Quiescent": "anim-sleepy-drift",
      "Quintessential": "anim-royal-shine",
      "Quixotic": "anim-dreamy-float",
      "Quokka": "anim-bouncy-cute",
      "Quomodocunquizing": "anim-money-rain",
      "Quotidian": "anim-clock-tick",
      "Rabid": "rabid-stretch",
      "Raconteur": "anim-story-scroll",
      "Rambunctious": "anim-chaotic-bounce",
      "Rampant": "anim-wild-grow",
      "Rampage": "anim-destruction-shake",
      "Rampike": "anim-dead-tree-sway",
      "Rancor": "anim-cold-bitterness",
      "Rapacious": "anim-greedy-grab",
      "Rapport": "anim-friendly-link",
      "Rapprochement": "anim-union-merge",
      "Ratatouille": "anim-steamy-cook",
      "Ratify": "anim-approved-stamp",
      "Raucous": "anim-noisy-vibration",
      "Raunchy": "anim-neon-wink",
      "Ravage": "anim-fire-destruction",
      "Ravenous": "anim-hungry-chomp",
      "Rebuff": "anim-reject-push",
      "Rebuke": "anim-scold-flash",
      "Recalcitrant": "anim-stubborn-freeze",
      "Recapitulate": "anim-summary-scroll",
      "Reciprocal": "anim-mutual-mirror",
      "Recluse": "anim-shadow-hide",
      "Reconcile": "anim-heart-merge",
      "Recondite": "anim-mysterious-fade",
      "Reconnoiter": "anim-search-scan",
      "Recrimination": "anim-blame-bounce",
      "Rectify": "anim-fix-align",
      "Recusant": "anim-defiant-block",
      "Redolent": "anim-scent-drift",
      "Redoubtable": "anim-formidable-pulse",
      "Redundant": "anim-duplicate-echo",
      "Refulgence": "anim-radiant-shine",
      "Refute": "anim-refute-strike",
      "Regale": "anim-regale-confetti",
      "Regimen": "anim-regimen-cycle",
      "Regimented": "anim-regiment-march",
      "Reiterate": "anim-reiterate-echo",
      "Relinquish": "anim-relinquish-fade",
      "Remorse": "anim-remorse-blueglow",
      "Renovate": "anim-renovate-rebuild",
      "Reparation": "anim-reparation-goldflow",
      "Repartee": "anim-repartee-spark",
      "Repertoire": "anim-repertoire-toolkit",
      "Repetitively": "anim-repeat-loop",
      "Rapprochement": "anim-rapprochement-link",
      "Reprehensible": "anim-reprehensible-danger",
      "Repress": "anim-repress-compress",
      "Reprimand": "anim-reprimand-warning",
      "Revile": "anim-revile-burn",
      "Rhapsody": "anim-rhapsody-musicflow",
      "Rhetoric": "anim-rhetoric-wave",
      "Rhodomontade": "anim-rhodomontade-boast",
      "Ribaldry": "anim-ribaldry-wink",
      "Rickety": "anim-rickety-shake",
      "Rigmarole": "anim-rigmarole-scroll",
      "Rigorous": "anim-rigorous-scan",
      "Rookie": "anim-rookie-pop",
      "Rudimentary": "anim-rudimentary-build",
      "Rue": "anim-rue-fade",
      "Rufous": "anim-rufous-glow",
      "Russet": "anim-russet-autumn",
      "Sabulous": "anim-sabulous-gold",
      "Sadism": "anim-sadism-bizzy",
      "Sadomasochism": "anim-seesaw-pain",
      "Salami": "anim-salami-draw",
      "Sallow": "anim-sallow-spacing",
      "Sardonic":"anim-sardonic-metal",
      "Salubrious": "anim-salubrious-mask",
      "Sashay": "anim-sashay-fire",
      "Scabrous":"anim-scabrous-keys",
      "Schadenfreude": "anim-mask-schadenfreude",
      "Scopaesthesia": "anim-matrix-scopaesthesia",
      "Scrumptious": "anim-wavy-scrumptious",
      "Scrounge":"anim-scrounge-wave",
      "Sempiternal": "anim-sempiternal-wave",
      "Septentrional": "anim-septentrional-split",
      "Serendipity": "anim-serendipity-nabla",
      "Simulacrum": "anim-gooey-simulacrum",
      "Sinecure": "anim-sinecure-shadow",
      "Skedaddle": "anim-skedaddle-ghost",
      "Skeptical": "anim-skeptical-ghost",
      "Skyrocket": "anim-skyrocket-spotlight",
      "Smorgasbord": "anim-smorgasbord-neon",
      "Sockdolager": "anim-sockdolager-3d",
      "Staid":"anim-staid-flow",
      "Steeplejack": "anim-steeplejack-marquee",
      "Super-duper": "anim-super-duper-variable",
      "Superincumbent":"superincumbent-split",
      "Tableau": "tableau-drip",
      "Ullage": "ullage-fill",
      "Vagary": "vagary-chaos",
      "Vitriolic": "vitriolic-acid",
      "Vintage": "vintage-old",
      "Vituperation": "vituperation-rage",
      "Vog": "vog-eruption",
      "Waft": "waft-float",
      "Wassail": "wine-pour",
      "Wizened": "wizened-dry",
      "Woebegone": "woebegone-sad",
      "Wonky": "wonky-wobble",
      "Xertz": "xertz-gulp",
      "Xyloid": "xyloid-rings",
      "Xylopolist": "xylopolist-logs",
      "Yazo": "yazo-suction",
      "Yodel": "yodel-rings",
      "Yummy": "yummy-juice",
      "Zaftig": "zaftig-boba",
      "Zephyr": "zephyr-bubbles",
      "Zingy": "zingy-electric"
    };
    return specialWords[word] || "";
  };

  const getDirectionColors = (word) => {
    const map = {
      Austral: ["#00c6ff", "#0072ff"],
      Boreal: ["#00c853", "#2e7d32"],
      Oriental: ["#ff9800", "#ff5722"],
      Occidental: ["#9c27b0", "#673ab7"]
    };
    return map[word] || ["#00c6ff", "#0072ff"];
  };

  // Get search results if search term exists
  const searchResults = getSearchResults();
  
  // Determine what to display
  const displayResults = searchResults !== null;
  const showLetterContent = selectedLetter && !searchTerm.trim();

  return (
      <div className="page">
    <h1 className="title animate-heading">
      Genteelism <span class="test2">and </span> Normal Terms
    </h1>
     <div className="App">
      <div className="alphabet-buttons">
        {alphabet.map((letter) => (
          <button
            key={letter}
            className={`alphabet-btn ${selectedLetter === letter ? "active" : ""}`}
            onClick={() => {
              setSelectedLetter(letter);
              setSearchTerm(""); // Clear search when selecting a letter
            }}
          >
            {letter}
          </button>
        ))}
      </div>
      </div>

 <div className="search-box-wrapper">
  <input
    type="text"
    placeholder="Search across all words (A to Z)...  🔍"
    value={searchTerm}
    onChange={(e) => {
      setSearchTerm(e.target.value);
      if (e.target.value) setSelectedLetter(null);
    }}
    className="search-input"
  />
        {searchTerm && (
          <button 
            className="clear-search"
            onClick={() => {
              setSearchTerm("");
              setSelectedLetter(null);
            }}
          >
            ✖
          </button>
        )}
      </div>

      <div className="vocab-container">
        {/* Search Results Section */}
        {displayResults && (
          <>
            <h3 className="search-header">
              Search Results for "{searchTerm}" ({searchResults.length} found)
            </h3>
            {searchResults.length === 0 ? (
              <p><b>No matching words found.</b></p>
            ) : (
              searchResults.map((item, index) => (
                <div
                  key={index}
                  className="item"
                  style={{ animationDelay: `${index * 0.02}s` }}
                >
                  <div className="top-line">
                    {item.img ? (
                      <div
                        className={`${
                          item.word === "Zenzizenzizenzic"
                            ? "rotate-border-round"
                            : item.category === "palm"
                            ? "rotate-border-zombie"
                            : item.category === "color"
                            ? "rotate-border-color"
                            : item.category === "direction"
                            ? "rotate-border-direction"
                            : item.category === "vegetable"
                            ? "rotate-border-veg"
                            : item.category === "flower"
                            ? "rotate-border-flower"
                            : "rotate-border"
                        }`}
                        style={
                          item.category === "direction"
                            ? {
                                "--dir-color1": getDirectionColors(item.word)[0],
                                "--dir-color2": getDirectionColors(item.word)[1]
                              }
                            : {}
                        }
                      >
                        <img
                          src={item.img}
                          alt={item.word}
                          className="image circle-image"
                        />
                      </div>
                    ) : (
                      <span className="emoji">{item.emoji}</span>
                    )}

                    <span
  className={`word ${item.tag === "confusing" ? "confusing" : ""} ${getWordClass(item.word)}`}
  style={{ "--chars": item.word.length }}
>
  {item.word === "Rabid"
  ? item.word.split("").map((char, i) => (
      <span key={i}>{char}</span>
    ))
  : item.word}

  {/* 🪨 Only for Palatial */}
  {item.word === "Palatial" && (
    <>
      <span className="chip"></span>
      <span className="chip"></span>
      <span className="chip"></span>
      <span className="chip"></span>
      <span className="chip"></span>
    </>
  )}
</span>

                    <span> – </span>
                    <span className="meaning">{item.meaning}</span>

                    <span
                      className={`speaker ${speakingWord === item.word ? "speaking" : ""}`}
                      onClick={() => speakWord(item.word)}
                    >
                      🔊
                    </span>
                    <span class="word anim-wheel-faith">
  Orthodoxy
</span>
<span class="word anim-paradox font-paradox">
  Paradox
</span>

<span class="word anim-halo font-paragon">
  Paragon
</span>

<span class="word anim-snow-drift font-parka">
  Parka
</span>
                  </div>

                  <div className="example">{item.example}</div>
                  <div className="letter-badge">Letter: {item.letter}</div>
                </div>
              ))
            )}
          </>
        )}

        {/* Selected Letter Content (only when no search) */}
        {!displayResults && !selectedLetter && (
          <p style={{ fontWeight: 700, fontSize: "1.2rem", textAlign: "center", marginTop: "20px" }}>
            Select a letter 👇 <br />
            Zoom in 
            <img 
              src={process.env.PUBLIC_URL + "/images/zoom.png"}
              alt="zoom"
              className="zoom-icon"
              style={{ width: "24px", verticalAlign: "middle" }}
            />
            {" "}to magnify screen
          </p>
        )}

        {showLetterContent && vocabLists[selectedLetter] && (
          <>
            {(() => {
              // Filter within the selected letter (for additional refinement while letter is selected)
              const filtered = vocabLists[selectedLetter].filter((item) =>
                item.word.toLowerCase().includes(searchTerm.toLowerCase())
              );

              if (filtered.length === 0) {
                return <p>No matching words found in {selectedLetter}.</p>;
              }

              return filtered.map((item, index) => (
                <div
                  key={index}
                  className="item"
                  style={{ animationDelay: `${index * 0.08}s` }}
                >
                  <div className="top-line">
                    {item.img ? (
                      <div
                        className={`${
                          item.word === "Zenzizenzizenzic"
                            ? "rotate-border-round"
                            : item.category === "palm"
                            ? "rotate-border-zombie"
                            : item.category === "color"
                            ? "rotate-border-color"
                            : item.category === "direction"
                            ? "rotate-border-direction"
                            : item.category === "Vegetable"
                            ? "rotate-border-veg"
                            : "rotate-border"
                        }`}
                        style={
                          item.category === "direction"
                            ? {
                                "--dir-color1": getDirectionColors(item.word)[0],
                                "--dir-color2": getDirectionColors(item.word)[1]
                              }
                            : {}
                        }
                      >
                        <img
                          src={item.img}
                          alt={item.word}
                          className="image circle-image"
                        />
                      </div>
                    ) : (
                      <span className="emoji">{item.emoji}</span>
                    )}
                   
                    <span
  className={`word ${item.tag === "confusing" ? "confusing" : ""} ${getWordClass(item.word)}`}
  style={{ "--chars": item.word.length }}
  data-text={item.word}
>

  {item.word === "Sempiternal" ? (

  <span className="wave-text anim-sempiternal-wave">
    {"SEMPITERNAL".split("").map((letter, i) => (
      <span key={i}>{letter}</span>
    ))}
  </span>

  ) : item.word === "Skyrocket" ? (

  <span
    className="anim-skyrocket-spotlight"
    data-text="SKYROCKET"
  >
    SKYROCKET
  </span>

  ) : item.word === "Scrounge" ? (

  <span className="scrounge-wave">

    {"SCROUNGE".split("").map((letter, i) => (

      <span
        key={i}
        style={{
          animationDelay: `${i * 0.35}s`
        }}
      >
        {letter}
      </span>

    ))}

  </span>

  ): item.word === "Slapdash" ? (

  <div className="slapdash-stars">
    SLAPDASH
  </div>

  ) : item.word === "Scholar" ? (

  <div className="scholar-dotted">
    SCHOLAR
  </div>

   ) : item.word === "Scour" ? (

  <div className="scour-blink">
    SCOUR
  </div>

   ) : item.word === "Sobriquet" ? (

  <div className="sobriquet-twinkle">
    SOBRIQUET
  </div>


   ) : item.word === "Synecdoche" ? (

  <div className="synecdoche-commercial">

    <div className="text-top">
      <div>
        <span>SYNECDOCHE</span>
      </div>
    </div>

    <div className="text-bottom">
      <div>
        <span>SYNECDOCHE</span>
      </div>
    </div>

  </div>

 ) : item.word === "Smicker" ? (

  <div className="smicker-wink">
    {"SMICKER".split("").map((letter, i) => (
      <span
        key={i}
        style={{ animationDelay: `${i * 0.08}s` }}
      >
        {letter}
      </span>
    ))}
  </div>


 ) : item.word === "Slake" ? (

  <span
    className="yazo-suction"
    data-text="SLAKE"
  >
    SLAKE
  </span>


  ) : item.word === "Suborned" ? (

  <div className="suborned-neon">
    SUBORNED
  </div>

  ) : item.word === "Scrouge" ? (

  <div className="scrouge-double">
    SCROUGE
  </div>

  ) : item.word === "Scourer" ? (

  <div className="scourer-zigzag">
    SCOURER
  </div>

   ) : item.word === "Scurry" ? (

  <div className="scurry-flash">
    SCURRY
  </div>


    ) : item.word === "Sedentary" ? (

  <div className="sedentary-roll-wrap">

    <div className="sedentary-string">

      <h1 className="sedentary-word sed1">
        Sedentary
      </h1>

      <h1 className="sedentary-word sed2">
        Sedentary
      </h1>

      <h1 className="sedentary-word sed3">
        Sedentary
      </h1>

      <h1 className="sedentary-word sed4">
        Sedentary
      </h1>

    </div>

  </div>

  ) : item.word === "Serrated" ? (

  <div className="serrated-wrap">

    <h1 className="serrated-text">
      -- SERRATED --
    </h1>

  </div>


   ) : item.word === "Seraglio" ? (

  <article className="seraglio-gradient-wrap">
    <h1 className="seraglio-gradient-text">
      SERAGLIO
    </h1>
  </article>

  ) : item.word === "Skirmish" ? (

  <div className="skirmish-neon-wrap">

    <div className="skirmish-sign">

      <span className="skirmish-fast">
        S
      </span>

      kirm

      <span className="skirmish-flicker">
        i
      </span>

      sh

    </div>

  </div>

   ) :item.word === "Sumptuous" ? (

  <h1
    className="sumptuous-line"
    role="img"
    aria-label="Sumptuous"
  >
    {"SUMPTUOUS".split("").map((letter, i) => (
      <span
        key={i}
        className={`letter ${Math.random() > 0.5 ? "rev" : ""}`}
      >
        {letter}
      </span>
    ))}
  </h1>

  ) : item.word === "Svelte" ? (

  <div className="svelte-wave-text">

    {"SVELTE".split("").map((letter, i) => (

      <div
        key={i}
        className="svelte-column"
        style={{
          animationDelay: `${i * 0.15}s`
        }}
      >
        <div className="wave">
          <span>{letter}</span>
        </div>
      </div>

    ))}

  </div>

   ) : item.word === "Swamped" ? (

  <div className="swamped-wrapper">

    {"SWAMPED".split("").map((letter, i) => (

      <span
        key={i}
        style={{
          animationDelay: `${i * 0.12}s`
        }}
      >
        {letter}
      </span>

    ))}

  </div>

   ) : item.word === "Sweltering" ? (

  <div className="sweltering-bars">

    {"SWELTERING".split("").map((letter, i) => (

      <span
        key={i}
        className="heat-letter"
        style={{
          animationDelay: `${i * 0.08}s`
        }}
      >
        {letter}

        <span className="inner-bar left-bar"></span>
        <span className="inner-bar right-bar"></span>

      </span>

    ))}

  </div>

  ) : item.word === "Serene" ? (

  <div className="serene-glow">
    SERENE
  </div>

   ) : item.word === "Yazo" ? (

  <span
    className="yazo-suction"
    data-text="YAZO"
  >
    YAZO
  </span>


  ) : item.word === "Subjugate" ? (

  <h1
    className="subjugate-line"
    role="img"
    aria-label="Subjugate"
  >
    {"SUBJUGATE".split("").map((letter, i) => (
      <span
        key={i}
        className={`sub-letter ${i % 2 === 0 ? "rev" : ""}`}
      >
        {letter}
      </span>
    ))}
  </h1>

  ) : item.word === "Sardonic" ? (

  <span className="anim-sardonic-metal">
    SARDONIC
  </span>

  ) : item.word === "Salubrious" ? (

  <span
    className="anim-salubrious"
    data-text="SALUBRIOUS"
  >
    <span className="salubrious-text">
      SALUBRIOUS
    </span>
  </span>


  ) : item.word === "Sashay" ? (

  <span className="sashay-fire-wrapper">

    <span className="fire">S</span>
    <span className="burn">A</span>
    <span className="burn">S</span>
    <span className="fire">H</span>
    <span className="burn">A</span>
    <span className="burn">Y</span>

  </span>

  ) : item.word === "Scabrous" ? (

  <span className="scabrous-keys">

    {"SCABROUS".split("").map((letter, i) => (

      <span
        key={i}
        className={`scabrous-key scabrous-key-${i + 1}`}
      >
        {letter}
      </span>

    ))}

  </span>

  ) : item.word === "Spiffy" ? (

  <svg
    className="spiffy-svg"
    viewBox="0 0 700 180"
  >
    <defs>

      {/* dotted pattern */}
      <pattern
        id="spiffy-dots"
        x="0"
        y="0"
        width="40"
        height="40"
        patternUnits="userSpaceOnUse"
      >
        <circle
          cx="10"
          cy="10"
          r="2.5"
          fill="#ffd6ff"
        />
      </pattern>

    </defs>

    {/* background dots */}
    <rect
      width="100%"
      height="100%"
      fill="url(#spiffy-dots)"
      opacity="0.35"
    />

    {/* animated text */}
    <text
      x="50%"
      y="58%"
      textAnchor="middle"
      className="spiffy-text"
    >
      SPIFFY
    </text>

  </svg>


 ) : item.word === "Sadism" ? (

  <span className="sadism-bizzy">

    <span className="bizzy-letter sadism-s">S</span>
    <span className="bizzy-letter sadism-a">A</span>
    <span className="bizzy-letter sadism-d">D</span>
    <span className="bizzy-letter sadism-i">I</span>
    <span className="bizzy-letter sadism-s2">S</span>
    <span className="bizzy-letter sadism-m">M</span>

  </span>

) : item.word === "Succedaneum" ? (

  <svg
    className="succedaneum-svg"
    viewBox="0 0 900 90"
  >

    <symbol id="succedaneum-text">

      <text
        textAnchor="middle"
        x="50%"
        y="42%"
        dy=".35em"
      >
        SUCCEDANEUM
      </text>

    </symbol>

    <use
      href="#succedaneum-text"
      className="succedaneum-stroke"
    />

    <use
      href="#succedaneum-text"
      className="succedaneum-stroke"
    />

    <use
      href="#succedaneum-text"
      className="succedaneum-stroke"
    />

    <use
      href="#succedaneum-text"
      className="succedaneum-stroke"
    />

    <use
      href="#succedaneum-text"
      className="succedaneum-stroke"
    />

  </svg>
  

  ) : item.word === "Salami" ? (
    
  <span
  className={`word ${getWordClass(item.word)}`}
  data-text={item.word}
>
  {item.word}
</span>

) : item.word === "Sallow" ? (
    
  <span
  className={`word ${getWordClass(item.word)}`}
  data-text={item.word}
>
  {item.word}
</span>

  ) : item.word === "Steeplejack" ? (

  <div className="steeplejack-box">

    <div className="steeplejack-inner steeplejack-left">
      <span>STEEPLEJACK</span>
    </div>

    <div className="steeplejack-inner steeplejack-right">
      <span>STEEPLEJACK</span>
    </div>

  </div>

  ) : item.word === "Staid" ? (

  <span className="staid-flow">

    {Array.from({ length: 8 }).map((_, i) => (

      <span
        key={i}
        className="staid-layer"
        style={{
          animationDelay: `${i * 0.18}s`,
          opacity: 1 - i * 0.1,
          zIndex: 8 - i
        }}
      >
        STAID
      </span>

    ))}

  </span>


  ) : item.word === "Sabulous" ? (

  <span
    className="gold-text anim-sabulous-gold"
    data-text="SABULOUS"
  >

    <span
      className="gold-text-highlight"
      data-text="SABULOUS"
    >
      SABULOUS
    </span>

  </span>

) : item.word === "Sinecure" ? (

  <span className="anim-sinecure-shadow">
    SINECURE
  </span>

) : item.word === "Septentrional" ? (

  <div className="split-text-container anim-septentrional-split">

    <span className="text-part left">
      Septent
    </span>

    <span className="text-part right">
      rional
    </span>

  </div>

  ) : item.word === "Super-duper" ? (

  <main className="super-duper-main">

    <div className="super-duper-variable">

      <span className="super-duper-work">
        Super
      </span>

      <span className="super-duper-rest">
        -duper
      </span>

    </div>

    <div className="super-duper-static">
      ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦ ✦
    </div>

  </main>

) : item.word === "Serendipity" ? (

  <span className="anim-serendipity-nabla">
    {"SERENDIPITY".split("").map((letter, i) => (
      <span
        key={i}
        style={{ animationDelay: `${i * 0.08}s` }}
      >
        {letter}
      </span>
    ))}
  </span>

  ) : item.word === "Sockdolager" ? (

  <figure className="sockdolager-figure">

    <h1 className="sockdolager-front">
      SOCKDOLAGER
    </h1>

    <h1 className="sockdolager-back">
      SOCKDOLAGER
    </h1>

  </figure>


  ) : item.word === "Simulacrum" ? (

  <span className="anim-gooey-simulacrum">
    {"SIMULACRUM".split("").map((letter, i) => (
      <span
        key={i}
        style={{ animationDelay: `${i * 0.08}s` }}
      >
        {letter}
      </span>
    ))}
  </span>

  ) : item.word === "Superincumbent" ? (
     <div className="superincumbent-split">
  <div className="upper">Superincumbent</div>
  <div className="lower">Superincumbent</div>
</div>

  ) : item.word === "Skedaddle" ? (

  <div className="skedaddle-container">

    <span className="anim-skedaddle-ghost">
      {"SKEDADDLE".split("").map((letter, i) => (
        <span
          key={i}
          style={{ animationDelay: `${i * 0.06}s` }}
        >
          {letter}
        </span>
      ))}
    </span>

    <div className="ghost">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>

  </div>

  ) : item.word === "Skeptical" ? (

  <div className="skeptical-container">

    <div className="ghost-left">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>

    <span className="anim-skeptical-ghost">
      {"SKEPTICAL".split("").map((letter, i) => (
        <span
          key={i}
          style={{ animationDelay: `${i * 0.05}s` }}
        >
          {letter}
        </span>
      ))}
    </span>

  </div>

) : item.word === "Smorgasbord" ? (

  <span className="neon-text anim-smorgasbord-neon">
    {"SMORGASBORD".split("").map((letter, i) => (
      <span
        key={i}
        style={{ animationDelay: `${i * 0.06}s` }}
      >
        {letter}
      </span>
    ))}
  </span>

) : item.word === "-Axiom-" ? (

  <>
    <span className="pencil">✏️</span>
    <span className="-axiom--text">{item.word}</span>
  </>

) : (

  item.word

)}

  <span className="straw"></span>
</span>

                    <span> – </span>
                    <span className="meaning">{item.meaning}</span>

                    <span
                      className={`speaker ${speakingWord === item.word ? "speaking" : ""}`}
                      onClick={() => speakWord(item.word)}
                    >
                      🔊
                    </span>
                  </div>
                 
                  <div className="example">{item.example}</div>
                </div>
              ));
            })()}
          </>
        )}

        {showLetterContent && !vocabLists[selectedLetter] && (
          <p>No vocabulary found for letter {selectedLetter}.</p>
        )}
      </div>
    </div>
  );
}

export default App;
