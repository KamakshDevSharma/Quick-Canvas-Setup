
//* Mouse Move 
var mouse = {
    x: undefined,
    y: undefined
}

document.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});
