let modpackId = "cabricality"

let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith("#") ? "#" : "") + domain + ":" + id.replace("#", "")
let CR = (id, x) => MOD("create", id, x)
let MC = (id, x) => MOD("minecraft", id, x)
let KJ = (id, x) => MOD("kubejs", id, x)
let C = (id, x) => MOD("forge", id, x)
let F = (id, x) => MOD("fabric", id, x)
let IV = (id, x) => MOD("indrev", id, x)
let AE2 = (id, x) => MOD("ae2", id, x)
let KB = (id, x) => MOD("kibe", id, x)
let PMD = (id, x) => MOD("promenade", id, x)
let AP = (id, x) => MOD("architects_palette", id, x)
let FD = (id, x) => MOD("farmersdelight", id, x)

onEvent("item.registry", event => {
	//	Mechanism
	let registerMechanism = (name, localName, rarity) => {
		let id = name.toLowerCase() + "_mechanism"
		let incompleteId = "incomplete_" + id

		event.create(id)
			.texture(modpackId + ":/item/mechanism/" + id)
			.displayName(localName + "构件")
			.rarity(rarity ? rarity : RARITY_COMMON)

		event.create(incompleteId)
			.texture(modpackId + ":/item/mechanism/incomplete/" + incompleteId)
			.displayName(localName + "构件（半成品）")
			.rarity(rarity ? rarity : RARITY_COMMON)
	}
	let initMechanisms = () => {
		registerMechanism("Kinetic", "动力")
		registerMechanism("Sealed", "密封")
		registerMechanism("Infernal", "酷热", RARITY_UNCOMMON)
		registerMechanism("Sturdy", "坚实", RARITY_UNCOMMON)
		registerMechanism("Inductive", "超频", RARITY_UNCOMMON)
		registerMechanism("Abstruse", "深邃", RARITY_UNCOMMON)
		registerMechanism("Calculation", "智能", RARITY_UNCOMMON)
		registerMechanism("crystalmatrix", "晶格", RARITY_UNCOMMON)
		registerMechanism("crystalmatrixtt", "晶格3号", RARITY_UNCOMMON)
		registerMechanism("crystalmatrixt", "晶格2号", RARITY_UNCOMMON)
		registerMechanism("creative", "§d§l创世")
	}
	//	Machine Parts
	let registerMachinePart = (name, localName) => {
		let id = name.replace(" ", "_").toLowerCase()

		event.create(id)
			.texture(modpackId + ":/item/machine_part/" + id)
			.displayName(localName)
	}
	let initMachineParts = () => {
	}

	//	Tools
	let registerSaw = (materialName, materialId, durability) => {
		let id = materialId + "_saw"

		event.create(id)
			.texture(modpackId + ":item/tool/saw/" + id)
			.displayName(materialName + "手锯")
			.maxDamage(durability)

	}
	let registerToolMaterial = (material, localName, durability) => {
		let id = material.replace(" ", "_").toLowerCase()
		registerSaw(localName, id, durability)
	}
	let initToolMaterials = () => {
		registerToolMaterial("Stone", "石", 131)
		registerToolMaterial("Iron", "铁", 250)
		registerToolMaterial("Diamond", "钻石", 1561)
		registerToolMaterial("Netherite", "下界合金", 2031)
	}

	//	Other items
	let registerTypicalItem = (name, localName) => {
		let id = name.replace(" ", "_").toLowerCase()
		event.create(id)
			.texture(modpackId + ":item/" + id)
			.displayName(localName)
	}
	let initTypicalItems = () => {
		registerTypicalItem("Stone Rod", "石棍")

		event.create("screwdriver")
			.texture(modpackId + ":item/screwdriver")
			.displayName("强化螺丝刀").rarity(RARITY_UNCOMMON)
			.maxDamage(512)
		
		
		registerTypicalItem("Nickel Compound", "镶边镍锭")
		registerTypicalItem("Invar Compound", "殷钢混合物")
		registerTypicalItem("Silicon Compound", "含硅化合物")

		registerTypicalItem("Ruby", "红宝石")
		registerTypicalItem("Sapphire", "蓝宝石")

		registerTypicalItem("Sand Ball", "沙球")
		registerTypicalItem("Coke Chunk", "小块焦炭")
		registerTypicalItem("Rough Sand", "粗砂")
		registerTypicalItem("Purified Sand", "高纯砂")

		registerTypicalItem("Cobalt Dust", "钴粉")
		registerTypicalItem("Zinc Dust", "锌粉")

		registerTypicalItem("Circuit Scrap", "压印模板碎片")
		registerTypicalItem("Matter Plastics", "物质条")

		event.create("incomplete_coke_chunk")
			.texture(modpackId + ":item/incomplete_coke_chunk")
			.displayName("小块焦炭（未完成）")
		
		event.create("earth_slimy_fern_leaf")
			.texture(modpackId + ":item/fern/leaf/earth_slimy_fern_leaf")
			.displayName("史莱姆蕨叶片")

		event.create("ender_slimy_fern_leaf")
			.texture(modpackId + ":item/fern/leaf/ender_slimy_fern_leaf")
			.displayName("史莱姆蕨叶片")

		event.create("sky_slimy_fern_leaf")
			.texture(modpackId + ":item/fern/leaf/sky_slimy_fern_leaf")
			.displayName("史莱姆蕨叶片")

		event.create("earth_slimy_fern_paste")
			.texture(modpackId + ":item/fern/paste/earth_slimy_fern_paste")
			.displayName("史莱姆蕨粉末")

		event.create("ender_slimy_fern_paste")
			.texture(modpackId + ":item/fern/paste/ender_slimy_fern_paste")
			.displayName("史莱姆蕨粉末")

		event.create("sky_slimy_fern_paste")
			.texture(modpackId + ":item/fern/paste/sky_slimy_fern_paste")
			.displayName("史莱姆蕨粉末")

		event.create("empty_music_disc")
			.texture(modpackId + ":item/empty_music_disc")
			.displayName("空音乐唱片")	

		event.create("radiant_sheet")
			.texture(modpackId + ":item/radiant_sheet")
			.displayName("光辉板").rarity(RARITY_UNCOMMON)
			.glow(true)

		event.create("radiant_coil")
			.texture(modpackId + ":item/radiant_coil")
			.displayName("光辉线圈").rarity(RARITY_UNCOMMON)
			.glow(true)

		event.create("chromatic_resonator")
			.texture(modpackId + ":item/chromatic_resonator")
			.displayName("异彩共鸣器").rarity(RARITY_UNCOMMON)
			.maxDamage(512)

		event.create("laser_blaster")
			.texture(modpackId + ":item/laser_blaster")
			.displayName("炼金镭射发生器").rarity(RARITY_UNCOMMON)
			.maxDamage(512)
		
		event.create("crushed_cobalt_ore")
			.texture(modpackId + ":item/crushed/crushed_cobalt_ore")
			.displayName("粉碎钴矿石")

		event.create("dye_entangled_singularity")
			.texture(modpackId + ":item/dye_entangled_singularity")
			.unstackable()
			.displayName("异彩奇点").rarity(RARITY_UNCOMMON)

		event.create("flash_drive")
			.texture(modpackId + ":item/boot_medium")
			.displayName("闪存").rarity(RARITY_UNCOMMON)
			.maxDamage(512)

		event.create("maga_screwdriver")
			.texture(modpackId + ":item/maga_screwdriver")
			.displayName("中子螺丝刀").rarity(RARITY_UNCOMMON)
			.maxDamage(512)

		event.create("incomplete_basalz_rod")
			.texture(modpackId + ":item/incomplete_basalz_shard")
			.displayName("岩石残骸（未完成）")

		event.create("incomplete_blitz_cube")
			.texture(modpackId + ":item/incomplete_blitz_cube")
			.displayName("暴雪立方（未完成）")

		event.create("crystal_matrix_sheet")
			.texture(modpackId + ":item/crystal_matrix_sheet")
			.displayName("水晶矩阵板").rarity(RARITY_UNCOMMON)

		event.create("neutronium_sheet")
			.texture(modpackId + ":item/neutronium_sheet")
			.displayName("中子板").rarity(RARITY_UNCOMMON)


		event.create("venus_dust")
			.texture(modpackId + ":item/venus_dust")
			.displayName("金星岩粉")

		event.create("venus_quartz")
			.texture(modpackId + ":item/venus_quartz")
			.displayName("金星晶体").rarity(RARITY_UNCOMMON)

		event.create("polished_venus_quartz")
			.texture(modpackId + ":item/polished_venus_quartz")
			.displayName("磨制金星晶体").rarity(RARITY_UNCOMMON)


		event.create("glacio_dust")
			.texture(modpackId + ":item/glacio_dust")
			.displayName("寒霜岩粉")
			.glow(true)
		
		event.create("glacio_quartz")
			.texture(modpackId + ":item/glacio_quartz")
			.displayName("寒霜晶体").rarity(RARITY_UNCOMMON)
			.glow(true)

		event.create("polished_glacio_quartz")
			.texture(modpackId + ":item/polished_glacio_quartz")
			.displayName("磨制寒霜晶体").rarity(RARITY_UNCOMMON)
			.glow(true)

		event.create("alpha_quartz")
			.texture(modpackId + ":item/alpha_quartz")
			.displayName("致密阿尔法晶体").rarity(RARITY_UNCOMMON)
			.glow(true)

		event.create("alpha_ingot")
			.texture(modpackId + ":item/alpha_ingot")
			.displayName("致密阿尔法合金").rarity(RARITY_UNCOMMON)
			.glow(true)



		let processors = ["Calculation", "Logic", "Engineering"]
		let processorsLocalName = ["运算", "逻辑", "工程"]
		processors.forEach(name => {
			let id = name.toLowerCase()
			let localName = processorsLocalName[processors.indexOf(name)]
			event.create("incomplete_" + id + "_processor")
				.texture(modpackId + ":item/processor/incomplete_" + id + "_processor")
				.displayName(localName + "处理器（半成品）")
		})

		
	}

	//	Final init
	let initItems = () => {
		initMechanisms()
		initMachineParts()
		initToolMaterials()
		initTypicalItems()
	}
	initItems()
	let number = (name, localName) => {
		let id = name.toLowerCase()
		event.create(id)
			.texture(modpackId + ":item/number/" + id)
			.displayName(localName)
			.glow(true)
	}
	number("Zero", "0")
	number("One", "1")
	number("Two", "2")
	number("Three", "3")
	number("Four", "4")
	number("Five", "5")
	number("Six", "6")
	number("Seven", "7")
	number("Eight", "8")
	number("Nine", "9")
	number("Plus", "+")
	number("Minus", "-")
	number("Multiply", "×")
	number("Divide", "÷")
	number("Missingno", "NaN")

	/*
		event.create("number_array")
			.texture(modpackId + ":item/number/number_array")
			.displayName("Number Array")
			.glow(true)
	*/

	event.create('three_cast')
		.texture(modpackId + ":item/cast/three_cast")
		.displayName('整数铸模 (3)')
		.unstackable()

	event.create('eight_cast')
		.texture(modpackId + ":item/cast/eight_cast")
		.displayName('整数铸模 (8)')
		.unstackable()

	event.create('plus_cast')
		.texture(modpackId + ":item/cast/plus_cast")
		.displayName('运算符铸模 (+)')
		.unstackable()

	event.create('minus_cast')
		.texture(modpackId + ":item/cast/minus_cast")
		.displayName('运算符铸模 (-)')
		.unstackable()

	event.create('multiply_cast')
		.texture(modpackId + ":item/cast/multiply_cast")
		.displayName('运算符铸模 (×)')
		.unstackable()

	event.create('divide_cast')
		.texture(modpackId + ":item/cast/divide_cast")
		.displayName('运算符铸模 (÷)')
		.unstackable()
})

onEvent("block.registry", event => {
	//	Machine
	let registerMachine = (name, localName, layer) => {
		let id = name.toLowerCase() + "_machine"
		event.create(id)
			.model(modpackId + ":block/machine/" + id)
			.material("lantern")
			.hardness(3.0)
			.displayName(localName + "器")
			.notSolid()
			.renderType(layer)
			.tagBlock("create:wrench_pickup")
			.tagBlock("minecraft:mineable/pickaxe")
	}
	registerMachine("Andesite", "安山机", "solid")
	registerMachine("Brass", "黄铜机", "translucent")
	registerMachine("Copper", "铜机", "cutout")
	registerMachine("Zinc", "锌机", "cutout")
	registerMachine("Enderium", "末影合金机", "cutout")
	registerMachine("Obsidian", "黑曜机", "translucent")
	registerMachine("Creative", "§d§l创造机", "translucent")

	let registerCasing = (name, localName) => {
		let id = name.toLowerCase() + "_casing"
		event.create(id)
			.model(modpackId + ":block/casing/" + id)
			.material("metal")
			.hardness(3.0)
			.displayName(localName + "机壳")
			.tagBlock("create:wrench_pickup")
			.tagBlock("minecraft:mineable/pickaxe")
	}
	registerCasing("Invar", "殷钢")
	registerCasing("Fluix", "福鲁伊克斯")
	registerCasing("Zinc", "锌")
	registerCasing("Enderium", "末影合金")
	registerCasing("Creative", "§d§l创造")

	event.create("computation_matrix")
		.model(modpackId + ":block/computation_matrix")
		.material("metal")
		.hardness(3.0)
		.displayName("§d§l智能矩阵")
		.tagBlock("minecraft:mineable/pickaxe")

})

onEvent("fluid.registry", event => {


	event.create("sky_stone")
		.displayName("不稳定的等离子态陨石")
		.thinTexture(0x404344)
		.noBlock()

	event.create("waste")
		.displayName("废液")
		.thinTexture(0x123d36)
		.noBlock()

	event.create("powered_water")
		.displayName("充能水")
		.thinTexture(0x76d0f9)

	event.create("coke")
		.displayName("液态焦炭")
		.thinTexture(0x323232)
		.noBlock()

	event.create("fine_sand")
		.displayName("细砂")
		.thickTexture(0xded6a4)
		.noBlock()

	event.create("infinity")
		.displayName("§4§l熔融无尽")
		.thickTexture(0xFFFAFA)
		.noBlock()	

	let colors = [0xCBE827, 0xAEE827, 0x68E827, 0x27E86E, 0x27E8B1, 0x27DEE8, 0x27B5E8, 0x2798E8, 0x2778E8, 0x2748E8]
	event.create("raw_logic")
		.displayName("玻色-爱因斯坦凝聚态逻辑（未处理）")
		.thinTexture(0xE7FFCB)
		.noBlock()

	for (i = 0; i < 10; i++) {
		event.create("number_" + i)
			.displayName("玻色-爱因斯坦凝聚态逻辑 （" + i + "）")
			.thinTexture(colors[i])
			.noBlock()
			.noBucket()
	}
	event.create("matrix")
		.displayName("§d§l液态智能矩阵")
		.thinTexture(colors[0])
		.noBlock()

		
		
})

onEvent("item.modification", event => {
	let colors = ["red", "yellow", "green", "blue", "magenta", "black"]
	colors.forEach(element => {
		event.modify("ae2:" + element + "_paint_ball", item => {
			item.maxStackSize = 1
		})
	});
})