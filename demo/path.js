const path = require('path');
console.log('Название файла:', path.basename(__filename));

console.log('Имя директории', path.dirname(__filename));

console.log('Parse', path.parse(__filename));

// получаем обьект и можно олбращаться к его полям
console.log('Parse', path.parse(__filename).name);
console.log(path.join(__dirname, 'server', 'index.html'));


