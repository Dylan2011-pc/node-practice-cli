const actionSelector = require('./controllers/secret/actionSelector')

const baseUrl = "http://localhost:3000/api/secret"; //can be config in dotenv file

async function main() {
  await actionSelector.action(baseUrl)
}

main();
