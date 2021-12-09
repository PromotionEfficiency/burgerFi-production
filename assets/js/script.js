// ---------------------------------------------tabs----------------------------

const tabs = document.querySelectorAll('[data-tab-target]')
const tabsContent = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const tbs = document.querySelectorAll('.tbs')
        tbs.forEach(tb => {
            tb.classList.remove('active')
        })
        tab.classList.add('active')
        const target = document.querySelector(tab.dataset.tabTarget)
        tabsContent.forEach(tabContent => {
            tabContent.classList.remove('active')
        })
        target.classList.add('active')
    })
})

// --------------------------------------------- Animation----------------------------
// --------------------------------------------- Home----------------------------

gsap.registerPlugin(ScrollTrigger);

gsap.from('.hero-contert', { duration: 1.5, y: '50%', opacity: 0 })

gsap.from('.abotus-content', {
    duration: 1.5,
    y: '50%',
    opacity: 0,
    scrollTrigger: '.aboutUs',
})

gsap.from('.burger-fech-left', {
    duration: 1.5,
    y: '50%',
    opacity: 0,
    scrollTrigger: '.burger-fech',
})

gsap.from('.burger-fech-right', {
    duration: 1.5,
    y: '50%',
    opacity: 0,
    scrollTrigger: '.burger-fech',
})

gsap.from('.menu-items', {
    duration: 1.5,
    y: '50%',
    opacity: 0,
    scrollTrigger: '.food-menu-title',
})

// --------------------------------------------- About----------------------------


gsap.from('.aboutus-hero-content', {
    duration: 1.5,
    y: '50%',
    opacity: 0,
})

gsap.from('.about-us-content', {
    duration: 1.5,
    y: '50%',
    opacity: 0,

})

gsap.from('.box1', {
    duration: 1.5,
    y: '50%',
    opacity: 0,
    scrollTrigger: '.why-us',

})

gsap.from('.box2', {
    duration: 1.5,
    y: '50%',
    opacity: 0,
    delay: 0.6,
    scrollTrigger: '.why-us',

})

gsap.from('.box3', {
    duration: 1.5,
    y: '50%',
    opacity: 0,
    delay: 1.3,
    scrollTrigger: '.why-us',

})

// --------------------------------------------- About----------------------------

gsap.from('.contact-us-h1', {
    duration: 1.5,
    y: '50%',
    opacity: 0,
})

gsap.from('.form-container', {
    duration: 1.5,
    y: '50%',
    opacity: 0,

})