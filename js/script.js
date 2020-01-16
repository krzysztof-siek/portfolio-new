import {
    validateName,
    validateEmail,
    validateMessage,
    validateForm,
} from './validate.js';

import {
    showBackToUpButton,
    toggleNavLinks,
    closeNavLinks
} from "./others.js"

import {
    resetText,
    setRandomText,
    animate
} from './buttonAnim.js';



window.addEventListener('load', (event) => {


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
    //   End of swipper


    //  LOADER 
    const loader = document.querySelector(".loader-bg");
    loader.classList.add("hide")


    // ScrollSpy
    var spy = new Gumshoe('#nav-links a');


    //  toggle nav-links when press nav-button
    const navBtn = document.querySelector('.nav-button');
    navBtn.addEventListener('click', toggleNavLinks)


    // click navLink close NavLinks and navBtn only on mobile
    const navLink = document.querySelectorAll('.nav-link')
    navLink.forEach(el => el.addEventListener('click', closeNavLinks))

    // show back to up button
    window.addEventListener('scroll', showBackToUpButton)



    // skills change content when mouse on
    const skillsIcons = document.querySelectorAll('.skills-single-icon')

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

    // Form validation
    const form = document.querySelector('#contact-form');
    let name = document.getElementById('name')
    let email = document.getElementById('email')
    let message = document.getElementById('message')
    name.addEventListener('blur', validateName);
    email.addEventListener('blur', validateEmail);
    message.addEventListener('blur', validateMessage)
    form.addEventListener('submit', validateForm)
    // End of validation



    // button animation 

    const $Element = document.getElementById('animBtn');
    const $Element2 = document.getElementById('animBtn2');


    $Element.addEventListener('mouseenter', animate);
    $Element.addEventListener('mouseout', resetText);
    $Element2.addEventListener('mouseenter', animate);
    $Element2.addEventListener('mouseout', resetText);


    resetText();

});