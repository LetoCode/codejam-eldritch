
//const popup_btns = document.querySelectorAll('.popup_btn');
// const popup_close = document.querySelectorAll('.close-popup');
const body = document.querySelector('body');
const btnBegin = document.querySelector('.btn_begin');
const aincientsOnloadOutSide = document.querySelector('.aincients._onload_out_side');
const mainTextAincientOnloadOutSide = document.querySelector('.main__text._aincient._onload_out_side');


btnBegin.addEventListener('click', function (event) {
   popupClose(event.target.closest('.popup'));

});

// popup_btns.forEach(popup_btn => {
//    popup_btn.addEventListener('click', function (event) {
//       const popupId = popup_btn.getAttribute('href').replace('#', '');
//       const thisPopup = document.getElementById(popupId);
//       popupOpen(thisPopup);
//       event.preventDefault(); //this method block next actions of link
//    });
// });

// function popupOpen(thisPopup) {
//    if (thisPopup) {
//       thisPopup.classList.add('_open');
//       body.classList.add('popup-open');
//       thisPopup.addEventListener('click', function (event) {
//          if (!event.target.closest('.popup__content')) {
//             popupClose(event.target.closest('.popup'));
//          };
//       });
//    };
// }



function popupClose(thisPopup) {
   if (thisPopup) {
      thisPopup.classList.remove('_open')
      body.classList.remove('popup-open');
      aincientsOnloadOutSide.classList.remove('_onload_out_side');
      mainTextAincientOnloadOutSide.classList.remove('_onload_out_side');
   };
};



// popup_close.forEach(popup_close_el => {
//    popup_close_el.addEventListener('click', function (event) {
//       popupClose(popup_close_el.closest('.popup'));
//       event.preventDefault(); //this method block next actions of link
//    });
// });


// document.addEventListener('keydown', function (event) {
//    if (event.code === 'Escape') {
//       const popupActive = document.querySelector('.popup._open');
//       popupClose(popupActive);
//    }
// });


