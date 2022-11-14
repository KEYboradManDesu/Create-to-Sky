function unify(event) {

	event.recipes.createMilling(TE("nickel_dust"), TE("nickel_ingot"))
	event.recipes.createMilling(TE("lead_dust"), TE("lead_ingot"))
	event.recipes.createMilling(TE("copper_dust"), CR("copper_ingot"))
	event.recipes.createMilling(KJ("zinc_dust"), CR("zinc_ingot"))
    event.add('forge:raw_ores/zinc', 'create:raw_zinc')
     mekanismMetals.forEach(metal => e.add(`forge:raw_ores/${metal}`, `mekanism:raw_${metal}`))

	event.replaceInput({ id: OC("ritual/summon_djinni_crusher") }, '#forge:dusts/silver', KJ('zinc_dust'))
	event.replaceInput({}, '#forge:dusts/quartz', AE2('nether_quartz_dust'))
	event.replaceOutput({}, TE("quartz_dust"), AE2("nether_quartz_dust"))
	event.replaceOutput({ id: CR('compat/ae2/milling/gold') }, AE2('gold_dust'), TE('gold_dust'))
	event.replaceOutput({ id: CR('compat/ae2/milling/iron') }, AE2('iron_dust'), TE('iron_dust'))
	event.replaceOutput({ id: OC('crushing/iron_dust_from_ingot') }, OC('iron_dust'), TE('iron_dust'))
	event.replaceOutput({ id: OC('crushing/gold_dust_from_ingot') }, OC('gold_dust'), TE('gold_dust'))
	event.replaceOutput({ id: OC('crushing/obsidian_dust') }, OC('obsidian_dust'), CR('powdered_obsidian'))
	event.replaceInput({ id: OC('crafting/chalk_purple_impure') }, OC('obsidian_dust'), CR('powdered_obsidian'))
	event.replaceInput({ id: OC('ritual/craft_infused_lenses') }, F('#ingots/silver'), TE('nickel_ingot'))
	event.replaceInput({ id: OC('crafting/magic_lamp_empty') }, F('#ingots/silver'), MC('iron_ingot'))
	event.replaceInput({ id: OC('crafting/lens_frame') }, F('#ingots/silver'), TE('nickel_ingot'))
	event.replaceInput({ id: TE('augments/rf_coil_storage_augment') }, F('#ingots/silver'), MC('iron_ingot'))
	event.replaceInput({ id: TE('augments/rf_coil_xfer_augment') }, F('#ingots/silver'), MC('iron_ingot'))
	event.replaceInput({ id: TE('augments/rf_coil_augment') }, F('#ingots/silver'), MC('iron_ingot'))
	event.replaceInput({ id: TE('tools/detonator') }, F('#ingots/silver'), TE('lead_ingot'))

	event.replaceOutput({ type: OC("crushing") }, OC('copper_dust'), TE('copper_dust'))
	event.replaceOutput({ type: OC("crushing") }, OC('iron_dust'), TE('iron_dust'))
	event.replaceOutput({ type: OC("crushing") }, OC('gold_dust'), TE('gold_dust'))
	event.replaceOutput({ type: OC("crushing") }, OC('silver_dust'), TE('silver_dust'))

	event.replaceInput({}, '#forge:plates/iron', CR('iron_sheet'))
	event.replaceInput({}, '#forge:plates/gold', CR('golden_sheet'))
	event.replaceInput({}, '#forge:dusts/gold', TE('gold_dust'))
	event.replaceInput({}, '#forge:dusts/iron', TE('iron_dust'))
	event.replaceInput({}, '#forge:dusts/copper', TE('copper_dust'))
  event.replaceInput({}, '#forge:dusts/cobalt', KJ('cobalt_dust'))
	event.replaceInput({}, '#forge:plates/copper', CR('copper_sheet'))
	event.replaceInput({}, '#forge:ingots/copper', CR('copper_ingot'))
	event.replaceOutput({}, '#forge:ingots/copper', CR('copper_ingot'))
	event.replaceInput({}, '#forge:nuggets/copper', CR('copper_nugget'))
	event.replaceOutput({}, '#forge:nuggets/copper', CR('copper_nugget'))
	event.replaceOutput({}, '#forge:ores/copper', CR('copper_ore'))
	event.replaceOutput({}, '#forge:nuggets/silver', TE('silver_nugget'))
	event.replaceOutput({}, '#forge:ingots/silver', TE('silver_ingot'))
	event.replaceOutput({}, '#forge:storage_blocks/silver', TE('silver_block'))
	event.replaceInput({}, '#forge:storage_blocks/copper', CR('copper_block'))
	event.replaceOutput({}, '#forge:storage_blocks/copper', CR('copper_block'))
	event.replaceInput({}, '#forge:gems/ruby', TE('ruby'))
	event.replaceInput({}, '#forge:gems/sapphire', TE('sapphire'))
	event.replaceInput({ id: "exchangers:thermal/thermal_exchanger_core_tier1" }, TE('ender_pearl_dust'), AE2('ender_dust'))

	event.recipes.createSplashing([Item.of(MC('clay_ball'), 1).withChance(0.25).toResultJson()], 'biomesoplenty:black_sand')
	event.recipes.createSplashing([Item.of(MC('clay_ball'), 1).withChance(0.25).toResultJson()], 'biomesoplenty:white_sand')
	event.recipes.createSplashing([Item.of(MC('clay_ball'), 1).withChance(0.25).toResultJson()], 'biomesoplenty:orange_sand')

	event.replaceInput({ type: "minecraft:crafting_shaped" }, '#forge:ingots/tin', CR('zinc_ingot'))

	event.replaceInput({}, '#forge:plates/bronze', TE('nickel_plate'))
	event.replaceInput({}, '#forge:plates/silver', TE('invar_plate'))
	event.replaceInput({}, '#forge:plates/constantan', TE('signalum_plate'))
	event.replaceInput({}, '#forge:plates/electrum', TE('constantan_plate'))
	event.replaceInput({}, '#forge:ingots/electrum', TE('constantan_ingot'))

	event.replaceInput({}, '#forge:gears/tin', TE('lead_gear'))
	event.replaceInput({}, '#forge:gears/bronze', TE('nickel_gear'))
	event.replaceInput({}, '#forge:gears/silver', TE('invar_gear'))
	event.replaceInput({}, '#forge:gears/constantan', TE('signalum_gear'))
	event.replaceInput({}, '#forge:gears/electrum', TE('constantan_gear'))

	event.replaceInput({}, '#forge:plates/invar', TE('invar_ingot'))

	event.recipes.createPressing([TE('lead_plate')], TE('lead_ingot'))
	event.recipes.createPressing([TE('enderium_plate')], TE('enderium_ingot'))
	event.recipes.createPressing([TE('lumium_plate')], TE('lumium_ingot'))
	event.recipes.createPressing([TE('signalum_plate')], TE('signalum_ingot'))
	event.recipes.createPressing([TE('constantan_plate')], TE('constantan_ingot'))

	let woodcutting = (mod, log, planks, slab) => {
		event.recipes.createCutting([mod + ":stripped_" + log], mod + ":" + log).processingTime(50)
		event.recipes.createCutting([Item.of(mod + ":" + planks, 6)], mod + ":stripped_" + log).processingTime(50)
		event.recipes.createCutting([Item.of(mod + ":" + slab, 2)], mod + ":" + planks).processingTime(50)
	}

	onEvent('tags.item', tag => {
		e.add('forge:saws', 'kubejs:stone_saw');
	})		  

	woodcutting("forbidden_arcanus", "cherrywood_log", "cherrywood_planks", "cherrywood_slab")
	woodcutting("forbidden_arcanus", "mysterywood_log", "mysterywood_planks", "mysterywood_slab")
	woodcutting("architects_palette", "twisted_log", "twisted_planks", "twisted_slab")
	woodcutting("tconstruct", "greenheart_log", "greenheart_planks", "greenheart_planks_slab")
	woodcutting("tconstruct", "skyroot_log", "skyroot_planks", "skyroot_planks_slab")
	woodcutting("tconstruct", "bloodshroom_log", "bloodshroom_planks", "bloodshroom_planks_slab")

}

onEvent('item.tags', event => {

	global.trades.forEach(element => {
		  event.get('forge:trade_cards').add(`kubejs:trade_card_${element}`)
	  });
  
	  global.professions.forEach(element => {
		  event.get('forge:profession_cards').add(`kubejs:profession_card_${element}`)
	  });
  
	event.get('kubejs:accellerator').add('kubejs:accellerator_redstone')
	event.get('kubejs:accellerator').add('kubejs:accellerator_glowstone')
  
	event.get('kubejs:achemy_solt').add('#cabricality:substrates')
	event.get('kubejs:achemy_solt').add('minecraft:basalt')
	event.get('kubejs:achemy_solt').add('minecraft:snow_block')
  
	event.get('forge:glazed_terracotta').add('minecraft:white_glazed_terracotta')
	event.get('forge:glazed_terracotta').add('minecraft:orange_glazed_terracotta')
	event.get('forge:glazed_terracotta').add('minecraft:magenta_glazed_terracotta')
	event.get('forge:glazed_terracotta').add('minecraft:light_blue_glazed_terracotta')
	event.get('forge:glazed_terracotta').add('minecraft:yellow_glazed_terracotta')
	event.get('forge:glazed_terracotta').add('minecraft:lime_glazed_terracotta')
	event.get('forge:glazed_terracotta').add('minecraft:pink_glazed_terracotta')
	event.get('forge:glazed_terracotta').add('minecraft:gray_glazed_terracotta')
	event.get('forge:glazed_terracotta').add('minecraft:light_gray_glazed_terracotta')
	event.get('forge:glazed_terracotta').add('minecraft:cyan_glazed_terracotta')
	event.get('forge:glazed_terracotta').add('minecraft:purple_glazed_terracotta')
	event.get('forge:glazed_terracotta').add('minecraft:brown_glazed_terracotta')
	event.get('forge:glazed_terracotta').add('minecraft:green_glazed_terracotta')
	event.get('forge:glazed_terracotta').add('minecraft:red_glazed_terracotta')
	event.get('forge:glazed_terracotta').add('minecraft:black_glazed_terracotta')

	event.get('forge:blocks/steel').add('mekanism:block_steel')
	event.get('forge:blocks/bronze').add('thermal:bronze_block')
	event.get('forge:blocks/bronze').add('mekanism:block_bronze')
  
	event.get('minecraft:melon_slice').add('minecraft:melon_slice')
  
	event.get('forge:cheese/cheese').add('vanillacookbook:cheese')
	event.get('forge:cheese/cheese').add('shelve:cheese')
  
	event.get('excompressum:sieves').add('exnihilotinkers:greenheart_sieve')
	event.get('excompressum:sieves').add('exnihilotinkers:bloodshroom_sieve')
	event.get('excompressum:sieves').add('exnihilotinkers:skyroot_sieve')
	event.get('exnihilosequentia:sieves').add('exnihilotinkers:greenheart_sieve')
	event.get('exnihilosequentia:sieves').add('exnihilotinkers:bloodshroom_sieve')
	event.get('exnihilosequentia:sieves').add('exnihilotinkers:skyroot_sieve')
  
	event.get('forge:tools/achemy').add('thermal:flux_magnet')
	event.get('forge:tools/achemy').add('ae2:entropy_manipulator')
	event.get('forge:tools/achemy').add('kubejs:laser_blaster')
  
	event.get('ae2:crystals/fluix').add('#forge:gems/fluix')
  
	event.get('forge:gunpowder').add('kubejs:black_gunpowder')
  
	event.get('forge:tools/wrench').add('kubejs:screwdriver')
  
	event.get('forge:super_glue').add('create:super_glue')
	event.get('forge:super_glue').add('#forge:slimeballs')
  
	event.get('forge:fruits/strawberry').add('#forge:crops/strawberry')
	event.get('neapolitan:dried_vanilla_pods').add('neapolitan:dried_vanilla_pods')
  
	event.get('minecraft:wool_carpets').add('#minecraft:carpets')
  
	event.get('forge:raw_materials').add('kubejs:raw_stormyx')
	event.get('forge:raw_materials/stormyx').add('kubejs:raw_stormyx')
	event.get('forge:raw_ores/stormyx').add('kubejs:raw_stormyx')
	event.get('forge:ores/stormyx').add('kubejs:raw_stormyx')
  
	event.get('forge:ingots').add('kubejs:stormyx_ingot')
	event.get('forge:ingots/stormyx').add('kubejs:stormyx_ingot')
  
	event.get('create:crushed_ores').add('kubejs:crushed_stormyx_ore')
  
	event.get('forge:dusts').add('kubejs:stormyx_dust')
	event.get('forge:dusts/stormyx').add('kubejs:stormyx_dust')
  
	event.get('forge:nuggets').add('kubejs:stormyx_nugget')
	event.get('forge:nuggets/stormyx').add('kubejs:stormyx_nugget')
  
	event.get('thermal:crafting/dies').add('#forge:trade_cards')
	  event.get('thermal:crafting/dies').add('#forge:profession_cards')
  
	event.get('forge:ores/cobalt').add('tconstruct:raw_cobalt')
  
	event.get('thermal:crafting/dies').add('kubejs:graphics_card_t1')
	event.get('thermal:crafting/dies').add('kubejs:graphics_card_t2')
	event.get('thermal:crafting/dies').add('kubejs:graphics_card_c')
  
	event.get("forge:ores/brass").add("kubejs:raw_brass")
	event.get("create:crushed_ores").add("kubejs:crushed_brass_ore")
	event.get("forge:dusts/brass").add("kubejs:brass_dust")
	event.get("forge:dusts").add("kubejs:brass_dust")
  
	  event.get("forge:dust/obsidian").add("#forge:dusts/obsidian")
	event.get("forge:dusts").add("kubejs:desh_dust")
  
	event.get("exnihilosequentia:hammer").add("#forbidden_arcanus:blacksmith_gavel")
	event.get("exnihilosequentia:hammer").add("immersiveengineering:hammer")
	event.get("exnihilosequentia:hammer").add("industrialforegoing:infinity_hammer")
	event.get("exnihilosequentia:hammer").add("projecte:dm_hammer")
	event.get("exnihilosequentia:hammer").add("projecte:rm_hammer")
	event.get("exnihilosequentia:hammer").add("projecte:rm_morning_star")
  
	event.get("forge:plates/steel").add("beyond_earth:compressed_steel")
	
	event.get("kubejs:matrix").add("kubejs:computation_matrix")
  
	event.get("forge:insulating").add("immersiveengineering:insulating_glass")
	event.get("forge:insulating").add("immersiveengineering:slag_glass")
  
	event.get("forge:saws").add("kubejs:stone_saw")
	event.get("forge:saws").add("kubejs:iron_saw")
	  event.get("forge:saws").add("kubejs:diamond_saw")
	event.get("forge:saws").add("kubejs:netherite_saw")
  
	event.get("forge:tools/saws").add("kubejs:stone_saw")
	event.get("forge:tools/saws").add("kubejs:iron_saw")
	  event.get("forge:tools/saws").add("kubejs:diamond_saw")
	event.get("forge:tools/saws").add("kubejs:netherite_saw")
  
	event.get("minecraft:sand/colorless").add("minecraft:sand")
  
	event.get("forge:rods/zinc").add("create_sa:zinc_handle")
	
	// event.get("forge:press_gear_die").add("thermal:press_gear_die")
	// event.get("forge:press_gear_die").add("immersiveengineering:mold_gear")
	
	event.get("forge:dyes/red").add("thermal:ruby_dust")
	event.get("forge:dyes/blue").add("thermal:sapphire_dust")
  
	event.get("twilightforest:portal/gems").add("kubejs:twilight_diamond")
  
	event.get("kubejs:coal_dust").add("mekanism:dust_coal")
	event.get("kubejs:coal_dust").add("mekanism:dust_charcoal")
  
	event.get("forge:ingots/nickel").remove("immersiveengineering:ingot_nickel")
	event.get("forge:ingots/nickel").remove("exnihilosequentia:nickel_ingot")
	event.get("forge:ingots/lead").remove("immersiveengineering:ingot_lead")
	event.get("forge:ingots/lead").remove("exnihilosequentia:lead_ingot")
	event.get("forge:ingots/silver").remove("immersiveengineering:ingot_silver")
	event.get("forge:ingots/silver").remove("exnihilosequentia:silver_ingot")
	event.get("forge:ingots/uranium").remove("immersiveengineering:ingot_uranium")
	event.get("forge:ingots/uranium").remove("exnihilosequentia:uranium_ingot")
	event.get("forge:ingots/constantan").remove("immersiveengineering:ingot_constantan")
	event.get("forge:ingots/electrum").remove("immersiveengineering:ingot_electrum")
	event.get("forge:ingots/steel").remove("immersiveengineering:ingot_steel")
	event.get("forge:ingots/steel").remove("beyond_earth:steel_ingot")
	event.get("forge:ingots/tin").remove("exnihilosequentia:tin_ingot")
	event.get("forge:ingots/aluminum").remove("exnihilosequentia:aluminum_ingot")
	event.get("forge:ingots/zinc").remove("exnihilosequentia:zinc_ingot")
  
	event.get("forge:nuggets/nickel").remove("immersiveengineering:nugget_nickel")
	event.get("forge:nuggets/lead").remove("immersiveengineering:nugget_lead")
	event.get("forge:nuggets/silver").remove("immersiveengineering:nugget_silver")
	event.get("forge:nuggets/uranium").remove("immersiveengineering:nugget_uranium")
	event.get("forge:nuggets/constantan").remove("immersiveengineering:nugget_constantan")
	event.get("forge:nuggets/electrum").remove("immersiveengineering:nugget_electrum")
	event.get("forge:nuggets/steel").remove("immersiveengineering:nugget_steel")
	event.get("forge:nuggets/copper").remove("immersiveengineering:nugget_copper")
	event.get("forge:nuggets/copper").remove("exnihilosequentia:copper_nugget")
  
	event.get("forge:plates/nickel").remove("immersiveengineering:plate_nickel")
	event.get("forge:plates/lead").remove("immersiveengineering:plate_lead")
	event.get("forge:plates/silver").remove("immersiveengineering:plate_silver")
	event.get("forge:plates/constantan").remove("immersiveengineering:plate_constantan")
	event.get("forge:plates/electrum").remove("immersiveengineering:plate_electrum")
	event.get("forge:plates/steel").remove("immersiveengineering:plate_steel")
	event.get("forge:plates/copper").remove("immersiveengineering:plate_copper")
	event.get("forge:plates/iron").remove("immersiveengineering:plate_iron")
	event.get("forge:plates/gold").remove("immersiveengineering:plate_gold")
  
	event.get("forge:plates/iron").remove("beyond_earth:iron_plate")
  
	event.get("forge:dusts/nickel").remove("immersiveengineering:dust_nickel")
	event.get("forge:dusts/lead").remove("immersiveengineering:dust_lead")
	event.get("forge:dusts/silver").remove("immersiveengineering:dust_silver")
	event.get("forge:dusts/uranium").remove("immersiveengineering:dust_uranium")
	event.get("forge:dusts/constantan").remove("immersiveengineering:dust_constantan")
	event.get("forge:dusts/electrum").remove("immersiveengineering:dust_electrum")
	event.get("forge:dusts/steel").remove("immersiveengineering:dust_steel")
	event.get("forge:dusts/copper").remove("immersiveengineering:dust_copper")
	event.get("forge:dusts/iron").remove("immersiveengineering:dust_iron")
	event.get("forge:dusts/gold").remove("immersiveengineering:dust_gold")
  
	event.get("forge:gears/diamond").remove("industrialforegoing:diamond_gear")
	event.get("forge:gears/gold").remove("industrialforegoing:gold_gear")
	event.get("forge:gears/iron").remove("industrialforegoing:iron_gear")
  
	event.get("forge:ingots/lead").remove("mekanism:ingot_lead")
	event.get("forge:ingots/tin").remove("mekanism:ingot_tin")
	event.get("forge:dusts/lead").remove("mekanism:dust_lead")
	event.get("forge:dusts/tin").remove("mekanism:dust_tin")
	event.get("forge:nuggets/lead").remove("mekanism:nugget_lead")
	event.get("forge:nuggets/tin").remove("mekanism:nugget_tin")
  
	event.get("forge:storage_blocks/lead").remove("immersiveengineering:storage_lead")
	event.get("forge:storage_blocks/nickel").remove("immersiveengineering:storage_nickel")
	event.get("forge:storage_blocks/silver").remove("immersiveengineering:storage_silver")
	event.get("forge:storage_blocks/constantan").remove("immersiveengineering:storage_constantan")
	event.get("forge:storage_blocks/uranium").remove("immersiveengineering:storage_uranium")
	event.get("forge:storage_blocks/electrum").remove("immersiveengineering:storage_electrum")
  
	event.get("forge:rods/iron").remove("beyond_earth:iron_stick")
	event.get("forge:rods/iron").remove("createaddition:iron_rod")
  
	event.get("forge:dusts/desh").add("kubejs:desh_dust")
	event.get("forge:dusts/calorite").add("kubejs:calorite_dust")
	event.get("forge:dusts/ostrum").add("kubejs:ostrum_dust")
	event.get("forge:dusts/brass").add("kubejs:brass_dust")
	event.get("forge:dusts/cobalt").add("kubejs:cobalt_dust")
	event.get("forge:dusts/zinc").add("kubejs:zinc_dust")
  
  })