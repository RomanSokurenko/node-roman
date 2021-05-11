const chalk = require('chalk');
const { dirname } = require('node:path');
const text = require('./data');


console.log(chalk.blue(text));
console.log(__dirname);
