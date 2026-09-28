const fs = require('fs');
let content = fs.readFileSync('c:/Users/saiku/Downloads/OCW/src/config.ts', 'utf8');

// Replace 2024 and 2023 with 2026 in the portfolio and client films sections
content = content.replace(/year: '2024'/g, "year: '2026'");
content = content.replace(/year: '2023'/g, "year: '2026'");

fs.writeFileSync('c:/Users/saiku/Downloads/OCW/src/config.ts', content);
console.log('done');
