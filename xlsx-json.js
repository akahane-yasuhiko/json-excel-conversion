const fs = require('fs');
const xlsx = require('xlsx')

const buf = fs.readFileSync("taro.xlsx");
const book = xlsx.read(buf, {type:'buffer'});

const sheet = book.Sheets["taro"];
const data =xlsx.utils.sheet_to_json(sheet);
const json_str =JSON.stringify(data);

fs.writeFileSync("taro.json", json_str);
