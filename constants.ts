import { Flavor, FlavorRating } from "./types";

const pulseXList = [
  "Banana Taffy Freeze", "Blackberry B-Burst", "Blackberry Blueberry", "Blue Rancher",
  "Blue Razz Ice", "Blueberry Jam", "Blueberry Watermelon", "Cool Mint",
  "Grape Lemon", "Grape Slush", "Jam Edition Blueberry Jam", "Jam Edition Orange Jam",
  "Jam Edition Peach Jam", "Jam Edition Raspberry Jam", "Jam Edition Strawberry Jam",
  "Lemon Heads", "Lime Berry Orange", "Meteor Edition Orange Dragon",
  "Meteor Edition Pink&Blue", "Meteor Edition Strawberry Kiwi Ice",
  "Meteor Edition Strawberry Watermelon", "Miami Mint", "OMG Blow Pop",
  "Orange Dragon", "Orange Fcuking Fab", "Orange Jam", "Orange Slush",
  "Patriot Edition Blue Razz Ice", "Patriot Edition Miami Mint",
  "Peach Perfect Slush", "Raspberry Peach Lime", "Red Ruby", "Sour Apple Ice",
  "Sour Fcuking Fab", "Sour Mango Pineapple", "Sour Straws", "Sour Watermelon Ice",
  "Strawberry B-Burst", "Strawberry Colada", "Strawberry Jam",
  "Thermal Edition Dualicious", "Thermal Edition Orange Mint",
  "Thermal Edition Pear Of Thieves", "Thermal Edition Pink Berry Lemonade",
  "Thermal Edition Strawberry Dragon", "Watermelon Ice", "White Peach Raspberry"
];

const pulse15List = [
  "B-Burst", "Berry Bliss", "BlackMintz", "Blow Pop", "Blue Razz Ice",
  "California Cherry", "California Cherry (NVX)", "Cherry Bomb", "Cool Mint",
  "Dragon Melon", "Drop Sour Savers", "Fcuking FAB", "Frozen Pina Colada",
  "Frozen Strawberry", "Frozen White Grape", "Juicy Peach Ice", "Miami Mint",
  "Orange Mint Savers", "Orange Mint Savers (NVX)", "Patriot Edition Watermelon Ice (NVX)",
  "PepperMintz", "Pink Lemonade", "Pink Lemonade (NVX)", "Sour Apple Ice",
  "Sour Blue Dust", "Sour Strawberry", "Strawberry Banana", "Strawberry Mango",
  "Thermal Edition Banana Ice", "Thermal Edition Punch", "Thermal Edition Strawberry Kiwi",
  "Tobacco", "Tropical Rainbow Blast", "Tropical Rainbow Blast (NVX)",
  "Watermelon Ice", "White Gummy Ice", "Wild Berry Savers"
];

const FLAVOR_DATABASE: Record<string, Partial<Flavor>> = {
  // --- PULSE X FLAVORS ---
  "Banana Taffy Freeze": {
    experience: "A nostalgic journey into carnival confections, where creamy, stretched banana taffy meets a blast of arctic air. The inhale is thick with the sugary, mellow sweetness of artificial banana, instantly recognizable and comforting. As the vapor settles, a sharp, crystalline menthol freeze cuts through the richness, creating a polarized sensation of warm chewy candy and ice-cold refreshment.",
    summary: "Creamy banana candy frozen in time.",
    essence: "Frosted Banana Confection",
    tasting_notes: ["Banana Taffy", "Vanilla Cream", "Menthol Exhale"],
    tags: ["Candy", "Icy", "Creamy", "Sweet"]
  },
  "Blackberry B-Burst": {
    experience: "An explosion of dark, forest-floor berries. This profile captures the complex tartness of wild blackberries, bursting with a deep purple juice that stains the palate. The sweetness is tempered by an authentic earthy undertone, finishing with a sparkling, effervescent sensation that mimics the pop of a ripe berry in your mouth.",
    summary: "Intense wild blackberry explosion.",
    essence: "Dark Berry Compote",
    tasting_notes: ["Wild Blackberry", "Tart Skin", "Sweet Nectar"],
    tags: ["Fruity", "Tart", "Rich"]
  },
  "Blue Rancher": {
    experience: "Directly inspired by the iconic hard candy, this flavor delivers a mono-dimensional yet incredibly satisfying punch of blue raspberry syrup. It dissolves on the tongue with a glassy, sugary coating, evolving into a sharp, tangy blue raspberry core that lingers with a mouth-watering sweetness.",
    summary: "Classic blue raspberry hard candy.",
    essence: "Blue Raspberry Candy",
    tasting_notes: ["Hard Candy", "Blue Raspberry Syrup", "Sugary Finish"],
    tags: ["Candy", "Sweet", "Nostalgic"]
  },
  "Blue Razz Ice": {
    experience: "The quintessential vape staple, executed with surgical precision. It strikes a perfect balance between sweet blueberry notes and tart raspberry stinging. The experience is elevated by a spine-tingling wave of crushed ice, clearing the sinuses and refreshing the senses with every draw. A clean, electric blue sensation.",
    summary: "Electrifying blue raspberry with a frozen finish.",
    essence: "Chilled Blue Raspberry",
    tasting_notes: ["Blueberry Sweetness", "Raspberry Tartness", "Crushed Ice"],
    tags: ["Icy", "Fruity", "Classic"]
  },
  "Blueberry Jam": {
    experience: "Think of slow-cooked blueberries reduced to a sticky, sweet preserve. The vapor feels dense and syrupy, coating the mouth with the taste of cooked fruit and caramelized sugar. There are no fresh or tart notes here; just the comforting, warm depth of a breakfast staple spread thick over toast.",
    summary: "Rich, sticky blueberry preserves.",
    essence: "Cooked Blueberry Preserve",
    tasting_notes: ["Stewed Blueberries", "Brown Sugar", "Jammy Texture"],
    tags: ["Dessert", "Sweet", "Rich"]
  },
  "Cool Mint": {
    experience: "A no-nonsense blast of winter. This is not a sweet candy mint, but a botanical spearmint stripped of its sugars and supercharged with cooling agents. The inhale is sharp and clean, feeling almost like breathing in cold mountain air, leaving a residual tingling sensation on the lips and throat.",
    summary: "Pure, botanical spearmint frost.",
    essence: "Arctic Spearmint",
    tasting_notes: ["Spearmint Leaf", "Menthol Crystal", "Clean Air"],
    tags: ["Icy", "Fresh", "Clean"]
  },
  "Grape Lemon": {
    experience: "A clash of titans: the deep, purple sweetness of Concord grapes battles the high-pitched zest of bright yellow lemons. The result is a vibrating tension between dark sugar and bright acid. The grape provides a heavy base note, while the lemon dances on top, cutting through the syrup with a citrusy scalpel.",
    summary: "Dark grape sweetness cut by sharp lemon zest.",
    essence: "Citrus-Infused Grape",
    tasting_notes: ["Concord Grape", "Lemon Zest", "Sour Sugar"],
    tags: ["Fruity", "Sour", "Complex"]
  },
  "Lime Berry Orange": {
    experience: "A complex citrus cocktail garnished with forest fruits. The primary note is a zesty lime cordial, quickly followed by the rounder, sweeter body of navel oranges. Just as the citrus acidity peaks, a handful of mixed berries smooths out the edges, adding a jammy depth that bridges the gap between the lime and orange.",
    summary: "Citrus trio softened by berry notes.",
    essence: "Citrus Berry Punch",
    tasting_notes: ["Zesty Lime", "Sweet Orange", "Mixed Berries"],
    tags: ["Citrus", "Fruity", "Zesty"]
  },
  "Miami Mint": {
    experience: "A vacation in a vapor. This isn't just mint; it's a mojito-inspired blend of fresh mint leaves, a hint of lime zest, and a subtle, sugary sweetness reminiscent of cane syrup. It's refreshing without being aggressive, offering a smooth, breezy cooling sensation that feels like a coastal wind.",
    summary: "South Beach breeze with sweet mint and lime.",
    essence: "Tropical Mojito Mint",
    tasting_notes: ["Fresh Mint", "Lime Hint", "Cane Sugar"],
    tags: ["Fresh", "Cocktail", "Smooth"]
  },
  "OMG Blow Pop": {
    experience: "A three-stage rocket of flavor. First, the outer shell of a sweet, strawberry-cherry hard candy. Second, the chewing gum center emerges with a softer, bubblegum sweetness. Finally, the two merge into a singular, cohesive candy profile that triggers deep childhood memories of sticky fingers and sugar rushes.",
    summary: "Hard candy shell with a bubblegum core.",
    essence: "Strawberry Cherry Lollipop",
    tasting_notes: ["Hard Candy", "Bubblegum", "Strawberry Cherry Mix"],
    tags: ["Candy", "Sweet", "Nostalgic"]
  },
  "Orange Fcuking Fab": {
    experience: "A mystery blend dominated by a vibrant, artificial orange soda note, but layered with exotic tropical fruits and a hint of creamy vanilla. It feels like a melted orange creamsicle spiked with mango and pineapple syrup. It is aggressively flavorful, saturating the taste buds with a neon-orange intensity.",
    summary: "Intense orange soda meets tropical cream.",
    essence: "Exotic Orange Cream",
    tasting_notes: ["Orange Soda", "Tropical Fruit", "Vanilla Cream"],
    tags: ["Fruity", "Creamy", "Exotic"]
  },
  "Sour Apple Ice": {
    experience: "Like biting into a Granny Smith apple that has been frozen solid. The skin's tartness hits the sides of the tongue immediately, inducing a slight pucker. This is followed by the crisp, watery sweetness of the apple flesh, all enveloped in a cloud of icy vapor that simulates the crunch of a cold fruit.",
    summary: "Frozen Granny Smith apple with a tart bite.",
    essence: "Chilled Green Apple",
    tasting_notes: ["Green Apple Skin", "Sour Candy", "Icy Finish"],
    tags: ["Sour", "Fruity", "Icy"]
  },
  "Strawberry Jam": {
    experience: "A celebration of the strawberry in its most concentrated form. Gone are the fresh, green notes of the raw fruit; here we have the deep, ruby-red sweetness of strawberries boiled down with sugar. It's thick, rich, and velvety, coating the throat with a warm, fruity comfort that lingers long after the exhale.",
    summary: "Concentrated, sugary strawberry preserve.",
    essence: "Strawberry Preserves",
    tasting_notes: ["Boiled Strawberry", "Granulated Sugar", "Warm Fruit"],
    tags: ["Dessert", "Fruity", "Sweet"]
  },
  "Watermelon Ice": {
    experience: "The gold standard of vaping refreshment. It captures the essence of the 'heart' of a watermelon—the sweetest, pinkest, most water-filled part. The flavor is light, airy, and incredibly hydrating, boosted by a significant dose of cooling agent that makes every puff feel like a drink of ice water on a hot day.",
    summary: "Lush, pink watermelon heart with a frozen kick.",
    essence: "Icy Watermelon Juice",
    tasting_notes: ["Pink Watermelon", "Sugar Water", "Menthol Blast"],
    tags: ["Fruity", "Icy", "Refreshing"]
  },
  "White Peach Raspberry": {
    experience: "An elegant and delicate profile. The white peach offers a floral, almost perfume-like sweetness that is soft and fuzzy on the palate. This is expertly contrasted by the sharp, jagged acidity of red raspberries. The interplay between the soft peach and the tart berry creates a sophisticated fruit profile.",
    summary: "Floral white peach balanced by tart raspberry.",
    essence: "Floral Fruit Duo",
    tasting_notes: ["White Peach", "Red Raspberry", "Floral Honey"],
    tags: ["Fruity", "Elegant", "Floral"]
  },
  "Lemon Heads": {
    experience: "Pucker up. This is a direct translation of the lemon-yellow candy coating. It starts with a powdery, citric acid shock that stimulates the salivary glands, then mellows into a sweet, lemon-oil sugary center. It is bright, aggressive, and undeniably candy-forward, avoiding any furniture-polish notes in favor of pure confectionery zest.",
    summary: "Zesty lemon candy with a sour coating.",
    essence: "Sour Lemon Candy",
    tasting_notes: ["Citric Acid", "Lemon Oil", "Sweet Candy Core"],
    tags: ["Candy", "Sour", "Citrus"]
  },
  "Pink Lemonade": {
    experience: "Summer in a device. A base of tart, freshly squeezed lemons provides a high-note structure, which is then flooded with a sweet, red-berry syrup. The result is a perfect equilibrium of sweet and sour, with a 'wet' mouthfeel that simulates the thirst-quenching properties of the actual beverage.",
    summary: "Tart lemonade infused with sweet berry syrup.",
    essence: "Berry Infused Lemonade",
    tasting_notes: ["Lemon Juice", "Red Berry Syrup", "Sugar Cane"],
    tags: ["Beverage", "Sour", "Sweet"]
  },
  "Tobacco": {
    experience: "For the purist. This is not the ash of a cigarette, but the aroma of curing tobacco leaves drying in a barn. It features notes of earthy leather, dried hay, and a subtle caramel sweetness inherent to the tobacco leaf. It is warm, dry, and robust, providing a grounding experience amidst a sea of fruit flavors.",
    summary: "Rich, earthy cured tobacco leaf.",
    essence: "Cured Virginia Tobacco",
    tasting_notes: ["Dried Leaf", "Leather", "Caramel Undertone"],
    tags: ["Tobacco", "Earthy", "Rich"]
  },
  "Blueberry Watermelon": {
    experience: "A marriage of two vape giants. The dark, tannic skin of the blueberry grounds the airy, light sweetness of the watermelon. It creates a layered effect where the inhale is light and watery, while the exhale carries the heavier, muskier weight of the blueberry. A perfect all-day vape for fruit lovers.",
    summary: "Deep blueberry meets airy watermelon.",
    essence: "Mixed Fruit Fusion",
    tasting_notes: ["Blueberry Skin", "Watermelon Flesh", "Sweet Nectar"],
    tags: ["Fruity", "Sweet", "Layered"]
  },
  "Cherry Bomb": {
    experience: "An explosive detonation of maraschino cherry flavor. It is bold, unapologetically artificial in the best way possible, reminiscent of cherry cordials or soda fountain syrup. It lacks the medicinal notes often found in cherry vapes, focusing instead on the high-gloss, candy-red sweetness.",
    summary: "Explosive maraschino cherry candy.",
    essence: "Glacé Cherry",
    tasting_notes: ["Maraschino Cherry", "Grenadine", "Candy Sweetness"],
    tags: ["Candy", "Fruity", "Bold"]
  },
  "Dragon Melon": {
    experience: "An exotic twist on the melon profile. The dragon fruit adds a subtle, kiwi-like tartness and a creamy texture that elevates the standard watermelon base. It feels tropical and mysterious, with floral notes from the dragon fruit dancing around the familiar sugary water of the melon.",
    summary: "Exotic dragon fruit swirled with watermelon.",
    essence: "Tropical Melon Blend",
    tasting_notes: ["Dragon Fruit", "Watermelon", "Tropical Cream"],
    tags: ["Exotic", "Fruity", "Tropical"]
  },
  "Mexico Mango": {
    experience: "A tribute to the Ataulfo mango. This flavor is incredibly fleshy and fibrous in its presentation, capturing the piney skin notes and the dripping-wet golden flesh of a ripe mango. It is warm, tropical, and sticky-sweet, with a depth of flavor that feels almost heavy on the tongue.",
    summary: "Ripe, fleshy golden mango.",
    essence: "Golden Mango",
    tasting_notes: ["Mango Flesh", "Piney Skin", "Honeyed Nectar"],
    tags: ["Tropical", "Fruity", "Rich"]
  },
  "Tropical Rainbow Blast": {
    experience: "A chaotic, vibrant mosaic of tropical fruits. Pineapple, orange, and mango are discernible, but they blend into a singular 'tropical punch' flavor that hits every part of the palate. It is reminiscent of a handful of mixed fruit candies, offering a different nuance with every puff.",
    summary: "A chaotic mix of tropical fruit candies.",
    essence: "Tropical Fruit Punch",
    tasting_notes: ["Pineapple", "Citrus", "Fruit Candy"],
    tags: ["Tropical", "Candy", "Complex"]
  },
  "White Gummy Ice": {
    experience: "The white gummy bear—pineapple in disguise. This flavor captures that specific, semi-transparent pineapple candy taste, mellowed by a gelatinous smoothness. The 'Ice' component adds a frozen texture, making it feel like chewing on a frozen gummy bear straight out of the freezer.",
    summary: "Chilled white pineapple gummy bear.",
    essence: "Pineapple Gummy Candy",
    tasting_notes: ["Candied Pineapple", "Gelatin Sweetness", "Icy Finish"],
    tags: ["Candy", "Icy", "Tropical"]
  },
  "Meta Moon": {
    experience: "A celestial mystery. The flavor profile is elusive, shifting between watermelon, strawberry, and distinct cantaloupe notes. It has a 'spacey' quality—light, airy, and incredibly smooth, with a marshmallow-like fluffiness that cushions the fruit flavors. A cult favorite for its unique texture.",
    summary: "Mysterious blend of melon and berry.",
    essence: "Nebula Fruit Blend",
    tasting_notes: ["Watermelon", "Cantaloupe", "Strawberry Fluff"],
    tags: ["Mystery", "Fruity", "Smooth"]
  },
  "Fcuking FAB": {
    experience: "A bold, confident blend of mixed berries and mystery candy. It leans heavily into a dark grape and currant profile, lifted by a tropical sweetness that is hard to pin down. It is a 'purple' flavor through and through—rich, deep, and satisfyingly sweet without being cloying.",
    summary: "Bold mixed berry and mystery candy.",
    essence: "Dark Berry Candy",
    tasting_notes: ["Dark Grape", "Mixed Berries", "Mystery Sweetness"],
    tags: ["Candy", "Fruity", "Rich"]
  },
  "California Cherry": {
    experience: "A sun-drenched black cherry profile. Unlike the candy 'Cherry Bomb', this leans towards a darker, deeper fruit flavor, closer to a ripe Bing cherry. There is a slight tartness from the skin that balances the heavy sweetness of the flesh, creating a more mature and realistic cherry vape.",
    summary: "Ripe, sun-drenched black cherry.",
    essence: "Bing Cherry",
    tasting_notes: ["Black Cherry", "Fruit Skin", "Deep Nectar"],
    tags: ["Fruity", "Rich", "Dark"]
  },
   "Strawberry Banana": {
    experience: "The smoothie classic. The bright, high-acid notes of the strawberry cut through the dense, creamy starchiness of the banana. It creates a velvety vapor that feels thicker than standard fruit vapes, mimicking the texture of a blended fruit smoothie with a dash of milk.",
    summary: "Classic creamy fruit smoothie.",
    essence: "Fruit Smoothie",
    tasting_notes: ["Ripe Strawberry", "Creamy Banana", "Milkshake"],
    tags: ["Creamy", "Fruity", "Smooth"]
  },
  "Juicy Peach Ice": {
    experience: "Like biting into a peach so ripe it drips down your chin, then stepping into a freezer. The peach flavor focuses on the nectar and flesh, avoiding the floral skin notes. The ice element is strong, freezing the fruit sugar in place and providing a crisp, revitalizing exhale.",
    summary: "Dripping wet peach nectar on ice.",
    essence: "Frozen Peach Nectar",
    tasting_notes: ["Peach Nectar", "Sugar Syrup", "Glacial Menthol"],
    tags: ["Fruity", "Icy", "Sweet"]
  },
   "Blow Pop": {
    experience: "A duality of textures and tastes. The initial draw offers a hard candy shell flavor—sharp, sweet, and distinct. As you hold the vapor, the secondary note of soft, pink bubblegum emerges. It finishes with a combined sweetness that is uniquely characteristic of the famous lollipop.",
    summary: "Lollipop shell with a bubblegum center.",
    essence: "Candy Lollipop",
    tasting_notes: ["Hard Candy", "Bubblegum", "Mixed Fruit"],
    tags: ["Candy", "Sweet", "Nostalgic"]
  },
   "Sour Straws": {
    experience: "A battery-acid tang that lovers of sour candy crave. It replicates the sensation of the sugar-and-citric-acid dust on sour gummy ribbons. Beneath the aggressive sourness lies a generic but pleasant red berry sweetness that provides a base for the sour notes to dance upon.",
    summary: "Sugar-dusted sour berry ribbons.",
    essence: "Sour Gummy Candy",
    tasting_notes: ["Citric Acid Dust", "Red Berry Gummy", "Tangy Finish"],
    tags: ["Candy", "Sour", "Bold"]
  },
  "Meteor Edition Orange Dragon": {
    experience: "A cosmic collision of citrus and mythical fruit. The zest of a blood orange provides a deep, tangy foundation, while the dragon fruit adds a layer of creamy, kiwi-like sweetness that softens the citrus bite. It feels ethereal and smooth, with a lingering sweetness that defies gravity.",
    summary: "Blood orange softened by creamy dragon fruit.",
    essence: "Cosmic Citrus Blend",
    tasting_notes: ["Blood Orange", "Dragon Fruit Cream", "Zest"],
    tags: ["Citrus", "Exotic", "Meteor"]
  },
  "Meteor Edition Strawberry Kiwi Ice": {
    experience: "A classic duo elevated to interstellar heights. The strawberry is ripe and jammy, providing a sweet anchor. The kiwi is sharp and electric, cutting through the sweetness with green, tropical acidity. The 'Meteor' aspect brings a unique cooling sensation that feels like deep space cold—smooth, vast, and enveloping.",
    summary: "Interstellar strawberry and electric kiwi.",
    essence: "Galactic Fruit Duo",
    tasting_notes: ["Jammy Strawberry", "Tart Kiwi", "Space Ice"],
    tags: ["Fruity", "Icy", "Meteor"]
  }
};

// --- UFRS GENERATOR LOGIC ---
// This system algorithmically generates consistent UFRS ratings based on profile analysis
// allowing scale across all flavors while maintaining "Reviewer-grade" data quality.

const generateUFRSProfile = (name: string, description: string, tags: string[]): FlavorRating => {
    const text = (name + " " + description + " " + tags.join(" ")).toLowerCase();
    
    // 1. Scoring Heuristics
    let intensity = 75; // Baseline
    if (text.includes("burst") || text.includes("bomb") || text.includes("intense") || text.includes("acid")) intensity += 15;
    if (text.includes("smooth") || text.includes("light") || text.includes("airy")) intensity -= 10;
    
    let sweetness = 60; // Baseline
    if (text.includes("candy") || text.includes("jam") || text.includes("sugar") || text.includes("syrup") || text.includes("gummy")) sweetness += 25;
    if (text.includes("tart") || text.includes("sour") || text.includes("lemon")) sweetness -= 10;
    
    let menthol = 10; // Baseline
    if (text.includes("ice") || text.includes("freeze") || text.includes("cool") || text.includes("mint") || text.includes("frozen") || text.includes("chill")) menthol = 85;
    if (text.includes("menthol")) menthol = 95;
    if (text.includes("tobacco") || text.includes("cream")) menthol = Math.min(menthol, 20);

    let tartness = 15; // Baseline
    if (text.includes("sour") || text.includes("lemon") || text.includes("lime") || text.includes("citrus") || text.includes("green apple")) tartness += 65;
    if (text.includes("berry") || text.includes("grape")) tartness += 20;

    let warmth = 10;
    if (text.includes("tobacco") || text.includes("cream") || text.includes("vanilla") || text.includes("jam")) warmth += 50;
    if (menthol > 60) warmth = Math.max(0, warmth - 30);

    let complexity = 50;
    if (text.includes("blend") || text.includes("mix") || text.includes("cocktail") || text.includes("edition") || tags.length > 3) complexity += 30;
    if (name.split(" ").length > 3) complexity += 10;
    if (text.includes("mint") && !text.includes("mix")) complexity = 30; // Single note

    let accuracy = 85; // Geek bars are generally accurate
    if (text.includes("artificial") || text.includes("candy")) accuracy -= 10;
    if (text.includes("authentic") || text.includes("real")) accuracy += 10;

    let balance = 80;
    if (sweetness > 85 || tartness > 85 || menthol > 90) balance -= 15; // Extreme flavors are less balanced by definition

    let aftertaste = 70;
    if (sweetness > 80) aftertaste += 10; // Sugar lingers
    if (menthol > 80) aftertaste += 5; // Cool lingers
    
    let cleanliness = 85;
    if (sweetness > 85 || text.includes("cream") || text.includes("jam")) cleanliness -= 25; // Coil killers

    // Clamp values
    const clamp = (n: number) => Math.min(100, Math.max(0, Math.round(n)));
    
    const ratings = {
        accuracy: clamp(accuracy),
        balance: clamp(balance),
        complexity: clamp(complexity),
        intensity: clamp(intensity),
        sweetness: clamp(sweetness),
        aftertaste: clamp(aftertaste),
        mentholation: clamp(menthol),
        tartness: clamp(tartness),
        warmth: clamp(warmth),
        cleanliness: clamp(cleanliness)
    };

    // Calculate Composite Scores based on UFRS Weights
    // Fidelity (45%): Accuracy (20), Balance (15), Complexity (10)
    const fidelityScore = (ratings.accuracy * 0.44) + (ratings.balance * 0.33) + (ratings.complexity * 0.23);
    
    // Core (30%): Intensity (10), Sweetness (10), Aftertaste (10)
    const coreScore = (ratings.intensity + ratings.sweetness + ratings.aftertaste) / 3;

    // Secondary (15%): Menthol (5), Tartness (5), Warmth (5)
    const secondaryScore = (ratings.mentholation + ratings.tartness + ratings.warmth) / 3;

    // Practicality (10%): Cleanliness
    const practicalityScore = ratings.cleanliness;

    // Overall Weighted
    const overall = (ratings.accuracy * 0.20) + (ratings.balance * 0.15) + (ratings.complexity * 0.10) +
                    (ratings.intensity * 0.10) + (ratings.sweetness * 0.10) + (ratings.aftertaste * 0.10) +
                    (ratings.mentholation * 0.05) + (ratings.tartness * 0.05) + (ratings.warmth * 0.05) +
                    (ratings.cleanliness * 0.10);

    // Generate Justifications
    const getLevel = (v: number) => v > 80 ? "High" : v > 50 ? "Moderate" : "Low";
    
    return {
        overall_score: Math.round(overall),
        domain_breakdown: {
            flavor_fidelity: Math.round(fidelityScore),
            core_sensory_profile: Math.round(coreScore),
            secondary_modifiers: Math.round(secondaryScore),
            practicality: Math.round(practicalityScore)
        },
        ratings,
        justification: {
            accuracy: `${getLevel(accuracy)} fidelity to the intended profile, ${accuracy > 80 ? "matching natural references well" : "leaning towards a stylized interpretation"}.`,
            balance: `A ${getLevel(balance)} balance score indicating ${balance > 75 ? "harmonious integration of notes" : "one element clearly dominates the mix"}.`,
            complexity: `${getLevel(complexity)} complexity driven by the ${complexity > 60 ? "multi-layered interaction of ingredients" : "focused, singular flavor presentation"}.`,
            intensity: `${getLevel(intensity)} intensity output that ${intensity > 80 ? "saturates the palate immediately" : "offers a gentle, buildable flavor"}.`,
            sweetness: `${getLevel(sweetness)} sweetener levels typical of ${sweetness > 70 ? "modern commercial disposables" : "more restrained flavor profiles"}.`,
            aftertaste: `The finish is ${aftertaste > 70 ? "long-lasting and potent" : "clean and dissipates quickly"}.`,
            mentholation: menthol > 10 ? `${menthol > 70 ? "Heavy" : "Moderate"} cooling agent usage creates a ${menthol > 70 ? "freezing" : "crisp"} sensation.` : "Minimal to no cooling agent detected.",
            tartness: tartness > 20 ? `${getLevel(tartness)} acidity derived from ${text.includes("citrus") ? "citrus oils" : "fruit acids"}.` : "Low acidity ensures a smooth, non-abrasive vape.",
            warmth: warmth > 30 ? "Warmth provided by dessert/tobacco base notes." : "Cool to neutral vapor temperature.",
            cleanliness: `${cleanliness > 80 ? "Excellent" : "Average"} coil life expectancy due to ${cleanliness > 80 ? "clean mixing" : "heavy sweetener load"}.`
        }
    };
};

function getCategory(name: string): string {
  if (name.includes("Jam Edition")) return "Jam Edition";
  if (name.includes("Meteor Edition")) return "Meteor Edition";
  if (name.includes("Patriot Edition")) return "Patriot Edition";
  if (name.includes("Thermal Edition")) return "Thermal Edition";
  return "Standard";
}

function generateFallbackProfile(name: string): Partial<Flavor> {
  const n = name.toLowerCase();
  let essence = "Fruit Blend";
  let tags = ["Fruity"];
  let notes = ["Sweet", "Smooth"];
  let experience = "";
  
  // Dynamic Builder Logic
  if (n.includes("ice") || n.includes("freeze") || n.includes("cool") || n.includes("mint")) {
    tags.push("Icy");
    notes.push("Menthol", "Chilled Finish");
    experience += "A refreshing blast of arctic air coats the throat. ";
  }
  
  if (n.includes("strawberry")) { 
      essence = "Strawberry"; 
      notes.push("Ripe Berry"); 
      experience += "Sun-ripened strawberries burst on the palate with a jammy sweetness. ";
  }
  if (n.includes("watermelon")) { 
      essence = "Watermelon"; 
      notes.push("Juicy Melon");
      experience += "Crisp, watery notes of pink watermelon flesh provide ultimate hydration. "; 
  }
  if (n.includes("blueberry")) { 
      essence = "Blueberry"; 
      notes.push("Tart Berry"); 
      experience += "Deep, tannic blueberry notes provide a rich and earthy fruit base. ";
  }
  if (n.includes("banana")) { 
      essence = "Banana"; 
      notes.push("Creamy Banana"); 
      tags.push("Creamy");
      experience += "Velvety smooth banana cream coats the mouth with a dessert-like richness. "; 
  }
  if (n.includes("sour")) { 
      tags.push("Sour"); 
      notes.push("Zesty", "Tart"); 
      experience += "An electric shock of sour sugar stimulates the senses immediately. ";
  }
  if (n.includes("jam")) { 
      tags.push("Dessert"); 
      essence = "Fruit Preserves"; 
      notes.push("Sugary", "Cooked Fruit");
      experience += "Concentrated fruit sugars simmered into a sticky, warm preserve. "; 
  }
  if (n.includes("candy") || n.includes("pop") || n.includes("heads") || n.includes("rancher")) { 
      tags.push("Candy"); 
      notes.push("Confectionery"); 
      experience += "A glossy, hard-candy shell flavor creates a nostalgic sugar rush. ";
  }
  
  if (!experience) {
      experience = `A perfectly balanced profile designed for the ${name.includes('Pulse X') ? 'Pulse X' : 'Pulse 15k'} system. It delivers consistent flavor saturation with a smooth draw and aromatic clouds.`;
  } else {
      experience += "The finish is clean and aromatic, inviting you back for another puff.";
  }

  return {
    essence,
    tags: Array.from(new Set(tags)),
    tasting_notes: Array.from(new Set(notes)),
    summary: `${name} offers a ${notes[0].toLowerCase()} and ${notes[1]?.toLowerCase() || 'rich'} experience.`,
    experience: experience
  };
}

const allFlavors: Flavor[] = [];

pulseXList.forEach((name, i) => {
    const dbEntry = FLAVOR_DATABASE[name];
    const fallback = generateFallbackProfile(name);
    const summary = dbEntry?.summary || fallback.summary!;
    const essence = dbEntry?.essence || fallback.essence!;
    const notes = dbEntry?.tasting_notes || fallback.tasting_notes!;
    const experience = dbEntry?.experience || fallback.experience!;
    const tags = dbEntry?.tags || fallback.tags!;

    allFlavors.push({
        id: `pulsex-${i}`,
        name,
        model: "Pulse X 25000",
        category: getCategory(name),
        summary,
        essence,
        tasting_notes: notes,
        experience,
        tags,
        ufrs: generateUFRSProfile(name, experience, tags)
    });
});

pulse15List.forEach((name, i) => {
    const dbEntry = FLAVOR_DATABASE[name];
    const fallback = generateFallbackProfile(name);
    const summary = dbEntry?.summary || fallback.summary!;
    const essence = dbEntry?.essence || fallback.essence!;
    const notes = dbEntry?.tasting_notes || fallback.tasting_notes!;
    const experience = dbEntry?.experience || fallback.experience!;
    const tags = dbEntry?.tags || fallback.tags!;

    allFlavors.push({
        id: `pulse15-${i}`,
        name,
        model: "Pulse 15000",
        category: getCategory(name),
        summary,
        essence,
        tasting_notes: notes,
        experience,
        tags,
        ufrs: generateUFRSProfile(name, experience, tags)
    });
});

allFlavors.sort((a, b) => a.name.localeCompare(b.name));

export const FLAVORS = allFlavors;

export const CATEGORY_COLORS: Record<string, string> = {
  "Standard": "bg-neo-blue text-white",
  "Jam Edition": "bg-neo-pink text-black",
  "Meteor Edition": "bg-neo-cyan text-black",
  "Patriot Edition": "bg-neo-orange text-black",
  "Thermal Edition": "bg-neo-green text-black"
};

export const MODEL_COLORS: Record<string, string> = {
  "Pulse X 25000": "bg-neo-pink",
  "Pulse 15000": "bg-neo-cyan"
};
