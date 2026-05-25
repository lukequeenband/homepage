const fs = require('fs');
const html = fs.readFileSync('form.html', 'utf8');

// Use regex to find all name="xxxxx" attributes in the entire HTML file
const nameMatches = html.match(/name="[^"]*"/g) || [];
console.log('All name attributes found:', Array.from(new Set(nameMatches)));

// Also let's check for any inputs with type="hidden"
const hiddenInputs = html.match(/<input type="hidden"[^>]*>/g) || [];
console.log('Hidden inputs:', hiddenInputs);
