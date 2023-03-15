let fs = require('fs')
let fetch = require('node-fetch')
let handler = async (m, { conn, usedPrefix }) => {
  let name = await conn.getName(m.sender)
  let user = global.db.data.users[m.sender]
let pp = 'https://telegra.ph/file/d60e7bb332c302c405f94.jpg'
  const caption = `─────❑ 「 SEWA BOT 」 ❑─────
Hai kak ${name} 👋
ingin sewa bot?
*List harga*
Rp.5000 2Minggu
Rp.10000 5minggu
Harga lainya tanyakan ke owner
wa.me/6283811034750 (owner)


`.trim()
  conn.send3ButtonLoc(m.chat, pp, caption, wm, 'DONASI', '.donasi', 'Owner', '.owner', 'MENU', '.menu', m)
}
handler.help = ['sewa']
handler.tags = ['main']
handler.command = /^sewa$/i
handler.limit = true

module.exports = handler