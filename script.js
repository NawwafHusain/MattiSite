const tl = gsap.timeline();

tl.from(".logo, .menu-items, .lang", {
    duration: 1,
    delay: .5,
    opacity: 0,
    y: 50,
    stagger: {
        amount: .4,
    },
})

tl.from(".left-container h1", {
    y: 100,
    skewY: 5,
    duration: 1,
    opacity: 0,
    stagger: {
        amount: 0.4,
    },
}, "-=1"
)



