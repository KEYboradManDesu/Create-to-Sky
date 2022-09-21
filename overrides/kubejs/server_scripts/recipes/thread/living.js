onEvent("recipes", event => {

  event.shaped(("kubejs:living_machine"), [
    "DDD",
    "DAD",
    "DDD"
  ], {

    D: 'kubejs:living_mechanism',
    A: 'kubejs:living_casing'
  })


  let living_machine = (id, amount, other_ingredient) => {
		event.remove({ output: id })
		if (other_ingredient) {
			event.smithing(Item.of(id, amount), 'kubejs:living_machine', other_ingredient)
			event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: 'kubejs:living_machine', B: other_ingredient })
		}
		else
			event.stonecutting(Item.of(id, amount), 'kubejs:living_machine')
	}

	living_machine('botania:mana_spreader', 1, 'minecraft:dispenser')
  living_machine('botania:elven_spreader', 1, '#forge:ingots/elementium')
  living_machine('botania:abstruse_platform', 1, 'botania:mana_pearl')
  living_machine('botania:turntable', 1, 'create:turntable')
  


})