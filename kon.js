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
//●●●●●●●●●●●●●●●●●●●●●● UKURAN GAMBAR LOKASI SETTING●●●●●●●●●●●●●●●●●●●●●●        
const reSize = async(buffer, ukur1, ukur2) => {
    return new Promise(async(resolve, reject) => {
        var baper = await Jimp.read(buffer);
        var ab = await baper.resize(ukur1, ukur2).getBufferAsync(Jimp.MIME_JPEG)
        resolve(ab)
    })
}
const todol = await reSize(tamnel, 200, 200)      
const dooo = await reSize(tamn, 200, 200)      
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
 ⍨⃝⚠️ ${prefix}tiktok
 ⍨⃝⚠️ ${prefix}play
 ⍨⃝⚠️ ${prefix}ytmp3
 ⍨⃝⚠️ ${prefix}twitter
 ⍨⃝⚠️ ${prefix}instagram
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
