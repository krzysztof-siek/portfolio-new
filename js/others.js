const showBackToUpButton = () => {
    const pageUp = document.querySelector('.page-up')
    let scrollY = window.scrollY;
    if (scrollY >= 200) {
        pageUp.classList.add('show')
    } else {
        pageUp.classList.remove('show')

    }
}

const body = document.querySelector('body')
const toggleNavLinks = () => {
    const navBtn = document.querySelector('.nav-button');
    const navLinks = document.querySelector(".nav-links");
    body.classList.toggle('blocked')
    navLinks.classList.toggle('open')
    navBtn.classList.toggle('open')
}

const closeNavLinks = () => {
    body.classList.remove('blocked')
    const navLinks = document.querySelector('.nav-links')
    const navBtn = document.querySelector('.nav-button');
    let windowWidth = window.innerWidth;
    if (windowWidth < 768) {
        navLinks.classList.remove('open')
        navBtn.classList.remove('open')
    }
}

export {
    showBackToUpButton,
    toggleNavLinks,
    closeNavLinks,

}