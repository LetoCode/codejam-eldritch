import '../scss/style.scss';

import ancients from "../assets/Ancients";
import cardsBlue from "../assets/MythicCards/blue";
import cardsBrown from "../assets/MythicCards/brown";
import cardsGreen from "../assets/MythicCards/green";
import bg from '../assets/bg';
import covers from '../assets/cardsCovers';
import ancientsData from '../assets/data/ancients_data';


//==============================================================
const azathoth = document.getElementById('azathoth');
const cthulthu = document.getElementById('cthulhu');
const iogSothoth = document.getElementById('iogSothoth');
const shubNiggurath = document.getElementById('shubNiggurath');
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


//==========================VariableStages====================================
export let firstStage;
export let secondStage;
export let thirdStage;
export let greenCardsAmount;
export let brownCardsAmount;
export let blueCardsAmount;
let isMonster = false;
let isLevel = false;
let level = undefined;

//==============================================================

import { chooseCardsForDifficulties } from './choose';

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

      togleActiveClassToAincients(aincientID);

   }

   if (e.target.closest('.menu')) {
      levelBtn.forEach(el => {
         if (el.firstElementChild.checked) {
            isLevel = true;
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
      if (isMonster && isLevel) {

         chooseCardsForDifficulties(level, firstStage, secondStage, thirdStage);
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


function fillHtmlStageCards() {
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

function togleActiveClassToAincients(aincientID) {
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

function setBg(aincientData) {
   document.body.style.backgroundImage = `url(${aincientData[0].bg})`;

}