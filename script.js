/* light-dark theme start */
let themeDayDark = document.getElementById('themeDayDark');
let lightThemeLink = document.getElementById('lightTheme');
let darkThemeLink = document.getElementById('darkTheme');
let bttDayNight = document.querySelector('.bttDayNight');
let mainInfoItem = document.querySelectorAll('.mainInfo-item');
let mainHeaderItem = document.querySelectorAll('.mainHeader-item');
let mainHeaderImgLogo = document.querySelector('.mainHeaderImgLogo');

let mainHideImg1 = document.querySelector('.mainHide-img1');
let mainHideImg2 = document.querySelector('.mainHide-img2');
let mainHideImg3 = document.querySelector('.mainHide-img3');
let mainHideImg4 = document.querySelector('.mainHide-img4');

let footerSocialImg1 = document.querySelector('.footerSocialImg1');
let footerSocialImg2 = document.querySelector('.footerSocialImg2');
let footerSocialImg3 = document.querySelector('.footerSocialImg3');
let footerSocialImg4 = document.querySelector('.footerSocialImg4');
let footerSocialImg5 = document.querySelector('.footerSocialImg5');
let footerSocialImg6 = document.querySelector('.footerSocialImg6');


function lightThemeToggle() {
    themeDayDark.href = "/dark-theme/dark.css";
    mainHeaderItem.forEach(function(item) {
        item.style.color = "rgba(13, 208, 186, 1)";
    })
    mainInfoItem.forEach(function(item) {
        item.style.backgroundColor = "rgba(32, 36, 52, 1)";
    })

    mainHeaderImgLogo.src = "/img/mainHeader/mainHeaderLogoWhite.svg";

    mainHideImg1.src = "/img/header-items/item1.svg";
    mainHideImg2.src = "/img/header-items/item2.svg";
    mainHideImg3.src = "/img/header-items/item3.svg";
    mainHideImg4.src = "/img/header-items/item4.svg";

    footerSocialImg1.src = "/img/footer/footer-socialWhite1.svg";
    footerSocialImg2.src = "/img/footer/footer-socialWhite2.svg";
    footerSocialImg3.src = "/img/footer/footer-socialWhite3.svg";
    footerSocialImg4.src = "/img/footer/footer-socialWhite4.svg";
    footerSocialImg5.src = "/img/footer/footer-socialWhite5.svg";
    footerSocialImg6.src = "/img/footer/footer-socialWhite6.svg";
};

function darkThemeToggle() {
    themeDayDark.href = "/dark-theme/light.css";
    mainHeaderItem.forEach(function(item) {
        item.style.color = "rgba(42, 134, 229, 1)";
    })
    mainInfoItem.forEach(function(item) {
        item.style.backgroundColor = "rgba(255, 255, 255, 1)";
    })

    mainHeaderImgLogo.src = "/img/mainHeader/mainHeaderLogo.svg";

    mainHideImg1.src = "/img/mainHide/mainHideItem1.svg";
    mainHideImg2.src = "/img/mainHide/mainHideItem2.svg";
    mainHideImg3.src = "/img/mainHide/mainHideItem3.svg";
    mainHideImg4.src = "/img/mainHide/mainHideItem4.svg";

    footerSocialImg1.src = "/img/footer/footer-social1.svg";
    footerSocialImg2.src = "/img/footer/footer-social2.svg";
    footerSocialImg3.src = "/img/footer/footer-social3.svg";
    footerSocialImg4.src = "/img/footer/footer-social4.svg";
    footerSocialImg5.src = "/img/footer/footer-social5.svg";
    footerSocialImg6.src = "/img/footer/footer-social6.svg";
};
/* light-dark theme end */

/* bar start */
document.addEventListener('DOMContentLoaded', function() {
    let ratingItems = document.querySelectorAll('.mainEvaluation-ratingItem');
    let yourRatingElement = document.getElementById('yourRating');
    let ratingTitle2 = document.querySelector('.ratingTitle2');

    ratingItems.forEach(function(item, index) {
        item.addEventListener('mouseover', function() {
            for (let i = 0; i <= index; i++) {
                ratingItems[i].classList.add('hovered');
            }
        });

        item.addEventListener('mouseout', function() {
            ratingItems.forEach(function(item) {
                item.classList.remove('hovered');
            });
        });

        item.addEventListener('click', function() {
            let selectedRating = this.textContent;
            yourRatingElement.textContent = selectedRating;

            ratingItems.forEach(function(item, i) {
                if (i <= index) {
                    item.classList.add('selected');
                } else {
                    item.classList.remove('selected');
                }
            });

            ratingTitle2.textContent = "13 votes";
        });
    });
});
/* bar end */

/*burger start*/
function burger() {
  let burger = document.querySelector(".header__burger");
  let mainHeaderMenu = document.querySelector(".mainHeader-menu");
  let mainSearchForm = document.querySelector('.mainSearch-form');
  let mainHide = document.querySelector('.mainHide');

  burger.addEventListener("click", function() {
    let computedStyle = window.getComputedStyle(mainHeaderMenu);

    // Додаю та видаляю на burger при кліці клас
    this.classList.toggle("cross");

    if (computedStyle.display === "none") {
      mainHeaderMenu.style.display = "block";
      mainSearchForm.style.display = "block";
      mainHide.style.display = "block";
    } else if (computedStyle.display === "block") {
      mainHeaderMenu.style.display = "none";
      mainSearchForm.style.display = "none";
      mainHide.style.display = "none";
    }
  });
}

burger();
/*burger end*/

/* mainGame burger start */
function mainGameBurger() {
  let burger = document.querySelector(".mainGameBurger__burger");
  let mainGameBurgerItems = document.querySelector('.mainGameBurger-items');

  burger.addEventListener("click", function() {
    let computedStyle = window.getComputedStyle(mainGameBurgerItems);

    // Додаю та видаляю на burger при кліці клас
    this.classList.toggle("cross");

    if (computedStyle.display === "none") {
        mainGameBurgerItems.style.display = "block";
    } else if (computedStyle.display === "block") {
        mainGameBurgerItems.style.display = "none";
    }
  });
}

mainGameBurger();
/* mainGame burger end */