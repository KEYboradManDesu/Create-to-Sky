onEvent("block.registry", event => {
  for (i = 0; i < 15; i++) {
    event.create(`failed_alchemy_${i}`)
      .material("glass")
      .color(0, 0x394867)
      .color(1, 0x14274E)
      .hardness(0.1)
      .box(.25, 0, .25, .75, 14.0 / 16.0, .75, false)
      .model(modpackId + ":block/mundane_substrate")
      .displayName(`${i + 1}号凡品炼金混合物`)
      .renderType("cutout")
      .item(e => e.color(0, 0x394867).color(1, 0x14274E))
      .tagBlock("minecraft:mineable/pickaxe")
  }
  global.substrates = []
  global.substrate_mapping = {}
  var current_category = []
  var category_index = 0
  var substrate_index = 0

  let category = () => {
    global.substrates.push(current_category)
    current_category = []
    category_index++
    substrate_index = 0
  }

  let substrate_base = (c1, c2, id, name, localName, model, ingredient, outputItem) => {
    global.substrate_mapping[id] = {
      category: category_index,
      index: substrate_index,
      name: name
    }
    current_category.push({
      id: "kubejs" + `:substrate_${id}`,
      ingredient: ingredient,
      outputItem: outputItem
    })
    event.create(`substrate_${id}`)
      .material("glass")
      .color(0, c1)
      .color(1, c2)
      .hardness(0.1)
      .box(.25, 0, .25, .75, 14.0 / 16.0, .75, false)
      .model(modpackId + ":block/" + model)
      .displayName(localName)
      .renderType("cutout")
      .item(e => e.rarity(model == "catalyst" ? RARITY_UNCOMMON : RARITY_COMMON).color(0, c1).color(1, c2))
      .tagBoth(modpackId + ":substrates")
      .tagBlock("minecraft:mineable/pickaxe")
    substrate_index++
  }

  let reagent = (c1, c2, id, name, localName, ingredient, outputItem) => substrate_base(c1, c2, id, name, `${localName}反应物`, "substrate", ingredient, outputItem)
  let catalyst = (c1, c2, id, name, localName, ingredient) => substrate_base(c1, c2, id, name, `${localName}催化剂`, "catalyst", ingredient)

  reagent(0x5F5F5F, 0x8E8E8E, "andesite", "Andesite", "§7安山岩§r", "minecraft:andesite")
  reagent(0x7F7F7F, 0xD4D4D4, "diorite", "Diorite", "§7闪长岩§r", "minecraft:diorite")
  reagent(0x563A2F, 0x9A6C5B, "granite", "Granite", "§7花岗岩§r", "minecraft:granite")
  reagent(0x585858, 0x646363, "cobblestone", "Stone", "§7岩石§r", "minecraft:cobblestone")
  reagent(0x32333D, 0x5C5C5C, "basalt", "Basalt", "§7玄武岩§r", "minecraft:basalt")
  reagent(0x6B5D4F, 0x7D6B5A, "limestone", "Limestone", "§7石灰岩§r", "create:limestone")
  category()
  reagent(0xD30000, 0xB80F0A, "red", "Crimson", "§4烟栗§r", "minecraft:red_dye")
  reagent(0xFC6600, 0xb1560f, "orange", "Orange", "§6赭石§r", "minecraft:orange_dye")		//	biomesoplenty:burning_blossom
  reagent(0xFFF200, 0xdba520, "yellow", "Goldenrod", "§e藤黄§r", "minecraft:yellow_dye")	//	biomesoplenty:goldenrod
  reagent(0x9dc183, 0x708238, "green", "Olive", "§2粗孔雀绿§r", "minecraft:green_dye")	 //	 biomesoplenty:watergrass
  reagent(0x57a0d2, 0x0080fe, "blue", "Azure", "§3品绿§r", "minecraft:light_blue_dye")	//	biomesoplenty:blue_hydrangea
  reagent(0xb200ed, 0xff66cc, "magenta", "Fuchsia", "§d苋菜红§r", "minecraft:magenta_dye")
  category()
  reagent(0xAC3B00, 0xD5AC26, "blaze", "Blazing", "§6烈焰§r", "minecraft:blaze_powder")
  reagent(0x4F7E48, 0x8AD480, "slime", "Slime", "§a莱姆§r", "minecraft:slime_ball")
  reagent(0x5B151A, 0xBC3E49, "nether", "Nether", "§4下界§r", "minecraft:nether_wart")
  reagent(0x05030A, 0x36234C, "obsidian", "Obsidian", "§8曜黑§r", "create:powdered_obsidian")
  reagent(0x535353, 0x717171, "gunpowder", "Gunpowder", "§8易爆§r", "minecraft:gunpowder")
  reagent(0x529680, 0xA2CFC0, "prismarine", "Aquatic", "§3亲水§r", "minecraft:prismarine_shard")
  category()
  reagent(0x9E72BE, 0xB7C9D1, "arcane", "Arcane", "§7神秘§r", "forbidden_arcanus:arcane_crystal_dust")
  reagent(0x27A9BB, 0x2CC7C9, "apatite", "Apatite", "§3磷灰石§r", "thermal:apatite_dust")
	reagent(0x735A65, 0xB8AFAF, "niter", "Niter", "§6硝石§r", "thermal:niter_dust")
	reagent(0xB19E8F, 0xE7E2DB, "quartz", "Quartz", "§f下界石英§r", "#forge:dusts/quartz")
  reagent(0xC7A94A, 0xEEF071, "sulfur", "Sulfuric", "§6硫磺§r", "thermal:sulfur")
  reagent(0x91C5FC, 0xA7CBCF, "certus", "Certus Quartz", "§b赛特斯石英§r", "ae2:certus_quartz_dust")
  category()
  reagent(0x616A60, 0xD0D2C5, "zinc", "Zinc", "§3锌元素§r", "kubejs:zinc_dust")
  reagent(0xDD7E5D, 0xFCEFBA, "copper", "Copper", "§6铜元素§r", "thermal:copper_dust")
  reagent(0xA6A6A6, 0xD5D5D5, "iron", "Iron", "§7铁元素§r", "#forge:dusts/iron")
  reagent(0x232456, 0x7C95A4, "lead", "Lead", "§8铅元素§r", "#forge:dusts/lead")
  reagent(0xD99413, 0xFAF25E, "gold", "Gold", "§e金元素§r", "#forge:dusts/gold")
  category()
  reagent(0xFC7781, 0xFCCED0, "cinnabar", "Cinnabar", "§c朱砂§r", "thermal:cinnabar")
  reagent(0x335DC1, 0x7395E7, "lapis", "Lapis Lazuli", "§1青金石§r", "minecraft:lapis_lazuli")
  reagent(0x00A82B, 0xADFACB, "emerald", "Emerald", "§2绿宝石§r", "thermal:emerald_dust")
  reagent(0x20C3B3, 0xD2FCF3, "diamond", "Diamond", "§b钻石§r", "#forge:dusts/diamond")
  reagent(0x9D0A33, 0xFB7B71, "ruby", "Ruby", "§c红宝石§r", "thermal:ruby_dust")
  reagent(0x246BE9, 0x76C6FC, "sapphire", "Sapphire", "§9蓝宝石§r", "thermal:sapphire")
  category()
  catalyst(0x506D84, 0x889EAF, "igneous", "Igneous", "§d火成")
  catalyst(0xB5CDA3, 0xC9E4C5, "herbal", "Herbal", "§d草药")
  catalyst(0x9F5F80, 0xFF8474, "volatile", "Volatile", "§d不稳定")
  catalyst(0xFFB037, 0xFFE268, "crystal", "Crystalline", "§d晶化")
  catalyst(0x232457, 0x7D97A6, "metal", "Metallurgic", "§d箔层")
  catalyst(0x3EDBF0, 0xC0FEFC, "gem", "Gemstone", "§d辉光")
  category()

  event.create("substrate_chaos")
    .material("glass")
    .color(0, 0xb200ed)
    .color(1, 0xff66cc)
    .hardness(0.1)
    .box(.25, 0, .25, .75, 14.0 / 16.0, .75, false)
    .model(modpackId + ":block/chaos_catalyst")
    .displayName("§b§khu§on§mДa§r§b§k§oャ§lt.化§r§b§k§n劑§l\"【")
    .renderType("cutout")
    .item(e => e.rarity(RARITY_RARE).color(0, 0xb200ed).color(1, 0xff66cc))
    .tagBoth(modpackId + ":substrates")
    .tagBlock("minecraft:mineable/pickaxe")

  event.create("substrate_silicon")
    .material("glass")
    .color(0, 0x474449)
    .color(1, 0x967DA0)
    .hardness(0.1)
    .box(.25, 0, .25, .75, 14.0 / 16.0, .75, false)
    .model(modpackId + ":block/substrate")
    .displayName("§d高能硅反应物")
    .renderType("cutout")
    .item(e => e.rarity(RARITY_EPIC).color(0, 0x474449).color(1, 0x967DA0))
    .tagBoth(modpackId + ":substrates")
    .tagBlock("minecraft:mineable/pickaxe")

  event.create("substrate_silver")
    .material("glass")
    .color(0, 0x9FADB4)
    .color(1, 0xBECCD2)
    .hardness(0.1)
    .box(.25, 0, .25, .75, 14.0 / 16.0, .75, false)
    .model(modpackId + ":block/substrate")
    .displayName("§7银元素§r反应物")
    .renderType("cutout")
    .item(e => e.color(0, 0x9FADB4).color(1, 0xBECCD2))
    .tagBoth(modpackId + ":substrates")
    .tagBlock("minecraft:mineable/pickaxe")

  event.create("accellerator_glowstone")
    .material("glass")
    .color(0, 0xFFBC5E)
    .hardness(0.1)
    .box(.125, 0, .125, .875, 10.0 / 16.0, .875, false)
    .model(modpackId + ":block/accellerator")
    .displayName("§6荧石§r稳定剂")
    .renderType("cutout")
    .item(e => e.color(0, 0xFFBC5E))
    .tagBlock("minecraft:mineable/pickaxe")

  event.create(`accellerator_redstone`)
    .material("glass")
    .color(0, 0xAA0F01)
    .hardness(0.1)
    .box(.125, 0, .125, .875, 10.0 / 16.0, .875, false)
    .model(modpackId + ":block/accellerator")
    .displayName("§c红石§r稳定剂")
    .renderType("cutout")
    .item(e => e.color(0, 0xAA0F01))
    .tagBlock("minecraft:mineable/pickaxe")

  event.create(`accellerator_empty`)
    .material("glass")
    .hardness(0.1)
    .box(.125, 0, .125, .875, 10.0 / 16.0, .875, false)
    .model(modpackId + ":block/accellerator_empty")
    .displayName("幽灵稳定剂")
    .renderType("cutout")
    .item(e => e.color(0, 0xAA0F01))
    .tagBlock("minecraft:mineable/pickaxe")

  event.create("substrate_empty")
    .material("glass")
    .hardness(0.1)
    .box(.25, 0, .25, .75, 14.0 / 16.0, .75, false)
    .model(modpackId + ":block/substrate_empty")
    .displayName("幽灵反应物")
    .renderType("cutout")
    .item(e => e.color(0, 0x9FADB4).color(1, 0xBECCD2))
    .tagBlock("minecraft:mineable/pickaxe")
})