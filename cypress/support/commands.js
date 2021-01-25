// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })
Cypress.Commands.add('backgroundLogin', () => {
    cy.setCookie(
        'PrestaShop-a30a9934ef476d11b6cc3c983616e364',
        '8JYVddvvVUUWYwyn08WBQk4xBT3oTNETPRCA37jttqMTh%2Fn2iePHJ%2BEbj9lNgp3BOswaKoKLiNAAcVumrm3MG6z%2Frw6%2F8tKblH3fy4k4UKVNZi1sC00MC%2BFq0fXTSwToTU86LiUQG0xEEoCPvOzoiRorOhbLQzHoE4AYst6sWLFHB6AZlgoXd3UjbsF4Fi1iTBUxOoFPRXict8GdmbOgcIbi9HQpAbCl3CQ9qgPI0CjrnCxM%2Ffq1pVWGBv2LpDPMLM8VUvFPjQpxbc3w5Yk%2B2n0rGbtOd2HIkwx2X38lm%2F4xP6YBz0qj625PvTh%2ByVhXONeRumcOw%2BDtag06aWgpm8pAHUHgTwgfAWugsSasvsXRtNoU7XfH6%2FMMHtACrjCfkukjStxehS4%2F2nBeyVOhbGcuCYST5cpTyMj%2FS91O5kB%2BrTvNuKGt6n3ubQu6Rlm%2BUjQNC8fErGmaSzA4k%2BOhcw%3D%3D000339'
    )
})