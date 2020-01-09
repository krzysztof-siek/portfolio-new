window.addEventListener('DOMContentLoaded', (event) => {
    console.log('DOM fully loaded and parsed');



    //  toggle nav-links when press nav-button
    const navBtn = document.querySelector('.nav-button');
    const navLinks = document.querySelector(".nav-links");

    toggleNavLinks = () => {
        navLinks.classList.toggle('close')
    }

    navBtn.addEventListener('click', toggleNavLinks)
    // END OF toggle nav-links when press nav-button



    //  listener for resizeing window to remove close class from nav-link
    normalizeNavLink = () => {
        let windowWidth = window.innerWidth;
        if (windowWidth > 768) {
            navLinks.classList.remove('close')
        } else {
            navLinks.classList.add('close')
        }
    }

    window.addEventListener('resize', normalizeNavLink)
    //   END OF listener for resizeing window to remove close class from nav-link





});