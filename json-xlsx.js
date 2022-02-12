const fs = require('fs');
const xlsx = require('xlsx')

const taro=JSON.parse(fs.readFileSync('taro.json'));

let book = xlsx.utils.book_new();
let sheet = xlsx.utils.json_to_sheet(taro);

xlsx.utils.book_append_sheet(book, sheet,"taro");
xlsx.writeFile(book,"taro.xlsx");
