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



global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "0701117998";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_57_05_14_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDQsXG4gICAgICAgIDEsXG4gICAgICAgIDkxLFxuICAgICAgICAwLFxuICAgICAgICA3LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTk1LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgNjAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTcxLFxuICAgICAgICA4MCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDcxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMzMsXG4gICAgICAgIDIzNixcbiAgICAgICAgOTYsXG4gICAgICAgIDg0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjM1LFxuICAgICAgICAxODYsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDk3XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEwOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDc2LFxuICAgICAgICAxNTAsXG4gICAgICAgIDE0LFxuICAgICAgICAxMTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTUyLFxuICAgICAgICA5OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDk5LFxuICAgICAgICA3MyxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMzMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMjM1LFxuICAgICAgICA4OCxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTI1LFxuICAgICAgICA3MixcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDMwLFxuICAgICAgICAxMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjM4LFxuICAgICAgICAyMCxcbiAgICAgICAgMjksXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIwLFxuICAgICAgICAyMDksXG4gICAgICAgIDY2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTcyLFxuICAgICAgICA4NSxcbiAgICAgICAgODUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgODAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjYsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMjcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDksXG4gICAgICAgIDk2LFxuICAgICAgICA3NSxcbiAgICAgICAgOTgsXG4gICAgICAgIDI0NixcbiAgICAgICAgNzFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA2LFxuICAgICAgICA5NSxcbiAgICAgICAgMTE3LFxuICAgICAgICAxMzQsXG4gICAgICAgIDc0LFxuICAgICAgICAxODAsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMzEsXG4gICAgICAgIDcxLFxuICAgICAgICAxNjksXG4gICAgICAgIDg1LFxuICAgICAgICA3OCxcbiAgICAgICAgMTIwLFxuICAgICAgICA1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzcsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTAwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAzNyxcbiAgICAgICAgNzMsXG4gICAgICAgIDgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNyxcbiAgICAgICAgMSxcbiAgICAgICAgMjAxLFxuICAgICAgICAzNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICAzOSxcbiAgICAgICAgMTY3LFxuICAgICAgICAyNDAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgNCxcbiAgICAgICAgMTYwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDkyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDg0LFxuICAgICAgICA0NCxcbiAgICAgICAgMTM3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzYsXG4gICAgICAgIDc4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTgzLFxuICAgICAgICAxMTcsXG4gICAgICAgIDMzLFxuICAgICAgICAyNDMsXG4gICAgICAgIDY4LFxuICAgICAgICA2OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTIsXG4gICAgICAgIDkwLFxuICAgICAgICAyNTQsXG4gICAgICAgIDYsXG4gICAgICAgIDkyLFxuICAgICAgICA5NSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMzksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA4NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTc4LFxuICAgICAgICA5NyxcbiAgICAgICAgNSxcbiAgICAgICAgNTgsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE5MSxcbiAgICAgICAgNTUsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNzksXG4gICAgICAgIDM2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE2LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA4NSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTk0LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDcsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTgyLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDk0LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA2NlxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE2MCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMDcsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE2XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjM3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDI2LFxuICAgICAgICAyNDQsXG4gICAgICAgIDgxLFxuICAgICAgICAyMSxcbiAgICAgICAgMTY2LFxuICAgICAgICA1NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDk4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTM0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDI3LFxuICAgICAgICAxMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDEwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMjMzLFxuICAgICAgICA4MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyNDYsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDEwLFxuICAgICAgICA2NixcbiAgICAgICAgMjEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMTI2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMzcsXG4gICAgICAgIDE1NixcbiAgICAgICAgODEsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNTYsXG4gICAgICAgIDE1OCxcbiAgICAgICAgNzQsXG4gICAgICAgIDUzLFxuICAgICAgICAxOTAsXG4gICAgICAgIDM1LFxuICAgICAgICAzMixcbiAgICAgICAgODIsXG4gICAgICAgIDEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjExLFxuICAgICAgICA1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDUxLFxuICAgICAgICAyMzksXG4gICAgICAgIDE0MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjI0LFxuICBcImFkdlNlY3JldEtleVwiOiBcImpsNDRvMVMyQ0VWOFdZU0NWeCt5RTlRVks2L2tMSkt3NlFEa0s4bDRrU2s9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjU0NzAxMTE3OTk4QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzQUE3QUUyREI0MzcyRjgzNUIxNFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MTU2NzM0MjNcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiengzcmcxOS1SYVNRVlUwVWJNZTZFd1wiLFxuICBcInBob25lSWRcIjogXCJiOTgzNmY4YS0xODdiLTQ4N2QtYmQyZi1hOWMzZWVmZDViNjlcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAsXG4gICAgICAxNSxcbiAgICAgIDE2MixcbiAgICAgIDI0OSxcbiAgICAgIDE0NixcbiAgICAgIDE1OCxcbiAgICAgIDEyMSxcbiAgICAgIDIxOCxcbiAgICAgIDI1MixcbiAgICAgIDgxLFxuICAgICAgMTgwLFxuICAgICAgMjE1LFxuICAgICAgMTk5LFxuICAgICAgOTIsXG4gICAgICAyMTAsXG4gICAgICAxMjEsXG4gICAgICAxNzIsXG4gICAgICA2NCxcbiAgICAgIDY0LFxuICAgICAgNjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE2LFxuICAgICAgMTU4LFxuICAgICAgMTAxLFxuICAgICAgMjI3LFxuICAgICAgMjUsXG4gICAgICAyNyxcbiAgICAgIDEwMCxcbiAgICAgIDEzNCxcbiAgICAgIDE1OCxcbiAgICAgIDM0LFxuICAgICAgMjcsXG4gICAgICAxNzcsXG4gICAgICAyMDEsXG4gICAgICA1LFxuICAgICAgMjIxLFxuICAgICAgNjUsXG4gICAgICAxMjMsXG4gICAgICAyMzgsXG4gICAgICAzOCxcbiAgICAgIDE5MVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJFQlFYUDZISFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjU0NzAxMTE3OTk4OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxOTA2MDY2ODkxODYwMTc6MTZAbGlkXCIsXG4gICAgXCJuYW1lXCI6IFwiWmFoZWVEXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUG1kdW9jR0VNaXlqTElHR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJwMFIwL0dWcTdmbnR4TTlNaUVtdDNYRDhNUXpzbHRLWVQxSTUxVWdHaUc4PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkNGSEQ3MEp2d0ZBcWxaNkRnRGtwalRaVXVsczYvbjUya200Y0lielQvZFBvZTBvQnJtL1NGU3Q0aWZ0cXlUUFVreVBzeWJ1NitzTnZhK3VFMUFzekRBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImlSVUtJQzRWaW1QYXhhd3liVGpTTzJpMVp5anVPZkRYN3Q0SjZRQmc4QVhnYzlJOVp2Y2l6L0UwbW1BV0phRG5EbDBrcVRPSk1YUnhSZWdKMExpNWlRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjI1NDcwMTExNzk5ODoxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMTYsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDI0OSxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA3NixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTczLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMjUyLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA4MixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgNixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJpcGhvbmVcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNTY3MzQxOSxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJEUFwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQkRQLmpzb24iOiAie1wia2V5RGF0YVwiOlwiSTRacTJPcDZUS2U3dVM4VXU0ZkVsaDlIV2dEVTBwSzZMRGFKOGVXTEdsUT1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxNjI2MjQ2OTA1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MTUyOTc4MjM2MThcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.4",
  caption : process.env.CAPTION || "©sᴜʜᴀɪʟ²²¹-ᴍᴅ" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
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
