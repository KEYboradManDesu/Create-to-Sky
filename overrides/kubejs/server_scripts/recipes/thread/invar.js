onEvent("recipes", event => {
  let chop = (type, output) => {
    event.custom({
      "type": "farmersdelight:cutting",
      "ingredients": [{ "item": "tconstruct:" + type + "_slime_fern" }],
      "tool": { "tag": "forge:tools/knives" },
      "result": [Item.of(KJ(type + "_slimy_fern_leaf"), 2).toResultJson()]
    })
    event.custom({
      "type": "create:haunting",
      "ingredients": [{ "item": KJ(type + "_slimy_fern_leaf") }],
      "results": [{ "item": TC(type + "_slime_fern") }]
    })
    event.custom(ifiniDeploying(KJ(type + "_slimy_fern_leaf", 2), TC(type + "_slime_fern"), "#forge:tools/knives"))
    event.recipes.createMilling([KJ(type + "_slimy_fern_paste")], KJ(type + "_slimy_fern_leaf"))
    event.campfireCooking(output, KJ(type + "_slimy_fern_paste")).cookingTime(300)
  }
  chop("earth", MC("gunpowder"))
  chop("sky", MC("bone_meal"))
  chop("ender", AE2("ender_dust"))

  event.campfireCooking(MC("torch"), MC("stick")).cookingTime(20)

  //	event.shapeless(KJ("nickel_compound"), [KJ("nickel_ingot"), IV("iron_dust"), IV("iron_dust"), IV("iron_dust"), IV("iron_dust")])

  event.remove({ id: CR("mechanical_crafting/crushing_wheel") })
  event.recipes.createMechanicalCrafting(Item.of(CR("crushing_wheel"), 2), [
    " AAA ",
    "AABAA",
    "ABBBA",
    "AABAA",
    " AAA "
  ], {
    A: C("#cobblestone"),
    B: MC("stick")
  })

  event.recipes.createPressing(KJ("radiant_sheet"), CR("refined_radiance"))
  event.recipes.createMechanicalCrafting(KJ("radiant_coil"), ["A"], { A: KJ("radiant_sheet") })

  let steel_casing = (id, amount, other_ingredient) => {
		event.remove({ output: id })
		if (other_ingredient) {
			event.smithing(Item.of(id, amount), "mekanism:steel_casing", other_ingredient)
			event.recipes.createMechanicalCrafting(Item.of(id, amount), "AB", { A: "mekanism:steel_casing", B: other_ingredient })
		}
		else
			event.stonecutting(Item.of(id, amount), "mekanism:steel_casing")
	}
	steel_casing('beyond_earth:compressor', 1, "create:mechanical_press")
  steel_casing('beyond_earth:fuel_refinery', 1, "#forge:buckets/empty")
  steel_casing('beyond_earth:oxygen_loader', 1, "beyond_earth:oxygen_tank")


  
  /*	let t = KJ("incomplete_inductive_mechanism")
    event.recipes.createSequencedAssembly([
      KJ("inductive_mechanism"),
    ], CR("precision_mechanism"), [
      event.recipes.createDeploying(t, [t, KJ("radiant_coil")]),
      event.recipes.createDeploying(t, [t, KJ("radiant_coil")]),
      event.recipes.createDeploying(t, [t, KJ("chromatic_resonator")])
    ]).transitionalItem(t)
      .loops(1)
      .id("kubejs:inductive_mechanism")	*/


})