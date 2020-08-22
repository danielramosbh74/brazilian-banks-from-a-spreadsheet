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

// Testando a publicação de uma nova versão... só consegui publicar 2 vezes diretamente no site da NPM, mas ainda não consegui publicar nenhuma vez no Github packages... e tem um monte de melhorias a serem feitas...

// Mesmo sem ter implementado novas melhorias mudarei para a versão 1.0.2 apenas porque preciso testar se vai publicar...

// Inacreditável, mas acho que não estava sendo publicado apenas porque o NOME do arquivo do pacote dentro do package.json não estava minúsculo... perdi DIAS quebrando a cabeça com isso até que finalmente achei a solução... tudo fica simples depois de resolvido, rs, mas sozinho eu não ia imaginar que fosse apenas isso...

