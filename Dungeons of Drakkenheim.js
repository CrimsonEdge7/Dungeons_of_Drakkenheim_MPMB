
/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/
/*	-INFORMATION-
	Subject:	Compendium
	Effect:		This script adds a complete Compendium
				This is taken from Dungeons of Drakkenheim as it appears on D&D Beyond
				
	Code by:		CrimsonEdge7
	Completed Date:	2025-04-19 (sheet v13.2.3)
	Last Updated:	2025-04-19
*/
var iFileName = "Dungeons of Drakkenheim.js";

RequiredSheetVersion("13");

SourceList["DoD"] = {
	name : "Dungeons of Drakkenheim (Beyond)",
	abbreviation : "DoD",
	abbreviationSpellsheet: "DD",
	group : "Dungeon Dudes",
	date: "2023/12/21"
};

//Mutations
FeatsList["mutations"] = {
	name : "Mutations",
	source : [["DoD", 223]],
	regExpSearch : /mutations/i,
	description : "A mutation may be gained when your Contamination level increases.",
	descriptionFull : "Each time a character gains a contamination level, it rolls 1d6. If the result is equal to or less than the character’s current contamination level the creature gains a mutation.",
	choices : ["Rasping", "Wasting", "Rotting", "Molting", "Shedding", "Lambent Glow", "Ocular Tumors", "Spiked Growths", "Aquatic Adaptation", "Amorphous Form", "Chitinous Skin", "Cyclopean Vision", "Spatial Displacement", "Tentacled Limb", "Spider Climb", "Whispering Voices", "Belly Maw", "Eyeless Sight", "Arcane Blood (Spell Slot)", "Arcane Blood (HP)", "Arcane Blood (2x HP)"],
	"rasping" : {
		name: "Rasping [Mutation]",
		description : "I can only speak in a halting gurgle. If I have 4+ Contamination, I can't speak.",
		descriptionFull : "My vocal cords warp, and I may only speak in a halting gurgle. If I have 4 or more contamination levels, my tongue rots and falls out, and I can no longer speak.",	
	},
	"wasting" : {
		name: "Wasting [Mutation]",
		description : "2d6 fingernails/teeth/toenails fall out for each Contamination level I have.",
		descriptionFull : "My fingernails, teeth, and toenails start falling out. 2d6 fall out for each contamination level I have gained.",	
	},
	"rotting" : {
		name: "Rotting [Mutation]",
		description : "My lips, nose, and ears blacken and wither. If I have 4+ Contamination, they fall off but I can still speak/hear.",
		descriptionFull : "My lips, nose, and ears blacken and wither. If I reach 4 or more contamination levels, they rot and fall off. I can still speak and hear, however.",	
	},
	"molting" : {
		name: "Molting [Mutation]",
		description : "Blisters, welts, and lesions appear and burst/peel off. If I have 4+ Contamination, my skin sloughs off.",
		descriptionFull : "Painful blisters, welts, and multicoloured lesions appear all over my skin, which burst and peel off painfully, exposing the raw sinew underneath. Once I reach 4 contamination levels, my skin entirely sloughs off.",	
	},
	"shedding" : {
		name: "Shedding [Mutation]",
		description : "Patches of my hair fall out when I gain Contamination. If I have 4+ Contamination, all of my hair falls out.",
		descriptionFull : "Each time I gain a contamination level, some of my hair falls out in patches. Once I reach 4 or more contamination levels, all hair on my body completely falls out.",	
	},
	"lambent glow" : {
		name: "Lambent Glow [Mutation]",
		description : "I emit 10 feet of Dim Light. If I have 4+ Contamination, I emit 30 feet of Bright Light instead.",
		descriptionFull : "I emit a dim octarine glow to a range of 10 feet. If I have 4 or more contamination levels, I instead emit bright light to a range of 30 feet.",	
	},
	"ocular tumors" : {
		name: "Ocular Tumors [Mutation]",
		description : "I gain an extra eyeball somewhere on my body for each of my Contamination levels. If I have 4+ Contamination, I can see in all directions.",
		descriptionFull : "An eyeball opens somewhere on my body for each contamination level you have gained. If you have 4 or more contamination levels, you can see in all directions.",	
	},
	"spiked growths" : {
		name: "Spiked Growths [Mutation]",
		description : "At the start of each of my turns, I deal 1d10 piercing damage to any creature I am grappling.",
		descriptionFull : "At the start of each of my turns, I deal 5 (1d10) piercing damage to any creature I am grappling.",	
	},
	"aquatic adaptation" : {
		name: "Aquatic Adaptation [Mutation]",
		description : "I sprout fins & gills, gain a Swim Speed equal to my Speed, and can breathe underwater. If I have 4+ Contamination, I can only breathe underwater but can hold my breath for 1 hour.",
		descriptionFull : "I sprout fish-like fins and gills. I gain a swimming speed equal to my land speed and can breathe underwater. If I have 4 or more contamination levels, I can only breathe underwater; but can hold my breath outside water for up to 1 hour.",	
	},
	"amorphous form" : {
		name: "Amorphous Form [Mutation]",
		description : "My bones & organs are gelatinous. I can move through a space as narrow as 6 inches wide without squeezing.",
		descriptionFull : "My bones and organs become gelatinous. I can move through a space as narrow as 6 inches wide without squeezing.",	
	},
	"chitinous skin" : {
		name: "Chitinous Skin [Mutation]",
		description : "I grow shell-like growths, giving me +1 AC. If I have 4+ Contamination, this bonus increases to +2.",
		descriptionFull : "Shell-like growths appear all over my body, giving me a +1 bonus to AC. If I have four or more contamination levels, this bonus increases to +2.",	
	},
	"cyclopean vision" : {
		name: "Cyclopean Vision [Mutation]",
		description : "My eyes merge into a single central eye which can emit a beam as a ranged spell attack using my Int modifier. If it hits, it deals 2d6 Radiant damage.",
		descriptionFull : "My eyes merge into a single central eye which can emit an energy beam as a ranged spell attack using my Intelligence modifier for the attack roll. If it hits, it deals 2d6 radiant damage.",	
	},
	"spatial displacement" : {
		name: "Spatial Displacement [Mutation]",
		limfeaname : "Spatial Displacement",
		usages : 1, //replace with Contamination level manually?
		recovery : "long rest",
		spellFirstColTitle : "MU",
		spellcastingBonus : [{
			name : "Spatial Displacement",
			spells : "misty step",
			selection : "misty step",
			times : 1,
			firstCol : 1,
		}],
		description : "I can cast misty step once for each Contamination level I have. I regain these uses when I finish a long rest.",
		descriptionFull : "I can cast misty step once for each contamination level I have gained. I regain these uses when I finish a long rest.",	
	},
	"tentacled limb" : {
		name: "Tentacled Limb [Mutation]",
		description : "One of my arms becomes a tentacle. When I make a melee attack on my turn, my reach increases by 5 feet.",
		descriptionFull : "One of my arms becomes a fleshy tentacle. When I make a melee attack on my turn, increase my reach by 5 feet.",	
	},
	"spider climb" : {
		name: "Spider Climb [Mutation]",
		description : "I gain a Climb Speed equal to my Speed. I can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",
		descriptionFull : "I gain a climb speed equal to my walking speed. I can climb difficult surfaces, including upside down on ceilings, without needing to make an ability check.",	
	},
	"whispering voices" : {
		name: "Whispering Voices [Mutation]",
		description : "I gain telepathy to a range of 10 feet, but other people hear it as their own voice. If I have 4+ Contamination, the range extends to 60 feet.",
		descriptionFull : "I gain telepathy to a range of 10 feet, but other people hear it as their own voice. If I have 4 or more contamination levels, the range extends to 60 feet.",	
	},
	"belly maw" : {
		name: "Belly Maw [Mutation]",
		description : "A mouth appears on my stomach, which I can use to make unarmed strikes. If I hit, I deal 1d6 + Str mod Piercing damage.",
		descriptionFull : "A toothy mouth appears on my stomach, which I can use to make unarmed strikes. If I hit with it, I deal piercing damage equal to 1d6 + my Strength modifier.",	
	},
	"eyeless sight" : {
		name: "Eyeless Sight [Mutation]",
		description : "My eyes become milky, and I gain blindsight to 10 feet. If I have 4+ Contamination, my eyes rot out. My blindsight increases to 30 feet, but I am blind beyond this radius.",
		descriptionFull : "My eyes become milky orbs, and I gain blindsight to a range of 10 feet. If I have 4 or more contamination levels, my eyes rot out, and dim octarine light burns in the sockets. My blindsight increases to 30 feet, but I am blind beyond this radius.",	
	},
	"arcane blood (spell slot)" : {
		name: "Arcane Blood (Spell Slot) [Mutation]",
		description : "I gain an additional spell slot of the highest level I can cast (to a maximum of 5th level). If I don’t have spell slots, my max HP increases by my level. Double with 4+ Contamination.",
		descriptionFull : "I gain an additional spell slot of the highest level I can cast (to a maximum of 5th level). If I don’t have spell slots, my hit point maximum increases by an amount equal to my level. Double with 4 or more contamination levels.",	
	},
	"arcane blood (hp)" : {
		name: "Arcane Blood (HP) [Mutation]",
		calcChanges: {
			hp: function (totalHD) {
				return [totalHD, '\n + ' + totalHD + ' from Arcane Blood (' + (totalHD) + ')', true];
			}
		},
		description : "I gain an additional spell slot of the highest level I can cast (to a maximum of 5th level). If I don’t have spell slots, my max HP increases by my level. Double with 4+ Contamination.",
		descriptionFull : "I gain an additional spell slot of the highest level I can cast (to a maximum of 5th level). If I don’t have spell slots, my hit point maximum increases by an amount equal to my level. Double with 4 or more contamination levels.",	
	},
	"arcane blood (2x hp)" : {
		name: "Arcane Blood (2x HP) [Mutation]",
		calcChanges: {
			hp: function (totalHD) {
				return [totalHD * 2, '\n + ' + totalHD + ' \xD7 2 from Arcane Blood (' + (totalHD * 2) + ')', true];
			}
		},
		description : "I gain an additional spell slot of the highest level I can cast (to a maximum of 5th level). If I don’t have spell slots, my max HP increases by my level. Double with 4+ Contamination.",
		descriptionFull : "I gain an additional spell slot of the highest level I can cast (to a maximum of 5th level). If I don’t have spell slots, my hit point maximum increases by an amount equal to my level. Double with 4 or more contamination levels.",	
	},
};

//Gear
GearList["delerium chip"] = {
  infoname: "Delerium Chip [10 gp]",
  name: "Delerium Chip",
  amount: "",
  weight: 0.25,
};
GearList["delerium fragment"] = {
  infoname: "Delerium Fragment [100 gp]",
  name: "Delerium Fragment",
  amount: "",
  weight: 0.5,
};
GearList["delerium shard"] = {
  infoname: "Delerium Shard [500 gp]",
  name: "Delerium Shard",
  amount: "",
  weight: 1,
};
GearList["delerium crystal"] = {
  infoname: "Delerium Crystal [1000 gp]",
  name: "Delerium Crystal",
  amount: "",
  weight: 2,
};
GearList["delerium geode"] = {
  infoname: "Delerium Geode [5000 gp]",
  name: "Delerium Geode",
  amount: "",
  weight: 20,
};
GearList["delerium massive cluster"] = {
  infoname: "Delerium Massive Cluster [priceless]",
  name: "Delerium Massive Cluster",
  amount: "",
  weight: 8000,
};

//Spells
SpellsList["conjure the deep haze"] = {
    name: "Conjure the Deep Haze",
    source : ["DoD", 226],
    classes: ["druid", "sorcerer", "warlock", "wizard"],
    level: 5,
    school: "Conj",
    time: "1 a",
    range: "120 ft",
    components: "V,S,M\u2020",
	compMaterial : "A delerium fragment worth 100 gp, which the spell consumes",
    duration: "Conc, 10 min",
	save : "Con",
    description: "Contamination;20ft rad sphere hvy obsc;enter/start:sav or 8d6 Necro+Contam;sav 1/2 (100gp cons.)",
    descriptionFull: "When you cast this spell, you gain one level of contamination.\n"
		+"You create a 20-foot-radius sphere of the Deep Haze on a point you choose within range. The fog spreads around corners. It lasts for the duration or until strong wind disperses the fog, ending the spell. Its area is heavily obscured.\n"
		+"When a creature enters the spell’s area for the first time on a turn or starts its turn there, that creature must succeed on a Constitution saving throw. On a failed saving throw, it suffers (8d6) necrotic damage and gains one level of contamination. On a successful save, the creature takes half as much damage and does not gain any contamination levels. Creatures are affected even if they hold their breath or don’t need to breathe."
};
SpellsList["contaminated power"] = {
    name: "Contaminated Power",
    source : ["DoD", 226],
    classes: ["sorcerer", "warlock", "wizard"],
    level: 8,
    school: "Trans",
    time: "1 bns",
    range: "Self",
    components: "V,S,M\u2020",
	compMaterial : "A delerium shard worth 500 gp, which the spell consumes",
    duration: "1 min",
    description: "Contamination;chg spell dmg, extra Necro spells, +Contamination: target dis on sav;see B (500gp cons.)",
    descriptionFull: "When you cast this spell, you gain one level of contamination. You draw unrestrained arcane magic from the delerium shard you hold in your hand. Until the spell ends, you gain the following benefits:\n"
		+"When you cast a spell that deals acid, fire, cold, lightning, or poison damage, you can change the damage type to force, necrotic, psychic, or radiant damage.\n"
		+"Once per turn when you deal damage with a spell, you can deal an extra 1d12 necrotic damage for each contamination level you have gained to one target of that spell.\n"
		+"When you cast a spell that forces a creature to make a saving throw to resist its effects, you can choose to gain one level of contamination. If you do, one target of the spell has disadvantage on its first saving throw made against that spell.\n"
		+"This spell can’t be dispelled by dispel magic.\n"
		+"Discovering the Spell: A character who can cast 8th level spells, knows every other contaminated spell, and has cast each of them at least once can research contaminated power."
};
SpellsList["contamination immunity"] = {
    name: "Contamination Immunity",
    source : ["DoD", 226],
    classes: ["bard", "cleric", "druid", "sorcerer", "warlock", "wizard"],
    level: 7,
    school: "Abjur",
    time: "1 min",
    range: "Touch",
    components: "V,S,M\u2020",
	compMaterial : "An eldritch lily mixed into 250 gp worth of specially-prepared purified fluids, which the spell consumes",
    duration: "24 hrs",
    description: "Willing crea imm Necrotic and no Contamination;rest in Haze;cast contam. spell: ends (250gp cons.)",
    descriptionFull: "Until the spell ends, one willing creature you touch is immune to necrotic damage and cannot gain contamination levels. The affected creature may rest normally within the Haze.\n"
		+"This spell ends immediately if the creature casts a contaminated spell.\n"
		+"Researching the Spell: A character who can cast 7th level spells, knows the neutralizing field spell, and who has visited the Delerium Heart can research contamination immunity."
};
SpellsList["delerium blast"] = {
    name: "Delerium Blast*",
    source : ["DoD", 227],
    classes: ["bard", "sorcerer", "warlock", "wizard"],
    level: 4,
    school: "Evoc",
    time: "1 a",
    range: "150 ft",
    components: "V,S,M\u2020",
	compMaterial : "A delerium fragment worth 100 gp, which the spell consumes",
    duration: "Instantaneous",
    description: "Contamination;20ft rad sphere sav or 10d6 Psy & Incap until end next turn, sav:1/2; +2d6/SL (100gp cons.)",
    descriptionFull: "When you cast this spell, you gain one level of contamination.\n"
		+"You ignite arcane energies stored inside a delerium fragment held in your hand, and hurl it towards a space you can see within range. It explodes in a 20-foot-radius sphere of erratic psychic energy that overwhelms the minds and senses of those within. Each creature in the sphere must succeed on an Intelligence saving throw. On a failed save, a creature takes (10d6) psychic damage and becomes incapacitated until the end of their next turn. On a successful save, a target takes half as much damage and suffers none of the spell’s other effects."
		+AtHigherLevels+"When you cast this spell using a spell slot of 5th level or higher, the damage increases by 2d6 for each slot level above 4th."
};
SpellsList["delerium orb"] = {
    name: "Delerium Orb*",
    source : ["DoD", 227],
    classes: ["sorcerer", "warlock", "wizard"],
    level: 1,
    school: "Evoc",
    time: "1 a",
    range: "120 ft",
    components: "V,S,M\u2020",
	compMaterial : "A delerium fragment worth 100 gp, which the spell consumes",
    duration: "Instantaneous",
    description: "Contamination;1 crea sav of your choice or 6d6 Cold/Fire/Light/Necro/Rad, sav:1/2; +2d6/SL (100gp cons.)",
    descriptionFull: "When you cast this spell, you gain one level of contamination. You draw chaotic magical power from the delerium fragment held in your hand, and blast a creature you can see within range with paradoxical power. Choose one ability score, then choose cold, fire, lightning, necrotic, psychic, or radiant damage. The target must succeed on a saving throw using the chosen ability score; it takes 6d6 damage of the chosen type on a failed saving throw, or half as much on a successful one."
		+AtHigherLevels+"When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 2d6 for each slot level above 1st."
};
SpellsList["forced evolution"] = {
    name: "Forced Evolution",
    source : ["DoD", 227],
    classes: ["sorcerer", "warlock", "wizard"],
    level: 4,
    school: "Trans",
    time: "8 hrs",
    range: "Touch",
    components: "V,S,M\u2020",
	compMaterial : "An alchemical cocktail made from rare components and delerium dust worth 250 gold, which the target consumes as part of the spell",
    duration: "Instantaneous",
    description: "Replace target's contamination mutation with another (250gp cons.)",
    descriptionFull: "By means of this spell, you transform a mutation gained from contamination. One of the target’s existing mutations is removed and is replaced by a different one. This mutation may be chosen by the Game Master or determined randomly (see Appendix C of Dungeons of Drakkenheim)."
};
SpellsList["neutralizing field"] = {
    name: "Neutralizing Field",
    source : ["DoD", 228],
    classes: ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    level: 5,
    school: "Abjur",
    time: "1 a",
    range: "S:10-ft rad",
    components: "V,S,M\u0192",
	compMaterial : "A delerium crystal or holy relic worth 1,000 gp",
    duration: "Conc, 1 hr",
    description: "10-ft sphere: prevent contamination & immune to Necro; no Contaminated spells in area (1000gp)",
    descriptionFull: "You negate contaminated magical energies in a 10-foot radius sphere. Until the spell ends, the sphere moves with you, centred on you. Creatures in the sphere (including you) can’t gain contamination levels and have immunity to necrotic damage. Contaminated spells can’t be cast by creatures in the area.\n"
		+"Discovering the Spell: A character who can cast 5th level spells, knows the purge contamination spell, and has created at least 1 dose of aqua expurgo may research neutralizing field."
};
SpellsList["octarine spray"] = {
    name: "Octarine Spray",
    source : ["DoD", 228],
    classes: ["bard", "sorcerer", "warlock", "wizard"],
    level: 7,
    school: "Evoc",
    time: "1 a",
    range: "S:60-ft cone",
    components: "V,S,M\u2020",
	compMaterial : "A delerium fragment worth 100 gp, which the spell consumes",
    duration: "Instantaneous",
	save : "Con",
    description: "Contamination; Each crea in 60-foot cone sav or random effect; see B. (100gp cons.)",
    descriptionFull: "When you cast this spell, you gain one level of contamination. Octarine rays of light flash from your hand. Each ray is a different colour and has a different power and purpose, see the table below. Each creature in a 60-foot cone must succeed on a Constitution saving throw. For each target, roll a d8 to determine which colour ray affects it.\n"
		+"d8	Octarine Spray Effect\n"
		+"1	The target takes 20d6 psychic damage on a failed save, or half as much damage on a success.\n"
		+"2	The target takes 20d6 necrotic damage on a failed save, or half as much damage on a success.\n"
		+"3	The target takes 20d6 force damage on a failed save, or half as much damage on a success.\n"
		+"4	The target takes 20d6 radiant damage on a failed save, or half as much damage on a success.\n"
		+"5	The target takes 20d6 thunder damage on a failed save, or half as much damage on a success.\n"
		+"6	At the start of each of its turns, the affected target uses all its movement to move directly towards the closest creature it can see. Then, the affected target uses its action to make a melee attack against a randomly determined creature within its reach. If there is no creature within its reach, the affected target does nothing this turn. At the end of each of its turns, the affected target can make a Wisdom saving throw. If it succeeds, this effect ends for that target.\n"
		+"7	At the start of each of its turns, the affected target gains one level of contamination. At the end of each of its turns, an affected target can make a Constitution saving throw. If it succeeds, this effect ends for that target, but any contamination levels gained remain.\n"
		+"8	Special. The target is struck by an additional ray. Roll again twice. There’s no limit to how many additional rays can strike a single creature in this manner."
};
SpellsList["purge contamination"] = {
    name: "Purge Contamination",
    source : ["DoD", 228],
    classes: ["bard", "cleric", "druid", "paladin", "ranger", "sorcerer", "warlock", "wizard"],
    level: 3,
    school: "Abjur",
    time: "1 hr",
    range: "Touch",
    components: "V,S,M\u2020",
	compMaterial : "100 gp of alchemical fluids or holy water, which the spell consumes",
    duration: "Instantaneous",
    description: "Remove contamination & mutations from target, Exhaustion = to contamination removed (100gp cons.)",
    descriptionFull: "You apply alchemical fluids or holy water to a contaminated humanoid creature while reciting an exacting magical chant that expels eldritch contaminants from the target’s body. When you finish casting the spell, all contamination levels and mutations are removed from the creature. It then gains one level of exhaustion for each contamination level removed with this spell."
};
SpellsList["ray of contamination"] = {
    name: "Ray of Contamination*",
    source : ["DoD", 229],
    classes: ["druid", "sorcerer", "warlock", "wizard"],
    level: 6,
    school: "Necro",
    time: "1 a",
    range: "60 ft",
    components: "V,S,M\u2020",
	compMaterial : "A delerium fragment worth 100 gp, which the spell consumes",
    duration: "Instantaneous",
	save : "Con",
    description: "Contamination;crea sav or 16d6 Necro+1d4 Contamination;sav:1/2 dmg only;+1 crea (30ft)/SL (100gp cons.)",
    descriptionFull: "When you cast this spell, you gain one level of contamination. An octarine ray springs from your pointing finger to a creature that you can see within range. The target must succeed on a Constitution saving throw. On a failed save, a creature takes 16d6 necrotic damage and gains 1d4 levels of contamination. On a successful save, a target takes half as much damage and does not gain any contamination levels.\n"
		+AtHigherLevels+"When you cast this spell using a spell slot of 7th level or higher, you can target one additional creature for each slot level above 6th. The creatures must be within 30 feet of each other when you target them."
};
SpellsList["ride the rifts"] = {
    name: "Ride the Rifts",
    source : ["DoD", 228],
    classes: ["bard", "sorcerer", "warlock", "wizard"],
    level: 3,
    school: "Conj",
    time: "1 a",
    range: "S:60-ft line",
    components: "V,S,M\u2020",
	compMaterial : "A delerium fragment worth 100 gp, which the spell consumes",
    duration: "Instantaneous",
	save : "Dex",
    description: "Contamination;60ft line sav or 10d6 Lightning,sav:1/2 dmg;teleport to empty space in line (100gp cons.)",
    descriptionFull: "When you cast this spell, you gain one level of contamination. A stroke of eldritch lightning forming a line 60 feet long and 5 feet wide blasts out from you in a direction you choose. Each creature in the line must succeed on a Dexterity saving throw. A creature takes 10d6 lightning damage on a failed save, or half as much damage on a successful one. You then teleport to an unoccupied space you can see within the line’s area."
		+AtHigherLevels+"When you cast this spell using a spell slot of 4th level or higher, the damage increases by 2d6 for each slot level above 3rd."
};
SpellsList["sacrament of the falling fire"] = {
    name: "Sacrament of the Falling Fire",
    source : ["DoD", 229],
    classes: ["bard", "cleric", "druid", "warlock"],
    level: 9,
    school: "Abjur",
    time: "1 hr",
    range: "30 ft",
    components: "V,S,M\u2020",
	compMaterial : "A delerium fragment worth 100 gp for each participating creature, which the spell consumes",
    duration: "Instantaneous",
    description: "Sanctify up to 12 creas; hostile shadow or wraith attacks each crea (100gp/crea cons.)",
    descriptionFull: "This spell may only be cast in an area covered by the Deep Haze.\n"
		+"You perform a holy ceremony involving up to 12 faithful and willing humanoid creatures that ends when each participating creature drives a delerium shard into their chest. Those creatures become sanctified (see the Followers of the Falling Fire dossier in chapter 3 of Dungeons of Drakkenheim).\n"
		+"When you finish casting this spell, a hostile shadow appears and attacks each participant, as a manifestation of that character’s inner darkness. The GM may determine that a character who carries great anger, fear, or hate in their heart causes a wraith to manifest instead."
};
SpellsList["siphon contamination"] = {
    name: "Siphon Contamination",
    source : ["DoD", 229],
    classes: ["sorcerer", "warlock", "wizard"],
    level: 6,
    school: "Trans",
    time: "1 hr",
    range: "Touch",
    components: "V,S,M\u2020",
	compMaterial : "500 gp worth of specially-prepared alchemical fluids and a delerium geode worth 5,000 gp, all of which are consumed by the spell",
    duration: "Instantaneous",
    description: "Transfer contamination from 1 crea to another; see B. (5500gp cons.)",
    descriptionFull: "This demanding spell transfers contamination from one creature to another. When you cast this spell, you must first touch either a willing humanoid creature with one or more levels of contamination, or a former humanoid creature whose current form is the result of a monstrous transformation. You then touch a different willing humanoid creature.\n"
		+"If both creatures touched were willing humanoid creatures, you remove all contamination levels and mutations from the first creature, then the second creature you touch gains a number of contamination levels equal to the number of levels removed from the first creature.\n"
		+"If the first creature you touch is a former humanoid who suffered a monstrous contamination, and the second creature is a willing humanoid creature with a character level or challenge rating equal to or higher than the challenge rating of the transformed creature, you restore the fully contaminated creature to its original form, then the humanoid creature immediately undergoes a monstrous transformation as if it had gained six contamination levels.\n"
		+"The second creature touched cannot prevent or negate these contamination levels or an ensuing transformation in any way, or else the spell fails with no effect.\n"
		+"Researching the Spell: A character who can cast 6th level spells who knows the spells forced evolution and neutralizing field, and has witnessed another creature undergo a monstrous transformation may research siphon contamination."
};
SpellsList["warp bolt"] = {
    name: "Warp Bolt",
    source : ["DoD", 229],
    classes: ["sorcerer", "warlock", "wizard"],
    level: 2,
    school: "Evoc",
    time: "1 a",
    range: "60 ft",
    components: "V,S,M\u2020",
	compMaterial : "A delerium fragment worth 100 gp, which the spell consumes",
    duration: "Conc, 1 min",
    description: "Contamination; spell atk (auto-hit Contaminated target) for 6d6 Necro & Contamination (100gp cons.)",
    descriptionFull: "When you cast this spell, you gain one level of contamination. An arcing bolt of octarine lightning strikes a creature within range. If the target has one or more contamination levels, it is hit automatically. Otherwise, make a ranged spell attack against that creature. On a hit, the target takes 6d6 necrotic damage and gains one level of contamination.\n"
		+"You can create a new bolt of lightning as your action on any turn until the spell ends."
		+AtHigherLevels+"When you cast this spell using a spell slot of 3rd level or higher, you can target 1 additional creature for each spell level above 2nd."
};

// Magic items
MagicItemsList["aqua delerium"] = {
	name : "Aqua Delerium",
	source : [["DoD", 230]],
	type : "potion",
	rarity : "rare",
	magicItemTable : "?",
	description : "I can drink this potion or administer it to another and roll 1d6. The drinker regains spell slots of a combined level <= the roll, but must roll 1d20 when casting a level 1+ spell for the next hour, triggering an arcane anomaly on a 1. The potion's purple liquid glows dimly with octarine light.",
	descriptionFull : "This purple potion glows dimly with octarine light. It swirls and sparkles in its small stoppered bottle.\n"
		+"When you drink this potion, you regain expended spell slots. Roll 1d6 - you choose spell slots to regain that have a combined level that is equal to or less than the result. None of the slots can be higher than 5th level.\n"
		+"For one hour after drinking aqua delerium, roll 1d20 each time you cast a spell of 1st level or higher. On a 1, you trigger a random arcane anomaly.\n"
		+"If you consume more than one dose of aqua delerium before finishing your next long rest, you take 1d12 necrotic damage for each spell level regained, and your hit point maximum is reduced by an amount equal to the damage taken until you finish a long rest. This damage can’t be reduced or prevented in any way.\n"
		+"When a creature who cannot cast spells using spell slots drinks aqua delerium, it takes 10 (3d6) necrotic damage and gains one level of contamination.",
	weight : 0.5
};
MagicItemsList["aqua expurgo"] = {
	name : "Aqua Expurgo",
	source : [["DoD", 230]],
	type : "potion",
	rarity : "rare",
	magicItemTable : "?",
	description : "I can drink this potion or administer it to another to protect from contamination for 6 hrs. When they fail a save that would give them contamination, the recipient may succeed isntead up to 3 times. If all 3 attempts are used, the effect ends and they take 3d6 Necrotic & are Incapacitated for 1 min, reducing max HP by the damage. The potion's bright orange fluid is stored in a syringe & charged with arcane magic.",
	descriptionFull : "This bright orange fluid is stored in a syringe and charged with arcane magic. You can use an action to administer the shot directly to the heart of yourself or another willing creature.\n"
		+"You are protected against contamination for six hours after receiving a dose of aqua expurgo. During this time, whenever you fail a saving throw against an effect that would cause you to gain one or more contamination levels, you can choose to succeed instead. You can use this ability three times, after which the effects of aqua expurgo expire.\n"
		+"If the effects of aqua expurgo expire in this manner, you immediately take 10 (3d6) necrotic damage and become incapacitated for 1 minute while you violently retch corrupt bile. Your hit point maximum is reduced by an amount equal to the damage taken. This reduction lasts until you finish a long rest. You die if this effect reduces your hit point maximum to 0. The necrotic damage can’t be reduced or prevented by any means.",
	weight : 0.5
};

// Backgrounds
BackgroundList["continental nobility"] = {
	regExpSearch : /^(?=.*continental)(?=.*nobility).*$/i,
	name : "Continental Nobility",
	source : ["DoD", 244],
	skillstxt : "Choose two from Persuasion, Athletics, History, or Intimidation",
	gold : 25,
	equipleft : [
		["Signet Ring or Broach with Family Crest", 1, ""],
	],
	equipright : [
		["Set of fine clothes", 1, 3],
		["Cape in the colors of your house", 1, ""],
		["Belt pouch (with coins)", 1, 1],
	],
	feature : "Noble Confidence",
	trait : [
		"I consider myself a renowned monster slayer, and like to remind everyone of the many accomplishments I hold to my name.",
		"I keep family traditions close. Honour and family are amongst the most important things in the world, and I cherish them.",
		"I miss the comforts of my home. This city is dirty and smells terrible.",
		"I believe in the good in people, and I hope to find a peaceful resolution to our problems. A diplomatic approach is something Westemär greatly needs.",
		"As a noble, I have a responsibility to protect those who cannot protect themselves.",
		"It is highly important that I look my best and maintain my regal demeanor in all situations. My reputation must go untarnished.",
		"I may be of noble birth, but have lived life on the road for some time. I am more than willing to share what I have with others, as I am no better or worse than anyone else.",
		"There is no challenge I can’t face. I heard about the horrors and monsters of this world, and I am what they fear the most."
	],
	ideal : [
		["Respect",
			"Respect: I am a respected member of my family, and I expect what remains of Drakkenheim’s nobility and royal line to acknowledge my standing. (Lawful)"
		],
		["Responsibility",
			"Responsibility: It is my responsibility as a representative of my noble line to remain cordial, and diplomatic in dealings with the various high ranking members of Drakkenheim’s society. (Good)"
		],
		["Privacy",
			"Privacy: I do not wish for my nobility to come up. It may be best if the people of Drakkenheim do not know who I am. At least for now. (Any)"
		],
		["Duty",
			"Duty: It is my duty to aid the people of Drakkenheim. As a noble I was connected to this city, and it is what is expected of me. (Good)"
		],
		["Glory",
			"Glory: I must claim my victories and prove myself in battle. (Any)"
		],
		["Family",
			"Family: Blood is thicker than water and I will fight to defend my family’s honour. (Good)"
		],
	],
	bond : [
		"I must prove myself as a great warrior for my house and my people.",
		"My family was once bound to the royal family of Westemär, I must ensure we remain bound to whoever takes the throne.",
		"My family’s fortune was lost. Drakkenheim may be our last chance to get it back.",
		"My family was betrayed by one of the royal houses, and I plan to make sure any that remain of that name are brought to justice and my family takes its place where it belongs.",
		"I am destined to rule, as my ancestors before me have.",
		"I have been sent unwillingly on a diplomatic mission to Drakkenheim. I am to gain political standing in these crumbling ruins."
	],
	flaw : [
		"I boast about my own triumphs, and belittle the accomplishments of others.",
		"Bound by honor, I can never back down from a challenge, nor can I let those who undervalue my name go unchallenged.",
		"I do not like getting my hands dirty. Other people must do the heavy lifting, not me.",
		"I like to flaunt my wealth, and I spare no expense.",
		"I’m never wrong. Even if I was, I would never admit it.",
		"I was forced to lead, but I am very far out of my depth and desperately hoping people do not catch on that I don’t know what I am doing here."
	],
	extra : [
		"Select a Defining Event",
		"I was well celebrated in my city as a slayer of a great troll.",
		"I witnessed the death of my family during the civil war. They were targets for their ties to the von Kessel name.",
		"I led my knights to victory in defending our castle during a raid in the war.",
		"I lost a lot of good soldiers in an earlier expedition into Drakkenheim. We never made it past the gate.",
		"My house was an enemy of the von Kessel family and had many battles with them.",
		"I broke ties with my family when they folded to the Silver Order.",
		"I am related, not to a king or queen, but to a noble figure who sat in the small council and made important decisions for their representedhouse.",
		"My family lost everything in the destruction of Drakkenheim. We are noble only in name, no longer in standing.",
	],
	languageProfs : 2,
	lifestyle : "wealthy",
};
AddBackgroundVariant( "continental nobility", "last of the line", {
		regExpSearch:/^(?=.*last)(?=.*line).*$/i,		
		name : "Last of the Line",
		source : ["DoD", 245],
		lifestyle : "poor",
});
BackgroundList["mageborn"] = {
	regExpSearch : /^(?=.*mageborn).*$/i,
	name : "Mageborn",
	source : ["DoD", 245],
	skillstxt : "Choose two from Arcana, Deception, Investigation, or Perception",
	gold : 0,
	equipleft : [
		["Gnarled wand (wood)", 1, ""],
		["Amulet or trinket", 1, ""],
	],
	equipright : [
		["Duster jacket", 1, 3],
		["Satchel for components & potions", 1, 1],
	],
	feature : "Bookworm",
	trait : [
		"I idolize one of the archmages of the Academy and hope to prove myself to them in time.",
		"Nothing will get between me and my goals. When people say something I care about is impossible, I prove them wrong.",
		"I am confident in my powers, and do not fear the horrors of Drakkenheim, for I can bend reality.",
		"I am constantly reading books. The more knowledge I can obtain, the more I can outwit friends and foes alike.",
		"I am a mage for hire and am not afraid to use my magic to get my hands dirty. A lot of people will pay top coin for a skillset like mine.",
		"I am a sucker for a good mystery and pride myself in my ability to solve them.",
		"Everyone is always so serious - we all die in the end, might as well enjoy the ride.",
		"I always push myself to be the best at whatever it is I set out to do."
	],
	ideal : [
		["Respect",
			"Respect: My powers are a blessing and a curse, and I work diligently to show people not to fear magic. (Good)"
		],
		["Knowledge",
			"Knowledge: I left the Academy on good terms to work at one of the many historical institutes of the world, hoping that my love for books and history would be of use. (Any)"
		],
		["Love",
			"Love: I left the Academy due to love, and I plan to keep my promise to that love. (Good)"
		],
		["Forgiveness",
			"Forgiveness: I must undo the mistakes of my past by proving myself to those I care about most. (Good)"
		],
		["Power",
			"Power: Delerium is power, and I must learn all I can about its origins and properties if I am to harness that power. (Chaotic)"
		],
		["Independence",
			"Independence: I stand alone from the Academy for a reason. I do not wish to be on their bad side, but I do not wish to be on their good side either. (Neutral)"
		],
	],
	bond : [
		"It is my duty to protect the Amethyst Academy.",
		"My life’s work in the study of delerium caused my expulsion. I must continue that research to prove its value.",
		"The mysteries of my past and my power are tied to the meteor. I need answers.",
		"My terrible mistake was covered up by my mentor in the Academy. I owe them my life.",
		"My nightmares have guided me to Drakkenheim. I must investigate these visions.",
		"I come from a long line of wizards, my exit from the Academy was highly upsetting to them and I need to earn my way back into their favour, even if it means risking my life in Drakkenheim."
	],
	flaw : [
		"I walk straight into danger. What’s the worst that could happen?",
		"I believe my plan is always far superior to everyone else’s.",
		"I am distracted by possibilities of gaining knowledge or power, regardless of the cost or danger.",
		"I overcomplicate most situations with small details and over analyzing simple things.",
		"I get angry quickly, and cause more harm than good with my magic when I get mad.",
		"I can’t get enough delerium. I want the power for myself."
	],
	extra : [
		"Select a Mageborn Quirk",
		"My eyes are two different colours.",
		"Whenever I cast a spell, my voice echoes and an unknown wind seems to blow around me.",
		"My eyes glow with octarine light when I am casting spells.",
		"I hear voices and sounds when close to magical entities, as if the magic itself speaks to me.",
		"I have full conversations with myself out loud that occasionally can get heated.",
		"Magic floods my mind and makes it difficult to sleep without constant nightmares and visions.",
		"I speak to beings from other planes of existence who manifest as simple creatures before me.",
		"I have a birthmark in a unique shape that appears every day for 2 and a half hours, then vanishes.",
	],
	languageProfs : ["Draconic or Elven"],
	lifestyle : "comfortable",
};
AddBackgroundVariant( "mageborn", "malfeasant mage", {
		regExpSearch:/^(?=.*malfeasant)(?=.*mage).*$/i,		
		name : "Malfeasant Mage",
		source : ["DoD", 246],
		lifestyle : "poor",
});
BackgroundList["devoted missionary"] = {
	regExpSearch : /^(?=.*devoted)(?=.*missionary).*$/i,
	name : "Devoted Missionary",
	source : ["DoD", 245],
	skillstxt : "Choose two from History, Religion, Arcana, or Nature",
	gold : 0,
	equipleft : [
		["Delerium chip encased in glass", 1, 0.25],
		["Amulet with the symbol of your chosen god", 1, ""],
		["Small book of religious text", 1, ""],
	],
	equipright : [
		["Pale robes", 1, 4],
		["Walking stick", 1, ""],
	],
	feature : "Guided by Faith",
	trait : [
		"I empathize with those who do not follow the path of light. Creatures of all types can be brought back to the path of righteousness and are often suffering and in great pain.",
		"I believe in the words of my religion and quote its texts and scriptures as often as I can.",
		"I am tolerant (or intolerant) of other faiths and respect (or condemn) the worship of other gods.",
		"I have spent my life in a temple or church. Rough living wears on me quickly.",
		"I believe very strongly that everything will turn out okay, and nothing can shake my positive attitude.",
		"My faith kept me distant from others. I have very little experience with the world outside the church/temple/shrine.",
		"I have extremely strict etiquette and manners for interactions and tasks, and I refuse to stray from them.",
		"I am working on my thesis of religious ongoings in the world and excitedly discuss the nuances of these ideas with anyone and everyone."
	],
	ideal : [
		["Logic",
			"Logic: Emotions must not cloud our judgement on what is right or true. (Lawful)"
		],
		["Self",
			"Self: My religious journey is that of discovering myself. If I can obtain that, there is nothing left to know. (Any)"
		],
		["Charity",
			"Charity: I will always help those in need, no matter the cost. (Good)"
		],
		["Faith",
			"Faith: The path laid out before me is determined by the divine entity I worship. I will follow its signs and patterns to fulfil my purpose. (Lawful)"
		],
		["Power",
			"Power: The gods have granted me divine powers and I must use them to make those who do not worship as strongly as I see the divine light and understand that I am the one true speaker of my faith. (Chaotic)"
		],
		["Peace",
			"Peace: I do not like to be part of conflicts, rather a neutral voice of reason to all sides. (Neutral)"
		],
	],
	bond : [
		"Nothing is more important than my church and what it represents.",
		"I joined my religion to hide from a past I would rather forget.",
		"The path to enlightenment is unending. I must stay the course.",
		"I will die if it means doing right by my religious beliefs.",
		"Everything I do is for the good of the common people.",
		"I seek to preserve the ancient texts and artefact of my religion."
	],
	flaw : [
		"I judge others harshly and believe my path to be the one true path.",
		"I believe in the words of my religion so strongly that I follow them without question.",
		"The goal I have set for myself is my destiny, and I can not act against it or abandon it for any reason.",
		"My religion was meant to keep the dark thoughts at bay, but I find myself losing that battle and a blood thirst grows within me.",
		"This is my first taste of life outside my religion, and I enjoy its pleasures a little too much.",
		"The gods and my faith have determined that I am always correct as I speak on their behalf. There is no question in my mind that I speak the ultimate truths and any who do not agree are misguided fools."
	],
	extra : [
		"Select a Missionary Life",
		"I was on a quest of self-enlightenment.",
		"I ritualistically surround myself with lit candles and ancient texts when I rest.",
		"I had taken a vow of silence until the time that my voice was needed to fulfil my destiny.",
		"I was the caretaker of ancient relics of our faith and am quested with finding others.",
		"I am but a pilgrim hoping to find divine light in dark places in the world.",
		"I was guided to my faith by angels who rescued me from my dark past.",
		"I broke my vows to my faith and was exiled. I seek redemption.",
		"I must prove myself worthy to my faith and its purpose, no matter the amount of blood spilled or lives lost.",
	],
	languageProfs : 2,
	lifestyle : "poor",
};
AddBackgroundVariant( "devoted missionary", "stargazer", {
		regExpSearch:/^(?=.*stargazer).*$/i,		
		name : "Stargazer",
		source : ["DoD", 247],
		lifestyle : "poor",
});
BackgroundList["survivor"] = {
	regExpSearch : /^(?=.*survivor).*$/i,
	name : "Survivor",
	source : ["DoD", 247],
	skillstxt : "Choose two from Perception, Survival, Stealth, or Athletics",
	gold : 0,
	equipleft : [
		["Cook's utensils", 1, 8],
		["Climber's kit", 1, 12],
		["Shovel", 1, 5],
	],
	equipright : [
		["Cloak with a hood", 1, ""],
		["Thick gloves", 1, ""],
	],
	toolProfs:["Cook's utensils","Artisan's tools"],
	feature : "Makeshift Meals",
	trait : [
		"I always have an exit strategy in mind if things go poorly.",
		"You can’t survive in this grim city without a good sense of humor, but I have a taste for gallows humor.",
		"I try to work in the thin grey area between the squabbling factions, squeezing under their radar when possible. The less I am seen, the better.",
		"If you spot danger, it is best to avoid it, that’s how you survive.",
		"Drakkenheim is a dangerous place. But I can navigate it with my eyes closed. No one else I’ve ever met is as good as I am.",
		"In order to survive the monsters of Drakkenheim, one must be a monster of Drakkenheim.",
		"Take everything you can from the dead, take it from the living if you can. If you are to survive, you must take any opportunity to scavenge.",
		"I will never give up until I reclaim what I lost in these ruins."
	],
	ideal : [
		["Self-Reliance",
			"Self-Reliance: I won’t risk my life for others. Everyone must fend for themselves -- better you than me. (Evil)"
		],
		["Bravery",
			"Bravery: I find the thrill of surviving the monsters and magics of Drakkenheim exhilarating and thrive on the chaos. (Chaotic)"
		],
		["Safety",
			"Safety: Whatever I can do to keep myself fed and keep a safe place to rest is good in my books. (Any)"
		],
		["Helpful",
			"Helpful: People need all the help they can get in the city, and I know I can provide it. (Good)"
		],
		["Hope",
			"Hope: I believe there is something worth saving here, we must hold on to the idea of a better future. (Good)"
		],
		["Responsibility",
			"Responsibility: I lived here before the meteor, I’ll live here long after. I must protect my home and do what I can to make it livable again. (Lawful)"
		],
	],
	bond : [
		"I had family in these ruins. I know not what became of them, but I must find out.",
		"This city is my home, and I will fight for what’s left of it until the very end.",
		"I’ll do any dirty work in the city if it means a hot meal, a warm bed, or some good company.",
		"I’ve spent so long in these ruins, its the outside world that terrifies me now.",
		"Why haven’t I left Drakkenheim? Have you seen how much gold there is to be made here?",
		"I am bound to the throne of Drakkenheim, and fight to see it one day reclaimed."
	],
	flaw : [
		"Any meal could be my last. I’ll eat just about anything. I do what I must to survive.",
		"I don’t like being outside the Haze of the city for too long, I’ve gotten used to it.",
		"I am convinced my family is alive in the city somewhere. I hear their voices call to me at night.",
		"I don’t trust anyone easily. I’ll sleep with one eye open even around my companions, for Drakkenheim makes monsters of us all.",
		"The years spent here have turned me to a vice, I very much rely on that vice to get me through my days.",
		"I hear voices constantly. Sometimes I get distracted with conversations with people who are not there."
	],
	extra : [
		"Select a Mark of Survival",
		"Being alone for so long means I am very used to conversing with myself out loud.",
		"I eat things that others find disgusting. I have learned to love the delicacies of scavenged food in the ruins.",
		"I have many scars across my body from barely scraping by.",
		"I am missing a finger on one hand due to a horrible encounter I had in the ruins.",
		"I keep a locket of someone I lost in the ruins. I stare at it every night before I fall asleep to remember what I am looking for.",
		"I keep souvenirs of the monsters I have bested in these ruins, to remind myself how strong I truly am.",
		"I can sleep just about anywhere, nothing really phases me anymore.",
		"I often recite the names of people I used to know and lost so I can hold on to their memory.",
	],
	lifestyle : "poor",
};
AddBackgroundVariant( "survivor", "veteran of the civil war", {
		regExpSearch:/^(?=.*veteran) (?=.*civil) (?=.*war).*$/i,		
		name : "Veteran of the Civil War",
		source : ["DoD", 248],
		lifestyle : "poor",
});
BackgroundList["treasure seeker"] = {
	regExpSearch : /^(?=.*treasure) (?=.*seeker).*$/i,
	name : "Treasure Seeker",
	source : ["DoD", 248],
	skills:["Investigation"],
	skillstxt : "Choose one from Stealth, Insight, or Perception",
	gold : 0,
	equipleft : [
		["Thieves' tools", 1, 1],
		["Signet ring of a fake lord", 1, ""],
		["Fake identification", 1, ""],
		["Weighted dice", 1, ""],
		["Playing cards", 1, ""],
	],
	equipright : [
		["Dark clothes with a hood and face covering", 1, ""],
	],
	toolProfs:["Thieves' tools","Cartographer's tools"],
	feature : "Detail-Oriented",
	trait : [
		"I believe that I am destined for greatness, and nothing can convince me otherwise.",
		"I always have a plan or plot to outwit my foes. It may not always be good, but it’s almost always overly complex.",
		"I love to flaunt my wealth and showcase the things I have bought with it.",
		"I pay no mind to the risks of a situation. I always bet on myself and my abilities and it’s gotten me this far. Never tell me the odds.",
		"I have a quip, allegory, or joke for almost any situation.",
		"I lie about anything and everything. I lie for almost no reason at all, sometimes just to see if I can fool the people around me.",
		"I use flattery and honeyed words to get what I want.",
		"I can’t help it if valuable objects lying around end up in my pockets. It’s for safe keeping."
	],
	ideal : [
		["Independent",
			"Independent: No one tells me what to do. I make my own rules, and my own luck. (Chaotic)"
		],
		["Fair",
			"Fair: I do not take anything from anyone who couldn’t afford to lose it. I am a treasure hunter, not a thief. (Lawful)"
		],
		["Family",
			"Family: I care about material possessions and wealth, but not as much as I care about my friends and family. (Good)"
		],
		["Aspiration",
			"Aspiration: Wealth is power. Wealth means you will be remembered. In this world making a name for yourself is as simple as acquiring enough gold to buy your way to victory.I intend to be remembered. (Any)"
		],
		["Danger",
			"Danger: Every great discovery requires risk. The greater the risk, the greater the reward. It’s the thrill of the hunt that I live for. (Any)"
		],
		["Dignity",
			"Dignity: The dead and their prized belongings deserve more than to waste away in the ruins. They deserve to be found, remembered, and taken care of. (Lawful)"
		],
	],
	bond : [
		"My desire for wealth is out of a need to protect my family.",
		"Something important to me was stolen. I’ve longed to get it back ever since.",
		"I’m wanted for my many crimes and hope that where I am going, the law will not follow.",
		"I made mistakes in my past that cost me the life of someoneI loved. I will not let that happen again.",
		"I plan to be the greatest thief or most cunning explorer of all time.",
		"This is my last job, the big one. After this I hope to settle down with my wealth, maybe start a family."
	],
	flaw : [
		"My entire identity is layers of falsities presented to hide my true self, for I am not a good person. I’ve never told the truth for as long as I can remember and it’s too late now to stop.",
		"Every situation, every person, is only as valuable to me as what I can gain from them. I’m not afraid to pull strings to bend luck in my favour.",
		"I jump to defensive measures as soon as someone catches me in a lie, or tries to call me out for anything.",
		"I take what I want, and I want it all.",
		"I like to show my skills, talk big, and take big risks in the hopes of impressing everyone watching.",
		"I know for a fact I am the smartest person in the room, and if people are suggesting anything otherwise they are terribly mistaken."
	],
	extra : [
		"Select a Treasure Hunter's Secret",
		"I keep a cryptic map to a lost treasure that I have always wanted to uncover.",
		"I have a coin that is heads on both sides, helpful for winning a chance game.",
		"I have a magnifying spyglass I use to examine items.",
		"I have a ring that opens to reveal a small compartment inside.",
		"My left boot has a compartment for a hidden dagger.",
		"I carry an old compass that doesn’t point north, I hope it points towards a great treasure.",
		"I have a collection of exotic coins and medals that are of personal value to me.",
		"I have a rival treasure hunter who used to be a partner. We parted ways years ago.",
	],
	lifestyle : "comfortable",
};
AddBackgroundVariant( "treasure seeker", "soldier of fortune", {
		regExpSearch:/^(?=.*soldier) (?=.*fortune).*$/i,		
		name : "Soldier of Fortune",
		source : ["DoD", 249],
		lifestyle : "comfortable",
});

BackgroundFeatureList["Noble Confidence"] = {
	description : "During a short rest I can give an inspiring pep talk to a number of allies equal to my proficiency bonus. Once in the next 8 hours, each of those allies can roll 1d4 and add it to the result of a single attack roll, ability check, or saving throw.",
	source : ["DoD", 244]
};
BackgroundFeatureList["Bookworm"] = {
	description : "Once per day after you finish a long rest, you can spend one hour to create a spell scroll. You need only paper and ink to do so, and the level of the spell you can create equals one half your proficiency bonus (rounded down) or lower. The scroll you create must be a spell you know or have prepared. It crumbles to dust in 24 hours.",
	source : ["DoD", 245]
};
BackgroundFeatureList["Guided by Faith"] = {
	description : "A number of times per day equal to my proficiency bonus, I may ask the Game Master to reveal the DC of any ability check I make before rolling the dice. I may then decide whether or not I wish to attempt the roll.",
	source : ["DoD", 246]
};
BackgroundFeatureList["Makeshift Meals"] = {
	description : "I know how to purify food and rations found in the ruins. When I take a short rest, I prepare a meal for a number of creatures equal to my proficiency bonus. Creatures who consume the food regain hit points equal to my level. Once they do, they can’t regain hit points from another one of my meals until they finish a long rest.",
	source : ["DoD", 247]
};
BackgroundFeatureList["Detail-Oriented"] = {
	description : "I double my proficiency bonus when making any ability check to search the ruins of Drakkenheim.",
	source : ["DoD", 248]
};
