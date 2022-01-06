/* # Exclusively from raashii
 */ 

const Rashi = require('../events');
const { MessageType, MessageOptions, Mimetype } = require('@adiwajshing/baileys');
const fs = require('fs');
const axios = require('axios');
const Config = require('../Saniya');
const config = require('../config');

if (config.WORKTYPE == 'private') {

Rashi.addCommand({pattern: 'number', fromMe: true, desc: 'Its send owner number'}, (async (message, match) => {

            const Raashii = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:' + Config.S_OWNER + '\n' //created afnanplk, please copy this with credit..
            + 'ORG:Saniya fam;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=' + Config.S_NUMBER + ':' + Config.S_NUMBER + ' \n'
            + 'END:VCARD'
await message.client.sendMessage(message.jid, {displayname: "Owner", vcard: Raashii}, MessageType.contact);

  }));
}

else if (config.WORKTYPE == 'public') {

Rashi.addCommand({pattern: 'number', fromMe: false, desc: 'Its send owner number'}, (async (message, match) => {
         var mode = ''
if (Config.S_OWNER == 'Midhun') mode = 'ᴅᴇᴠᴇʟᴏᴘᴇʀ : '

else mode = 'ᴏᴡɴᴇʀ : '
            
            const Raashii = 'BEGIN:VCARD\n'
            + 'VERSION:3.0\n' 
            + 'FN:' + mode + Config.S_OWNER + '\n' //created afnanplk, please copy this with credit..
            + 'ORG:Saniya fam;\n' 
            + 'TEL;type=CELL;type=VOICE;waid=' + Config.S_NUMBER + ':' + Config.S_NUMBER + ' \n'
            + 'END:VCARD'
await message.client.sendMessage(message.jid, {displayname: "Owner", vcard: Midhun }, MessageType.contact);

  }));
}
