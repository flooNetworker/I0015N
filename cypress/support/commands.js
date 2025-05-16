// Här kan jag lägga till mina egna kommandon om det används i fler en ett test

Cypress.Commands.add('login', (username, password) => {
    cy.get('input[name="username"]').type(username);
    cy.get('input[name="password"]').type(password);
    cy.get('button[type="submit"]').click(); // Klicka på logga in
});

Cypress.Commands.add('search', (username, password, searchTerm) => {
    cy.login(username, password); // Logga in
    cy.get('input[name="search_terms"]').type(searchTerm);
    cy.get('button[type="submit"]').click(); // Klicka på sökknappen
    });