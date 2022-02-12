const fs = require('fs');
const xlsx = require('xlsx')

// const target = 'taro'
const target = 'users'

const json_data=JSON.parse(fs.readFileSync(target+'.json'));

let book = xlsx.utils.book_new();
let sheet = xlsx.utils.json_to_sheet(json_data);

xlsx.utils.book_append_sheet(book, sheet,target);
xlsx.writeFile(book,target+'_gen.xlsx');


