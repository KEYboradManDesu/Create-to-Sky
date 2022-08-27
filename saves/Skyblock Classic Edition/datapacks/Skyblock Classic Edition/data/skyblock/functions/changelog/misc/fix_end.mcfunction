scoreboard players add @a fix_end 1
execute in minecraft:the_end as @a[scores={fix_end=1}] run tp @a 0 70 0 0 0
execute in minecraft:the_end as @a[scores={fix_end=5}] run summon endermite 0 70 0 {Silent:1b,Glowing:1b,CustomNameVisible:1b,PersistenceRequired:1b,NoAI:1b,Health:1f,PlayerSpawned:0b,CustomName:'{"text":"fix"}'}
execute in minecraft:the_end as @a[scores={fix_end=5}] run fill 3 64 3 -3 65 -3 minecraft:bedrock
execute in minecraft:the_end as @a[scores={fix_end=6}] run fill 2 65 -2 -2 65 2 minecraft:end_portal
execute in minecraft:the_end as @a[scores={fix_end=10}] run summon minecraft:ender_dragon 0 80 0
execute as @a[scores={fix_end=15}] run kill @e[type=minecraft:endermite]
execute in minecraft:the_end as @a[scores={fix_end=20}] run scoreboard objectives remove fix_end