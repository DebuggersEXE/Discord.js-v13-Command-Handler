module.exports={
    name:'ping',
    description: "Ping Command",
    execute(message, args){
        message.channel.send(`🏓 Bot Ping is ${Date.now() - message.createdTimestamp}ms\nAPI Ping - ${client.ws.ping}`);
        }
      };
