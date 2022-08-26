
const body = document.querySelector('body');
const btnBegin = document.querySelector('.btn_begin');
const aincientsOnloadOutSide = document.querySelector('.aincients._onload_out_side');
const mainTextAincientOnloadOutSide = document.querySelector('.main__text._aincient._onload_out_side');


btnBegin.addEventListener('click', function (event) {

   const fangs = document.querySelector('.popup._open ');
   fangs.classList.add('_fangs_off');
   btnBegin.classList.add('_fangs_off');
   const e = event.target.closest('.popup');
   setTimeout(popupClose, 500, e);
});

popupClose();


function popupClose(thisPopup) {
   if (thisPopup) {
      thisPopup.classList.remove('_open');
      thisPopup.classList.add('_closed');
      body.classList.remove('popup-open');
      aincientsOnloadOutSide.classList.remove('_onload_out_side');
      mainTextAincientOnloadOutSide.classList.remove('_onload_out_side');
   };
};


