//#ENJOY
/**
**/

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "";
global.location = "Sri lanka .";
global.mongodb = process.env.MONGODB_URI || "mongodb://mongo:bREwFKCVLDvzfqqsqVNXloIYCiiLBbuR@monorail.proxy.rlwy.net:38244";
global.allowJids = process.env.ALLOW_JID || "94789958225@s.whatsapp.net";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://rcdnew:DUjQ85jkrvaF5HmsoyjBgyoSYhpsHIjN@dpg-cqamj22ju9rs739asi6g-a.oregon-postgres.render.com/rcd";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "srilank/ampara";
global.github = process.env.GITHUB || "https://github.com/DEXTER-BOTS/RCD-MD";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vag1WQFJf05dF0pQeU3u";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/1f4e6e1cc2ed1662adb36.jpg";
global.devs = "94789958225";
global.sudo = process.env.SUDO || "94789958225,94757660788,94770730717,94785274495,94753574803";
global.owner = process.env.OWNER_NUMBER || "94789958225,94753574803";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "recording";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "";
global.scan = "";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSUt1RlZNRlpPdE94d2Z5REV0bUZYRVpOSVFHOXltdG1hbjY0cjBZSGNHQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNDBVVEJhQi9EcEcveThyY2JJWld3NCtpWXJYVU1TcTBUVUtwd2xYK2dpaz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRRnpsK1dkd29qRFJTWUNKcTNuZWx4OEltbTEzazFOa0JZMVNWMGtxSkc0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJUa3BoMDJLS3ZlQzQ3U3RFMXFZam9UdXNYVWpheEgySTh5TVkzaCs3cGpzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InNOSGl5ZC8rdFNxRnFyazMwZ21OY0pMQ0xXcXkwS2Jjd3lNMGhTK2dORUU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkloSG1ZeW1XbnBNN3JpUzZPMGdERzhnMFFOeXpNOStSUkNML20wVEY5U1E9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0czSnlqVUQwa1ozMmdGKzNlY2s5MmxySS9hSUpuNEFzQzBTa0NvWThtQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0U3MEhtYVVRQ2U3NkxPdm9GMXZLOFUvQ1lpbkdEaVlnWVhiRytWRTEzYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkR0NElyaVBTWkpMb01NeVFweFRWVEZrOEhzUUZJOWtTeXNEUVBEamlLWjdqUktVWFFONEJnOFdyd0pSZmFrMlRvMGdWU0lzQlltcHUzL3ZRZ3dVQWpnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA1LCJhZHZTZWNyZXRLZXkiOiI0VnV5Q2dKUUlwRnRGUTFHTGp0em9jZkN6eEdabnJRRDdxcDhCZExGejhZPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjkyMzMzMjU5MTk0M0BzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIwNDI1QzBDNUI1MjBFRUM3NDA3NDU2QkEyNUUyRUUyOCJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzIxNTUxODM1fSx7ImtleSI6eyJyZW1vdGVKaWQiOiI5MjMzMzI1OTE5NDNAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNkFEOTUzMEU2MTNDNDBEMEVEOTk0QjNBNTE0MTYwMzAifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyMTU1MTgzN30seyJrZXkiOnsicmVtb3RlSmlkIjoiOTIzMzMyNTkxOTQzQHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkZGNkNCREU5ODVENTYwQTVGRkUwRTYxOEUyNzBBMDVEIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3MjE1NTE4Mzh9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6InMwQ0s0ZWxQVE55YTB0WGFOcFZaN1EiLCJwaG9uZUlkIjoiYzA1MDE2YzItYjhkOS00ZWJiLWJjZDUtODBjMTJhNTY3ZWU2IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBrS2RmTUVvbUlERFVxSmpOYjNxL2JkYzB2bz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPTDI4S0xudUpXODgzc2EvbWRkclgvQWdsS0E9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiUVA4UFFTRzEiLCJtZSI6eyJpZCI6IjkyMzMzMjU5MTk0MzoyQHMud2hhdHNhcHAubmV0IiwibmFtZSI6IkZBUk9PUSBCQUxPQ0gifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0lDbHMrRUNFTTJYODdRR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IkY2MGdxTHdjMWZwK2hzUWtPbHloNzlLTkR2NkRmY0ttWHFFdlIxTUFtbEU9IiwiYWNjb3VudFNpZ25hdHVyZSI6InRuWWRpQzZ0bkRNOWhJVWp0RDlMUis0WU9mN20zcHVnbXpGdGEwOVZucll1ZTVIVVdON0hNTjJENFpYM0hiWFNpaWFXRDI0NFFiQVlCanlIWjVSaEFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiJzenBoK0RVZy90M3dNZENOdjVLS2REZHBvRjliN1FDL2ZIcldndWhVd2pqOTVSc3lMMzhIbjlTVWx1b2xFTW9SRVdzb0hnYjFndXUyYkgzbmFFa3ZnZz09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjkyMzMzMjU5MTk0MzoyQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlJldElLaThITlg2Zm9iRUpEcGNvZS9TalE3K2czM0NwbDZoTDBkVEFKcFIifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjE1NTE4MzMsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTkorIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "𝗥𝗖𝗗 𝗠𝗗 𝗣𝗢𝗪𝗘𝗥 𝗕𝗬 🇱🇰",
  author: process.env.PACK_AUTHER || "𝐑𝐂𝐃",
  packname: process.env.PACK_NAME || "♥️",
  botname: process.env.BOT_NAME || "𝐑𝐂𝐃 𝐌𝐃",
  ownername: process.env.OWNER_NAME || "𝗥𝗖𝗗 𝗧𝗘𝗔𝗠",
  errorChat: process.env.ERROR_CHAT || "94789958225",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "WASI").toUpperCase(),
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
