
require('./config')
//●●●●●●●●●●●●●●●●●●●●●● CONST ●●●●●●●●●●●●●●●●●●●●●●
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType} = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const hx = require('hxz-api')
//const xfar = require('xfarr-api')
const bocil = require('@bochilteam/scraper') 
const axios = require('axios')
const { fromBuffer } = require('file-type')
const path = require('path')
const os = require('os')
const Jimp = require('jimp')
const moment = require("moment-timezone");
const wib = moment.tz('Asia/Jakarta').format('HH : mm : ss')
const wita = moment.tz('Asia/Makassar').format('HH : mm : ss')
const wit = moment.tz('Asia/Jayapura').format('HH : mm : ss')
const dt = moment(Date.now()).tz('Asia/Jakarta').locale('id').format('a')
const ffmpeg = require('fluent-ffmpeg')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
const content = JSON.stringify(m.message)
const imgbb = require('imgbb-uploader');
const { EmojiAPI } = require("emoji-api");
const emoji = new EmojiAPI()
//const ucapanWaktu = "Selamat "+dt.charAt(0).toUpperCase() + dt.slice(1)*/
const type = Object.keys(m.message)[0]
const ofrply = fs.readFileSync('./lib/hisoka.jpg')
const mediafiredl = require('./lib/mediafiredl.js')
const { 
ttp,
attp,
igstalk,
igstory,
aiovideodl,
like, 
soundcloud2, 
cocofun, 
pinterestdlv2, 
twitter, 
soundcloud, 
facebook } = require('./lib/scraper.js')
const maker = require('mumaker')
const cmdmedia = JSON.parse(fs.readFileSync('./src/cmdmedia.json'))

//●●●●●●●●●●●●●●●●●●●●●● MODULE EXPORT ●●●●●●●●●●●●●●●●●●●●●●
module.exports = kon = async (kon, m, chatUpdate, store) => {
    try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
var prefix = prefa ? /^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi.test(body) ? body.match(/^[°•π÷×¶∆£¢€¥®™+✓_=|~!?@#$%^&.©^]/gi)[0] : "" : prefa ?? global.prefix
const isCmd = body.startsWith(prefix)
const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "No Name"
const botNumber = kon.user.id ? kon.user.id.split(":")[0]+"@s.whatsapp.net" : kon.user.id
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const from = m.key.remoteJid
const sender = m.isGroup ? m.participant : m.key.remoteJid
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const isQuotedMsg = type === 'extendedTextMessage' && content.includes('Message')
const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')
const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')
const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')
const isUrl = (url) => {
return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))
}
moment.tz.setDefault("Asia/Jakarta").locale("id");
const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')
const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
if(time2 < "23:59:00"){
var ucapanWaktu = 'Selamat Malam🌃'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Selamat Petang🌆'
}
if(time2 < "18:00:00"){
var ucapanWaktu = 'Selamat Sore🌅'
}
if(time2 < "15:00:00"){
var ucapanWaktu = 'Selamat Siang🏙'
}
if(time2 < "11:00:00"){
var ucapanWaktu = 'Selamat Pagi🌁'
}
if(time2 < "05:00:00"){
var ucapanWaktu = 'Selamat Malam🌉'
}

let tamnel = fs.readFileSync('./lib/hisoka.jpg')
//●●●●●●●●●●●●●●●●●●●●●● GROUP SETTING●●●●●●●●●●●●●●●●●●●●●●
        const groupMetadata = m.isGroup ? await kon.groupMetadata(m.chat).catch(e => {}) : ''
        const groupName = m.isGroup ? groupMetadata.subject : ''
        const participants = m.isGroup ? await groupMetadata.participants : ''
        const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
        const groupOwner = m.isGroup ? groupMetadata.owner : ''
    	const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
    	const isGroupOwner = m.isGroup ? groupOwner.includes(m.sender) : false
        const isGroupAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
        const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false
	
	
	try {
            let isNumber = x => typeof x === 'number' && !isNaN(x)
            let limitUser = isPremium ? global.limitpremium : global.limitfree
            let user = db.data.users[m.sender]
            if (typeof user !== 'object') db.data.users[m.sender] = {}
            if (user) {   
                if (!isNumber(user.limit)) user.limit = limitUser
            } else global.db.data.users[m.sender] = {
                limit: limitUser,
            }
            } catch (err) {
            console.error(err)
        }
        // reset limit every 12 hours
        let cron = require('node-cron')
        cron.schedule('00 12 * * *', () => {
            let user = Object.keys(global.db.data.users)
            let limitUser = isPremium ? global.limitpremium : global.limitfree
            for (let jid of user) global.db.data.users[jid].limit = limitUser
            console.log('Reseted Limit')
        }, {
            scheduled: true,
            timezone: "Asia/Jakarta"
        })
        const jakol = m.sender
        const panggil = `@${jakol.split("@")[0]}`
        // Bot Status
        const used = process.memoryUsage()
        const cpus = os.cpus().map(cpu => {
            cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
			return cpu
        })
        let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
        const cpu = cpus.reduce((last, cpu, _, { length }) => {
            last.total += cpu.total
			last.speed += cpu.speed / length
			last.times.user += cpu.times.user
			last.times.nice += cpu.times.nice
			last.times.sys += cpu.times.sys
			last.times.idle += cpu.times.idle
			last.times.irq += cpu.times.irq
			return last
        }, {
            speed: 0,
			total: 0,
			times: {
			    user: 0,
			    nice: 0,
			    sys: 0,
			    idle: 0,
			    irq: 0
            }
        })
        
//●●●●●●●●●●●●●●●●●●●●●● MENU SETTING●●●●●●●●●●●●●●●●●●●●●●
let listcmd = `
🎗 *Hallo Kak ${pushname} ~ ${ucapanWaktu}*
🐣 *Runtime Bot : ${runtime(process.uptime())}*
🌀 *Speed Bot     : ${latensi.toFixed(4)} Second*
☕ *Tanggal         : ${moment.tz('Asia/Jakarta').format('DD / MM / YY')}*

𝐈𝐧𝐟𝐨
 ⍨⃝⚠️ ${prefix}menu
 ⍨⃝⚠️ ${prefix}ping
 ⍨⃝⚠️ ${prefix}owner
 ⍨⃝⚠️ ${prefix}speedtest
 ⍨⃝⚠️ ${prefix}listgc
 ⍨⃝⚠️ ${prefix}listpc
 
𝐂𝐨𝐧𝐯𝐞𝐫𝐭
 ⍨⃝🐣 ${prefix}tomp4 (reply sticker gif)
 ⍨⃝🐣 ${prefix}toaudio (reply audio)
 ⍨⃝🐣 ${prefix}togif (reply sticker gif)
 ⍨⃝🐣 ${prefix}toimg (reply sticker)
 ⍨⃝🐣 ${prefix}tovn (reply audio)
 ⍨⃝🐣 ${prefix}tourl (reply media)
 ⍨⃝🐣 ${prefix}tomp3 (reply video)
 ⍨⃝🐣 ${prefix}shortlink (link)
 ⍨⃝🐣  *Sticker*
  === Info ===
 ==⍨⃝🐣 ${prefix}sendsticker (link)
 ==⍨⃝🐣 ${prefix}ttp (teks)
 ==⍨⃝🐣 ${prefix}ttp2 (teks)
 ==⍨⃝🐣 ${prefix}attp (teks)
 ==⍨⃝🐣 ${prefix}attp2 (teks)
 ==⍨⃝🐣 ${prefix}attp3 (teks)
 ==⍨⃝🐣 ${prefix}ttpcustom (teks|warna)
 ==⍨⃝🐣 ${prefix}sticker (reply gambar)
 ==⍨⃝🐣 ${prefix}swm (reply gambar)
 ==⍨⃝🐣 ${prefix}smeme (reply gambar)
 ==⍨⃝🐣 ${prefix}smeme2 (reply gambar)
 ==⍨⃝🐣 ${prefix}triggered (reply gambar)
 ==⍨⃝🐣 ${prefix}gay (reply gambar)
 ==⍨⃝🐣 ${prefix}glass (reply gambar)
 ==⍨⃝🐣 ${prefix}passed (reply gambar)
 ==⍨⃝🐣 ${prefix}jail (reply gambar)
 ==⍨⃝🐣 ${prefix}comrade (reply gambar)
 ==⍨⃝🐣 ${prefix}green (reply gambar)
 ==⍨⃝🐣 ${prefix}blue (reply gambar)
 ==⍨⃝🐣 ${prefix}sepia (reply gambar)
 ==⍨⃝🐣 ${prefix}wasted (reply gambar)
 ==⍨⃝🐣 ${prefix}greyscale (reply gambar)
 ==⍨⃝🐣 ${prefix}blurple2 (reply gambar)
 ==⍨⃝🐣 ${prefix}blurple (reply gambar)
 ==⍨⃝🐣 ${prefix}red (reply gambar)
 ==⍨⃝🐣 ${prefix}invertgreyscale (reply gambar)
 ==⍨⃝🐣 ${prefix}invert (reply gambar)
 
𝐓𝐨𝐨𝐥𝐬
 ⍨⃝📚 ${prefix}removebg (reply gambar)
 ⍨⃝📚 ${prefix}emojimix (masukan emoji)
 ⍨⃝📚 ${prefix}emojimix2 (masukan emoji)
 ⍨⃝📚 ${prefix}emoji (masukan emoji)
 ⍨⃝📚 ${prefix}del (reply pesan bot)
 ⍨⃝📚 ${prefix}q 
 ⍨⃝📚 ${prefix}ssweb 
 ⍨⃝📚 ${prefix}asupan
 
 *Database*
 ⍨⃝🎈 ${prefix}addmsg (reply pesan)
 ⍨⃝🎈 ${prefix}getmsg 
 ⍨⃝🎈 ${prefix}delmsg
 ⍨⃝🎈 ${prefix}listmsg
 
𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝
 ⍨⃝📩 ${prefix}play (judul lagu)🇱
 ⍨⃝📩 ${prefix}cocofun <Link Cocofun>🇱
 ⍨⃝📩 ${prefix}pinterestdl <Link Pinterest>
 ⍨⃝📩 ${prefix}pinterestdl2 <Link Pinterest>
 ⍨⃝📩 ${prefix}soundcloud <Link Soundcloud>🇱
 ⍨⃝📩 ${prefix}gitclone <Link RepoGit>🇱
 ⍨⃝📩 ${prefix}facebook <Link>🇱
 ⍨⃝📩 ${prefix}facebook2 <Link>🇱
   ⍨⃝📩 YouTube
  === Info ===
  ==> Downloader by y2mate
  ==⍨⃝📩 ${prefix}ytmp4 <LinkYt>🇱
  ==⍨⃝📩 ${prefix}ytmp3 <LinkYt>🇱
 ⍨⃝📩 TikTok
  === Info ===
  ==> Downloader by Snaptik
      ==⍨⃝📩 ${prefix}tiktok <Link Tiktok>🇱
  ==> Downloader by Aoivideodl
      ==⍨⃝📩 ${prefix}tiktok2 <Link Tiktok>🇱
      ==⍨⃝📩 ${prefix}tiktokaudio2 <Link Tiktok>🇱
  ==> Downloader by Ttdownloader
      ==⍨⃝📩 ${prefix}tiktok3 <Link Tiktok>🇱
  ==> Downloader by @hxz-api
      ==⍨⃝📩 ${prefix}tiktokaudio3 <Link Tiktok>🇱
 ⍨⃝📩 ${prefix}twitter (link twitter)🇱
 ⍨⃝📩 ${prefix}twitter2 (link twitter)🇱
 ⍨⃝📩 ${prefix}telesticker (link sticker tele)🇱
 ⍨⃝📩 Instagram
  === Info ===
  ==> Downloader by @hxz-api
  ==⍨⃝📩 ${prefix}instagram <Link Instagram>🇱
  ==⍨⃝📩 ${prefix}igstory <Username IG>🇱
 ⍨⃝📩 ${prefix}getmusic🇱
 ⍨⃝📩 ${prefix}getvideo🇱
 ⍨⃝📩 ${prefix}mediafire🇱
 ⍨⃝📩 ${prefix}jpeg <Link Gambar>
 ⍨⃝📩 ${prefix}mp3 <Link Music>
 ⍨⃝📩 ${prefix}mp4 <Link Video>
 
𝐎𝐰𝐧𝐞𝐫
 ⍨⃝☕ ${prefix}bcgc 
 ⍨⃝☕ ${prefix}bcimage
 ⍨⃝☕ ${prefix}bcvideo
 ⍨⃝☕ ${prefix}bcsticker
 ⍨⃝☕ ${prefix}bcaudio
 ⍨⃝☕ ${prefix}bcall 
 ⍨⃝☕ ${prefix}setppbot 
 ⍨⃝☕ ${prefix}sendsession
 ⍨⃝☕ ${prefix}setexif
 ⍨⃝☕ ${prefix}setfooter

𝐆𝐫𝐨𝐮𝐩
 ⍨⃝👥 ${prefix}tagall 
 ⍨⃝👥 ${prefix}hidetag
 ⍨⃝👥 ${prefix}grup  
 ⍨⃝👥 ${prefix}editinfo 
 ⍨⃝👥 ${prefix}linkgc
 ⍨⃝👥 ${prefix}setppgc [image]
 ⍨⃝👥 ${prefix}setname [text]
 ⍨⃝👥 ${prefix}setdesc [text]
 ⍨⃝👥 ${prefix}add @user
 ⍨⃝👥 ${prefix}kick @user
 ⍨⃝👥 ${prefix}promote @user
 ⍨⃝👥 ${prefix}demote @user

𝐒𝐞𝐚𝐫𝐜𝐡
 ⍨⃝🔎 ${prefix}wikipedia 
 ⍨⃝🔎 ${prefix}ytsearch (judul)
 ⍨⃝🔎 ${prefix}google 
 ⍨⃝🔎 ${prefix}gimage 
 ⍨⃝🔎 ${prefix}pinterest 
 
𝐕𝐨𝐢𝐜𝐞 𝐂𝐡𝐚𝐧𝐠𝐞𝐫
 ⍨⃝🎧 ${prefix}bass (reply audio)
 ⍨⃝🎧 ${prefix}blown (reply audio)
 ⍨⃝🎧 ${prefix}deep (reply audio)
 ⍨⃝🎧 ${prefix}earrape (reply audio)
 ⍨⃝🎧 ${prefix}fast (reply audio)
 ⍨⃝🎧 ${prefix}fat (reply audio)
 ⍨⃝🎧 ${prefix}nightcore (reply audio)
 ⍨⃝🎧 ${prefix}reverse (reply audio)
 ⍨⃝🎧 ${prefix}robot (reply audio)
 ⍨⃝🎧 ${prefix}slow (reply audio)
 ⍨⃝🎧 ${prefix}tupai (reply audio)

Text Pro
⍨⃝🎬 ${prefix}candy (masukan teks)
⍨⃝🎬 ${prefix}christmas (masukan teks)
⍨⃝🎬 ${prefix}3dchristmas (masukan teks)
⍨⃝🎬 ${prefix}sparklechristmas (masukan teks)
⍨⃝🎬 ${prefix}deepsea (masukan teks)
⍨⃝🎬 ${prefix}scifi (masukan teks)
⍨⃝🎬 ${prefix}rainbow (masukan teks)
⍨⃝🎬 ${prefix}waterpipe (masukan teks)
⍨⃝🎬 ${prefix}spooky (masukan teks)
⍨⃝🎬 ${prefix}pencil (masukan teks)
⍨⃝🎬 ${prefix}circuit (masukan teks)
⍨⃝🎬 ${prefix}discovery (masukan teks)
⍨⃝🎬 ${prefix}metalic (masukan teks)
⍨⃝🎬 ${prefix}fiction (masukan teks)
⍨⃝🎬 ${prefix}demon (masukan teks)
⍨⃝🎬 ${prefix}transformer (masukan teks)
⍨⃝🎬 ${prefix}berry (masukan teks)
⍨⃝🎬 ${prefix}thunder (masukan teks)
⍨⃝🎬 ${prefix}magma (masukan teks)
⍨⃝🎬 ${prefix}3dstone (masukan teks)
⍨⃝🎬 ${prefix}neonlight (masukan teks)
⍨⃝🎬 ${prefix}glitch (masukan teks)
⍨⃝🎬 ${prefix}harrypotter (masukan teks)
⍨⃝🎬 ${prefix}brokenglass (masukan teks)
⍨⃝🎬 ${prefix}papercut (masukan teks)
⍨⃝🎬 ${prefix}watercolor (masukan teks)
⍨⃝🎬 ${prefix}multicolor (masukan teks)
⍨⃝🎬 ${prefix}neondevil (masukan teks)
⍨⃝🎬 ${prefix}underwater (masukan teks)
⍨⃝🎬 ${prefix}graffitibike (masukan teks)
⍨⃝🎬 ${prefix}snow (masukan teks)
⍨⃝🎬 ${prefix}cloud (masukan teks)
⍨⃝🎬 ${prefix}honey (masukan teks)
⍨⃝🎬 ${prefix}ice (masukan teks)
⍨⃝🎬 ${prefix}fruitjuice (masukan teks)
⍨⃝🎬 ${prefix}biscuit (masukan teks)
⍨⃝🎬 ${prefix}wood (masukan teks)
⍨⃝🎬 ${prefix}chocolate (masukan teks)
⍨⃝🎬 ${prefix}strawberry (masukan teks)
⍨⃝🎬 ${prefix}matrix (masukan teks)
⍨⃝🎬 ${prefix}blood (masukan teks)
⍨⃝🎬 ${prefix}dropwater (masukan teks)
⍨⃝🎬 ${prefix}toxic (masukan teks)
⍨⃝🎬 ${prefix}lava (masukan teks)
⍨⃝🎬 ${prefix}rock (masukan teks)
⍨⃝🎬 ${prefix}bloodglas (masukan teks)
⍨⃝🎬 ${prefix}hallowen (masukan teks)
⍨⃝🎬 ${prefix}darkgold (masukan teks)
⍨⃝🎬 ${prefix}joker (masukan teks)
⍨⃝🎬 ${prefix}wicker(masukan teks)
⍨⃝🎬 ${prefix}firework (masukan teks)
⍨⃝🎬 ${prefix}skeleton (masukan teks)
⍨⃝🎬 ${prefix}blackpink (masukan teks)
⍨⃝🎬 ${prefix}sand (masukan teks)
⍨⃝🎬 ${prefix}glue (masukan teks)
⍨⃝🎬 ${prefix}1917 (masukan teks)
⍨⃝🎬 ${prefix}leaves (masukan teks)
⍨⃝🎬 ${prefix}pencil (masukan teks)
⍨⃝🎬 ${prefix}carbon (masukan teks)
⍨⃝🎬 ${prefix}natural (masukan teks)
⍨⃝🎬 ${prefix}neonlight (masukan teks)
⍨⃝🎬 ${prefix}dropwater (masukan teks)
⍨⃝🎬 ${prefix}joker (masukan teks)
⍨⃝🎬 ${prefix}hollographic (masukan teks)
⍨⃝🎬 ${prefix}bokeh (masukan teks)
⍨⃝🎬 ${prefix}greenneon (masukan teks)
⍨⃝🎬 ${prefix}neon (masukan teks)
⍨⃝🎬 ${prefix}3dneon (masukan teks)
⍨⃝🎬 ${prefix}blackping (masukan teks)
⍨⃝🎬 ${prefix}window (masukan teks)
⍨⃝🎬 ${prefix}thunder (masukan teks)
⍨⃝🎬 ${prefix}3davengers (masukan teks)
⍨⃝🎬 ${prefix}3dstone (masukan teks)
⍨⃝🎬 ${prefix}neondevil (masukan teks)
⍨⃝🎬 ${prefix}transformer (masukan teks)
⍨⃝🎬 ${prefix}papercut (masukan teks)
⍨⃝🎬 ${prefix}lion2 (masukan teks)
⍨⃝🎬 ${prefix}drapwater (masukan teks)
⍨⃝🎬 ${prefix}3dbox (masukan teks)
⍨⃝🎬 ${prefix}herryp (masukan teks)
⍨⃝🎬 ${prefix}grafiti (masukan teks)
⍨⃝🎬 ${prefix}pornhub (masukan teks)
⍨⃝🎬 ${prefix}glitch2 (masukan teks)
⍨⃝🎬 ${prefix}glitch3 (masukan teks)
⍨⃝🎬 ${prefix}3dspace (masukan teks)
⍨⃝🎬 ${prefix}lion (masukan teks)
⍨⃝🎬 ${prefix}bear (masukan teks)
⍨⃝🎬 ${prefix}wolf (masukan teks)
⍨⃝🎬 ${prefix}thewall (masukan teks)

𝐍𝐬𝐟𝐰
 ⍨⃝🔕 ${prefix}yuri 
 ⍨⃝🔕 ${prefix}pussy 
 ⍨⃝🔕 ${prefix}panties 
 ⍨⃝🔕 ${prefix}orgy 
 ⍨⃝🔕 ${prefix}neko 
 ⍨⃝🔕 ${prefix}masturbation 
 ⍨⃝🔕 ${prefix}jahy 
 ⍨⃝🔕 ${prefix}glasses 
 ⍨⃝🔕 ${prefix}gangbang 
 ⍨⃝🔕 ${prefix}foot 
 ⍨⃝🔕 ${prefix}femdom 
 ⍨⃝🔕 ${prefix}ero 
 ⍨⃝🔕 ${prefix}cum 
 ⍨⃝🔕 ${prefix}cuckkold 
 ⍨⃝🔕 ${prefix}blowjob 
 ⍨⃝🔕 ${prefix}bdsm 
 ⍨⃝🔕 ${prefix}ahegao 
 ⍨⃝🔕 ${prefix}ass
`
let listnsfw =`
🎗 *Hallo Kak ${pushname} ~ ${ucapanWaktu}*
🐣 *Runtime Bot : ${runtime(process.uptime())}*
🌀 *Speed Bot     : ${latensi.toFixed(4)} Second*
☕ *Tanggal         : ${moment.tz('Asia/Jakarta').format('DD / MM / YY')}*
𝐍𝐬𝐟𝐰
 ⍨⃝🔕 ${prefix}yuri 
 ⍨⃝?? ${prefix}pussy 
 ⍨⃝🔕 ${prefix}panties 
 ⍨⃝🔕 ${prefix}orgy 
 ⍨⃝🔕 ${prefix}neko 
 ⍨⃝🔕 ${prefix}masturbation 
 ⍨⃝🔕 ${prefix}jahy 
 ⍨⃝🔕 ${prefix}glasses 
 ⍨⃝🔕 ${prefix}gangbang 
 ⍨⃝🔕 ${prefix}foot 
 ⍨⃝🔕 ${prefix}femdom 
 ⍨⃝🔕 ${prefix}ero 
 ⍨⃝🔕 ${prefix}cum 
 ⍨⃝🔕 ${prefix}cuckkold 
 ⍨⃝🔕 ${prefix}blowjob 
 ⍨⃝🔕 ${prefix}bdsm 
 ⍨⃝🔕 ${prefix}ahegao 
 ⍨⃝🔕 ${prefix}ass`
 
 let listmaker = `
🎗 *Hallo Kak ${pushname} ~ ${ucapanWaktu}*
🐣 *Runtime Bot : ${runtime(process.uptime())}*
🌀 *Speed Bot     : ${latensi.toFixed(4)} Second*
☕ *Tanggal         : ${moment.tz('Asia/Jakarta').format('DD / MM / YY')}*
Text Pro
⍨⃝🎬 ${prefix}candy (masukan teks)
⍨⃝🎬 ${prefix}christmas (masukan teks)
⍨⃝🎬 ${prefix}3dchristmas (masukan teks)
⍨⃝🎬 ${prefix}sparklechristmas (masukan teks)
⍨⃝🎬 ${prefix}deepsea (masukan teks)
⍨⃝🎬 ${prefix}scifi (masukan teks)
⍨⃝🎬 ${prefix}rainbow (masukan teks)
⍨⃝🎬 ${prefix}waterpipe (masukan teks)
⍨⃝🎬 ${prefix}spooky (masukan teks)
⍨⃝🎬 ${prefix}pencil (masukan teks)
⍨⃝🎬 ${prefix}circuit (masukan teks)
⍨⃝🎬 ${prefix}discovery (masukan teks)
⍨⃝🎬 ${prefix}metalic (masukan teks)
⍨⃝🎬 ${prefix}fiction (masukan teks)
⍨⃝🎬 ${prefix}demon (masukan teks)
⍨⃝🎬 ${prefix}transformer (masukan teks)
⍨⃝🎬 ${prefix}berry (masukan teks)
⍨⃝🎬 ${prefix}thunder (masukan teks)
⍨⃝🎬 ${prefix}magma (masukan teks)
⍨⃝🎬 ${prefix}3dstone (masukan teks)
⍨⃝🎬 ${prefix}neonlight (masukan teks)
⍨⃝🎬 ${prefix}glitch (masukan teks)
⍨⃝🎬 ${prefix}harrypotter (masukan teks)
⍨⃝🎬 ${prefix}brokenglass (masukan teks)
⍨⃝🎬 ${prefix}papercut (masukan teks)
⍨⃝🎬 ${prefix}watercolor (masukan teks)
⍨⃝🎬 ${prefix}multicolor (masukan teks)
⍨⃝🎬 ${prefix}neondevil (masukan teks)
⍨⃝🎬 ${prefix}underwater (masukan teks)
⍨⃝🎬 ${prefix}graffitibike (masukan teks)
⍨⃝🎬 ${prefix}snow (masukan teks)
⍨⃝🎬 ${prefix}cloud (masukan teks)
⍨⃝🎬 ${prefix}honey (masukan teks)
⍨⃝🎬 ${prefix}ice (masukan teks)
⍨⃝🎬 ${prefix}fruitjuice (masukan teks)
⍨⃝🎬 ${prefix}biscuit (masukan teks)
⍨⃝🎬 ${prefix}wood (masukan teks)
⍨⃝🎬 ${prefix}chocolate (masukan teks)
⍨⃝🎬 ${prefix}strawberry (masukan teks)
⍨⃝🎬 ${prefix}matrix (masukan teks)
⍨⃝🎬 ${prefix}blood (masukan teks)
⍨⃝🎬 ${prefix}dropwater (masukan teks)
⍨⃝🎬 ${prefix}toxic (masukan teks)
⍨⃝🎬 ${prefix}lava (masukan teks)
⍨⃝🎬 ${prefix}rock (masukan teks)
⍨⃝🎬 ${prefix}bloodglas (masukan teks)
⍨⃝🎬 ${prefix}hallowen (masukan teks)
⍨⃝🎬 ${prefix}darkgold (masukan teks)
⍨⃝🎬 ${prefix}joker (masukan teks)
⍨⃝🎬 ${prefix}wicker(masukan teks)
⍨⃝🎬 ${prefix}firework (masukan teks)
⍨⃝🎬 ${prefix}skeleton (masukan teks)
⍨⃝🎬 ${prefix}blackpink (masukan teks)
⍨⃝🎬 ${prefix}sand (masukan teks)
⍨⃝🎬 ${prefix}glue (masukan teks)
⍨⃝🎬 ${prefix}1917 (masukan teks)
⍨⃝🎬 ${prefix}leaves (masukan teks)
⍨⃝🎬 ${prefix}pencil (masukan teks)
⍨⃝🎬 ${prefix}carbon (masukan teks)
⍨⃝🎬 ${prefix}natural (masukan teks)
⍨⃝🎬 ${prefix}neonlight (masukan teks)
⍨⃝🎬 ${prefix}dropwater (masukan teks)
⍨⃝🎬 ${prefix}joker (masukan teks)
⍨⃝🎬 ${prefix}hollographic (masukan teks)
⍨⃝🎬 ${prefix}bokeh (masukan teks)
⍨⃝🎬 ${prefix}greenneon (masukan teks)
⍨⃝🎬 ${prefix}neon (masukan teks)
⍨⃝🎬 ${prefix}3dneon (masukan teks)
⍨⃝🎬 ${prefix}blackping (masukan teks)
⍨⃝🎬 ${prefix}window (masukan teks)
⍨⃝🎬 ${prefix}thunder (masukan teks)
⍨⃝🎬 ${prefix}3davengers (masukan teks)
⍨⃝🎬 ${prefix}3dstone (masukan teks)
⍨⃝🎬 ${prefix}neondevil (masukan teks)
⍨⃝🎬 ${prefix}transformer (masukan teks)
⍨⃝🎬 ${prefix}papercut (masukan teks)
⍨⃝🎬 ${prefix}lion2 (masukan teks)
⍨⃝🎬 ${prefix}drapwater (masukan teks)
⍨⃝🎬 ${prefix}3dbox (masukan teks)
⍨⃝🎬 ${prefix}herryp (masukan teks)
⍨⃝🎬 ${prefix}grafiti (masukan teks)
⍨⃝🎬 ${prefix}pornhub (masukan teks)
⍨⃝🎬 ${prefix}glitch2 (masukan teks)
⍨⃝🎬 ${prefix}glitch3 (masukan teks)
⍨⃝🎬 ${prefix}3dspace (masukan teks)
⍨⃝🎬 ${prefix}lion (masukan teks)
⍨⃝🎬 ${prefix}bear (masukan teks)
⍨⃝🎬 ${prefix}wolf (masukan teks)
⍨⃝🎬 ${prefix}thewall (masukan teks)
`
let listvoice = `
🎗 *Hallo Kak ${pushname} ~ ${ucapanWaktu}*
🐣 *Runtime Bot : ${runtime(process.uptime())}*
🌀 *Speed Bot     : ${latensi.toFixed(4)} Second*
☕ *Tanggal         : ${moment.tz('Asia/Jakarta').format('DD / MM / YY')}*
𝐕𝐨𝐢𝐜𝐞 𝐂𝐡𝐚𝐧𝐠𝐞𝐫
 ⍨⃝🎧 ${prefix}bass (reply audio)
 ⍨⃝🎧 ${prefix}blown (reply audio)
 ⍨⃝🎧 ${prefix}deep (reply audio)
 ⍨⃝🎧 ${prefix}earrape (reply audio)
 ⍨⃝🎧 ${prefix}fast (reply audio)
 ⍨⃝🎧 ${prefix}fat (reply audio)
 ⍨⃝🎧 ${prefix}nightcore (reply audio)
 ⍨⃝🎧 ${prefix}reverse (reply audio)
 ⍨⃝🎧 ${prefix}robot (reply audio)
 ⍨⃝🎧 ${prefix}slow (reply audio)
 ⍨⃝🎧 ${prefix}tupai (reply audio)
`
let listgroup = `
🎗 *Hallo Kak ${pushname} ~ ${ucapanWaktu}*
🐣 *Runtime Bot : ${runtime(process.uptime())}*
🌀 *Speed Bot     : ${latensi.toFixed(4)} Second*
☕ *Tanggal         : ${moment.tz('Asia/Jakarta').format('DD / MM / YY')}*
𝐆𝐫𝐨𝐮𝐩
 ⍨⃝👥 ${prefix}tagall 
 ⍨⃝👥 ${prefix}hidetag
 ⍨⃝👥 ${prefix}grup  
 ⍨⃝👥 ${prefix}editinfo 
 ⍨⃝👥 ${prefix}linkgc
 ⍨⃝👥 ${prefix}setppgc [image]
 ⍨⃝👥 ${prefix}setname [text]
 ⍨⃝👥 ${prefix}setdesc [text]
 ⍨⃝👥 ${prefix}add @user
 ⍨⃝👥 ${prefix}kick @user
 ⍨⃝👥 ${prefix}promote @user
 ⍨⃝👥 ${prefix}demote @user
`
let listsearch =`
🎗 *Hallo Kak ${pushname} ~ ${ucapanWaktu}*
🐣 *Runtime Bot : ${runtime(process.uptime())}*
🌀 *Speed Bot     : ${latensi.toFixed(4)} Second*
☕ *Tanggal         : ${moment.tz('Asia/Jakarta').format('DD / MM / YY')}*
𝐒𝐞𝐚𝐫𝐜𝐡
 ⍨⃝🔎 ${prefix}wikipedia 
 ⍨⃝🔎 ${prefix}ytsearch (judul)
 ⍨⃝🔎 ${prefix}google 
 ⍨⃝🔎 ${prefix}gimage 
 ⍨⃝🔎 ${prefix}pinterest 
`
let listowner =`
🎗 *Hallo Kak ${pushname} ~ ${ucapanWaktu}*
🐣 *Runtime Bot : ${runtime(process.uptime())}*
🌀 *Speed Bot     : ${latensi.toFixed(4)} Second*
☕ *Tanggal         : ${moment.tz('Asia/Jakarta').format('DD / MM / YY')}*
𝐎𝐰𝐧𝐞𝐫
 ⍨⃝☕ ${prefix}bcgc 
 ⍨⃝☕ ${prefix}bcimage
 ⍨⃝☕ ${prefix}bcvideo
 ⍨⃝☕ ${prefix}bcsticker
 ⍨⃝☕ ${prefix}bcaudio
 ⍨⃝☕ ${prefix}bcall 
 ⍨⃝☕ ${prefix}setppbot 
 ⍨⃝☕ ${prefix}sendsession
 ⍨⃝☕ ${prefix}setexif
 ⍨⃝☕ ${prefix}setfooter
`
let listdownload = `
🎗 *Hallo Kak ${pushname} ~ ${ucapanWaktu}*
🐣 *Runtime Bot : ${runtime(process.uptime())}*
🌀 *Speed Bot     : ${latensi.toFixed(4)} Second*
☕ *Tanggal         : ${moment.tz('Asia/Jakarta').format('DD / MM / YY')}*
𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝
 ⍨⃝📩 ${prefix}play (judul lagu) 🇱
 ⍨⃝📩 ${prefix}cocofun <Link Cocofun>🇱
 ⍨⃝📩 ${prefix}pinterestdl <Link Pinterest>
 ⍨⃝📩 ${prefix}pinterestdl2 <Link Pinterest>
 ⍨⃝📩 ${prefix}soundcloud <Link Soundcloud>🇱
 ⍨⃝📩 ${prefix}gitclone <Link RepoGit>🇱
 ⍨⃝📩 ${prefix}facebook <Link>🇱
 ⍨⃝📩 ${prefix}facebook2 <Link>🇱
   ⍨⃝📩 YouTube
  === Info ===
  ==> Downloader by y2mate
  ==⍨⃝📩 ${prefix}ytmp4 <LinkYt>🇱
  ==⍨⃝📩 ${prefix}ytmp3 <LinkYt>🇱
 ⍨⃝📩 TikTok
  === Info ===
  ==> Downloader by Snaptik
      ==⍨⃝📩 ${prefix}tiktok <Link Tiktok>🇱
      ==⍨⃝📩 ${prefix}tiktokaudio <Link Tiktok>🇱
  ==> Downloader by Aoivideodl
      ==⍨⃝📩 ${prefix}tiktok2 <Link Tiktok>🇱
      ==⍨⃝📩 ${prefix}tiktokaudio2 <Link Tiktok>🇱
  ==> Downloader by Ttdownloader
      ==⍨⃝📩 ${prefix}tiktok3 <Link Tiktok>🇱
      ==⍨⃝📩 ${prefix}tiktokaudio3 <Link Tiktok>🇱
 ⍨⃝📩 ${prefix}twitter (link twitter)🇱
 ⍨⃝📩 ${prefix}twitter2 (link twitter)🇱
 ⍨⃝📩 ${prefix}telesticker (link sticker tele)🇱
 ⍨⃝📩 Instagram
  === Info ===
  ==> Downloader by @hxz-api
  ==⍨⃝📩 ${prefix}instagram <Link Instagram>🇱
  ==⍨⃝📩 ${prefix}igstory <Username IG>🇱
 ⍨⃝📩 ${prefix}getmusic 🇱
 ⍨⃝📩 ${prefix}getvideo 🇱
 ⍨⃝📩 ${prefix}mediafire🇱
 ⍨⃝📩 ${prefix}jpeg <Link Gambar>
 ⍨⃝📩 ${prefix}mp3 <Link Music>
 ⍨⃝📩 ${prefix}mp4 <Link Video>
`
let listtools = `
🎗 *Hallo Kak ${pushname} ~ ${ucapanWaktu}*
🐣 *Runtime Bot : ${runtime(process.uptime())}*
🌀 *Speed Bot     : ${latensi.toFixed(4)} Second*
☕ *Tanggal         : ${moment.tz('Asia/Jakarta').format('DD / MM / YY')}*
𝐓𝐨𝐨𝐥𝐬
 ⍨⃝📚 ${prefix}removebg (reply gambar)
 ⍨⃝📚 ${prefix}emojimix (masukan emoji)
 ⍨⃝📚 ${prefix}emojimix2 (masukan emoji)
 ⍨⃝📚 ${prefix}emoji (masukan emoji)
 ⍨⃝?? ${prefix}del (reply pesan bot)
 ⍨⃝📚 ${prefix}q 
 ⍨⃝📚 ${prefix}ssweb 
 ⍨⃝📚 ${prefix}asupan
`
let listdb = `
🎗 *Hallo Kak ${pushname} ~ ${ucapanWaktu}*
🐣 *Runtime Bot : ${runtime(process.uptime())}*
🌀 *Speed Bot     : ${latensi.toFixed(4)} Second*
☕ *Tanggal         : ${moment.tz('Asia/Jakarta').format('DD / MM / YY')}*
*Database*
 ⍨⃝🎈 ${prefix}addmsg (reply pesan)
 ⍨⃝🎈 ${prefix}getmsg 
 ⍨⃝🎈 ${prefix}delmsg
 ⍨⃝🎈 ${prefix}listmsg
`
let listconvert = `
🎗 *Hallo Kak ${pushname} ~ ${ucapanWaktu}*
🐣 *Runtime Bot : ${runtime(process.uptime())}*
🌀 *Speed Bot     : ${latensi.toFixed(4)} Second*
☕ *Tanggal         : ${moment.tz('Asia/Jakarta').format('DD / MM / YY')}*
𝐂𝐨𝐧𝐯𝐞𝐫𝐭
 ⍨⃝🐣 ${prefix}tomp4 (reply sticker gif)
 ⍨⃝🐣 ${prefix}toaudio (reply audio)
 ⍨⃝🐣 ${prefix}togif (reply sticker gif)
 ⍨⃝🐣 ${prefix}toimg (reply sticker)
 ⍨⃝🐣 ${prefix}tovn (reply audio)
 ⍨⃝🐣 ${prefix}tourl (reply media)
 ⍨⃝🐣 ${prefix}tomp3 (reply video)
 ⍨⃝🐣 ${prefix}shortlink (link)
 ⍨⃝🐣  *Sticker*
  === Info ===
 ==⍨⃝🐣 ${prefix}sendsticker (link)
 ==⍨⃝🐣 ${prefix}ttp (teks)
 ==⍨⃝🐣 ${prefix}attp (teks)
 ==⍨⃝🐣 ${prefix}ttpcustom (teks|warna)
 ==⍨⃝🐣 ${prefix}sticker (reply gambar)
 ==⍨⃝🐣 ${prefix}swm (reply gambar)
 ==⍨⃝🐣 ${prefix}smeme (reply gambar)
 ==⍨⃝🐣 ${prefix}smeme2 (reply gambar)
 ==⍨⃝🐣 ${prefix}triggered (reply gambar)
 ==⍨⃝🐣 ${prefix}gay (reply gambar)
 ==⍨⃝🐣 ${prefix}glass (reply gambar)
 ==⍨⃝🐣 ${prefix}passed (reply gambar)
 ==⍨⃝🐣 ${prefix}jail (reply gambar)
 ==⍨⃝🐣 ${prefix}comrade (reply gambar)
 ==⍨⃝🐣 ${prefix}green (reply gambar)
 ==⍨⃝🐣 ${prefix}blue (reply gambar)
 ==⍨⃝🐣 ${prefix}sepia (reply gambar)
 ==⍨⃝🐣 ${prefix}wasted (reply gambar)
 ==⍨⃝🐣 ${prefix}greyscale (reply gambar)
 ==⍨⃝🐣 ${prefix}blurple2 (reply gambar)
 ==⍨⃝🐣 ${prefix}blurple (reply gambar)
 ==⍨⃝🐣 ${prefix}red (reply gambar)
 ==⍨⃝🐣 ${prefix}invertgreyscale (reply gambar)
 ==⍨⃝🐣 ${prefix}invert (reply gambar)
`
//●●●●●●●●●●●●●●●●●●●●●● PUBLIC & SELF SETTING●●●●●●●●●●●●●●●●●●●●●●
        if (!kon.public) {
            if (!m.key.fromMe && !isCreator) return
        }

//●●●●●●●●●●●●●●●●●●●●●● AUTO READ & AUTO RECORDING SETTING●●●●●●●●●●●●●●●●●●●●●●
        if (m.message) {
        kon.sendPresenceUpdate('recording', m.chat, m.sender, [m.key.id])
        kon.sendReadReceipt(m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
//●●●●●●●●●●●●●●●●●●●●●● UKURAN GAMBAR LOKASI SETTING●●●●●●●●●●●●●●●●●●●●●●        
const reSize = async(buffer, ukur1, ukur2) => {
    return new Promise(async(resolve, reject) => {
        var baper = await Jimp.read(buffer);
        var ab = await baper.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
        resolve(ab)
    })
}
const todol = await reSize(tamnel, 200, 200)      
 
//●●●●●●●●●●●●●●●●●●●●●● DB SETTING●●●●●●●●●●●●●●●●●●●●●●
let chats = db.data.chats[m.chat]
            if (typeof chats !== 'object') db.data.chats[m.chat] = {}
            if (chats) {
                if (!('antilink' in chats)) chats.antilink = false
            } else global.db.data.chats[m.chat] = {
                antilink: false,
            }
if (db.data.chats[m.chat].antilink) {
        if (budy.match(`chat.whatsapp.com`)) {
        m.reply(`「 ANTI LINK 」\n\nKamu terdeteksi mengirim link group, maaf kamu akan di kick !`)
        if (!isBotAdmins) return m.reply(`Ehh bot gak admin T_T`)
        let gclink = (`https://chat.whatsapp.com/`+await kon.groupInviteCode(m.chat))
        let isLinkThisGc = new RegExp(gclink, 'i')
        let isgclink = isLinkThisGc.test(m.text)
        if (isgclink) return m.reply(`Ehh maaf gak jadi, karena kamu ngirim link group ini`)
        if (isAdmins) return m.reply(`Ehh maaf kamu admin`)
        if (isCreator) return m.reply(`Ehh maaf kamu owner bot ku`)
        kon.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
        }
        
        
//●●●●●●●●●●●●●●●●●●●●●● BUTTONS SETTING●●●●●●●●●●●●●●●●●●●●●●
 let butlink = [
						{ urlButton: { displayText: `Link`, url : `${text}` } },
			{ quickReplyButton: { displayText: `Back to Menu`, id: `${prefix}menu` } },
				]
let menubutlist = [
  {buttonId: `sc`, buttonText: {displayText: 'Script'}, type: 1},
  {buttonId: `ping`, buttonText: {displayText: 'Bot Status'}, type: 1},
  {buttonId: `owner`, buttonText: {displayText: 'Creator Bot'}, type: 1}
]
let buttonsDefault = [
			{ quickReplyButton: { displayText: `🚹Owner`, id: `owner` } }
		]
let tesbut = [
		{ quickReplyButton: { displayText: `🚹Owner`, id: `owner` } }, { quickReplyButton: { displayText: `🚹Owner`, id: `owner` } }, { quickReplyButton: { displayText: `🚹Owner`, id: `owner` } }, { quickReplyButton: { displayText: `🚹Owner`, id: `owner` } }, { quickReplyButton: { displayText: `🚹Owner`, id: `owner` } }
		]
//●●●●●●●●●●●●●●●●●●●●●● FAKE SETTING●●●●●●●●●●●●●●●●●●●●●●
const ftoko = {
key: {
			fromMe: false,
			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})
		},
		message: {
			"productMessage": {
				"product": {
					"productImage":{
						"mimetype": "image/jpeg",
						"jpegThumbnail": tamnel//Gambarnye
					},
					"title": 'zBot', 
					"description": "by Z-Bot Whatsapp", 
					"currencyCode": "IDR",
					"priceAmount1000": "70000000",
					"retailerId": 'Whatsapp Bot',
					"productImageCount": 1
				},
				    "businessOwnerJid": `0@s.whatsapp.net`
		}
	}
}
const fdoc = {
key : {
participant : '0@s.whatsapp.net'
},
message: {
documentMessage: {
title: `Hallo`, 
jpegThumbnail: tamnel
}
}
}           
const adyt = { 
"title": `Hallo ${pushname}`,
"body": `hy`, 
"mediaType": "2", 
"mediaUrl": "https://youtu.be/ilrhJV_QMIE", 
"thumbnail": tamnel
}
 const ftrol2 = {
	key : {
                          participant : '0@s.whatsapp.net'
                        },
       message: {
                    orderMessage: {
                            itemCount : 9,
                            status: 1,
                            surface : 1,
                            message: global.poter, //Kasih namalu
                            orderTitle: `Hallo`,
                            thumbnail: fs.readFileSync('./lib/hisoka.jpg'),
                            sellerJid: '0@s.whatsapp.net' 
                          }
                        }
                      }
async function uptoibb(path){
return new Promise (async (resolve, reject) => {
imgbb('91904762b2cd230ce1d861279bd6bf1d', path).then((res) =>{
resolve(res.url)
}).catch(reject)
})
}

//●●●●●●●●●●●●●●●●●●●●●● REPLY SETTING●●●●●●●●●●●●●●●●●●●●●●*/
const sticWait = (hehe) => {
			ano = fs.readFileSync('./lib/loading.jpg')
			kon.sendImageAsSticker(m.chat, ano, m, { packname: global.packname, author: global.author })
		}
const replyy = (teks) => {
kon.sendMessage(m.chat, teks, text, { quoted: m, contextInfo: { externalAdReply: { title: `zBot`, body: 'By : Z-Bot Whatsapp', sourceUrl: `https://chat.whatsapp.com/C3jhijq3xS0AVuJykrhxMn`, thumbnail: tamnel }}})
}             
const reply2 = (teks) => {
			kon.sendMessage(m.chat, teks, text, { thumbnail: tamnel, sendEphemeral: true, quoted: m, contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: global.poter,body:"Bot WhatsApp by ArulGanz",previewType:"PHOTO",thumbnail:tamnel,sourceUrl:`https://chat.whatsapp.com/C3jhijq3xS0AVuJykrhxMn`}}})
		}
const replyig = (teks) => {kon.sendMessage(m.chat, { text: teks, "contextInfo": {
mimetype: "image/jpeg",
text: "Bot Whatsapp",
"forwardingScore": 1000000000,
isForwarded: true,
sendEphemeral: true,
"externalAdReply": {
"title": `zBot by Bot Whatsapp`,
"body": `Follow Instagram My Owner`,
"previewType": "PHOTO",
"thumbnailUrl": todol,
"thumbnail": todol,
"sourceUrl": "https://instagram.com/_daaa_1"
}}}, { quoted: ftoko, detectLink: true })}
const replygrup = (teks) => {kon.sendMessage(m.chat, { text: teks, contextInfo:{"externalAdReply": {"title": `Hallo Kak`,"body": `Group Official`, "previewType": "PHOTO","thumbnailUrl": ``,"thumbnail": tamnel,"sourceUrl": `https://chat.whatsapp.com/C3jhijq3xS0AVuJykrhxMn`}}}, { quoted: m})}    

//●●●●●●●●●●●●●●●●●●●●●● SENDMESSAGE SETTING●●●●●●●●●●●●●●●●●●●●●●
const sendButton5 = async (id, text1, desc1, yo) => {
var buatpesan = await generateWAMessageFromContent(from, {
    "templateMessage": {
      "hydratedTemplate": {
        ...yo.message,
        "hydratedContentText": text1,
        "hydratedFooterText": desc1,
        "hydratedButtons": [
          {
            "urlButton": {
              "displayText": "Github",
              "url": "https://github.com/BotWhatsapp12"
            }
          },
          {
            "urlButton": {
              "displayText": "Instagram",
              "url": "https://instagram.com/_daaa_1"
            }
          },
          {
            "quickReplyButton": {
              "displayText": "Bot Status",
              "id": `ping`
            }
          },
          {
            "quickReplyButton": {
              "displayText": "Script",
              "id": `sc`,
            }
          },
          {
            "quickReplyButton": {
              "displayText": "Owner",
              "id": `owner`
            }
          }
        ]
      }
    }
  }, {})
kon.relayMessage(id, buatpesan.message, { messageId: buatpesan.key.id })
}

//●●●●●●●●●●●●●●●●●●●●●● MEDIA SETTING●●●●●●●●●●●●●●●●●●●●●● 
        if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in cmdmedia)) {
        let hash = cmdmedia[m.msg.fileSha256.toString('base64')]
        let { text, mentionedJid } = hash
        let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
            userJid: kon.user.id,
            quoted: m.quoted && m.quoted.fakeObj
        })
        messages.key.fromMe = areJidsSameUser(m.sender, kon.user.id)
        messages.key.id = m.key.id
        messages.pushName = m.pushName
        if (m.isGroup) messages.participant = m.sender
        let msg = {
            ...chatUpdate,
            messages: [proto.WebMessageInfo.fromObject(messages)],
            type: 'append'
        }
        kon.ev.emit('messages.upsert', msg)
        }

//●●●●●●●●●●●●●●●●●●●●●● AUTO SETTING●●●●●●●●●●●●●●●●●●●●●●
  let isSticker = m.mtype
  if (isSticker) {
    if(isSticker === "imageMessage"){
               let mediaaan = await quoted.download()
                let encmedialik = await kon.sendImageAsSticker(m.chat, mediaaan, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedialik)
        return true
      }
    }
    if (/^https?:\/\/.*(fb.watch|facebook.com)/i.test(m.text)) {
    	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis   
    	replyig('*Auto Download Facebook*\nTunggu Sebentar Media Sedang Dikirim....')
        let url = m.text.split(/\n| /i)[0] 
        let kin = await facebook(url).catch(e => {
m.reply('Server Sedang Eror Coba Lagi Dalam Beberapa Hari Kedepan')
})
let iin = `• Title : ${kin.title}`
let buttons = [
{buttonId: `mp4dwn ${kin.hd}`, buttonText: {displayText: 'Video HD'}, type: 1}
]
let buttonMessage = {
video: {url:kin.sd},
caption: iin,
footer: global.poter,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"Auto Downloader Facebook Video",
body:"Downloader by zBot",
thumbnail: tamnel,
mediaType:1,
mediaUrl: `instagram.com/_daaa_1`,
sourceUrl: `instagram.com/_daaa_1`
}}
}
kon.sendMessage(m.chat, buttonMessage, {quoted:m})
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply('1 Limit Telah Di Gunakan')
    }
    if (/^https?:\/\/.*cocofun/i.test(m.text)) {
    	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
	   
    	replyig('*Auto Download Cocofun*\nTunggu Sebentar Media Sedang Dikirim....')
    	let url = m.text.split(/\n| /i)[0] 
        let yut = await cocofun(url).catch(e => {
m.reply('Server Sedang Eror Coba Lagi Dalam Beberapa Hari Kedepan')
})
        console.log(yut)
        tuki =`🐣 Topik : ${yut.topic}\n🐣 Caption : ${yut.caption}\n🐣 Tayangan : ${yut.play}\🐣 Like : ${yut.like}\🐣 Share : ${yut.share}`
        let buttons = [
{buttonId: `mp4dwn ${yut.watermark}`, buttonText: {displayText: 'With Watermark'}, type: 1}
]
let buttonMessage = {
video: {url:yut.no_watermark},
caption: tuki,
footer: global.poter,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"Auto Downloader Cocofun No Watermak",
body:"Downloader by zBot",
thumbnail: tamnel,
mediaType:1,
mediaUrl: `instagram.com/_daaa_1`,
sourceUrl: `instagram.com/_daaa_1`
}}
}
kon.sendMessage(m.chat, buttonMessage, {quoted:m})
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply('1 Limit Telah Di Gunakan')
    }
    if (/^https?:\/\/.*(pinterest.com\/pin|pin.it)/i.test(m.text)) {
      replyig('*Auto Download Pinterest*\nTunggu Sebentar Media Sedang Dikirim....')
      let url = m.text.split(/\n| /i)[0]  
      anu = await fetchJson(`https://tyz-api.herokuapp.com/downloader/pindl?link=${url}`).catch(e => {
m.reply('Server Sedang Eror Coba Lagi Dalam Beberapa Hari Kedepan')
})
					tol = await getBuffer(anu.result)
					kon.sendMessage(m.chat, { video: tol, mimetype: 'video/mp4', fileName: `zbot.mp4`, caption: mess.success}, { quoted: m }).catch(e => {
m.reply('Fitur Sedang Eror Tunggu Beberapa Hari Kedepan')
})
    }
   if (/^https?:\/\/.*instagram.com\/(p|reel|tv)/i.test(m.text)) {
   if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
	
    replyig('*Auto Download Instagram*\nTunggu Sebentar Media Sedang Dikirim....')
    let url = m.text.split(/\n| /i)[0]  
    hx.igdl(url).then( result => {
console.log(result)
let kyu = `*Auto Download Instagram*\n🐣 Username : ${result.user.username}\n🐣 Followers : ${result.user.followers}`
for(let i of result.medias){
                if(i.url.includes('mp4')){
                	db.data.users[m.sender].limit -= 1 // -1 limit
m.reply('1 Limit Telah Di Gunakan')
                    kon.sendMessage(m.chat, {video:{url:i.url}, caption: kyu, mimetype:'video/mp4'}, {quoted:m})
                } else {
                	db.data.users[m.sender].limit -= 1 // -1 limit
m.reply('1 Limit Telah Di Gunakan')
                    kon.sendMessage(m.chat, { image: { url: i.url }, caption: kyu}, { quoted: m })
                }
            }
            })
    }
    if (/^https?:\/\/.*twitter.com\//i.test(m.text)) {
    if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
	
    replyig('*Auto Download Twitter*\nTunggu Sebentar Media Sedang Dikirim....')
    let url = m.text.split(/\n| /i)[0]  
    let yut = await twitter(url).catch(e => {
m.reply('Server Sedang Eror Coba Lagi Dalam Beberapa Hari Kedepan')
})
console.log(yut)
anu = `⭔ Username : ${yut.nickname}\n⭔ Caption : ${yut.caption}\n⭔ Thumb : ${yut.thumbnail}`
                let buttons = [
{buttonId: `${prefix}twt720 ${url}`, buttonText: {displayText: `Video 720p`}, type: 1}, {buttonId: `${prefix}twt360 ${url}`, buttonText: {displayText: `Video 360p`}, type: 1}
]
let buttonMessage = {
video: {url:yut.quality_270},
caption: anu,
footer: global.poter,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"Auto Download Twitter Video",
body:"Downloader by zBot",
thumbnail: tamnel,
mediaType:1,
mediaUrl: `instagram.com/_daaa_1`,
sourceUrl: `instagram.com/_daaa_1`
}}
}
kon.sendMessage(m.chat, buttonMessage, {quoted:m})
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply('1 Limit Telah Di Gunakan')
    }
    if (/^https?:\/\/.*tiktok.com/i.test(m.text)) {
    	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
	    
    	replyig('*Auto Download Tiktok*\nTunggu Sebentar Media Sedang Dikirim....')
    	let url = m.text.split(/\n| /i)[0]  
        let res = await bocil.tiktokdl(url).catch(e => {
m.reply('Server Sedang Eror Coba Lagi Dalam Beberapa Hari Kedepan')
})
        console.log(res)
        anutxt = `• Author : ${res.author.nickname}\n• Description : ${res.description}`
let buttons = [
{buttonId: `${prefix}tiktokaudio3 ${url}`, buttonText: {displayText: `Audio`}, type: 1},
{buttonId: `${prefix}tiktokwm3 ${url}`, buttonText: {displayText: `With Watermark`}, type: 1}
]
let buttonMessage = {
video: {url:res.video.no_watermark},
caption: anutxt,
footer: global.poter,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"Auto Downloader Tiktok",
body:"Downloader by zBot",
thumbnail: tamnel,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
kon.sendMessage(m.chat, buttonMessage, {quoted:m})
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply('1 Limit Telah Di Gunakan')
  }
 if (/^https?:\/\/.*youtu/i.test(m.text)) {
 if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis

 replyig('*Auto Download Youtube*\nTunggu Sebentar Media Sedang Dikirim....')
 let url = m.text.split(/\n| /i)[0]  
 let { ytv } = require('./lib/y2mate')
                let quality = args[1] ? args[1] : '480p'
                let media = await ytv(url, quality)
                console.log(media)
                if (media.filesize >= 100000) return replyig('File Melebihi Batas '+util.format(media))
                anu = `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '480p'}`
                let buttons = [
{buttonId: `${prefix}ytmp3 ${url}`, buttonText: {displayText: `Audio`}, type: 1}
]
let buttonMessage = {
video: {url:media.dl_link},
caption: anu,
footer: global.poter,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"Auto Download Youtube",
body:"Downloader by zBot",
thumbnail: tamnel,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
kon.sendMessage(m.chat, buttonMessage, {quoted:m})
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply('1 Limit Telah Di Gunakan')
 }

//●●●●●●●●●●●●●●●●●●●●●● AUTO SET BIO SETTING●●●●●●●●●●●●●●●●●●●●●●

kon.setStatus(`zBot Aktif Selama ${runtime(process.uptime())} Mode : Public, Dengan Kecepatan ${latensi.toFixed(4)} Second`)

//●●●●●●●●●●●●●●●●●●●●●● CASE SETTING●●●●●●●●●●●●●●●●●●●●●●
        switch(command) {
case 'ttp2':{
let yut = await ttp(text)
console.log(yut)
buff = await getBuffer(yut.result)
kon.sendImageAsSticker(m.chat, buff, m, { packname: global.packname, author: global.author })
}
break
case 'attp3':{
let yut = await attp(text)
console.log(yut)
let buff = await getBuffer(yut.result)
kon.sendVideoAsSticker(m.chat, buff, m, { packname: global.packname, author: global.author })
}
break
case 'addmsg': {
                if (!m.quoted) throw 'Reply Message Yang Ingin Disave Di Database'
                if (!text) throw `Example : ${prefix + command} nama file`
                let msgs = global.db.data.database
                if (text.toLowerCase() in msgs) throw `'${text}' telah terdaftar di list pesan`
                msgs[text.toLowerCase()] = quoted.fakeObj
m.reply(`Berhasil menambahkan pesan di list pesan sebagai '${text}'
    
Akses dengan ${prefix}getmsg ${text}

Lihat list Pesan Dengan ${prefix}listmsg`)
            }
            break
            case 'getmsg': {
                if (!text) throw `Example : ${prefix + command} file name\n\nLihat list pesan dengan ${prefix}listmsg`
                let msgs = global.db.data.database
                if (!(text.toLowerCase() in msgs)) throw `'${text}' tidak terdaftar di list pesan`
                kon.copyNForward(m.chat, msgs[text.toLowerCase()], true)
            }
            break
            case 'listmsg': {
                let msgs = JSON.parse(fs.readFileSync('./src/database.json'))
	        let seplit = Object.entries(global.db.data.database).map(([nama, isi]) => { return { nama, ...isi } })
		let teks = '「 LIST DATABASE 」\n\n'
		for (let i of seplit) {
		    teks += `⬡ *Name :* ${i.nama}\n⬡ *Type :* ${getContentType(i.message).replace(/Message/i, '')}\n────────────────────────\n\n`
	        }
	        m.reply(teks)
	    }
	    break
            case 'delmsg': case 'deletemsg': {
	        let msgs = global.db.data.database
	        if (!(text.toLowerCase() in msgs)) return m.reply(`'${text}' tidak terdaftar didalam list pesan`)
		delete msgs[text.toLowerCase()]
		m.reply(`Berhasil menghapus '${text}' dari list pesan`)
            }
	    break
case 'antilink': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                ///if (!isAdmins) throw mess.admin
                if (args[0] === "on") {
                if (db.data.chats[m.chat].antilink) return m.reply(`Sudah Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = true
                m.reply(`Antilink Aktif !`)
                } else if (args[0] === "off") {
                if (!db.data.chats[m.chat].antilink) return m.reply(`Sudah Tidak Aktif Sebelumnya`)
                db.data.chats[m.chat].antilink = false
                m.reply(`Antilink Tidak Aktif !`)
                } else {
                 let buttons = [
                        { buttonId: 'antilink on', buttonText: { displayText: 'On' }, type: 1 },
                        { buttonId: 'antilink off', buttonText: { displayText: 'Off' }, type: 1 }
                    ]
                    await kon.sendButtonText(m.chat, buttons, `Mode Antilink`, `Z-Bot Whatsapp`, m)
                }
             }
             break
case 'pinterestdl2':{
if(!text) return replyig(`Penggunaan ${prefix + command} link`)
let yut = await pinterestdlv2(args[0])
replyig(mess.wait)
console.log(yut)
let tol = await getBuffer(yut.result)
kon.sendMessage(m.chat, { video: tol, mimetype: 'video/mp4', fileName: `zbot.mp4`, caption: mess.success}, { quoted: m })
}break
case 'facebook2': case 'fbdl2': case 'facebook2': case 'fb2':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
if (!isUrl(args[0]) && !args[0].includes('m.facebook.com')) return m.reply('Link Invalid!')
if(!text) return replyig(`Penggunaan ${prefix + command} link`)

replyig(mess.wait)
let { facebookdlv3, facebookdlv2 } = require('@bochilteam/scraper')
    if (!args[0]) throw `Use example ${usedPrefix}${command} https://fb.watch/azFEBmFRcy/`
    const { result } = await facebookdlv3(args[0]).catch(async _ => await facebookdlv2(args[0]))
    for (const { url, isVideo } of result.reverse()) kon.sendMessage(m.chat, {video:{url:url}, caption:'Done!', mimetype:'video/mp4'}, {quoted:m})
    db.data.users[m.sender].limit -= 1 // -1 limit
m.reply('1 Limit Telah Di Gunakan')
}
break
case 'facebook': case 'fbdl': case 'facebook': case 'fb':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
if (!isUrl(args[0]) && !args[0].includes('m.facebook.com')) return m.reply('Link Invalid!')
if(!text) return replyig(`Penggunaan ${prefix + command} link`)
replyig(mess.wait)

let kin = await facebook(args[0]).catch(e => {
m.reply('Server 1 Eror silahkan ketik .facebook2 <URL>')
})
let iin = `• Title : ${kin.title}`
let buttons = [
{buttonId: `mp4dwn ${kin.hd}`, buttonText: {displayText: 'Video HD'}, type: 1}
]
let buttonMessage = {
video: {url:kin.sd},
caption: iin,
footer: global.poter,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"Downloader Facebook Video",
body:"Downloader by zBot",
thumbnail: tamnel,
mediaType:1,
mediaUrl: `instagram.com/_daaa_1`,
sourceUrl: `instagram.com/_daaa_1`
}}
}
kon.sendMessage(m.chat, buttonMessage, {quoted:m})
           db.data.users[m.sender].limit -= 1 // -1 limit
m.reply('1 Limit Telah Di Gunakan')
}
break
case 'mp4dwn' : {
if (!args[0]) return m.reply("Linknya mana kak?")
replyig(mess.wait)
try {
kon.sendMessage(m.chat, {video:{url:args[0]}, caption:"Succes", contextInfo:{externalAdReply:{
title:"Z-Bot Whatsapp",
body:"©BotWhatsapp",
thumbnail: tamnel,
mediaType:2,
mediaUrl: "https://instagram/_daaa_1",
sourceUrl: "https://instagram/_daaa_1"
}}}, {quoted: m})
} catch {
m.reply("Linknya Error")
}
}
break
case 'allmenu':{
            kon.sendMessage(m.chat, { react: { text: `😉`, key: m.key }})
            let buttons = [
{buttonId: `owner`, buttonText: {displayText: 'Owner'}, type: 1},{buttonId: `ping`, buttonText: {displayText: 'Status Bot'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./lib/tes.xlsx'),
mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
jpegThumbnail:tamnel,
fileName: `Z-Bot Whatsapp MD`,
fileLength: 99999999999999,
caption: listcmd,
footer: poter,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`Ulangi Command 2 - 3x Jika Bot Tidak Merespon`,
body:`Follow Instagram @_daaa_1`,
thumbnail: tamnel,
mediaType:1,
mediaUrl: `instagram.com/_daaa_1`,
sourceUrl: `instagram.com/_daaa_1`,
}}
}
kon.sendMessage(m.chat, buttonMessage, {quoted: ftoko})
}
break
case 'ownermenu':{
            kon.sendMessage(m.chat, { react: { text: `😉`, key: m.key }})
            let buttons = [
{buttonId: `owner`, buttonText: {displayText: 'Owner'}, type: 1},{buttonId: `ping`, buttonText: {displayText: 'Status Bot'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./lib/tes.xlsx'),
mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
jpegThumbnail:tamnel,
fileName: `Z-Bot Whatsapp MD`,
fileLength: 99999999999999,
caption: listowner,
footer: poter,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`Ulangi Command 2 - 3x Jika Bot Tidak Merespon`,
body:`Follow Instagram @_daaa_1`,
thumbnail: tamnel,
mediaType:1,
mediaUrl: `instagram.com/_daaa_1`,
sourceUrl: `instagram.com/_daaa_1`,
}}
}
kon.sendMessage(m.chat, buttonMessage, {quoted: ftoko})
}
break
case 'dbmenu':{
            kon.sendMessage(m.chat, { react: { text: `😉`, key: m.key }})
            let buttons = [
{buttonId: `owner`, buttonText: {displayText: 'Owner'}, type: 1},{buttonId: `ping`, buttonText: {displayText: 'Status Bot'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./lib/tes.xlsx'),
mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
jpegThumbnail:tamnel,
fileName: `Z-Bot Whatsapp MD`,
fileLength: 99999999999999,
caption: listdb,
footer: poter,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`Ulangi Command 2 - 3x Jika Bot Tidak Merespon`,
body:`Follow Instagram @_daaa_1`,
thumbnail: tamnel,
mediaType:1,
mediaUrl: `instagram.com/_daaa_1`,
sourceUrl: `instagram.com/_daaa_1`,
}}
}
kon.sendMessage(m.chat, buttonMessage, {quoted: ftoko})
}
break
case 'groupmenu':{
            kon.sendMessage(m.chat, { react: { text: `😉`, key: m.key }})
            let buttons = [
{buttonId: `owner`, buttonText: {displayText: 'Owner'}, type: 1},{buttonId: `ping`, buttonText: {displayText: 'Status Bot'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./lib/tes.xlsx'),
mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
jpegThumbnail:tamnel,
fileName: `Z-Bot Whatsapp MD`,
fileLength: 99999999999999,
caption: listgroup,
footer: poter,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`Ulangi Command 2 - 3x Jika Bot Tidak Merespon`,
body:`Follow Instagram @_daaa_1`,
thumbnail: tamnel,
mediaType:1,
mediaUrl: `instagram.com/_daaa_1`,
sourceUrl: `instagram.com/_daaa_1`,
}}
}
kon.sendMessage(m.chat, buttonMessage, {quoted: ftoko})
}
break
case 'makermenu':{
            kon.sendMessage(m.chat, { react: { text: `😉`, key: m.key }})
            let buttons = [
{buttonId: `owner`, buttonText: {displayText: 'Owner'}, type: 1},{buttonId: `ping`, buttonText: {displayText: 'Status Bot'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./lib/tes.xlsx'),
mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
jpegThumbnail:tamnel,
fileName: `Z-Bot Whatsapp MD`,
fileLength: 99999999999999,
caption: listmaker,
footer: poter,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`Ulangi Command 2 - 3x Jika Bot Tidak Merespon`,
body:`Follow Instagram @_daaa_1`,
thumbnail: tamnel,
mediaType:1,
mediaUrl: `instagram.com/_daaa_1`,
sourceUrl: `instagram.com/_daaa_1`,
}}
}
kon.sendMessage(m.chat, buttonMessage, {quoted: ftoko})
}
break
case 'downloadmenu':{
            kon.sendMessage(m.chat, { react: { text: `😉`, key: m.key }})
            let buttons = [
{buttonId: `owner`, buttonText: {displayText: 'Owner'}, type: 1},{buttonId: `ping`, buttonText: {displayText: 'Status Bot'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./lib/tes.xlsx'),
mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
jpegThumbnail:tamnel,
fileName: `Z-Bot Whatsapp MD`,
fileLength: 99999999999999,
caption: listdownload,
footer: poter,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`Ulangi Command 2 - 3x Jika Bot Tidak Merespon`,
body:`Follow Instagram @_daaa_1`,
thumbnail: tamnel,
mediaType:1,
mediaUrl: `instagram.com/_daaa_1`,
sourceUrl: `instagram.com/_daaa_1`,
}}
}
kon.sendMessage(m.chat, buttonMessage, {quoted: ftoko})
}
break
case 'searchmenu':{
            kon.sendMessage(m.chat, { react: { text: `😉`, key: m.key }})
            let buttons = [
{buttonId: `owner`, buttonText: {displayText: 'Owner'}, type: 1},{buttonId: `ping`, buttonText: {displayText: 'Status Bot'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./lib/tes.xlsx'),
mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
jpegThumbnail:tamnel,
fileName: `Z-Bot Whatsapp MD`,
fileLength: 99999999999999,
caption: listsearch,
footer: poter,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`Ulangi Command 2 - 3x Jika Bot Tidak Merespon`,
body:`Follow Instagram @_daaa_1`,
thumbnail: tamnel,
mediaType:1,
mediaUrl: `instagram.com/_daaa_1`,
sourceUrl: `instagram.com/_daaa_1`,
}}
}
kon.sendMessage(m.chat, buttonMessage, {quoted: ftoko})
}
break
case 'toolmenu':{
            kon.sendMessage(m.chat, { react: { text: `😉`, key: m.key }})
            let buttons = [
{buttonId: `owner`, buttonText: {displayText: 'Owner'}, type: 1},{buttonId: `ping`, buttonText: {displayText: 'Status Bot'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./lib/tes.xlsx'),
mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
jpegThumbnail:tamnel,
fileName: `Z-Bot Whatsapp MD`,
fileLength: 99999999999999,
caption: listtools,
footer: poter,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`Ulangi Command 2 - 3x Jika Bot Tidak Merespon`,
body:`Follow Instagram @_daaa_1`,
thumbnail: tamnel,
mediaType:1,
mediaUrl: `instagram.com/_daaa_1`,
sourceUrl: `instagram.com/_daaa_1`,
}}
}
kon.sendMessage(m.chat, buttonMessage, {quoted: ftoko})
}
break
case 'nsfwmenu':{
            kon.sendMessage(m.chat, { react: { text: `😉`, key: m.key }})
            let buttons = [
{buttonId: `owner`, buttonText: {displayText: 'Owner'}, type: 1},{buttonId: `ping`, buttonText: {displayText: 'Status Bot'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./lib/tes.xlsx'),
mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
jpegThumbnail:tamnel,
fileName: `Z-Bot Whatsapp MD`,
fileLength: 99999999999999,
caption: listnsfw,
footer: poter,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`Ulangi Command 2 - 3x Jika Bot Tidak Merespon`,
body:`Follow Instagram @_daaa_1`,
thumbnail: tamnel,
mediaType:1,
mediaUrl: `instagram.com/_daaa_1`,
sourceUrl: `instagram.com/_daaa_1`,
}}
}
kon.sendMessage(m.chat, buttonMessage, {quoted: ftoko})
}
break
case 'voicemenu':{
            kon.sendMessage(m.chat, { react: { text: `😉`, key: m.key }})
            let buttons = [
{buttonId: `owner`, buttonText: {displayText: 'Owner'}, type: 1},{buttonId: `ping`, buttonText: {displayText: 'Status Bot'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./lib/tes.xlsx'),
mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
jpegThumbnail:tamnel,
fileName: `Z-Bot Whatsapp MD`,
fileLength: 99999999999999,
caption: listvoice,
footer: poter,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`Ulangi Command 2 - 3x Jika Bot Tidak Merespon`,
body:`Follow Instagram @_daaa_1`,
thumbnail: tamnel,
mediaType:1,
mediaUrl: `instagram.com/_daaa_1`,
sourceUrl: `instagram.com/_daaa_1`,
}}
}
kon.sendMessage(m.chat, buttonMessage, {quoted: ftoko})
}
break
case 'convertmenu':{
            kon.sendMessage(m.chat, { react: { text: `😉`, key: m.key }})
            let buttons = [
{buttonId: `owner`, buttonText: {displayText: 'Owner'}, type: 1},{buttonId: `ping`, buttonText: {displayText: 'Status Bot'}, type: 1}
]
let buttonMessage = {
document: fs.readFileSync('./lib/tes.xlsx'),
mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
jpegThumbnail:tamnel,
fileName: `Z-Bot Whatsapp MD`,
fileLength: 99999999999999,
caption: listconvert,
footer: poter,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`Ulangi Command 2 - 3x Jika Bot Tidak Merespon`,
body:`Follow Instagram @_daaa_1`,
thumbnail: tamnel,
mediaType:1,
mediaUrl: `instagram.com/_daaa_1`,
sourceUrl: `instagram.com/_daaa_1`,
}}
}
kon.sendMessage(m.chat, buttonMessage, {quoted: ftoko})
}
break
case 'menu': case 'help': case 'list': case 'command': {
let ty =`🎗 *Hallo Kak ${pushname} ~ ${ucapanWaktu}*
🐣 *Runtime Bot : ${runtime(process.uptime())}*
🌀 *Speed Bot     : ${latensi.toFixed(4)} Second*
☕ *Tanggal         : ${moment.tz('Asia/Jakarta').format('DD / MM / YY')}*
🐣 *IsAuto :*
                   🎈 *Sticker* [true]
                   🎈 *Download :* 
                                            ⭔ YouTube [true]
                                            ⭔ TikTok [true]
                                            ⭔ Instagram [true]
                                            ⭔ Twitter [true]
                                            ⭔ Pinterest [true]
                                            ⭔ Cocofun [true]
                                            ⭔ Facebook [true]`
let sections= [
							{
								"title": "Z-Bot Whatsapp Features ❤️",
								"rows": [
									{
										"title": "All Menu 🥀",
										"description": "Displays The List Of All The Features!",
										"rowId": `${prefix}allmenu`
									},
									{
										"title": "Owner Menu 💠",
										"description": "Displays The List Of Owner Features",
										"rowId": `${prefix}ownermenu`
										},
									{
										"title": "Database Menu 🎈",
										"description": "Displays The List Of Owner Features",
										"rowId": `${prefix}dbmenu`
										},
									{
										"title": "Group Menu ✨",
										"description": "Displays The List Of Group Features",
										"rowId": `${prefix}groupmenu`
										},
										{
										"title": "Maker Menu 🌈",
										"description": "Displays The List Of Logo Making Features",
										"rowId": `${prefix}makermenu`
									},
									{
										"title": "Download Menu ↘️",
										"description": "Displays The List Of Download Features",
										"rowId": `${prefix}downloadmenu`
									},
									{
										"title": "Search Menu 🔎",
										"description": "Displays The List Of Searching Features",
										"rowId": `${prefix}searchmenu`
									},
									{
										"title": "Tool Menu ⚙️",
										"description": "Displays The List Of Tool Features",
										"rowId": `${prefix}toolmenu`
									},
									{
										"title": "Nsfw Menu 🤓",
										"description": "Displays The List Of Nsfe Features",
										"rowId": `${prefix}nsfwmenu`
									     },
										{
											"title": "Voice Changer Menu 🕺",
										"description": "Displays The List Of Voice Changer Features",
										"rowId": `${prefix}voicemenu`
										},
										{
											"title": "Convert Menu ⚒️",
										"description": "Displays The List Of Convert Features",
										"rowId": `${prefix}convertmenu`
										}
								]
							}
						]
                kon.sendListMsg(m.chat, `Note : Ulangi Command 2 - 3x Jika Bot Tidak Merespon & Segera Laporkan Ke Owner Jika Menemukam Bug/Semacamnya`, ty, `*Berikut Command Z-Bot Whatsapp*`, `Click Here`, sections, m)
}break
case 'menu3': {
let template = await generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                listMessage :{
                    title: `*Berikut Command Z-Bot Whatsapp*`,
                    description: `Note : Ulangi Command 2 - 3x Jika Bot Tidak Merespon & Segera Laporkan Ke Owner Jika Menemukam Bug/Semacamnya`,
                    buttonText: "Menu Click Here",
                    footerText: `
🎗 *Hallo Kak ${pushname} ~ ${ucapanWaktu}*
🐣 *Runtime Bot : ${runtime(process.uptime())}*
🌀 *Speed Bot     : ${latensi.toFixed(4)} Second*
☕ *Tanggal         : ${moment.tz('Asia/Jakarta').format('DD / MM / YY')}*
🐣 *IsAuto :*
                   🎈 *Sticker* [true]
                   🎈 *Download :* 
                                            ⭔ YouTube [true]
                                            ⭔ TikTok [true]
                                            ⭔ Instagram [true]
                                            ⭔ Twitter [true]
                                            ⭔ Pinterest [true]
                                            ⭔ Cocofun [true]
                                            ⭔ Facebook [true]`,
                    listType: "SINGLE_SELECT",
                    sections: [
							{
								"title": "Z-Bot Whatsapp Features ❤️",
								"rows": [
									{
										"title": "All Menu 🥀",
										"description": "Displays The List Of All The Features!",
										"rowId": `${prefix}allmenu`
									},
									{
										"title": "Owner Menu 💠",
										"description": "Displays The List Of Owner Features",
										"rowId": `${prefix}ownermenu`
										},
									{
										"title": "Group Menu ✨",
										"description": "Displays The List Of Group Features",
										"rowId": `${prefix}groupmenu`
										},
										{
										"title": "Maker Menu 🌈",
										"description": "Displays The List Of Logo Making Features",
										"rowId": `${prefix}makermenu`
									},
									{
										"title": "Download Menu ↘️",
										"description": "Displays The List Of Download Features",
										"rowId": `${prefix}downloadmenu`
									},
									{
										"title": "Search Menu 🔎",
										"description": "Displays The List Of Searching Features",
										"rowId": `${prefix}searchmenu`
									},
									{
										"title": "Tool Menu ⚙️",
										"description": "Displays The List Of Tool Features",
										"rowId": `${prefix}toolmenu`
									},
									{
										"title": "Nsfw Menu 🤓",
										"description": "Displays The List Of Nsfe Features",
										"rowId": `${prefix}nsfwmenu`
									     },
										{
											"title": "Voice Changer Menu 🕺",
										"description": "Displays The List Of Voice Changer Features",
										"rowId": `${prefix}voicemenu`
										},
										{
											"title": "Convert Menu ⚒️",
										"description": "Displays The List Of Convert Features",
										"rowId": `${prefix}convertmenu`
										}
								]
							}
						],
          listType: 1
                }
            }), {})
            kon.relayMessage(m.chat, template.message, { messageId: template.key.id }, {quoted: m})
            }
            break
            case 'speedtest': {
            m.reply('Testing Speed...')
            let cp = require('child_process')
            let { promisify } = require('util')
            let exec = promisify(cp.exec).bind(cp)
          let o
          try {
          o = await exec('python speed.py')
          } catch (e) {
          o = e
         } finally {
        let { stdout, stderr } = o
        if (stdout.trim()) m.reply(stdout)
        if (stderr.trim()) m.reply(stderr)
            }
            }
            break
//●●●●●●●●●●●●●●●●●●●●●● CASE DOWNLOAD SETTING●●●●●●●●●●●●●●●●●●●●●●
case 'cocodl': case 'cocofun':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
if (!text) throw 'enter query link!'
replyig(mess.wait)

let yut = await cocofun(args[0])
console.log(yut)
tuki =`🐣 Topik : ${yut.topic}\n🐣 Caption : ${yut.caption}\n🐣 Tayangan : ${yut.play}\🐣 Like : ${yut.like}\🐣 Share : ${yut.share}`
let buttons = [
                    {buttonId: `mp4dwn ${yut.watermark}`, buttonText: {displayText: 'With Watermark'}, type: 1},       {buttonId: `mp4dwn ${yut.no_watermark}`, buttonText: {displayText: 'No Watermark'}, type: 1},
                ]
                let buttonMessage = {
                    text: tuki,
                    footer: global.poter,
                    buttons: buttons,
                    headerType: 2
                }
           kon.sendMessage(m.chat, buttonMessage, { quoted: m })
           db.data.users[m.sender].limit -= 1 // -1 limit
m.reply('1 Limit Telah Di Gunakan')
}
break
case 'twitterdl': case 'twit': case 'twitter':{
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
	if (!text) throw 'enter query link!'
                replyig(mess.wait)

let yut = await twitter(args[0])
console.log(yut)
anu = `⭔ Username : ${yut.nickname}\n⭔ Caption : ${yut.caption}\n⭔ Thumb : ${yut.thumbnail}`
                let buttons = [
{buttonId: `${prefix}twt720 ${text}`, buttonText: {displayText: `Video 720p`}, type: 1}, {buttonId: `${prefix}twt360 ${text}`, buttonText: {displayText: `Video 360p`}, type: 1}
]
let buttonMessage = {
video: {url:yut.quality_270},
caption: anu,
footer: global.poter,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"Twitter Downloader Video",
body:"Downloader by zBot",
thumbnail: tamnel,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
kon.sendMessage(m.chat, buttonMessage, {quoted:m})
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply('1 Limit Telah Di Gunakan')
}
break
case 'twt360':{
if (!text) throw 'enter query link!'
                replyig(mess.wait)
let yut = await twitter(args[0])
console.log(yut)

anu = `⭔ Username : ${yut.nickname}\n⭔ Caption : ${yut.caption}\n⭔ Thumb : ${yut.thumbnail}`
kon.sendMessage(m.chat, { video:{url:yut.quality_360}, mimetype: 'video/mp4', fileName: `zbot.mp4`, caption: anu}, { quoted: m })
}
break
case 'twt720':{
if (!text) throw 'enter query link!'
                replyig(mess.wait)
let yut = await twitter(args[0])
console.log(yut)
anu = `⭔ Username : ${yut.nickname}\n⭔ Caption : ${yut.caption}\n⭔ Thumb : ${yut.thumbnail}`
kon.sendMessage(m.chat, { video:{url:yut.quality_720}, mimetype: 'video/mp4', fileName: `zbot.mp4`, caption: anu}, { quoted: m })
}
break
case 'twittermp3': case 'twitteraudio':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
if (!text) throw 'enter query link!'
                replyig(mess.wait)

let yut = await twitter(args[0])
let tuk = `• nickname : ${yut.nickname}`
console.log(yut)
let buff = await getBuffer(yut.mp3)
kon.sendMessage(m.chat, {audio: buff, mimetype:"audio/mp4", ptt:false, contextInfo:{externalAdReply:{
title: tuk,
body:"Downloader Twitter MP3 by zBot",
thumbnail: tamnel,
mediaType:1,
mediaUrl: `https://instagram.com/_daaa_1`,
sourceUrl: `https://instagram.com/_daaa_1`
}}}, {quoted: m})
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply('1 Limit Telah Di Gunakan')
}
break
case 'gitdownload': case 'gitclone':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
if(!text) return replyig(`Penggunaan ${prefix + command} teks|teks`)
replyig(mess.wait)
    
	const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i
    if (!args[0]) throw `Example ${prefix+command} https://github.com/Bayu/botwa`
    let [_, user, repo] = args[0].match(regex) || []
    repo = repo.replace(/.git$/, '')
    let url = `https://api.github.com/repos/${user}/${repo}/zipball`
    let filename = `${repo}`
    replyig(mess.wait)
    kon.sendMessage(m.chat, {document: {url: `${url}`}, mimetype: 'application/zip', fileName: `${filename}`}, { quoted : ftoko })
    db.data.users[m.sender].limit -= 1 // -1 limit
m.reply('1 Limit Telah Di Gunakan')
}
break
case 'likee':{
let yut = await like(text)
console.log(yut)
}
break
case 'tiktokdl2': case 'tiktok2':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
if (!text) throw 'urlnya?'

let yut = await bocil.tiktokdlv3(text).catch(e => {
m.reply('Fitur Sedang Eror, Segera Laporkan Ke Owner dan Tunggu Beberapa Hari Kedepan')
})
console.log(yut)
anutxt = `• Author : ${yut.author.nickname}\n• Description : ${yut.author.description}\n• Avatar : ${yut.author.avatar}`
let buttons = [
{buttonId: `${prefix}mp3 ${yut.author.music}`, buttonText: {displayText: `Audio`}, type: 1}
]
let buttonMessage = {
video: {url:yut.author.no_watermark},
caption: anutxt,
footer: global.poter,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"Tiktok Downloader No Watermak",
body:"Downloader by zBot",
thumbnail: tamnel,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
kon.sendMessage(m.chat, buttonMessage, {quoted:m}).catch(e => {
m.reply('error')
})
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply('1 Limit Telah Di Gunakan')
}
break
case 'tt': case 'ttmp4': case 'tiktok': case 'tiktoknowm':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
if (!text) throw 'urlnya?'
replyig(mess.wait)

let res = await bocil.tiktokdl(text).catch(e => {
m.reply('Fitur Sedang Eror, Segera Laporkan Ke Owner dan Tunggu Beberapa Hari Kedepan')
})
console.log(res)
anutxt = `• Author : ${res.author.nickname}\n• Description : ${res.description}`
let buttons = [
{buttonId: `${prefix}tiktokaudio3 ${text}`, buttonText: {displayText: `Audio`}, type: 1},
{buttonId: `${prefix}tiktokwm3 ${text}`, buttonText: {displayText: `With Watermark`}, type: 1}
]
let buttonMessage = {
video: {url:res.video.no_watermark},
caption: anutxt,
footer: global.poter,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"Tiktok Downloader No Watermak",
body:"Downloader by zBot",
thumbnail: tamnel,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
kon.sendMessage(m.chat, buttonMessage, {quoted:m}).catch(e => {
m.reply('error')
})
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply('1 Limit Telah Di Gunakan')
}
break
case  'sendsession':{
if (!isCreator) return reply(mess.owner)
anuu = fs.readFileSync('./kon.json')
kon.sendMessage(m.chat, {document: anuu, mimetype: 'application/octet-stream', fileName: `kon.json`}, {quoted:m})  
}
break
case 'tiktoknowm3': case 'tiktokdl3': case 'tiktok3': case 'ttmp43':{
	           if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                if (!text) throw 'enter query link!'
                replyig(mess.wait)
                
                var { TiktokDownloader } = require('./lib/tiktokdl')
res = await TiktokDownloader(`${text}`).catch(e => {
m.reply('error')
})
console.log(res)
           let buttons = [
{buttonId: `${prefix}tiktokwm3 ${text}`, buttonText: {displayText: `With Watermark`}, type: 1},
{buttonId: `${prefix}tiktokaudio3 ${text}`, buttonText: {displayText: `Audio`}, type: 1}
]
let buttonMessage = {
video: {url:res.result.nowatermark},
caption: mess.success,
footer: global.poter,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"Tiktok Downloader No Watermak",
body:"Downloader by zBot",
thumbnail: tamnel,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
kon.sendMessage(m.chat, buttonMessage, {quoted:m}).catch(e => {
m.reply('error')
})
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply('1 Limit Telah Di Gunakan')
            }
            break
            case 'tiktokwm3': case 'tiktokwatermark3': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                if (!text) throw 'enter query link!'
                replyig(mess.wait)
                
                var { TiktokDownloader } = require('./lib/tiktokdl')
res = await TiktokDownloader(`${text}`).catch(e => {
m.reply('error')
})
console.log(res)
                let buttons = [
{buttonId: `${prefix}tiktoknowm3 ${text}`, buttonText: {displayText: `No Watermark`}, type: 1},
{buttonId: `${prefix}tiktokaudio3 ${text}`, buttonText: {displayText: `Audio`}, type: 1}
]
let buttonMessage = {
video: {url:res.result.nowatermark},
caption: mess.success,
footer: global.poter,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"Tiktok Downloader With Watermak",
body:"Downloader by zBot",
thumbnail: tamnel,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
kon.sendMessage(m.chat, buttonMessage, {quoted:m}).catch(e => {
m.reply('error')
})
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply('1 Limit Telah Di Gunakan')
            }
            break
    case 'tiktokaudio': case 'tiktokaudio2': case 'tiktokaudio3':{
    if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
     if (!text) throw 'enter query link!'
     replyig(mess.wait)
     
			    hx.ttdownloader(args[0]).then( data => {
				  kon.sendMessage(m.chat, {document: { url: data.nowm }, mimetype: 'audio/mp4', fileName: `Sound Tiktok By Z-BotWhatsapp.mp3`}, { quoted : m })
				}).catch(() => m.reply('Hmm Erorr Awoakwoakwok'))
				db.data.users[m.sender].limit -= 1 // -1 limit
m.reply('1 Limit Telah Di Gunakan')
				}
		        break
	case 'igstory': case 'instagramstory': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
if (!args[0]) return m.reply(`Example :\n${prefix + command} _daaa_1`)

try {
hx.igstory(args[0]).then(async(resed) => {
ini_anu = []
anu_list = []
textbv = `*| INSTAGRAM STORY |*`
urut = 1
for (let i = 0; i < resed.medias.length; i++) {
ini_anu.push({
 "type": resed.medias[i].fileType,
 "url": resed.medias[i].url
})
}
ilod = 1
for (let i of ini_anu) {
anu_list.push({buttonId: `ig35 ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
}
textbv += `\n\n_Pilih media dibawah untuk mendownload_`
let buttons = anu_list
let buttonMessage = {
image:tamnel,
jpegThumbnail:tamnel,
caption: textbv,
footer: global.poter,
buttons: buttons,
headerType: 4
}
kon.sendMessage(m.chat, buttonMessage, {quoted:m})
})
} catch (err) {
m.reply(String(err))
}
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply('1 Limit Telah Di Gunakan')
}
break
case 'ig35': {
if (args[0] === "mp4") {
kon.sendMessage(m.chat, {video:{url:args[1]}, caption:'Done!', mimetype:'video/mp4'}, {quoted:m})
} else if (args[0] === "jpg") {
kon.sendMessage(m.chat, {image:{url:args[1]}, caption:'Done!'}, {quoted:m})
} else {
m.reply(" Error! ")
}
}
break
case 'igdl': case 'instagram': case 'ig':{
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
	
        	if (!text) throw 'enter query link!'
		replyig(mess.wait)
		
hx.igdl(args[0]).then( result => {
let kyu = `*Download Instagram*\n🐣 Username : ${result.user.username}\n🐣 Followers : ${result.user.followers}`
for(let i of result.medias){
              if(i.url.includes('mp4')){
                    kon.sendMessage(m.chat, {video:{url:i.url}, caption: kyu, mimetype:'video/mp4'}, {quoted:m})
                    db.data.users[m.sender].limit -= 1 // -1 limit
m.reply('1 Limit Telah Di Gunakan')
                } else {
                    kon.sendMessage(m.chat, { image: { url: i.url }, caption: kyu}, { quoted: m })
                    db.data.users[m.sender].limit -= 1 // -1 limit
m.reply('1 Limit Telah Di Gunakan')
                }
            }
            }).catch((err) => m.reply(`Link tidak valid atau mungkin user private`))
            }
            break
         case 'ig2': case 'igdl2': case 'instagram2': {
         if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
if (!args[0]) return replyig(`Example :\n${prefix + command} https://www.instagram.com/p/CcvJGuxh9VI/?igshid=YmMyMTA2M2Y=`)
replyig(mess.wait)

try {
hx.igdl(args[0]).then(async(resed) => {
ini_anu = []
anu_list = []
textbv = `*| INSTAGRAM DOWNLOADER |*\n\n⭔ Username : ${resed.user.username}\n⭔ Followers : ${resed.user.followers}`
urut = 1
for (let i = 0; i < resed.medias.length; i++) {
ini_anu.push({
 "type": resed.medias[i].fileType,
 "url": resed.medias[i].url
})
}
ilod = 1
for (let i of ini_anu) {
anu_list.push({buttonId: `${prefix}ig6 ${i.type} ${i.url}`, buttonText: {displayText: `Media ${ilod++}`}, type: 1})
}
textbv += `\n\n_Pilih media dibawah untuk mendownload_`
let buttons = anu_list
let buttonMessage = {
                    text: textbv,
                    footer: global.poter,
                    buttons: buttons,
                    headerType: 4
                }
kon.sendMessage(m.chat, buttonMessage, {quoted:m})
})
} catch (err) {
m.reply(String(err))
}
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply('1 Limit Telah Di Gunakan')
}
break
case 'ig6': {
if (args[0] === "mp4") {
kon.sendMessage(m.chat, {video:{url:args[1]}, caption:'Done!', mimetype:'video/mp4'}, {quoted:m})
} else if (args[0] === "jpg") {
kon.sendMessage(m.chat, {image:{url:args[1]}, caption:'Done!'}, {quoted:m})
} else {
replyig(" Error! ")
}
}
break
case 'emojimix2': {
if (!args.join(" ")) return m.reply(`Example : ${prefix + command} 😅`)
try {
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let encmedia = await kon.sendImageAsSticker(sender, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
m.reply('Success') 
} catch {
m.reply("Tidak ditemukan!")
}
}
break
case 'shortlink':{
replyig(mess.wait)
try {
link = args[0]
anu = await axios.get(`https://tinyurl.com/api-create.php?url=${link}`)
m.reply(`${anu.data}`)
} catch (e) {
emror = String(e)
m.reply(`${e}`)
}
}
break
case 'editinfo': {
if (!m.isGroup) return m.reply(mess.group)
if (!isBotAdmins) return m.reply(mess.botAdmin)
if (!isAdmins && !isCreator) return m.reply(mess.admin)
if (args[0] === 'open'){
await kon.groupSettingUpdate(m.chat, 'unlocked').then((res) => m.reply(`Sukses Membuka Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
} else if (args[0] === 'close'){
await kon.groupSettingUpdate(m.chat, 'locked').then((res) => m.reply(`Sukses Menutup Edit Info Group`)).catch((err) => m.reply(jsonformat(err)))
} else {
  	anu = `*Setelan Group*`
                buttonsDefault3 = [
			{ urlButton: { displayText: `Group Bot`, url : `https://chat.whatsapp.com/C3jhijq3xS0AVuJykrhxMn` } },
			{ quickReplyButton: { displayText: `Editinfo Open`, id: `editinfo open` } },
			{ quickReplyButton: { displayText: `Editinfo Close`, id: `editinfo close` } }
		]
				kon.sendMessage(m.chat, { text: anu, footer: global.poter, templateButtons: buttonsDefault3, quoted: m} )

}
}
break
case 'menu2': {
kon.sendMessage(m.chat, { react: { text: `🗿`, key: m.key }})
let buttons = [
{buttonId: `${prefix}owner`, buttonText: {displayText: 'Owner'}, type: 1}, {buttonId: `${prefix}ping`, buttonText: {displayText: 'Status Bot'}, type: 1}
]
let buttonMessage = {
image: tamnel,
caption: listcmd,
footer: global.poter,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"Gunakan Bot Sebaik Mungkin, Ulangi Command 2 - 3 Kali Jika Bot Tidak Merespon",
body:"zBot by Bot Whatsapp",
thumbnail: tamnel,
mediaType:2,
mediaUrl: "https://instagram.com/_daaa_1",
sourceUrl: "https://instagram.com/_daaa_1"
}}
}
kon.sendMessage(m.chat, buttonMessage, { quoted: ftoko })
}
break
case 'emojigambar': {
if (!args.join(" ")) return m.reply('emojinya?')
emoji.get(args.join(" ")).then(async(emoji) => {
	let mese = await getBuffer(emoji.images[4].url)
kon.sendMessage(m.chat, { image: mese, caption: mess.success}, { quoted: fdoc})
})
}
break
case 'tes2':{
	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
	
	m.reply(mess.wait)
}
break
case'glitch3':
	if(!text) return replyig(`Penggunaan ${prefix + command} teks|teks`)
	replyig(mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => kon.sendMessage(m.chat, { image: { url: data }, caption: mess.success}, { quoted: m }))
  .catch((err) => console.log(err));
   break

case '3dbox':
	if(!text) return replyig(`Penggunaan ${prefix + command} teks`)
	replyig(mess.wait)
	maker.textpro("https://textpro.me/3d-box-text-effect-online-880.html", [
    `${text}`,])
.then((data) => kon.sendMessage(m.chat, { image: { url: data }, caption: mess.success}, { quoted: m }))
.catch((err) => console.log(err));
break

case 'drapwater':
	if(!text) return replyig(`Penggunaan ${prefix + command} teks`)
	replyig(mess.wait)
	 maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
     `${text}`,])
    .then((data) => kon.sendMessage(m.chat, { image: { url: data }, caption: mess.success}, { quoted: m }))
    .catch((err) => console.log(err));
     break

case 'mp4' : {
if (!args[0]) return m.reply("Linknya mana kak?")
try {
kon.sendMessage(m.chat, {video:{url:args[0]}, caption:"Succes", contextInfo:{externalAdReply:{
title:"zbot By Z-Bot Whatsapp",
body:"©BotWhatsapp",
thumbnail: tamnel,
mediaType:2,
mediaUrl: "https://youtu.be/TmX43Io_v8s",
sourceUrl: "https://youtu.be/TmX43Io_v8s"
}}}, {quoted: m})
} catch {
m.reply("Linknya Error")
}
}
break
case 'mpeg3': case 'mp3':{
if (!args[0]) return replyig("Linknya mana kak?")
kon.sendMessage(m.chat, {audio:{url: args[0]}, mimetype:"audio/mp4", ptt: true, contextInfo:{externalAdReply:{
title: `Z-Bot Whatsapp`,
body:"Downloader Youtube MP3 by zBot",
thumbnail: tamnel,
mediaType:1,
mediaUrl: `https://instagram.com/_daaa_1`,
sourceUrl: `https://instagram.com/_daaa_1`
}}}, {quoted: m})
}
break
case 'jpg': case 'jpeg': {
if (!args[0]) return replyig("Linknya mana kak?")
try {
kon.sendMessage(m.chat, {image:{url:args[0]}, caption:"Succes", contextInfo:{externalAdReply:{
title:"zBot by Z-Bot Whatsapp",
body:"©Bot Whatsapp",
thumbnail: tamnel,
mediaType:2,
mediaUrl: "https://youtu.be/TmX43Io_v8s",
sourceUrl: "https://youtu.be/TmX43Io_v8s"
}}}, {quoted: m})
} catch {
m.reply("Linknya Error")
}
}
break
case 'react': {
                if (!isCreator) return replyig(mess.owner)
                reactionMessage = {
                    react: {
                        text: args[0],
                        key: { remoteJid: m.chat, fromMe: true, id: quoted.id }
                    }
                }
                kon.sendMessage(m.chat, reactionMessage)
            }
            break  
case 'lion2':
	  if(!text) return replyig(`Penggunaan ${prefix + command} teks`)
	  replyig(mess.wait)
	  maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
      `${text}`,])
     .then((data) => kon.sendMessage(m.chat, { image: { url: data }, caption: mess.success}, { quoted: m }))
     .catch((err) => console.log(err));
     break


case 'papercut':
	      if(!text) return replyig(`Penggunaan ${prefix + command} teks`)
	      replyig(mess.wait)
	      maker.textpro("https://textpro.me/create-art-paper-cut-text-effect-online-1022.html", [
`${text}`,])
         .then((data) => kon.sendMessage(m.chat, { image: { url: data }, caption: mess.success}, { quoted: m }))
         .catch((err) => console.log(err));
         break


case 'transformer':
	      if(!text) return replyig(`Penggunaan ${prefix + command} teks`)
	      replyig(mess.wait)
	      maker.textpro("https://textpro.me/create-a-transformer-text-effect-online-1035.html", [
`${text}`,])
.then((data) => kon.sendMessage(m.chat, { image: { url: data }, caption: mess.success}, { quoted: m }))
.catch((err) => console.log(err));
break
   

case 'herryp':
	       if(!text) return replyig(`Penggunaan ${prefix + command} teks|teks`)
	       replyig(mess.wait)
	       teks1 = q.split("|")[0]
	       teks2 = q.split("|")[1]
	       maker.textpro("https://textpro.me/create-harry-potter-text-effect-online-1025.html", [
 `${teks1}`,`${teks2}`])
 .then((data) => kon.sendMessage(m.chat, { image: { url: data }, caption: mess.success}, { quoted: m }))
 .catch((err) => console.log(err));
 break


case 'neondevil':
	      if(!text) return replyig(`Penggunaan ${prefix + command} teks`)
	      replyig(mess.wait)
	      maker.textpro("https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html", [
`${text}`,])
         .then((data) => kon.sendMessage(m.chat, { image: { url: data }, caption: mess.success}, { quoted: m }))
         .catch((err) => console.log(err));
         break


case '3dstone':
	if(!text) return replyig(`Penggunaan ${prefix + command} teks`)
	replyig(mess.wait)
	maker.textpro("https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html", [
    `${text}`,])
  .then((data) => kon.sendMessage(m.chat, { image: { url: data }, caption: mess.success}, { quoted: m }))
  .catch((err) => console.log(err));
   break


case '3davengers':
	if(!text) return replyig(`Penggunaan ${prefix + command} teks`)
	replyig(mess.wait)
	maker.textpro("https://textpro.me/create-3d-avengers-logo-online-974.html", [
    `${text}`,])
  .then((data) => kon.sendMessage(m.chat, { image: { url: data }, caption: mess.success}, { quoted: m }))
  .catch((err) => console.log(err));
   break


case 'thunder':
	if(!text) return replyig(`Penggunaan ${prefix + command} teks`)
	replyig(mess.wait)
	maker.textpro("https://textpro.me/online-thunder-text-effect-generator-1031.html", [
    `${text}`,])
  .then((data) => kon.sendMessage(m.chat, { image: { url: data }, caption: mess.success}, { quoted: m }))
  .catch((err) => console.log(err));
   break


case 'window':
	if(!text) return replyig(`Penggunaan ${prefix + command} teks`)
	replyig(mess.wait)
	maker.textpro("https://textpro.me/write-text-on-foggy-window-online-free-1015.html", [
    `${text}`,])
  .then((data) => kon.sendMessage(m.chat, { image: { url: data }, caption: mess.success}, { quoted: m }))
  .catch((err) => console.log(err));
   break


case 'graffiti':
   case 'grafiti':
	if(!text) return replyig(`Penggunaan ${prefix + command} teks|teks`)
	replyig(mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	maker.textpro("https://textpro.me/create-a-cool-graffiti-text-on-the-wall-1010.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => kon.sendMessage(m.chat, { image: { url: data }, caption: mess.success}, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'pornhub':
	if(!text) return replyig(`Penggunaan ${prefix + command} teks`)
	replyig(mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	maker.textpro("https://textpro.me/pornhub-style-logo-online-generator-free-977.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => kon.sendMessage(m.chat, { image: { url: data }, caption: mess.success}, { quoted: m }))
  .catch((err) => console.log(err));
   break



case 'blackping':
	if(!text) return replyig(`Penggunaan ${prefix + command} teks`)
	replyig(mess.wait)
	maker.textpro("https://textpro.me/create-blackpink-logo-style-online-1001.html", [
    `${text}`,])
  .then((data) => kon.sendMessage(m.chat, { image: { url: data }, caption: mess.success}, { quoted: m }))
  .catch((err) => console.log(err));
   break
	
case 'glitch':
	if(!text) return replyig(`Penggunaan ${prefix + command} teks`)
	replyig(mess.wait)
	maker.textpro("https://textpro.me/create-impressive-glitch-text-effects-online-1027.html", [
    `${text}`,])
  .then((data) => kon.sendMessage(m.chat, { image: { url: data }, caption: mess.success}, { quoted: m }))
  .catch((err) => console.log(err));
   break
	
	
	
case 'glitch2':
	if(!text) return replyig(`Penggunaan ${prefix + command} teks|teks`)
	replyig(mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	maker.textpro("https://textpro.me/create-a-glitch-text-effect-online-free-1026.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => kon.sendMessage(m.chat, { image: { url: data }, caption: mess.success}, { quoted: m }))
  .catch((err) => console.log(err));
   break
	
	
	
case 'glitch3':
	if(!text) return replyig(`Penggunaan ${prefix + command} teks|teks`)
	replyig(mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	maker.textpro("https://textpro.me/create-glitch-text-effect-style-tik-tok-983.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => kon.sendMessage(m.chat, { image: { url: data }, caption: mess.success}, { quoted: m }))
  .catch((err) => console.log(err));
   break
	
	
	
case '3dspace':
	if(!text) return replyig(`Penggunaan ${prefix + command} teks|teks`)
	replyig(mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	maker.textpro("https://textpro.me/create-space-3d-text-effect-online-985.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => kon.sendMessage(m.chat, { image: { url: data }, caption: mess.success}, { quoted: m }))
  .catch((err) => console.log(err));
   break
	
	
	
case 'lion':
	if(!text) return replyig(`Penggunaan ${prefix + command} teks|teks`)
	replyig(mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	maker.textpro("https://textpro.me/create-lion-logo-mascot-online-938.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => kon.sendMessage(m.chat, { image: { url: data }, caption: mess.success}, { quoted: m }))
  .catch((err) => console.log(err));
   break
	
	
	
case '3dneon':
	if(!text) return replyig(`Penggunaan ${prefix + command} teks`)
	replyig(mess.wait)
	maker.textpro("https://textpro.me/create-3d-neon-light-text-effect-online-1028.html", [
    `${text}`,])
  .then((data) => kon.sendMessage(m.chat, { image: { url: data }, caption: mess.success}, { quoted: m }))
  .catch((err) => console.log(err));
   break
	
	
	
case 'neon':
	if(!text) return replyig(`Penggunaan ${prefix + command} teks`)
	replyig(mess.wait)
	maker.textpro("https://textpro.me/neon-text-effect-online-879.html", [
    `${text}`,])
  .then((data) => kon.sendMessage(m.chat, { image: { url: data }, caption: mess.success}, { quoted: m }))
  .catch((err) => console.log(err));
   break
	
	
	
case 'greenneon':
	if(!text) return replyig(`Penggunaan ${prefix + command} teks`)
	replyig(mess.wait)
	maker.textpro("https://textpro.me/green-neon-text-effect-874.html", [
    `${text}`,])
  .then((data) => kon.sendMessage(m.chat, { image: { url: data }, caption: mess.success}, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
   
  
case 'bokeh':
	if(!text) return replyig(`Penggunaan ${prefix + command} teks`)
	replyig(mess.wait)
	maker.textpro("https://textpro.me/bokeh-text-effect-876.html", [
    `${text}`,])
  .then((data) => kon.sendMessage(m.chat, { image: { url: data }, caption: mess.success}, { quoted: m }))
  .catch((err) => console.log(err));
   break
   
   

case 'hollographic':
	if(!text) return replyig(`Penggunaan ${prefix + command} teks`)
	replyig(mess.wait)
	maker.textpro("https://textpro.me/holographic-3d-text-effect-975.html", [
    `${text}`,])
  .then((data) => kon.sendMessage(m.chat, { image: { url: data }, caption: mess.success}, { quoted: m }))
  .catch((err) => console.log(err));
   break
	
	
	
case 'bear':
	if(!text) return replyig(`Penggunaan ${prefix + command} teks`)
	replyig(mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	maker.textpro("https://textpro.me/online-black-and-white-bear-mascot-logo-creation-1012.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => kon.sendMessage(m.chat, { image: { url: data }, caption: mess.success}, { quoted: m }))
  .catch((err) => console.log(err));
   break
	
	
	
case 'wolf':
	if(!text) return replyig(`Penggunaan ${prefix + command} teks`)
	replyig(mess.wait)
	teks1 = q.split("|")[0]
	teks2 = q.split("|")[1]
	maker.textpro("https://textpro.me/create-wolf-logo-galaxy-online-936.html", [
    `${teks1}`,`${teks2}`])
  .then((data) => kon.sendMessage(m.chat, { image: { url: data }, caption: mess.success}, { quoted: m }))
  .catch((err) => console.log(err));
   break

	
	

case 'joker':
	if(!text) return replyig(`Penggunaan ${prefix + command} teks`)
	replyig(mess.wait)
	maker.textpro("https://textpro.me/create-logo-joker-online-934.html", [
    `${text}`,])
  .then((data) => kon.sendMessage(m.chat, { image: { url: data }, caption: mess.success}, { quoted: m }))
  .catch((err) => console.log(err));
   break
	
	
	
case 'dropwater':
	if(!text) return replyig(`Penggunaan ${prefix + command} teks`)
	replyig(mess.wait)
	maker.textpro("https://textpro.me/dropwater-text-effect-872.html", [
    `${text}`,])
  .then((data) => kon.sendMessage(m.chat, { image: { url: data }, caption: mess.success}, { quoted: m }))
  .catch((err) => console.log(err));
   break
	
	
	
case 'neonlight':
	if(!text) return replyig(`Penggunaan ${prefix + command} teks`)
	replyig(mess.wait)
	maker.textpro("https://textpro.me/neon-light-text-effect-with-galaxy-style-981.html", [
    `${text}`,])
  .then((data) => kon.sendMessage(m.chat, { image: { url: data }, caption: mess.success}, { quoted: m }))
  .catch((err) => console.log(err));
   break
	
	
	
case 'thewall':
	if(!text) return replyig(`Penggunaan ${prefix + command} teks`)
	replyig(mess.wait)
	maker.textpro("https://textpro.me/break-wall-text-effect-871.html", [
    `${text}`,])
  .then((data) => kon.sendMessage(m.chat, { image: { url: data }, caption: mess.success}, { quoted: m }))
  .catch((err) => console.log(err));
   break
	

	
case 'natural':
	if(!text) return replyig(`Penggunaan ${prefix + command} teks`)
	replyig(mess.wait)
	maker.textpro("https://textpro.me/natural-leaves-text-effect-931.html", [
    `${text}`,])
  .then((data) => kon.sendMessage(m.chat, { image: { url: data }, caption: mess.success}, { quoted: m }))
  .catch((err) => console.log(err));
   break
	
	
	
case 'carbon':
	if(!text) return replyig(`Penggunaan ${prefix + command} teks`)
	replyig(mess.wait)
	maker.textpro("https://textpro.me/carbon-text-effect-833.html", [
    `${text}`,])
  .then((data) => kon.sendMessage(m.chat, { image: { url: data }, caption: mess.success}, { quoted: m }))
  .catch((err) => console.log(err));
   break
	
	
	
case 'pencil':
	if(!text) return replyig(`Penggunaan ${prefix + command} teks`)
	replyig(mess.wait)
	maker.textpro("https://textpro.me/create-a-sketch-text-effect-online-1044.html", [
    `${text}`,])
  .then((data) => kon.sendMessage(m.chat, { image: { url: data }, caption: mess.success}, { quoted: m }))
  .catch((err) => console.log(err));
   break
  
case 'candy': case 'christmas': case '3dchristmas': case 'sparklechristmas':
case 'deepsea': case 'scifi': case 'rainbow': case 'waterpipe': case 'spooky': 
case 'pencil': case 'circuit': case 'discovery': case 'metalic': case 'fiction': case 'demon': 
case 'transformer': case 'berry': case 'thunder': case 'magma': case '3dstone': 
case 'neonlight': case 'glitch': case 'harrypotter': case 'brokenglass': case 'papercut': 
case 'watercolor': case 'multicolor': case 'neondevil': case 'underwater': case 'graffitibike':
 case 'snow': case 'cloud': case 'honey': case 'ice': case 'fruitjuice': case 'biscuit': case 'wood': 
case 'chocolate': case 'strawberry': case 'matrix': case 'blood': case 'dropwater': case 'toxic': 
case 'lava': case 'rock': case 'bloodglas': case 'hallowen': case 'darkgold': case 'joker': case 'wicker':
 case 'firework': case 'skeleton': case 'blackpink': case 'sand': case 'glue': case '1917': case 'leaves': {
             	if (!text) return m.reply(`Example : ${prefix + command} zBot`) 
             	replyig(mess.wait)
             	let link
             	if (/candy/.test(command)) link = 'https://textpro.me/create-christmas-candy-cane-text-effect-1056.html'
             	if (/christmas/.test(command)) link = 'https://textpro.me/christmas-tree-text-effect-online-free-1057.html'
             	if (/3dchristmas/.test(command)) link = 'https://textpro.me/3d-christmas-text-effect-by-name-1055.html'
             	if (/sparklechristmas/.test(command)) link = 'https://textpro.me/sparkles-merry-christmas-text-effect-1054.html'
             	if (/deepsea/.test(command)) link = 'https://textpro.me/create-3d-deep-sea-metal-text-effect-online-1053.html'
             	if (/scifi/.test(command)) link = 'https://textpro.me/create-3d-sci-fi-text-effect-online-1050.html'
             	if (/rainbow/.test(command)) link = 'https://textpro.me/3d-rainbow-color-calligraphy-text-effect-1049.html'
             	if (/waterpipe/.test(command)) link = 'https://textpro.me/create-3d-water-pipe-text-effects-online-1048.html'
             	if (/spooky/.test(command)) link = 'https://textpro.me/create-halloween-skeleton-text-effect-online-1047.html'
             	if (/pencil/.test(command)) link = 'https://textpro.me/create-a-sketch-text-effect-online-1044.html'
             	if (/circuit/.test(command)) link = 'https://textpro.me/create-blue-circuit-style-text-effect-online-1043.html'
             	if (/discovery/.test(command)) link = 'https://textpro.me/create-space-text-effects-online-free-1042.html'
             	if (/metalic/.test(command)) link = 'https://textpro.me/creat-glossy-metalic-text-effect-free-online-1040.html'
             	if (/fiction/.test(command)) link = 'https://textpro.me/create-science-fiction-text-effect-online-free-1038.html'
             	if (/demon/.test(command)) link = 'https://textpro.me/create-green-horror-style-text-effect-online-1036.html'
             	if (/transformer/.test(command)) link = 'https://textpro.me/create-a-transformer-text-effect-online-1035.html'
             	if (/berry/.test(command)) link = 'https://textpro.me/create-berry-text-effect-online-free-1033.html'
             	if (/thunder/.test(command)) link = 'https://textpro.me/online-thunder-text-effect-generator-1031.html'
             	if (/magma/.test(command)) link = 'https://textpro.me/create-a-magma-hot-text-effect-online-1030.html'
             	if (/3dstone/.test(command)) link = 'https://textpro.me/3d-stone-cracked-cool-text-effect-1029.html'
             	if (/neonlight/.test(command)) link = 'https://textpro.me/create-3d-neon-light-text-effect-online-1028.html'
             	if (/glitch/.test(command)) link = 'https://textpro.me/create-impressive-glitch-text-effects-online-1027.html'
             	if (/harrypotter/.test(command)) link = 'https://textpro.me/create-harry-potter-text-effect-online-1025.html'
             	if (/brokenglass/.test(command)) link = 'https://textpro.me/broken-glass-text-effect-free-online-1023.html'
             	if (/papercut/.test(command)) link = 'https://textpro.me/create-art-paper-cut-text-effect-online-1022.html'
             	if (/watercolor/.test(command)) link = 'https://textpro.me/create-a-free-online-watercolor-text-effect-1017.html'
             	if (/multicolor/.test(command)) link = 'https://textpro.me/online-multicolor-3d-paper-cut-text-effect-1016.html'
             	if (/neondevil/.test(command)) link = 'https://textpro.me/create-neon-devil-wings-text-effect-online-free-1014.html'
             	if (/underwater/.test(command)) link = 'https://textpro.me/3d-underwater-text-effect-generator-online-1013.html'
             	if (/graffitibike/.test(command)) link = 'https://textpro.me/create-wonderful-graffiti-art-text-effect-1011.html'
             	if (/snow/.test(command)) link = 'https://textpro.me/create-snow-text-effects-for-winter-holidays-1005.html'
             	if (/cloud/.test(command)) link = 'https://textpro.me/create-a-cloud-text-effect-on-the-sky-online-1004.html'
             	if (/honey/.test(command)) link = 'https://textpro.me/honey-text-effect-868.html'
             	if (/ice/.test(command)) link = 'https://textpro.me/ice-cold-text-effect-862.html'
             	if (/fruitjuice/.test(command)) link = 'https://textpro.me/fruit-juice-text-effect-861.html'
             	if (/biscuit/.test(command)) link = 'https://textpro.me/biscuit-text-effect-858.html'
             	if (/wood/.test(command)) link = 'https://textpro.me/wood-text-effect-856.html'
             	if (/chocolate/.test(command)) link = 'https://textpro.me/chocolate-cake-text-effect-890.html'
             	if (/strawberry/.test(command)) link = 'https://textpro.me/strawberry-text-effect-online-889.html'
             	if (/matrix/.test(command)) link = 'https://textpro.me/matrix-style-text-effect-online-884.html'
             	if (/blood/.test(command)) link = 'https://textpro.me/horror-blood-text-effect-online-883.html'
             	if (/dropwater/.test(command)) link = 'https://textpro.me/dropwater-text-effect-872.html'
             	if (/toxic/.test(command)) link = 'https://textpro.me/toxic-text-effect-online-901.html'
             	if (/lava/.test(command)) link = 'https://textpro.me/lava-text-effect-online-914.html'
             	if (/rock/.test(command)) link = 'https://textpro.me/rock-text-effect-online-915.html'
             	if (/bloodglas/.test(command)) link = 'https://textpro.me/blood-text-on-the-frosted-glass-941.html'
             	if (/hallowen/.test(command)) link = 'https://textpro.me/halloween-fire-text-effect-940.html'
             	if (/darkgold/.test(command)) link = 'https://textpro.me/metal-dark-gold-text-effect-online-939.html'
             	if (/joker/.test(command)) link = 'https://textpro.me/create-logo-joker-online-934.html'
             	if (/wicker/.test(command)) link = 'https://textpro.me/wicker-text-effect-online-932.html'
             	if (/firework/.test(command)) link = 'https://textpro.me/firework-sparkle-text-effect-930.html'
             	if (/skeleton/.test(command)) link = 'https://textpro.me/skeleton-text-effect-online-929.html'
             	if (/blackpink/.test(command)) link = 'https://textpro.me/create-blackpink-logo-style-online-1001.html'
             	if (/sand/.test(command)) link = 'https://textpro.me/write-in-sand-summer-beach-free-online-991.html'
             	if (/glue/.test(command)) link = 'https://textpro.me/create-3d-glue-text-effect-with-realistic-style-986.html'
             	if (/1917/.test(command)) link = 'https://textpro.me/1917-style-text-effect-online-980.html'
                if (/leaves/.test(command)) link = 'https://textpro.me/natural-leaves-text-effect-931.html'
             	let anu = await maker.textpro(link, text)
                kon.sendMessage(m.chat, { image: { url: anu }, caption: `*Done*` }, { quoted: ftoko })
             }
             break
/* case 'blue': case 'juice': case 'purple': case 'toxic': case 'peridot':case 'metal': case 'realistic': case 'impressive': case 'cracked': case 'magma': case 'thunder': case 'berry': case 'transformer': case 'horror': case 'metallic': case 'circuit': case 'sketch': case 'halloween':{
	replyig(mess.wait)
	anu = await fetchJson(`https://myselfff.herokuapp.com/docs/textpro/${command}?text=${text}`)
    anu2 = await getBuffer(anu.result)
                kon.sendMessage(m.chat, { image: anu2, caption: mess.success}, { quoted: ftrol2})
	    }
            break*/
            case 'asupan':{
            	kon.sendMessage(m.chat, { react: { text: `😋`, key: m.key }})
            	replyig(mess.wait)
             let apirnobg = [
"https://b.top4top.io/m_1931yxodg0.mp4",
"https://k.top4top.io/m_193161p380.mp4",
"https://l.top4top.io/m_1931i4g3p1.mp4",
"https://a.top4top.io/m_1931tjlio2.mp4",
"https://g.top4top.io/m_1931z2mc40.mp4",
"https://h.top4top.io/m_1931auyof1.mp4",
"https://i.top4top.io/m_19315hrle2.mp4",
"https://j.top4top.io/m_1931xul5a3.mp4",
"https://l.top4top.io/m_1931o92nr0.mp4",
"https://a.top4top.io/m_1931j1rh21.mp4",
"https://b.top4top.io/m_1931iaqpg2.mp4",
"https://c.top4top.io/m_1931s5zlj3.mp4",
"https://d.top4top.io/m_1931x0g5a4.mp4",
"https://i.top4top.io/m_1931oj76n0.mp4",
"https://j.top4top.io/m_19319gl3d1.mp4",
"https://k.top4top.io/m_1931u52cq2.mp4",
"https://l.top4top.io/m_1931mvgj73.mp4",
"https://a.top4top.io/m_1931u07oz4.mp4",
"https://j.top4top.io/m_1931h1fo60.mp4",
"https://k.top4top.io/m_1931mro3u1.mp4",
"https://l.top4top.io/m_1931kx0ac2.mp4",
"https://a.top4top.io/m_1931g9ezq3.mp4",
"https://b.top4top.io/m_1931plin14.mp4",
"https://c.top4top.io/m_1931aaxri5.mp4",
"https://d.top4top.io/m_1931ijzzn6.mp4",
"https://e.top4top.io/m_1931ugycd7.mp4",
"https://f.top4top.io/m_1931l14nk8.mp4",
"https://g.top4top.io/m_1931crgqt9.mp4",
"https://l.top4top.io/m_1931ufrul0.mp4",
"https://a.top4top.io/m_1931jbdpk1.mp4",
"https://c.top4top.io/m_1931aj9nm2.mp4",
"https://d.top4top.io/m_1931cnsal3.mp4",
"https://e.top4top.io/m_1931d4kc74.mp4",
"https://f.top4top.io/m_1931bih8q5.mp4",
"https://g.top4top.io/m_1931xx7aa6.mp4",
"https://h.top4top.io/m_1931g3zsq7.mp4",
"https://a.top4top.io/m_1931m74wd0.mp4",
"https://b.top4top.io/m_1931p8tfm1.mp4",
"https://e.top4top.io/m_1931aj8iv0.mp4",
"https://f.top4top.io/m_1931szguy1.mp4",
"https://g.top4top.io/m_1931l73ry2.mp4",
"https://h.top4top.io/m_1931yhznj3.mp4",
"https://i.top4top.io/m_1931kmtp34.mp4",
"https://j.top4top.io/m_1931snhdg5.mp4",
"https://k.top4top.io/m_1931ay1jz6.mp4",
"https://l.top4top.io/m_1931x70mk7.mp4",
"https://a.top4top.io/m_19319mvvf8.mp4",
"https://b.top4top.io/m_1931icmzd9.mp4",
"https://h.top4top.io/m_19316oo0s0.mp4",
"https://i.top4top.io/m_1931cvvpt1.mp4",
"https://e.top4top.io/m_1930ns2zo0.mp4",
"https://k.top4top.io/m_1930j9i810.mp4",
"https://f.top4top.io/m_1930wtj580.mp4",
"https://d.top4top.io/m_1930a2isv0.mp4",
"https://e.top4top.io/m_1930wbgc41.mp4",
"https://f.top4top.io/m_1930urbj02.mp4",
"https://b.top4top.io/m_1930ceiqv0.mp4",
"https://i.top4top.io/m_1931a0z6o0.mp4",
"https://a.top4top.io/m_193190b500.mp4",
"https://b.top4top.io/m_1931dcixz1.mp4",
"https://g.top4top.io/m_19317gpjp0.mp4",
"https://i.top4top.io/m_1931cc22w1.mp4",
"https://j.top4top.io/m_1931xn6412.mp4",
"https://g.top4top.io/m_1931silxz0.mp4",
"https://h.top4top.io/m_1931as4mg1.mp4",
"https://i.top4top.io/m_1931p9j5v0.mp4",
"https://e.top4top.io/m_1931mgeuy0.mp4",
"https://f.top4top.io/m_1931lw9381.mp4",
"https://g.top4top.io/m_1931vm0dk2.mp4",
"https://h.top4top.io/m_1931fiv8x3.mp4",
"https://b.top4top.io/m_1931jm3dt0.mp4",
"https://e.top4top.io/m_1931i7yag1.mp4",
"https://f.top4top.io/m_1931dr5ya2.mp4",
"https://g.top4top.io/m_193172kpg3.mp4",
"https://h.top4top.io/m_1931j3b224.mp4",
"https://j.top4top.io/m_19317ykt25.mp4",
"https://k.top4top.io/m_1931o0vh16.mp4",
"https://l.top4top.io/m_1931ssfbn7.mp4",
"https://a.top4top.io/m_19318t7458.mp4",
"https://b.top4top.io/m_1931vhu759.mp4",
"https://e.top4top.io/m_1930wespy0.mp4",
"https://e.top4top.io/m_19303zfi20.mp4",
"https://j.top4top.io/m_1930t00kx0.mp4",
"https://e.top4top.io/m_1930kx7hi0.mp4",
"https://c.top4top.io/m_19307g6kd0.mp4",
"https://f.top4top.io/m_19306yk4c0.mp4",
"https://i.top4top.io/m_1930y1u780.mp4",
"https://j.top4top.io/m_1930ilsyy0.mp4",
"https://i.top4top.io/m_19301948b0.mp4",
"https://d.top4top.io/m_1930zg8460.mp4",
"https://i.top4top.io/m_19301yozl0.mp4",
"https://g.top4top.io/m_1930qjr2q0.mp4",
"https://l.top4top.io/m_1930x1wp50.mp4",
"https://a.top4top.io/m_1930zr1041.mp4",
"https://b.top4top.io/m_1930s29hq2.mp4",
"https://a.top4top.io/m_1930kbo0y0.mp4",
"https://j.top4top.io/m_1930xek9z0.mp4",
"https://i.top4top.io/m_1930s7gb80.mp4",
"https://c.top4top.io/m_1930w0dbu0.mp4",
"https://d.top4top.io/m_1930xu4kd1.mp4",
"https://a.top4top.io/m_1930zw2nb0.mp4",
"https://b.top4top.io/m_1930eybjj1.mp4",
"https://g.top4top.io/m_1930fmx330.mp4",
"https://l.top4top.io/m_1930gnlam0.mp4",
"https://g.top4top.io/m_1930twwu50.mp4",
"https://l.top4top.io/m_1930qkeh70.mp4",
"https://l.top4top.io/m_1930wefm20.mp4",
"https://a.top4top.io/m_1930idzd51.mp4",
"https://b.top4top.io/m_1930thxw90.mp4",
"https://d.top4top.io/m_1930pezhp0.mp4",
"https://c.top4top.io/m_1930cjgbx0.mp4",
"https://b.top4top.io/m_1930v6vhg0.mp4",
"https://f.top4top.io/m_1930uh7ud0.mp4",
"https://a.top4top.io/m_1930c9cpb0.mp4",
"https://k.top4top.io/m_19308amkf0.mp4",
"https://d.top4top.io/m_1930wjaq60.mp4",
"https://i.top4top.io/m_1930n2um40.mp4",
"https://i.top4top.io/m_1930e14pi0.mp4",
"https://i.top4top.io/m_1930w6lwf0.mp4",
"https://e.top4top.io/m_19307autl0.mp4",
"https://d.top4top.io/m_1930i6tfc0.mp4",
"https://c.top4top.io/m_1930qmr7u0.mp4",
"https://d.top4top.io/m_1930itbte1.mp4",
"https://i.top4top.io/m_1930ze4oq0.mp4",
"https://j.top4top.io/m_1930kkqyh1.mp4",
"https://f.top4top.io/m_1930zevlz0.mp4",
"https://g.top4top.io/m_1930q0apu1.mp4",
"https://h.top4top.io/m_1930trfsv2.mp4",
"https://l.top4top.io/m_196632pm21.mp4",
"https://k.top4top.io/m_196696fby1.mp4",
"https://i.top4top.io/m_19665qrmn1.mp4",
"https://j.top4top.io/m_19660pebi1.mp4",
"https://d.top4top.io/m_1966zo5kt1.mp4",
"https://h.top4top.io/m_19662lgzi1.mp4",
"https://c.top4top.io/m_1966ukvwr1.mp4",
"https://g.top4top.io/m_1966f042t1.mp4",
"https://f.top4top.io/m_1966rey9j1.mp4",
"https://e.top4top.io/m_1966eqtk21.mp4",
"https://a.top4top.io/m_1966yrtjt1.mp4",
"https://l.top4top.io/m_196664xnz1.mp4",
"https://j.top4top.io/m_19664phob1.mp4",
"https://i.top4top.io/m_1966movai1.mp4",
"https://h.top4top.io/m_1966633ho1.mp4",
"https://f.top4top.io/m_1966o20wm1.mp4",
"https://g.top4top.io/m_1966c5rg21.mp4",
"https://e.top4top.io/m_1966ui8nv1.mp4",
"https://d.top4top.io/m_1966nxtoy1.mp4",
"https://c.top4top.io/m_1966bwd6v1.mp4",
"https://b.top4top.io/m_1966ksnkk1.mp4",
"https://a.top4top.io/m_1966kq4h81.mp4",
"https://k.top4top.io/m_1966d34y01.mp4",
"https://l.top4top.io/m_1966fw13d1.mp4",
"https://j.top4top.io/m_1966xv2121.mp4",
"https://i.top4top.io/m_1966kn6nq1.mp4",
"https://g.top4top.io/m_19663syet1.mp4",
"https://f.top4top.io/m_1966usvco1.mp4",
"https://e.top4top.io/m_196622yeo1.mp4",
"https://d.top4top.io/m_1966skdq31.mp4",
"https://c.top4top.io/m_1966y3ln01.mp4",
"https://b.top4top.io/m_19669nwfm1.mp4",
"https://k.top4top.io/m_19661cuqo1.mp4",
"https://l.top4top.io/m_1966hghj61.mp4",
"https://i.top4top.io/m_1966aoilk1.mp4",
"https://h.top4top.io/m_19661l14p1.mp4",
"https://g.top4top.io/m_1966f8ezr1.mp4",
"https://f.top4top.io/m_19668td551.mp4",
"https://f.top4top.io/m_19668td551.mp4",
"https://e.top4top.io/m_1966pnb5n1.mp4",
"https://c.top4top.io/m_19665y7kq1.mp4",
"https://b.top4top.io/m_19668sbj71.mp4",
"https://a.top4top.io/m_1966z3hc81.mp4",
"https://l.top4top.io/m_1966rdvm71.mp4",
"https://k.top4top.io/m_19665sid21.mp4",
"https://j.top4top.io/m_1966pvisc1.mp4",
"https://i.top4top.io/m_1966q97hd1.mp4",
"https://h.top4top.io/m_1966rhngl1.mp4",
"https://g.top4top.io/m_19667gyf01.mp4",
"https://i.top4top.io/m_1966day6t1.mp4",
"https://g.top4top.io/m_1966svvhh1.mp4",
"https://f.top4top.io/m_19668aept1.mp4",
"https://e.top4top.io/m_1966l3kwr1.mp4",
"https://d.top4top.io/m_1966pizgc1.mp4",
"https://c.top4top.io/m_1966r6dd91.mp4",
"https://b.top4top.io/m_1966gd2y21.mp4",
"https://a.top4top.io/m_1966f28zy1.mp4",
"https://l.top4top.io/m_1966uyrdu1.mp4",
"https://k.top4top.io/m_1966igu2u1.mp4",
"https://j.top4top.io/m_1966h5sv11.mp4",
"https://i.top4top.io/m_1966xgl261.mp4",
"https://h.top4top.io/m_196678ki61.mp4",
"https://f.top4top.io/m_1966eoj2h1.mp4",
"https://g.top4top.io/m_19663sb841.mp4",
"https://e.top4top.io/m_1966nmi0x1.mp4",
"https://d.top4top.io/m_1966jl0qb1.mp4",
"https://b.top4top.io/m_1966knowg1.mp4",
"https://a.top4top.io/m_1966jk07b1.mp4",
"https://j.top4top.io/m_1966jf5ut1.mp4",
"https://k.top4top.io/m_1966dju7g1.mp4",
"https://i.top4top.io/m_1966addcv1.mp4",
"https://h.top4top.io/m_1966j21g31.mp4",
"https://g.top4top.io/m_19662eh9s1.mp4",
"https://f.top4top.io/m_1966vj79r1.mp4",
"https://e.top4top.io/m_1966qlw061.mp4",
"https://d.top4top.io/m_1966lxxwe1.mp4",
"https://a.top4top.io/m_1966dpwax1.mp4",
"https://c.top4top.io/m_1966fewe11.mp4",
"https://l.top4top.io/m_1966yft9o1.mp4",
"https://j.top4top.io/m_19664yeyz1.mp4",
"https://h.top4top.io/m_1966sn0yr1.mp4",
"https://i.top4top.io/m_1966d3dar1.mp4",
"https://g.top4top.io/m_19667cggu1.mp4",
"https://e.top4top.io/m_1966ondhx1.mp4",
"https://c.top4top.io/m_1966bt25g1.mp4",
"https://a.top4top.io/m_1966altcv1.mp4",
"https://b.top4top.io/m_1966w21do1.mp4",
"https://l.top4top.io/m_1966m9dpq1.mp4",
"https://k.top4top.io/m_1966owgko1.mp4",
"https://j.top4top.io/m_1966xsfh81.mp4",
"https://i.top4top.io/m_19669n5k11.mp4",
"https://h.top4top.io/m_19660qdsa1.mp4",
"https://g.top4top.io/m_1966likmn1.mp4",
"https://f.top4top.io/m_1966a9yog1.mp4",
"https://e.top4top.io/m_1966ls2ru1.mp4",
"https://d.top4top.io/m_1966kue2j1.mp4",
"https://c.top4top.io/m_1966p9df21.mp4",
"https://b.top4top.io/m_1966wyuua1.mp4",
"https://b.top4top.io/m_1966z68z61.mp4",
"https://a.top4top.io/m_19660m6mx1.mp4",
"https://k.top4top.io/m_1966q2vx81.mp4",
"https://i.top4top.io/m_1966d50ac1.mp4",
"https://g.top4top.io/m_1966ek2z71.mp4",
"https://h.top4top.io/m_1966nac9z1.mp4",
"https://f.top4top.io/m_1966kfd221.mp4",
"https://e.top4top.io/m_1966uh3i11.mp4",
"https://d.top4top.io/m_19662dvmy1.mp4",
"https://c.top4top.io/m_1966p24i21.mp4",
"https://b.top4top.io/m_1966koom71.mp4",
"https://a.top4top.io/m_19667th9w1.mp4",
"https://l.top4top.io/m_19665ovc21.mp4",
"https://k.top4top.io/m_1966cq5ez1.mp4",
"https://j.top4top.io/m_1966ot1sc1.mp4",
"https://i.top4top.io/m_19664j5pa1.mp4",
"https://h.top4top.io/m_1966qfr1n1.mp4",
"https://g.top4top.io/m_19666vtmi1.mp4",
"https://e.top4top.io/m_1966e1oak1.mp4",
"https://d.top4top.io/m_19660cdkj1.mp4",
"https://c.top4top.io/m_1966udmjr1.mp4",
"https://l.top4top.io/m_19665ncuv1.mp4",
"https://a.top4top.io/m_1966xzuvh1.mp4",
"https://k.top4top.io/m_19668fjzi1.mp4",
"https://j.top4top.io/m_1966a8kng1.mp4",
"https://i.top4top.io/m_1966za3o11.mp4",
"https://h.top4top.io/m_1966s0zyq1.mp4",
"https://g.top4top.io/m_1966zpidw1.mp4",
"https://f.top4top.io/m_1966xayex1.mp4",
"https://e.top4top.io/m_1966jf1kq1.mp4",
"https://d.top4top.io/m_1966lobye1.mp4",
"https://c.top4top.io/m_196672cwt1.mp4",
"https://b.top4top.io/m_1966jmjvo1.mp4",
"https://a.top4top.io/m_19663mpmt1.mp4",
"https://l.top4top.io/m_1966f5gox1.mp4",
"https://k.top4top.io/m_1966o2img1.mp4",
"https://j.top4top.io/m_1966id3xk1.mp4",
"https://i.top4top.io/m_1966v3l621.mp4",
"https://h.top4top.io/m_19664zfvg1.mp4",
"https://g.top4top.io/m_1966qmutz1.mp4",
"https://f.top4top.io/m_1966idhdd1.mp4",
"https://d.top4top.io/m_19667o2n51.mp4",
"https://b.top4top.io/m_196637ev41.mp4",
"https://c.top4top.io/m_1966ca2691.mp4",
"https://a.top4top.io/m_1966wf0cg1.mp4",
"https://l.top4top.io/m_1966bkza51.mp4",
"https://k.top4top.io/m_1966rqdh31.mp4",
"https://j.top4top.io/m_1966za5ju1.mp4",
"https://j.top4top.io/m_1966jbfiw1.mp4",
"https://a.top4top.io/m_1966v6iz11.mp4",
"https://l.top4top.io/m_1966g6ny11.mp4",
"https://k.top4top.io/m_1966lgval1.mp4",
"https://j.top4top.io/m_1966j1lbr1.mp4",
"https://h.top4top.io/m_19663fl981.mp4",
"https://g.top4top.io/m_1966ke92o1.mp4",
"https://f.top4top.io/m_1966thn7c1.mp4",
"https://e.top4top.io/m_1966dtivb1.mp4",
"https://d.top4top.io/m_1966b26rp1.mp4",
"https://c.top4top.io/m_19668lsis1.mp4",
"https://b.top4top.io/m_1966rqqkv1.mp4",
"https://a.top4top.io/m_1966e4e3q1.mp4",
"https://k.top4top.io/m_19668tucd1.mp4",
"https://l.top4top.io/m_19668mle71.mp4",
"https://h.top4top.io/m_1966wxszt1.mp4",
"https://g.top4top.io/m_19660yx0f1.mp4",
"https://f.top4top.io/m_1966m2pk31.mp4",
"https://e.top4top.io/m_19664e93p1.mp4",
"https://d.top4top.io/m_1966jz0jr1.mp4",
"https://c.top4top.io/m_19661r7dt1.mp4",
"https://b.top4top.io/m_1966e3ts01.mp4",
"https://a.top4top.io/m_1966ruanp1.mp4",
"https://l.top4top.io/m_1966j1xcr1.mp4",
"https://k.top4top.io/m_19663jia71.mp4",
"https://j.top4top.io/m_1966reikf1.mp4",
"https://i.top4top.io/m_1966v3rjk1.mp4",
"https://h.top4top.io/m_1966oktgx1.mp4",
"https://g.top4top.io/m_1966x1zbo1.mp4",
"https://f.top4top.io/m_19661otau1.mp4",
"https://i.top4top.io/m_1966bqiim1.mp4",
"https://e.top4top.io/m_1966kwou51.mp4",
"https://d.top4top.io/m_196644tqw1.mp4",
"https://c.top4top.io/m_19664ld4z1.mp4",
"https://b.top4top.io/m_1966f4u101.mp4",
"https://a.top4top.io/m_1966aj6n61.mp4",
"https://l.top4top.io/m_1966ssrfs1.mp4",
"https://k.top4top.io/m_1966lq0uo1.mp4",
"https://j.top4top.io/m_1966hvv5t1.mp4",
"https://i.top4top.io/m_19666dxii1.mp4",
"https://h.top4top.io/m_1966zpl371.mp4",
"https://g.top4top.io/m_19667ld4b1.mp4",
"https://f.top4top.io/m_19663zw2x1.mp4",
"https://e.top4top.io/m_19667hx161.mp4",
"https://d.top4top.io/m_1966xvyhj1.mp4",
"https://c.top4top.io/m_19666vlaq1.mp4",
"https://b.top4top.io/m_1966svejo1.mp4",
"https://a.top4top.io/m_1966ohu0h1.mp4",
"https://l.top4top.io/m_1966rt1qs1.mp4",
"https://k.top4top.io/m_1966fjpnj1.mp4",
"https://j.top4top.io/m_19677oxbd1.mp4",
"https://i.top4top.io/m_19672o6ll1.mp4",
"https://h.top4top.io/m_19676f2ju1.mp4",
"https://f.top4top.io/m_19699qk6w1.mp4",
"https://g.top4top.io/m_1967uvzs61.mp4"
]
	         let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
kon.sendMessage(m.chat, { video: { url: apinobg}, mimetype: 'video/mp4', fileName: `zbot.mp4`, caption: mess.success}, { quoted: m })}break
            case 'pinterest': {
                if (!text) return reply(`Example : ${prefix + command} Cewe cantik`)
                replyig(mess.wait)
		        let { pinterest } = require('./lib/scraper')
                anu = await pinterest(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                kon.sendMessage(m.chat, { image: { url: result }, caption: '⭔ Media Url : '+result }, { quoted: m })
            }
            break
        	case 'ssweb':
            case 'ss':{
                if (!text) throw 'url ?'
                replyig(mess.wait)
					teks = q
					anu = await fetchJson(`https://shot.screenshotapi.net/screenshot?&url=${text}`).catch(e => {
m.reply('error')
})
					buff = await getBuffer(anu.screenshot)
					kon.sendMessage(m.chat, { image: { url: anu.screenshot}}).catch(e => {
m.reply('Fitur Sedang Eror Tunggu Beberapa Hari Kedepan')
})
}
					break
		   case 'soundcloud':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
if (!text) throw 'url ?'
replyig(mess.wait)

let yut = await soundcloud(args[0])
console.log(yut)
let ter = `🐣 Judul : ${yut.title}\n?? Durasi : ${yut.duration}\n🐣 Quality : ${yut.quality}\n🐣 Thumb : ${yut.thumbnail}\n\n Tunggu Sebentar Media Sedang Dikirim....`
replyig(ter)
lol = await getBuffer(yut.download)
kon.sendMessage(m.chat, {audio:lol, mimetype:"audio/mp4", ptt:false, contextInfo:{externalAdReply:{
title:yut.title,
body:"Downloader Soundcloud by zBot",
thumbnail: tamnel,
mediaType:1,
mediaUrl: `https://instagram.com/_daaa_1`,
sourceUrl: `https://instagram.com/_daaa_1`
}}}, {quoted:ftoko}).catch(e => {
m.reply('Fitur Sedang Eror Tunggu Beberapa Hari Kedepan')
})
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply('1 Limit Telah Di Gunakan')
}
break
		   case 'twitter2':{
			   if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                if (!text) throw 'url ?'
                replyig(mess.wait)
                
					anu = await fetchJson(`https://yuzzu-api.herokuapp.com/api/twitter?link=${text}`).catch(e => {
m.reply('error')
})
					tol = await getBuffer(anu.result.HD)
					kon.sendMessage(m.chat, { video: tol, mimetype: 'video/mp4', fileName: `zbot.mp4`, caption: mess.success}, { quoted: m }).catch(e => {
m.reply('Fitur Sedang Eror Tunggu Beberapa Hari Kedepan')
})
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply('1 Limit Telah Di Gunakan')
}
break
			case 'pinterestdl':{
                if (!text) throw 'url ?'
                replyig(mess.wait)
					anu = await fetchJson(`https://tyz-api.herokuapp.com/downloader/pindl?link=${text}`).catch(e => {
m.reply('error')
})
					tol = await getBuffer(anu.result)
					kon.sendMessage(m.chat, { video: tol, mimetype: 'video/mp4', fileName: `zbot.mp4`, caption: mess.success}, { quoted: m }).catch(e => {
m.reply('Fitur Sedang Eror Tunggu Beberapa Hari Kedepan')
})
}
break
            case 'smeme': {
	        let respond = `Kirim/reply image/sticker dengan caption ${prefix + command} text1|text2`
	        if (!/image/.test(mime)) throw respond
            if (!text) throw respond
	        replyig(mess.wait)
	        atas = text.split('|')[0] ? text.split('|')[0] : '-'
            bawah = text.split('|')[1] ? text.split('|')[1] : '-'
	        let dwnld = await quoted.download()
	        let { floNime } = require('./lib/uploader')
	        let fatGans = await floNime(dwnld)
	        let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(bawah)}/${encodeURIComponent(atas)}.png?background=${fatGans.result.url}`
	        let FaTiH = await kon.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.author })
	        await fs.unlinkSync(FaTiH)
            }
	       break     
        	case 'setname': case 'setsubject': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await kon.groupUpdateSubject(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setdesc': case 'setdesk': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
                if (!text) throw 'Text ?'
                await kon.groupUpdateDescription(m.chat, text).then((res) => m.reply(mess.success)).catch((err) => m.reply(jsonformat(err)))
            }
            break
          case 'setppbot': {
                if (!isCreator) throw mess.owner
                if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                let media = await kon.downloadAndSaveMediaMessage(quoted)
                await kon.updateProfilePicture(botNumber, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
           case 'setppgroup': case 'setppgrup': case 'setppgc': {
                if (!m.isGroup) throw mess.group
                if (!isAdmins) throw mess.admin
                if (!quoted) throw `Send/Reply Image With Caption ${prefix + command}`
                if (!/image/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                if (/webp/.test(mime)) throw `Send/Reply Image With Caption ${prefix + command}`
                let media = await kon.downloadAndSaveMediaMessage(quoted)
                await kon.updateProfilePicture(m.chat, { url: media }).catch((err) => fs.unlinkSync(media))
                m.reply(mess.success)
                }
                break
        	case 'join': {
                if (!isCreator) throw mess.owner
                if (!text) throw 'Masukkan Link Group!'
                if (!isUrl(args[0]) && !args[0].includes('whatsapp.com')) throw 'Link Invalid!'
                replyig(mess.wait)
                let result = args[0].split('https://chat.whatsapp.com/')[1]
                await kon.groupAcceptInvite(result).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
            case 'leave': {
                if (!isCreator) throw mess.owner
                await kon.groupLeave(m.chat).then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
            }
            break
	case 'kick': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kon.groupParticipantsUpdate(m.chat, [users], 'remove').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'add': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kon.groupParticipantsUpdate(m.chat, [users], 'add').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'promote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kon.groupParticipantsUpdate(m.chat, [users], 'promote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break
	case 'demote': {
		if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isAdmins) throw mess.admin
		let users = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text.replace(/[^0-9]/g, '')+'@s.whatsapp.net'
		await kon.groupParticipantsUpdate(m.chat, [users], 'demote').then((res) => m.reply(jsonformat(res))).catch((err) => m.reply(jsonformat(err)))
	}
	break

     case 'owner': case 'creator': {
kon.sendMessage(m.chat, { react: { text: `☕`, key: m.key }})
kon.sendContact(m.chat, global.owner, m)
}
break
case 'listpc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('.net')).map(v => v.id)
                 let teks = `⬣ *LIST PERSONAL CHAT*\n\nTotal Chat : ${anu.length} Chat\n\n`
                 for (let i of anu) {
                     let nama = store.messages[i].array[0].pushName
                     teks += `⬡ *Nama :* ${nama}\n⬡ *User :* @${i.split('@')[0]}\n⬡ *Chat :* https://wa.me/${i.split('@')[0]}\n\n────────────────────────\n\n`
                 }
                 kon.sendTextWithMentions(m.chat, teks, m)
             }
             break
                case 'listgc': {
                 let anu = await store.chats.all().filter(v => v.id.endsWith('@g.us')).map(v => v.id)
                 let teks = `⬣ *LIST GROUP CHAT*\n\nTotal Group : ${anu.length} Group\n\n`
                 for (let i of anu) {
                     let metadata = await kon.groupMetadata(i)
                     
                     teks += `⬡ *Nama :* ${metadata.subject}\n⬡ *Owner :* ${metadata.owner !== undefined ? '@' + metadata.owner.split`@`[0] : 'Tidak diketahui'}\n⬡ *ID :* ${metadata.id}\n⬡ *Dibuat :* ${moment(metadata.creation * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n⬡ *Member :* ${metadata.participants.length}\n\n────────────────────────\n\n`
                 }
                 kon.sendTextWithMentions(m.chat, teks, m)
             }
             break
            case 'imagenobg': case 'removebg': case 'remove-bg': {
	    if (!quoted) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (!/image/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    if (/webp/.test(mime)) throw `Kirim/Reply Image Dengan Caption ${prefix + command}`
	    let remobg = require('remove.bg')
	    let apirnobg = ['q61faXzzR5zNU6cvcrwtUkRU','S258diZhcuFJooAtHTaPEn4T','5LjfCVAp4vVNYiTjq9mXJWHF','aT7ibfUsGSwFyjaPZ9eoJc61','BY63t7Vx2tS68YZFY6AJ4HHF','5Gdq1sSWSeyZzPMHqz7ENfi8','86h6d6u4AXrst4BVMD9dzdGZ','xp8pSDavAgfE5XScqXo9UKHF','dWbCoCb3TacCP93imNEcPxcL']
	    let apinobg = apirnobg[Math.floor(Math.random() * apirnobg.length)]
	    hmm = await './src/remobg-'+getRandom('')
	    localFile = await kon.downloadAndSaveMediaMessage(quoted, hmm)
	    outputFile = await './src/hremo-'+getRandom('.png')
	    replyig(mess.wait)
	    remobg.removeBackgroundFromImageFile({
	      path: localFile,
	      apiKey: apinobg,
	      size: "regular",
	      type: "auto",
	      scale: "100%",
	      outputFile 
	    }).then(async result => {
	    kon.sendMessage(m.chat, {image: fs.readFileSync(outputFile), caption: mess.success}, { quoted : m })
	    await fs.unlinkSync(localFile)
	    await fs.unlinkSync(outputFile)
	    })
	    }
	    break
	case 'sc': {
		let buttons = [
                    {buttonId: `menu`, buttonText: {displayText: 'Back to Menu'}, type: 1},
                ]
                let buttonMessage = {
                    text: `*Gak Ada Bang*`,
                    footer: global.poter,
                    buttons: buttons,
                    headerType: 2
                }
           kon.sendMessage(m.chat, buttonMessage, { quoted: m })
                }
                break
case 'emoji':case 'semoji':{
						replyig(mess.wait) 
									if (!text) throw `Example : !semoji 😁`
									emoji.get(`${text}`).then(emoji => {
										teks = `${emoji.images[4].url}`
										kon.sendImageAsSticker(m.chat, teks, m, { packname: global.packname, author: global.author })
									})
									}
									break
	case 'sticker': case 's': case 'stickergif': case 'sgif': {
            if (!quoted) throw`Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`
            replyig(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await kon.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await kon.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`
                }
            }
            break
    case 'bcs': case 'bcs':{
                if (!isCreator) throw mess.owner
                let getGroups = await kon.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)              
                for (let i of anu) {
                    await sleep(1500)         
                if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await kon.sendImageAsSticker(i, media, ftoko, { packname: global.packname, author: global.author })
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await kon.sendVideoAsSticker(i, media, ftoko, { packname: global.packname, author: global.author })
            } else {
                throw `Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`
                }
                }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
    case 'triggered': case 'gay': case 'glass': case 'passed': case 'jail': case 'comrade':case 'green': case 'blue': case 'sepia': case 'wasted': case 'greyscale': case 'blurple2': case 'blurple': case 'red': case 'invertgreyscale': case 'invert':{
                    replyig(mess.wait)
					if (!/image/.test(mime)) return replyig(`Kirim/Reply Foto Dengan Caption ${prefix + command}`)
					mee = await kon.downloadAndSaveMediaMessage(quoted)
                    mem = await TelegraPh(mee)
					anu4 = await getBuffer(`https://some-random-api.ml/canvas/${command}?avatar=${mem}`)
					memek = await kon.sendImageAsSticker(m.chat, anu4, m, { packname: global.packname, author: global.author })
  await fs.unlinkSync(memek)
}
					break
  case 'memegen': case 'smeme2': {
  if (!text) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks|teks*`)
  if (!text.includes('|')) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks|teks*`)
  if (!/image/.test(mime)) return m.reply(`Kirim/Reply Foto Dengan Caption ${prefix + command} *teks|teks*`)
  replyig(mess.wait)
  arg = args.join(' ')
  atas = arg.split('|')[0]
  bawah = arg.split('|')[1]
  let abeb = await kon.downloadAndSaveMediaMessage(quoted)
  let abe = await TelegraPh(abeb).catch(err => {
m.reply("Harus Menggunakan Gambar")
})
  let upz = `https://api.memegen.link/images/custom/${atas}/${bawah}.png?background=${util.format(abe)}`
  kon.sendImageAsSticker(m.chat, upz, m, { packname: global.packname, author: global.author }).catch(err => {
m.reply("Caranya Kirim/Reply Gambar dengan caption .smeme teks|teks")
})
 
  }
  break
    case 'wm': case 'swm': {
    	if (!text) throw `Example : !swm zBOT.Botz`
    	   top = text.split('|')[0]
           bot = text.split('|')[1]
            if (!quoted) throw`Example : #swm ©zBot|ArulGanz`
            replyig(mess.wait)
                    if (/image/.test(mime)) {
                let media = await quoted.download()
                let encmedia = await kon.sendImageAsSticker(m.chat, media, m, { packname: top, author: bot })
                await fs.unlinkSync(encmedia)
            } else if (/video/.test(mime)) {
                if ((quoted.msg || quoted).seconds > 11) return m.reply('Maksimal 10 detik!')
                let media = await quoted.download()
                let encmedia = await kon.sendVideoAsSticker(m.chat, media, m, { packname: top, author: bot })
                await fs.unlinkSync(encmedia)
            } else {
                throw `Send Image/Video With Caption ${prefix + command}\nVideo Duration 1-9 Seconds`
                }
            }
            break
	case 'toimage': case 'toimg': {
                if (!quoted) m.reply('Reply Sticker')
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                replyig(mess.wait)
                let media = await kon.downloadAndSaveMediaMessage(quoted)
                let ran = await getRandom('.png')
                exec(`ffmpeg -i ${media} ${ran}`, (err) => {
                    fs.unlinkSync(media)
                    if (err) throw err
                    let buffer = fs.readFileSync(ran)
                    kon.sendMessage(m.chat, { image: buffer, caption : mess.success}, { quoted: m })
                    fs.unlinkSync(ran)
                })
            }
            break
            case 'emojimix': {
	        if (!text) throw `Example : ${prefix + command} 😀+😁`
		let [emoji1, emoji2] = text.split`+`
		let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
		for (let res of anu.results) {
		    let encmedia = await kon.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
		    await fs.unlinkSync(encmedia)
		}
	    }
	    break
	case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
                try {
                let set
                if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
                if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
                if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
                if (/earrape/.test(command)) set = '-af volume=12'
                if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
                if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
                if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
                if (/reverse/.test(command)) set = '-filter_complex "areverse"'
                if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
                if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
                if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
                if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
                if (/audio/.test(mime)) {
                replyig(mess.wait)
                let media = await kon.downloadAndSaveMediaMessage(quoted)
                let ran = getRandom('.mp3')
                exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
                fs.unlinkSync(media)
                if (err) return m.reply(err)
                let buff = fs.readFileSync(ran)
                kon.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
                fs.unlinkSync(ran)
                })
                } else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
                } catch (e) {
                m.reply(e)
                }
                break
    case 'whatmusic':{
let media = await kon.downloadAndSaveMediaMessage(quoted)
let ky = await xfar.search.whatmusic(media)
console.log(ky)
}
break
	case 'toaud': case 'toaudio': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan Audio Dengan Caption ${prefix + command}`
            replyig(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            kon.sendMessage(m.chat, {audio: audio, mimetype: 'audio/mpeg'}, { quoted : m })
            }
            break
              case 'mediafire': {
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
if (!text) return replyig('Linknya...? ')
replyig(mess.wait)

const baby1 = await fetchJson(`https://docs-jojo.herokuapp.com/api/mediafire?url=${text}`)
///if (baby1[0].filesize('MB')[0] >= 120) return replyig('*File Terlalu Besar* '+util.format(baby1))
const result4 = `*MEDIAFIRE DOWNLOADER*
				
*Name* : ${baby1.filename}
*Size* : ${baby1.filesize}
*Mime* : ${baby1.filetype}
*Link* : ${text}`
replyig(`${result4}`)
kon.sendMessage(m.chat, { document : { url : baby1.url}, fileName : baby1.filename, mimetype: 'application/zip' }, { quoted : m }).catch ((err) => replyig('Lagi Eror...'))
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply('1 Limit Telah Di Gunakan')
}
break
              case 'mediafire2':{
            if (!isCreator) throw mess.owner
            if (/document/.test(mime)) throw `Link?`
            if (!text) throw `Example : ${prefix + command} https://mediafire.com/snekjdakkk`
rescun = await mediafiredl(text)
       replyig(mess.wait)
result = `
➸「MediaFire Download」
├ Nama : ${rescun[0].nama}
├ Ukuran : ${rescun[0].size}
└ Link : ${rescun[0].link}`
replyig(result)
linkk = `${rescun[0].link}`
kon.sendMessage(m.chat, {document: {url: `${rescun[0].link}`}, mimetype: `${rescun[0].mime}`, fileName: `${rescun[0].nama}`}, { quoted : m })
}
break
            case 'tomp3': {
            if (/document/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            if (!quoted) throw `Kirim/Reply Video/Audio Yang Ingin Dijadikan MP3 Dengan Caption ${prefix + command}`
            replyig(mess.wait)
            let media = await quoted.download()
            let { toAudio } = require('./lib/converter')
            let audio = await toAudio(media, 'mp4')
            kon.sendMessage(m.chat, {document: audio, mimetype: 'audio/mpeg', fileName: `Convert By ${kon.user.name}.mp3`}, { quoted : m })
            }
            break
            case 'tovn': case 'toptt': {
            if (!/video/.test(mime) && !/audio/.test(mime)) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            if (!quoted) throw `Reply Video/Audio Yang Ingin Dijadikan VN Dengan Caption ${prefix + command}`
            replyig(mess.wait)
            let media = await quoted.download()
            let { toPTT } = require('./lib/converter')
            let audio = await toPTT(media, 'mp4')
            kon.sendMessage(m.chat, {audio: audio, mimetype:'audio/mpeg', ptt:true }, {quoted:m})
            }
            break
	        case 'tomp4': case 'tovideo': {
                if (!quoted) m.reply('Reply Sticker Gif')
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                replyig(mess.wait)
                let media = await kon.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await kon.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: mess.success} }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
            case 'togif': {
                if (!quoted) m.reply('Reply Image')
                if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
                replyig(mess.wait)
                let media = await kon.downloadAndSaveMediaMessage(quoted)
                let webpToMp4 = await webp2mp4File(media)
                await kon.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
                await fs.unlinkSync(media)
            }
            break
              case 'ping': case 'botstatus': case 'statusbot': {
              kon.sendMessage(m.chat, { react: { text: `😉`, key: m.key }})
                respon = `
Kecepatan Respon ${latensi.toFixed(4)} _Second_ \n ${oldd - neww} _miliseconds_\n\nRuntime : ${runtime(process.uptime())}

🗂Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
                `.trim()
                kon.sendMessage(m.chat, { caption: respon, location: { jpegThumbnail: todol}, templateButtons: buttonsDefault, footer: global.poter, quoted: m })
            }
            break
            case 'tesbut':{
            let txtg = `ngetes`
            kon.sendMessage(m.chat, { text: txtg, footer: global.poter, templateButtons: tesbut, quoted:m})
}
break
            case 'bcgc': case 'bcgroup': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} BroadCast`
                let getGroups = await kon.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)         
                      let txt = `🎗  *Broadcast* ??\n\n${text}`
                     
var tidtoodd8 = [
						{ urlButton: { displayText: `Group zBot`, url : `https://chat.whatsapp.com/C3jhijq3xS0AVuJykrhxMn` } },
			{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } },
			{ quickReplyButton: { displayText: `Menu`, id: `${prefix}menu` } },
				]
kon.sendMessage(i, { text: txt, footer: global.poter, templateButtons: tidtoodd8, quoted: ftoko})
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bcimage': case 'bcimg':{
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} BroadCast`
                let meel = await kon.downloadAndSaveMediaMessage(quoted)
                mem = fs.readFileSync(meel)
                let getGroups = await kon.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)         
                      let txt = `Broadcast Image by ZBot`
                     
var but = [{buttonId: `owner`, buttonText: { displayText: 'Owner' }, type: 1 },{buttonId: `menu`, buttonText: { displayText: 'Menu' }, type: 1 }]
kon.sendMessage(i, { caption: text, image: mem, buttons: but, footer: txt }, { quoted: ftoko })
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bcv':{
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} BroadCast`
                let meel = await kon.downloadAndSaveMediaMessage(quoted)
                let getGroups = await kon.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)         
                      let txt = `Broadcast ZBot`
                     let bufff = fs.readFileSync(meel)
var but = [{buttonId: `owner`, buttonText: { displayText: 'Owner' }, type: 1 },{buttonId: `menu`, buttonText: { displayText: 'Menu' }, type: 1 }]
kon.sendMessage(i, { caption: text, video: bufff, buttons: but, footer: txt }, { quoted: ftoko })
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bcv2':{
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} BroadCast`
                let meel = await kon.downloadAndSaveMediaMessage(quoted)
                let getGroups = await kon.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)         
                    let bufff = fs.readFileSync(meel)
kon.sendMessage(i, { video: bufff, mimetype: 'video/mp4', fileName: `Broadcast.mp4`, caption: text, viewOnce:true}, { quoted: m })
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'bcaudio': case 'bca':{
                if (!isCreator) throw mess.owner           
                let buff = await kon.downloadAndSaveMediaMessage(quoted)
                let getGroups = await kon.groupFetchAllParticipating()
                let groups = Object.entries(getGroups).slice(0).map(entry => entry[1])
                let anu = groups.map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Group Chat, Waktu Selesai ${anu.length * 1.5} detik`)
                for (let i of anu) {
                    await sleep(1500)         
                      let bufff = fs.readFileSync(buff)
                      kon.sendMessage(i, { audio: bufff, mimetype: 'audio/mpeg' }, { quoted : ftoko })
                    }
                m.reply(`Sukses Mengirim Broadcast Ke ${anu.length} Group`)
            }
            break
            case 'getcase':
if (!isCreator) return replyig(mess.owner)
const getCase = (cases) => {
return "case"+`'${cases}'`+fs.readFileSync("./kon.js").toString().split('case \''+cases+'\'')[1].split("break")[0]+"break"
}
m.reply(`${getCase(q)}`)
break
case 'setexif': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.packname = text.split("|")[0]
          global.author = text.split("|")[1]
          m.reply(`Exif berhasil diubah menjadi\n\n⭔ Packname : ${global.packname}\n⭔ Author : ${global.author}`)
            }
            break
case 'setfooter': {
               if (!isCreator) throw mess.owner
               if (!text) throw `Example : ${prefix + command} packname|author`
          global.poter = `${text}`
          m.reply(`Footer berhasil diubah menjadi\n\n⭔ Footer : ${global.poter}`)
            }
            break
case 'sticktele': case 'telesticker': case 'telestick': case 'stickertele':{
if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group! Karena Dapat Menyebabkan Spam')
if (!text) throw `Example : ${prefix + command} https://t.me/addstickers/rndomnih`
replyig(mess.wait)

let packName = args[0].replace("https://t.me/addstickers/", "")
let gas = await fetchJson(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getStickerSet?name=${encodeURIComponent(packName)}`, { method: "GET", headers: { "User-Agent": "GoogleBot" } })
m.reply(`*Total stiker:* ${gas.result.stickers.length}
*Estimasi selesai:* ${gas.result.stickers.length * 1.5} detik`.trim())
for (let i = 0; i < gas.result.stickers.length; i++) {
        let fileId = gas.result.stickers[i].thumb.file_id
        let gasIn = await fetchJson(`https://api.telegram.org/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/getFile?file_id=${fileId}`)
        let stick = "https://api.telegram.org/file/bot891038791:AAHWB1dQd-vi0IbH2NjKYUk-hqQ8rQuzPD4/" + gasIn.result.file_path
        let media = await getBuffer(stick)
        kon.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: global.author })}
        db.data.users[m.sender].limit -= 1 // -1 limit
m.reply('1 Limit Telah Di Gunakan')
}
break
case 'attp': {
if (!text) throw `text nya...?`
replyig(mess.wait)
const buff = await getBuffer(`https://hardianto.xyz/api/maker/attp?text=${encodeURIComponent(q)}&apikey=hardianto`)
kon.sendMessage(m.chat, { sticker : buff}) 
}
break
case'attp2': {
if (!text) throw `text nya...?`
replyig(mess.wait)
const buff = await getBuffer(`https://api.xteam.xyz/${command}?file&text=${encodeURIComponent(q)}`)
kon.sendMessage(m.chat, { sticker : buff}) 
}
break
case 'ttp':{
if (!text) throw `text nya...?`
let ih = `https://hardianto.xyz/api/maker/ttp?text=${encodeURIComponent(q)}&apikey=hardianto`
buff = await getBuffer(ih)
kon.sendImageAsSticker(m.chat, buff, m, { packname: global.packname, author: global.author })
}
break
case 'ttpcustom':{
if (!text) throw `text nya...?`
if (!text.includes('|')) return m.reply(`Kek Gini Caranya ${prefix + command} *teks|warna*\n\nBerikut List Warnanya : 
1. black
2. yellow
3. red
4. green
5. blue
6. brown
7. grey
8. pink
9. gold
10. purple`)
  arg = args.join(' ')
  atas = arg.split('|')[0]
  bawah = arg.split('|')[1]
let ih = `https://hardianto.xyz/api/ttpcustom?text=${encodeURIComponent(atas)}&color=${bawah}&apikey=hardianto`
buff = await getBuffer(ih)
kon.sendImageAsSticker(m.chat, buff, m, { packname: global.packname, author: global.author })
}break
case 'sendsticker':
if (!text) throw `Url nya.....?\n *Note : Harus Berupa Url Gambar*`
buff = await getBuffer(args[0])
kon.sendMessage(m.chat, { sticker : buff}) 
break
            case 'bc': case 'broadcast': case 'bcall': {
                if (!isCreator) throw mess.owner
                if (!text) throw `Text mana?\n\nExample : ${prefix + command} BroadCast`
                let anu = await store.chats.all().map(v => v.id)
                m.reply(`Mengirim Broadcast Ke ${anu.length} Chat\nWaktu Selesai ${anu.length * 1.5} detik`)
		for (let yoi of anu) {
                      let txt = `🎗  *Broadcast*  🎗\n\n${text}`
                      
var tidtoodd8 = [
						{ urlButton: { displayText: `Group zBot`, url : `https://chat.whatsapp.com/C3jhijq3xS0AVuJykrhxMn` } },
			{ quickReplyButton: { displayText: `Owner`, id: `${prefix}owner` } },
			{ quickReplyButton: { displayText: `Menu`, id: `${prefix}menu` } },
				]
kon.sendMessage(yoi, { text: txt, footer: global.poter, templateButtons: tidtoodd8, quoted: ftoko})
		}
		m.reply('Sukses Broadcast')
            }
            break
            case 'wikipedia': {
                if (!text) throw 'Masukkan Query Title'
		let { wikimedia } = require('./lib/scraper')
                anu = await wikimedia(text)
                result = anu[Math.floor(Math.random() * anu.length)]
                cap =`🐣Title : ${result.title}`
                let message = await prepareWAMessageMedia({ image: { url: result.image } }, { upload: kon.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: cap,
                            hydratedFooterText: global.poter,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'URL Hasil',
                                    url: `${result.source}`
                                }
                            }, {
                                urlButton: {
                                    displayText: 'Media URL',
                                    url: `${result.image}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Owner',
                                    id: `owner`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Command Bot',
                                    id: `menu`
                                }  
                            }, {
                                quickReplyButton: {
                                    displayText: 'Next',
                                    id: `wikipedia ${text}`
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                kon.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
            case 'info':{
   let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
nat = `
➤ *Info Bot*➤
┃➸ *Kecepatan Bot* ${latensi.toFixed(4)} detik
┃➸ *Runtime Bot* ${runtime(process.uptime())}
┃𝑵𝒐𝒕𝒆 : 𝑱𝒂𝒏𝒈𝒂𝒏 𝑺𝒑𝒂𝒎!!, 
┃𝑱??𝒌𝒂 𝑭𝒊𝒕𝒖𝒓 𝑻𝒊𝒅𝒂?? 𝑾𝒐𝒓𝒌 𝑳𝒂𝒑??𝒓𝒌𝒂𝒏 𝑲𝒆 𝑶𝒘𝒏𝒆𝒓, 
┃𝑲𝒆𝒕𝒊𝒌 .𝒐𝒘𝒏𝒆𝒓 𝑼𝒏𝒕𝒖𝒌 𝑵𝒐𝒎𝒐𝒓 𝑶𝒘𝒏𝒆𝒓.
┗━━━━━━━ `
let message = await prepareWAMessageMedia({ image: fs.readFileSync('./lib/hisoka.jpg') }, { upload: kon.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: nat,
                            hydratedFooterText: global.poter,
                            hydratedButtons: [{
                                urlButton: {
                                    displayText: 'Group ©zBot',
                                    url: 'https://chat.whatsapp.com/C3jhijq3xS0AVuJykrhxMn'
                                }
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                kon.relayMessage(m.chat, template.message, { messageId: template.key.id })
            }
            break
  case 'yuri': case 'pussy': case 'panties': case 'orgy': case 'neko': case 'masturbation': case 'jahy': case 'glasses': case 'gangbang': case 'foot': case 'femdom': case 'ero': case 'cum': case 'cuckkold': case 'blowjob': case 'bdsm': case 'ahegao': case 'ass':{
 	if (m.isGroup) return m.reply('Fitur Tidak Dapat Digunakan Untuk Group!')
 replyig(mess.wait)
  var data = await fetchJson(`https://docs-jojoapi.herokuapp.com/api/nsfw/ass?apikey=Syaa`)
var but = [{buttonId: `${command}`, buttonText: { displayText: 'Next Photo' }, type: 1 }]
					kon.sendMessage(m.chat, { caption: mess.success, image: { url: data.result }, buttons: but, footer: 'Pencet tombol dibawah untuk foto selanjutnya' }, { quoted: m })
					}
					break
        case 'yts': case 'ytsearch': {
        	    kon.sendMessage(m.chat, { react: { text: `🔎`, key: m.key }})
                if (!text) throw `Example : ${prefix + command} story wa anime`
                replyig(mess.wait)
                let yts = require("yt-search")
                let search = await yts(text)
                let teks = 'YouTube Search\n\n Result From '+text+'\n\n'
                let no = 1
                for (let i of search.all) {
                    teks += `🎬 No : ${no++}\n📃 Type : ${i.type}\n📷 Video ID : ${i.videoId}\n🗂 Title : ${i.title}\n🚹 Views : ${i.views}\n⏳ Duration : ${i.timestamp}\n🗓 Upload At : ${i.ago}\n🗿 Author : ${i.author.name}\n🖇 Url : ${i.url}\n\n`
                }
                kon.sendMessage(m.chat, { image: { url: search.all[0].thumbnail },  caption: teks }, { quoted: m })
            }
            break
        case 'google': {
                if (!text) throw `Example : ${prefix + command} Gawr Gura`
                replyig(mess.wait)
                let google = require('google-it')
                google({'query': text}).then(res => {
                let teks = `Google Search From : ${text}\n\n`
                for (let g of res) {
                teks += `🐣 *Title* : ${g.title}\n`
                teks += `🐣 *Description* : ${g.snippet}\n`
                teks += `🐣 *Link* : ${g.link}\n\n`
                } 
                m.reply(teks)
                })
                }
                break
        case 'gimage': {
        if (!text) throw `Example : ${prefix + command} kaori cicak`
        replyig(mess.wait)
        let gis = require('g-i-s')
        gis(text, async (error, result) => {
        n = result
        images = n[Math.floor(Math.random() * n.length)].url
        let buttons = [
                    {buttonId: `gimage ${text}`, buttonText: {displayText: 'Next Image'}, type: 1}
                ]
                let buttonMessage = {
                    image: { url: images },
                    caption: `*-------🐣 GIMAGE SEARCH 🐣-------*
🐣  *Query* : ${text}
🗂 *Media Url* : ${images}`,
                    footer: global.poter,
                    buttons: buttons,
                    headerType: 4
                }
                kon.sendMessage(m.chat, buttonMessage, { quoted: m })
        })
        }
        break
        case 'q': case 'quoted': {
		if (!m.quoted) return m.reply('Reply Pesannya!!')
		let wokwol = await kon.serializeM(await m.getQuotedObj())
		if (!wokwol.quoted) return m.reply('Pesan Yang anda reply tidak mengandung reply')
		await wokwol.quoted.copyNForward(m.chat, true)
            }
	    break
	    case 'group': case 'grup': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                if (!isGroupAdmins && !isGroupOwner) throw mess.admin
                if (args[0] === 'close'){
                    await kon.groupSettingUpdate(m.chat, 'announcement').then((res) => m.reply(`Sukses Menutup Group`)).catch((err) => m.reply(jsonformat(err)))
                } else if (args[0] === 'open'){
                    await kon.groupSettingUpdate(m.chat, 'not_announcement').then((res) => m.reply(`Sukses Membuka Group`)).catch((err) => m.reply(jsonformat(err)))
                } else {
                	anu = `*Setelan Group*`
                buttonsDefault3 = [
			{ urlButton: { displayText: `Group Bot`, url : `https://chat.whatsapp.com/C3jhijq3xS0AVuJykrhxMn` } },
			{ quickReplyButton: { displayText: `Group Open`, id: `group open` } },
			{ quickReplyButton: { displayText: `Group Close`, id: `group close` } }
		]
				kon.sendMessage(m.chat, { text: anu, footer: global.poter, templateButtons: buttonsDefault3, quoted: m} )

             }
            }
            break
            case 'linkgroup': case 'linkgc': {
                if (!m.isGroup) throw mess.group
                if (!isBotAdmins) throw mess.botAdmin
                let response = await kon.groupInviteCode(m.chat)
                tek = `https://chat.whatsapp.com/${response}\n\nLink Group : ${groupMetadata.subject}`
                kon.sendMessage(m.chat, { caption: tek, location: { jpegThumbnail: todol}, templateButtons: buttonsDefault, footer: global.poter, quoted: m })
            }
            break
        case 'play': case 'ytplay': {
        	    if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
	           
                if (!text) throw `Example : ${prefix + command} story wa anime`
                replyig(mess.wait)
                
                let yts = require("yt-search")
                let search = await yts(text)
                let anu = search.videos[Math.floor(Math.random() * search.videos.length)]
                    caption = `
🐣 Title : ${anu.title}
🗂 Ext : Search
🎬 ID : ${anu.videoId}
⏳ Duration : ${anu.timestamp}
📷 Viewers : ${anu.views}
🗓 Upload At : ${anu.ago}
🚹 Author : ${anu.author.name}
📃 Channel : ${anu.author.url}
👍 Description : ${anu.description}
🖇 Url : ${anu.url}`
     let message = await prepareWAMessageMedia({ image:  { url: anu.thumbnail } }, { upload: kon.waUploadToServer })
                const template = generateWAMessageFromContent(m.chat, proto.Message.fromObject({
                    templateMessage: {
                        hydratedTemplate: {
                            imageMessage: message.imageMessage,
                            hydratedContentText: caption,
                            hydratedFooterText: global.poter,
                            hydratedButtons: [{
                                quickReplyButton: {
                                    displayText: 'Music',
                                    id: `ytmp3 ${anu.url}`
                                }
                            }, {
                                quickReplyButton: {
                                    displayText: 'Video',
                                    id: `ytmp4 ${anu.url}`
                                }  
                            }]
                        }
                    }
                }), { userJid: m.chat, quoted: m })
                kon.relayMessage(m.chat, template.message, { messageId: template.key.id })
                db.data.users[m.sender].limit -= 1 // -1 limit
m.reply('1 Limit Telah Di Gunakan')
            }
            break
        case 'tourl': {
                replyig(mess.wait)
		let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
                let media = await kon.downloadAndSaveMediaMessage(quoted)
                if (/image/.test(mime)) {
                    let anu = await TelegraPh(media)
                    m.reply(util.format(anu))
                } else if (!/image/.test(mime)) {
                    let anu = await UploadFileUgu(media)
                    m.reply(util.format(anu))
                }
                await fs.unlinkSync(media)
            }
            break
	    case 'ytmp3': case 'ytaudio': {
		        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		        
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 128kbps`
                replyig(mess.wait)
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                anu = `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}\n\n*Mohon tunggu sebentar media sedang dikirim...*`
                replygrup(anu)
                kon.sendMessage(m.chat, {audio:{url: media.dl_link}, mimetype:"audio/mp4", ptt:false, contextInfo:{externalAdReply:{
title:media.title,
body:"Downloader Youtube MP3 by zBot",
thumbnail: tamnel,
mediaType:1,
mediaUrl: `https://instagram.com/_daaa_1`,
sourceUrl: `https://instagram.com/_daaa_1`
}}}, {quoted:ftoko})
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply('1 Limit Telah Di Gunakan')
            }
            break
            case 'ytmp4': case 'ytvideo': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} https://youtube.com/watch?v=PtFMh6Tccag%27 360p`
                replyig(mess.wait)
                let quality = args[1] ? args[1] : '480p'
                let media = await ytv(text, quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                anu = `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '480p'}`
                let buttons = [
{buttonId: `${prefix}ytmp3 ${text}`, buttonText: {displayText: `Audio`}, type: 1}
]
let buttonMessage = {
video: {url:media.dl_link},
caption: anu,
footer: global.poter,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"Youtube Downloader Video",
body:"Downloader by zBot",
thumbnail: tamnel,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
kon.sendMessage(m.chat, buttonMessage, {quoted:m})
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply('1 Limit Telah Di Gunakan')
            }
            break
            
           
	    case 'getmusic': {
		        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
		        
                let { yta } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
		let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                replyig(mess.wait)
                let quality = args[1] ? args[1] : '128kbps'
                let media = await yta(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                anu = `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '128kbps'}\n\n*Mohon tunggu sebentar media sedang di kirim....*`
                replygrup(anu)
                kon.sendMessage(m.chat, {audio:{url: media.dl_link}, mimetype:"audio/mp4", ptt:false, contextInfo:{externalAdReply:{
title:media.title,
body:"Downloader Youtube MP3 by zBot",
thumbnail: tamnel,
mediaType:1,
mediaUrl: `https://instagram.com/_daaa_1`,
sourceUrl: `https://instagram.com/_daaa_1`
}}}, {quoted:m})
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply('1 Limit Telah Di Gunakan')
                    }
            break
            case 'getvideo': {
            	if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
                let { ytv } = require('./lib/y2mate')
                if (!text) throw `Example : ${prefix + command} 1`
                if (!m.quoted) return m.reply('Reply Pesan')
                if (!m.quoted.isBaileys) throw `Hanya Bisa Membalas Pesan Dari Bot`
                let urls = quoted.text.match(new RegExp(/(?:https?:\/\/)?(?:youtu\.be\/|(?:www\.|m\.)?youtube\.com\/(?:watch|v|embed|shorts)(?:\.php)?(?:\?.*v=|\/))([a-zA-Z0-9\_-]+)/, 'gi'))
                if (!urls) throw `Mungkin pesan yang anda reply tidak mengandung result ytsearch`
                replyig(mess.wait)
                let quality = args[1] ? args[1] : '480p'
                let media = await ytv(urls[text - 1], quality)
                if (media.filesize >= 100000) return m.reply('File Melebihi Batas '+util.format(media))
                anu = `⭔ Title : ${media.title}\n⭔ File Size : ${media.filesizeF}\n⭔ Url : ${isUrl(text)}\n⭔ Ext : MP3\n⭔ Resolusi : ${args[1] || '480p'}` 
                let buttons = [
{buttonId: `${prefix}menu`, buttonText: {displayText: `Back to Menu`}, type: 1}
]
let buttonMessage = {
video: {url:media.dl_link},
caption: anu,
footer: global.poter,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:"Youtube Downloader Video",
body:"Downloader by zBot",
thumbnail: tamnel,
mediaType:1,
mediaUrl: args[0],
sourceUrl: args[0]
}}
}
kon.sendMessage(m.chat, buttonMessage, {quoted:m})
db.data.users[m.sender].limit -= 1 // -1 limit
m.reply('1 Limit Telah Di Gunakan')
            }
            break
            case 'delete': case 'del': {
                if (!m.quoted) throw false
                let { chat, fromMe, id, isBaileys } = m.quoted
                if (!isBaileys) throw 'Pesan tersebut bukan dikirim oleh bot!'
                kon.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: true, id: m.quoted.id, participant: m.quoted.sender } })
            }
            break
            case 'tagall': {
                if (!m.isGroup) throw mess.group
let teks = `══✪〘 *👥 Tag All* 〙✪══
 
 ➲ *Pesan : ${q ? q : 'kosong'}*\n\n`
                for (let mem of participants) {
                teks += `⭔ @${mem.id.split('@')[0]}\n`
                }
                kon.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) }, { quoted: m })
                }
                break
                case 'hidetag': {
            if (!m.isGroup) throw mess.group
            kon.sendMessage(m.chat, { text : q ? q : '' , mentions: participants.map(a => a.id)}, { quoted: m })
            }
            break
           
            default:
                if (budy.startsWith('=>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    function Return(sul) {
                        sat = JSON.stringify(sul, null, 2)
                        bang = util.format(sat)
                            if (sat == undefined) {
                                bang = util.format(sul)
                            }
                            return m.reply(bang)
                    }
                    try {
                        m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
                    } catch (e) {
                        m.reply(String(e))
                    }
                }

                if (budy.startsWith('>')) {
                    if (!isCreator) return m.reply(mess.owner)
                    try {
                        let evaled = await eval(budy.slice(2))
                        if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
                        await m.reply(evaled)
                    } catch (err) {
                        m = String(err)
                        await m.reply(m)
                    }
                }

                if (budy.startsWith('$')) {
                    if (!isCreator) return m.reply(mess.owner)
                    exec(budy.slice(2), (err, stdout) => {
                        if(err) return m.reply(err)
                        if (stdout) return m.reply(stdout)
                    })
                }
                
			
		if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
                    this.anonymous = this.anonymous ? this.anonymous : {}
                    let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
                    if (room) {
                        if (/^.*(next|leave|start)/.test(m.text)) return
                        if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
                        let other = [room.a, room.b].find(user => user !== m.sender)
                        m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
                            contextInfo: {
                                ...m.msg.contextInfo,
                                forwardingScore: 0,
                                isForwarded: true,
                                participant: other
                            }
                        } : {})
                    }
                    return !0
                }
			
		if (isCmd && budy.toLowerCase() != undefined) {
		    if (m.chat.endsWith('broadcast')) return
		    if (m.isBaileys) return
		    let msgs = global.db.data.database
		    if (!(budy.toLowerCase() in msgs)) return
		    kon.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
		}
        }
        

    } catch (err) {
        m.reply(util.format(err))
    }
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
