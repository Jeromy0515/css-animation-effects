var animation = anime.timeline({
    autoplay: false //
});

animation
.add({
    targets: '#btn', // element
    top: '100%', // action
    duration: 500, // time(ms)
    easing: 'easeInOutSine'
})
.add({
    targets: '#stars',
    top: '0px',
    duration: 1000,
    easing: 'easeInOutSine'
})
.add({
    targets: '#mountains_behind',
    bottom: '0px',
    duration: 1000,
    easing: 'easeInOutSine'
})
.add({
    targets: '#moon',
    top: '0px',
    duration: 1000,
    easing: 'easeInOutSine'
})
.add({
    targets: '#mountains_front',
    bottom: '0px',
    duration: 1000,
    easing: 'easeInOutSine'
})
.add({
    targets: '#text',
    marginRight: 0,
    duration: 1000,
    easing: 'easeInOutSine'
})
.add({
    targets: '#btn',
    top: '50%',
    duration: 1000,
    easing: 'easeInOutSine'
});

document.querySelector('#btn').onclick = animation.play;