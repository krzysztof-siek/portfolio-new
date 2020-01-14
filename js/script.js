window.addEventListener('load', (event) => {

    // Swipper 
    var swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
        },
        pagination: {
            el: '.swiper-pagination',
        },
    });

    const pag = document.querySelectorAll('.swiper-pagination-bullet')
    pag.forEach(el => el.style = "backgroundColor: red")



    //   End of swipper


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

    // skills change content when mouse on
    const skillsIcons = document.querySelectorAll('.skills-single-icon')

    // skillsChangeContent = (e) => {
    //     let a = e.target.getAttribute('data-icon')
    //     console.log(a);
    // }




    skillsIcons.forEach(el => el.addEventListener('mouseover', function () {
        let data = this.getAttribute('data-icon')
        const technology = document.querySelector('.technology')
        const description = document.querySelector(".description")
        const content = document.querySelector('.content')
        const procent = document.querySelector(".procent")
        if (data == "html") {
            technology.textContent = "HTML"
            description.textContent = "Wykorzystuję znaczniki zgodnie z semantyką i standardami W3C. Dobrze napisany kod HTML jest punktem wyjściowym do sukcesu funkcjonowania web aplikacji w sieci. "
            content.style = "width: 80%"
            procent.textContent = "80%"

        } else if (data == "css") {
            technology.textContent = "CSS"
            description.textContent = "Wykorzystuję Scss, aby kod który pisze był czytelniejszy"
            content.style = "width: 80%"
            procent.textContent = "80%"

        } else if (data == "js") {
            technology.textContent = "JS"
            description.textContent = "KORZYSTAM Z JAVASCRIPT W STANDARDZIE ES6 W CELU ZAPEWNIENIA ODPOWIEDNICH FUNKCJONALNOŚCI ORAZ PRZEJRZYSTOŚCI KODU.."
            content.style = "width: 70%"
            procent.textContent = "70%"

        } else if (data == "react") {
            technology.textContent = "react"
            description.textContent = "KORZYSTAM Z JAVASCRIPT W STANDARDZIE ES6 W CELU ZAPEWNIENIA ODPOWIEDNICH FUNKCJONALNOŚCI ORAZ PRZEJRZYSTOŚCI KODU.."
            content.style = "width: 60%"
            procent.textContent = "60%"

        } else if (data == "bootstrap") {
            technology.textContent = "Bootstrap"
            description.textContent = "KORZYSTAM Z JAVASCRIPT W STANDARDZIE ES6 W CELU ZAPEWNIENIA ODPOWIEDNICH FUNKCJONALNOŚCI ORAZ PRZEJRZYSTOŚCI KODU.."
            content.style = "width: 80%"
            procent.textContent = "80%"

        } else if (data == "sass") {
            technology.textContent = "Sass"
            description.textContent = "KORZYSTAM Z JAVASCRIPT W STANDARDZIE ES6 W CELU ZAPEWNIENIA ODPOWIEDNICH FUNKCJONALNOŚCI ORAZ PRZEJRZYSTOŚCI KODU.."
            content.style = "width: 70%"
            procent.textContent = "70%"

        } else if (data == "git") {
            technology.textContent = "Git i  Github"
            description.textContent = "KORZYSTAM Z JAVASCRIPT W STANDARDZIE ES6 W CELU ZAPEWNIENIA ODPOWIEDNICH FUNKCJONALNOŚCI ORAZ PRZEJRZYSTOŚCI KODU.."
            content.style = "width: 70%"
            procent.textContent = "70%"

        } else if (data == "rwd") {
            technology.textContent = "Responsive Web Design"
            description.textContent = "KORZYSTAM Z JAVASCRIPT W STANDARDZIE ES6 W CELU ZAPEWNIENIA ODPOWIEDNICH FUNKCJONALNOŚCI ORAZ PRZEJRZYSTOŚCI KODU.."
            content.style = "width: 80%"
            procent.textContent = "80%"

        }



    }))


});