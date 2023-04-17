import { faker } from '@faker-js/faker'

const options = { env: { snapshotOnly: true } }   //para que nos testes de GUI, também tenhamos feedback visual quando chamadas de API estiverem rodando, ou quando estivermos utilizando a funcionalidade de time-traveling do Cypress.

describe('Create Project', options, () => {
  beforeEach(() => {
    cy.api_deleteProjects()
    cy.login()
  })

  it('successfully', () => {
    const project = {
      name: `project-${faker.datatype.uuid()}`,
      description: faker.random.words(5)
    }

    cy.gui_createProject(project)

    cy.url().should('be.equal', `${Cypress.config('baseUrl')}/${Cypress.env('user_name')}/${project.name}`)
    cy.contains(project.name).should('be.visible')
    cy.contains(project.description).should('be.visible')
  })
})