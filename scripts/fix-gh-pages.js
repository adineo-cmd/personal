// scripts/fix-gh-pages.js
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const distPath = path.join(__dirname, '../dist');

console.log('🔧 Fixing links for GitHub Pages...');

const htmlFiles = [];
function getHtmlFiles(dir) {
  const items = fs.readdirSync(dir);
  items.forEach(item => {
    const itemPath = path.join(dir, item);
    const stat = fs.statSync(itemPath);
    if (stat.isDirectory()) {
      getHtmlFiles(itemPath);
    } else if (item.endsWith('.html')) {
      htmlFiles.push(itemPath);
    }
  });
}
getHtmlFiles(distPath);

console.log(`📝 Rewriting ${htmlFiles.length} HTML files...`);
htmlFiles.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  
  content = content.replace(/href="\//g, 'href="/personal/');
  content = content.replace(/src="\//g, 'src="/personal/');
  content = content.replace(/\/personal\/personal\//g, '/personal/');
  
  fs.writeFileSync(file, content, 'utf8');
  console.log(`  Fixed: ${path.relative(distPath, file)}`);
});

console.log('\n✅ Links fixed for GitHub Pages!');
