context('My First Test', () => {
    // before(()=>{
    //     cy.request('https://api.spacexdata.com/v3/missions').its('body').should('have.length',10)
    // })
    beforeEach(()=>{
        cy.visit("/commands/actions");
        // cy.visit("/commands/actions");
    })
    // afterEach(()=>{
    //     cy.log('test is done')
    // })
    // after(()=>{
    //     cy.log('all of the tests are done')
    // })
    // it('has an h1 heading on the page',()=>{
    //     cy.get('h1').should('exist');
    // })
    // it('renders the correct h1 text',()=>{
    //     cy.get("h1").should("contain.text",'Actions');
    // })
    // it('renders a paragraph under the h1',()=>{
    //     cy.get('.banner').find('p')
    // })
    // it('renders a section with the correct elements',()=>{
    //     cy.get('.container').eq(2).within(()=>{
    //         cy.get('h4').should('exist')
    //         cy.get('p').should('exist');
    //     })
    // })

    // it('correctly renders the cypress website line',()=>{
    //     cy.findByText('cypress.io').should('exist')
    // })
    // it('types into the correct field',()=>{
    //     cy.findByPlaceholderText('Email').type('text@email.com')
    //     cy.wait(5000).then(()=>{
    //       console.log("test is finished"); //console log will be printed after cypress commands
    //     })
    //     console.log('test is finished') //console log will be printed before cypress commands
    //     cy.log('Cypress commands is finished')
    // })
    // it('shows an active class for current page',()=>{
    //     cy.get('.dropdown-menu').find('li').eq(2).should('have.class','active')
    // })
    // it('links to the actions page correctly',()=>{
    //     cy.visit('/')
    //     cy.findAllByText('Actions').first().click({force:true})
    //     // cy.findAllByText('Actions').last().click();
    //     cy.url().should('include','commands/actions')
    // })
    // it('lets you type in an input field',()=>{
    //     cy.findByPlaceholderText('Email').type('Test').should('have.value','Test')    
    // })
    // it('lets you clear an input field',()=>{
    //     cy.findByLabelText('Describe:').type('Test description').should('have.value','Test description').clear().should('have.value','')
    // })
    // it('lets you check a checkbox',()=>{
    //     cy.get('.action-checkboxes [type="checkbox"]').first().check().should('be.checked')
    // })
    it('pulls data from a fixture',()=>{
        cy.fixture('example').then((data)=>{
          //looking for a cypress/fixture then file named example
          cy.log('DATA:',data)
        }) 
    })
    it('updates fixture data inline',()=>{
        cy.fixture("example").then((data) => {
          //looking for a cypress/fixture then file named example
          data.email='updated@email.com'
          cy.log("UPDATED:", data);
        }); 
    })
})