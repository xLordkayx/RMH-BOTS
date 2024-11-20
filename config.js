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
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/Badtechramadhan";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VakZxvW8Pgs8FIrFQx0P";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VakZxvW8Pgs8FIrFQx0P";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/hsi1o1.jpg";
global.devs = "https://t.me/Ramadhanyusuf";
global.sudo = process.env.SUDO || "256703025571";
global.owner = process.env.OWNER_NUMBER || "256703025571";
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
global.read_status_from = process.env.READ_STATUS_FROM || "256703025571";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0VCK3g3bmNuMzBkSDA2Y0hDNWxicjFweXBvZ1ViZWE3UVI4N2RoSkhHcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWURqcE91cHBwOHhtaFNaU2pNcjFYL1lBYzRRSUhZbHFEMEtUZTlweTF5bz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhQXM5UU55V3NEOW1EdFpFeklNVkZKcjFXa2JBZVFQazhzSEhHc0JZTVVZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJoeWNibktvcWNJOFdSQ0EvV1Jhb1pPYUFCc3drSkFjaWViYkw1RFR5dUJ3PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Im1PR3hlSmhoWmYwQ0I2T2gvc05rREg0TVYzS1E4NTczcmdWb3JpK1JWMEU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjVtNnlOTnUwYWNmbTYwRzcwMVVvWWxCTFRnRlphdHhMU0lkblZLRXpVRE09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiME9qcGw0RkQ0SDFSL2w3SUo3c2JONXlzbjMwZG1xNllkVHMyRkF4VlJsOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaDBnakJ4M2xxNzdnQ25OaTFlajRqR1hUVlhHTGtqdnRvT1lVM2N4b015TT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjAvWWdLTmk2c1htWE1BUFMwUGkvVmNDVXNDVzBrOUZydkpBaUY0RlJVeTQrTStEMWlNb0Z5WEIyb0ZyRU05c3pNNDhJUjVsdTQ2bFVLci9kVi96NWhRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTEsImFkdlNlY3JldEtleSI6Inc3dkxLQmV6RyswLzNHVkQ3R0V0ZjViQVZzNWpwSnZ4TVY5dUx3eUwyU0E9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InpoTXFFdDlmVEctTF9yRTZKQmdXWlEiLCJwaG9uZUlkIjoiODFkODY5YTMtMzMwNC00ZWQ5LTlkMDMtOTUxNzgwYzYxZTljIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImY4VmZQZks3M2l2Q0NJcGEwOC8wbkwwWmxnaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJNUkRpT01JTVJGbS9qUFZZcGlvNXh1aTJWbFE9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiQVIzWFE4Q0IiLCJtZSI6eyJpZCI6IjI1NjcwMzAyNTU3MTo0OEBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSS9vMWxrUW5LUDJ1UVlZQWlBQUtBQT0iLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidVdNb3RMYkFFMXczWUNSdHBlYzBhNU4yZDhTTDdYTVJnN21pVGpSNC9uYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoicGRyRG05ZCtHaHJvQkVMa2IyRlpJQ3VpMzBsQ2RTL2tDcDF1WGtFNEc2OE1zOWxoZDJtN2RTNEZFa1JSWXkxODdIMDNNRzhZekdDNm9GQ0tqenA5RFE9PSIsImRldmljZVNpZ25hdHVyZSI6IkIyWVNpa1pZeUsvZnR0S0VwMFpkZFliR1U5eS9BN3lBU3BDY2NzK1BoYXlaMkNnNCtuWkNWbnNMamxLb3g3QmhQOXNYZTNjd0xlUFN2VmJWU2dmRmhnPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjU2NzAzMDI1NTcxOjQ4QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJsaktMUzJ3Qk5jTjJBa2JhWG5OR3VUZG5mRWkrMXpFWU81b2s0MGVQNTMifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MzIwODgyMzMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBSG9TIn0="
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
