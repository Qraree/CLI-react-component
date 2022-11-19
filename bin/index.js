#! /usr/bin/env node
const fs = require('fs');
const path = require('path');

const argv = require('minimist')(process.argv.slice(1));

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