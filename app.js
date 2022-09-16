const button = document.querySelector('button');
const h1 = document.querySelector('h1');

button.addEventListener('click', function () {
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})

const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    const changeTextColor = (r + g + b);
    if (changeTextColor < 150) {
        textColor.style.color = 'white';
    } else {
        textColor.style.color = 'black';
    }
    return `rgb(${r}, ${g}, ${b})`
}





