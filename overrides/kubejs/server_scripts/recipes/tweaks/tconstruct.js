onEvent("recipes", event => {
  event.remove({ id: TC('smeltery/alloys/molten_bronze') })
	event.remove({ id: TC('smeltery/alloys/molten_brass') })
	event.remove({ id: TC('smeltery/alloys/molten_invar') })
	event.remove({ id: TC('smeltery/alloys/molten_electrum') })
	event.remove({ id: TC('smeltery/alloys/molten_enderium') })
	
	event.remove({ type: MC("crafting_shapeless"), output: "createplus:brass_dust" })

	event.remove({ id: TC("smeltery/casting/seared/smeltery_controller") })
	event.remove({ id: TC("smeltery/melting/copper/smeltery_controller") })

	event.remove({ id: TC('smeltery/casting/scorched/foundry_controller') })
	event.remove({ id: TC('smeltery/melting/soul/sand') })

	event.shaped("tconstruct:smeltery_controller", [
		"SSS",
		"STS",
		"SSS"
	  ], {
		T: 'tconstruct:seared_melter',
		S: 'kubejs:sealed_mechanism'
	  })

	event.shaped("tconstruct:foundry_controller", [
		"SSS",
		"STS",
		"SSS"
	  ], {
		T: 'tconstruct:scorched_alloyer',
		S: 'kubejs:infernal_mechanism'
	  })

	event.custom({
		"type": "tconstruct:melting",
		"ingredient": {
			"item": "minecraft:redstone"
		},
		"result": {
			"fluid": "thermal:redstone",
			"amount": 90
		},
		"temperature": 250,
		"time": 15
	})
	event.custom({
		"type": "tconstruct:melting",
		"ingredient": {
			"item": "minecraft:redstone_block"
		},
		"result": {
			"fluid": "thermal:redstone",
			"amount": 810
		},
		"temperature": 250,
		"time": 135
	})
    event.custom({
		"type": "tconstruct:melting",
		"ingredient": {
			"item": "avaritia:infinity_ingot"
		},
		"result": {
			"fluid": "kubejs:infinity",
			"amount": 90
		},
		"temperature": 250,
		"time": 135
	})
})