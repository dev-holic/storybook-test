const {paperwork} = require('precinct');
const fs = require('fs');

fs.readdir('src', (err, files) => {
    files.forEach(file => {
        if (!file.match(/\.tsx?/)) {
            return;
        }
        console.log(file, paperwork(`src/${file}`));
    });
});
