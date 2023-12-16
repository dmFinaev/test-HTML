

const tl = gsap.timeline();
tl.fromTo('.front ', {
    x:100,
    opacity: 0,
}, {
x: 0,
opacity: 1,
duration: 2,
},
0.2
)
tl.fromTo('.group', {
    y:-100,
    opacity: 0,
}, {
y: 0,
opacity: 1,
duration: 1.2,
},
0.8
);

tl.fromTo('.main', {
    y:-100,
    opacity: 0,
}, {
y: 0,
opacity: 1,
duration: 0.5,
},
0.8
);
tl.fromTo('.mars_title', {
    z:-100,
    opacity: 0,
}, {
z: 0,
opacity: 1,
duration: 2,

},
1.2
);

/*tl.fromTo('.front ', {
    x:100,
    opacity: 0,
}, {
x: 0,
opacity: 1,
duration: 2,
},
0.8
)*/