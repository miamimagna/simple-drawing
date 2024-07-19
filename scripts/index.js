const div = document.querySelector('#container');
const fixedDiv = document.querySelector('.content');
const slider = document.querySelector('#size');
const showSize = document.querySelector('#show-size');

function sizeShow() {
    showSize.innerText = slider.value;
}

slider.addEventListener('click', sizeShow);

function addDiv(x, y) {
    const size = slider.value;
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
    mouseState = false;
}

div.addEventListener('pointermove', print);
div.addEventListener('pointerdown', inn)
div.addEventListener('pointerup', out);
fixedDiv.addEventListener('pointerup', out);

function remove() {
    while (true) {
        const small = div.querySelector('.small');
        if (small)
            div.removeChild(small);
        else break;
    }
}

const button = document.querySelector('button');
button.addEventListener('click', remove);
