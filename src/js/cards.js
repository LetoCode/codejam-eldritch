import { playDeck, removeCardFromStageList, fillHtmlStageCards } from "./index";

const cardDeck = document.querySelector('.cards__deck');//changed

const cardFaceClass = document.querySelector('.card-deck__face');//changed
const cardCoverClass = document.querySelector('.card-deck__back');//changed

const cardRotatedClassFaceImg = document.querySelector('.card_rotated.face-side img');
const cardRotatedClassCoverImg = document.querySelector('.card_rotated.back-side img');//changed

const rotatedImgContainer = document.querySelector('.rotated-img__container');//changed
const cardRotatedClassFace = document.querySelector('.card_rotated.face-side');
const cardRotatedClassCover = document.querySelector('.card_rotated.back-side');


let cardCover;
let cardFace;
let cardFaceForRotation;
let cardCoverForRotation;


export function addActiveClassToCardDeck() {
   cardDeck.classList.add('_active');
}

export function setCover(path) {
   cardCover = path ? path : '';
}


export function showCover() {
   cardCoverClass.style.backgroundImage = `url('${cardCover}')`;
}


export function setFaceForRotation(path) {
   cardFaceForRotation = path ? path : '';
}

function setCoverForRotation(card) {
   cardCoverForRotation = card.cardCover;
}


function setFace(path) {
   cardFace = path ? path : '';

}

function showFace() {
   cardFaceClass.style.backgroundImage = `url('${cardFace}')`;
}


function getUpCurrentCard() {
   return playDeck.pop();

}

function getCurrentCardFacePath(card) {
   return card.cardFace;

}

function getCardForCoverPath() {
   if (playDeck.length === 0) {
      return '';
   } else {
      return playDeck[playDeck.length - 1].cardCover;
   }
}


function clickOnCard() {
   cardCoverClass.removeEventListener('click', clickOnCard);

   //потом снимаем верхнюю карту

   const currentCard = getUpCurrentCard();
   const currentCardFace = getCurrentCardFacePath(currentCard);
   const currentCardCover = getCardForCoverPath();
   setCover(currentCardCover);
   showCover();
   setFaceForRotation(currentCardFace);
   setCoverForRotation(currentCard);

   cardRotatedClassCoverImg.setAttribute('src', cardCoverForRotation);
   cardRotatedClassFaceImg.setAttribute('src', cardFaceForRotation);

   rotatedImgContainer.classList.add('_visible');
   cardRotatedClassFace.classList.add('_visible');
   cardRotatedClassCover.classList.add('_visible');


   removeCardFromStageList(currentCard);
   fillHtmlStageCards();

   //Ждем оконачния анимации
   setTimeout(function () {
      setFace(currentCardFace);
      showFace();
      rotatedImgContainer.classList.remove('_visible');
      cardRotatedClassFace.classList.remove('_visible');
      cardRotatedClassCover.classList.remove('_visible');
      cardCoverClass.addEventListener('click', clickOnCard);
   }, 600
   )


}


cardCoverClass.addEventListener('click', clickOnCard);