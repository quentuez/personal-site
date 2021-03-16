function getGuestName() {
    let guestName = prompt("Введите ваше имя:");

    if (guestName == '') {
        guest.innerHTML = 'незнакомец';
    } else if (guestName == null) {
        guest.innerHTML = 'незнакомец';
    } else if (guestName.length >= 15) {
        guest.innerHTML = 'незнакомец с длинным именем';
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