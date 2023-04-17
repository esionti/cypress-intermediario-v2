import { faker } from '@faker-js/faker'

const options = { env: { snapshotOnly: true } } //para que nos testes de GUI, também tenhamos feedback visual quando chamadas de API estiverem rodando, ou quando estivermos utilizando a funcionalidade de time-traveling do Cypress.

describe('Create Issue', options, () => {
  const issue = {
    title: `issue-${faker.datatype.uuid()}`,
    description: faker.random.words(3),
    project: {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }
  }

  beforeEach(() => {
    cy.api_deleteProjects()
    cy.login()
    
    //cy.gui_createProject(issue.project)
    cy.api_createProject(issue.project)       //otimazando o teste com ação de api ao invés de interface
  })

  it('successfully', () => {
    cy.gui_createIssue(issue)

    cy.get('.issue-details')
      .should('contain', issue.title)
      .and('contain', issue.description)
  })
})