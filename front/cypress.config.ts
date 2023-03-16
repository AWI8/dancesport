import { defineConfig } from "cypress";

export default defineConfig({
  component: {
    devServer: {
      framework: "next",
      bundler: "webpack",
    },
    specPattern:"cypress/components/*.cy.{js,jsx,ts,tsx}",
  },
  e2e:{
    baseUrl:'http://localhost:3000/',
    video:false,
    screenshotOnRunFailure:false,
    specPattern:'cypress/e2e/**/*.cy.{js,jsx,ts,tsx}',
    supportFile:false,
  },
  video:false,
  
});
