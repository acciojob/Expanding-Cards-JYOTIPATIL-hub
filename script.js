//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
    const panels = document.querySelectorAll('.panel');

    panels.forEach(panel => {
        panel.addEventListener('click', () => {
            removeActiveClasses();
            panel.classList.add('active');
        });
    });

    function removeActiveClasses() {
        panels.forEach(panel => {
            panel.classList.remove('active');
        });
    }
});
() => {
  cy.visit(baseUrl);
  cy.get('#incrementBtn').click();
  cy.get('#counter', { timeout: 6000 }).should('have.text', '1'); // Timeout adjusted to 6000ms
}

