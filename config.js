//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Nairobi, Kenya";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/Badtechramadhan";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VakZxvW8Pgs8FIrFQx0P";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VakZxvW8Pgs8FIrFQx0P";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/hsi1o1.jpg";
global.devs = "https://t.me/Ramadhanyusuf";
global.sudo = process.env.SUDO || "2347045505096";
global.owner = process.env.OWNER_NUMBER || "2347045505096";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/hsi1o1.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "2347045505096";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZUNIcWVERWl3aDcwUk9wT2JUZVN4cWVCNzFiSXl5ZHh5T2FHTXN2c1YwQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibVJRemFyTmJIdFRQZkxGMlVNM2JxNzdtOTR6MHBCZUhpOXZnZG92ajgxND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJJRnRtT1VrdWRzYjY1bGNMOS93VDV4NU9PZUM2YWFOSkNzeXZRN0ovM1ZRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIwS1BjVTFDK09MUlhlazhja1dzM1dZbGx0U3QrMG1HMjQwOVJXWGJNcHc0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZGSXpZbXNWa3hnR28yWU0rVElncVcrRnErVGd3MHM3VG0vTnBzMkM2Mms9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlJvOVlZTDhwL3hhV0ZSb25jUnA5WHppZ2ZpVDhvbzlOTHJYdG90VkJLMzA9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0NGTzRLRUk2UVR5amsyaVlNQkJDLytLNzExbjkreGtRSElrTHRZZHZHaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiZm1rbkhXMmxXUTlJa29wbG95a1YvVjNPRTVNMjJjcEs3bnI1M20wdTJnMD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkpuWEJIa2tNYjY5dVRXUEJmWTJNeVRtRmlZNk5MYUdHbHpXTGpXdTZnUGpNNm9NWUNUQkVvRGFlRWkzOUhJVVNZVkhoVGt5U0xra3kyNWdPWUM4NENnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6OTIsImFkdlNlY3JldEtleSI6IncyZ3k0QmJ3TUhuMVV6M1hjZXRpbERvOVY1bmRrNzhXWlJBa2pKSE9rbjA9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjA4ZTA3TjVLVEdxSDRTNFdPdk1ZYXciLCJwaG9uZUlkIjoiYjZiNjliYjQtNTc3Zi00YTIxLThiNjItNGFkZTlkODVmNDdlIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im5BOVE2eXlFVTZLMjVDRW0zdGdSM1huSGhxRT0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI1T094clppTnp6bmEzdWZKVTNpUGVNRmQ0d009In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiODFLV1oxRUEiLCJtZSI6eyJpZCI6IjIzNDcwNDU1MDUwOTY6ODBAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0l5S21PSUJFTVhVakxzR0dFa2dBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkZWRlhlRytENlQ2amtoUStWNUpOeGtobWFFL3pSVHl0di84RGxoUEhwSGc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkV6T2dPdml0SlQzQkFDTStMcDRaZmtSTTVHWjIvUlN0V0VkVkRiZ1RISFZVSktXbU5VNmFrTkgwQ2RTcCtTSW5Pc3dBWW5aZ05JRGx0VHJNVngreEN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiJKUmhtRU1xWC9McHpYVzBUUU45aUpVWENsMVRnQzEycDlGYWlMdkNZQ3J1bzFOMFJvK01xZys4QVVsZnlEWkREZEl5OGlBdWFhVkpoSU5BNk9lMlhCdz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDcwNDU1MDUwOTY6ODBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCUlZSVjNodmcraytvNUlVUGxlU1RjWklabWhQODBVOHJiLy9BNVlUeDZSNCJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczNDU1MjE0Nn0="
module.exports = {
  menu: process.env.MENU || "3",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "3.0.0",
  caption: process.env.CAPTION || "`EMMY_HENZ-V3™`",
  author: process.env.PACK_AUTHER || "RMH-BOTS",
  packname: process.env.PACK_NAME || "R A M A H ALPHA",
  botname: process.env.BOT_NAME || "RMH-BOTS",
  ownername: process.env.OWNER_NAME || "RAMADHAN ALPHA",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "E M M Y").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
