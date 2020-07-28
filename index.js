// ORIGINAL BASE CODE
// Include the module and tell it which spreadsheet to use
//const drive = require("drive-db");

// Create an async context to be able to call `await`
//(async () => {
  // Load the data from the Drive Spreadsheet
//  const db = await drive("1fvz34wY6phWDJsuIneqvOoZRPfo6CfJyPg1BYgHt59k");
//
//  console.log(db);
//})();

// Include the module and tell it which spreadsheet to use
const drive = require("drive-db"); //It could be     import drive from "drive-db";

// Create an async context to be able to call `await`
(async () => {
  // Load the data from the Drive Spreadsheet Brazilian banks, but it could be any public Drive Spreadsheet with columns headers as the name of the camps in just one worksheet
  const records = await drive("1X__ohDkOorMS0NHCjyEILo7PoBedMAKxSg3vOiubl8w");

  console.log(records);
})();
