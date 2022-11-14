onEvent("worldgen.remove", event => {
	event.removeFeatureById("underground_ores", [
		"mekanism:tin_ore",
		"mekanism:deepslate_tin_ore",
		"mekanism:lead_ore",
		"mekanism:deepslate_lead_ore",
		"immersiveengineering:ore_lead",
		"immersiveengineering:deepslate_ore_lead",
		"minecraft:redstone_ore",
		"minecraft:deepslate_redstone_ore",
		"immersiveengineering:ore_silver",
		"immersiveengineering:deepslate_ore_silver",
		"thermal:silver_ore",
		"thermal:deepslate_silver_ore",
		"immersiveengineering:ore_nickel",
		"immersiveengineering:deepslate_ore_nickel",
		"immersiveengineering:ore_uranium",
		"immersiveengineering:deepslate_ore_uranium",
		"occultism:silver_ore",
		"occultism:silver_ore_deepslate"
	])
})