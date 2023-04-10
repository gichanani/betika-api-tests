describe('API tests for https://fakerestapi.azurewebsites.net/api/v1/Users', () => {
    
  it('should return a 200 status code', () => {
    cy.request('GET', '/Users')
    .then((response) => {
      expect(response.status).to.eq(200)
      })
    });

    it('should check if User 6 exists in the response', () => {
      cy.request('GET', 'https://fakerestapi.azurewebsites.net/api/v1/Users')
        .then((response) => {
          const user = response.body.find(u => u.userName === 'User 6');
          expect(user).to.exist
          expect(user).to.not.be.null;
          expect(user).to.not.be.undefined;
        })
    })

    it('should return the correct number of objects', () => {
      cy.request('GET', '/Users')
        .then((response) => {
          cy.log(response.body.length)
          expect(response.body).to.have.length(10)
       })
    });

  });
