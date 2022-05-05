/* gtag('event', 'event_action', {
    ...props
}); */

let pointerX, pointerY;

document.onmousemove = function(event) {
    pointerX = event.pageX;
    pointerY = event.pageY;
}

setInterval(() => {
    gtag('event', 'pointer_position', {
        'pointer_x': pointerX,
        'pointer_y': pointerY,
    })
}, 1000)




