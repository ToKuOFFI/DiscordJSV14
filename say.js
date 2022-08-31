const Discord = require("discord.js")
const { EmbedBuilder } = require('discord.js');

module.exports = {
    name: "say",
    description: "Permet de faire un message avec le bot",
    permission: "Aucune",
    dm: false,
    options: [
        {
            type: "string",
            name: "saymess",
            description: "Message",
            required: true
        }
    ],
    async run(toku, message, args) {


        let Err_ = new EmbedBuilder()
        .setColor(`#aaaaa`)
        .setThumbnail(message.guild.iconURL({ dynamic: true }))
        .setTitle("**Une erreur est survenu **")
        .addFields({name: `**__Détail de l'erreur __** `, value: `> Aucun message donnée  `})
        .setTimestamp()

        try {
            let saymessage = args.get("saymess").value;
            if(!saymessage) return message.reply({ embeds: [Err_] })
        
            let Say = new EmbedBuilder()
            .setColor(`#aaaa`)
            .setThumbnail(message.guild.iconURL({ dynamic: true }))
            .setTitle("** Say **")
             .addFields({name: `**Say:** `, value: ${saymessage}`** **`})
            .setTimestamp()

                await message.reply({ embeds: [Say] })      
            
        } catch (err) {
            return message.reply({ embeds: [Err_] })
        }
    }
}
