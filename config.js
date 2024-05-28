const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349063714313";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '5'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_16_01_05_28_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTMsXG4gICAgICAgIDEzMixcbiAgICAgICAgODEsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMDEsXG4gICAgICAgIDgyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjA5LFxuICAgICAgICA5OCxcbiAgICAgICAgNDgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMjM4LFxuICAgICAgICA5MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAyMixcbiAgICAgICAgNDMsXG4gICAgICAgIDEzMixcbiAgICAgICAgNzEsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjExLFxuICAgICAgICAxMzksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTU2LFxuICAgICAgICAyMDcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA1LFxuICAgICAgICA5MlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMCxcbiAgICAgICAgMTMwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDU4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNzAsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNzUsXG4gICAgICAgIDExMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDYxLFxuICAgICAgICAzMyxcbiAgICAgICAgNTcsXG4gICAgICAgIDI0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxODgsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDU5LFxuICAgICAgICA5OCxcbiAgICAgICAgOTcsXG4gICAgICAgIDU4LFxuICAgICAgICAxOSxcbiAgICAgICAgOTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjMsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTAwLFxuICAgICAgICAyNSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQxLFxuICAgICAgICA1NyxcbiAgICAgICAgMTI3LFxuICAgICAgICA2MyxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMjksXG4gICAgICAgIDI1LFxuICAgICAgICAxODAsXG4gICAgICAgIDEzMCxcbiAgICAgICAgNzgsXG4gICAgICAgIDkwLFxuICAgICAgICA3OCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMThcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTMsXG4gICAgICAgIDYyLFxuICAgICAgICAxOTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTA1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMjksXG4gICAgICAgIDIxNSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDM0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDM5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDY2LFxuICAgICAgICA1OSxcbiAgICAgICAgMTE2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgODksXG4gICAgICAgIDE3OCxcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDksXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjI0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTcxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDExMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDIxOCxcbiAgICAgICAgOTYsXG4gICAgICAgIDEsXG4gICAgICAgIDcyLFxuICAgICAgICAzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDI5LFxuICAgICAgICA3MSxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMyxcbiAgICAgICAgMjA1LFxuICAgICAgICAyNTEsXG4gICAgICAgIDg3LFxuICAgICAgICAyNTMsXG4gICAgICAgIDQsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMwLFxuICAgICAgICAxOTQsXG4gICAgICAgIDIyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTQsXG4gICAgICAgIDcyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzksXG4gICAgICAgIDAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNixcbiAgICAgICAgMjQxLFxuICAgICAgICAxODMsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwMCxcbiAgICAgICAgNDcsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDk2LFxuICAgICAgICA0NyxcbiAgICAgICAgMTQxLFxuICAgICAgICA3MCxcbiAgICAgICAgNzMsXG4gICAgICAgIDc5LFxuICAgICAgICAzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxNDMsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDYzLFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMzQsXG4gICAgICAgICAgMjEzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICA4LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA2NixcbiAgICAgICAgICA3OVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAwLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDIwLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMTY2LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDIxNyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE0NSxcbiAgICAgICAgICAxMDNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDQsXG4gICAgICAgIDI5LFxuICAgICAgICAwLFxuICAgICAgICAyNDksXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjQ0LFxuICAgICAgICA3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyLFxuICAgICAgICAyNDIsXG4gICAgICAgIDg5LFxuICAgICAgICAyMTAsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjksXG4gICAgICAgIDkwLFxuICAgICAgICAxMyxcbiAgICAgICAgMjksXG4gICAgICAgIDIyNixcbiAgICAgICAgMTI0LFxuICAgICAgICAyOSxcbiAgICAgICAgNDIsXG4gICAgICAgIDEyMixcbiAgICAgICAgNTUsXG4gICAgICAgIDk3LFxuICAgICAgICAxMTgsXG4gICAgICAgIDYxLFxuICAgICAgICAyNSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxOSxcbiAgICAgICAgMTgxLFxuICAgICAgICA1MCxcbiAgICAgICAgMTI5LFxuICAgICAgICA0MCxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTk4LFxuICAgICAgICA3NCxcbiAgICAgICAgMixcbiAgICAgICAgMjM4LFxuICAgICAgICAyNDAsXG4gICAgICAgIDgxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTAzLFxuICAgICAgICA3NyxcbiAgICAgICAgMjQ2LFxuICAgICAgICA4OCxcbiAgICAgICAgNDIsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMixcbiAgICAgICAgMTUsXG4gICAgICAgIDU3LFxuICAgICAgICA0MixcbiAgICAgICAgNDIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjIsXG4gICAgICAgIDdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDcxLFxuICBcImFkdlNlY3JldEtleVwiOiBcIkIyTUplQzQxZzNUSFFJamV1Y1hWdjhXL3pXYUF1ZjBwWFVVRlJySGNvL0k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInROdnFzbVlLU3JhcUp0NGVhakI5S0FcIixcbiAgXCJwaG9uZUlkXCI6IFwiZDNlZmNmYTctMDc2Mi00ZmYwLTk0YjItMGNlMzZlNWUyNjAwXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIwMSxcbiAgICAgIDIwOCxcbiAgICAgIDM0LFxuICAgICAgMTg3LFxuICAgICAgMjAwLFxuICAgICAgOTIsXG4gICAgICAxMTcsXG4gICAgICAxMDMsXG4gICAgICA2NSxcbiAgICAgIDQyLFxuICAgICAgMTgyLFxuICAgICAgMTUzLFxuICAgICAgMTM3LFxuICAgICAgNDgsXG4gICAgICAyNDEsXG4gICAgICAyNDQsXG4gICAgICAxMCxcbiAgICAgIDIxNyxcbiAgICAgIDEyMCxcbiAgICAgIDcwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogZmFsc2UsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMDksXG4gICAgICA1OSxcbiAgICAgIDE4NSxcbiAgICAgIDcyLFxuICAgICAgMjIwLFxuICAgICAgMTk0LFxuICAgICAgMTMwLFxuICAgICAgMjMwLFxuICAgICAgMTQ1LFxuICAgICAgNTgsXG4gICAgICAxMjIsXG4gICAgICA1LFxuICAgICAgMTc0LFxuICAgICAgMjQzLFxuICAgICAgNjgsXG4gICAgICA3MSxcbiAgICAgIDE4OCxcbiAgICAgIDkyLFxuICAgICAgNDMsXG4gICAgICA3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUEgxcG80QkVPZi8xN0lHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJNeSticnA0cm8vUUFyeERZTUdFbmVJYk9Sd2NDT1J5RStWQ0tlN1ErRFV3PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImxxUFl0T0dPczlaNGVpQjRDUWtqTGdDNXBDMUtKQWh3MVBkSHplQlRQK0NBZ05OOVF1Q0hQd0N5LzJZU1FJVG5PV2JmZzZiNWJHeEpRWlFIQUNqTURBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInFZTDBTa2dlczVicng3dURJNncrNlRkZUZ3M1ZmSWdVUkFMVnFieVJ2c0V3d1Uza2VzV2NXMHRnOStaN3BjY0lvT1R3ZFRnOHhtSGdTR1ZOMURTL0NRPT1cIlxuICB9LFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTA2MzcxNDMxMzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2MjY1NTA1MDAzMTI1MDo1QGxpZFwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTA2MzcxNDMxMzo1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgMTU1LFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTYzLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMTYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgNyxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTMsXG4gICAgICAgICAgNzZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNjkxMjEwNlxufSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
