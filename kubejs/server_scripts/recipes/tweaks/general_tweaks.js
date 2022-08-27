onEvent("recipes", event => {
  event.remove({ mod: "agape_space" })
  event.remove({ type: AE2("inscriber") })
  event.shaped(KJ("circuit_scrap", 2), [" A ", "ABA", " A "], { A: TE("invar_ingot"), B: ("#forge:plates/zinc") })
  event.stonecutting(AE2("silicon_press"), KJ("circuit_scrap"))
  event.stonecutting(AE2("engineering_processor_press"), KJ("circuit_scrap"))
  event.stonecutting(AE2("calculation_processor_press"), KJ("circuit_scrap"))
  event.stonecutting(AE2("logic_processor_press"), KJ("circuit_scrap"))
  
  event.remove({ output: ("ae2:silicon") })

  event.remove({ id: FD("flint_knife") })
  event.remove({ id: FD("iron_knife") })
  event.remove({ id: FD("golden_knife") })
  event.remove({ id: FD("diamond_knife") })
  event.shaped(FD("flint_knife"), ["S ", " M"], { M: MC("flint"), S: C("#rods/wooden") })
  event.shaped(FD("iron_knife"), ["S ", " M"], { M: MC("iron_ingot"), S: C("#rods/wooden") })
  event.shaped(FD("golden_knife"), ["S ", " M"], { M: MC("gold_ingot"), S: C("#rods/wooden") })
  event.shaped(FD("diamond_knife"), ["S ", " M"], { M: MC("diamond"), S: C("#rods/wooden") })

  event.remove({ output: ("beyond_earth:solar_panel") })
  event.remove({ output: ("beyond_earth:coal_generator") })

  event.remove({ id: KJ("stone_saw") })
  event.remove({ id: KJ("iron_saw") })
  event.remove({ id: KJ("diamond_saw") })
  event.shaped(KJ("stone_saw"), [
    'SAA',
    'SMA'], { M: MC("flint"), S: C("#rods/wooden"),A: KJ("stone_rod") })
  
  event.shaped(KJ("iron_saw"), [
    'SAA',
    'SMA'], { M: MC("iron_ingot"), S: C("#rods/wooden"),A: KJ("stone_rod") })
  
  event.shaped(KJ("diamond_saw"), [
    'SAA',
    'SMA'], { M: MC("diamond"), S: C("#rods/wooden"),A: KJ("stone_rod") })

 event.shaped(KJ("stone_rod"), [
      'A',
      'A'], { A: '#forge:cobblestone' })


  event.remove({ id: TC("smeltery/casting/metal/gold/coin_sand_cast") })
  event.remove({ id: TC("smeltery/casting/metal/gold/coin_gold_cast") })
  event.remove({ id: TC("smeltery/casting/metal/silver/coin_sand_cast") })
  event.remove({ id: TC("smeltery/casting/metal/silver/coin_gold_cast") })

  event.remove({ id: ("twilightforest:uncrafting_table") })

  event.remove({ id: "mekanism:control_circuit/advanced" })
  event.remove({ id: "mekanism:control_circuit/elite" })
  event.remove({ id: "mekanism:chemical_tank/basic" })
  event.remove({ id: "mekanism:atomic_disassembler" })
  event.remove({ id: "mekanism:electric_bow" })
  event.remove({ id: "mekanismgenerators:solar_panel" })
  event.remove({ id: "mekanismgenerators:generator/solar" })
  event.remove({ id: "mekanismgenerators:generator/wind" })
  event.remove({ id: "mekanismgenerators:generator/advanced_solar" })
  event.remove({ id: "mekanism:energy_tablet" })
  event.remove({ id: "mekanism:metallurgic_infusing/alloy/atomic" })

  event.remove({ id: "beyond_earth:rover" })
  event.remove({ id: "beyond_earth:space_suit" })
  event.remove({ id: "beyond_earth:space_leggings" })
  event.remove({ id: "beyond_earth:space_boots" })

  event.remove({ id: "createoreexcavation:drilling/redstone" })

  event.replaceInput("#forge:gold_plates", "create:golden_sheet")
  event.replaceInput("#forge:iron_plates", "create:iron_sheet")
  event.replaceInput("#forge:copper_plates", "create:copper_sheet")
  event.replaceInput("#forge:plates/gold", "create:golden_sheet")
  event.replaceInput("#forge:plates/iron", "create:iron_sheet")
  event.replaceInput("#forge:plates/copper", "create:copper_sheet")



  event.remove({ id: CR("splashing/gravel") })
  event.recipes.createSplashing([
    Item.of(MC("iron_nugget", 3)).withChance(0.25),
    Item.of(MC("flint")).withChance(0.25)
  ], "minecraft:gravel")

  event.remove({ id: CR("splashing/red_sand") })
  event.recipes.createSplashing([
    Item.of(MC("gold_nugget", 2)).withChance(0.125),
    Item.of(MC("dead_bush")).withChance(0.05)
  ], "minecraft:red_sand")

  event.remove({ output: MC("hopper") })
  event.shaped(MC("hopper"), [
    "T T",
    "S S",
    " S "
  ], {
    T: "thermal:tin_ingot",
    S: "create:iron_sheet"
  })
 
  event.remove({ output: CR("propeller") })

  event.remove({ output: CR("item_vault") })
  event.shaped(CR("item_vault"), [
    "L",
    "B",
    "L"
  ], {
    L: "thermal:lead_plate",
    B: MC("barrel")
  })
  event.remove({ output: MC("shulker_box") })
  event.shaped(MC("shulker_box"), [
    "L",
    "B",
    "L"
  ], {
    L: MC("shulker_shell"),
    B: MC("barrel")
  })
  event.remove({ output: AP("plating_block") })

  event.remove({ output: TC('obsidian_pane') })
  event.shaped(TC('obsidian_pane', 8), [
    'SSS',
    'SSS'
  ], {
    S: MC('obsidian')
  })

  event.replaceInput(AP('withered_bone'), TC('necrotic_bone'))


  event.remove({ id: TC('compat/create/andesite_alloy_zinc') })
  event.remove({ id: TC('compat/create/andesite_alloy_iron') })

  event.replaceInput({ output: TC("seared_duct") }, TC("cobalt_ingot"), CR("brass_ingot"))
  event.replaceInput({ output: TC("scorched_duct") }, TC("cobalt_ingot"), CR("brass_ingot"))

  event.replaceInput({ output: TC("scorched_drain") }, TC("obsidian_pane"), CR("sturdy_sheet"))
  event.replaceInput({ output: TC("scorched_chute") }, TC("obsidian_pane"), CR("sturdy_sheet"))

  event.remove({ output: "naturescompass:naturescompass" })
  event.remove({ output: "explorerscompass:explorerscompass" })
  donutCraft(event, "naturescompass:naturescompass", MC("compass"), MC("#leaves"))

  event.remove({ output: "create:sail_frame" })
  event.remove({ output: "create:white_sail" })
  event.shapeless("create:sail_frame", ["create:white_sail"])
  event.shaped("2x create:white_sail", [
    "SSS",
    "NAN",
    "SSS"
  ], {
    A: "#minecraft:wool",
    N: "minecraft:iron_nugget",
    S: "minecraft:stick"
  })

  event.replaceInput({ id: CR("crafting/kinetics/brass_hand") }, "#c:plates/brass", CR("golden_sheet"))

  event.recipes.thermal.smelter(
		[KJ("purified_sand")],
		[KJ("rough_sand"), TE("earth_charge")])
		.energy(5000)
  
  event.recipes.thermal.smelter(
    [AE2("silicon")],
    [KJ("silicon_compound"), TE("ice_charge")])
    .energy(5000)

    let blitz = TE("blitz_powder")
    let basalz = TE("basalz_powder")
    let blizz = TE("blizz_powder")
    event.recipes.createEmptying([KJ("rough_sand"), Fluid.of(KJ("fine_sand"), 500)], KJ("sand_ball"))
    event.recipes.createCrushing([Item.of(basalz, 1), Item.of(basalz, 1).withChance(.5)], TE("basalz_rod"))
    event.recipes.createCrushing([Item.of(blitz, 1), Item.of(blitz, 1).withChance(.5)], TE("blitz_rod"))
    event.recipes.createCompacting(TE("ice_charge"), [blizz, blizz, blizz, blizz, blizz, blizz, blizz, blizz])
    event.recipes.createCompacting(TE("earth_charge"), [basalz, basalz, basalz, basalz, basalz, basalz, basalz, basalz])
    event.recipes.createCrushing([Item.of(AE2("singularity")).withChance(1)], CR("crushing_wheel")).processingTime(250)
    event.recipes.createCompacting(KJ("matter_plastics"), [AE2("matter_ball"), AE2("matter_ball"), AE2("matter_ball"), AE2("matter_ball"), AE2("matter_ball"), AE2("matter_ball"), AE2("matter_ball"), AE2("matter_ball"), AE2("matter_ball")]).superheated()
    event.recipes.createMilling([AE2("sky_dust"), AE2("sky_stone_block")], AE2("sky_stone_block")).processingTime(1000)
    
    event.shaped(KJ("chromatic_resonator"), [
      " R ",
      "R S",
      "LS "
    ], {
      R: KJ("ruby"),
      L: TE("lead_ingot"),
      S: KJ("sapphire")
    })

    event.shaped(KJ("laser_blaster"), [
      "RL ",
      "LAS",
      " LL"
    ], {
      L: CR("sturdy_sheet"),
      R: ("thermal:flux_magnet"),
      A: ("ae2:entropy_manipulator"),
      S: ("industrialforegoing:laser_lens9")
    })

    event.shaped(KJ("screwdriver"), [
      "R  ",
      " RS",
      " SL"
    ], {
      R: '#forge:rods/iron',
      L: '#forge:gears/iron',
      S: '#forge:dyes/blue'
    })



    event.shaped(Item.of('playingcards:card_deck', '{SkinID:0b}'), [
      "RRR",
      "RSR",
      "RRR"
    ], {
      R: '#forge:paper',
      S: '#forge:dyes/blue'
    })

    event.shaped(Item.of('playingcards:card_deck', '{SkinID:1b}'), [
      "RRR",
      "RSR",
      "RRR"
    ], {
      R: '#forge:paper',
      S: '#forge:dyes/red'
    })

    event.shaped(Item.of('playingcards:card_deck', '{SkinID:2b}'), [
      "RRR",
      "RSR",
      "RRR"
    ], {
      R: '#forge:paper',
      S: '#forge:dyes/black'
    })

    event.shaped(Item.of('playingcards:card_deck', '{SkinID:3b}'), [
      "RRR",
      "RSR",
      "RRR"
    ], {
      R: '#forge:paper',
      S: '#forge:raw_pork'
    })
  
  
  event.remove({ output: ("mekanism:steel_casing") })
  event.shaped(("mekanism:steel_casing"), [
    "ASA",
    "SCS",
    "ASA"
  ], {
    C: KJ("invar_casing"),
    A: 'beyond_earth:compressed_steel',
    S: KJ("inductive_mechanism")
  })

  event.remove({ output: TE('machine_frame') })
	event.shaped(TE('machine_frame'), [
		'SAS',
		'ACA',
		'SAS'
	], {
		C: KJ('invar_casing'),
		S: '#forge:gears/copper',
    A: KJ("inductive_mechanism")
	})
  
  event.remove({ output: ("avaritia:crystal_matrix") })
  event.shaped(("avaritia:crystal_matrix"), [
    "AAA",
    "ACA",
    "AAA"
  ], {
    C: CR("refined_radiance_casing"),
    A: KJ("crystalmatrix_mechanism")
  })

  event.remove({ output: ("avaritia:extreme_crafting_table") })
  event.shaped(("avaritia:extreme_crafting_table"), [
    "SSS",
    "SCS",
    "SSS"
  ], {
    C: "avaritia:double_compressed_crafting_table",
    S: "avaritia:crystal_matrix"
  })

  event.shaped(('avaritia:neutronium_gear'), [
		' S ',
		'SCS',
		' S '
	], {
		C: 'avaritia:neutron_nugget',
		S: 'avaritia:neutronium_ingot'
	})

  event.remove({ output: ('avaritia:diamond_lattice') })
  event.shaped(('avaritia:diamond_lattice'), [
		'SAS',
		'ACA',
		'SAS'
	], {
		C: '#forge:gems/diamond',
    A: '#forge:gears/diamond',
		S: 'beyond_earth:compressed_calorite'
	})

  event.remove({ output: ('forbidden_arcanus:dark_nether_star') })
  event.shaped(('forbidden_arcanus:dark_nether_star'), [
		' S ',
		'SCS',
		' S '
	], {
		C: 'minecraft:nether_star',
		S: 'create:shadow_steel'
	})

  event.recipes.createPressing([TE('lead_plate')], TE('lead_ingot'))
	event.recipes.createPressing([TE('enderium_plate')], TE('enderium_ingot'))
	event.recipes.createPressing([TE('lumium_plate')], TE('lumium_ingot'))
	event.recipes.createPressing([TE('signalum_plate')], TE('signalum_ingot'))
	event.recipes.createPressing([TE('constantan_plate')], TE('constantan_ingot'))
  
  event.recipes.createMixing(Item.of("forbidden_arcanus:stella_arcanum", 1), ["thermal:sulfur", ["ae2:sky_stone_block"]])
  event.recipes.createMixing(Item.of("forbidden_arcanus:xpetrified_ore", 1), ["create:experience_nugget", ["minecraft:andesite"]])
  event.recipes.createMixing(Item.of("forbidden_arcanus:arcane_crystal_ore", 1), ["#forge:normal_stone", ["ae2:certus_quartz_crystal"]])
  event.recipes.createMixing(Item.of("forbidden_arcanus:runic_stone", 1), ["#forge:normal_stone", ["#botania:petals"]])
  event.recipes.createMixing(Item.of("forbidden_arcanus:mysterywood_sapling", 1), ["#forge:sapling", ["forbidden_arcanus:arcane_crystal_dust"]])
  event.recipes.createMixing(Item.of("forbidden_arcanus:cherrywood_sapling", 1), ["#forge:sapling", ["#forge:dyes/pink"]])
  event.recipes.createMixing(Item.of("forbidden_arcanus:growing_edelwood", 1), ["#forge:sapling", ["forbidden_arcanus:corrupti_dust"]])
  event.recipes.createMixing(Item.of("forbidden_arcanus:fungyss", 1), ["#forge:sapling", ["#forge:mushrooms"]])

  event.recipes.createMixing(Item.of("buddycards:luminis_ore", 1), ["#forge:cobblestone", ["#forge:dusts/lumium"]])
  event.recipes.createMixing(Item.of("buddycards:buddycard_pack_base", 1), ["minecraft:grass_block", ["buddycards:luminis_crystal"]])
  event.recipes.createMixing(Item.of("buddycards:buddycard_pack_nether", 1), ["minecraft:netherrack", ["buddycards:luminis_crystal"]])
  event.recipes.createMixing(Item.of("buddycards:buddycard_pack_end", 1), ["minecraft:end_stone", ["buddycards:luminis_crystal"]])

  event.recipes.createMixing(Item.of("botania:white_double_flower", 1), ["#minecraft:flowers", ["forbidden_arcanus:arcane_crystal_dust"]])

  event.recipes.createMixing(Item.of("thermal:frost_melon_seeds", 1), ["minecraft:melon_seeds", ["thermal:ice_charge"]])
  
  event.recipes.createMixing(Item.of("tconstruct:earth_slime_grass_seeds", 1), ["#forge:seeds", ["minecraft:slime_ball"]])
  event.recipes.createMixing(Item.of("tconstruct:sky_slime_grass_seeds", 1), ["#forge:seeds", ["tconstruct:sky_slime_ball"]])
  event.recipes.createMixing(Item.of("tconstruct:blood_slime_grass_seeds", 1), ["#forge:seeds", ["tconstruct:blood_slime_ball"]])
  event.recipes.createMixing(Item.of("tconstruct:ender_slime_grass_seeds", 1), ["#forge:seeds", ["tconstruct:ender_slime_ball"]])
  
  event.recipes.createMixing(Item.of("thermal:blitz_rod", 1), ["#forge:sand", ["cloudstorage:cloud"]])
  event.recipes.createMixing(Item.of("cloudstorage:spawn_egg_badloon", 1), ["#forge:eggs", ["thermal:cured_rubber"], ["#forge:dyes/red"]])


  event.remove({ output: ('thermal:enderium_dust') })
  event.remove({ output: ('thermal:enderium_ingot') })
  event.recipes.thermal.smelter(TE("enderium_ingot"), ["#forge:ingots/silver", "minecraft:chorus_fruit", MC("ender_pearl")]).energy(10000)
	event.recipes.thermal.smelter(TE("enderium_ingot"), ["#forge:ingots/silver", "minecraft:chorus_fruit", AE2("ender_dust", 4)]).energy(10000)
  event.recipes.thermal.smelter(TE("enderium_dust"), ["#forge:ingots/silver", "minecraft:chorus_fruit", AE2("ender_dust", 2)]).energy(10000)
	event.recipes.thermal.smelter(KJ("abstruse_mechanism"), [KJ("inductive_mechanism"), TE("enderium_ingot")]).energy(2000)

  event.recipes.create.mixing('create:creative_blaze_cake', [
    'createaddition:chocolate_cake',
    'avaritia:ultimate_stew',
    'avaritia:star_fuel',
    'avaritia:infinity'
  ]).superheated().processingTime(6000).id('kubejs:create/creative_blaze_cake')
  
  event.remove({ output: ('beyond_earth:oxygen_mask') })
  event.shaped(('beyond_earth:oxygen_mask'), [
		'BBB',
		'BCB',
		'BAB'
	], {
		C: 'thermal:hazmat_helmet',
		B: 'kubejs:matter_plastics',
    A: '#thermal:glass/hardened',
	})

  


  event.remove({ output: ('projecte:philosophers_stone') })
  event.shaped(('projecte:philosophers_stone'), [
		' S ',
		'SCS',
		' S '
	], {
		C: 'avaritia:neutronium_compressor',
		S: 'avaritia:infinity_catalyst'
	})

  event.remove({ output: ('projecte:collector_mk1') })
  event.shaped(('projecte:collector_mk1'), [
		'BAB',
		'DCD',
		'BSB'
	], {
		D: 'create:creative_motor',
    C: 'avaritia:crystal_matrix',
		B: 'mekanism:ingot_refined_glowstone',
    A: 'avaritia:infinity_ingot',
    S: 'industrialforegoing:resourceful_furnace'
	})
  
  event.shaped(('avaritia:star_fuel'), [
		'BAB',
		'BCB',
		'BAB'
	], {
		C: 'projecte:klein_star_omega',
		B: 'projecte:aeternalis_fuel',
    A: 'avaritia:infinity_catalyst',
	})
  
  event.remove({ output: ('projecte:transmutation_tablet') })
  event.shaped(('projecte:transmutation_tablet'), [
		'BAB',
		'BCB',
		'BAB'
	], {
		C: 'projecte:transmutation_table',
		B: 'tconstruct:cobalt_block',
    A: 'create:cogwheel',
	})

  event.remove({ output: ('projecte:low_covalence_dust') })
  event.shaped(('projecte:low_covalence_dust'), [
		'BAB',
		'BCB',
		'BAB'
	], {
		C: 'forbidden_arcanus:eternal_stella',
		B: '#forge:cobblestone',
    A: 'avaritia:diamond_lattice',
	})

  event.remove({ output: ('beyond_earth:nasa_workbench') })
  event.recipes.createMechanicalCrafting(Item.of("beyond_earth:nasa_workbench", 1), [
    " AADAA ",
    "EFCGCFE",
    "BHCCCHB",
    "EECCCEE",
    "BBBBBBB"
  ], {
    A: 'create:mechanical_arm',
    B: 'mekanism:steel_casing',
    C: 'kubejs:computation_matrix',
    D: 'ae2:wireless_crafting_terminal',
    E: 'thermal:signalum_plate',
    F: 'thermal:signalum_gear',
    G: 'ae2:item_storage_cell_4k',
    H: 'mekanism:ultimate_control_circuit'
  })
  
  
  event.remove({ output: ('mekanismgenerators:heat_generator') })
  event.shaped(('mekanismgenerators:heat_generator'), [
		'BAB',
		'BCB'
	], {
		C: 'thermal:dynamo_stirling',
		B: 'mekanism:steel_casing',
    A: 'thermal:dynamo_magmatic',
	})

  event.remove({ output: ('projecte:dark_matter') })
  event.shaped(('projecte:dark_matter'), [
		'BAB',
		'ACA',
		'BAB'
	], {
		C: 'create:shadow_steel_casing',
		B: 'projecte:aeternalis_fuel',
    A: 'create:shadow_steel',
	})

event.shaped(('buddycards:luminis_sleeve'), [
		'CA',
		'AC'
	], {
		C: 'buddycards:luminis_panel',
    A: '#forge:glass_panes'
	})
  
  event.recipes.createMechanicalCrafting(Item.of(CR("creative_motor"), 1), [
    "AAADAAA",
    "AACBCAA",
    "DABBBAE",
    "AACBCAA",
    "AAADAAA"
  ], {
    A: "avaritia:infinity",
    B: "avaritia:star_fuel",
    C: "avaritia:neutronium_gear",
    D: "projecte:watch_of_flowing_time",
    E: "create:shaft"
  })

  
  event.remove({ output: ('projecte:transmutation_table') })
  event.recipes.createMechanicalCrafting(Item.of("projecte:transmutation_table", 1), [
    "AADDDAA",
    "ADDDDDA",
    "DDBBBDD",
    "DDCBCDD",
    "DDBBBDD",
    "AADDDAA",
    "AADDDAA"
  ], {
    A: "avaritia:neutronium",
    B: "avaritia:star_fuel",
    C: "occultism:chalk_purple",
    D: "avaritia:infinity",
  })

  event.remove({ output: ('avaritia:infinity') })
  event.recipes.createMechanicalCrafting(Item.of("avaritia:infinity", 1), [
    "AAAAAAA",
    "ADDDDDA",
    "ADDCDDA",
    "ADCBCDA",
    "ADDCDDA",
    "ADDDDDA",
    "AAAAAAA"
  ], {
    A: "avaritia:infinity_ingot",
    B: "kubejs:computation_matrix",
    C: "create:refined_radiance_casing",
    D: "avaritia:neutronium",
  })


    let dyes = [MC("orange_dye"), MC("magenta_dye"), MC("light_blue_dye"), MC("yellow_dye"), MC("lime_dye"), MC("pink_dye"), MC("cyan_dye"), MC("purple_dye"), MC("blue_dye"), MC("brown_dye"), MC("green_dye"), MC("red_dye")]
  event.recipes.createCompacting("1x " + KJ("dye_entangled_singularity"), [dyes, Item.of(AE2("quantum_entangled_singularity"), 1)])
  event.recipes.createConversion([AE2("quantum_entangled_singularity")], AE2("singularity"))
  event.recipes.createCrushing([
    Item.of(AE2("red_paint_ball"), 1).withChance(.90),
    Item.of(AE2("yellow_paint_ball"), 1).withChance(.80),
    Item.of(AE2("green_paint_ball"), 1).withChance(.70),
    Item.of(AE2("blue_paint_ball"), 1).withChance(.60),
    Item.of(AE2("magenta_paint_ball"), 1).withChance(.50)],
    KJ("dye_entangled_singularity")).processingTime(50)

  event.recipes.createMechanicalCrafting(CR("chromatic_compound"), [
    "AA",
    "AA"
  ], {
    A: AE2("magenta_paint_ball")
  })
  
  event.remove({ output: ('thermal:invar_ingot') })
  event.blasting(KJ("invar_compound"), KJ("nickel_compound"))
  let s = KJ("invar_compound")
  event.recipes.createSequencedAssembly([
    TE("invar_ingot"),
  ], KJ("invar_compound"), [
    event.recipes.createPressing(s, s)
  ]).transitionalItem(s)
    .loops(16)
    .id("thermal:invar_ingot")

  event.recipes.createSequencedAssembly([
    TE("lead_plate"),
  ], TE("lead_ingot"), [
      event.recipes.createPressing(s, s)
  ]).transitionalItem(s)
    .loops(2)
    .id("thermal:lead_plate")

    let x = "avaritia:crystal_matrix_ingot"
  event.recipes.createSequencedAssembly([
    KJ("crystal_matrix_sheet"),
  ], "avaritia:crystal_matrix_ingot", [
    event.recipes.createPressing(x, x)
  ]).transitionalItem(x)
    .loops(48)
    .id("kubejs:crystal_matrix_sheet")

  wood_types.forEach(wood => {
    if (wood.startsWith("tconstruct")) {
      event.recipes.createCutting("2x " + wood + "_planks_slab", wood + "_planks").processingTime(150)
    } 
  
  })
  wood_types.forEach(wood => {
    if (wood.startsWith("minecraft")) {
      event.recipes.createCutting("2x " + wood + "_slab", wood + "_planks").processingTime(150)
    } 
  
  })

  
})