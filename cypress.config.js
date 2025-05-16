const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://ltu-i0015n-2024-web.azurewebsites.net',
    supportFile: 'cypress/support/e2e.js',
    setupNodeEvents(on, config) {
    },
  },
});
