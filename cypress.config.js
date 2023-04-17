const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    baseUrl: 'http://localhost',
    env: {
      hideCredentials: true,    //ocultar os dados do "accessToken" da api.
      requestMode: true,        // mostrar o feedback visual da api sem mudar a estrutrua do "cy.request"
    },
    experimentalRunAllSpecs: true,
  },
  fixturesFolder: false,
  video: false,
})