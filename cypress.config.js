const { defineConfig } = require('cypress')

module.exports = defineConfig({
  requestTimeout: 10000,
  e2e: {
    baseUrl:'https://notes-serverless-app.com',
    setupNodeEvents(on, config) {
      // implement node event listeners here
    }
  },
})

//MAILOSAUR_SERVER_ID - get ID on https://mailosaur.com/app/servers
//MAILOSAUR_API_KEY - get Key on https://mailosaur.com/app/account/keys
//