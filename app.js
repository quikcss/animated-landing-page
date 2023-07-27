let tl = gsap.timeline()

tl.from("#nav h3, #navpart2 ul li, #navpart3 button", {
    y: -100,
    duration: 1,
    stagger: 0.2
})

tl.from("#content h1, #content h2", {
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.3
})

tl.to("#main", {
    background: "#111",
    color: "#fff",
    duration: 1,
},"anim")

tl.to("#navpart3 button", {
    border: "1px solid whitesmoke",
    color: "#fff",
    duration: 1,
},"anim")
