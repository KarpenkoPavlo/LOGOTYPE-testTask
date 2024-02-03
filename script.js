/* night theme start */
// Отримую в const (незміну змінну) елементи HTML розмітки
const bttDayNight = document.querySelector('.bttDayNight');
const bttDay = document.querySelector('.bttDay');
const bttNight = document.querySelector('.bttNight');
const mainHeaderImgLogo = document.querySelector('.mainHeaderImgLogo');
const mainHeaderItem = document.querySelectorAll('.mainHeader-item');
const mainSearchInput = document.querySelector('.mainSearch-input');
const mainGame__container = document.querySelector('.mainGame__container');
const footerLeft = document.querySelector('.footerLeft');
// Функція для зміни світлої-темної теми
function toggleDayNight() {
    // Якщо кнопка bttDay має dsiplay: block то виконуємо код
    if (bttDay.style.display !== 'none') {
        bttDay.style.display = 'none';
        bttNight.style.display = 'block';
        bttNight.style.backgroundColor = "white";
        document.body.style.backgroundColor = 'black';
        bttDayNight.style.backgroundColor = '#183A5D';
        mainHeaderImgLogo.src = "/img/mainHeader/mainHeaderLogoWhite.svg";
        mainSearchInput.style.backgroundColor = "rgba(24, 58, 93, 1)";
        mainSearchInput.style.color = "rgba(255, 255, 255, 1)";
        mainGame__container.style.backgroundColor = "rgba(14, 18, 25, 1)";
        footerLeft.style.backgroundColor = "rgba(32, 36, 52, 1)";
        
        // За допомогою forEach перебираю та навішую на кожен елемент функцію в якій змінюю колір
        mainHeaderItem.forEach(function(item) {
            item.style.color = "rgba(13, 208, 186, 1)";
        })
    // В іншому випадку виконуємо код
    } else {
        bttDay.style.display = 'block';
        bttNight.style.display = 'none';
        bttNight.style.backgroundColor = "#183A5D";
        document.body.style.backgroundColor = 'white';
        bttDayNight.style.backgroundColor = 'white';
        mainHeaderImgLogo.src = "/img/mainHeader/mainHeaderLogo.svg";
        mainSearchInput.style.backgroundColor = "rgba(238, 238, 238, 1)";
        mainSearchInput.style.color = "rgba(255, 255, 255, 1)";
        mainGame__container.style.backgroundColor = "rgba(255, 255, 255, 1)";
        footerLeft.style.backgroundColor = "rgba(255, 255, 255, 1)";

        // За допомогою forEach перебираю та навішую на кожен елемент функцію в якій змінюю колір
        mainHeaderItem.forEach(function(item) {
            item.style.color = "rgba(42, 134, 229, 1)";
        })
    }
}
/* night theme end */