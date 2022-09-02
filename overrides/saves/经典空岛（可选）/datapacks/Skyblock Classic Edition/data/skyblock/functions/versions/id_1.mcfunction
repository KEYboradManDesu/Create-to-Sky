#Setup
scoreboard objectives add ID_1 dummy



#World Update and Conversion
execute as @a[scores={ID_1=1}] run weather rain 1000