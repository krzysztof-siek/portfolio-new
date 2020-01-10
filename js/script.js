window.addEventListener('load', (event) => {

    // loader = () => {

    console.log('DOM fully loaded and parsed');
    const loader = document.querySelector(".loader-bg");
    loader.classList.add("hide")
    // }

    // setTimeout(loader, 1000);



    //  toggle nav-links when press nav-button
    const navBtn = document.querySelector('.nav-button');
    const navLinks = document.querySelector(".nav-links");

    toggleNavLinks = () => {
        navLinks.classList.toggle('close')
        navBtn.classList.toggle('close')
    }

    navBtn.addEventListener('click', toggleNavLinks)
    // END OF toggle nav-links when press nav-button



    //  listener for resizeing window to remove close class from nav-link
    normalizeNavLink = () => {
        let windowWidth = window.innerWidth;
        if (windowWidth > 768) {
            navLinks.classList.remove('close')
            navBtn.classList.remove('close')
        } else {
            navLinks.classList.add('close')
        }
    }

    window.addEventListener('resize', normalizeNavLink)
    //   END OF listener for resizeing window to remove close class from nav-link






});

// ZROBIĆ : DOSTOSOWAĆ HEADER DO MOBILE. OGARNĄĆ PRELOADER i /lub lazy components