document.addEventListener('DOMContentLoaded', function() {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('click', function() {
            const page = this.getAttribute('data-page');
            window.location.href = page;
        });

        card.addEventListener('mouseenter', function() {
            this.style.backgroundColor = '#e0e0e0';
        });

        card.addEventListener('mouseleave', function() {
            this.style.backgroundColor = '#fff';
        });
    });
});