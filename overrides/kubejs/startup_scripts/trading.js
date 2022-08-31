// priority: 0

// Mod shortcuts
let MOD = (domain, id, x) => (x ? `${x}x ` : "") + (id.startsWith('#') ? '#' : "") + domain + ":" + id.replace('#', '')
let AE2 = (id, x) => MOD("ae2", id, x)
let TE = (id, x) => MOD("thermal", id, x)
let AP = (id, x) => MOD("architects_palette", id, x)
let LV = (id, x) => MOD("libvulpes", id, x)
let CR = (id, x) => MOD("create", id, x)
let TC = (id, x) => MOD("tconstruct", id, x)
let MC = (id, x) => MOD("minecraft", id, x)
let KJ = (id, x) => MOD("kubejs", id, x)
let EG = (id, x) => MOD("endergetic", id, x)
let FD = (id, x) => MOD("farmersdelight", id, x)
let BOP = (id, x) => MOD("biomesoplenty", id, x)
let PR_C = (id, x) => MOD("projectred-core", id, x)
let RQ = (id, x) => MOD("reliquary", id, x)
let SD = (id, x) => MOD("storagedrawers", id, x)
let SP = (id, x) => MOD("supplementaries", id, x)
let F = (id, x) => MOD("forge", id, x)
let AC = (id, x) => MOD("aquaculture", id, x)
let IM = (id, x) => MOD("immersiveengineering", id, x)
//


onEvent('item.registry', event => {

	global.trades = []
	global.professions = []
	global.transactions = []

	let profession = (zhname, name, c1, c2, transactions) => {
		let id = name.toLowerCase().replace("'", "").split(' ').join('_')
		global.professions.push(id)
		global.transactions[id] = transactions
		event.create(`profession_card_${id}`)
			.color(1, c1)
			.color(2, c2)
			.parentModel("kubejs:item/profession_card")
			.texture("kubejs:item/profession_card_0")
			.displayName(`§7职业：§f${zhname}`)
			.unstackable()
	}

	let trade = (zhname, name, c1, c2, transactions, custom) => {
		let id = name.toLowerCase().replace("'", "").split(' ').join('_')
		global.trades.push(id)
		global.transactions[id] = transactions
		event.create(`trade_card_${id}`)
			.color(1, c1)
			.color(2, c2)
			.parentModel("kubejs:item/trade_card")
			.texture("kubejs:item/trade_card_0")
			.displayName((custom ? "" : "§6购买：§f") + zhname)
			.unstackable()
	}

	let S = (x) => TE('silver_coin', x)
	let G = (x) => TE('gold_coin', x)

	profession("农民", "Farming", 0xFFCC29, 0x81B214, [
		{ in: FD('carrot_crate'), out: S(1) },
		{ in: FD('potato_crate'), out: S(1) },
		{ in: FD('beetroot_crate'), out: S(1) },
		{ in: FD('cabbage_crate'), out: S(1) },
		{ in: FD('tomato_crate'), out: S(1) },
		{ in: FD('onion_crate'), out: S(1) },
		{ in: FD('rice_bag'), out: S(1) },
		{ in: FD('canvas', 32), out: S(1) },
		{ in: TE('apple_block', 32), out: S(1) },
		{ in: TE('frost_melon', 16), out: S(8) },
		{ in: MC('sweet_berries', 8), out: S(1) },
		{ in: MC('cocoa_beans', 16), out: S(1) },
		{ in: MC('honey_bottle', 8), out: S(1) },
		{ in: MC('honeycomb', 4), out: S(1) },
		{ in: MC('dandelion', 16), out: S(1) },
		{ in: MC('poppy', 16), out: S(1) },
		{ in: MC('oxeye_daisy', 16), out: S(1) },
		{ in: MC('bread', 8), out: S(1) },
		{ in: MC('brown_mushroom', 8), out: S(1) },
		{ in: MC('red_mushroom', 8), out: S(1) },
		{ in: BOP('toadstool', 8), out: S(1) },
		{ in: MC('kelp', 64), out: S(1) },
		{ in: MC('pumpkin', 9), out: S(1) },
		{ in: MC('#wool', 16), out: S(1) },
		{ in: MC('melon', 3), out: S(1) }
	])

	profession("木匠", "Carpentry", 0xD0AF84, 0x966C3B, [
		{ in: MC('oak_log', 64), out: S(1) },
		{ in: MC('spruce_log', 64), out: S(1) },
		{ in: MC('jungle_log', 64), out: S(1) },
		{ in: MC('dark_oak_log', 64), out: S(1) },
		{ in: BOP('redwood_log', 64), out: S(1) },
		{ in: BOP('fir_log', 64), out: S(1) },
		{ in: BOP('umbran_log', 64), out: S(1) },
		{ in: BOP('dead_log', 64), out: S(1) },
		{ in: MC('acacia_log', 64), out: S(2) },
		{ in: MC('birch_log', 64), out: S(2) },
		{ in: BOP('cherry_log', 64), out: S(2) },
		{ in: BOP('willow_log', 64), out: S(3) },
		{ in: BOP('palm_log', 64), out: S(3) },
		{ in: BOP('mahogany_log', 64), out: S(3) },
		{ in: BOP('magic_log', 64), out: S(3) },
		{ in: MC('crimson_stem', 64), out: S(4) },
		{ in: MC('warped_stem', 64), out: S(4) },
		{ in: BOP('hellbark_log', 64), out: S(8) }
	])

	profession("矿工", "Mining", 0x1C1124, 0x88FFF7, [
		{ in: CR('crushed_iron_ore', 16), out: S(8) },
		{ in: CR('crushed_copper_ore', 16), out: S(8) },
		{ in: CR('crushed_zinc_ore', 16), out: S(8) },
		{ in: CR('crushed_gold_ore', 16), out: S(10) },
		{ in: CR('crushed_nickel_ore', 16), out: S(12) },
		{ in: CR('crushed_lead_ore', 16), out: S(12) },
		{ in: MC('andesite', 64), out: S(1) },
		{ in: MC('granite', 64), out: S(1) },
		{ in: MC('diorite', 64), out: S(1) },
		{ in: MC('sandstone', 64), out: S(1) },
		{ in: CR('limestone', 64), out: S(1) },
		{ in: TE('cinnabar', 8), out: S(6) },
		{ in: TE('sulfur', 16), out: S(6) },
		{ in: TE('niter', 16), out: S(6) },
		{ in: MC('lapis_lazuli', 16), out: S(6) },
		{ in: TE('apatite', 16), out: S(4) },
		{ in: TE('sapphire', 1), out: S(10) },
		{ in: TE('ruby', 1), out: S(10) },
		{ in: MC('diamond', 1), out: S(14) },
		{ in: MC('coal', 16), out: S(2) }
	])

	profession("石匠", "Masonry", 0x5E6F64, 0xBA7967, [
		{ in: SP('checker_block', 64), out: S(4) },
		{ in: AP('basalt_tiles', 64), out: S(6) },
		{ in: TC('seared_bricks', 64), out: S(10) },
		{ in: AP('sunmetal_block', 64), out: S(8) },
		{ in: AP('osseous_bricks', 64), out: S(6) },
		{ in: AP('packed_ice_pillar', 64), out: S(8) },
		{ in: AP('flint_tiles', 64), out: S(4) },
		{ in: AP('abyssaline', 64), out: S(12) },
		{ in: AP('gilded_sandstone', 64), out: S(10) },
		{ in: MC('bricks', 64), out: S(6) },
		{ in: TC('mud_bricks', 64), out: S(6) },
		{ in: AP('olivestone_bricks', 64), out: S(4) },
		{ in: MC('quartz_bricks', 64), out: S(18) },
		{ in: AP('algal_bricks', 64), out: S(6) },
		{ in: TC('lavawood', 64), out: S(6) },
		{ in: CR('ornate_iron_window', 64), out: S(10) },
		{ in: MC('mossy_cobblestone', 64), out: S(6) },
		{ in: F('#glazed_terracotta', 64), out: S(6) },
		{ in: SP('daub_brace', 64), out: S(8) }
	])

	profession("猎人", "Hunting", 0x393E46, 0xCF0000, [
		{ in: RQ('slime_pearl'), out: S(6) },
		{ in: RQ('catalyzing_gland'), out: S(10) },
		{ in: RQ('witch_hat'), out: S(15) },
		{ in: RQ('squid_beak'), out: S(3) },
		{ in: RQ('withered_rib'), out: S(15) },
		{ in: RQ('rib_bone'), out: S(5) },
		{ in: RQ('zombie_heart'), out: S(5) },
		{ in: RQ('chelicerae'), out: S(5) },
		{ in: RQ('bat_wing'), out: S(10) },
		{ in: RQ('frozen_core'), out: S(4) },
		{ in: RQ('nebulous_heart'), out: S(5) },
		{ in: RQ('molten_core'), out: S(5) },
		{ in: RQ('eye_of_the_storm'), out: S(12) },
		{ in: MC('phantom_membrane'), out: S(8) },
		{ in: MC('rabbit_foot'), out: S(8) },
		{ in: MC('nether_star'), out: G(1) },
		{ in: MC('dragon_breath'), out: S(1) },
		{ in: MC('ghast_tear'), out: S(10) },
		{ in: MC('dragon_egg'), out: G(2) },
		{ in: RQ('guardian_spike'), out: S(6) }
	])

	profession("厨师", "Cooking", 0xD8B384, 0xF7DAD9, [
		{ in: CR('bar_of_chocolate', 16), out: S(4) },
		{ in: CR('honeyed_apple', 16), out: S(4) },
		{ in: CR('builders_tea', 16), out: S(4) },
		{ in: FD('hot_cocoa', 16), out: S(5) },
		{ in: FD('tomato_sauce', 8), out: S(3) },
		{ in: FD('apple_pie_slice', 16), out: S(3) },
		{ in: FD('chocolate_pie_slice', 16), out: S(4) },
		{ in: FD('sweet_berry_cheesecake_slice', 17), out: S(3) },
		{ in: FD('cake_slice', 14), out: S(3) },
		{ in: FD('sweet_berry_cookie', 64), out: S(2) },
		{ in: FD('honey_cookie', 64), out: S(2) },
		{ in: MC('cookie', 64), out: S(2) },
		{ in: FD('melon_popsicle', 16), out: S(7) },
		{ in: FD('fruit_salad', 16), out: S(7) },
		{ in: FD('mixed_salad', 16), out: S(9) },
		{ in: FD('nether_salad', 16), out: S(5) },
		{ in: FD('barbecue_stick', 16), out: S(6) },
		{ in: FD('egg_sandwich', 16), out: S(5) },
		{ in: FD('chicken_sandwich', 16), out: S(9) },
		{ in: FD('bacon_sandwich', 16), out: S(9) },
		{ in: FD('hamburger', 16), out: S(11) },
		{ in: FD('mutton_wrap', 16), out: S(10) },
		{ in: FD('dumplings', 16), out: S(7) },
		{ in: FD('stuffed_potato', 16), out: S(6) },
		{ in: FD('cabbage_rolls', 16), out: S(5) },
		{ in: FD('beef_stew', 16), out: S(8) },
		{ in: FD('chicken_soup', 16), out: S(9) },
		{ in: MC('rabbit_stew', 16), out: S(10) },
		{ in: MC('beetroot_soup', 16), out: S(7) },
		{ in: MC('pumpkin_pie', 16), out: S(6) },
		{ in: FD('vegetable_soup', 16), out: S(9) },
		{ in: SP('pancake', 32), out: S(4) },
		{ in: FD('fish_stew', 16), out: S(9) },
		{ in: FD('fried_rice', 16), out: S(8) },
		{ in: FD('pumpkin_soup', 16), out: S(12) },
		{ in: FD('baked_cod_stew', 16), out: S(9) },
		{ in: FD('noodle_soup', 16), out: S(9) },
		{ in: FD('pasta_with_meatballs', 16), out: S(10) },
		{ in: FD('pasta_with_mutton_chop', 16), out: S(10) },
		{ in: FD('roasted_mutton_chops', 16), out: S(9) },
		{ in: FD('vegetable_noodles', 16), out: S(10) },
		{ in: FD('steak_and_potatoes', 16), out: S(9) },
		{ in: FD('ratatouille', 16), out: S(9) },
		{ in: FD('squid_ink_pasta', 16), out: S(11) },
		{ in: FD('roast_chicken', 16), out: S(7) },
		{ in: FD('stuffed_pumpkin', 16), out: S(9) },
		{ in: FD('honey_glazed_ham', 16), out: S(7) },
		{ in: FD('shepherds_pie', 16), out: S(7) },
		{ in: AC('sushi', 16), out: S(3) },
		{ in: CR('sweet_roll', 16), out: S(4) }
	])

	let quota = 8
	profession("渔夫", "Fishing", 0x9DDFD3, 0xDBF6E9, [
		{ in: MC('cod', quota), out: S(1) },
		{ in: MC('salmon', quota), out: S(1) },
		{ in: MC('pufferfish', quota), out: S(1) },
		{ in: MC('tropical_fish', quota), out: S(1) },
		{ in: AC('atlantic_herring', quota), out: S(3) },
		{ in: AC('synodontis', quota), out: S(3) },
		{ in: AC('bluegill', quota), out: S(3) },
		{ in: AC('perch', quota), out: S(3) },
		{ in: AC('tambaqui', quota), out: S(3) },
		{ in: AC('minnow', quota), out: S(4) },
		{ in: AC('blackfish', quota), out: S(4) },
		{ in: AC('pink_salmon', quota), out: S(5) },
		{ in: AC('brown_trout', quota), out: S(5) },
		{ in: AC('carp', quota), out: S(5) },
		{ in: AC('pollock', quota), out: S(5) },
		{ in: AC('smallmouth_bass', quota), out: S(5) },
		{ in: AC('boulti', quota), out: S(5) },
		{ in: AC('red_shrooma', quota), out: S(5) },
		{ in: AC('brown_shrooma', quota), out: S(5) },
		{ in: AC('gar', quota), out: S(7) },
		{ in: AC('rainbow_trout', quota), out: S(7) },
		{ in: AC('bayad', quota), out: S(7) },
		{ in: AC('piranha', quota), out: S(7) },
		{ in: AC('jellyfish', quota), out: S(7) },
		{ in: AC('red_grouper', quota), out: S(7) },
		{ in: AC('atlantic_cod', quota), out: S(7) },
		{ in: AC('muskellunge', quota), out: S(8) },
		{ in: AC('pacific_halibut', quota), out: S(8) },
		{ in: AC('atlantic_halibut', quota), out: S(8) },
		{ in: AC('catfish', quota), out: S(10) },
		{ in: AC('capitaine', quota), out: S(10) },
		{ in: AC('tuna', quota), out: S(10) },
		{ in: AC('arapaima', quota), out: S(10) },
		{ in: AC('arrau_turtle', quota), out: S(10) },
		{ in: AC('box_turtle', quota), out: S(10) },
		{ in: AC('starshell_turtle', quota), out: S(10) },
		{ in: AC('goldfish', quota), out: S(10) },
		{ in: AC('neptunium_ingot', 5), out: S(16) }
	])

	profession("铁匠", "Smithing", 0xFFC93C, 0xFF7A00, [
		{ in: MC('iron_boots'), out: S(2) },
		{ in: MC('iron_leggings'), out: S(4) },
		{ in: MC('iron_chestplate'), out: S(4) },
		{ in: TC('ingot_cast'), out: S(2) },
		{ in: TC('gem_cast'), out: S(4) },
		{ in: MC('iron_helmet'), out: S(3) },
		{ in: MC('golden_boots'), out: S(4) },
		{ in: MC('golden_leggings'), out: S(7) },
		{ in: MC('golden_chestplate'), out: S(8) },
		{ in: MC('golden_helmet'), out: S(5) },
		{ in: MC('golden_apple'), out: S(10) },
		{ in: MC('arrow', 32), out: S(3) },
		{ in: MC('iron_sword'), out: S(1) },
		{ in: MC('golden_sword'), out: S(2) }
	])

	trade("货币兑换卡", "Exchange Currencies", 0xEBA83A, 0xF4F4F4, [
		{ in: G(1), out: S(64) },
		{ in: S(64), out: G(1) }
	], true)

	let DATAGEN_QUESTS = false

	let data = []
	let group_max_width = []
	let current_group_max_width = 0
	let simulate = DATAGEN_QUESTS
	let entry_cost = 10

	let row = 0
	let col = 0
	let group = 0

	let next_group = () => {
		group++
		if (simulate)
			group_max_width.push(current_group_max_width)
		current_group_max_width = 0
		col = 0
		row++
	}

	let simple = (zhname, name, item, coin, unit, c1, c2) => {
		if (!simulate)
			trade(zhname, name, c1, c2, [{ in: unit(coin), out: item }])
		if (!DATAGEN_QUESTS)
			return

		current_group_max_width = Math.min(8, current_group_max_width + 1)
		if (simulate)
			return

		let silver = unit == S
		let split = item.split('x')
		let amount = split[0]
		let id = split.splice(1).join('x').replace(' ', '')
		let card_id = KJ("trade_card_" + name.toLowerCase().replace("'", "").split(' ').join('_'))

		if (col > 7) {
			col = 0
			row++
		}

		let x = col - (group_max_width[group] - 1) / 2
		let y = row + group / 2
		col++

		let template = `
		{
			title: "${amount}x ${zhname}"
			icon: "${id}"
			disable_toast: true
			x: ${x}d
			y: ${y}d
			shape: "hexagon"
			subtitle: "${coin} ${silver ? "银币" : "金币"}"
			tasks: [{
				type: "item"
				item: "thermal:silver_coin"
				icon: { id: "thermal:silver_coin", Count: ${entry_cost}b }
				count: ${entry_cost}L
			}]
			rewards: [
				{
					type: "item"
					auto: "enabled"
					item: "${card_id}"
				}
				{
					type: "custom"
					title: "可重复"
					icon: "thermal:machine_cycle_augment"
					tags: ["reset"]
					auto: "no_toast"
				}
			]
		}`
		data.push(template)
	}

	while (true) {
		group = 0
		row = 0

		entry_cost = 10
		simple("泥土", "Dirt", MC('dirt', 16), 2, S, 0x513825, 0xA87954)
		simple("沙子", "Sand", MC('sand', 16), 4, S, 0xC2B289, 0xD8D6B9)
		simple("沙砾", "Gravel", MC('gravel', 16), 2, S, 0x686160, 0xA19393)
		simple("黏土", "Clay", MC('clay', 16), 6, S, 0x878B95, 0x8E939D)
		simple("冰", "Ice", MC('ice', 16), 16, S, 0x7E99CF, 0xABB8D0)
		simple("黑石", "Blackstone", MC('blackstone', 16), 12, S, 0x140E0F, 0x2D2831)
		simple("砖泥", "Grout", TC('grout', 16), 12, S, 0x70737F, 0xAEB0B5)
		simple("圆石", "Cobblestone", MC('cobblestone', 16), 1, S, 0x585858, 0x646363)
		simple("花岗岩", "Granite", MC('granite', 16), 3, S, 0x563A2F, 0x9A6C5B)
		simple("闪长岩", "Diorite", MC('diorite', 16), 3, S, 0x7F7F7F, 0xD4D4D4)
		simple("安山岩", "Andesite", MC('andesite', 16), 3, S, 0x5F5F5F, 0x8E8E8E)
		simple("石灰岩", "Limestone", CR('limestone', 16), 3, S, 0xA7A89E, 0xC0C2BA)
		simple("熔渣", "Scoria", CR('scoria', 16), 3, S, 0x2A130C, 0x553427)
		simple("黑曜石", "Obsidian", MC('obsidian', 1), 8, S, 0x05030A, 0x36234C)
		
		next_group()
		entry_cost = 10
		simple("枯死木", "Dead Log", BOP('dead_log', 16), 2, S, 0x3D362D, 0x7A756D)
		simple("橡木", "Oak Log", MC('oak_log', 16), 4, S, 0x735932, 0xA88756)
		simple("白桦木", "Birch Log", MC('birch_log', 16), 4, S, 0xD6D6D2, 0xC4B079)
		simple("云杉木", "Spruce Log", MC('spruce_log', 16), 4, S, 0x523E21, 0x6F522F)
		simple("从林木", "Jungle Log", MC('jungle_log', 16), 4, S, 0x5A501D, 0x9B6E4C)
		simple("金合欢木", "Acacia Log", MC('acacia_log', 16), 4, S, 0x4F4B42, 0x9E552E)
		simple("深色橡木", "Dark Oak Log", MC('dark_oak_log', 16), 4, S, 0x2C1B0D, 0x422B15)
		simple("绯红菌柄", "Crimson Stem", MC('crimson_stem', 16), 8, S, 0x442332, 0x7A3852)
		simple("诡异菌柄", "Warped Stem", MC('warped_stem', 16), 8, S, 0x3E1E2D, 0x347776)
		
		next_group()
		entry_cost = 10
		simple("铁锭", "Iron Ingot", MC('iron_ingot', 8), 16, S, 0xA6A6A6, 0xD5D5D5)
		simple("锌锭", "Zinc Ingot", CR('zinc_ingot', 8), 16, S, 0x616A60, 0xD0D2C5)
		simple("铜锭", "Copper Ingot", MC('copper_ingot', 8), 16, S, 0xDD7E5D, 0xFCEFBA)
		simple("镍锭", "Nickel Ingot", TE('nickel_ingot', 8), 32, S, 0x977756, 0xE4D196)
		simple("铅锭", "Lead Ingot", TE('lead_ingot', 8), 32, S, 0x232456, 0x7C95A4)
		simple("金锭", "Gold Ingot", MC('gold_ingot', 8), 48, S, 0xD99413, 0xFAF25E)
		simple("铝锭", "Aluminum Ingot", IM('ingot_aluminum', 8), 48, S, 0xD99413, 0xFFF5EE)
		
		simple("安山合金", "Andesite Alloy", CR('andesite_alloy', 16), 8, S, 0x505050, 0x878787)
		simple("黄铜锭", "Brass Ingot", CR('brass_ingot', 8), 48, S, 0x6F3C2D, 0xFCF085)
		simple("殷钢锭", "Invar Ingot", TE('invar_ingot', 4), 64, S, 0x406D6C, 0xC3CAC1)
		
		entry_cost = 10
		simple("煤炭", "Coal", MC('coal', 16), 4, S, 0x1C1C1E, 0x383D45)
		simple("燧石", "Flint", MC('flint', 16), 4, S, 0x3C3B3B, 0xA6A6A6)
		simple("朱砂", "Cinnabar", TE('cinnabar', 4), 16, S, 0xFC7781, 0xFCCED0)
		simple("红石粉", "Redstone Dust", MC('redstone', 16), 8, S, 0xA80F01, 0xFC7781)
		simple("钻石", "Diamond", MC('diamond', 1), 1, G, 0x20C3B3, 0xD2FCF3)
		simple("青金石", "Lapis Lazuli", MC('lapis_lazuli', 8), 32, S, 0x335DC1, 0x7395E7)
		simple("绿宝石", "Emerald", MC('emerald', 1), 1, G, 0x00A82B, 0xADFACB)
		simple("硫磺", "Sulfur", TE('sulfur', 4), 8, S, 0xC7A94A, 0xEEF071)
		simple("磷灰石", "Apatite", TE('apatite', 4), 8, S, 0x27A9BB, 0x2CC7C9)
		simple("硝石", "Niter", TE('niter', 4), 8, S, 0x735A65, 0xB8AFAF)
		simple("下界石英", "Nether Quartz", MC('quartz', 8), 24, S, 0xB19E8F, 0xE7E2DB)
		simple("赛特斯石英", "Certus Quartz", AE2('certus_quartz_crystal', 8), 24, S, 0x91C5FC, 0xA7CBCF)
		simple("福鲁伊克斯石英", "Fluix Quartz", AE2('fluix_crystal', 8), 32, S, 0x8F5CCB, 0xFC7ED4)
		simple("硫化橡胶", "Cured Rubber", TE('cured_rubber', 6), 16, S, 0x3D363C, 0x594F55)
		
		next_group()
		entry_cost = 10
		simple("脚手架", "Scaffolding", MC('scaffolding', 16), 2, S, 0x7F5F41, 0xDDC683)
		simple("羊毛", "Wool", MC('white_wool', 1), 8, S, 0xBEC4C5, 0xE4E4E4)
		simple("海绵", "Sponge", MC('sponge', 1), 16, S, 0x8F8234, 0xCDCF4A)
		simple("蜘蛛网", "Cobweb", MC('cobweb', 1), 16, S, 0xC2CCCF, 0xFCFCFC)
		
		row += 4
		
		next_group()
		entry_cost = 10
		simple("稻米", "Rice", FD('rice_bag', 1), 4, S, 0x9F7653, 0xCEC6BC)
		simple("秸秆", "Straw", FD('straw', 32), 8, S, 0x623A17, 0x966537)
		simple("夜光菇", "Glowshroom", BOP('glowshroom', 4), 9, S, 0x2C65C9, 0x83A7B7)
		simple("荆棘", "Bramble", BOP('bramble', 4), 9, S, 0x8C3122, 0xECCDBC)
		simple("大麦", "Barley", BOP('barley', 4), 4, S, 0xB78B44, 0xD8BC64)
		simple("水草", "Watergrass", BOP('watergrass', 4), 4, S, 0x43763D, 0x538B51)
		simple("芦苇", "Reed", BOP('reed', 4), 5, S, 0x7B4E35, 0xB2855C)
		simple("三叶草花瓣", "Clover Petal", BOP('huge_clover_petal', 4), 10, S, 0x5B8A4F, 0x6FA960)
		simple("西班牙苔藓", "Spanish Moss", BOP('spanish_moss', 4), 7, S, 0x395B2A, 0xA2C790)
		simple("柳树藤", "Willow Vine", BOP('willow_vine', 4), 7, S, 0x265F0D, 0x317B10)
		simple("香蒲", "Cattail", BOP('cattail', 4), 4, S, 0x186B2B, 0x845738)
		simple("甘蔗", "Sugar Cane", MC('sugar_cane', 4), 3, S, 0x688546, 0xC5FC85)
		simple("海带", "Kelp", MC('kelp', 8), 3, S, 0x5B8131, 0x58A92F)
		simple("竹子", "Bamboo", MC('bamboo', 8), 5, S, 0x4F7416, 0x88AC5F)
		simple("甜浆果", "Sweet Berries", MC('sweet_berries', 8), 11, S, 0x27613F, 0xA30700)
		simple("藤蔓", "Vines", MC('vine', 4), 7, S, 0x183D08, 0x317B10)
		simple("树木肥料", "Tree Fertilizer", CR('tree_fertilizer', 1), 8, S, 0xCF8469, 0x71933A)
		
		next_group()
		entry_cost = 10
		simple("抹灰", "Daub", SP('daub', 16), 5, S, 0xBFBAAA, 0xCBC8B6)
		simple("通透玻璃", "Clear Glass", TC('clear_glass', 16), 4, S, 0xA9C3CF, 0xE8E8E8)
		simple("铜砖块", "Copper Shingles", CR('copper_shingles', 16), 3, S, 0xB5654B, 0xE4BB79)
		simple("海藻砖块", "Algal Bricks", AP('algal_bricks', 32), 6, S, 0x292926, 0x3D4D48)
		simple("橄榄石砖块", "Olivestone Bricks", AP('olivestone_bricks', 32), 8, S, 0x3A3C2E, 0x57553E)
		simple("耀阳金属块", "Sunmetal", AP('sunmetal_block', 32), 8, S, 0x603E38, 0xB48764)
		simple("金属板块", "Plating Block", AP('plating_block', 32), 8, S, 0x222225, 0x39383C)
		simple("扭曲木板", "Twisted Planks", AP('twisted_planks', 32), 8, S, 0x5E5259, 0x72616B)
		simple("骨砖", "Osseous Bricks", AP('osseous_bricks', 32), 8, S, 0x9D976F, 0xD3D0BF)
		simple("焦黑石头", "Seared Stone", TC('seared_stone', 16), 32, S, 0x393734, 0x59534F)
		simple("焦灼石", "Scorched Stone", TC('scorched_stone', 16), 32, S, 0x382C25, 0x4C3F37)
		
		simple("灯笼", "Lantern", MC('lantern', 1), 1, S, 0x484F64, 0xF6C765)
		simple("铜灯笼", "Copper Lantern", SP('copper_lantern', 1), 1, S, 0xB36535, 0xF3B154)
		simple("黄铜灯笼", "Brass Lantern", SP('brass_lantern', 1), 1, S, 0xA47C37, 0xFAEACF)
		simple("绯红灯笼", "Crimson Lantern", SP('crimson_lantern', 1), 1, S, 0x9C0E2C, 0xE7EB56)
		
		next_group()
		entry_cost = 10
		simple("黏液球", "Slime Ball", MC('slime_ball', 4), 24, S, 0x4F7E48, 0x8AD480)
		simple("线", "String", MC('string', 4), 5, S, 0x2E4446, 0xD8D8D8)
		simple("羽毛", "Feather", MC('feather', 4), 6, S, 0xD0D0D0, 0xFCFCFC)
		simple("火药", "Gunpowder", MC('gunpowder', 4), 7, S, 0x535353, 0x717171)
		simple("皮革", "Leather", MC('leather', 4), 8, S, 0x873A25, 0xC45B34)
		simple("墨囊", "Ink Sac", MC('ink_sac', 4), 8, S, 0x493F49, 0x786470)
		simple("附魔之瓶", "Experience", MC('experience_bottle', 1), 8, S, 0x689AC7, 0xFFF2FF)
		simple("潜影壳", "Shulker Shell", MC('shulker_shell', 1), 2, G, 0x6B476A, 0x956895)
		simple("蜘蛛眼", "Spider Eye", MC('spider_eye', 4), 10, S, 0x64062A, 0xC25E6A)
		simple("末影珍珠", "Ender Pearl", MC('ender_pearl', 1), 48, S, 0x0B4C41, 0x2BCBAF)
		simple("腐肉", "Rotten Flesh", MC('rotten_flesh', 4), 3, S, 0xB24320, 0x695C18)
		simple("烈焰棒", "Blaze Rod", MC('blaze_rod', 1), 20, S, 0xAC3B00, 0xD5AC26)
		simple("骨头", "Bone", MC('bone', 4), 8, S, 0xC9C4A3, 0xC9C4A3)
		simple("海晶碎片", "Prismarine Shard", MC('prismarine_shard', 4), 16, S, 0x2F6355, 0x8FC0AA)
		simple("海晶砂粒", "Prismarine Crystals", MC('prismarine_crystals', 4), 24, S, 0x71A296, 0xDCE6D9)
		
		entry_cost = 10
		simple("女巫之帽", "Witch Hat", RQ('witch_hat', 1), 1, G, 0x424242, 0x568125)
		simple("僵尸之心", "Zombie heart", RQ('zombie_heart', 1), 32, S, 0x532B38, 0x8D584A)
		simple("鱿鱼嘴", "Squid Beak", RQ('squid_beak', 1), 32, S, 0x00613B, 0x5BCDA1)
		simple("肋骨", "Rib Bone", RQ('rib_bone', 1), 32, S, 0xDFDDCE, 0xFAF9E9)
		simple("酶腺", "Catalyzing Gland", RQ('catalyzing_gland', 1), 48, S, 0x268E23, 0x63CA52)
		simple("螯角", "Chelicerae", RQ('chelicerae', 1), 32, S, 0x251721, 0x4D0C3B)
		simple("黏液珍珠", "Slime Pearl", RQ('slime_pearl', 1), 48, S, 0x1B9D33, 0x84F58E)
		simple("蝙蝠翅膀", "Bat Wing", RQ('bat_wing', 1), 2, G, 0x464646, 0x6D6D6D)
		simple("调灵肋骨", "Withered Rib", RQ('withered_rib', 1), 2, G, 0x2A2E2E, 0x434949)
		simple("熔火之心", "Molten Core", RQ('molten_core', 1), 48, S, 0xED7102, 0xFAFC58)
		simple("风暴之眼", "Eye of the Storm", RQ('eye_of_the_storm', 1), 2, G, 0xFCD607, 0x96FC52)
		simple("霜冻核心", "Frozen Core", RQ('frozen_core', 1), 48, S, 0x008DC2, 0x7571FB)
		simple("朦胧之心", "Nebulous Heart", RQ('nebulous_heart', 1), 1, G, 0x6200A0, 0xE500C3)
		simple("守卫者之刺", "Guardian Spike", RQ('guardian_spike', 1), 1, G, 0x7F4215, 0xE29964)
		simple("幻翼膜", "Phantom Membrane", MC('phantom_membrane', 1), 48, S, 0x6E506B, 0xC1B79F)
		simple("烈焰蛋糕", "Blaze Cake", CR('blaze_cake', 1), 16, S, 0x834141, 0xFCE083)
		next_group()

		if (!DATAGEN_QUESTS)
			break
		if (!simulate)
			break
		simulate = false
	}


	if (DATAGEN_QUESTS) {
		console.log("QUEST PASTER:")
		console.log(data.join(""))
		console.log(":QUEST PASTER END")
	}

})
