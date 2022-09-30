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
	creative_machine('projecte:collector_mk1', 1, 'industrialforegoing:resourceful_furnace')
	creative_machine('projecte:philosophers_stone', 1, 'kubejs:laser_blaster')
	creative_machine('create:creative_motor', 1, 'projecte:watch_of_flowing_time')
	creative_machine('projecte:relay_mk1', 1, 'projecte:collector_mk1')
	creative_machine('kubejs:graphics_card_c', 1, 'kubejs:graphics_card_t2')
	creative_machine('upgradednetherite_creative:creative_upgraded_netherite_ingot', 1, 'upgradednetherite_ultimate:ultimate_upgraded_netherite_ingot')

	event.smithing("upgradednetherite_creative:creative_upgraded_netherite_sword", "upgradednetherite_ultimate:ultimate_upgraded_netherite_sword","upgradednetherite_creative:creative_upgraded_netherite_ingot")
	event.smithing("upgradednetherite_creative:creative_upgraded_netherite_pickaxe", "upgradednetherite_ultimate:ultimate_upgraded_netherite_pickaxe","upgradednetherite_creative:creative_upgraded_netherite_ingot")
	event.smithing("upgradednetherite_creative:creative_upgraded_netherite_shovel", "upgradednetherite_ultimate:ultimate_upgraded_netherite_shovel","upgradednetherite_creative:creative_upgraded_netherite_ingot")
	event.smithing("upgradednetherite_creative:creative_upgraded_netherite_axe", "upgradednetherite_ultimate:ultimate_upgraded_netherite_axe","upgradednetherite_creative:creative_upgraded_netherite_ingot")
	event.smithing("upgradednetherite_creative:creative_upgraded_netherite_bow", "upgradednetherite_ultimate:ultimate_upgraded_netherite_bow","upgradednetherite_creative:creative_upgraded_netherite_ingot")
	event.smithing("upgradednetherite_creative:creative_upgraded_netherite_horse_armor", "upgradednetherite_ultimate:ultimate_upgraded_netherite_horse_armor","upgradednetherite_creative:creative_upgraded_netherite_ingot")



})