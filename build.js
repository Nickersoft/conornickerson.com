const shell = require('shelljs');

function runGatsby(locale) {
  shell.exec(`LOCALE=${locale} ./node_modules/.bin/gatsby build --prefix-paths`);
}

// Removes existing cache
shell.rm('-rf', '.cache');

// Scaffold directories 
shell.mkdir('-p', 'dist/fr', 'dist/en');

// Build the English version of the site
console.log('\n🇺🇸 Building US site...\n');
runGatsby('en');
shell.cp('-r', './public/.', './dist/en');

// Build the French version of the site
console.log('\n🇫🇷 Building French site...\n');
runGatsby('fr');
shell.cp('-r', './public/.', './dist/fr');

// Copy redirects file
shell.cp('./_redirects', './dist')

// Clean up
console.log('\n🗑 Cleaning up...\n');
shell.rm('-rf', 'public');

console.log('✨ Done!');
