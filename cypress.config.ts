import { defineConfig } from 'cypress'

export default defineConfig({
  chromeWebSecurity: false,
  defaultCommandTimeout: 10000,
  pageLoadTimeout: 30000,
  videosFolder: 'cypress/videos/testExecutionVideos',
  viewportHeight: 1080,
  viewportWidth: 1920,
  video: false,
  retries: {
    runMode: 0,
    openMode: 0,
  },
  env: {
    webdriveruni_homepage: 'https://webdriveruniversity.com',
    first_name: 'raul',
  },
  projectId: '7yjoqm',
  experimentalStudio: true,
  reporter: "cypress-multi-reporters",
  reporterOptions: {
    reporterEnabled: "mochawesome",
    mochawesomeReporterOptions: {
        reportDir: "cypress/results/mocha",
        screenshotOnRunFailure: true,
        quite: true,
        overwrite: false,
        html: false,
        json: true
    } 
  },
  screenshotsFolder: "cypress/results/mochareports/screenshots",
  e2e: {
    // We've imported your old cypress plugins here.
    // You may want to clean this up later by importing these.
    setupNodeEvents(on, config) {
      return require("./cypress/plugins/index.js")(on, config)
    },
    baseUrl: "https://webdriveruniversity.com",
    excludeSpecPattern: ["*.js"],
    specPattern: "cypress/e2e/**/*.{js,jsx,ts,tsx}",
  },
})