import '../scss/style.scss';
import './popup';
import './cards';

import ancients from "../assets/Ancients";
import cardsBlue from "../assets/MythicCards/blue";
import cardsBrown from "../assets/MythicCards/brown";
import cardsGreen from "../assets/MythicCards/green";
import bg from '../assets/bg';
import covers from '../assets/cardsCovers';
import ancientsData from '../assets/data/ancients_data';


//==============================================================
const aincients = document.querySelector('.aincients');
const aincientsCards = document.querySelectorAll('.aincients__card');

const stageOneGreen = document.getElementById('stageOneGreen');
const stageOneBrown = document.getElementById('stageOneBrown');
const stageOneBlue = document.getElementById('stageOneBlue');
const stageTwoGreen = document.getElementById('stageTwoGreen');
const stageTwoBrown = document.getElementById('stageTwoBrown');
const stageTwoBlue = document.getElementById('stageTwoBlue');
const stageTreeGreen = document.getElementById('stageTreeGreen');
const stageTreeBrown = document.getElementById('stageTreeBrown');
const stageTreeBlue = document.getElementById('stageTreeBlue');


const btnStart = document.querySelector('.btn_start');
const levelBtn = document.querySelectorAll('.level__btn');

const mainTextAincient = document.querySelector('.main__text._aincient');
const mainTextLevel = document.querySelector('.main__text._level');
const deckStagesOnloadOutSide = document.querySelector('.deck__stages._onload_out_side');
const menuOnloadOutSide = document.querySelector('.menu._onload_out_side');

const popupEnd = document.querySelector('.popup_end');
//==========================VariableStages====================================
export let firstStage;
export let secondStage;
export let thirdStage;
export let greenCardsAmount;
export let brownCardsAmount;
export let blueCardsAmount;
let isPlaying = false;
let isMonster = false;
let isLevel = false;
let level = undefined;
export let playDeck;

//==============================================================

import { chooseCardsForDifficulties, shuffleDecks, getStageDeck, getShuffledCards } from './choose';
import { setCover, showCover, setFaceForRotation, addActiveClassToCardDeck } from './cards';

//==============================================================


document.addEventListener('click', documentClick);


function documentClick(e) {


   if (e.target.closest('.aincients')) {

      //заполняем количество карт по цветам
      const aincientID = e.target.closest('.aincients__card').id;
      const aincientData = getAncientData(aincientID);
      if (aincientData.length > 0) {
         setVariableStages(aincientData);
         fillHtmlStageCards();
         setBg(aincientData);
         isMonster = true;
      } else {
         alert('aincientData.length = 0');
      }

      togleActiveClassToAincient(aincientID);
      addActiveClassToAincientsContainer();
      hideMainTextAincient();
      showDeckStages();
      showDifficulties();
      showMainTextLevel();
   }

   if (e.target.closest('.menu')) {
      levelBtn.forEach(el => {
         if (el.firstElementChild.checked) {
            isLevel = true;
            hideMainTextLevel();
            level = el.firstElementChild.id;
         }
      })

   }


   if (e.target === btnStart) {
      if (isMonster === false) {
         alert('Не выбран древний!');
      }
      if (isLevel === false) {
         alert('Не выбран уровень!');
      }

      if (isMonster && isLevel && !isPlaying) {

         isPlaying = true;

         //Получаем все возможный карты согласно выбранной сложности и выбранного древнего
         const cardsChosen = chooseCardsForDifficulties(level);

         //Перемешиваем полученные карты
         const cardsChosenShuffled = shuffleDecks(cardsChosen);

         //Получаем колоды для каждого этапа
         let firstStageDeck = getStageDeck(firstStage, cardsChosenShuffled);
         let secondStageDeck = getStageDeck(secondStage, cardsChosenShuffled);
         let thirdStageDeck = getStageDeck(thirdStage, cardsChosenShuffled);

         //Перемешиваем колоды
         firstStageDeck = getShuffledCards(firstStageDeck);
         secondStageDeck = getShuffledCards(secondStageDeck);
         thirdStageDeck = getShuffledCards(thirdStageDeck);

         playDeck = thirdStageDeck.concat(secondStageDeck).concat(firstStageDeck);

         //cardDeckBack.style.backgroundImage = `url('${playDeck[playDeck.length - 1].cardCover}')`;
         setCover(playDeck[playDeck.length - 1].cardCover);
         showCover();
         setFaceForRotation(playDeck[playDeck.length - 1].cardFace);

         addActiveClassToCardDeck();


      }
   }

}

function getAncientData(id) {
   //получаем элемент массива с данными древнего по которому кликнули
   const ancientClickedData = ancientsData.filter(el => el.id === id);
   return ancientClickedData;
}


function setVariableStages(aincientData) {
   firstStage = (aincientData[0].firstStage);
   secondStage = (aincientData[0].secondStage);
   thirdStage = (aincientData[0].thirdStage);
   greenCardsAmount = firstStage.greenCards + secondStage.greenCards + thirdStage.greenCards;
   brownCardsAmount = firstStage.brownCards + secondStage.brownCards + thirdStage.brownCards;
   blueCardsAmount = firstStage.blueCards + secondStage.blueCards + thirdStage.blueCards;
}


export function fillHtmlStageCards() {
   stageOneGreen.innerText = firstStage.greenCards;
   stageOneBrown.innerText = firstStage.brownCards;
   stageOneBlue.innerText = firstStage.blueCards;
   stageTwoGreen.innerText = secondStage.greenCards;
   stageTwoBrown.innerText = secondStage.brownCards;
   stageTwoBlue.innerText = secondStage.blueCards;
   stageTreeGreen.innerText = thirdStage.greenCards;
   stageTreeBrown.innerText = thirdStage.brownCards;
   stageTreeBlue.innerText = thirdStage.blueCards;
}


function togleActiveClassToAincient(aincientID) {
   aincientsCards.forEach(el => {
      if (el.id === aincientID) {
         el.classList.add('_active');
         el.classList.remove('_inActive');
      } else {
         el.classList.add('_inActive');
         el.classList.remove('_active');
      }
   })
}


function hideMainTextAincient() {
   mainTextAincient.classList.add('_onload_out_side');
}


function showDeckStages() {
   deckStagesOnloadOutSide.classList.remove('_onload_out_side');
}


function addActiveClassToAincientsContainer() {
   aincients.classList.add('_active');
}


function showDifficulties() {
   menuOnloadOutSide.classList.remove('_onload_out_side');
}

function showMainTextLevel() {
   mainTextLevel.classList.remove('_onload_out_side');
}

function hideMainTextLevel() {
   mainTextLevel.classList.add('_onload_out_side');
}

function setBg(aincientData) {

   const img = new Image();
   img.src = aincientData[0].bg;
   img.onload = () => {
      document.body.style.backgroundImage = `url(${aincientData[0].bg})`;
   };
}


export function removeCardFromStageList(card) {
   const stageKey = `${card.color}Cards`;

   if (firstStage[stageKey] != 0) {
      firstStage[stageKey] = firstStage[stageKey] - 1;
      return;
   }

   if (secondStage[stageKey] != 0) {
      secondStage[stageKey] = secondStage[stageKey] - 1;
      return;
   }

   if (thirdStage[stageKey] != 0) {
      thirdStage[stageKey] = thirdStage[stageKey] - 1;
      showEndPopup();
      return;
   }

}

function showEndPopup() {
   if (playDeck.length === 0) {
      popupEnd.classList.add('_open');
   }
}

