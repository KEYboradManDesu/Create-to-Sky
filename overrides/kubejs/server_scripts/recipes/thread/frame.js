onEvent("recipes", event => {
	event.remove({ output: TE('machine_frame') })
	event.shaped(TE('machine_frame'), [
		'AAA',
		'ACA',
		'AAA'
	], {
	  C: KJ('invar_casing'),
	  A: KJ("inductive_mechanism")
	})
	let machine_frame = (id, amount, other_ingredient) => {
		event.remove({ output: id })
		if (other_ingredient) {
			event.smithing(Item.of(id, amount), "thermal:machine_frame", other_ingredient)
			event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: "thermal:machine_frame", B: other_ingredient })
		}
		else
			event.stonecutting(Item.of(id, amount), "thermal:machine_frame")
	}
	machine_frame(("mekanism:steel_casing"), 1, ('beyond_earth:compressed_steel'))
	machine_frame(("mekanism:basic_pressurized_tube"), 16, ('create:smart_fluid_pipe'))

})