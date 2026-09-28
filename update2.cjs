const fs = require('fs');
let content = fs.readFileSync('c:/Users/saiku/Downloads/OCW/src/config.ts', 'utf8');

// Replace /preview?autoplay=1&mute=1&controls=0 with the direct stream URL
// From: https://drive.google.com/file/d/ID/preview...
// To: https://drive.google.com/uc?export=download&id=ID
content = content.replace(/https:\/\/drive\.google\.com\/file\/d\/([a-zA-Z0-9_-]+)\/preview[^'"]*/g, "https://drive.google.com/uc?export=download&id=$1");

fs.writeFileSync('c:/Users/saiku/Downloads/OCW/src/config.ts', content);
console.log('done');
