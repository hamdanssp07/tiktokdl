// index.js

// Import tiktokdl function from media.js
const { tiktokdl } = require('./lib/media.js');

// Example TikTok video URL
const url = 'https://www.tiktok.com/@omagadsus/video/7025456384175017243?is_from_webapp=1&sender_device=pc&web_id6982004129280116226';

// Prompt user to choose a format (you can customize this part)
const userFormat = prompt('Choose a video format (mp4/avi):');

// Call tiktokdl function with the chosen format
const data = await tiktokdl(url, userFormat);

// Log the data (you can modify this part as needed)
console.log(data);
