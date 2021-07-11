var key;

document.addEventListener('keydown', (event) => {
    var k = event.key.split('Arrow');
    key = k[1];
});
document.addEventListener('keyup', () => {
    key = undefined
});