/*global.cachedSeed = undefined
global.cachedAlchemyData = {}

function colourMap(c) {
    switch (c) {
        case "white": return [255, 255, 255]
        case "orange": return [255, 150, 0]
        case "magenta": return [255, 39, 255]
        case "light_blue": return [170, 202, 255]

        case "yellow": return [255, 255, 0]
        case "lime": return [160, 255, 0]
        case "pink": return [255, 109, 183]
        case "gray": return [127, 127, 127]

        case "light_gray": return [223, 223, 223]
        case "cyan": return [0, 205, 205]
        case "purple": return [140, 0, 255]
        case "blue": return [29, 29, 255]

        case "brown": return [119, 59, 0]
        case "green": return [12, 203, 0]
        case "red": return [244, 22, 9]
        default: return [47, 47, 47]
    }
}

function shuffle(array, random) {
    for (var i = array.length - 1; i > 0; i--) {
        var j = random.nextInt(i + 1);
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array
}

function attackNearby(world, x, y, z) {
    let aabb = AABB.CUBE.func_72317_d(x - .5, y + .5, z - .5).func_72321_a(-3, -3, -3).func_72321_a(3, 3, 3)
    let list = world.minecraftWorld.func_217394_a(null, aabb, e => true)

    list.forEach(e => {
        let entity = world.getEntity(e)
        if (!entity.isLiving())
            return
        entity.attack("magic", 6)
    })
}

function process(world, block, entity, face) {

    if (global.cachedSeed != world.getSeed()) {
        global.cachedSeed = world.getSeed()
        let random = new java("java.util.Random")(world.getSeed())
        let next = () => random.nextInt(6)
        let generateCode = () => [next(), next(), next(), next()]
        for (cat = 0; cat < 7; cat++) {
            global.cachedAlchemyData[cat] = {
                code: generateCode(),
                result: cat == 6 ? "kubejs:substrate_chaos" : global.substrates[6][cat].id,
                mappings: shuffle(Array(0, 1, 2, 3, 4, 5), random)
            }
        }
        let total = []
        global.cachedAlchemyData["chaos_mapping"] = []
        for (i = 0; i < 38; i++) {
            total.push(i)
            global.cachedAlchemyData["chaos_mapping"].push(0)
        }
        shuffle(total, random)
        for (i = 0; i < 38; i += 2) {
            if (total[i] >= 36 && total[i + 1] >= 36) { // must not map silver-silicon
                if (i == 0) {
                    let swap = total[i + 2]
                    total[i + 2] = total[i + 1]
                    total[i + 1] = swap
                } else {
                    let swap = total[i - 1]
                    total[i - 1] = total[i]
                    total[i] = swap
                }
            }
        }
        for (i = 0; i < 38; i += 2) {
            global.cachedAlchemyData["chaos_mapping"][total[i]] = total[i + 1]
            global.cachedAlchemyData["chaos_mapping"][total[i + 1]] = total[i]
        }
    }

    let nbt = entity.getFullNBT()
    let items = nbt.Items


onEvent("recipes", event => {
  let blizz = KJ("blizz_powder")
	let basalz = KJ("basalz_powder")
	event.recipes.createSplashing([Item.of(KJ("sand_ball")).withChance(0.125)], "minecraft:sandstone")
	//	event.recipes.createCompacting(KJ("lightning_charge"), [basalz, basalz, basalz, basalz, basalz, basalz, basalz, basalz])

	event.remove({ id: CR("crushing/obsidian") })
	//	event.remove({ output: "ae2:silicon", type: "minecraft:smelting" })
	//	event.remove({ output: "ae2:silicon", type: "minecraft:blasting" })
	event.remove({ id: AE2("blasting/silicon_from_certus_quartz_dust") })
	event.remove({ id: AE2("smelting/silicon_from_certus_quartz_dust") })

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

	event.recipes.createCrushing(CR("powdered_obsidian"), MC("obsidian"))

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
			event.custom({
				"type": "thermal:sawmill",
				"ingredient": { "item": e.id },
				"result": [{ "item": e.outputItem ? e.outputItem : typeof e.ingredient == "string" ? e.ingredient : e.ingredient[0], "chance": 0.75 }],
				"energy": 2000
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

	
})*/
