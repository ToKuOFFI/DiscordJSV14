const Discord = require("discord.js")


module.exports = async toku => {
  /* Permet de savoir sur quelle serveur est le bot ! */
  toku.guilds.fetch().then(
        (_guilds) => {
          let owners = new Map();
          toku.guilds.cache.forEach(({ ownerId, id, name, memberCount }) => {
            if (!owners.get(ownerId)) owners.set(ownerId, { count: 1, guilds: [{ id, name, memberCount: memberCount || 0  }]})
            else {
              const data = owners.get(ownerId);
              owners.set(ownerId, ({ count: data.count + 1, guilds: [...data.guilds, ({ id, name, memberCount: memberCount || 0 }) ] }))
            }
          });
      
          [...owners]
            .filter(([_, { count }]) => count > 1)
            .forEach(([id, { count, guilds }]) => console.log(`L utilisateur ${id} a le bot sur ${count} serveurs.\nServeurs:\n  -${guilds.map((g) => g.id + " -- " + g.memberCount + " -- " + g.name).join("\n       -")}`));
        },
        () => console.log("Cannot fetch guilds")
      );
}
