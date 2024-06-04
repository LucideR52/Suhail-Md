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
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "0701117998";




//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_19_23_06_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTA0LFxuICAgICAgICA2MSxcbiAgICAgICAgOTMsXG4gICAgICAgIDg5LFxuICAgICAgICAyMixcbiAgICAgICAgNDgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjQwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgODIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTEwLFxuICAgICAgICAxNjEsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMDksXG4gICAgICAgIDkxLFxuICAgICAgICA2MSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNixcbiAgICAgICAgMTczLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTAsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNDcsXG4gICAgICAgIDY1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIzLFxuICAgICAgICA3MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDUzLFxuICAgICAgICAxOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDMxLFxuICAgICAgICA4MyxcbiAgICAgICAgMjUxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyMixcbiAgICAgICAgMjM2LFxuICAgICAgICA4NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxOTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgOTEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzQsXG4gICAgICAgIDE4NSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMixcbiAgICAgICAgMjQsXG4gICAgICAgIDIyMixcbiAgICAgICAgMTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDIzOCxcbiAgICAgICAgODksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjAwLFxuICAgICAgICA1OSxcbiAgICAgICAgNzksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNzksXG4gICAgICAgIDUyLFxuICAgICAgICAyMjEsXG4gICAgICAgIDgzLFxuICAgICAgICAyMDYsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMjgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgNTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgODgsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTksXG4gICAgICAgIDUwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjAwLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEyNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgODAsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwNixcbiAgICAgICAgNSxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNDYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgNjksXG4gICAgICAgIDQzLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIxNSxcbiAgICAgICAgNTYsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTA3LFxuICAgICAgICA2NSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjExLFxuICAgICAgICAyMDgsXG4gICAgICAgIDQxLFxuICAgICAgICA0OCxcbiAgICAgICAgMCxcbiAgICAgICAgMTksXG4gICAgICAgIDY3LFxuICAgICAgICAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjI4LFxuICAgICAgICAyNixcbiAgICAgICAgMjQzLFxuICAgICAgICAxMDksXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDYxLFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDk2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIxMCxcbiAgICAgICAgNixcbiAgICAgICAgNTMsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTM0LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0LFxuICAgICAgICAyMDAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTA5LFxuICAgICAgICA3MSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDQ3LFxuICAgICAgICAzNSxcbiAgICAgICAgMTk2LFxuICAgICAgICAzNyxcbiAgICAgICAgOTFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIwLFxuICAgICAgICAxODAsXG4gICAgICAgIDk0LFxuICAgICAgICAzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDY5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMzMsXG4gICAgICAgIDg1LFxuICAgICAgICAxODgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDI4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQ3LFxuICAgICAgICA0NCxcbiAgICAgICAgNTIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjIxLFxuICAgICAgICAxODksXG4gICAgICAgIDgxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEwOCxcbiAgICAgICAgNDAsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMTAyXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMDIsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDEyMyxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE3MyxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE1LFxuICAgICAgICAzNixcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxNDAsXG4gICAgICAgIDYyLFxuICAgICAgICA0OSxcbiAgICAgICAgMTM1LFxuICAgICAgICA1NixcbiAgICAgICAgMTIzLFxuICAgICAgICA0OCxcbiAgICAgICAgNzUsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTI2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDYwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDEyMyxcbiAgICAgICAgODIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTc1LFxuICAgICAgICA2NSxcbiAgICAgICAgMTc3LFxuICAgICAgICAxNzYsXG4gICAgICAgIDUsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxMzksXG4gICAgICAgIDksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTIxLFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgNTcsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDc3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMjksXG4gICAgICAgIDE0NixcbiAgICAgICAgMjUsXG4gICAgICAgIDI1MixcbiAgICAgICAgNDksXG4gICAgICAgIDM4LFxuICAgICAgICA1MixcbiAgICAgICAgMTQsXG4gICAgICAgIDYzLFxuICAgICAgICA0NixcbiAgICAgICAgMTIxLFxuICAgICAgICA0NixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMzQsXG4gICAgICAgIDU3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDYzLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQVJGdVlPMUtiRkFSLzBva2FEdUt0QnFBajVPUzZha0dYZ2ZWOEdUTDR6QT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyNTQ3MDExMTc5OThAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjNBOTM1NUI4NzJBNzczOEZEQ0YwXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTcxNzQ0MjYxOVxuICAgIH0sXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjI1NDcwMTExNzk5OEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E5RjY3NEE5OTcwNDBCNUEwMjRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzE3NDQyNjIyXG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiA2MSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiA2MSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIjd1UUQ4bmRBUk15Z1VmY2NWRmViN1FcIixcbiAgXCJwaG9uZUlkXCI6IFwiMzk2ZTAzNTktYjdmOS00Y2ZiLWIxZmEtMWRkYzc2ODAzZmQyXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDIzLFxuICAgICAgMjMxLFxuICAgICAgMTExLFxuICAgICAgMjE4LFxuICAgICAgMTAwLFxuICAgICAgMTA5LFxuICAgICAgMTYzLFxuICAgICAgOCxcbiAgICAgIDIxNyxcbiAgICAgIDEwNixcbiAgICAgIDEyOSxcbiAgICAgIDI0NSxcbiAgICAgIDE0LFxuICAgICAgMjM3LFxuICAgICAgMjcsXG4gICAgICAyMzgsXG4gICAgICAyMjQsXG4gICAgICAxNjUsXG4gICAgICA0NSxcbiAgICAgIDk5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDc0LFxuICAgICAgMjUsXG4gICAgICAxOTQsXG4gICAgICAxNzIsXG4gICAgICA0LFxuICAgICAgMTY3LFxuICAgICAgMTQ5LFxuICAgICAgNTEsXG4gICAgICA1MyxcbiAgICAgIDIxMCxcbiAgICAgIDk1LFxuICAgICAgMTA2LFxuICAgICAgMTc3LFxuICAgICAgMTcwLFxuICAgICAgMjAsXG4gICAgICAxNDAsXG4gICAgICAxODIsXG4gICAgICAyNDUsXG4gICAgICAxODEsXG4gICAgICA3OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJSVEtXSE45OFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzAxMTE3OTk4OjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTA2MDY2ODkxODYwMTc6MTdAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiWmFoZWVEXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHVpOFpvT0VMV3crTElHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJUR1RPcW5rRnhobmYxNTA1R0lJTVRPM1czYm9IUmhvclpvMnZxdUd4elg4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkF5L014TkJKU0pacEhTNG9PYmFNbTZoMzRna0U0ejd5ZTgzTzE1dnFLUUtWc1h5b3Z2ZHNQZm8vTXZTZThLajJIN2xNTm1GUmcrbDdnekxkZ1hmd0N3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInpkR0lLWUp2RmVrR25HRGJISDBFQlpxcUk3TzJyWVVyOWtDY3M0cnBod3V0TzhxMHBkVktZd1JhRE1LQmxkdEZoZjlGL1JMMHUrRFp3RFVGMW5LMUN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcwMTExNzk5ODoxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxMzAsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MTc0NDI2MTcsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFBRWxcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUFFbC5qc29uIjogIntcImtleURhdGFcIjpcIk1TUzgrMDV6VWR2VG0rMTdLbjhnVnJhbFFaVFBVZ0I1WkVMbC9NQUVzVHc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MzgxNDQ3ODIwMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzEsMF19LFwidGltZXN0YW1wXCI6XCIxNzE3NDQyNjE3MTc1XCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "LUCIDEr-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x LUCIDER",


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
