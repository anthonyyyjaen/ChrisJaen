const showNavbar = () => {
    let scroll = window.scrollY;
    const navbar = document.querySelector('.navbar-header');
    if(scroll <= 750) {     
        navbar.classList.remove('sticky');
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }
    else{
        navbar.classList.add('sticky');
    }
    console.log(scroll)
};

const renderTitle = () => {
    let scroll = window.scrollY;
    
    if(scroll <= 0) {
        document.title = 'Chris Anthony Jaen'
    }
    else if(scroll <= 952) {
        document.title = 'Chris Anthony Jaen | About'
    }
    else if(scroll <= 1810) {
        document.title = 'Chris Anthony Jaen | Education'
    }
    else if(scroll <= 3060) {
        document.title = 'Chris Anthony Jaen | Skills'
    }
    else if(scroll <= 4418) {
        document.title = 'Chris Anthony Jaen | Projects'
    }
    else if(scroll <= 5478) {
        document.title = 'Chris Anthony Jaen | Contacts'
    }
}

window.addEventListener('scroll', renderTitle);
window.addEventListener('scroll', showNavbar);


const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');


hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
})

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}))


