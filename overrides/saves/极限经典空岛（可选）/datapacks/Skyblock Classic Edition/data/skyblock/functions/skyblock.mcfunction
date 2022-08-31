#Function
function skyblock:changelog/misc/fix_end
function skyblock:changelog/building
function skyblock:versions/version_update
function skyblock:versions/legacy
setblock 0 62 0 minecraft:bedrock
scoreboard players add @a legacy 1
scoreboard players add @a skyblock_ID 1
recipe give @a *


##Scoreboard
scoreboard objectives add tp dummy
scoreboard objectives add skyblock_install dummy
scoreboard objectives add skyblock_island dummy
scoreboard players add @a skyblock_install 1


execute as @a[scores={skyblock_install=1}] run tellraw @a {"text":"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"}
execute as @a[scores={skyblock_install=2}] run tellraw @a ["",{"text":"Welcome to "},{"text":"Skyblock Classic Edition","bold":true},{"text":"\n\n\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\u25a0\n\nChoose the island:\n\n\n\n"},{"text":"\u25baLarge (Easy)","color":"green","clickEvent":{"action":"run_command","value":"/scoreboard players set @a skyblock_island 1"},"hoverEvent":{"action":"show_text","contents":"This island is made especially for beginners. This island is the only island not inspired by the original skyblock."}},{"text":"\n\n"},{"text":"\u25baNormal (Default)","color":"gold","clickEvent":{"action":"run_command","value":"/scoreboard players set @a skyblock_island 2"},"hoverEvent":{"action":"show_text","contents":"This island is the classic island that everyone knows but modernized for new versions. Recommended for those unfamiliar with the skyblock."}},{"text":"\n\n"},{"text":"\u25baSmall (Hard)","color":"red","clickEvent":{"action":"run_command","value":"/scoreboard players set @a skyblock_island 3"},"hoverEvent":{"action":"show_text","contents":"This island is very reminiscent of the Skyblock 2.0 island but modernized. For those who love challenges and know all the tricks of survival mode."}}]
execute as @a[scores={skyblock_install=2}] run tellraw @a ["",{"text":"\n"},{"text":"\u25baLegacy","italic":true,"color":"gray","clickEvent":{"action":"run_command","value":"/scoreboard objectives add legacy dummy"}},{"text":" ","italic":true,"color":"gray"},{"text":"[!]","italic":true,"color":"dark_red","hoverEvent":{"action":"show_text","contents":"(ATTENTION: DO NOT ENTER THE COMMAND IF YOU ARE IN 2.0.0 AND LATER. LOOK AT THE FILES IF YOU ARE IN THE CORRET VERSION)."}}]
execute as @a[scores={skyblock_install=1000..}] run scoreboard players set @a skyblock_install 0
execute as @a[scores={skyblock_install=1..}] run gamemode spectator @a
execute as @a[scores={skyblock_install=1..}] run tp @a 0 0 0 0 90
execute as @a[scores={skyblock_install=1}] run gamerule doDaylightCycle false
execute as @a[scores={skyblock_install=1}] run gamerule doWeatherCycle false
execute as @a[scores={skyblock_install=1}] run time set 0
execute as @a[scores={skyblock_install=1}] run weather clear
execute as @a[scores={skyblock_install=1}] run effect give @a saturation 6 250 true
execute as @a[scores={skyblock_install=1}] run setworldspawn 0 63 0


##Teleport
execute in minecraft:overworld run tp @a[scores={tp=1}] 0 64 0 0 90
execute in minecraft:the_nether run tp @a[scores={tp=2}] 0 0 0 0 90
execute as @a[scores={tp=1}] run effect give @a minecraft:regeneration 11 250 true


##Large


execute as @a[scores={skyblock_island=1}] run scoreboard objectives add skyblock_large minecraft.custom:minecraft.play_time
execute as @a[scores={skyblock_island=1}] run tellraw @a {"text":"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nLoading...."}
execute as @a[scores={skyblock_large=1..}] run scoreboard players set @a skyblock_install -1
execute as @a[scores={skyblock_large=1..}] run scoreboard players set @a skyblock_island -1


#Start
execute in minecraft:overworld as @a[scores={skyblock_large=1}] run difficulty normal
execute in minecraft:overworld as @a[scores={skyblock_large=1}] run gamerule commandBlockOutput false
execute in minecraft:overworld as @a[scores={skyblock_large=1}] run title @a title {"text":"Loading..."}
execute in minecraft:overworld as @a[scores={skyblock_large=1}] run title @a subtitle {"text":"Worlds"}
execute in minecraft:overworld as @a[scores={skyblock_large=1}] run title @a times 20 200 20
execute in minecraft:overworld as @a[scores={skyblock_large=1}] run gamerule announceAdvancements false


#Overworld
execute in minecraft:overworld as @a[scores={skyblock_large=2}] run fill -7 80 -12 7 55 5 minecraft:air
execute in minecraft:overworld as @a[scores={skyblock_large=2}] run fill 75 80 11 61 55 -9 minecraft:air
execute in minecraft:overworld as @a[scores={skyblock_large=3}] run scoreboard players set @a tp 1
execute in minecraft:overworld as @a[scores={skyblock_large=5}] run fill 3 62 -3 -3 63 3 minecraft:dirt
execute in minecraft:overworld as @a[scores={skyblock_large=6}] run fill -3 64 3 3 64 -3 minecraft:grass_block
execute in minecraft:overworld as @a[scores={skyblock_large=7}] run fill -1 64 0 1 64 0 minecraft:ice
execute in minecraft:overworld as @a[scores={skyblock_large=7}] run fill 0 64 1 1 64 1 minecraft:ice
execute in minecraft:overworld as @a[scores={skyblock_large=7}] run setblock 0 64 -1 minecraft:ice
execute in minecraft:overworld as @a[scores={skyblock_large=8}] run fill -1 63 -2 -1 64 -2 minecraft:rooted_dirt
execute in minecraft:overworld as @a[scores={skyblock_large=8}] run fill 2 63 1 1 63 1 minecraft:moss_block
execute in minecraft:overworld as @a[scores={skyblock_large=8}] run setblock 1 63 2 minecraft:moss_block
execute in minecraft:overworld as @a[scores={skyblock_large=9}] run fill -3 68 -4 1 71 0 oak_leaves[persistent=false]
execute in minecraft:overworld as @a[scores={skyblock_large=10}] run fill -1 65 -2 -1 70 -2 oak_log[axis=y]
execute in minecraft:overworld as @a[scores={skyblock_large=11}] run setblock 1 69 0 minecraft:air
execute in minecraft:overworld as @a[scores={skyblock_large=11}] run fill 1 68 -4 1 69 -4 minecraft:air
execute in minecraft:overworld as @a[scores={skyblock_large=11}] run setblock -3 68 -4 minecraft:air
execute in minecraft:overworld as @a[scores={skyblock_large=11}] run fill -3 70 0 1 71 0 minecraft:air
execute in minecraft:overworld as @a[scores={skyblock_large=11}] run fill 1 70 -1 1 71 -4 minecraft:air
execute in minecraft:overworld as @a[scores={skyblock_large=11}] run fill 0 71 -4 -3 70 -4 minecraft:air
execute in minecraft:overworld as @a[scores={skyblock_large=11}] run fill -3 70 -4 -3 71 0 minecraft:air
execute in minecraft:overworld as @a[scores={skyblock_large=11}] run setblock 0 71 -3 minecraft:air
execute in minecraft:overworld as @a[scores={skyblock_large=11}] run setblock -2 71 -1 minecraft:air
execute in minecraft:overworld as @a[scores={skyblock_large=11}] run setblock 0 71 -1 minecraft:air
execute in minecraft:overworld as @a[scores={skyblock_large=12}] run fill 0 65 -3 1 65 -3 minecraft:oak_fence[east=true,north=false,south=false,waterlogged=false,west=false]
execute in minecraft:overworld as @a[scores={skyblock_large=12}] run fill -1 65 3 1 65 3 minecraft:oak_fence[east=true,north=false,south=false,waterlogged=false,west=false]
execute in minecraft:overworld as @a[scores={skyblock_large=13}] run setblock 0 66 3 minecraft:torch
execute in minecraft:overworld as @a[scores={skyblock_large=13}] run setblock 0 65 2 minecraft:chest[facing=north,type=single,waterlogged=false]{Items:[{Count:1b,Slot:12b,id:"minecraft:ice"},{Count:1b,Slot:13b,id:"minecraft:filled_map",tag:{map:0}},{Count:1b,Slot:14b,id:"minecraft:lava_bucket"}]}
execute in minecraft:overworld as @a[scores={skyblock_large=13}] run setblock 0 61 0 minecraft:spore_blossom
execute in minecraft:overworld as @a[scores={skyblock_large=13}] run setblock 2 65 3 minecraft:large_fern[half=lower]
execute in minecraft:overworld as @a[scores={skyblock_large=14}] run setblock 2 66 3 minecraft:large_fern[half=upper]
execute in minecraft:overworld as @a[scores={skyblock_large=13}] run setblock 2 65 1 minecraft:rose_bush[half=lower]
execute in minecraft:overworld as @a[scores={skyblock_large=14}] run setblock 2 66 1 minecraft:rose_bush[half=upper]
execute in minecraft:overworld as @a[scores={skyblock_large=13}] run setblock 2 65 0 minecraft:tall_grass[half=lower]
execute in minecraft:overworld as @a[scores={skyblock_large=14}] run setblock 2 66 0 minecraft:tall_grass[half=upper]
execute in minecraft:overworld as @a[scores={skyblock_large=13}] run setblock -3 65 -1 minecraft:tall_grass[half=lower]
execute in minecraft:overworld as @a[scores={skyblock_large=14}] run setblock -3 66 -1 minecraft:tall_grass[half=upper]
execute in minecraft:overworld as @a[scores={skyblock_large=13}] run setblock -3 65 2 minecraft:sunflower[half=lower]
execute in minecraft:overworld as @a[scores={skyblock_large=14}] run setblock -3 66 2 minecraft:sunflower[half=upper]
execute in minecraft:overworld as @a[scores={skyblock_large=15}] run setblock -2 65 -2 minecraft:oxeye_daisy
execute in minecraft:overworld as @a[scores={skyblock_large=15}] run setblock 3 65 3 minecraft:pink_tulip
execute in minecraft:overworld as @a[scores={skyblock_large=15}] run setblock 3 65 -3 minecraft:blue_orchid
execute in minecraft:overworld as @a[scores={skyblock_large=15}] run setblock -3 65 0 minecraft:grass
execute in minecraft:overworld as @a[scores={skyblock_large=15}] run setblock -3 65 -3 minecraft:grass
execute in minecraft:overworld as @a[scores={skyblock_large=15}] run setblock -3 65 1 minecraft:grass
execute in minecraft:overworld as @a[scores={skyblock_large=15}] run setblock -3 65 3 minecraft:grass
execute in minecraft:overworld as @a[scores={skyblock_large=15}] run setblock -2 65 2 minecraft:grass
execute in minecraft:overworld as @a[scores={skyblock_large=15}] run setblock -2 65 1 minecraft:grass
execute in minecraft:overworld as @a[scores={skyblock_large=15}] run setblock -1 65 -1 minecraft:grass
execute in minecraft:overworld as @a[scores={skyblock_large=15}] run setblock -1 65 1 minecraft:grass
execute in minecraft:overworld as @a[scores={skyblock_large=15}] run setblock -1 65 2 minecraft:grass
execute in minecraft:overworld as @a[scores={skyblock_large=15}] run setblock 3 65 2 minecraft:grass
execute in minecraft:overworld as @a[scores={skyblock_large=15}] run setblock 3 65 -1 minecraft:grass
execute in minecraft:overworld as @a[scores={skyblock_large=15}] run setblock 2 65 -1 minecraft:grass
execute in minecraft:overworld as @a[scores={skyblock_large=15}] run setblock 1 65 -1 minecraft:grass
execute in minecraft:overworld as @a[scores={skyblock_large=15}] run setblock 2 65 -3 minecraft:grass
execute in minecraft:overworld as @a[scores={skyblock_large=20}] run setblock -1 66 -1 minecraft:birch_wall_sign[facing=south,waterlogged=false]{Color:"white",GlowingText:1b,Text1:'{"text":"Skyblock"}',Text2:'{"text":"Classic Edition"}',Text3:'{"text":"---------------"}',Text4:'{"text":"1.18.2"}'}
execute in minecraft:overworld as @a[scores={skyblock_large=21}] run fill 64 61 -6 70 61 0 minecraft:sandstone
execute in minecraft:overworld as @a[scores={skyblock_large=22}] run fill 70 62 0 64 64 -6 minecraft:sand
execute in minecraft:overworld as @a[scores={skyblock_large=23}] run setblock 67 65 -3 minecraft:chest[facing=west,type=single,waterlogged=false]{Items:[{Count:10b,Slot:4b,id:"minecraft:obsidian"},{Count:1b,Slot:12b,id:"minecraft:pumpkin_seeds"},{Count:1b,Slot:13b,id:"minecraft:melon_slice"},{Count:1b,Slot:14b,id:"minecraft:beetroot_seeds"},{Count:1b,Slot:22b,id:"minecraft:spyglass"}]}
execute in minecraft:overworld as @a[scores={skyblock_large=24}] run fill 65 65 -1 65 66 -1 minecraft:cactus
execute in minecraft:overworld as @a[scores={skyblock_large=24}] run fill 68 65 -4 68 67 -4 minecraft:cactus
execute in minecraft:overworld as @a[scores={skyblock_large=25}] run setblock 68 68 -4 minecraft:moss_carpet
execute in minecraft:overworld as @a[scores={skyblock_large=25}] run setblock 65 67 -1 minecraft:moss_carpet
execute in minecraft:overworld as @a[scores={skyblock_large=25}] run setblock 65 65 -3 minecraft:dead_bush
execute in minecraft:overworld as @a[scores={skyblock_large=25}] run setblock 68 65 -1 minecraft:dead_bush
execute in minecraft:overworld as @a[scores={skyblock_large=25}] run setblock 70 65 -5 minecraft:dead_bush
execute in minecraft:overworld as @a[scores={skyblock_large=50}] run scoreboard players set @a tp 2


#The Nether
execute in minecraft:the_nether as @a[scores={skyblock_large=51}] run fill 6 8 5 -9 -2 -30 minecraft:air
execute in minecraft:the_nether as @a[scores={skyblock_large=51}] run fill -5 3 27 5 -3 35 minecraft:air
execute in minecraft:the_nether as @a[scores={skyblock_large=52}] run fill -1 2 29 1 2 29 minecraft:end_portal_frame[eye=false,facing=south]
execute in minecraft:the_nether as @a[scores={skyblock_large=52}] run fill 2 2 30 2 2 32 minecraft:end_portal_frame[eye=false,facing=west]
execute in minecraft:the_nether as @a[scores={skyblock_large=52}] run fill 1 2 33 -1 2 33 minecraft:end_portal_frame[eye=false,facing=north]
execute in minecraft:the_nether as @a[scores={skyblock_large=52}] run fill -2 2 32 -2 2 30 minecraft:end_portal_frame[eye=false,facing=east]
execute in minecraft:the_nether as @a[scores={skyblock_large=52}] run fill 1 0 -1 -1 2 1 minecraft:glowstone
execute in minecraft:the_nether as @a[scores={skyblock_large=52}] run fill 2 2 2 -2 6 2 minecraft:obsidian
execute in minecraft:the_nether as @a[scores={skyblock_large=53}] run fill -1 5 2 1 3 2 minecraft:nether_portal
execute in minecraft:the_nether as @a[scores={skyblock_large=55}] run fill -6 0 -27 -5 1 -25 minecraft:netherrack
execute in minecraft:the_nether as @a[scores={skyblock_large=55}] run fill -4 0 -26 -4 1 -26 minecraft:netherrack
execute in minecraft:the_nether as @a[scores={skyblock_large=55}] run fill 4 0 -26 4 1 -26 minecraft:netherrack
execute in minecraft:the_nether as @a[scores={skyblock_large=55}] run fill 5 0 -25 6 1 -27 minecraft:netherrack
execute in minecraft:the_nether as @a[scores={skyblock_large=56}] run fill -6 2 -25 -5 2 -27 minecraft:warped_nylium
execute in minecraft:the_nether as @a[scores={skyblock_large=56}] run setblock -4 2 -26 minecraft:warped_nylium
execute in minecraft:the_nether as @a[scores={skyblock_large=56}] run fill 6 2 -25 5 2 -27 minecraft:crimson_nylium
execute in minecraft:the_nether as @a[scores={skyblock_large=56}] run setblock 4 2 -26 minecraft:crimson_nylium
execute in minecraft:the_nether as @a[scores={skyblock_large=56}] run setblock 5 3 -26 minecraft:crimson_roots
execute in minecraft:the_nether as @a[scores={skyblock_large=56}] run setblock 5 3 -27 minecraft:crimson_roots
execute in minecraft:the_nether as @a[scores={skyblock_large=56}] run setblock 5 3 -25 minecraft:crimson_fungus
execute in minecraft:the_nether as @a[scores={skyblock_large=56}] run setblock 6 3 -26 minecraft:crimson_fungus
execute in minecraft:the_nether as @a[scores={skyblock_large=56}] run setblock 5 0 -25 minecraft:weeping_vines
execute in minecraft:the_nether as @a[scores={skyblock_large=56}] run setblock -4 3 -26 minecraft:warped_roots
execute in minecraft:the_nether as @a[scores={skyblock_large=56}] run setblock -5 3 -27 minecraft:nether_sprouts
execute in minecraft:the_nether as @a[scores={skyblock_large=56}] run setblock -5 3 -25 minecraft:twisting_vines
execute in minecraft:the_nether as @a[scores={skyblock_large=57}] run setblock -6 3 -26 minecraft:warped_fungus
execute in minecraft:the_nether as @a[scores={skyblock_large=57}] run setblock -6 3 -27 minecraft:warped_roots
execute in minecraft:the_nether as @a[scores={skyblock_large=58}] run setblock -5 0 -25 minecraft:soul_soil
execute in minecraft:the_nether as @a[scores={skyblock_large=58}] run setblock -5 0 -26 minecraft:soul_soil
execute in minecraft:the_nether as @a[scores={skyblock_large=58}] run setblock -5 1 -26 minecraft:soul_sand
execute in minecraft:the_nether as @a[scores={skyblock_large=60}] run setblock 1 3 1 minecraft:chest[facing=north,type=single,waterlogged=false]{Items:[{Count:1b,Slot:10b,id:"minecraft:red_mushroom"},{Count:1b,Slot:12b,id:"minecraft:sugar_cane"},{Count:1b,Slot:13b,id:"minecraft:birch_sapling"},{Count:1b,Slot:14b,id:"minecraft:bamboo"},{Count:1b,Slot:16b,id:"minecraft:brown_mushroom"},{Count:1b,Slot:22b,id:"minecraft:pointed_dripstone"}]}
execute in minecraft:the_nether as @a[scores={skyblock_large=60}] run setblock 0 1 0 minecraft:lodestone
execute in minecraft:the_nether as @a[scores={skyblock_large=61}] run fill -1 2 -25 1 2 -27 minecraft:polished_blackstone_bricks
execute in minecraft:the_nether as @a[scores={skyblock_large=61}] run fill -1 1 -25 1 1 -27 minecraft:polished_blackstone_bricks
execute in minecraft:the_nether as @a[scores={skyblock_large=61}] run fill -1 0 -25 1 0 -27 minecraft:polished_blackstone_bricks
execute in minecraft:the_nether as @a[scores={skyblock_large=62}] run setblock 0 1 -27 minecraft:chiseled_polished_blackstone
execute in minecraft:the_nether as @a[scores={skyblock_large=63}] run setblock 0 1 -25 minecraft:chiseled_polished_blackstone
execute in minecraft:the_nether as @a[scores={skyblock_large=64}] run setblock -1 1 -26 minecraft:chiseled_polished_blackstone
execute in minecraft:the_nether as @a[scores={skyblock_large=65}] run setblock 0 2 -26 minecraft:chiseled_polished_blackstone
execute in minecraft:the_nether as @a[scores={skyblock_large=66}] run setblock 1 1 -26 minecraft:chiseled_polished_blackstone
execute in minecraft:the_nether as @a[scores={skyblock_large=67}] run setblock 0 0 -26 minecraft:chiseled_polished_blackstone
execute in minecraft:the_nether as @a[scores={skyblock_large=67}] run setblock 0 1 -26 minecraft:blue_ice
execute in minecraft:the_nether as @a[scores={skyblock_large=67}] run setblock 6 2 -27 minecraft:soul_sand
execute in minecraft:the_nether as @a[scores={skyblock_large=68}] run setblock 6 3 -27 minecraft:nether_wart
execute in minecraft:the_nether as @a[scores={skyblock_large=70}] run scoreboard objectives add fix_end dummy


#The End
# Soon ???


#End Install
execute as @a[scores={skyblock_large=95}] run scoreboard players set @a tp 1
execute as @a[scores={skyblock_large=95}] run spawnpoint @a 0 65 0
execute as @a[scores={skyblock_large=95}] run weather clear
execute as @a[scores={skyblock_large=95}] run scoreboard objectives add kills deathCount
execute as @a[scores={skyblock_large=95}] run scoreboard objectives setdisplay list kills
execute as @a[scores={skyblock_large=95}] run advancement revoke @a everything
execute as @a[scores={skyblock_large=105}] run scoreboard players set @a tp 0
execute as @a[scores={skyblock_large=105}] run title @a title ["",{"text":"Sky","bold":true,"color":"aqua"},{"text":"block","bold":true,"color":"dark_green"}]
execute as @a[scores={skyblock_large=106}] run title @a subtitle {"text":"Classic Edition","bold":true,"color":"dark_blue"}
execute as @a[scores={skyblock_large=106}] run title @a times 30 100 30
execute as @a[scores={skyblock_large=106}] run gamerule announceAdvancements true
execute as @a[scores={skyblock_large=108}] run gamerule doDaylightCycle true
execute as @a[scores={skyblock_large=108}] run gamerule doWeatherCycle true
execute as @a[scores={skyblock_large=109}] run time set 0
execute as @a[scores={skyblock_large=109}] run gamemode survival @a
execute as @a[scores={skyblock_large=109}] run scoreboard objectives add skyblock_ID dummy
execute as @a[scores={skyblock_large=150}] run execute in minecraft:overworld run tp @p 0 66 0 90 0


##Normal


execute as @a[scores={skyblock_island=2}] run scoreboard objectives add skyblock_normal minecraft.custom:minecraft.play_time
execute as @a[scores={skyblock_island=2}] run tellraw @a {"text":"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nLoading...."}
execute as @a[scores={skyblock_normal=1..}] run scoreboard players set @a skyblock_install -1
execute as @a[scores={skyblock_normal=1..}] run scoreboard players set @a skyblock_island -1


#Start
execute in minecraft:overworld as @a[scores={skyblock_normal=1}] run difficulty normal
execute in minecraft:overworld as @a[scores={skyblock_normal=1}] run gamerule commandBlockOutput false
execute in minecraft:overworld as @a[scores={skyblock_normal=1}] run title @a title {"text":"Loading..."}
execute in minecraft:overworld as @a[scores={skyblock_normal=1}] run title @a subtitle {"text":"Worlds"}
execute in minecraft:overworld as @a[scores={skyblock_normal=1}] run title @a times 20 200 20
execute in minecraft:overworld as @a[scores={skyblock_normal=1}] run gamerule announceAdvancements false


#Overworld
execute in minecraft:overworld as @a[scores={skyblock_normal=2}] run fill -7 80 -12 7 55 5 minecraft:air
execute in minecraft:overworld as @a[scores={skyblock_normal=2}] run fill 75 80 11 61 55 -9 minecraft:air
execute in minecraft:overworld as @a[scores={skyblock_normal=3}] run scoreboard players set @a tp 1
execute in minecraft:overworld as @a[scores={skyblock_normal=5}] run fill -4 62 1 1 63 -1 minecraft:dirt
execute in minecraft:overworld as @a[scores={skyblock_normal=5}] run fill 1 62 -2 -1 63 -4 minecraft:dirt
execute in minecraft:overworld as @a[scores={skyblock_normal=6}] run fill -4 64 1 1 64 -1 minecraft:grass_block
execute in minecraft:overworld as @a[scores={skyblock_normal=6}] run fill 1 64 -2 -1 64 -4 minecraft:grass_block
execute in minecraft:overworld as @a[scores={skyblock_normal=7}] run fill 2 71 -5 0 70 -3 minecraft:oak_leaves[persistent=false]
execute in minecraft:overworld as @a[scores={skyblock_normal=7}] run fill -1 71 -2 3 68 -6 minecraft:oak_leaves[persistent=false]
execute in minecraft:overworld as @a[scores={skyblock_normal=8}] run fill 1 65 -4 1 70 -4 minecraft:oak_log[axis=y]
execute in minecraft:overworld as @a[scores={skyblock_normal=9}] run fill 3 70 -6 3 71 -6 minecraft:air
execute in minecraft:overworld as @a[scores={skyblock_normal=9}] run fill 0 70 -5 0 71 -5 minecraft:air
execute in minecraft:overworld as @a[scores={skyblock_normal=9}] run fill 0 70 -3 0 71 -3 minecraft:air
execute in minecraft:overworld as @a[scores={skyblock_normal=9}] run fill 2 70 -3 2 71 -3 minecraft:air
execute in minecraft:overworld as @a[scores={skyblock_normal=9}] run fill -1 71 -2 3 70 -2 minecraft:air
execute in minecraft:overworld as @a[scores={skyblock_normal=9}] run fill 3 71 -3 3 70 -6 minecraft:air
execute in minecraft:overworld as @a[scores={skyblock_normal=9}] run fill 2 70 -6 -1 71 -6 minecraft:air
execute in minecraft:overworld as @a[scores={skyblock_normal=9}] run fill -1 71 -5 -1 70 -3 minecraft:air
execute in minecraft:overworld as @a[scores={skyblock_normal=9}] run setblock 2 71 -5 minecraft:air
execute in minecraft:overworld as @a[scores={skyblock_normal=9}] run setblock -1 68 -6 minecraft:air
execute in minecraft:overworld as @a[scores={skyblock_normal=9}] run setblock 1 64 -4 minecraft:rooted_dirt
execute in minecraft:overworld as @a[scores={skyblock_normal=9}] run setblock -4 65 0 minecraft:chest[facing=east,type=single,waterlogged=false]{Items:[{Count:1b,Slot:12b,id:"minecraft:ice"},{Count:1b,Slot:13b,id:"minecraft:filled_map",tag:{map:0}},{Count:1b,Slot:14b,id:"minecraft:lava_bucket"}]}
execute in minecraft:overworld as @a[scores={skyblock_normal=9}] run setblock -4 65 1 minecraft:blue_orchid
execute in minecraft:overworld as @a[scores={skyblock_normal=9}] run setblock -3 65 0 minecraft:dandelion
execute in minecraft:overworld as @a[scores={skyblock_normal=9}] run setblock -3 65 -1 minecraft:grass
execute in minecraft:overworld as @a[scores={skyblock_normal=9}] run setblock -2 65 -1 minecraft:grass
execute in minecraft:overworld as @a[scores={skyblock_normal=9}] run setblock -2 65 0 minecraft:fern
execute in minecraft:overworld as @a[scores={skyblock_normal=9}] run setblock -2 65 1 minecraft:grass
execute in minecraft:overworld as @a[scores={skyblock_normal=9}] run setblock -1 65 -1 minecraft:grass
execute in minecraft:overworld as @a[scores={skyblock_normal=9}] run setblock 1 65 1 minecraft:pink_tulip
execute in minecraft:overworld as @a[scores={skyblock_normal=9}] run setblock 0 65 -1 minecraft:poppy
execute in minecraft:overworld as @a[scores={skyblock_normal=9}] run setblock 1 65 -3 minecraft:fern
execute in minecraft:overworld as @a[scores={skyblock_normal=9}] run setblock 0 65 -3 minecraft:grass
execute in minecraft:overworld as @a[scores={skyblock_normal=9}] run setblock 0 65 -4 minecraft:oxeye_daisy
execute in minecraft:overworld as @a[scores={skyblock_normal=10}] run setblock 1 65 -1 minecraft:tall_grass[half=lower]
execute in minecraft:overworld as @a[scores={skyblock_normal=11}] run setblock 1 66 -1 minecraft:tall_grass[half=upper]
execute in minecraft:overworld as @a[scores={skyblock_normal=10}] run setblock -1 65 -4 minecraft:tall_grass[half=lower]
execute in minecraft:overworld as @a[scores={skyblock_normal=11}] run setblock -1 66 -4 minecraft:tall_grass[half=upper]
execute in minecraft:overworld as @a[scores={skyblock_normal=10}] run setblock -1 65 1 minecraft:tall_grass[half=lower]
execute in minecraft:overworld as @a[scores={skyblock_normal=11}] run setblock -1 66 1 minecraft:tall_grass[half=upper]
execute in minecraft:overworld as @a[scores={skyblock_normal=12}] run setblock 0 62 -3 minecraft:moss_block
execute in minecraft:overworld as @a[scores={skyblock_normal=13}] run setblock 0 61 -3 minecraft:spore_blossom
execute in minecraft:overworld as @a[scores={skyblock_normal=13}] run setblock 1 66 -3 minecraft:birch_wall_sign[facing=south,waterlogged=false]{Color:"white",GlowingText:1b,Text1:'{"text":"Skyblock"}',Text2:'{"text":"Classic Edition"}',Text3:'{"text":"---------------"}',Text4:'{"text":"1.18.2"}'}
execute in minecraft:overworld as @a[scores={skyblock_normal=13}] run fill 68 61 -4 66 61 -2 minecraft:sandstone
execute in minecraft:overworld as @a[scores={skyblock_normal=14}] run fill 66 64 -2 68 62 -4 minecraft:sand
execute in minecraft:overworld as @a[scores={skyblock_normal=15}] run setblock 67 65 -2 minecraft:dead_bush
execute in minecraft:overworld as @a[scores={skyblock_normal=15}] run setblock 67 65 -3 minecraft:chest[facing=west,type=single,waterlogged=false]{Items:[{Count:10b,Slot:4b,id:"minecraft:obsidian"},{Count:1b,Slot:12b,id:"minecraft:pumpkin_seeds"},{Count:1b,Slot:13b,id:"minecraft:melon_slice"},{Count:1b,Slot:14b,id:"minecraft:beetroot_seeds"},{Count:1b,Slot:22b,id:"minecraft:spyglass"}]}
execute in minecraft:overworld as @a[scores={skyblock_normal=15}] run setblock 68 65 -4 minecraft:cactus
execute in minecraft:overworld as @a[scores={skyblock_normal=16}] run setblock 68 66 -4 minecraft:cactus
execute in minecraft:overworld as @a[scores={skyblock_normal=17}] run setblock 68 67 -4 minecraft:moss_carpet
execute in minecraft:overworld as @a[scores={skyblock_normal=20}] run scoreboard players set @a tp 2


#The Nether
execute in minecraft:the_nether as @a[scores={skyblock_normal=41}] run fill 6 8 5 -9 -2 -30 minecraft:air
execute in minecraft:the_nether as @a[scores={skyblock_normal=41}] run fill -5 3 27 5 -3 35 minecraft:air
execute in minecraft:the_nether as @a[scores={skyblock_normal=42}] run fill -1 2 29 1 2 29 minecraft:end_portal_frame[eye=false,facing=south]
execute in minecraft:the_nether as @a[scores={skyblock_normal=42}] run fill 2 2 30 2 2 32 minecraft:end_portal_frame[eye=false,facing=west]
execute in minecraft:the_nether as @a[scores={skyblock_normal=42}] run fill 1 2 33 -1 2 33 minecraft:end_portal_frame[eye=false,facing=north]
execute in minecraft:the_nether as @a[scores={skyblock_normal=42}] run fill -2 2 32 -2 2 30 minecraft:end_portal_frame[eye=false,facing=east]
execute in minecraft:the_nether as @a[scores={skyblock_normal=42}] run fill 1 0 -1 -1 2 1 minecraft:glowstone
execute in minecraft:the_nether as @a[scores={skyblock_normal=42}] run fill 2 2 2 -2 6 2 minecraft:obsidian
execute in minecraft:the_nether as @a[scores={skyblock_normal=43}] run fill -1 5 2 1 3 2 minecraft:nether_portal
execute in minecraft:the_nether as @a[scores={skyblock_normal=43}] run fill -6 0 -27 -5 1 -25 minecraft:netherrack
execute in minecraft:the_nether as @a[scores={skyblock_normal=43}] run fill -4 0 -26 -4 1 -26 minecraft:netherrack
execute in minecraft:the_nether as @a[scores={skyblock_normal=43}] run fill 4 0 -26 4 1 -26 minecraft:netherrack
execute in minecraft:the_nether as @a[scores={skyblock_normal=43}] run fill 5 0 -25 6 1 -27 minecraft:netherrack
execute in minecraft:the_nether as @a[scores={skyblock_normal=44}] run fill -6 2 -25 -5 2 -27 minecraft:warped_nylium
execute in minecraft:the_nether as @a[scores={skyblock_normal=44}] run setblock -4 2 -26 minecraft:warped_nylium
execute in minecraft:the_nether as @a[scores={skyblock_normal=44}] run fill 6 2 -25 5 2 -27 minecraft:crimson_nylium
execute in minecraft:the_nether as @a[scores={skyblock_normal=44}] run setblock 4 2 -26 minecraft:crimson_nylium
execute in minecraft:the_nether as @a[scores={skyblock_normal=45}] run setblock 5 3 -26 minecraft:crimson_roots
execute in minecraft:the_nether as @a[scores={skyblock_normal=45}] run setblock 5 3 -27 minecraft:crimson_roots
execute in minecraft:the_nether as @a[scores={skyblock_normal=45}] run setblock 5 3 -25 minecraft:crimson_fungus
execute in minecraft:the_nether as @a[scores={skyblock_normal=45}] run setblock 6 3 -26 minecraft:crimson_fungus
execute in minecraft:the_nether as @a[scores={skyblock_normal=46}] run setblock 5 0 -25 minecraft:weeping_vines
execute in minecraft:the_nether as @a[scores={skyblock_normal=46}] run setblock -4 3 -26 minecraft:warped_roots
execute in minecraft:the_nether as @a[scores={skyblock_normal=46}] run setblock -5 3 -27 minecraft:nether_sprouts
execute in minecraft:the_nether as @a[scores={skyblock_normal=46}] run setblock -5 3 -25 minecraft:twisting_vines
execute in minecraft:the_nether as @a[scores={skyblock_normal=46}] run setblock -6 3 -26 minecraft:warped_fungus
execute in minecraft:the_nether as @a[scores={skyblock_normal=46}] run setblock -6 3 -27 minecraft:warped_roots
execute in minecraft:the_nether as @a[scores={skyblock_normal=46}] run setblock -5 0 -25 minecraft:soul_soil
execute in minecraft:the_nether as @a[scores={skyblock_normal=46}] run setblock -5 0 -26 minecraft:soul_soil
execute in minecraft:the_nether as @a[scores={skyblock_normal=46}] run setblock -5 1 -26 minecraft:soul_sand
execute in minecraft:the_nether as @a[scores={skyblock_normal=47}] run setblock 1 3 1 minecraft:chest[facing=north,type=single,waterlogged=false]{Items:[{Count:1b,Slot:4b,id:"minecraft:birch_sapling"},{Count:1b,Slot:10b,id:"minecraft:red_mushroom"},{Count:1b,Slot:12b,id:"minecraft:sugar_cane"},{Count:1b,Slot:13b,id:"minecraft:ice"},{Count:1b,Slot:14b,id:"minecraft:bamboo"},{Count:1b,Slot:16b,id:"minecraft:brown_mushroom"},{Count:1b,Slot:22b,id:"minecraft:pointed_dripstone"}]}
execute in minecraft:the_nether as @a[scores={skyblock_normal=47}] run setblock 0 1 0 minecraft:lodestone
execute in minecraft:the_nether as @a[scores={skyblock_normal=47}] run fill -1 2 -25 1 2 -27 minecraft:polished_blackstone_bricks
execute in minecraft:the_nether as @a[scores={skyblock_normal=47}] run fill -1 1 -25 1 1 -27 minecraft:polished_blackstone_bricks
execute in minecraft:the_nether as @a[scores={skyblock_normal=47}] run fill -1 0 -25 1 0 -27 minecraft:polished_blackstone_bricks
execute in minecraft:the_nether as @a[scores={skyblock_normal=48}] run setblock 0 1 -27 minecraft:chiseled_polished_blackstone
execute in minecraft:the_nether as @a[scores={skyblock_normal=49}] run setblock 0 1 -25 minecraft:chiseled_polished_blackstone
execute in minecraft:the_nether as @a[scores={skyblock_normal=50}] run setblock -1 1 -26 minecraft:chiseled_polished_blackstone
execute in minecraft:the_nether as @a[scores={skyblock_normal=51}] run setblock 0 2 -26 minecraft:chiseled_polished_blackstone
execute in minecraft:the_nether as @a[scores={skyblock_normal=52}] run setblock 1 1 -26 minecraft:chiseled_polished_blackstone
execute in minecraft:the_nether as @a[scores={skyblock_normal=53}] run setblock 0 0 -26 minecraft:chiseled_polished_blackstone
execute in minecraft:the_nether as @a[scores={skyblock_normal=54}] run setblock 0 1 -26 minecraft:blue_ice
execute in minecraft:the_nether as @a[scores={skyblock_normal=55}] run setblock 6 2 -27 minecraft:soul_sand
execute in minecraft:the_nether as @a[scores={skyblock_normal=56}] run setblock 6 3 -27 minecraft:nether_wart
execute in minecraft:the_nether as @a[scores={skyblock_normal=60}] run scoreboard objectives add fix_end dummy


#The End
# Soon ???


#End Install
execute as @a[scores={skyblock_normal=100}] run scoreboard players set @a tp 1
execute as @a[scores={skyblock_normal=100}] run spawnpoint @a 0 65 0
execute as @a[scores={skyblock_normal=100}] run weather clear
execute as @a[scores={skyblock_normal=100}] run scoreboard objectives add kills deathCount
execute as @a[scores={skyblock_normal=100}] run scoreboard objectives setdisplay list kills
execute as @a[scores={skyblock_normal=100}] run advancement revoke @a everything
execute as @a[scores={skyblock_normal=105}] run scoreboard players set @a tp 0
execute as @a[scores={skyblock_normal=105}] run title @a title ["",{"text":"Sky","bold":true,"color":"aqua"},{"text":"block","bold":true,"color":"dark_green"}]
execute as @a[scores={skyblock_normal=106}] run title @a subtitle {"text":"Classic Edition","bold":true,"color":"dark_blue"}
execute as @a[scores={skyblock_normal=106}] run title @a times 30 100 30
execute as @a[scores={skyblock_normal=109}] run gamerule announceAdvancements true
execute as @a[scores={skyblock_normal=109}] run gamerule doDaylightCycle true
execute as @a[scores={skyblock_normal=109}] run gamerule doWeatherCycle true
execute as @a[scores={skyblock_normal=109}] run time set 0
execute as @a[scores={skyblock_normal=109}] run gamemode survival @a
execute as @a[scores={skyblock_normal=109}] run scoreboard objectives add skyblock_ID dummy
execute as @a[scores={skyblock_normal=150}] run execute in minecraft:overworld run tp @p 0 66 0 90 0


##Small


execute as @a[scores={skyblock_island=3}] run scoreboard objectives add skyblock_small minecraft.custom:minecraft.play_time
execute as @a[scores={skyblock_island=3}] run tellraw @a {"text":"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nLoading...."}
execute as @a[scores={skyblock_small=1..}] run scoreboard players set @a skyblock_install -1
execute as @a[scores={skyblock_small=1..}] run scoreboard players set @a skyblock_island -1


#Start
execute in minecraft:overworld as @a[scores={skyblock_small=1}] run difficulty normal
execute in minecraft:overworld as @a[scores={skyblock_small=1}] run gamerule commandBlockOutput false
execute in minecraft:overworld as @a[scores={skyblock_small=1}] run title @a title {"text":"Loading..."}
execute in minecraft:overworld as @a[scores={skyblock_small=1}] run title @a subtitle {"text":"Worlds"}
execute in minecraft:overworld as @a[scores={skyblock_small=1}] run title @a times 20 200 20
execute in minecraft:overworld as @a[scores={skyblock_small=1}] run gamerule announceAdvancements false


#Overworld
execute in minecraft:overworld as @a[scores={skyblock_small=2}] run fill -7 80 -12 7 55 5 minecraft:air
execute in minecraft:overworld as @a[scores={skyblock_small=2}] run fill 75 80 11 61 55 -9 minecraft:air
execute in minecraft:overworld as @a[scores={skyblock_small=3}] run scoreboard players set @a tp 1
execute in minecraft:overworld as @a[scores={skyblock_small=5}] run fill 1 62 1 -1 63 -1 minecraft:dirt
execute in minecraft:overworld as @a[scores={skyblock_small=6}] run fill -1 64 1 1 64 -1 minecraft:grass_block
execute in minecraft:overworld as @a[scores={skyblock_small=7}] run fill 2 67 1 -2 70 -3 oak_leaves[persistent=false]
execute in minecraft:overworld as @a[scores={skyblock_small=8}] run fill 0 69 -1 0 65 -1 oak_log[axis=y]
execute in minecraft:overworld as @a[scores={skyblock_small=9}] run fill 2 69 1 2 70 -3 minecraft:air
execute in minecraft:overworld as @a[scores={skyblock_small=9}] run fill 1 70 -3 -2 69 -3 minecraft:air
execute in minecraft:overworld as @a[scores={skyblock_small=9}] run fill -2 69 -2 -2 70 1 minecraft:air
execute in minecraft:overworld as @a[scores={skyblock_small=9}] run fill -1 69 1 1 70 1 minecraft:air
execute in minecraft:overworld as @a[scores={skyblock_small=9}] run setblock -2 68 1 minecraft:air
execute in minecraft:overworld as @a[scores={skyblock_small=9}] run fill -1 70 0 -1 69 0 minecraft:air
execute in minecraft:overworld as @a[scores={skyblock_small=9}] run fill 1 69 0 1 70 0 minecraft:air
execute in minecraft:overworld as @a[scores={skyblock_small=9}] run fill 1 69 -2 1 70 -2 minecraft:air
execute in minecraft:overworld as @a[scores={skyblock_small=9}] run setblock -1 70 -2 minecraft:air
execute in minecraft:overworld as @a[scores={skyblock_small=9}] run setblock -2 67 -3 minecraft:air
execute in minecraft:overworld as @a[scores={skyblock_small=9}] run setblock -1 65 1 minecraft:tall_grass[half=lower]
execute in minecraft:overworld as @a[scores={skyblock_small=10}] run setblock -1 66 1 minecraft:tall_grass[half=upper]
execute in minecraft:overworld as @a[scores={skyblock_small=9}] run setblock 1 65 -1 minecraft:tall_grass[half=lower]
execute in minecraft:overworld as @a[scores={skyblock_small=10}] run setblock 1 66 -1 minecraft:tall_grass[half=upper]
execute in minecraft:overworld as @a[scores={skyblock_small=10}] run setblock 1 65 1 minecraft:fern
execute in minecraft:overworld as @a[scores={skyblock_small=10}] run setblock -1 65 -1 minecraft:grass
execute in minecraft:overworld as @a[scores={skyblock_small=10}] run setblock 0 63 -1 minecraft:moss_block
execute in minecraft:overworld as @a[scores={skyblock_small=10}] run setblock 0 64 -1 minecraft:rooted_dirt
execute in minecraft:overworld as @a[scores={skyblock_small=10}] run setblock 0 65 0 minecraft:chest[facing=south,type=single,waterlogged=false]{Items:[{Count:1b,Slot:12b,id:"minecraft:ice"},{Count:1b,Slot:13b,id:"minecraft:filled_map",tag:{map:0}},{Count:1b,Slot:14b,id:"minecraft:lava_bucket"}]}
execute in minecraft:overworld as @a[scores={skyblock_small=10}] run setblock 0 61 0 minecraft:spore_blossom
execute in minecraft:overworld as @a[scores={skyblock_small=10}] run setblock 0 66 0 minecraft:birch_wall_sign[facing=south,waterlogged=false]{Color:"white",GlowingText:1b,Text1:'{"text":"Skyblock"}',Text2:'{"text":"Classic Edition"}',Text3:'{"text":"---------------"}',Text4:'{"text":"1.18.2"}'}
execute in minecraft:overworld as @a[scores={skyblock_small=11}] run fill 68 61 -4 66 61 -2 minecraft:red_sandstone
execute in minecraft:overworld as @a[scores={skyblock_small=12}] run fill 66 62 -2 68 64 -4 minecraft:red_sand
execute in minecraft:overworld as @a[scores={skyblock_small=12}] run setblock 67 65 -2 minecraft:dead_bush
execute in minecraft:overworld as @a[scores={skyblock_small=12}] run setblock 67 65 -3 minecraft:chest[facing=west,type=single,waterlogged=false]{Items:[{Count:10b,Slot:4b,id:"minecraft:obsidian"},{Count:1b,Slot:12b,id:"minecraft:pumpkin_seeds"},{Count:1b,Slot:13b,id:"minecraft:melon_slice"},{Count:1b,Slot:14b,id:"minecraft:beetroot_seeds"},{Count:1b,Slot:22b,id:"minecraft:spyglass"}]}
execute in minecraft:overworld as @a[scores={skyblock_small=12}] run setblock 68 65 -4 minecraft:cactus
execute in minecraft:overworld as @a[scores={skyblock_small=13}] run setblock 68 66 -4 minecraft:moss_carpet
execute in minecraft:overworld as @a[scores={skyblock_small=20}] run scoreboard players set @a tp 2


#The Nether
execute in minecraft:the_nether as @a[scores={skyblock_small=21}] run fill 6 8 5 -9 -2 -30 minecraft:air
execute in minecraft:the_nether as @a[scores={skyblock_small=21}] run fill -5 3 27 5 -3 35 minecraft:air
execute in minecraft:the_nether as @a[scores={skyblock_small=22}] run fill -1 2 29 1 2 29 minecraft:end_portal_frame[eye=false,facing=south]
execute in minecraft:the_nether as @a[scores={skyblock_small=22}] run fill 2 2 30 2 2 32 minecraft:end_portal_frame[eye=false,facing=west]
execute in minecraft:the_nether as @a[scores={skyblock_small=22}] run fill 1 2 33 -1 2 33 minecraft:end_portal_frame[eye=false,facing=north]
execute in minecraft:the_nether as @a[scores={skyblock_small=22}] run fill -2 2 32 -2 2 30 minecraft:end_portal_frame[eye=false,facing=east]
execute in minecraft:the_nether as @a[scores={skyblock_small=23}] run fill 1 0 -1 -1 2 1 minecraft:glowstone
execute in minecraft:the_nether as @a[scores={skyblock_small=23}] run fill 2 2 2 -2 6 2 minecraft:obsidian
execute in minecraft:the_nether as @a[scores={skyblock_small=24}] run fill -1 5 2 1 3 2 minecraft:nether_portal
execute in minecraft:the_nether as @a[scores={skyblock_small=24}] run setblock 1 3 1 minecraft:chest[facing=north,type=single,waterlogged=false]{Items:[{Count:1b,Slot:4b,id:"minecraft:birch_sapling"},{Count:1b,Slot:10b,id:"minecraft:red_mushroom"},{Count:1b,Slot:12b,id:"minecraft:sugar_cane"},{Count:1b,Slot:13b,id:"minecraft:ice"},{Count:1b,Slot:14b,id:"minecraft:bamboo"},{Count:1b,Slot:16b,id:"minecraft:brown_mushroom"},{Count:1b,Slot:22b,id:"minecraft:pointed_dripstone"}]}
execute in minecraft:the_nether as @a[scores={skyblock_small=24}] run setblock 0 1 0 minecraft:lodestone
execute in minecraft:the_nether as @a[scores={skyblock_small=25}] run fill -1 2 -25 1 2 -27 minecraft:polished_blackstone_bricks
execute in minecraft:the_nether as @a[scores={skyblock_small=26}] run fill -1 1 -25 1 1 -27 minecraft:polished_blackstone_bricks
execute in minecraft:the_nether as @a[scores={skyblock_small=27}] run fill -1 0 -25 1 0 -27 minecraft:polished_blackstone_bricks
execute in minecraft:the_nether as @a[scores={skyblock_small=28}] run setblock 0 1 -27 minecraft:chiseled_polished_blackstone
execute in minecraft:the_nether as @a[scores={skyblock_small=29}] run setblock 0 1 -25 minecraft:chiseled_polished_blackstone
execute in minecraft:the_nether as @a[scores={skyblock_small=30}] run setblock -1 1 -26 minecraft:chiseled_polished_blackstone
execute in minecraft:the_nether as @a[scores={skyblock_small=31}] run setblock 1 1 -26 minecraft:chiseled_polished_blackstone
execute in minecraft:the_nether as @a[scores={skyblock_small=32}] run setblock 0 0 -26 minecraft:chiseled_polished_blackstone
execute in minecraft:the_nether as @a[scores={skyblock_small=32}] run setblock 0 1 -26 minecraft:blue_ice
execute in minecraft:the_nether as @a[scores={skyblock_small=33}] run setblock 0 2 -26 minecraft:soul_sand
execute in minecraft:the_nether as @a[scores={skyblock_small=34}] run setblock 0 3 -26 minecraft:nether_wart
execute in minecraft:the_nether as @a[scores={skyblock_small=40}] run scoreboard objectives add fix_end dummy


#The End
# Soon ???


#End Install
execute as @a[scores={skyblock_small=100}] run scoreboard players set @a tp 1
execute as @a[scores={skyblock_small=101}] run spawnpoint @a 0 65 1
execute as @a[scores={skyblock_small=101}] run weather clear
execute as @a[scores={skyblock_small=101}] run scoreboard objectives add kills deathCount
execute as @a[scores={skyblock_small=101}] run scoreboard objectives setdisplay list kills
execute as @a[scores={skyblock_small=101}] run advancement revoke @a everything
execute as @a[scores={skyblock_small=109}] run scoreboard players set @a tp 0
execute as @a[scores={skyblock_small=109}] run title @a title ["",{"text":"Sky","bold":true,"color":"aqua"},{"text":"block","bold":true,"color":"dark_green"}]
execute as @a[scores={skyblock_small=109}] run title @a subtitle {"text":"Classic Edition","bold":true,"color":"dark_blue"}
execute as @a[scores={skyblock_small=109}] run title @a times 30 100 30
execute as @a[scores={skyblock_small=109}] run gamerule announceAdvancements true
execute as @a[scores={skyblock_small=109}] run gamerule doDaylightCycle true
execute as @a[scores={skyblock_small=109}] run gamerule doWeatherCycle true
execute as @a[scores={skyblock_large=109}] run time set 0
execute as @a[scores={skyblock_small=109}] run gamemode survival @a
execute as @a[scores={skyblock_small=109}] run scoreboard objectives add skyblock_ID dummy
execute as @a[scores={skyblock_small=150}] run execute in minecraft:overworld run tp @p 0 66 1 90 0