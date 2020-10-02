// process env vars
require('dotenv').config(); 
const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
  console.log("I am ready!");
});

function setNick(r, nick) {
  try {
    if (!r.hasPermission("MANAGE_NICKNAMES")) {
      let member = r.nickname || r.user.username;
      r.setNickname(member + nick);
      console.log("changed this : " + member);
    }
  }
  catch(err){}
}
function cleanNick(r) {
  try {
    if (!r.hasPermission("MANAGE_NICKNAMES")) {
      if (r.nickname) {
        let member = r.nickname;
        member = member.slice(0, -1);
        r.setNickname(member);
        console.log("changed this : " + member);
      }
    }
  }
  catch(err){}
}

client.on("message", message => {
  if (message.author.bot) return;
  if (message.content.indexOf(process.env.PREFIX) !== 0) return;

  // argparse
  if (message.content.startsWith(process.env.PREFIX + "spook")) {
    let nick = message.content.slice((process.env.PREFIX + "spook").length);
    if (!nick) return;
    if (message.member.hasPermission("MANAGE_NICKNAMES"))
    {
      message.guild.members.cache.forEach(r => setNick(r, nick));
      message.channel.send('changing nicknames');
    }
    else message.channel.send('you do not have the required permissions');
  }

  if (message.content.startsWith(process.env.PREFIX + "clean")) {
   if (message.member.hasPermission("MANAGE_NICKNAMES")) {
    message.guild.members.cache.forEach(r => cleanNick(r));
    message.channel.send('changing nicknames');
   }
   else message.channel.send('you do not have the required permissions');
  }

});

client.login();