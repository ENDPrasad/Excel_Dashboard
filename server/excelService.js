const reader = require("xlsx");
const env = require("dotenv");

env.config();

// console.log(__dirname);
const file = reader.readFile(`${__dirname}/data/${process.env.dataFileName}`);

const workbook = file.Sheets[process.env.sheetName];

// console.log(workbook);
// var rowCount = 0;

// for (let i = 1; workbook[`A${i}`] != undefined; i++) {
//   rowCount++;
// }

// console.log(rowCount);

var header = {};
for (let i = 0; workbook[`${String.fromCharCode(65 + i)}1`] != undefined; i++) {
  const head = workbook[`${String.fromCharCode(65 + i)}1`];
  //   console.log("Head " + head);
  header[head["v"]] = head["v"];
}
// console.log(header);
let data = [header];
data = data.concat(...reader.utils.sheet_to_json(workbook));
// console.log(data)
module.exports = data;

// export default getExcelData;
