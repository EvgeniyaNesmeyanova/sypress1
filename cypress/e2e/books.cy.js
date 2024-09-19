// import { beforeEach } from "mocha";

// const { expect } = require("chai");

beforeEach(()=>{
  cy.visit('/');
})

describe('Тестирование библиотеки', () => {
  it('Тест на логин', () => {
    cy.login('bropet@mail.ru','123')
    cy.contains("Добро пожаловать").should('be.visible',true)
  })

  it('Тест на пустой пароль', () => {
    cy.login('bropet@mail.ru',null)
    cy.get('#pass').then((elements)=>{
      expect(elements[0].checkValidity()).to.be.false
      expect(elements[0].validationMessage).to.be.eql("Заполните это поле.")
    })
  })

  it('Тест на пустой логин', () => {
    cy.login(null,'123')
    cy.get('#mail').then((elements)=>{
      expect(elements[0].checkValidity()).to.be.false
      expect(elements[0].validationMessage).to.be.eql("Заполните это поле.")
    })
  })

  it('Тест на ошибочный пароль', () => {
    cy.login('bropet@mail.ru',"321")
    cy.get('#pass').then((elements)=>{
      cy.contains("Неправильая почта или пароль").should('be.visible',true)
    })
  })

  it('Тест на ошибочный логин', () => {
    cy.login('bropt@mail.ru',"123")
    cy.get('#mail').then((elements)=>{
      cy.contains("Неправильая почта или пароль").should('be.visible',true)
    })
  })

})