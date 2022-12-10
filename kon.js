require('./config')
//●●●●●●●●●●●●●●●●●●●●●● CONST ●●●●●●●●●●●●●●●●●●●●●●
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType} = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { exec, spawn, execSync } = require("child_process")
const hx = require('hxz-api')
const xfar = require('xfarr-api')
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
var ucapanWaktu = 'Good night🌃'
}
if(time2 < "19:00:00"){
var ucapanWaktu = 'Good afternoon🌆'
}
if(time2 < "18:00:00"){
var ucapanWaktu = 'Good afternoon🌅'
}
if(time2 < "15:00:00"){
var ucapanWaktu = 'Good day🏙'
}
if(time2 < "11:00:00"){
var ucapanWaktu = 'Good morning🌁'
}
if(time2 < "05:00:00"){
var ucapanWaktu = 'Good morning🌉'
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
        //●●●●●●●●●●●●●●●●●●●●●● PUBLIC & SELF SETTING●●●●●●●●●●●●●●●●●●●●●●
        if (!kon.public) {
            if (!m.key.fromMe && !isCreator) return
        }

//●●●●●●●●●●●●●●●●●●●●●● AUTO RECORDING SETTING●●●●●●●●●●●●●●●●●●●●●●
        if (m.message) {
        kon.sendPresenceUpdate('recording', m.chat, m.sender, [m.key.id])
            console.log(chalk.black(chalk.bgWhite('[ PESAN ]')), chalk.black(chalk.bgGreen(new Date)), chalk.black(chalk.bgBlue(budy || m.mtype)) + '\n' + chalk.magenta('=> Dari'), chalk.green(pushname), chalk.yellow(m.sender) + '\n' + chalk.blueBright('=> Di'), chalk.green(m.isGroup ? pushname : 'Private Chat', m.chat))
        }
        let blocks = ['91', '92', '212', '20', '1', '94', '48', '49', '60']
        if (blocks.some(no => sender.startsWith(no))) return kon.updateBlockStatus(sender, 'block')
//●●●●●●●●●●●●●●●●●●●●●● UKURAN GAMBAR LOKASI SETTING●●●●●●●●●●●●●●●●●●●●●●        
const reSize = async(buffer, ukur1, ukur2) => {
    return new Promise(async(resolve, reject) => {
        var baper = await Jimp.read(buffer);
        var ab = await baper.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
        resolve(ab)
    })
}
const todol = await reSize(tamnel, 200, 200)      
const dooo = await reSize(tamnel, 200, 200)      
//●●●●●●●●●●●●●●●●●●●●●● BUTTONS SETTING●●●●●●●●●●●●●●●●●●●●●●
const butlink2 = [
    { urlButton: { displayText: `Link`, url : `${q}` } }
]

 let butlink = [
						{ urlButton: { displayText: `Link`, url : `${text}` } },
			{ quickReplyButton: { displayText: `Back to Menu`, id: `${prefix}menu` } },
				]
//●●●●●●●●●●●●●●●●●●●●●● REPLY SETTING●●●●●●●●●●●●●●●●●●●●●●*/
const replyig = m.reply
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
kon.setStatus(`zBot Aktif Selama ${runtime(process.uptime())} Mode : Public, Dengan Kecepatan ${latensi.toFixed(4)} Second`)

//●●●●●●●●●●●●●●●●●●●●●● CASE SETTING●●●●●●●●●●●●●●●●●●●●●●
switch(command) {
//Sticker
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
case 'smeme': {
            if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
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
//Makermenu
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
                kon.sendMessage(m.chat, { image: { url: anu }, caption: mess.success }, { quoted: m })
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

    case 'instagram':{
        if (!text) throw `Example : ${prefix + command} story wa anime`
        replyig(mess.wait)
        bocil.instagramdlv3(q).then(data => {
            for (let i of data) {
            if (i.url.includes('mp4')) {
            kon.sendMessage(from, { caption: ` Succes Download Video Instagram, Thanks For Using zBot`, video:{url:i.url},quoted:m} )
            } else {
            kon.sendMessage(from, { caption: ` Succes Download Image Instagram, Thanks For Using zBot`, image:{url:i.url},quoted:m} )
            }
            }
            })
            .catch((err) => {
            sticEror(from)
            })
    }
    break
    case 'menu':{
        let cap = `
🎗 *Hallo Kak ${pushname} ~ ${ucapanWaktu}*
🐣 *Runtime Bot : ${runtime(process.uptime())}*
🌀 *Speed Bot     : ${latensi.toFixed(4)} Second*
☕ *Tanggal         : ${moment.tz('Asia/Jakarta').format('DD / MM / YY')}*

 ⍨⃝⚠️ ${prefix}menu
 ⍨⃝⚠️ ${prefix}owner
𝐂𝐨𝐧𝐯𝐞𝐫𝐭
 ==⍨⃝🐣 ${prefix}sticker (reply gambar)
 ==⍨⃝🐣 ${prefix}swm (reply gambar)
 ==⍨⃝🐣 ${prefix}smeme (reply gambar)🇱
 ==⍨⃝🐣 ${prefix}smeme2 (reply gambar)🇱
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
 
𝐃𝐨𝐰𝐧𝐥𝐨𝐚𝐝
 ⍨⃝⚠️ ${prefix}tiktok
 ⍨⃝⚠️ ${prefix}play
 ⍨⃝⚠️ ${prefix}ytmp3
 ⍨⃝⚠️ ${prefix}twitter
 ⍨⃝⚠️ ${prefix}instagram
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
        kon.sendMessage(m.chat, { react: { text: `😉`, key: m.key }})
        let buttons = [
            {buttonId: `${prefix}owner`, buttonText: {displayText: 'Owner'}, type: 1}
            ]
            let buttonMessage = {
            document: tamnel,
            mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
            fileName: `Z-Bot Whatsapp MD`,
            fileLength: 99999999999999,
            caption: cap,
            footer: `Z-Bot Multidevice`,
            buttons: buttons,
            headerType: 4,
            contextInfo:{externalAdReply:{
            title:`Menu Z-Bot`,
            mediaType: 1,
            renderLargerThumbnail: true , 
            showAdAttribution: true, 
            jpegThumbnail: tamnel,
            mediaUrl: `instagram.com/_daaa_1`,
            thumbnail: tamnel,
            sourceUrl: ` `
            }}
            }
            kon.sendMessage(m.chat, buttonMessage, { quoted: m })
}
break
    case 'owner': case 'creator': {
        kon.sendMessage(m.chat, { react: { text: `☕`, key: m.key }})
        kon.sendContact(m.chat, global.owner, m)
        }
        break
    case 'twitter':{
        if (!text) throw `Example : ${prefix + command} urlnya`
        replyig(mess.wait)
        var data = await xfar.downloader.twitter(q).catch((err) => {
m.reply(mess.error)
})
        //if (data.data.size > '70 MB') return reply(`File Melebihi Batas Silahkan Download Sendiri\n*Link :* ${data.data.url}`)
        let vid = await getBuffer(`${data.quality_720}`).catch((err) => {
m.reply(mess.error)
})
        kon.sendMessage(m.chat, { video: vid, caption: data.caption }, { quoted: m }).catch((err) => {
m.reply(mess.error)
})
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
var data = await fetchJson('https://yt.nxr.my.id/yt2?url=' + anu.url + '&type=audio')
        if (data.data.size > '70 MB') return m.reply(`File Melebihi Batas Silahkan Download Sendiri\n*Link :* ${data.data.url}`)
  let med = await getBuffer(`${data.thumbnail}`)
    let cap = `
Tunggu Sekitar Beberapa Menit Ke Depan Media Sedang Di Kirim  

Judul : ${data.data.filename}
Size : ${data.data.size}
Durasi : ${data.data.duration}
`
let buttons = [
{buttonId: `${prefix}ytmp4 ${q}`, buttonText: {displayText: 'Video'}, type: 1}
]
let buttonMessage = {
document: tamnel,
mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
fileName: `Z-Bot Whatsapp MD`,
fileLength: 99999999999999,
caption: cap,
footer: `Z-Bot Multidevice`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`Play Youtube Mp3 Downloader`,
mediaType: 1,
renderLargerThumbnail: true , 
showAdAttribution: true, 
jpegThumbnail: med,
mediaUrl: `${q}`,
thumbnail: med,
sourceUrl: ` `
}}
}
kon.sendMessage(m.chat, buttonMessage, { quoted: m })
 kon.sendMessage(m.chat, { audio: { url: data.data.url }, mimetype: 'audio/mp4' }, { quoted: m })
    }
    break
    case 'ttmp3': case 'tiktokaudio':  
    if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
    if(!text) return replyig(`Penggunaan ${prefix + command} teks|teks`)
    replyig(mess.wait)  
			    bocil.tiktokdl(`${q}`).then( data => {
			      kon.sendMessage(m.chat, { audio: { url: data.video.no_watermark }, mimetype: 'audio/mp4' }, { quoted: m })
			       
				}).catch(() => sticEror(from))
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
            kon.sendMessage(m.chat, {document: {url: `${url}`}, mimetype: 'application/zip', fileName: `${filename}`}, { quoted : m })
        }
        break
    case 'ytmp3':{
        if (!text) throw 'urlnya?'
		replyig(mess.wait)
        var data = await fetchJson('https://yt.nxr.my.id/yt2?url=' + q + '&type=audio')
        if (data.data.size > '70 MB') return m.reply(`File Melebihi Batas Silahkan Download Sendiri\n*Link :* ${data.data.url}`)
  let med = await getBuffer(`${data.thumbnail}`)
    let cap = `
Tunggu Sekitar Beberapa Menit Ke Depan Media Sedang Di Kirim  

Judul : ${data.data.filename}
Size : ${data.data.size}
Durasi : ${data.data.duration}
`
let buttons = [
{buttonId: `${prefix}ytmp4 ${q}`, buttonText: {displayText: 'Video'}, type: 1}
]
let buttonMessage = {
document: tamnel,
mimetype: 'application/vnd.openxmlformats-officedocument.presentationml.presentation',
fileName: `Z-Bot Whatsapp MD`,
fileLength: 99999999999999,
caption: cap,
footer: `Z-Bot Multidevice`,
buttons: buttons,
headerType: 4,
contextInfo:{externalAdReply:{
title:`Play Youtube Mp3 Downloader`,
mediaType: 1,
renderLargerThumbnail: true , 
showAdAttribution: true, 
jpegThumbnail: med,
mediaUrl: `${q}`,
thumbnail: med,
sourceUrl: ` `
}}
}
kon.sendMessage(m.chat, buttonMessage, { quoted: m })
 kon.sendMessage(m.chat, { audio: { url: data.data.url }, mimetype: 'audio/mp4' }, { quoted: m })
}
break
    case 'tt': case 'ttmp4': case 'tiktok': case 'tiktoknowm':{
        if (!isPremium && global.db.data.users[m.sender].limit < 1) return m.reply(mess.endLimit) // respon ketika limit habis
        
        replyig(mess.wait)
        
        let res = await bocil.tiktokdl(text).catch(e => {
        m.reply(mess.erorr)
        })
        console.log(res)
        anutxt = `• Author : ${res.author.nickname}\n• Description : ${res.description}`
        let buttons = [
        {buttonId: `${prefix}tiktokaudio ${text}`, buttonText: {displayText: `Audio`}, type: 1}
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
        m.reply(mess.erorr)
        })
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
