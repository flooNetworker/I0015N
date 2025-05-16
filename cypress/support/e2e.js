// Om jag behöver att köra något innan varje test så kan jag göra det här

import './commands'; // Includera  min supportfile commands i alla test

before(() => {
    // Körs en gång innan alla tester
    cy.log('Startar tester...');
});

beforeEach(() => {
    cy.visit('/login'); // Navigera till inloggningssidan innan varje test
});