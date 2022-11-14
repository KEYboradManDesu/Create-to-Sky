onEvent("recipes", event => {
  event.shaped(KJ("zinc_machine"), [
		"SSS",
		"SCS",
		"SSS"
	], {
		C: KJ("zinc_casing"),
		S: KJ("infernal_mechanism")
	})
	let zinc_machine = (id, amount, other_ingredient) => {
		event.remove({ output: id })
		if (other_ingredient) {
			event.smithing(Item.of(id, amount), "kubejs:zinc_machine", other_ingredient)
			event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: "kubejs:zinc_machine", B: other_ingredient })
		}
		else
			event.stonecutting(Item.of(id, amount), "kubejs:zinc_machine")
	}
	zinc_machine(TE('device_rock_gen'), 1, MC('piston'))
	zinc_machine(TE('device_collector'), 1, MC('ender_pearl'))
	zinc_machine(TE('device_nullifier'), 1, MC('lava_bucket'))
	zinc_machine(TE('device_potion_diffuser'), 1, MC('glass_bottle'))
	zinc_machine('storagedrawers:controller', 1, MC('diamond'))
	zinc_machine('storagedrawers:controller_slave', 1, MC('gold_ingot'))
	zinc_machine('torchmaster:megatorch', 1, MC('torch'))
	zinc_machine('thermal:upgrade_augment_2', 1, MC('redstone'))
	zinc_machine('mekanism:metallurgic_infuser', 1, MC('blast_furnace'))
	zinc_machine('cloudstorage:static_cloud_chest', 1, 'cloudstorage:static_cloud')
})