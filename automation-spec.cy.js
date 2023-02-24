describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://www.demoblaze.com/')
    cy.wait(1000);
    cy.get('.container img:eq(1)').trigger('mouseover');
    cy.get('.container img:eq(2)').trigger('mouseover');
    cy.get('.container img:eq(3)').click();
    cy.get('.btn.btn-success.btn-lg').click();
    cy.get('.nav-item.active').click();
    cy.wait(1000);
    cy.get('a#itemc.list-group-item[onclick="byCat(\'notebook\')"]').click();
    cy.get('a#itemc.list-group-item[onclick="byCat(\'monitor\')"]').click();
    cy.wait(1000);
    cy.get('#next2').click();
    cy.get('#prev2').click();
    cy.get('a.nav-link[href="index.html"]').click();
    cy.get('a.nav-link[data-toggle="modal"][data-target="#exampleModal"]').click();
    cy.get('input#recipient-email').click().type('m@ejemplo.com');
    cy.wait(1000);
    cy.get('input#recipient-name').click().type('mica');
    cy.wait(1000);
    cy.get('textarea#message-text').type('test');
    cy.get('button[onclick="send()"]').click();
    cy.wait(1000);
    cy.get('#cartur').click();
    cy.get('#login2').click();  
    });
  })

    





 