let fs = require('fs') 
let chalk = require('chalk')

global.owner = 
 [
  ['628989513496', 'Chino'],
  ['628989513496'],
  ['628989513496']
]

owner = [
  ['628989513496', 'Rezdev', true]
  // [number, dia creator/owner?, dia developer?]
] // Put your number here
mods = [] // Want some help?
prems = [] // Premium user has unlimited limit
APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  lol: 'https://api.lolhuman.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  bcil: 'https://75.119.137.248:21587',
  neoxr: 'https://api.neoxr.eu.org/',
  zeks: 'https://api.zeks.me',
  gimez: 'https://masgimenz.my.id/',
  melcanz: 'https://melcanz.com',
  pencarikode: 'https://pencarikode.xyz',
  LeysCoder: 'https://leyscoders-api.herokuapp.com',
  restapi: 'https://x-restapi.herokuapp.com'
}
APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'apikeyaine',
  'https://api.lolhuman.xyz': 'e54205a4ca2caa368cc067bb',// 8e66d0934cf741bfd2182c16
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.neoxr.eu.org/': 'jVEMyB2ITJ',
  'https://api.zeks.me': 'apikeyaine',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'ZZBk7EBb',
  'https://leyscoders-api.herokuapp.com': 'dappakntlll',
  'https://x-restapi.herokuapp.com': 'BETA'
}

process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = 0

const spack = fs.readFileSync("lib/exif.json")
const stickerpack = JSON.parse(spack)
if (stickerpack.spackname == '') {
  var sticker_name = 'Chino.'
  var sticker_author = 'Chino'
} else {
  var sticker_name = stickerpack.spackname
  var sticker_author = stickerpack.sauthor
}

const file_exif = "lib/exif.json"
fs.watchFile(file_exif, () => {
  fs.unwatchFile(file_exif)
  console.log(chalk.redBright("Update 'exif.json'"))
  delete require.cache[file_exif]
  require('./lib/exif.json')
})

//apikey
global.lolkey = pickRandom(["e54205a4ca2caa368cc067bb", "8e66d0934cf741bfd2182c16", "327a6596e4c4baa20c756132", "bukanitucuy14315195", "85faf717d0545d14074659ad", "ed78c137a46873c5b8e5fe3b", "zulfikarbot"])
/*OpenAi*/
global.openaikey = pickRandom(["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", "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"])
// Sticker WM
packname = sticker_name
author = sticker_author
wm = '© Chino'
global.ownernya = ["6283811034750","6283811034750"]
global.colong1 = 'Chino'
global.wm2 = 'Chino'
global.thumb = 'https://telegra.ph/file/cce9ab4551f7150f1970d.jpg' //Main Thumbnail
global.sgc = 'https://chat.whatsapp.com/JB6tKrLlWv1Hv6thVWKvbU'
global.colong2 = 'Chino'
global.htki = '––––––『' //hiasan title kiri
global.benar = '_*Benar*_✅'
global.salah = '_*Salah*_❌'
global.dikit = "dikit lagi"
global.htka = '』––––––' //hiasan title kanan
global.wait = '*_Sabar Siss_*.....'
global.cmenut = '❏––––––『'                       //top
global.cmenuh = '』––––––'                        //header
global.cmenub = '┊❀'
global.kontak2 = [
['628989513496', 'Chino', true],
]

multiplier = 1000 // The higher, The harder levelup

rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      exp: '✉️',
      money: '💵',
      potion: '🥤',
      diamond: '💎',
      common: '📦',
      uncommon: '🎁',
      mythic: '🗳️',
      legendary: '🗃️',
      pet: '🎁',
      trash: '🗑',
      armor: '🥼',
      sword: '⚔️',
      wood: '🪵',
      rock: '🪨',
      string: '🕸️',
      horse: '🐎',
      cat: '🐈' ,
      dog: '🐕',
      fox: '🦊',
      petFood: '🍖',
      iron: '⛓️',
      gold: '👑',
      emerald: '💚'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}

let file = require.resolve(__filename)
fs.watchFile(file, () => {
  fs.unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  delete require.cache[file]
  require(file)
})

//------ FUNCTION
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}
