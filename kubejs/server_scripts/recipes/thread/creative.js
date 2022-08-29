onEvent("recipes", event => {
  event.shaped(KJ("creative_machine"), [
		"SSS",
		"SCS",
		"SSS"
	], {
		C: KJ("creative_casing"),
		S: KJ("creative_mechanism")
	})
	let creative_machine = (id, amount, other_ingredient) => {
		event.remove({ output: id })
		if (other_ingredient) {
			event.smithing(Item.of(id, amount), "kubejs:creative_machine", other_ingredient)
			event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: "kubejs:creative_machine", B: other_ingredient })
		}
		else
			event.stonecutting(Item.of(id, amount), "kubejs:creative_machine")
	}
	creative_machine("ae2:creative_item_cell", 1, 'projecte:transmutation_tablet')
	creative_machine("ae2:creative_fluid_cell", 1, 'ae2:fluid_storage_cell_256k')
	creative_machine("appmek:creative_chemical_cell", 1, 'appmek:chemical_storage_cell_256k')
	creative_machine("botania:creative_pool", 1, 'botania:fabulous_pool')
	creative_machine(Item.of('botania:mana_tablet', '{creative:1b,mana:500000}'), 1, 'botania:mana_tablet')
	creative_machine("buddycards:creative_grading_sleeve", 1, 'buddycards:luminis_sleeve')
	creative_machine(Item.of('tconstruct:creative_slot', '{slot:"upgrades"}'), 1, 'minecraft:anvil')
	creative_machine(Item.of('tconstruct:creative_slot', '{slot:"abilities"}'), 1, 'minecraft:golden_apple')
	creative_machine(Item.of('tconstruct:creative_slot', '{slot:"souls"}'), 1, 'tconstruct:jeweled_apple')
	creative_machine('thermal:fluid_tank_creative_augment', 1, 'thermal:fluid_tank_augment')
	creative_machine('thermal:machine_catalyst_creative_augment', 1, 'thermal:machine_catalyst_augment')
})