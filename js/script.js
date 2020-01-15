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
            description.textContent = "Wykorzystuję Scss, aby kod który pisze był czytelniejszy."
            content.style = "width: 80%"
            procent.textContent = "80%"

        } else if (data == "js") {
            technology.textContent = "JS"
            description.textContent = "Korzystam z JavaScript w wersji ES5 w celu zapewnienia odpowiedniej funkcjonalności oraz przejżystości kodu"
            content.style = "width: 70%"
            procent.textContent = "70%"

        } else if (data == "react") {
            technology.textContent = "React"
            description.textContent = "Wykorzystuję framework React, aby pisanie kodu było szybsze i bardziej efektywne"
            content.style = "width: 60%"
            procent.textContent = "60%"

        } else if (data == "bootstrap") {
            technology.textContent = "Bootstrap"
            description.textContent = "Potrafię równiez posługiwać się tym frameworkiem Css"
            content.style = "width: 80%"
            procent.textContent = "80%"

        } else if (data == "sass") {
            technology.textContent = "Sass"
            description.textContent = "Dużo fajniejsze pisanie kodu z wykorzystaniem praprocesora sass"
            content.style = "width: 70%"
            procent.textContent = "70%"

        } else if (data == "git") {
            technology.textContent = "Git i  Github"
            description.textContent = "System kontroli wersji jest niezbędny przy pracy w większym teamie. Sam równiez trzymam swoje projekty na Github"
            content.style = "width: 70%"
            procent.textContent = "70%"

        } else if (data == "rwd") {
            technology.textContent = "Responsive Web Design"
            description.textContent = "W obecnych czasach ty wymóg, aby strony dopasowywały się do urządzenia na jakim są wyświetlane."
            content.style = "width: 80%"
            procent.textContent = "80%"

        }
    }))


    // validacja formularza
    const form = document.querySelector('#contact-form');
    let name = document.getElementById('name')
    let email = document.getElementById('email')
    let message = document.getElementById('message')
    let submit = document.getElementById('submit')
    const errors = {};
    const helpMsgName = document.querySelector('.help-name')
    const helpMsgEmail = document.querySelector('.help-email')
    const helpMsgMessage = document.querySelector('.help-message')




    validateName = (e) => {
        if (e.target.value.length >= 5) {
            errors[e.target.name] = false;
            helpMsgName.textContent = "";
        } else {
            errors[e.target.name] = true;
            helpMsgName.textContent = "Musisz wpisać więcej niż 5 znaków..."
        }
    }
    name.addEventListener('blur', validateName);

    validateEmail = (e) => {
        if (e.target.value.length >= 5 && e.target.value.includes('@')) {
            errors[e.target.name] = false;
            helpMsgEmail.textContent = "";
        } else {
            errors[e.target.name] = true;
            helpMsgEmail.textContent = "Email powinien zawierać @ oraz minimum 5 znaków..."
        }
    }

    email.addEventListener('blur', validateEmail)


    validateMessage = (e) => {
        if (e.target.value.trim().length >= 15) {
            errors[e.target.name] = false;
            helpMsgMessage.textContent = "";
        } else {
            errors[e.target.name] = true;
            helpMsgMessage.textContent = "Wiadomość powinna zawierać więcej niż 15 znaków..."
        }
    }
    message.addEventListener('blur', validateMessage)


    validateForm = (e) => {
        e.preventDefault()
        const errorValues = Object.values(errors);
        if (errorValues.indexOf(true) > -1) {
            return
        }
        name = name.value;
        email = email.value;
        message = message.value;


        form.submit();
        const formSent = document.querySelector('.form-sent')
        formSent.classList.add('show')
        hideSentForm = () => {
            formSent.classList.remove('show')
        }
        setTimeout(hideSentForm, 3000);

    }
    form.addEventListener('submit', validateForm)

    // End of validation
});