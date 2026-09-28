const fs = require('fs');
let content = fs.readFileSync('c:/Users/saiku/Downloads/OCW/src/config.ts', 'utf8');

content = content.replace(/https:\/\/drive\.google\.com\/uc\?export=download&id=([a-zA-Z0-9_-]+)/g, "https://drive.google.com/uc?export=download&confirm=t&id=$1");

fs.writeFileSync('c:/Users/saiku/Downloads/OCW/src/config.ts', content);
console.log('done');
