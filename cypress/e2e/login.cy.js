describe('Inloggningstester', () => {

  const users = require('../fixtures/users.json');

  users.forEach(({ username, password }) => {
    it(`ska logga in användare "${username}"`, () => {
      cy.login(username, password); // Använd kommandot för inloggning
      cy.contains('Search for photos', { matchCase: false }).should('exist'); // Verifiera att inloggningen lyckades
    });

    it(`ska logga ut användare "${username}"`, () => {
      // Logga in användaren (testen ska vara oberoende av varandra)
      cy.login(username, password);
      cy.contains('Search for photos', { matchCase: false }).should('exist'); // Verifiera att inloggningen lyckades

      // Logga ut användaren
      cy.contains('a', 'Logout').click();

      // Verifiera att användaren har loggats ut och att startsidan visas
      cy.url().should('eq', 'https://ltu-i0015n-2024-web.azurewebsites.net/');

    });

    it(`ska visa felmeddelande för ogiltiga inloggningsuppgifter för "${username}"`, () => {
      cy.login(username, "felLösenord"); // Testar att ange fel löseord

      // Verifiera att felmeddelandet visas
      cy.contains('Invalid username or password.', { matchCase: false }).should('exist');
    });
  });
});
