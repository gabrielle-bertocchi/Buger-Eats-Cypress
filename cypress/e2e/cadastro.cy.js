describe('cadastro', () => {
  it('Usuário deve se tornar um entregador', () => {
    cy.viewport(1440, 900)
    cy.visit('https://buger-eats.vercel.app/')
    cy.get('a[href="/deliver"]').click()
    cy.get('#page-deliver form h1').should('have.text','Cadastre-se para  fazer entregas')

    var entregador = {
      nome: 'Paulo Mendes',
      cpf: '00000014141',
      email: 'paulo-mendes@hotmail.com',
      whatsapp: '11999999999',

      endereco: {
        cep: '15093521',
        numero: '200'
      }
    }

    cy.get('.field input[placeholder="Nome completo"]').type(entregador.nome)
    cy.get('.field input[placeholder="CPF somente números"]').type(entregador.cpf)
    cy.get('.field input[placeholder="E-mail"]').type(entregador.email)
    cy.get('.field input[placeholder="Whatsapp"]').type(entregador.whatsapp)

    cy.get('.field input[placeholder="CEP"]').type(entregador.endereco.cep)
    cy.get('.field input[value="Buscar CEP"]').click()
    cy.get('.field-group input[placeholder="Número"]').type(entregador.endereco.numero)
    
  });
 
})