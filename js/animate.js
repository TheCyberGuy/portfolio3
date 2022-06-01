const arrow = document.querySelector('#arrow')

const btn = document.querySelector('.navbar-toggler')

gsap.from('#navNavs', {
    duration: 1.2,
    opacity: 0,
    stagger: .4
})


gsap.to('#arrow', {
    duration: 1.2,
    y: 15,
    ease: "bounce.out",

})

var tl = gsap.timeline({repeat: -1,  repeatDelay:15})


tl.to(arrow, {
    duration: 1.2,
    y: 15,
    ease: "bounce.out",
    delay: 1
})


tl.to(arrow, {
    duration: .4,
    y: 0,
    ease: "none",
})

let clicked = false;


btn.addEventListener('click', () => {
    if (clicked === false) {
    
        gsap.from('#navNavs', {
            delay: .4,
            duration: .6,
            opacity: 0,
            stagger: .2
        })
        
        clicked = true
    } else{
        clicked = false
    }
        
})

const d = new Date().getFullYear()

document.querySelector('#copyright').innerHTML = `© ${d} Copyright: Sas Csanád`