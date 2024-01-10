const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: "6az2vm",
  e2e: {
    baseUrl: "https://petstore.swagger.io",
    retries: 0
  },
});
