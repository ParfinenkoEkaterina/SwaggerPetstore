import user from "../fixtures/user";
import userEdits from "../fixtures/userEdits";

describe('pet shop', () => {
    it('create new user', () => {
        cy.request({
            method: "POST",
            url: "/v2/user",
            body: user
        }).then((response) => {
            expect(response.status).be.eql(200)
        });
        cy.request({
            method: "GET",
            url: `/v2/user/${user.username}`
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.deep.eq(user)
        })
    })

    it("edits user", () => {
        cy.request({
            method: "POST",
            url: "/v2/user",
            body: user,
        }).then((response) => {
            expect(response.status).to.eq(200);
        })
        cy.request({
            method: "PUT",
            url: `/v2/user/${user.username}`,
            body: userEdits,
        }).then((response) => {
            expect(response.status).to.eq(200);
        })
        cy.request({
            method: "GET",
            url: `/v2/user/${userEdits.username}`,
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.deep.eq(userEdits);
        })
    })

    it("Deleting a user", () => {
        cy.request({
            method: "POST",
            url: "/v2/user",
            body: user,
        }).then((response) => {
            expect(response.status).to.eq(200);
        })
        cy.request({
            method: "DELETE",
            url: `/v2/user/${user.username}`,
        }).then((response) => {
            expect(response.status).to.eq(200);
        })
    })
})
