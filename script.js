/* light-dark theme start */
let themeDayDark = document.getElementById('themeDayDark');
let lightThemeLink = document.getElementById('lightTheme');
let darkThemeLink = document.getElementById('darkTheme');
let mainInfoItem = document.querySelectorAll('.mainInfo-item');
let mainHeaderItem = document.querySelectorAll('.mainHeader-item');
let mainHeaderImgLogo = document.querySelector('.mainHeaderImgLogo');


function lightThemeToggle() {
    themeDayDark.href = "/dark-theme/dark.css";
    mainHeaderItem.forEach(function(item) {
        item.style.color = "rgba(13, 208, 186, 1)";
    })
    mainInfoItem.forEach(function(item) {
        item.style.backgroundColor = "rgba(32, 36, 52, 1)";
    })

    mainHeaderImgLogo.src = "/img/mainHeader/mainHeaderLogoWhite.svg";
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
};
/* light-dark theme end */

/* bar start */
document.addEventListener('DOMContentLoaded', function() {
    let ratingItems = document.querySelectorAll('.mainEvaluation-ratingItem');
    
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
    });
});
/* bar end */

/*burger start*/
function burgerF() {
    let burger = document.querySelector(".header__burger");
    let mainHeaderMenu = document.querySelector(".mainHeader-menu");
    let mainSearchForm = document.querySelector('.mainSearch-form');
  
    burger.addEventListener("click", function() {
      let computedStyle = window.getComputedStyle(mainHeaderMenu);
  
      // Додаю та видаляю на burger при кліці клас
      this.classList.toggle("cross");
  
      if (computedStyle.display === "none") {
        mainHeaderMenu.style.display = "block";
        mainSearchForm.style.display = "block";
      } else if (computedStyle.display === "block") {
        mainHeaderMenu.style.display = "none";
        mainSearchForm.style.display = "none";
      }
    });
  }
  
  burgerF();
  /*burger end*/