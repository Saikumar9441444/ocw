const fs = require('fs');
let content = fs.readFileSync('c:/Users/saiku/Downloads/OCW/src/config.ts', 'utf8');

content = content.replace(/https:\/\/drive\.google\.com\/uc\?export=download&confirm=t&id=([a-zA-Z0-9_-]+)/g, "https://drive.google.com/file/d/$1/preview?autoplay=1&mute=1&controls=0");

fs.writeFileSync('c:/Users/saiku/Downloads/OCW/src/config.ts', content);
console.log('done');
