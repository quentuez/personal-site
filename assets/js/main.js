function getGuestName() {
    let name = prompt("Введите ваше имя:");

    switch (name) {
        case '':
            elem1.innerHTML = 'Stranger';
            break;
        default:
            elem1.innerHTML = name;
    }
}

getGuestName();

let menuElem = document.getElementById('contentMenu');
let titleElem = menuElem.querySelector('.title');

titleElem.onclick = function () {
    menuElem.classList.toggle('open');
};