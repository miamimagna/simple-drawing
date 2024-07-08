const img = document.querySelector('div');
const button = document.querySelector('button');

img.style.visibility = 'visible';
function toggle() {
    img.style.visibility = img.style.visibility === 'visible' ? 'hidden' : 'visible';
}

button.addEventListener('click', toggle);
