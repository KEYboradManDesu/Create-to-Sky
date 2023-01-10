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
		registerMechanism("Handmade", "粗制")
		registerMechanism("Kinetic", "动力")
		registerMechanism("Living", "§2活力")
		registerMechanism("Incomp_living", "§b（待注魔）§2活力")
		registerMechanism("Redstring", "§4红线")
		registerMechanism("Corporea", "§3媒体")
		registerMechanism("Sealed", "密封")
		registerMechanism("Infernal", "酷热", RARITY_UNCOMMON)
		registerMechanism("Sturdy", "坚实", RARITY_UNCOMMON)
		registerMechanism("Inductive", "超频", RARITY_UNCOMMON)
		registerMechanism("Abstruse", "§3深邃", RARITY_UNCOMMON)
		registerMechanism("Calculation", "智能", RARITY_UNCOMMON)
		registerMechanism("crystalmatrix", "晶格", RARITY_UNCOMMON)
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
			.maxDamage(124)

		event.create("graphics_card_t1")
			.texture(modpackId + ":item/graphics_card_t1")
			.displayName("显卡").rarity(RARITY_UNCOMMON)
			.maxDamage(124)

		event.create("graphics_card_t2")
			.texture(modpackId + ":item/graphics_card_t2")
			.displayName("高级显卡").rarity(RARITY_UNCOMMON)
			.maxDamage(248)

		event.create("graphics_card_c")
			.texture(modpackId + ":item/graphics_card_c")
			.displayName("§d创造型显卡§r").rarity(RARITY_UNCOMMON)
			.unstackable()
		
		
		registerTypicalItem("Nickel Compound", "镶边镍锭")
		registerTypicalItem("Invar Compound", "殷钢混合物")
		registerTypicalItem("Silicon Compound", "含硅化合物")

		registerTypicalItem("Coke Chunk", "小块焦炭")
		registerTypicalItem("Rough Sand", "粗砂")
		registerTypicalItem("Purified Sand", "高纯砂")

		registerTypicalItem("Cobalt Dust", "钴粉")
		registerTypicalItem("Zinc Dust", "锌粉")

		registerTypicalItem("Circuit Scrap", "压印模板碎片")
		
		event.create("sand_ball")
			.texture(modpackId + ":item/sand_ball")
			.displayName("沙球")
			.unstackable()

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
			.displayName("史莱姆蕨粉末").rarity(RARITY_UNCOMMON)

		event.create("sky_slimy_fern_paste")
			.texture(modpackId + ":item/fern/paste/sky_slimy_fern_paste")
			.displayName("史莱姆蕨粉末")

		event.create("empty_music_disc")
			.texture(modpackId + ":item/empty_music_disc")
			.displayName("空音乐唱片").rarity(RARITY_UNCOMMON)

		event.create("elytra_broken")
			.texture(modpackId + ":item/broken_elytra")
			.displayName("鞘翅碎片").rarity(RARITY_UNCOMMON)

		event.create("matter_plastics")
			.texture(modpackId + ":item/matter_plastics")
			.displayName("物质塑料条").rarity(RARITY_UNCOMMON)

		event.create("matter_plastic_ball")
			.texture(modpackId + ":item/matter_plastic_ball")
			.displayName("物质塑料球").rarity(RARITY_UNCOMMON)
		
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
			.displayName("§d炼金钝化棒§r").rarity(RARITY_UNCOMMON)
			.maxDamage(100)
		
		event.create("crushed_cobalt_ore")
			.texture(modpackId + ":item/crushed/crushed_cobalt_ore")
			.displayName("粉碎钴矿石")

		event.create("crushed_brass_ore")
			.texture(modpackId + ":item/crushed/crushed_brass")
			.displayName("粉碎黄铜矿石")

		event.create("crushed_calorite_ore")
			.texture(modpackId + ":item/crushed/crushed_calorite_ore")
			.displayName("粉碎耐热金属矿石")

		event.create("crushed_desh_ore")
			.texture(modpackId + ":item/crushed/crushed_desh_ore")
			.displayName("粉碎戴斯矿石")

		event.create("crushed_ostrum_ore")
			.texture(modpackId + ":item/crushed/crushed_ostrum_ore")
			.displayName("粉碎紫金矿石")

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

		event.create("charged_calculator")
			.texture(modpackId + ":item/charged_calculator")
			.displayName("计算器").rarity(RARITY_UNCOMMON)
			.maxDamage(516)

		event.create("calorite_dust")
			.texture(modpackId + ":item/calorite_dust")
			.displayName("耐热金属粉").rarity(RARITY_UNCOMMON)

		event.create("desh_dust")
			.texture(modpackId + ":item/desh_dust")
			.displayName("戴斯粉").rarity(RARITY_UNCOMMON)

		event.create("ostrum_dust")
			.texture(modpackId + ":item/ostrum_dust")
			.displayName("紫金粉").rarity(RARITY_UNCOMMON)

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
			.displayName("致密外星石晶体").rarity(RARITY_UNCOMMON)
			.glow(true)

		event.create("chimera_ingot")
			.texture(modpackId + ":item/alpha_ingot")
			.displayName("致密奇美拉").rarity(RARITY_UNCOMMON)
			.glow(true)

		event.create("nether_seed_star")
			.texture(modpackId + ":item/crystal/nether_seed_star")
			.displayName("下界之星碎片").rarity(RARITY_UNCOMMON)
			.glow(true)

		event.create("livingrock_gear")
			.texture(modpackId + ":item/livingrock_gear")
			.displayName("活石齿轮")

		event.create("growing_certus_seed_crystal")
			.texture(modpackId + ":item/crystal/growing_certus_seed_crystal")
			.displayName("生长中的赛特斯石英种子")

		event.create("tiny_certus_crystal")
			.texture(modpackId + ":item/crystal/tiny_certus_crystal")
			.displayName("赛特斯石英结晶")

		event.create("growing_tiny_certus_crystal")
			.texture(modpackId + ":item/crystal/growing_tiny_certus_crystal")
			.displayName("生长中的赛特斯石英结晶")

		event.create("small_certus_crystal")
			.texture(modpackId + ":item/crystal/small_certus_crystal")
			.displayName("赛特斯石英晶体")

		event.create("growing_small_certus_crystal")
			.texture(modpackId + ":item/crystal/growing_small_certus_crystal")
			.displayName("生长中的赛特斯石英晶体")

		event.create("growing_fluix_seed_crystal")
			.texture(modpackId + ":item/crystal/growing_fluix_seed_crystal")
			.displayName("生长中的福禄伊斯科石英种子")

		event.create("tiny_fluix_crystal")
			.texture(modpackId + ":item/crystal/tiny_fluix_crystal")
			.displayName("福禄伊斯科石英结晶")

		event.create("growing_tiny_fluix_crystal")
			.texture(modpackId + ":item/crystal/growing_tiny_fluix_crystal")
			.displayName("生长中的福禄伊斯科石英结晶")

		event.create("small_fluix_crystal")
			.texture(modpackId + ":item/crystal/small_fluix_crystal")
			.displayName("福禄伊斯科石英晶体")

		event.create("growing_small_fluix_crystal")
			.texture(modpackId + ":item/crystal/growing_small_fluix_crystal")
			.displayName("生长中的福禄伊斯科石英晶体")

		event.create("growing_nether_seed_star")
			.texture(modpackId + ":item/crystal/growing_nether_seed_star")
			.displayName("增殖中的下界之星碎片").rarity(RARITY_UNCOMMON)
			.glow(true)

		event.create("tiny_nether_crystal")
			.texture(modpackId + ":item/crystal/tiny_nether_crystal")
			.displayName("下界之星结晶").rarity(RARITY_UNCOMMON)
			.glow(true)

		event.create("growing_tiny_nether_star")
			.texture(modpackId + ":item/crystal/growing_tiny_nether_star")
			.displayName("增殖中的下界之星结晶").rarity(RARITY_UNCOMMON)
			.glow(true)

		event.create("small_nether_star")
			.texture(modpackId + ":item/crystal/small_nether_star")
			.displayName("下界之星晶体").rarity(RARITY_UNCOMMON)
			.glow(true)

		event.create("growing_small_nether_star")
			.texture(modpackId + ":item/crystal/growing_small_nether_star")
			.displayName("增殖中的下界之星晶体").rarity(RARITY_UNCOMMON)
			.glow(true)

		event.create("nether_gear")
			.texture(modpackId + ":item/nether_gear")
			.displayName("下界之星齿轮").rarity(RARITY_UNCOMMON)
			.glow(true)

		event.create("incomplete_nether_gear")
			.texture(modpackId + ":item/incomplete_nether_gear")
			.displayName("下界之星齿轮（半成品）").rarity(RARITY_UNCOMMON)
			.glow(true)

		event.create("gear_die")
			.texture(modpackId + ":item/gear_die")
			.displayName("附灵的齿轮模具").rarity(RARITY_UNCOMMON)

		event.create("stormyx_ingot")
			.texture(modpackId + ":item/stormyx_ingot")
			.displayName("§d飓霆锭§r").rarity(RARITY_UNCOMMON)

		event.create("stormyx_nugget")
			.texture(modpackId + ":item/stormyx_nugget")
			.displayName("§d飓霆粒§r").rarity(RARITY_UNCOMMON)

		event.create("stormyx_dust")
			.texture(modpackId + ":item/stormyx_dust")
			.displayName("§d飓霆粉§r").rarity(RARITY_UNCOMMON)

		event.create("raw_stormyx")
			.texture(modpackId + ":item/raw_stormyx")
			.displayName("§d粗飓霆岩§r").rarity(RARITY_UNCOMMON)

		event.create("neutronium_drive_hyper_dense")
			.texture(modpackId + ":item/neutronium_drive_hyper_dense")
			.displayName("§d中子 QIO 驱动器§r").rarity(RARITY_UNCOMMON)

		event.create("crushed_neutronium_drive_hyper_dense")
			.texture(modpackId + ":item/crushed_neutronium_drive_hyper_dense")
			.displayName("§d损坏的 QIO 电路板§r").rarity(RARITY_UNCOMMON)

		event.create("terrasteel_sheet")
			.texture(modpackId + ":item/terrasteel_sheet")
			.displayName("泰拉钢板").rarity(RARITY_UNCOMMON)

		event.create("starrite")
			.texture(modpackId + ":item/starrite")
			.displayName("星辉").rarity(RARITY_UNCOMMON)

		event.create("damascus_steel_ingot")
			.texture(modpackId + ":item/damascus_steel_ingot")
			.displayName("大马士革钢锭")

		event.create("damascus_steel_dust")
			.texture(modpackId + ":item/damascus_steel_dust")
			.displayName("富集大马士革钢粉")

		event.create("crushed_stormyx_ore")
			.texture(modpackId + ":item/crushed/crushed_stormyx_ore")
			.displayName("§d粉碎飓霆矿石")

		event.create("twilight_diamond")
			.texture(modpackId + ":item/twilight_diamond")
			.displayName("暮色钻石").rarity(RARITY_UNCOMMON)

		event.create("good_idea")
			.texture(modpackId + ":item/good_idea")
			.displayName("§d奇思妙想§r").rarity(RARITY_UNCOMMON)

		event.create("blockchain")
			.texture(modpackId + ":item/blockchain")
			.displayName("实体区块链").rarity(RARITY_UNCOMMON)

		event.create("createcoin")
			.texture(modpackId + ":item/createcoin")
			.displayName("奎特币").rarity(RARITY_UNCOMMON)

		event.create("rickroll")
			.texture(modpackId + ":item/rickroll")
			.displayName("你被骗了！").rarity(RARITY_UNCOMMON)

		event.create("stormyx_gear")
			.texture(modpackId + ":item/stormyx_gear")
			.displayName("§d飓霆齿轮§r").rarity(RARITY_UNCOMMON)

		event.create("incomplete_graphics_card")
			.texture(modpackId + ":item/incomplete_graphics_card")
			.displayName("显卡（未完成）")

		event.create("incomplete_blockchain")
			.texture(modpackId + ":item/incomplete_blockchain")
			.displayName("实体区块链（未完成）")

		event.create("trade_card_unknow")
			.texture(modpackId + ":item/trade_card")
			.displayName("§6购买铭牌：§e星辉")
			.unstackable()

		event.create("rubber_duck")
		    .parentModel(modpackId + ":item/rubber_duck")
			.displayName("§6镭射橡皮鸭§r").rarity(RARITY_UNCOMMON)
			.maxDamage(2147483647)

		event.create("rubberduck")
		    .parentModel(modpackId + ":item/rubberduck")
			.displayName("§6橡皮鸭§r").rarity(RARITY_UNCOMMON)
			.maxStackSize(16)

		event.create("incomplete_box_ammo")
		    .parentModel(modpackId + ":item/incomplete_box_ammo")
			.displayName("全威力弹药箱（打开）").rarity(RARITY_UNCOMMON)
			.maxStackSize(16)

		event.create("incomplete_box_ap_ammo")
		    .parentModel(modpackId + ":item/incomplete_box_ap_ammo")
			.displayName("全威力穿甲弹药箱（打开）").rarity(RARITY_UNCOMMON)
			.maxStackSize(8)

		event.create("incomplete_box_nails")
		    .parentModel(modpackId + ":item/incomplete_box_nails")
			.displayName("钢钉盒（打开）")
			.maxStackSize(32)

		event.create("incomplete_box_shell")
		    .parentModel(modpackId + ":item/incomplete_box_shell")
			.displayName("霰弹盒（打开）")
			.maxStackSize(32)
	
		event.create("lapis_sheet")
			.texture(modpackId + ":item/lapis_sheet")
			.displayName("青金石板")

		event.create("integrated_circuit")
			.texture(modpackId + ":item/integrated_circuit")
			.displayName("集成处理器").rarity(RARITY_UNCOMMON)

		event.create("raw_brass")
			.texture(modpackId + ":item/raw_brass")
			.displayName("粗黄铜")	

		event.create("brass_dust")
			.texture(modpackId + ":item/brass_dust")
			.displayName("黄铜粉")	

		event.create("blaze_brass")
			.texture(modpackId + ":item/blaze_brass")
			.displayName("烈焰黄铜").rarity(RARITY_UNCOMMON)

		event.create("chorus_chrome")
			.texture(modpackId + ":item/chorus_chrome")
			.displayName("紫颂紫金").rarity(RARITY_UNCOMMON)
			.food((food) => {food.hunger(3)
			.saturation(0.5)
			.effect('minecraft:levitation', 100, 1, 1.0)})

		event.create("overcharged_alloy")
			.texture(modpackId + ":item/overcharged_alloy")
			.displayName("超负荷合金").rarity(RARITY_UNCOMMON)

		event.create("baked_chocolate_cake_base")
			.texture(modpackId + ":item/baked_chocolate_cake_base")
			.displayName("烘焙巧克力蛋糕底座")	
		
		event.create("chocolate_cake_base")
			.texture(modpackId + ":item/chocolate_cake_base")
			.displayName("巧克力蛋糕底座")	

		event.create("banana_dough")
			.texture(modpackId + ":item/banana_dough")
			.displayName("香蕉面团")	

		event.create("black_gunpowder")
			.texture(modpackId + ":item/gunpowder")
			.displayName("黑火药")	

		event.create("incomplete_calorite_engine")
			.texture(modpackId + ":item/beyondearth/incomplete_calorite_engine")
			.displayName("耐热金属引擎（半成品）")	

		event.create("incomplete_engine_desh")
			.texture(modpackId + ":item/beyondearth/incomplete_engine_desh")
			.displayName("戴斯引擎（半成品）")	

		event.create("incomplete_engine_ostrum")
			.texture(modpackId + ":item/beyondearth/incomplete_engine_ostrum")
			.displayName("紫金引擎（半成品）")	

		event.create("incomplete_engine_steel")
			.texture(modpackId + ":item/beyondearth/incomplete_engine_steel")
			.displayName("钢引擎（半成品）")	

		event.create("incomplete_calorite_tank")
			.texture(modpackId + ":item/beyondearth/incomplete_calorite_tank")
			.displayName("耐热金属燃油罐（半成品）")	

		event.create("incomplete_tank_ostrum")
			.texture(modpackId + ":item/beyondearth/incomplete_tank_ostrum")
			.displayName("紫金燃油罐（半成品）")	

		event.create("incomplete_tank_steel")
			.texture(modpackId + ":item/beyondearth/incomplete_tank_steel")
			.displayName("钢燃油罐（半成品）")	

		event.create("incomplete_tank_desh")
			.texture(modpackId + ":item/beyondearth/incomplete_tank_desh")
			.displayName("戴斯燃油罐（半成品）")	

		event.create("incomplete_item_fin")
			.texture(modpackId + ":item/beyondearth/incomplete_item_fin")
			.displayName("火箭尾翼（半成品）")	

		event.create("incomplete_rocket_nose_cone")
			.texture(modpackId + ":item/beyondearth/incomplete_rocket_nose_cone")
			.displayName("火箭鼻锥（半成品）")	

		event.create("incomplete_space_suit")
			.texture(modpackId + ":item/beyondearth/incomplete_space_suit")
			.displayName("太空服（半成品）")	
			.maxStackSize(1)

		event.create("incomplete_space_leggings")
			.texture(modpackId + ":item/beyondearth/incomplete_space_leggings")
			.displayName("太空裤（半成品）")	
			.maxStackSize(1)

		event.create("incomplete_space_boots")
			.texture(modpackId + ":item/beyondearth/incomplete_space_boots")
			.displayName("太空靴（半成品）")	
			.maxStackSize(1)

		event.create("components")
			.texture(modpackId + ":item/components")
			.displayName("加工中的机器零件")	
			.maxStackSize(1)

		event.create("netherite_plating")
			.texture(modpackId + ":item/netherite_plating")
			.displayName("下界板材")

		event.create('protein_bar')
		    .texture(modpackId + ":item/protein_bar")
		    .displayName('Feed The Beast™蛋白棒').rarity(RARITY_UNCOMMON)
		    .food((food) => {food.hunger(8)
		    .saturation(0.5)
			.effect('minecraft:saturation', 200, 1, 1.0)})

		event.create('white_chocolate_gear')
		    .texture(modpackId + ":item/white_chocolate_gear")
		    .displayName('棉花糖夹心齿轮')
		    .food((food) => {food.hunger(4)
		    .saturation(0.5)
			.effect('create_confectionery:rest', 100, 1, 1.0)})

		event.create('caramel_sheet')
		    .texture(modpackId + ":item/caramel_sheet")
		    .displayName('焦糖板')
		    .food((food) => {food.hunger(6)
		    .saturation(0.5)
			.effect('minecraft:speed', 100, 1, 1.0)})

		event.create('incomplete_sweet_mechanism')
		    .texture(modpackId + ":item/incomplete_sweet_mechanism")
		    .displayName('甜蜜构件（半成品）').rarity(RARITY_UNCOMMON)
		    .food((food) => {food.hunger(8)
		    .saturation(0.5)
			.effect('minecraft:speed', 100, 1, 1.0)})

		event.create('sweet_mechanism')
		    .texture(modpackId + ":item/sweet_mechanism")
		    .displayName('甜蜜构件').rarity(RARITY_UNCOMMON)
		    .food((food) => {food.hunger(20)
		    .saturation(0.5)
			.effect('minecraft:speed', 100, 1, 1.0)
			.effect('minecraft:haste', 200, 1, 1.0)
			.effect('minecraft:regeneration', 200, 1, 1.0)
			.effect('minecraft:saturation', 2000, 1, 1.0)
		})

		event.create('matrix_sheet')
		    .texture(modpackId + ":item/raw_logic_sheet")
		    .displayName('§d智能逻辑板§r').rarity(RARITY_UNCOMMON)

		event.create('tool_empty')
		    .texture(modpackId + ":item/tool_empty")
		    .displayName('幽灵工具')

		event.create('incomplete_dark_matter')
		    .texture(modpackId + ":item/incomplete_dark_matter")
		    .displayName('暗物质（半成品）')

		event.create('incomplete_red_matter')
		    .texture(modpackId + ":item/incomplete_red_matter")
		    .displayName('红物质（半成品）')

		event.create('butter')
		    .texture(modpackId + ":item/butter")
		    .displayName('黄油')
		    .food((food) => {food.hunger(3)
		    .saturation(0.5)})

		event.create("stock")
			.texture(modpackId + ":item/stock")
			.displayName("火铳枪托")	
			.maxStackSize(1)

		event.create("musket_barrel")
			.texture(modpackId + ":item/musket_barrel")
			.displayName("火铳枪管")	
			.maxStackSize(1)

		event.create("empty_casing")
			.texture(modpackId + ":item/buttle/empty_casing")
			.displayName("中型空弹壳")	

		event.create("incompete_propeller")
			.texture(modpackId + ":item/incompete_propeller")
			.displayName("飞行构件（半成品）").rarity(RARITY_UNCOMMON)

		event.create("incompete_advanced_bullet")
			.texture(modpackId + ":item/buttle/incompete_advanced_bullet")
			.displayName("全威力弹药（半成品）")	

		event.create("incompete_basic_bullet")
			.texture(modpackId + ":item/buttle/incompete_basic_bullet")
			.displayName("钢钉（半成品）")	

		event.create("armour_piercing_buttle")
			.texture(modpackId + ":item/buttle/armour_piercing_buttle")
			.displayName("全威力穿甲弹药").rarity(RARITY_UNCOMMON)
			.maxStackSize(48)

		event.create("incompete_armour_piercing_buttle")
			.texture(modpackId + ":item/buttle/incompete_armour_piercing_buttle")
			.displayName("全威力穿甲弹药（半成品）").rarity(RARITY_UNCOMMON)

		event.create("diamond_shard")
			.texture(modpackId + ":item/diamond_shard")
			.displayName("钻石碎片")

		event.create("diamond_ingot")
			.texture(modpackId + ":item/diamond_ingot")
			.displayName("钻石锭")

		event.create("diamond_tool_embryo")
			.texture(modpackId + ":item/diamond_tool_embryo")
			.displayName("钻石工具胚")
			.maxStackSize(1)

		event.create("platinum_nugget")
			.texture(modpackId + ":item/metal/platinum_nugget")
			.displayName("铂粒")
			
		event.create("platinum_dust")
			.texture(modpackId + ":item/metal/platinum_dust")
			.displayName("铂粉")

		event.create("platinum_dirt_dust")
			.texture(modpackId + ":item/metal/platinum_dirt_dust")
			.displayName("污浊铂粉")

		event.create("platinum_crystal")
			.texture(modpackId + ":item/metal/platinum_crystal")
			.displayName("铂结晶")

		event.create("platinum_clumps")
			.texture(modpackId + ":item/metal/platinum_clumps")
			.displayName("铂碎块")

		event.create("platinum_shard")
			.texture(modpackId + ":item/metal/platinum_shard")
			.displayName("铂碎片")

		event.create("raw_platinum")
			.texture(modpackId + ":item/metal/raw_platinum")
			.displayName("粗铂")

		event.create("canvas_doll")
			.texture(modpackId + ":item/canvas_doll")
			.displayName("粗布人偶")

		event.create("diamond_lattice")
			.texture(modpackId + ":item/diamond_lattice")
			.displayName("钻石晶格").rarity(RARITY_UNCOMMON)

		event.create('basic_gun_kit')
			.texture(modpackId + ":item/gunkit/basic_gun_kit")
			.displayName('基础枪械改装件')
			.maxStackSize(4)
 
		event.create('crude_gun_kit')
			.texture(modpackId + ":item/gunkit/crude_gun_kit")
			.displayName('粗制枪械改装件')
			.maxStackSize(4)
 
		event.create('advanced_gun_kit')
			.texture(modpackId + ":item/gunkit/advanced_gun_kit")
			.displayName('进阶枪械改装件')
			.maxStackSize(4)
 
		event.create('illegal_gun_kit')
			.texture(modpackId + ":item/gunkit/illegal_gun_kit")
			.displayName('非法枪械改装件').rarity(RARITY_UNCOMMON)
			.maxStackSize(4)
		
		event.create('unfinished_gun')
			.texture(modpackId + ":item/gunkit/unfinished_gun")
			.displayName('枪机')
		
		event.create('gunpowder_bottle')
			.texture(modpackId + ":item/gunkit/gunpowder_bottle")
			.displayName('火药瓶')
 
		event.create('glowstone_bottle')
			.texture(modpackId + ":item/gunkit/glowstone_bottle")
			.displayName('混有萤石的火药瓶')
 
		event.create('grenade_fuze')
			.texture(modpackId + ":item/gunkit/grenade_fuze")
			.displayName('手雷引信')

		event.create('quartz_iron_ingot')
			.texture(modpackId + ":item/quartz_iron_ingot")
			.displayName('含铁石英')

		event.create("silica_steel_piece")
			.texture(modpackId + ":item/metal/silica_steel_nugget")
			.displayName("硅钢块")

		event.create("scrap")
			.texture(modpackId + ":item/scrap")
			.displayName("废料")

		event.create("scarp_mechanism")
			.texture(modpackId + ":item/scarp_mechanism")
			.displayName("精密构件（残次品）")

		event.create("coal_compound")
			.texture(modpackId + ":item/coal_compound")
			.displayName("富碳铁锭")

		event.create("gnaws_hungry")
			.texture(modpackId + ":item/gnaws_coin/gnaws_hungry")
			.displayName("§d暴食的饥饿§r")
			.maxStackSize(1)

		event.create("gnaws_coin_1")
			.texture(modpackId + ":item/gnaws_coin/gnaws_coin_1")
			.displayName("§d暴食碎片A§r")
			.maxStackSize(1)
		event.create("gnaws_coin_2")
			.texture(modpackId + ":item/gnaws_coin/gnaws_coin_2")
			.displayName("§d暴食碎片B§r")
			.maxStackSize(1)
		event.create("gnaws_coin_3")
			.texture(modpackId + ":item/gnaws_coin/gnaws_coin_3")
			.displayName("§d暴食碎片C§r")
			.maxStackSize(1)
		event.create("gnaws_coin_4")
			.texture(modpackId + ":item/gnaws_coin/gnaws_coin_4")
			.displayName("§d暴食碎片D§r")
			.maxStackSize(1)

		event.create("ultimate_cake_slice")
			.texture(modpackId + ":item/ultimate_cake_slice")
			.displayName("§d中子蛋糕切片").rarity(RARITY_UNCOMMON)
			.food((food) => {food.hunger(7.0)
			.saturation(0.5)
			.effect('minecraft:jump_boost', 2000, 1, 1.0)
			.effect('minecraft:haste', 2250, 1, 1.0)
			.effect('minecraft:speed', 2000, 1, 1.0)
			.effect('minecraft:strength', 2500, 1, 1.0)})


		event.create('pipe_module_utility').texture(modpackId + ":item/pipe_module_utility").displayName('通用管道模块')
		event.create('pipe_module_tier_1').texture(modpackId + ":item/pipe_module_tier_1").displayName('黄铜管道模块')
		event.create('pipe_module_tier_2').texture(modpackId + ":item/pipe_module_tier_2").displayName('殷钢管道模块')
		event.create('pipe_module_tier_3').texture(modpackId + ":item/pipe_module_tier_3").displayName('末影管道模块')	



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
	registerMachine("Handmade", "手工机", "solid")
	registerMachine("Andesite", "安山机", "solid")
	registerMachine("Living", "§2活力机", "translucent")
	registerMachine("Redstring", "§4红线机", "translucent")
	registerMachine("Corporea", "§3媒体机", "translucent")
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
	registerCasing("Living", "§2活力")
	registerCasing("Redstring", "§4红线")
	registerCasing("Corporea", "§3媒体")
	registerCasing("Invar", "殷钢")
	registerCasing("Fluix", "福鲁伊克斯")
	registerCasing("Zinc", "锌")
	registerCasing("Enderium", "末影合金")
	registerCasing("Creative", "§d§l创造")

	event.create("computation_matrix")
		.model(modpackId + ":block/computation_matrix")
		.material("metal")
		.hardness(3.0)
		.displayName("§d智能矩阵§r")
		.tagBlock("minecraft:mineable/pickaxe")

	event.create("waste_block")
		.model(modpackId + ":block/waste_block")
		.material("metal")
		.hardness(3.0)
		.displayName("§e废弃物质反应块§r")
		.tagBlock("minecraft:mineable/pickaxe")

	event.create("ice_catalyst")
		.model(modpackId + ":block/ice_catalyst")
		.material("glass")
		.hardness(3.0)
		.displayName("§e炼金晶化器§r")
		.tagBlock("minecraft:mineable/pickaxe")

	event.create("double_compressed_andesite")
		.model(modpackId + ":block/double_compressed_andesite")
		.material("stone")
		.hardness(3.5)
		.displayName("二重压缩安山岩")
		.tagBlock("minecraft:mineable/pickaxe")
	  
	event.create("compressed_limestone")
		.model(modpackId + ":block/compressed_limestone")
		.material("stone")
		.hardness(3.0)
		.displayName("压缩石灰岩")
		.tagBlock("minecraft:mineable/pickaxe")
	
	event.create("double_compressed_limestone")
		.model(modpackId + ":block/double_compressed_limestone")
		.material("stone")
		.hardness(3.5)
		.displayName("二重压缩石灰岩")
		.tagBlock("minecraft:mineable/pickaxe")
	
	event.create("box_ammo")
		.model(modpackId + ":block/box_ammo")
		.material("lantern")
		.hardness(0.5)
		.displayName("§e全威力弹药箱§r")
		.tagBlock("minecraft:mineable/pickaxe")
		.renderType('translucent') 
		.notSolid()
		.noCollision()
		.waterlogged()

	event.create("box_ap_ammo")
		.model(modpackId + ":block/box_ap_ammo")
		.material("lantern")
		.hardness(0.5)
		.displayName("§e全威力穿甲弹药箱§r")
		.tagBlock("minecraft:mineable/pickaxe")
		.renderType('translucent') 
		.notSolid()
		.noCollision()
		.waterlogged()


	event.create("box_nails")
		.model(modpackId + ":block/box_nails")
		.material("wood")
		.hardness(0.5)
		.displayName("钢钉盒")
		.tagBlock("minecraft:mineable/pickaxe")
		.renderType('translucent') 
		.notSolid()
		.noCollision()
		.waterlogged()

	event.create("box_shell")
		.model(modpackId + ":block/box_shell")
		.material("wood")
		.hardness(0.5)
		.displayName("霰弹盒")
		.tagBlock("minecraft:mineable/pickaxe")
		.renderType('translucent') 
		.notSolid()
		.noCollision()
        .waterlogged()
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

	event.create("mineral_water")
		.displayName("矿泉水")
		.thinTexture(0x76d0f9)

	event.create("coke")
		.displayName("液态焦炭")
		.thinTexture(0x323232)
		.bucketColor(0x323232)
		.noBlock()

	event.create("fine_sand")
		.displayName("细砂")
		.thickTexture(0xE3DBB0)
		.bucketColor(0xE3DBB0)
		.stillTexture(modpackId + ':fluid/fine_sand_still')
		.flowingTexture(modpackId + ':fluid/fine_sand_flow')


	event.create("infinity")
		.displayName("§c熔融无尽§r")
		.thickTexture(0xFFFAFA)
		.noBlock()	

	event.create("molten_overcharged_alloy")
		.displayName("熔融超负荷合金")
		.thickTexture(0x0086aa)
		.bucketColor(0x0086aa)

	let colors = [0xCBE827, 0xAEE827, 0x68E827, 0x27E86E, 0x27E8B1, 0x27DEE8, 0x27B5E8, 0x2798E8, 0x2778E8, 0x2748E8]
	event.create("raw_logic")
		.displayName("玻色-爱因斯坦凝聚态逻辑（未处理）")
		.thinTexture(0xE7FFCB)
		.bucketColor(0xE7FFCB)
		.stillTexture(modpackId + ':fluid/number_still')
		.flowingTexture(modpackId + ':fluid/number_flow')
		.color(0xE7FFCB)

	for (i = 0; i < 10; i++) {
		event.create("number_" + i)
			.displayName("玻色-爱因斯坦凝聚态逻辑 （" + i + "）")
			.thinTexture(colors[i])
			.bucketColor(colors[i])
			.stillTexture(modpackId + ':fluid/number_still')
			.flowingTexture(modpackId + ':fluid/number_flow')
			.color(colors[i])
			
	}

	event.create("star")
		.displayName("§e星华§r")
		.thinTexture(0xFCFCFC)
		.bucketColor(0xFCFCFC)
		.stillTexture(modpackId + ':fluid/number_still')
		.flowingTexture(modpackId + ':fluid/number_flow')
		.color(0xFCFCFC)
		.noBlock()	

	event.create("matrix")
		.displayName("§d液态智能矩阵§r")
		.thinTexture(colors[0])
		.bucketColor(colors[0])
		.stillTexture(modpackId + ':fluid/matrix_still')
		.flowingTexture(modpackId + ':fluid/matrix_flow')

	event.create("fine_sugar")
		.displayName("砂糖")
		.thickTexture(0xf3f3f3)
		.bucketColor(0xf3f3f3)
		.stillTexture(modpackId + ':fluid/fine_sugar_still')
		.flowingTexture(modpackId + ':fluid/fine_sugar_flow')

	event.create("butter")
		.displayName("黄油")
		.thickTexture(0xffe76e)
		.bucketColor(0xffe76e)
		.stillTexture(modpackId + ':fluid/butter_still')
		.flowingTexture(modpackId + ':fluid/butter_flow')

	event.create("mozerella_chese")
		.displayName("莫泽瑞拉奶酪")
		.thickTexture(0xe0c228)
		.bucketColor(0xe0c228)
		.stillTexture(modpackId + ':fluid/butter_still')
		.flowingTexture(modpackId + ':fluid/butter_flow')

	event.create("creative_chese")
		.displayName("§d奎特奶酪§r")
		.bucketColor(0xeab6eff)
		.stillTexture(modpackId + ':fluid/creative_butter_still')
		.flowingTexture(modpackId + ':fluid/creative_butter_flow')

	event.create("alchemical_coke")
		.displayName("液态炼金焦炭")
		.thinTexture(0xA52A2A)
		.bucketColor(0xA52A2A)
		.noBlock()

	event.create("cryo_fuel")
		.displayName("低温有机燃料")
		.thickTexture(0xBBFFFF)
		.bucketColor(0xBBFFFF)
		.stillTexture(modpackId + ':fluid/cryo_fuel_still')
		.flowingTexture(modpackId + ':fluid/cryo_fuel_flow')
		.noBlock()	

	event.create("chaos_resin")
		.displayName("混沌树脂")
		.bucketColor(0x390073)
		.stillTexture(modpackId + ':fluid/chaos_resin_still')
		.flowingTexture(modpackId + ':fluid/chaos_resin_flow')
		.noBlock()	
	
	event.create("red_matter_pulp")
		.displayName("红物质琼浆")
		.bucketColor(0x801f14)
		.stillTexture(modpackId + ':fluid/red_matter_pulp_still')
		.flowingTexture(modpackId + ':fluid/red_matter_pulp_flow')
		.noBlock()	

	event.create("dark_matter_pulp")
		.displayName("暗物质琼浆")
		.thickTexture(0x1f003d)
		.bucketColor(0x1f003d)
		.stillTexture(modpackId + ':fluid/chaos_resin_still')
		.flowingTexture(modpackId + ':fluid/chaos_resin_flow')
		.noBlock()	

	event.create("chimera_lava")
		.displayName("奇美拉岩浆")
		.thickTexture(0xFF00FF)
		.bucketColor(0xFF00FF)
		.stillTexture(modpackId + ':fluid/chimera_lava_still')
		.flowingTexture(modpackId + ':fluid/chimera_lava_flow')
		.noBlock()	

	event.create("alpha_lava")
		.displayName("阿尔法岩浆")
		.thickTexture(0xFFFAFA)
		.bucketColor(0xFFC125)
		.stillTexture(modpackId + ':fluid/lava_still')
		.flowingTexture(modpackId + ':fluid/lava_flow')
		.noBlock()	

		
})

onEvent("item.modification", event => {
	let colors = ["red", "yellow", "green", "blue", "magenta", "black"]
	colors.forEach(element => {
		event.modify("ae2:" + element + "_paint_ball", item => {
			item.maxStackSize = 1
		})
	});
	
	event.modify("cgm:missile", item => {
		item.maxStackSize = 16
	})
	event.modify("cgm:stun_grenade", item => {
		item.maxStackSize = 32
	})
	event.modify("cgm:grenade", item => {
		item.maxStackSize = 32
	})


})