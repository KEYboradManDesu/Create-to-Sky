#CAMBIARE ID E AGGIUNGERE ALLA FUNZIONE, AGGIUNGERE ID CON "function skyblock:versions" E RICORDASI DI ABBILITARE "World update".
execute as @a[scores={ID_1=1}] run tellraw @a {"text":"There is Nothing to See Here...","italic":true,"color":"gray"}
#execute as @a[scores={ID_1=1}] run tellraw @a {"text":"World Update and Conversion...","italic":true,"color":"gray"}
execute as @a[scores={skyblock_ID=1..}] run scoreboard players add @a ID_0 1
execute as @a[scores={ID_1=1}] run scoreboard objectives remove skyblock_ID



#ID Versions
function skyblock:versions/id_1


#ID Legacy (da aggiunge il numero solo se si cambia la versione)
scoreboard objectives remove ID_0



#Skyblock ID
execute as @a[scores={skyblock_ID=10}] run tellraw @a ["",{"text":"Welcome to the version: "},{"text":"2.1.3 ","bold":true},{"text":"for Minecraft: "},{"text":"1.18.2","bold":true},{"text":"\n\n\u25ba"},{"text":"Github","color":"#777777","clickEvent":{"action":"open_url","value":"https://github.com/Lorenzo0310200/Skyblock-Classic-Edition"}},{"text":"\n\n\u25ba"},{"text":"Planet","color":"blue","clickEvent":{"action":"open_url","value":"https://www.planetminecraft.com/project/skyblock-classic-edition/"}},{"text":"Minecraft","color":"green","clickEvent":{"action":"open_url","value":"https://www.planetminecraft.com/project/skyblock-classic-edition/"}},{"text":"\n\n\u25ba"},{"text":"Curseforge","color":"red","clickEvent":{"action":"open_url","value":"https://www.curseforge.com/minecraft/worlds/skyblock-classic-edition/files"}},{"text":"\n\n"},{"text":"Changelog for the latest version:","bold":true}]

#Changelog (RICORDASI DI AGGIUNGERE SOLO IN UNA VERSIONE STABILE E DI AGGIUNGERE UN ALTRA RIGA SOLO PER LE VERSIONI MINORI CON IL NUMERO DELLA VERSIONE)

execute as @a[scores={skyblock_ID=12}] run tellraw @a ["",{"text":"\n"},{"text":"Added","bold":true},{"text":"\n\n"},{"text":"functions and datapack:","bold":true,"italic":true},{"text":"\n\n"},{"text":"added new functions:","bold":true},{"text":"\n-update: update and convert the map to the new version of Minecraft and the map:\nthe update function tries to convert the map if there are new blocks or entities or if something changes in the code (look at the description to convert the map and remember to make backups).\n-added the \"legacy\" function that is used to upgrade the world from 1.0.0 to 2.1.0\nthe legacy feature adds a block of obsidian and bedrock and teleports the player plus a bass.\nto activate it just click at the beginning \"legacy\" and the function does everything for you (look at the description to convert the map and remember to make backups).\nadded note to the version and various links when updating the map (added changelog in this version).\n-added custom recipes (because some items have become unobtainable. if someone can't find any items please report it in Github)\n-added some strings to the skyblock function\n-added weather clear at the beginning\n-added saturation at the beginning\n-added other things ...\n"},{"text":"worlds and maps:","bold":true,"italic":true},{"text":"\n-added map instead of book (always use the same phrase)\n"},{"text":"Changed","bold":true},{"text":"\n"},{"text":"worlds and maps:","bold":true,"italic":true},{"text":"\n-updated to 1.18.2\n-updated the signs to 1.18.2 and the pack to 9\n-removed the translation link (since it is not needed)\n"},{"text":"functions and datapack:","bold":true,"italic":true},{"text":"\n-increased regeneration by 10 seconds\n-various improvements\n-added \"recipe give\" in skyblock function\n"},{"text":"Removed","bold":true},{"text":"\n"},{"text":"worlds and maps:","bold":true,"italic":true},{"text":"\n-removed the book\n-removed the squeezes in the book functions and changed the case at the beginning.\n-removed the boring multi and structures, re-added custom build only in the overworld.\n-removed the wiki function and the wiki (sorry I thought I could keep it).\n"},{"text":"Fixed","bold":true},{"text":"\n"},{"text":"worlds and maps:","bold":true,"italic":true},{"text":"\n-Fix coming back from The End spawns you on the void.\n "}]
execute as @a[scores={skyblock_ID=13}] run tellraw @a ["",{"text":"from the 2.1.1","bold":true},{"text":"\n\nChanged\n\nmisc and more:\n\nchanged and improved the map in the chest (now it is more damaged and the background removed)\n\nfunctions and data package:\n\nthe modified recipe of the choice (solved the problem)\nchanged the recipe of the gravel (the quantity was lowered)"}]
execute as @a[scores={skyblock_ID=14}] run tellraw @a ["",{"text":"from the 2.1.2","bold":true},{"text":"\n\n"},{"text":"Added","italic":true,"underlined":true},{"text":"\n\n"},{"text":"functions and datapack:","bold":true,"italic":true,"underlined":true},{"text":"\n\nadded \"discord\" function\nlike the old wiki function (no longer exists)\n\nopens a link to the new Discord server\nplayers have to chat \"/function skyblock:discord\""}]
execute as @a[scores={skyblock_ID=15}] run tellraw @a ["",{"text":"from the 2.1.3","bold":true},{"text":"\n\n"},{"text":"Fixed","bold":true,"italic":true},{"text":"\n\nfunctions and datapack:\nfixed an issue with the Ender Dragon spawn not spawn (Issue #16)"}]
execute as @a[scores={skyblock_large=101..}] run scoreboard objectives add skyblock_ID dummy
execute as @a[scores={skyblock_normal=101..}] run scoreboard objectives add skyblock_ID dummy
execute as @a[scores={skyblock_small=101..}] run scoreboard objectives add skyblock_ID dummy