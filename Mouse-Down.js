var mouse = {
    x: undefined,
    y: undefined,
}

document.addEventListener("mousedown", (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});