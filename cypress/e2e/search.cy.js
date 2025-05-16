describe('Söktester', () => {

  const users = require('../fixtures/users.json');
  const validSearch = require('../fixtures/validSearch.json');
  const invalidSearch = require('../fixtures/invalidSearch.json');

  users.forEach(({ username, password }) => {
    validSearch.forEach(({validSearchTerm}) => {
      it(`ska söka med giltig term "${validSearchTerm}" för användare "${username}"`, () => {
        // Sök på giltiga termer
        cy.search(username, password, validSearchTerm); // Använd kommandot för sökning
        cy.contains(`Images found with the search term`, { matchCase: false }).should('exist'); // Verifiera att sökningen lyckades
      });
    });

    invalidSearch.forEach(({invalidSearchTerm}) => {
      it(`ska söka med ogiltig term "${invalidSearchTerm}" för användare "${username}"`, () => {
        cy.search(username, password, invalidSearchTerm);
        cy.contains(`No images could be found with the search term`, { matchCase: false }).should('exist'); // Verifiera att sökningen misslyckades
      });
    });
  });
});