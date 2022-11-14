onEvent("recipes", event => {

  event.shaped(("kubejs:redstring_machine"), [
    "DDD",
    "DAD",
    "DDD"
  ], {

    D: 'kubejs:redstring_mechanism',
    A: 'kubejs:redstring_casing'
  })


  let redstring_machine = (id, amount, other_ingredient) => {
		event.remove({ output: id })
		if (other_ingredient) {
			event.smithing(Item.of(id, amount), 'kubejs:redstring_machine', other_ingredient)
			event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: 'kubejs:redstring_machine', B: other_ingredient })
		}
		else
			event.stonecutting(Item.of(id, amount), 'kubejs:redstring_machine')
	}

	redstring_machine('botania:red_string_interceptor', 1, '#minecraft:buttons')
  redstring_machine('botania:red_string_dispenser', 1, 'minecraft:dispenser')
  redstring_machine('botania:red_string_container', 1, '#forge:chests/wooden')
  redstring_machine('botania:red_string_fertilizer', 1, 'botania:fertilizer')
  redstring_machine('botania:red_string_comparator', 1, 'minecraft:comparator')
  redstring_machine('botania:red_string_relay', 1, 'botania:mana_spreader')
  redstring_machine('botania:alchemy_catalyst', 1, 'minecraft:brewing_stand')
  redstring_machine('botania:mana_void', 1, 'minecraft:obsidian')
  redstring_machine('botania:spark_changer', 1, 'botania:elementium_ingot')
  redstring_machine('botania:mana_fluxfield', 1, 'minecraft:redstone_block')
  redstring_machine('botania:forest_eye', 1, 'minecraft:ender_eye')
  redstring_machine('botania:pump', 2)
  redstring_machine('botania:mana_distributor', 2)
  


})