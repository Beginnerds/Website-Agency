const nav = document.querySelector('nav');
const heroSection = document.querySelector('.hero-section');
const logo = document.querySelector('nav img');
const navLinks = document.querySelector('.nav-links');
const hamburger = document.querySelector('.hamburger');

// Toggle Nav

hamburger.addEventListener('click',(e)=>{
    navLinks.classList.toggle('nav-open');
})

// Animate Nav

const serviceInterObs = new IntersectionObserver(animateNav,{
    root:null,
    rootMargin:"-100px 0px 0px 0px",
})

serviceInterObs.observe(heroSection);

function animateNav(entries,observer){
    entries.forEach(entry => {
        if(!entry.isIntersecting){
            nav.classList.add('nav-scrolled');
            logo.setAttribute("src","./images/logo-dark.png");
            navLinks.style.backgroundColor = "#ffffff"
        }
        if(entry.isIntersecting){
            nav.classList.remove("nav-scrolled");
            navLinks.style.backgroundColor = ""
            logo.setAttribute("src","./images/logo-light.png");
        }   
    });
}

// Animate Items on scroll

const animItems = document.querySelectorAll('.animate')

const animationObserver = new IntersectionObserver(animateItems,{
    root:null,
    rootMargin:"0px 0px 100px 0px",
})

animItems.forEach((item)=>{
    animationObserver.observe(item);
})

function animateItems(entries,observer){
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            let elem = entry.target;
            elem.classList.add('appear');
            observer.unobserve(elem);
        }
    })
}

/***********************************/

const animTexttems = document.querySelectorAll('.animate-text')

const textAnimationObserver = new IntersectionObserver(animateItems,{
    root:null,
    rootMargin:"0px 0px -100px 0px",
})

animTexttems.forEach((item)=>{
    textAnimationObserver.observe(item);
})

function animateItems(entries,observer){
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            let elem = entry.target;
            elem.classList.add('appear-text');
            observer.unobserve(elem);
        }
    })
}

