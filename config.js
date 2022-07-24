/**
   * Create By Dika Ardnt.
   * Contact Me on wa.me/6281229859085
   * Follow https://github.com/DikaArdnt
*/
const { exec, spawn, execSync } = require("child_process")
const moment = require("moment-timezone");
const speed = require('performance-now')
const fs = require('fs')
const chalk = require('chalk')
const { smsg, getGroupAdmins, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom } = require('./lib/myfunc')
moment.tz.setDefault("Asia/Jakarta").locale("id");
let timestamp = speed()
                let latensi = speed() - timestamp
                neww = performance.now()
                oldd = performance.now()
// Website Api
global.APIs = {
	zenz: 'https://zenzapi.xyz',
}

// Apikey Website Api
global.APIKeys = {
	'https://zenzapi.xyz': 'Your Key',
}

// Other
global.poter = `
® Z-Bot Whatsapp Multi-Device
`
global.owner = ['6281578859076','6285869134434','62815788590761']
global.premium = ['6281578859076']
global.ntilink = ['120363043965529911@g.us','120363022988111568@g.us']
global.packname = 'Sticker by'
global.author = 'zBot MultiDevice'
global.sessionName = 'kon'
global.prefa = ['','!','.','🐦','🐤','🗿']
global.sp = '⭔'
global.tamnel1 = fs.readFileSync('./lib/w.jpg')
global.tamnel2 = fs.readFileSync('./lib/l.jpg')
global.f1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.f2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.f3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.f4 = 'application/zip'
global.f5 = 'application/pdf'
global.f6 = 'application/vnd.android.package-archive'
global.mess = {
error: 'Sorry, this feature server is in error, we will fix it soon, try again in the next few days🙏🙏',
    success: 'Success',
    admin: 'Group Admin only (excluding group creators)',
    botAdmin: 'Bot Must Be Admin',
    owner: 'Owner Bot only',
    group: 'Only Can Be Used In Groups',
    private: 'Only Can Be Used In Private Chat',
    bot: 'Bot Number Only',
    wait: 'Process...',
    endLimit: 'Your Daily Limit Has Expired, Limit Will Be Reset Every 12 Noon, Try Again After 12 Noon',
}
global.limitawal = {
    premium: "19",
    free: "18",
}
global.limitpremium = '10'
global.limitfree = '10'
global.thumb = fs.readFileSync('./lib/hisoka.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
