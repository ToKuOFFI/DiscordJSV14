const Discord = require("discord.js")
const { EmbedBuilder, MessageActivityType } = require('discord.js');

module.exports = {

    name: "qi",
    description: "Permet de savoir à combien de % vous avez du qi",
    permission: "Aucune",
    dm: true,

    async run(toku, message, args, members, bot)  {    
      
            const amount = Math.floor(Math.random() * 200) + 1;
      
            const embed = new EmbedBuilder()
            .setTitle(`** ${message.user === undefined ? message.author.tag : message.user.tag} a un qi de  ${amount} **`)
            .setColor("2f3136")
            .setFooter({ text: `Demandé par discord.gg/sinixdev`})
            return message.reply({embeds: [embed]}); 
    }
}
