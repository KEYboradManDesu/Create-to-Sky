#Legacy Setup
execute as @a[scores={legacy=1}] run scoreboard objectives add skyblock_normal minecraft.custom:minecraft.play_time
execute as @a[scores={legacy=1..23}] run scoreboard players set @a skyblock_normal 80
execute as @a[scores={legacy=5}] run scoreboard objectives remove skyblock
execute as @a[scores={legacy=6}] run setblock 0 -2 0 minecraft:crying_obsidian replace
execute as @a[scores={legacy=6}] run effect give @a minecraft:resistance 11 250 true
execute as @a[scores={legacy=21}] run scoreboard players set @a tp 0
execute as @a[scores={legacy=25}] run tellraw @a {"text":"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\nLoading...."}
execute as @a[scores={legacy=25}] run scoreboard players set @a skyblock_install -1
execute as @a[scores={legacy=25}] run scoreboard players set @a skyblock_island -1
execute as @a[scores={legacy=26}] run gamerule doDaylightCycle true
execute as @a[scores={legacy=26}] run gamerule doWeatherCycle true
execute as @a[scores={legacy=26}] run fill 0 -1 0 0 7 0 minecraft:air
execute as @a[scores={legacy=40..}] run tp @a 0 1 0
execute as @a[scores={legacy=40}] run give @p filled_map{map:0} 1
execute as @a[scores={legacy=50..}] run scoreboard objectives remove legacy