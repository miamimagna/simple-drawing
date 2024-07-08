const div = document.querySelector('#container'); 
const size = 5;
function addDiv(x, y) {
    const sdiv = document.createElement('div');
    sdiv.classList.add('small');
    sdiv.style.width = size + 'px';
    sdiv.style.height = size + 'px';
    sdiv.style.borderRadius = size / 2 + 'px';
    sdiv.style.zIndex = '0';
    div.appendChild(sdiv);
    sdiv.style.position = 'absolute';
    x -= size / 2, y -= size / 2;
    sdiv.style.top = y + 'px';
    sdiv.style.left = x + 'px';
}

let mouseState = false;
function inn(e) {
    mouseState = true;
    addDiv(e.x, e.y);
}
function print(e) {
    if (mouseState)
        addDiv(e.x, e.y);
}

function out(e) {
    addDiv(e.x, e.y);
    mouseState = false;
}

div.addEventListener('mouseover', print);
div.addEventListener('mousedown', inn)
div.addEventListener('click', out);
