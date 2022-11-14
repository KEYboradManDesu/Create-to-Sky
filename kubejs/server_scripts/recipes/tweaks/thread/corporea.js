onEvent("recipes", event => {

  event.shaped(("kubejs:corporea_machine"), [
    "DDD",
    "DAD",
    "DDD"
  ], {

    D: 'kubejs:corporea_mechanism',
    A: 'kubejs:corporea_casing'
  })


  let corporea_machine = (id, amount, other_ingredient) => {
		event.remove({ output: id })
		if (other_ingredient) {
			event.smithing(Item.of(id, amount), 'kubejs:corporea_machine', other_ingredient)
			event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: 'kubejs:corporea_machine', B: other_ingredient })
		}
		else
			event.stonecutting(Item.of(id, amount), 'kubejs:corporea_machine')
	}

	corporea_machine('botania:corporea_index', 1, 'botania:dragonstone')
  corporea_machine('botania:corporea_funnel', 1, 'minecraft:dropper')
  corporea_machine('botania:corporea_interceptor', 1, 'minecraft:redstone_block')
  corporea_machine('botania:corporea_crystal_cube', 1, 'botania:elf_glass')
  corporea_machine('botania:corporea_retainer', 1, '#forge:chests/wooden')


})