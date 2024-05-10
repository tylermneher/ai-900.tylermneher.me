describe("Homepage", function () {
    beforeEach(function () {
        cy.visit("/index.html");
    });
    it("Visits the Homepage", () => {
        //Body Links and Content
        context("Testing the Body Verification Link", function () {
            cy.get('[data-cy="body-verification-link"]').should("be.visible");
            cy.get('[data-cy="body-verification-link"]').should("have.attr", "href", "https://learn.microsoft.com/api/credentials/share/en-us/tylermneher/E740B04E2B740620?sharingId=E8796AF58924CF52");
            cy.get('[data-cy="body-verification-link"]').should("have.text", "Microsoft\n        AI-900 Certification Verification");
        });
        context("Testing the Body Credential ID", function () {
            cy.get('[data-cy="body-credentialid"]').should("be.visible");
            cy.get('[data-cy="body-credentialid"]').should("have.text", "• Credential ID #: E740B04E2B740620");
        });
        context("Testing the Body Certification #", function () {
            cy.get('[data-cy="body-certificationno"]').should("be.visible");
            cy.get('[data-cy="body-certificationno"]').should("have.text", "• Certification #: 6176E4-V3660F");
        });
        context("Testing the Footer Earned On", function () {
            cy.get('[data-cy="body-earnedon"]').should("be.visible");
            cy.get('[data-cy="body-earnedon"]').should("have.text", "• Earned on: May 4, 2024");
        });

        // Footer Links
        context("Testing the Footer Microsoft TOS Link", function () {
            cy.get('[data-cy="footer-microsofttos"]').should("be.visible");
            cy.get('[data-cy="footer-microsofttos"]').should("have.attr", "href", "https://learn.microsoft.com/en-us/legal/termsofuse");
            cy.get('[data-cy="footer-microsofttos"]').should("have.text", "Microsoft");
        });
        context("Testing the Footer Microsoft TOS Link", function () {
            cy.get('[data-cy="footer-tylermneher"]').should("be.visible");
            cy.get('[data-cy="footer-tylermneher"]').should("have.attr", "href", "https://www.tylermneher.me");
            cy.get('[data-cy="footer-tylermneher"]').should("have.text", "Tyler M. Neher");
        });
    });
});
