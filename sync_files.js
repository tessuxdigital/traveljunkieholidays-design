const fs = require('fs');
const path = require('path');

const targets = ['travelora', 'travel-website'];

const filesToSync = [
  'packages.html',
  'index.html',
  'contact.html',
  'destinations.html',
  'destination-details.html',
  'destination-bali.html',
  'destination-japan.html',
  'destination-paris.html',
  'package-vietnam.html',
  'package-maldives.html',
  'package-santorini.html',
  'package-paris.html',
  'package-canada.html',
  'package-italy.html',
  'package-australia.html',
  'package-switzerland-trek.html',
  'package-switzerland.html',
  'package-peru.html',
  'package-kenya.html',
  'package-switzerland-luxury.html',
  'package-dubai.html',
  'package-french-riviera.html',
  'package-bali.html',
  'package-thailand.html',
  'package-cancun.html',
  'package-japan.html',
  'package-india.html',
  'package-egypt.html',
  'package-singapore.html',
  'package-malaysia.html',
  'css/style.css',
  'css/responsive.css'
];

targets.forEach(target => {
  if (!fs.existsSync(target)) {
    console.log(`Directory ${target} does not exist, skipping.`);
    return;
  }

  filesToSync.forEach(relPath => {
    if (fs.existsSync(relPath)) {
      const destPath = path.join(target, relPath);
      const destDir = path.dirname(destPath);
      if (!fs.existsSync(destDir)) {
        fs.mkdirSync(destDir, { recursive: true });
      }
      fs.copyFileSync(relPath, destPath);
      console.log(`Copied ${relPath} -> ${destPath}`);
    } else {
      console.warn(`File not found to copy: ${relPath}`);
    }
  });
});

console.log('Synchronization completed successfully!');

