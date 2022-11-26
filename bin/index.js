#! /usr/bin/env node
const fs = require('fs');
const path = require('path');
const argv = require('minimist')(process.argv.slice(1));


(async () => {
    let search = new Promise((resolve, reject) => {
        let finder = require('findit')('React component CLI');
        finder.on('file', function (dir, stat) {
            if (path.basename(dir) === 'bin') {
                stop()  // found it
                console.log('FOUND IT');
                console.log(dir);
                console.log(path.basename(dir));
                resolve(dir)
            }
        });
        finder.on('error', reject);
    });
    let found_file = await search;
    // do some stuff with found_file
})()




function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}
const folderName = capitalizeFirstLetter(`${argv._[1]}`)

fs.mkdirSync(folderName)
fs.appendFileSync(path.resolve(folderName, folderName + '.jsx'),

    `import React from "react";
import Styles from "./${folderName}.module.css"
    
const ${folderName} = () => {
    return (
        <div>
                
        </div>
    );
};
    
export default ${folderName};
`)
fs.appendFileSync(path.resolve(folderName, folderName + '.module.css'), '')