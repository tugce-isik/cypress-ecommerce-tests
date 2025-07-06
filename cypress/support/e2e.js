// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// This is a great place to put global configuration and
// behavior that modifies Cypress.
//
// You can change the location of this file or turn off
// automatically serving support files with the
// 'supportFile' configuration option.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:

import './commands'
Cypress.on('uncaught:exception', (err, runnable) => {

  console.warn('Ignored uncaught exception:', err.message);

  if (
    err.message.includes("data$i") ||
    err.message.includes("split") ||
    err.message.includes("addEventListener") ||
    err.message.includes("Cannot read properties of null") ||
    err.message.includes("cardModuleFactory") ||
    err.message.includes("Script error") ||
    err.message.includes("cross origin")
  ) {
    return false; 
  }

  return true;
});
