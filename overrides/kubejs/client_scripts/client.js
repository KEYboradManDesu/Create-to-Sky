// priority: 0

onEvent('jei.hide.items', event => {
	event.hide('ae2:facade')
	event.hide(`#buddycards:cards`)
	event.hide(`#buddycards:gummy_cards`)
})

onEvent('jei.subtypes', event => {
	event.useNBT('advancedrocketry:planet_id_chip')
})

onEvent('jei.hide.fluids', event => {
})

onEvent('jei.add.items', event => {
	event.add('thermal:ruby')
	event.add('thermal:ruby_dust')
	event.add('thermal:ruby_ore')
	event.add('thermal:apatite_ore')
	event.add('thermal:sapphire')
	event.add('thermal:sapphire_dust')
	event.add('thermal:sapphire_ore')


})

onEvent('item.tooltip', tooltip => {
	let holds = (id, slots) => tooltip.add("metalbarrels:" + id + "_barrel", [`§7${slots} 格`])
	let main_assembly = (id, stage) => tooltip.add(id, [`§7主目标: ${stage == "5A" ? "§6最终章" : "§6章节 " + stage}`, '§8思考一下如何自动化制作此物品'])
	let bonus_assembly = (id, stage) => tooltip.add(id, [`§7附加目标: §6章节 ${stage}`])
	let not_consumed = (id, stage) => tooltip.add(id, [`§7在§7装配线§7中不消耗`])
	let ore = (id, y1, y2) => tooltip.add(id, [`§o§7生成高度：Y= §6${y1} §7至 §6${y2}`])
	let collection = (id, stage) => tooltip.add(id, [`附加目标：§6收藏品`])
	
	collection('kubejs:rickroll')
	collection('kubejs:twilight_diamond')
	collection('minecraft:dragon_head')
	collection('minecraft:dragon_egg')
	collection('minecraft:conduit')
	collection('aquaculture:neptunes_bounty')
	collection('alexsmobs:void_worm_effigy')
	collection('kubejs:sweet_mechanism')
	collection('grimoireofgaia:doll_maid')

	ore("forbidden_arcanus:arcane_crystal_ore", -40, 14)
	ore("forbidden_arcanus:xpetrified_ore", -6, 35)

	ore("thermal:cinnabar_ore", -16, 48)
	ore("thermal:niter_ore", -16, 64)
	ore("thermal:nickel_ore", -40, 120)
	ore("thermal:ruby_ore", -144, 16)
	ore("thermal:sapphire_ore", -144, 16)
	ore("thermal:lead_ore", -60, 40)
	ore("thermal:silver_ore", -60, 40)
	ore("thermal:apatite_ore", -16, 96)
	ore("thermal:sulfur_ore", -16, 32)
	ore("thermal:tin_ore", -20, 60)

	ore("create:zinc_ore", -63, 70)

	ore("minecraft:coal_ore", 136, 256)
	ore("minecraft:iron_ore", 1, 64)
	ore("minecraft:lapis_ore", -32, 32)
	ore("minecraft:gold_ore", 80, 384)
	ore("minecraft:diamond_ore", -144, 16)
	ore("minecraft:redstone_ore", -64, 15)
	ore("minecraft:copper_ore", -16, 112)
	ore("minecraft:emerald_ore", -16, 480)

	holds('copper', 5 * 9)
	holds('iron', 6 * 9)
	holds('silver', 8 * 9)
	holds('gold', 9 * 9)

	bonus_assembly('kubejs:handmade_mechanism', "0")
	main_assembly('kubejs:kinetic_mechanism', "1")
	bonus_assembly('kubejs:sealed_mechanism', "1A")
	bonus_assembly('create_sa:heat_engine', "1A")
	bonus_assembly('kubejs:living_mechanism', "§b植物魔法1§r")
	bonus_assembly('kubejs:redstring_mechanism', "§b植物魔法2§r")
	bonus_assembly('kubejs:corporea_mechanism', "§b植物魔法3§r")
	bonus_assembly('create_sa:hydraulic_engine', "1A")
	bonus_assembly('immersiveengineering:component_iron', "1A")
	bonus_assembly('immersiveengineering:component_steel', "1A")
	main_assembly('create:precision_mechanism', "2")
	bonus_assembly('kubejs:infernal_mechanism', "2A")
	bonus_assembly('kubejs:integrated_circuit', "2A")
	bonus_assembly('create_sa:steam_engine', "2A")
	bonus_assembly('kubejs:sturdy_mechanism', "2A")
	main_assembly('kubejs:inductive_mechanism', "3")
	bonus_assembly('kubejs:abstruse_mechanism', "3A")
	main_assembly('kubejs:calculation_mechanism', "4")
	main_assembly('kubejs:crystalmatrix_mechanism', "5")
	main_assembly('kubejs:creative_mechanism', "5A")

	not_consumed('kubejs:stone_saw')
	not_consumed('kubejs:iron_saw')
	not_consumed('kubejs:diamond_saw')
	not_consumed('kubejs:netherite_saw')
	not_consumed('kubejs:screwdriver')
	not_consumed('kubejs:chromatic_resonator')
	not_consumed('kubejs:flash_drive')
	not_consumed('kubejs:maga_screwdriver')
	not_consumed('kubejs:laser_blaster')
	not_consumed('kubejs:rubber_duck')
	not_consumed('reliquary:mercy_cross')
	not_consumed('reliquary:ender_staff')

	global.substrates[0].forEach(e => tooltip.add(e.id, [`§8类型： §7火成`]));
	global.substrates[1].forEach(e => tooltip.add(e.id, [`§8类型： §7草本`]));
	global.substrates[2].forEach(e => tooltip.add(e.id, [`§8类型： §7不稳定`]));
	global.substrates[3].forEach(e => tooltip.add(e.id, [`§8类型： §7晶化`]));
	global.substrates[4].forEach(e => tooltip.add(e.id, [`§8类型： §7金属`]));
	global.substrates[5].forEach(e => tooltip.add(e.id, [`§8类型： §7宝石`]));
	global.substrates[6].forEach(e => tooltip.add(e.id, [`§8类型： §7催化剂`]));

	tooltip.add("minecraft:redstone_ore", [`§7在本整合包中无法从自然获得`]);
	tooltip.add("kubejs:incomp_living_mechanism", [`§b下一步：注魔`]);
	tooltip.add("kubejs:protein_bar", [`§7快速补充能量，适合健身人士食用`]);
	tooltip.add("structurescompass:structures_compass", [`§7右键以激活`]);
	tooltip.add("magicfeather:magicfeather", [`§6在信标范围内给予你创造飞行的能力`]);
	tooltip.add("reliquary:alkahestry_tome", [`§6不能在动力合成中使用`]);
	tooltip.add("create:super_glue", [`§7在§7装配线§7中不消耗，需要漏斗才能放入目标容器`]);
	tooltip.add("kubejs:good_idea", [`§6可用于兑换绝妙发明`]);
	tooltip.add("kubejs:createcoin", [`§7新型加密货币，相比于比特币更稳定`]);
	tooltip.add("exnihilosequentia:end_cake", [`§7食用后将传送至末地`]);
	tooltip.add("beyond_earth:oil_bucket", [`§7需要加热提纯至工业石油`]);
	tooltip.add("cookingforblockheads:sink", [`§7世上最小的无限水`]);
	tooltip.add("kubejs:chorus_chrome", [`§7适合用来磨牙`]);
	tooltip.add("kubejs:sweet_mechanism", [`§7全宇宙最甜蜜的构件`]);
	tooltip.add("avaritia:cosmic_meatballs", [`§7全是科技与狠活`]);
	tooltip.add("avaritia:endest_pearl", [`§6易燃易爆，十分危险！`]);
	tooltip.add("grimoireofgaia:doll_maid", [`§7Mic女仆装`]);
	tooltip.add("kubejs:protein_bar", [`§7Mic最爱吃的品牌`]);

	tooltip.add("kubejs:matrix_sheet", [`§7暂时没有用处`]);

	tooltip.add("kubejs:box_ammo", [`§7内装有32发全威力弹药`]);
	tooltip.add("kubejs:box_ammo", [`§7罗德岛永恒枪械工坊鼎力赞助`]);

	tooltip.add("kubejs:box_nails", [`§7内装有16颗钢钉`]);
	tooltip.add("kubejs:box_nails", [`§7罗德岛永恒枪械工坊鼎力赞助`]);

	tooltip.add("kubejs:blaze_brass", [`§7一种烈焰催化剂，也可以当成金属使用`]);
	tooltip.add("kubejs:neutronium_drive_hyper_dense", [`§8§o最苦的卡片...§r`]);
	tooltip.add("kubejs:crushed_neutronium_drive_hyper_dense", [`§8§o修复我...§r`]);
	tooltip.add("kubejs:graphics_card_t2", [`§7战术核显卡`]);
	tooltip.add("minecraft:end_portal_frame", [`§6可被扳手强行拆除，不会返还`]);

	tooltip.add("nethersdelight:propelplant_cane", [`§6使用小刀破坏枪药草茎获得`]);

	tooltip.add("pipez:energy_pipe", [`§7潜行右键时：`, `§7标记 §f输入位置`, `§7使用 §f扳手 §7更改连接方式。`]);

	tooltip.add("kubejs:accellerator_redstone", ["§7在混沌炼金的探索中(§6暂未完成§r):", "  §6返回一个 §e对应的 §6反应物",
		"  §6若该反应物在 §e不正确 §6的格子里，那么它不会被消耗"]);
	tooltip.add("kubejs:accellerator_glowstone", ["§7在混沌炼金的探索中(§6暂未完成§r):", "  §6返回一个 §e对应的 §6反应物",
		"  §6若该反应物在 §e正确 §6的格子里，那么它不会被消耗"]);

	for (i = 0; i < 15; i++)
		tooltip.add(`kubejs:failed_alchemy_${i}`, [
			`§7放入离心分离机来辨别(§6暂未完成§r):`,
			"",
			"§6返回物品：",
			"- 灰烬 §7表示每一个不正确的材料",
			"- 红石 §7表示每一个正确的材料 §7在不正确的格子里。",
			"- 荧石 §7表示每一个正确的材料 §7在正确的格子里"
		])
})

onEvent('jei.information', event => {

	let catalyst = (name, me) =>
		[
			`通过§5炼金镭射§0找到四种§9${me ? name : name + " §0反应物"}§9正确的配方§0。`, " ",
			`§81.§0 将漏斗矿车的前4个格子都使用 §9${me ? name : name + " §0反应物"}§0占满`,
			`§82.§0 对着物品激活§5炼金镭射§0，然后你就会发现§9${me ? me : name + " §9催化剂"}§0，或是一些指向正确配方的§9提示§0`, " ",
			"§8注：§0正确的配方可能含有物品§9重复§0",
			"§8注：§0正确的配方§9因世界而异§0",
			"§8可选项：§0 在矿车的第5格放§9红石促成剂§0或§9荧石促成剂§0获取§9额外提示§0",
		]

	event.add('kubejs:substrate_igneous', catalyst("火成"))
	event.add('kubejs:substrate_herbal', catalyst("草本"))
	event.add('kubejs:substrate_volatile', catalyst("不稳定"))
	event.add('kubejs:substrate_crystal', catalyst("晶化"))
	event.add('kubejs:substrate_metal', catalyst("金属"))
	event.add('kubejs:substrate_gem', catalyst("宝石"))

	event.add('kubejs:substrate_chaos', catalyst("催化剂", "混沌催化剂").concat([
		" ", "§8用法：§0", "使用§5炼金镭射§0混合§9混沌催化剂§0和任意数量的同种§9反应物§0时，会将该反应物§9嬗变§0成其它的反应物。每个世界都有§9不同的§0嬗变配方。(§6暂未完成§r)"
	]))
})