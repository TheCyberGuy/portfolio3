
// animations
const aboutMe_Animation = gsap.timeline();


aboutMe_Animation.to('.portrait', {
    duration: 1,
    opacity: 1,
})

aboutMe_Animation.to('#greeting', {
    opacity: 1,
    delay: 0.01,
    duration: .7,
    color: '#fff',
    stagger: .1,
}, '>-.75')

//  --------------------------------------------------------

var whatIDo_Animation = gsap.timeline();

whatIDo_Animation.to('#ico', {
    duration: .8,
    scale: 1.2,
    opacity: 1,
    stagger: .5,
})


whatIDo_Animation.to('#title', {
    duration: .8,
    opacity: 1,
    stagger: .5,
}, '>-75%')

whatIDo_Animation.to('.darkHR', {
    duration: .8,
    opacity: 1,
    stagger: .5,
}, '>-75%')

whatIDo_Animation.to('#short', {
    duration: .8,
    opacity: 1,
    stagger: .5,
}, '>-100%')

//  ----------------------------------------------------------------

const controller = new ScrollMagic.Controller();




const aboutMe_scene = new ScrollMagic.Scene({
    triggerElement: '#aboutMe',
    offset: window.innerHeight < 1000 ? -157 : -25,
    reverse: false,
})
    .setTween(aboutMe_Animation)
    // .addIndicators()
    .addTo(controller);



const whatIDo_scene = new ScrollMagic.Scene({
    triggerElement: '#whatido',
    offset: window.innerHeight < 1000 ? -175 : -110,
    reverse: false,
})
    .setTween(whatIDo_Animation)
    // .addIndicators()
    .addTo(controller);