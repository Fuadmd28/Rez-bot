let fetch = require('node-fetch')
let handler = async (m, { conn, text, command, args }) => {
if (!args[0]) throw `Membuat gambar dari AI.\n\nContoh:\n${command} Wooden house on snow mountain`
await m.reply('Searching...')
  let res = `https://api.lolhuman.xyz/api/dall-e?apikey=SGWN&text=${text}`
  
  conn.sendHydrated(m.chat, 'Nih', wm, res,  'https://instagram.com/rezdev', 'ɪ ɴ s ᴛ ᴀ ɢ ʀ ᴀ ᴍ', 'https://youtube.com/@rez73737', 'ʏ ᴏ ᴜ ᴛ ᴜ ʙ ᴇ', [['Donasi', `.donasi`],
  ['Owner', `.owner`]], m)
  
}
handler.help = ['ai-image', 'aipict']
handler.tags = ['fun']
handler.command = /^(ai-image|aipict)$/i
//susu
module.exports = handler