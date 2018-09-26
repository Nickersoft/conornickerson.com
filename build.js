const shell = require('shelljs');

function runGatsby(locale) {
  shell.exec(`LOCALE=${locale} ./node_modules/.bin/gatsby build --prefix-paths`);
}

shell.rm('-rf', '.cache');

console.log('\n🇺🇸 Building US site...\n');

shell.mkdir('-p', 'dist/fr', 'dist/en');

runGatsby('en');

shell.mv('public/*', 'dist/en');

console.log('\n🇫🇷 Building French site...\n');

runGatsby('fr');

shell.mv('public/*', 'dist/fr');

console.log('\n🗑 Cleaning up...\n');

shell.rm('-rf', 'public');

console.log('✨ Done!');
