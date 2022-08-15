const links = document.querySelectorAll("a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}

const btnsOpen = document.querySelectorAll('.hero__item, .catalog__item');
const popUp = document.querySelector('.pop-up');
const bluredElements = document.querySelectorAll('.header, .main, .footer');
const bodyElem = document.querySelector('body');
const popUpImg = document.querySelector('.pop-up__img');

const handle = function(){
    popUp.classList.add('pop-up_active');
    bluredElements.forEach(elem => {
        elem.classList.add('blured');
    });
    bodyElem.style.overflow = 'hidden';
    popUpImg.src = this.querySelector('img').src;
}

btnsOpen.forEach(btn => {
    btn.addEventListener('click', handle);
});

popUp.addEventListener('click', function(e){
    if(e.target===this){
        popUp.classList.remove('pop-up_active');
        bluredElements.forEach(elem => {
            elem.classList.remove('blured');
        });
        bodyElem.style.overflow = 'auto';
    }
});