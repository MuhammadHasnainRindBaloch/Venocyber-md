//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "losrios755@gmail.com";
global.location = "Njombe,Tanzania.";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Dar es salaam";
global.github = process.env.GITHUB || "https://github.com/Kingjux/Venocyber-md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VagzM5RGk1Fq9b6BCO0q";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/12b0fb245e6b8ba4bf718.jpg";
global.devs = "923066671786";
global.sudo = process.env.SUDO || "923066671786";
global.owner = process.env.OWNER_NUMBER || "923066671786";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "true";
global.userImages = process.env.USER_IMAGES || "";
global.waPresence = process.env.WAPRESENCE || "online";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://rb.gy/nl69nj";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "VENOCYBER-MD;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNEVtaFROVTNEczluQ0dCUFRwR2FXMmFlaXNmYXRsNGtpclNjNTljR0ZsND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRmpPWWJTMDdpcUNWY290K3NlQ3Zvb0hIRCs1SzFIc2hQWWQ4YzZ4YnJDbz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPUHExTGN4dU41VDZNdjJaZHRlY0FBMWlkT1RwY3h1YlVrTzV0Skl3djFZPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIzUlNGbzlEUVByRmdaRFc3V1BUSFAxdTFrVENBd3Y0M1FFQW0yREpZRXo4PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlNFSkpLTXlPTFRiaVVod3c4TUtuaXNqWE9JVk8wZENmazJMUXFlT3JiV3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjFTclNyMUNvSnBFcXRhWTZzUU9lSVA1VlFBbjdMLzFyYWRBZ3VLdlRvQms9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieUc4UnBySHAyYlI0MEZUN3h3cUQ5VXhUMURxZjh4NEk4UDBLVlNzNklHUT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiVXhHRm0yS0R4YmlvbmgwK1p3RDFVNjJBRWFLTEZnWm0wNmJaNnJCSkNUOD0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjBEZ01UQ2lvaU1BZWhiY0F3TXpZN0RaQ0FYbGQwdlpnaSs3TXloNlhxR01IRzJVWFFMT1pMclR3ZUlqQ3c2WjZzRk9uWWJkMzdtVDlKT05HTnBFWUF3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6ODAsImFkdlNlY3JldEtleSI6IkJhUjBVTVp1M0h0RTJOUmhpQ3Fpczk0eVc5bHFGZTdiQk9TM0hrcGRSQVU9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IjNlMHNDak5GUUdLYy15eEtheGZyR2ciLCJwaG9uZUlkIjoiNzY1NTlhZDYtYjk1My00NjI4LWExNTMtOTFkYjQyNjA4MTNmIiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjlodmhYTnJjeENkWFBtTElxK0ZRNWwxUzV3ST0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpa2o1eVI4SkpmWGhkZGpubFdMQ04rVlFxWGs9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiWjJLWlIyOE0iLCJtZSI6eyJpZCI6IjkyMzA2NjY3MTc4Njo2N0BzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLwnZCZ8J2QiPCdkIPwnZCD8J2QiCDwnZCK8J2QiPCdkI3wnZCGIPCdkIHwnZCA8J2Qi/CdkI7wnZCC8J2Qh1xuICAgIOKLhlxuICAgIOKLhlxuICAgIOKLhlxuICAgIOKLhlxuICAgIOKLhlxuICAgIOKLhlxuICAgIOKLhlxuICAgIOKLhlxuICDwk4ap4oG34oG44oG28JOGqiJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSW1FcGRNQ0VQYVJrN1lHR0FNZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiV1lGZWx2bmZQaDVXNENteFAzVUJPUzJYZHF3Y0JTQ2hqUzZPSGpOVkYxYz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiZTFzL1Rta1VZRnl5b2MyaUg3Zko4ZHBFbi9ONGt1WFVxMUV6eWtsYTFad05EcjBiRGpMeE5aYVBONStjYWJzcDdKRms5cWgvS25reHFjNFdNUkl3RFE9PSIsImRldmljZVNpZ25hdHVyZSI6InRoKzd0MUxNalNSRUlEMFZnbkhxYm1rNTgwTXhSRXdoSTNnVTBpR0k5dHhHYWRENDhLemFJNGgrcWliWC85RmNZZXBEV1FLY3B2eUVJb1pXdUlJVEJBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTIzMDY2NjcxNzg2OjY3QHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQlZtQlhwYjUzejRlVnVBcHNUOTFBVGt0bDNhc0hBVWdvWTB1amg0elZSZFgifX1dLCJwbGF0Zm9ybSI6InNtYmEiLCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjQxNzI1NDgsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBRWphIn0="
module.exports = {
  menu: process.env.MENU || "",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "you're using first powerful bot to be released in Tanzania| enjoy your time| this is ضـﹻ۬ﹻۧ۬ﹻﹿٰٰٰٖٖٖٜ۬ﹿٰٰٖٖٜ۬ﹻۗﹻۧ۬ﹻ۬ﹻــدی کنـﹻ۬ﹻۧ۬ﹻٰ۬ﹻٰ۬ﹻۧ۬ﹻ۬ﹻــگ بلـﹻ۬ﹻۧ۬ﹻﹿٰٰٰٖﹿﹻۧ۬ﹻ۬ﹻــوچ",
  author: process.env.PACK_AUTHER || "ضـﹻ۬ﹻۧ۬ﹻﹿٰٰٰٖٖٖٜ۬ﹿٰٰٖٖٜ۬ﹻۗﹻۧ۬ﹻ۬ﹻــدی کنـﹻ۬ﹻۧ۬ﹻٰ۬ﹻٰ۬ﹻۧ۬ﹻ۬ﹻــگ بلـﹻ۬ﹻۧ۬ﹻﹿٰٰٰٖﹿﹻۧ۬ﹻ۬ﹻــوچ",
  packname: process.env.PACK_NAME || "ضـﹻ۬ﹻۧ۬ﹻﹿٰٰٰٖٖٖٜ۬ﹿٰٰٖٖٜ۬ﹻۗﹻۧ۬ﹻ۬ﹻــدی کنـﹻ۬ﹻۧ۬ﹻٰ۬ﹻٰ۬ﹻۧ۬ﹻ۬ﹻــگ بلـﹻ۬ﹻۧ۬ﹻﹿٰٰٰٖﹿﹻۧ۬ﹻ۬ﹻــوچ",
  botname: process.env.BOT_NAME || "ضـﹻ۬ﹻۧ۬ﹻﹿٰٰٰٖٖٖٜ۬ﹿٰٰٖٖٜ۬ﹻۗﹻۧ۬ﹻ۬ﹻــدی کنـﹻ۬ﹻۧ۬ﹻٰ۬ﹻٰ۬ﹻۧ۬ﹻ۬ﹻــگ بلـﹻ۬ﹻۧ۬ﹻﹿٰٰٰٖﹿﹻۧ۬ﹻ۬ﹻــوچ",
  ownername: process.env.OWNER_NAME || "ضـﹻ۬ﹻۧ۬ﹻﹿٰٰٰٖٖٖٜ۬ﹿٰٰٖٖٜ۬ﹻۗﹻۧ۬ﹻ۬ﹻــدی کنـﹻ۬ﹻۧ۬ﹻٰ۬ﹻٰ۬ﹻۧ۬ﹻ۬ﹻــگ بلـﹻ۬ﹻۧ۬ﹻﹿٰٰٰٖﹿﹻۧ۬ﹻ۬ﹻــوچ",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "sk-proj-nzj66xdSVURMqSV8EBvpT3BlbkFJrw4a1XClnXyLUzoVftJV",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VENOCYBER").toUpperCase(),
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
