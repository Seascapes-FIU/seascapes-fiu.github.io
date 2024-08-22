document.addEventListener('DOMContentLoaded', function() {
    var navbar = document.querySelector('.navbar');

    function checkScroll() {
        if (window.scrollY > 0) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // Check scroll position on load and on scroll
    checkScroll();
    window.addEventListener('scroll', checkScroll);
});

