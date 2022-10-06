onEvent("recipes", event => {

  event.shaped(("kubejs:living_machine"), [
    "DDD",
    "DAD",
    "DDD"
  ], {

    D: 'kubejs:living_mechanism',
    A: 'kubejs:living_casing'
  })

  event.remove({ output: "botania:mana_spreader" })
  event.shaped("botania:mana_spreader", [
    "LLL",
    "BC ",
    "LLL"
  ], {
    L: '#botania:livingwood_logs',
    B: 'kubejs:livingrock_gear',
    C: '#botania:petals'
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

  living_machine('botania:elven_spreader', 1, '#forge:ingots/elementium')
  living_machine('botania:abstruse_platform', 1, 'botania:mana_pearl')
  living_machine('botania:turntable', 1, 'create:turntable')
  living_machine('botania:alfheim_portal', 1, 'kubejs:terrasteel_sheet')


})