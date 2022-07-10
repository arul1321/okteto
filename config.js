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
☕Hosting Zbot by Heroku.com
`
global.owner = ['6281578859076','6285869134434','62815788590761']
global.ntilink = ['120363043965529911@g.us','120363022988111568@g.us']
global.packname = 'Sticker by'
global.author = 'zBot [62815788590761]'
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
    success: 'Success',
    admin: 'Khusus Admin Group (tidak termasuk pembuat group)',
    botAdmin: 'Bot Harus Menjadi Admin',
    owner: 'Khusus Owner Bot',
    group: 'Hanya Bisa Digunakan Di Group',
    private: 'Hanya Bisa Digunakan Di Private Chat',
    bot: 'Khusus Nomor Bot',
    wait: 'Proses...',
}
global.thumb = fs.readFileSync('./lib/hisoka.jpg')

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
