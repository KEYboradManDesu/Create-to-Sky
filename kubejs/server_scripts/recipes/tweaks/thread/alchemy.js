onEvent("recipes", event => {

	event.recipes.createMechanicalCrafting((Item.of('custommachinery:custom_machine_item', '{machine:"createtosky:chaotic_achemy"}')), [
		'CCC',
		'ABA',
		'CCC'      
	], { 
		A: 'thermal:machine_frame' ,
		B: 'botania:alchemy_catalyst' ,
		C: 'minecraft:obsidian' 
})

	let alchemy_mix = (output, catalyst, r1, r2, amount) => {
		event.recipes.createMixing([Item.of(KJ("substrate_" + output, amount ? amount : 1)), KJ("substrate_" + catalyst)], [KJ("substrate_" + catalyst), KJ("substrate_" + r1, 2), KJ("substrate_" + r2)]).heated()
	}
	let alchemy_smelt = (output, catalyst, r1, r2, amount) => {
		let arrayIn = []
		let c = 1
		if (amount) { c = amount }
		arrayIn.push(KJ("substrate_" + output, c))
		arrayIn.push(KJ("substrate_" + catalyst))
		event.recipes.createCompacting(arrayIn, [KJ("substrate_" + r1, 2), KJ("substrate_" + catalyst), KJ("substrate_" + r2)]).heated()
	}

	alchemy_mix("red", "herbal", "diorite", "andesite")
	alchemy_mix("orange", "herbal", "granite", "diorite")
	alchemy_mix("yellow", "herbal", "cobblestone", "granite")
	alchemy_mix("green", "herbal", "basalt", "cobblestone")
	alchemy_mix("blue", "herbal", "limestone", "basalt")
	alchemy_mix("magenta", "herbal", "andesite", "limestone")

	alchemy_smelt("blaze", "volatile", "orange", "andesite")
	alchemy_smelt("gunpowder", "volatile", "yellow", "diorite")
	alchemy_smelt("slime", "volatile", "green", "granite")
	alchemy_smelt("prismarine", "volatile", "blue", "cobblestone")
	alchemy_smelt("obsidian", "volatile", "magenta", "basalt")

	alchemy_mix("arcane", "crystal", "nether", "magenta")
	alchemy_mix("niter", "crystal", "blaze", "red")
	alchemy_mix("quartz", "crystal", "gunpowder", "orange")
	alchemy_mix("gunpowder", "crystal", "gunpowder", "orange")
	alchemy_mix("sulfur", "crystal", "slime", "yellow")
	alchemy_mix("certus", "crystal", "obsidian", "blue")

	alchemy_smelt("lead", "metal", "blaze", "obsidian")
	alchemy_smelt("copper", "metal", "nether", "certus")
	alchemy_smelt("gold", "metal", "lead", "blaze")
	alchemy_smelt("zinc", "metal", "emerald", "slime")
	alchemy_smelt("iron", "metal", "nether", "prismarine")

	alchemy_mix("emerald", "gem", "lead", "certus")
	alchemy_mix("diamond", "gem", "gold", "sulfur")
	alchemy_mix("lapis", "gem", "copper", "nether")
	alchemy_mix("sapphire", "gem", "zinc", "gunpowder")
	alchemy_mix("ruby", "gem", "copper", "sulfur")

	alchemy_smelt("andesite", "igneous", "sapphire", "iron", 20)
	alchemy_smelt("diorite", "igneous", "lapis", "lead", 20)
	alchemy_smelt("granite", "igneous", "diamond", "copper", 20)
	alchemy_smelt("cobblestone", "igneous", "ruby", "gold", 20)
	alchemy_smelt("basalt", "igneous", "emerald", "gold", 20)
	alchemy_smelt("limestone", "igneous", "lapis", "zinc", 20)

	let mundane = (id, outputs) => {
		let jsonOut = []
		if (outputs[0] > 0)
			jsonOut.push({
				"item": "supplementaries:ash",
				"count": outputs[0]
			})
		if (outputs[1] > 0)
			jsonOut.push({
				"item": MC("redstone"),
				"count": outputs[1]
			})
		if (outputs[2] > 0)
			jsonOut.push({
				"item": MC("glowstone_dust"),
				"count": outputs[2]
			})
		event.custom({
			"type": "thermal:centrifuge",
			"ingredient": {
				"item": KJ(`failed_alchemy_${id}`)
			},
			"result": jsonOut
		})
	}

	let i = 0;

	mundane(i++, [4, 0, 0])
	mundane(i++, [3, 1, 0])
	mundane(i++, [3, 0, 1])
	mundane(i++, [2, 2, 0])
	mundane(i++, [2, 0, 2])

	mundane(i++, [2, 1, 1])
	mundane(i++, [1, 3, 0])
	mundane(i++, [1, 0, 3])
	mundane(i++, [1, 2, 1])
	mundane(i++, [1, 1, 2])

	mundane(i++, [0, 4, 0])
	mundane(i++, [0, 0, 4])
	mundane(i++, [0, 3, 1])
	mundane(i++, [0, 1, 3])
	mundane(i++, [0, 2, 2])

	let recompact = (id, id2) => {
		event.recipes.createCompacting(id2, [id])
	}

	recompact(CR("powdered_obsidian"), MC("obsidian"))
	recompact(TE("diamond_dust"), MC("diamond"))
	recompact(TE("emerald_dust"), MC("emerald"))
	recompact(TE("lapis_dust"), MC("lapis_lazuli"))
	recompact(TE("sulfur_dust"), TE("sulfur"))
	recompact(TE("apatite_dust"), TE("apatite"))
	recompact(TE("niter_dust"), TE("niter"))
	recompact(TE("sapphire_dust"), TE("sapphire"))
	recompact(TE("ruby_dust"), TE("ruby"))
	recompact("forbidden_arcanus:arcane_crystal_dust", "forbidden_arcanus:arcane_crystal")

	global.substrates.forEach(a => {
		a.forEach(e => {
			if (!e.ingredient)
				return
			event.custom({
				"type": "thermal:bottler",
				"ingredients": [Ingredient.of(e.ingredient).toJson(), { "fluid": "tconstruct:molten_glass", "amount": 100 }],
				"result": [{ "item": e.id }]
			})
		})
	})

	event.custom({
		"type": "thermal:sawmill",
		"ingredient": { "item": "kubejs:substrate_silicon" },
		"result": [{ "item": AE2("silicon"), "count": 1 }],
		"energy": 2000
	})

	event.custom({
		"type": "thermal:sawmill",
		"ingredient": { "item": "kubejs:substrate_silver" },
		"result": [{ "item": TE("silver_dust"), "count": 1 }],
		"energy": 2000
	})

	event.custom({
		"type": "thermal:bottler",
		"ingredients": [
			{ "item": TE("signalum_nugget") },
			{ "fluid": "tconstruct:molten_glass", "amount": 100 }
		],
		"result": [{ "item": "kubejs:accellerator_redstone" }]
	})

	event.custom({
		"type": "thermal:bottler",
		"ingredients": [
			{ "item": TE("silver_dust") },
			{ "fluid": "tconstruct:molten_glass", "amount": 100 }
		],
		"result": [{ "item": "kubejs:substrate_silver" }]
	})

	event.custom({
		"type": "thermal:bottler",
		"ingredients": [
			{ "item": TE("lumium_nugget") },
			{ "fluid": "tconstruct:molten_glass", "amount": 100 }
		],
		"result": [{ "item": "kubejs:accellerator_glowstone" }]
	})

function rnd(seed) {
		let seedO = (seed * 9301 + 49297) % 233280 //toxic, don't touch it
		return seedO / (233280.0)
}
	
function rand(number, seed) {
		return Math.ceil(rnd(seed) * number)
}
	
function select(input, seed) {
		let selectTemp = input
		let selected = []
		for (let i = 0; i < 4; i++) {
			let num = rand(selectTemp.length - 1, seed + i)
			selected.push(selectTemp[num])
			selectTemp.splice(num, 1)
		}
		return selected
}
	
function chaosT(subs, seed, event) {

	if (DEBUG == true) event.server.runCommandSilent("say " + subs + " seed " + seed)
	let igneous = ["andesite", "diorite", "granite", "cobblestone", "basalt", "limestone"]
	let herbal = ["red", "orange", "yellow", "green", "blue", "magenta"]
	let volatile = ["blaze", "slime", "nether", "obsidian", "gunpowder", "prismarine"]
	let metal = ["zinc", "copper", "iron", "lead", "gold"]
	let crystal = ["sulfur", "certus"]
	let gem = ["lapis", "emerald", "diamond", "ruby", "sapphire"]
	let chaos = ["igneous", "herbal", "volatile", "crystal", "metal", "gem"]
	let allSubstrate = ["andesite", "diorite", "granite", "cobblestone", "basalt", "limestone", "red", "orange", "yellow", "green", "blue", "magenta", "blaze", "slime", "nether", "obsidian", "gunpowder", "prismarine", "zinc", "copper", "iron", "lead", "gold", "sulfur", "certus", "lapis", "emerald", "diamond", "ruby", "sapphire"]

	if (DEBUG == true) event.server.runCommandSilent("say silicon: " + allSubstrate[rand(allSubstrate.length, seed + 114514)] + " silver: " + allSubstrate[rand(allSubstrate.length, seed + 1919810)])

	if (subs == select(chaos, seed).sort().toString()) return "chaos"
	if (subs == select(igneous, seed).sort().toString()) return "igneous"
	if (subs == select(herbal, seed).sort().toString()) return "herbal"
	if (subs == select(volatile, seed).sort().toString()) return "volatile"
	if (subs == select(metal, seed).sort().toString()) return "metal"
	if (subs == select(gem, seed).sort().toString()) return "gem"
	if (subs == ["sulfur", "certus"].sort().toString()) return "crystal"



	if (subs == ["chaos", allSubstrate[rand(allSubstrate.length, seed + 114514)]].sort().toString()) return "silicon"
	if (subs == ["chaos", allSubstrate[rand(allSubstrate.length, seed + 1919810)]].sort().toString()) return "silver"

	return ""

}

   /*event.recipes.custommachinery.custom_machine("createtosky:chaotic_achemy", 1)
   .requireRedstone(4, ">>")
   .requireFluid("kubejs:powered_water")
   .requireItemTag("#cabricality:substrates", 1, "substrates1")
   .requireItemTag("#cabricality:substrates", 1, "substrates2")
   .requireItemTag("#cabricality:substrates", 1, "substrates3")
   .requireItemTag("#cabricality:substrates", 1, "substrates4")
   .runCommandOnEnd("/particle minecraft:flash ~0.5 ~0.5 ~0.5 0 0 0 .01 1",false)
   .runCommandOnEnd("/particle ae2:matter_cannon_fx ~0.5 ~0.5 ~0.5",false)
   .runCommandOnEnd("/playsound minecraft:block.enchantment_table.use block @a ~ ~ ~ 0.95 1.5",false)
   .dropItemOnEnd('kubejs:substrate_chaos')
   .produceFluid("minecraft:water")*/


   /*event.recipes.custommachinery.custom_machine("createtosky:chaotic_achemy", 1)
   .requireRedstone(4, ">>")
   .requireItem("minecraft:basalt", "substrates1")
   .requireItem("minecraft:basalt", "substrates2")
   .requireItem("minecraft:basalt", "substrates3")
   .requireItem("minecraft:basalt", "substrates4")
   .runCommandOnEnd("/particle minecraft:flash ~0.5 ~0.5 ~0.5 0 0 0 .01 1",false)
   .runCommandOnEnd("/particle ae2:matter_cannon_fx ~0.5 ~0.5 ~0.5",false)
   .runCommandOnEnd("/playsound minecraft:block.enchantment_table.use block @a ~ ~ ~ 0.95 1.5",false)
   .dropItemOnEnd('4x thermal:basalz_rod')

   event.recipes.custommachinery.custom_machine("createtosky:chaotic_achemy", 1)
   .requireRedstone(4, ">>")
   .requireItem("minecraft:snow_block", "substrates1")
   .requireItem("minecraft:snow_block", "substrates2")
   .requireItem("minecraft:snow_block", "substrates3")
   .requireItem("minecraft:snow_block", "substrates4")
   .runCommandOnEnd("/particle minecraft:flash ~0.5 ~0.5 ~0.5 0 0 0 .01 1",false)
   .runCommandOnEnd("/particle ae2:matter_cannon_fx ~0.5 ~0.5 ~0.5",false)
   .runCommandOnEnd("/playsound minecraft:block.enchantment_table.use block @a ~ ~ ~ 0.95 1.5",false)
   .dropItemOnEnd('4x thermal:blizz_rod')*/

  
	
})
