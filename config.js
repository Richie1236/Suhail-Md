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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348129856050";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_23_03_07_25_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDAsXG4gICAgICAgIDQsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxNjYsXG4gICAgICAgIDEzLFxuICAgICAgICA1OSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTMwLFxuICAgICAgICAzOSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDg4LFxuICAgICAgICAyMjEsXG4gICAgICAgIDEzNyxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNzNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMixcbiAgICAgICAgMTEsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjUyLFxuICAgICAgICAxODgsXG4gICAgICAgIDE4NyxcbiAgICAgICAgNzgsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTQyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNTEsXG4gICAgICAgIDU0LFxuICAgICAgICA3MCxcbiAgICAgICAgMTIsXG4gICAgICAgIDIwLFxuICAgICAgICAyNDIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTI0LFxuICAgICAgICAxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDYyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDY0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTYsXG4gICAgICAgIDI0NixcbiAgICAgICAgMzQsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTQ4LFxuICAgICAgICA5NCxcbiAgICAgICAgNTUsXG4gICAgICAgIDUxLFxuICAgICAgICAxOTMsXG4gICAgICAgIDE0NSxcbiAgICAgICAgNzUsXG4gICAgICAgIDQsXG4gICAgICAgIDEzLFxuICAgICAgICAyMDMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTk2LFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxOTksXG4gICAgICAgIDgxLFxuICAgICAgICAxNjAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTI5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgODQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNTYsXG4gICAgICAgIDExNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTQsXG4gICAgICAgIDAsXG4gICAgICAgIDE4LFxuICAgICAgICAyMzMsXG4gICAgICAgIDQ1LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjM4LFxuICAgICAgICA1NCxcbiAgICAgICAgMjA5LFxuICAgICAgICAxMzksXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjUyLFxuICAgICAgICAxMixcbiAgICAgICAgNzcsXG4gICAgICAgIDYwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTYyLFxuICAgICAgICAxNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNjYsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMixcbiAgICAgICAgMjQzLFxuICAgICAgICAyNlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNzIsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyNyxcbiAgICAgICAgMTMxLFxuICAgICAgICAyMTAsXG4gICAgICAgIDAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAxMzMsXG4gICAgICAgIDYwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxMjIsXG4gICAgICAgIDk4LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNzUsXG4gICAgICAgIDk4LFxuICAgICAgICAxMjUsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjgsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzEsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjE4LFxuICAgICAgICA5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDExNSxcbiAgICAgICAgODYsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTAyLFxuICAgICAgICAyMjcsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTkzLFxuICAgICAgICAxMzcsXG4gICAgICAgIDM0LFxuICAgICAgICA5OSxcbiAgICAgICAgMTMyLFxuICAgICAgICAxNTAsXG4gICAgICAgIDc0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjAyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDM0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDcwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxODYsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDAsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIyOCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxNixcbiAgICAgICAgICA1NixcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDEyMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA5NixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMTI5LFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAwLFxuICAgICAgICAgIDJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODEsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDkwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDkwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDYzLFxuICAgICAgICAxODMsXG4gICAgICAgIDI0MixcbiAgICAgICAgNCxcbiAgICAgICAgOTksXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTI1LFxuICAgICAgICA4OCxcbiAgICAgICAgMjMsXG4gICAgICAgIDk5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDg5LFxuICAgICAgICA2NSxcbiAgICAgICAgMTc1LFxuICAgICAgICA3NSxcbiAgICAgICAgMjE3LFxuICAgICAgICA4NyxcbiAgICAgICAgNDEsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDQwLFxuICAgICAgICAxNixcbiAgICAgICAgMTIsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjQzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDU0LFxuICAgICAgICAxNjksXG4gICAgICAgIDE3LFxuICAgICAgICAyMTcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTg0LFxuICAgICAgICAyMjksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5NixcbiAgICAgICAgOTMsXG4gICAgICAgIDM0LFxuICAgICAgICAyMDksXG4gICAgICAgIDIzMSxcbiAgICAgICAgODIsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDE1NSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJJM2d5blp0RVV2eXdQOTJaOWcwd1JKdHFjMFozOUx6K1pHd2FGZElNVlVRPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDgxMjk4NTYwNTBAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIkFGRDMxOTNDNjQ3OThFMkQzNjgwMTI1MjUwQzVBRDVFXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcyMTk0ODYzNVxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJBMWJqbXhsaVFybVZYTjAwVHNIb0N3XCIsXG4gIFwicGhvbmVJZFwiOiBcImI2ZTljYjRkLTU4ZmUtNDI3ZC1hZjc4LTIyZTY1NmM2NjAyY1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxODQsXG4gICAgICA4NixcbiAgICAgIDE2MCxcbiAgICAgIDE4MyxcbiAgICAgIDIxMCxcbiAgICAgIDEzMixcbiAgICAgIDE3MCxcbiAgICAgIDIxNixcbiAgICAgIDEzNixcbiAgICAgIDg4LFxuICAgICAgNTEsXG4gICAgICAxNzcsXG4gICAgICA2NixcbiAgICAgIDEzMSxcbiAgICAgIDE3NixcbiAgICAgIDE1NixcbiAgICAgIDE4OCxcbiAgICAgIDY4LFxuICAgICAgNTcsXG4gICAgICA3NFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjksXG4gICAgICAxNzEsXG4gICAgICAyMSxcbiAgICAgIDY4LFxuICAgICAgNDgsXG4gICAgICAyMyxcbiAgICAgIDIwMixcbiAgICAgIDgwLFxuICAgICAgMTg3LFxuICAgICAgMTgxLFxuICAgICAgMTMyLFxuICAgICAgMjM0LFxuICAgICAgMTM3LFxuICAgICAgMjM4LFxuICAgICAgMTQ0LFxuICAgICAgOTcsXG4gICAgICAxMjMsXG4gICAgICAxMzIsXG4gICAgICAxMjcsXG4gICAgICAxMDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTlBMMjVOUjFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMjk4NTYwNTA6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkp1c3QgRm9yIEFkdmVydCAxXCIsXG4gICAgXCJsaWRcIjogXCIyMDk5OTQzMjI1Nzk1ODk6MkBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQR2VvczhDRU0remk3VUdHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIm42em5wUjZnM2dRdzRTbjJ1OEgvS1Z4STZPMHJ4c0dqQW1Qa3MxM3dnakk9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiYXNUbU4zTjRHcnhuS0l1Um15OW9OYkNtaFgyRVB5K2RoQ3JmNWVzMW9GajBRemhEOVA1dmc4d21za1RpckJ3cys4NVlRSVZURDZDYmYwYzhqbkFMQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiUHRZak9nQzhlTXlDSWdSZXhjMDZ5VFg5azJJWG4vRndnc3dHQ2Q5QmEvZzBvMTRlbkg4cEl1OThwRzlqVlFzem9ncUozSXBiM09FSDBZT1FLOGVwQVE9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEyOTg1NjA1MDoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTU5LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDE4NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgNTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTk0ODYyOFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


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
