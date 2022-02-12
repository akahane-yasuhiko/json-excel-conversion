const fs = require('fs');
const xlsx = require('xlsx')

// target='taro'
target='users'

const buf = fs.readFileSync(target + '.xlsx');
const book = xlsx.read(buf, {type:'buffer'});

const sheet = book.Sheets[target];
const sheet_data =xlsx.utils.sheet_to_json(sheet);
const json_str =JSON.stringify(sheet_data);

fs.writeFileSync(target+'_gen.json', json_str);
