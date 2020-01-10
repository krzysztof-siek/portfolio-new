window.addEventListener('load', (event) => {

    //  LOADER 
    const loader = document.querySelector(".loader-bg");
    loader.classList.add("hide")
    // End of loader



    // ScrollSpy
    var spy = new Gumshoe('#nav-links a');
    // end of scrollSpy



    //  toggle nav-links when press nav-button
    const navBtn = document.querySelector('.nav-button');
    const navLinks = document.querySelector(".nav-links");

    toggleNavLinks = () => {
        navLinks.classList.toggle('open')
        navBtn.classList.toggle('open')
    }

    navBtn.addEventListener('click', toggleNavLinks)
    // END OF toggle nav-links when press nav-button


    // click navLink close NavLinks and navBtn only on mobile
    const navLink = document.querySelectorAll('.nav-link')

    closeNavLinks = () => {
        let windowWidth = window.innerWidth;
        if (windowWidth < 768) {
            navLinks.classList.remove('open')
            navBtn.classList.remove('open')
        }
    }
    navLink.forEach(el => el.addEventListener('click', closeNavLinks))

    showBackToUpButton = () => {
        const pageUp = document.querySelector('.page-up')
        let scrollY = window.scrollY;
        if (scrollY >= 200) {
            pageUp.classList.add('show')
        } else {
            pageUp.classList.remove('show')

        }
    }

    window.addEventListener('scroll', showBackToUpButton)

});