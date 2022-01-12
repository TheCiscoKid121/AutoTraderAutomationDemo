/// <reference types="cypress" />

describe('example to-do app', () => {
  beforeEach(() => {
     cy.visit('https://www.autotrader.co.uk')
  })

  it('Check AutoTrader cookie iframe appears on the page and Accept All is clickable', () => {

    cy.iframe().find('#notice > div.message-component.message-row > div.message-component.message-column.unstack > button.message-component.message-button.no-children.focusable.sp_choice_type_11.last-focusable-el').should('be.visible').click()

  })

  it('Click on new car label and check new page loads', () => {

    cy.iframe().find('#notice > div.message-component.message-row > div.message-component.message-column.unstack > button.message-component.message-button.no-children.focusable.sp_choice_type_11.last-focusable-el').should('be.visible').click()
    cy.get(':nth-child(2) > .atds-primary-navigation__link').click()
    cy.url().should('include', 'https://www.autotrader.co.uk/cars/new')

  })

  it('Click on new car label and search for an "Alpine"', () => {

    cy.iframe().find('#notice > div.message-component.message-row > div.message-component.message-column.unstack > button.message-component.message-button.no-children.focusable.sp_choice_type_11.last-focusable-el').should('be.visible').click()
    cy.get(':nth-child(2) > .atds-primary-navigation__link').click()
    cy.url().should('include', 'https://www.autotrader.co.uk/cars/new')
    cy.iframe().find('#notice > div.message-component.message-row > div.message-component.message-column.unstack > button.message-component.message-button.no-children.focusable.sp_choice_type_11.last-focusable-el').should('be.visible').click()
    cy.get('#make').select('Alpine')
    cy.get('#postcode').type('SE7 6EG')
    cy.get('#content > article > section.atds-container.atds-container--fixed-wide.false.atds-hero.hero-reverse.new-car-hero > div.atds-hero__container > div.atds-hero__action.hero-reverse.new-car-hero__action > form > div.search-form > div.search-form__field.search-form__submit > button').click()
    cy.get('.search-form__count').should("be.visible")

  })
})
