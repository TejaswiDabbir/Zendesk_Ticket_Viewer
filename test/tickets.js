let server = require("../app");
let chai = require("chai");
let chaiHttp = require("chai-http");

// Assertion 
chai.should();
chai.use(chaiHttp); 

describe('Ticket APIs', () => {

    describe("Test GET route /api/ticket", () => {
        it("It should return all tickets", (done) => {
            chai.request(server)
                .get("/api/ticket")
                .end((err, response) => {
                    response.should.have.status(200);
                    response.body.should.have.property('tickets');
                done();
                });
        });
    });
});