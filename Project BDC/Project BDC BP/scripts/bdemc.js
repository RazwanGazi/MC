import {
    system
} from "@minecraft/server";
import {
    world
} from '@minecraft/server'
import {
    ActionFormData,
    ModalFormData
} from '@minecraft/server-ui'
let items = [[`minecraft:ancient_debris`, "blocks/ancient_debris", 64, 0],
[`minecraft:apple`, "items/apple", 2, 0],
[`minecraft:arrow`, "items/arrow", 2, 0],
[`minecraft:golden_carrot`, "items/carrot_golden", 8, 0],
[`minecraft:basalt`, "blocks/basalt_side", 1, 0],
[`minecraft:bedrock`, "blocks/bedrock", 10000, 0],
[`minecraft:beef`, "items/beef_raw", 2, 0],
[`minecraft:chicken`, "items/chicken_raw", 2, 0],
[`minecraft:beetroot`, "items/beetroot", 1, 0],
[`minecraft:blackstone`, "blocks/blackstone", 1, 0],
[`minecraft:blaze_powder`, "items/blaze_powder", 4, 0],
[`minecraft:blaze_rod`, "items/blaze_rod", 8, 0],
[`minecraft:bone`, "items/bone", 3, 0],
[`minecraft:bone_meal`, "items/bone_meal", 1, 0],
[`minecraft:book`, "items/book", 7, 0],
[`minecraft:bread`, "items/bread", 3, 0],
[`minecraft:cactus`, "blocks/cactus_top", 1, 0],
[`minecraft:carrot`, "items/carrot", 1, 0],
[`minecraft:clay_ball`, "items/clay_ball", 1, 0],
[`minecraft:coal`, "items/coal", 4, 0],
[`minecraft:cod`, "items/fish_raw", 1, 0],
[`minecraft:diamond`, "items/diamond", 400, 0],
[`minecraft:dirt`, "blocks/dirt", 1, 0],
[`minecraft:cobblestone`, "blocks/cobblestone", 1, 0],
[`minecraft:elytra`, "items/elytra", 6900, 0],
[`minecraft:dragon_egg`, "blocks/dragon_egg", 69420, 0],
[`minecraft:egg`, "items/egg", 3, 0],
[`minecraft:emerald`, "items/emerald", 4, 0],
[`minecraft:enchanted_golden_apple`, "items/apple_golden", 2305, 0],
[`minecraft:emerald_block`, "blocks/emerald_block", 576, 0],
[`minecraft:diamond_block`, "blocks/diamond_block", 3600, 0],
[`minecraft:coal_block`, "blocks/coal_block", 36, 0],
[`minecraft:end_stone`, "blocks/end_stone", 5, 0],
[`minecraft:ender_pearl`, "items/ender_pearl", 16, 0],
[`minecraft:ender_eye`, "items/ender_eye", 20, 0],
[`minecraft:experience_bottle`, "items/experience_bottle", 4, 0],
[`minecraft:feather`, "items/feather", 1, 0],
[`minecraft:flint`, "items/flint", 1, 0],
[`minecraft:ghast_tear`, "items/ghast_tear", 8, 0],
[`minecraft:glass`, "items/glass", 1, 0],
[`minecraft:gold_ingot`, "items/gold_ingot", 32, 0],
[`minecraft:gold_block`, "blocks/gold_block", 288, 0],
[`minecraft:glowstone`, "blocks/glowstone", 4, 0],
[`minecraft:glowstone_dust`, "items/glowstone_dust", 1, 0],
[`minecraft:golden_apple`, "items/apple_golden", 258, 0],
[`minecraft:grass`, "blocks/grass_side_carried", 1, 0],
[`minecraft:gravel`, "blocks/gravel", 1, 0],
[`minecraft:gunpowder`, "items/gunpowder", 4, 0],
[`minecraft:honey_bottle`, "items/honey_bottle", 32, 0],
[`minecraft:heart_of_the_sea`, "items/heart_of_the_sea", 256, 0],
[`minecraft:honeycomb`, "items/honeycomb", 7, 0],
[`minecraft:iron_ingot`, "items/iron_ingot", 16, 0],
[`minecraft:iron_block`, "blocks/iron_block", 144, 0],
[`minecraft:kelp`, "items/kelp", 1, 0],
[`minecraft:lapis_lazuli`, "items/lapis_lazuli", 8, 0],
[`minecraft:lapis_block`, "blocks/lapis_block", 72, 0],
[`minecraft:leather`, "items/leather", 2, 0],
[`minecraft:magma_cream`, "items/magma_cream", 5, 0],
[`minecraft:melon_slice`, "items/melon", 1, 0],
[`minecraft:mutton`, "items/mutton_raw", 1, 0],
[`minecraft:nautilus_shell`, "items/nautilus_shell", 16, 0],
[`minecraft:nether_wart`, "items/nether_wart", 16, 0],
[`minecraft:netherite_ingot`, "items/netherite_ingot", 3600, 0],
[`minecraft:torch`, "blocks/torch_on", 1, 0],
[`minecraft:netherite_block`, "blocks/netherite_block", 10000, 0],
[`minecraft:netherite_scrap`, "items/netherite_scrap", 64, 0],
[`minecraft:netherrack`, "blocks/netherrack", 1, 0],
[`minecraft:obsidian`, "blocks/obsidian", 16, 0],
[`minecraft:paper`, "items/paper", 1, 0],
[`minecraft:potato`, "items/potato", 1, 0],
[`minecraft:porkchop`, "items/porkchop", 1, 0],
[`minecraft:pufferfish`, "items/pufferfish", 7, 0],
[`minecraft:pumpkin`, "blocks/pumpkin", 6, 0],
[`minecraft:quartz`, "items/quartz", 3, 0],
[`minecraft:rabbit`, "items/rabbit_raw", 2, 0],
[`minecraft:rabbit_foot`, "items/rabbit_foot", 7, 0],
[`minecraft:redstone`, "items/redstone", 4, 0],
[`minecraft:redstone_block`, "blocks/redstone_block", 36, 0],
[`minecraft:rotten_flesh`, "items/rotten_flesh", 1, 0],
[`minecraft:saddle`, "item/saddle", 128, 0],
[`minecraft:salmon`, "items/salmon", 1, 0],
[`minecraft:sand`, "blocks/sand", 1, 0],
[`minecraft:scute`, "items/scute", 16, 0],
[`minecraft:slime_ball`, "items/slime_ball", 1, 0],
[`minecraft:spider_eye`, "items/spider_eye", 8, 0],
[`minecraft:sugar`, "items/sugar", 1, 0],
[`minecraft:sugar_cane`, "items/sugar_cane", 1, 0],
[`minecraft:sweet_berries`, "items/sweet_berries", 2, 0],
[`minecraft:totem`, "items/totem", 256, 0],
[`minecraft:tropical_fish`, "items/tropical_fish", 6, 0],
[`minecraft:wheat`, "items/wheat", 1, 0],
[`minecraft:wheat_seeds`, "/ui/seeds", 1, 0],
[`minecraft:white_wool`, "blocks/wool_colored_white", 4, 0],
[`minecraft:light_gray_wool`, "blocks/wool_colored_gray", 4, 0],
[`minecraft:gray_wool`, "blocks/wool_colored_gray", 4, 0],
[`minecraft:black_wool`, "blocks/wool_colored_black", 4, 0],
[`minecraft:brown_wool`, "blocks/wool_colored_brown", 4, 0],
[`minecraft:red_wool`, "blocks/wool_colored_red", 4, 0],
[`minecraft:orange_wool`, "blocks/wool_colored_orange", 4, 0],
[`minecraft:yellow_wool`, "blocks/wool_colored_yellow", 4, 0],
[`minecraft:lime_wool`, "blocks/wool_colored_lime", 4, 0],
[`minecraft:green_wool`, "blocks/wool_colored_green", 4, 0],
[`minecraft:cyan_wool`, "blocks/wool_colored_cyan", 4, 0],
[`minecraft:light_blue_wool`, "blocks/wool_colored_light_blue", 4, 0],
[`minecraft:blue_wool`, "blocks/wool_colored_blue", 4, 0],
[`minecraft:purple_wool`, "blocks/wool_colored_purple", 4, 0],
[`minecraft:magenta_wool`, "blocks/wool_colored_magenta", 4, 0],
[`minecraft:pink_wool`, "blocks/wool_colored_pink", 4, 0],
[`minecraft:string`, "items/string", 1, 0],
[`minecraft:oak_log`, "blocks/log_oak_top", 4, 0],
[`minecraft:spruce_log`, "blocks/log_spruce_top", 4, 0],
[`minecraft:birch_log`, "blocks/log_birch_top", 4, 0],
[`minecraft:jungle_log`, "blocks/log_jungle_top", 4, 0],
[`minecraft:acacia_log`, "blocks/log_acacia_top", 4, 0],
[`minecraft:dark_oak_log`, "blocks/log_big_oak_top", 4, 0],
[`minecraft:mangrove_log`, "blocks/mangrove_log_top", 4, 0],
[`minecraft:cherry_log`, "blocks/cherry_log_top", 4, 0],
[`minecraft:bamboo_block`, "blocks/bamboo_block", 4, 0],
[`minecraft:copper_ingot`, "items/copper_ingot", 8, 0],
[`minecraft:copper_block`, "blocks/copper_block", 72, 0]
[`minecraft:bow`, "items/bow", 6, 1],    //New items
[`minecraft:crossbow`, "items/crossbow", 32, 0],
[`minecraft:fishing_rod`, "items/fishing_rod", 4, 0],
[`minecraft:compass`, "items/compass", 64, 0],
[`minecraft:bucket`, "items/bucket", 48, 0],
[`minecraft:bookshelf`, "blocks/bookshelf", 384, 0],
[`minecraft:firework_rocket`, "items/firework_rocket", 16, 0],
[`minecraft:ender_pearl`, "items/ender_pearl", 64, 0],
[`minecraft:name_tag`, "items/name_tag", 32, 0],
[`minecraft:saddle`, "items/saddle", 64, 0],
[`minecraft:shears`, "items/shears", 32, 0],
[`minecraft:golden_apple`, "items/apple_golden", 2048, 0],
[`minecraft:fire_charge`, "items/fireball", 8, 0],
[`minecraft:experience_bottle`, "items/experience_bottle", 256, 0],
[`minecraft:banner`, "items/banner_base", 256, 0],
[`minecraft:shield`, "items/shield", 20, 0],
[`minecraft:stone`, "blocks/stone", 4, 0],
[`minecraft:stone`, "blocks/stone_granite", 4, 1],
[`minecraft:stone`, "blocks/stone_diorite", 4, 3],
[`minecraft:stone`, "blocks/stone_andesite", 4, 5]]
function giveItem(player, amount, sel) {
    player.runCommandAsync(`scoreboard players remove @s bdc ${sel[2] * amount}`)
    player.runCommandAsync(`give @s ${sel[0]} ${amount} ${sel[3]}`)
}
function showBDC(player) {
    const form = new ActionFormData()
        .title("Transmutation Table")
        .body(`§f${world.scoreboard.getObjective("bdc").getScore(player.scoreboardIdentity)} BDC`)
        .button("§6Convert Held Item Into §cBD§aC", `textures/ui/flame_full_image`)
    let temp = []
    for (const i of items) {
        if (player.hasTag(i[0] + "BDC") && world.scoreboard.getObjective("bdc").getScore(player.scoreboardIdentity) >= i[2]) {
            temp.push(i)
            form.button(i[0].split(":")[1].replace("_", " ") + " " + i[2] + " BDC", `textures/${i[1]}`)
        }
    }
    form.show(player).then(response => {
        player.removeTag("inemcmenu")
        if (!response.isCanceled) {
            if (response.selection == 0) {
                addBDC(player)
            }
            else {
                let sel = temp[response.selection - 1]
                if (world.scoreboard.getObjective("bdc").getScore(player.scoreboardIdentity) >= sel[2]) {
                    new ModalFormData()
                        .title("Transmutation Table")
                        .slider(`§2§l${sel[0].split(":")[1].replace("_", " ")}\n§rHow many items do you want to create?`, 1, world.scoreboard.getObjective("bdc").getScore(player.scoreboardIdentity) / sel[2], 1, Math.min(Math.round(world.scoreboard.getObjective("bdc").getScore(player.scoreboardIdentity) / sel[2] / 2), 64))
                        .textField('Or use this Textbox', '')
                        .show(player).then(response2 => {
                            if (!response2.isCanceled) {
                                let text = parseInt(response2.formValues[1])
                                let slide = response2.formValues[0]
                                if (text && text > 0 && world.scoreboard.getObjective("bdc").getScore(player.scoreboardIdentity) >= sel[2] * text) {
                                    giveItem(player, text, sel)
                                }
                                else if (world.scoreboard.getObjective("bdc").getScore(player.scoreboardIdentity) >= sel[2] * slide) {
                                    giveItem(player, slide, sel)
                                }
                            }
                            showBDC(player)
                        })
                }
            }
        }
    })
}
function addBDC(player) {
    let item = player.getComponent("inventory").container.getItem(player.selectedSlot)
    if (item) {
        for (const i of items) {
            if (item.typeId == i[0]) {
                player.runCommandAsync(`scoreboard players add @s bdc ${i[2] * item.amount}`)
                player.runCommandAsync(`replaceitem entity @s slot.weapon.mainhand 0 air`)
                player.addTag(i[0] + "BDC")
            }
        }
    }
}
system.afterEvents.scriptEventReceive.subscribe(v => {
    if (v.id == "bdc:ui") {
        const block = v.sourceBlock
        const query = {
            tags: [`trans_open`],
        };
        const players = world.getPlayers(query);
        for (const player of players) {
            if (player.hasTag("inemcmenu") == false) {
                player.removeTag("trans_open")
                player.addTag("inemcmenu")
                showBDC(player)
            }
        }
    }
})