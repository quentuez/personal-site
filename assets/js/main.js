function getGuestName() {
    let guestName = prompt("Введите ваше имя:");

    if (guestName == '') {
        guest.innerHTML = 'Stranger';
    } else if (guestName == null) {
        guest.innerHTML = 'Stranger';
    } else if (guestName.length >= 15) {
        guest.innerHTML = 'Stranger with long name';
    }
    else {
        guest.innerHTML = guestName;
    }
}

getGuestName();

let menuElem = document.getElementById('contentMenu');
let titleElem = menuElem.querySelector('.title');

titleElem.onclick = function () {
    menuElem.classList.toggle('open');
};