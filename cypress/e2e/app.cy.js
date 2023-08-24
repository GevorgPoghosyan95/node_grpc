describe('Express App E2E Tests', () => {
    it('should return a greeting on GET /', () => {
        cy.request('GET', 'http://localhost:5000').then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.have.property('id',7);
            expect(response.body).to.have.property('username');
            expect(response.body).to.have.property('email');
        });
    });
})