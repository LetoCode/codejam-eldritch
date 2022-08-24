import { firstStage, secondStage, thirdStage, greenCardsAmount, brownCardsAmount, blueCardsAmount } from './index';
import cardsDataBlue from '../assets/data/blue_cards_data';
import cardsDataBrown from '../assets/data/brown_cards_data';
import cardsDataGreen from '../assets/data/green_cards_data';

//===================================================================


let greenCards;
let brownCards;
let blueCards;

//отбираем карты согласно выбранной сложности
//далее сравниваем количество выбранных карт с необходимым количеством
//для уровней veryLow и veryHigh
//если количества не хватает, то добираем карты нормальной сложности
export function chooseCardsForDifficulties(level) {
   //console.log(level);

   if (level === 'veryLow') {
      greenCards = cardsDataGreen.filter(el => el.difficulty === 'easy');
      brownCards = cardsDataBrown.filter(el => el.difficulty === 'easy');
      blueCards = cardsDataBlue.filter(el => el.difficulty === 'easy');
      addNormalDifficultiesIfNotEnoughCards();
   }

   if (level === 'low') {
      greenCards = cardsDataGreen.filter(el => el.difficulty != 'hard');
      brownCards = cardsDataBrown.filter(el => el.difficulty != 'hard');
      blueCards = cardsDataBlue.filter(el => el.difficulty != 'hard');
      //console.log(greenCardsChosen);
   }

   if (level === 'normal') {
      greenCards = cardsDataGreen;
      brownCards = cardsDataBrown;
      blueCards = cardsDataBlue;
   }

   if (level === 'high') {
      greenCards = cardsDataGreen.filter(el => el.difficulty != 'easy');
      brownCards = cardsDataBrown.filter(el => el.difficulty != 'easy');
      blueCards = cardsDataBlue.filter(el => el.difficulty != 'easy');
   }

   if (level === 'veryHigh') {
      greenCards = cardsDataGreen.filter(el => el.difficulty === 'hard');
      brownCards = cardsDataBrown.filter(el => el.difficulty === 'hard');
      blueCards = cardsDataBlue.filter(el => el.difficulty === 'hard');
      addNormalDifficultiesIfNotEnoughCards();
   }

   const cardsChosen = {
      greenCards,
      brownCards,
      blueCards,
   };


   return cardsChosen;

}


//Добираем карт нормального уровня сложности, если не хватает
function addNormalDifficultiesIfNotEnoughCards() {

   if (greenCards.length < greenCardsAmount) {
      const allGreenNormalCards = cardsDataGreen.filter(el => el.difficulty === 'normal');
      const amountNotEnoughGreenCards = greenCardsAmount - greenCards.length;
      const allGreenNormalCardsShuffled = getShuffledCards(allGreenNormalCards);
      const requireAmountGreenNormalCardsShuffled = getRequireCards(allGreenNormalCardsShuffled, amountNotEnoughGreenCards);
      greenCards = greenCards.concat(requireAmountGreenNormalCardsShuffled);
   }

   if (brownCards.length < brownCardsAmount) {
      const allBrownNormalCards = cardsDataBrown.filter(el => el.difficulty === 'normal');
      const amountNotEnoughBrownCards = brownCardsAmount - brownCards.length;
      const allBrownNormalCardsShuffled = getShuffledCards(allBrownNormalCards);
      const requireAmountBrownNormalCardsShuffled = getRequireCards(allBrownNormalCardsShuffled, amountNotEnoughBrownCards);
      brownCards = brownCards.concat(requireAmountBrownNormalCardsShuffled);
   }

   if (blueCards.length < blueCardsAmount) {
      const allBlueNormalCards = cardsDataBlue.filter(el => el.difficulty === 'normal');
      const amountNotEnoughBlueCards = blueCardsAmount - blueCards.length;
      const allBlueNormalCardsShuffled = getShuffledCards(allBlueNormalCards);
      const requireAmountBrownNormalCardsShuffled = getRequireCards(allBlueNormalCardsShuffled, amountNotEnoughBlueCards);
      blueCards = blueCards.concat(requireAmountBrownNormalCardsShuffled);
   }
}

//перемешиваем массив
export function getShuffledCards(cards) {
   let shuffledCards = [].concat(cards);
   const shuffledCount = shuffledCards.length * 10;
   for (let i = 1; i <= shuffledCount; i++) {
      shuffledCards.sort(() => randA() - randB())
   }
   return shuffledCards;
}


function randA() { return Math.random() };
function randB() { return Math.random() };


//получаем нужное количество эллементов массива
function getRequireCards(arr, amount) {
   if (arr.length >= amount) {
      return arr.slice(0, amount);
   } else {
      alert('Не хватает карт обычной сложности для дополнения колоды!');
   }

}


//перемешиваем колоды каждого цвета
export function shuffleDecks(cardsChosen) {
   let shuffledDecks = {};

   for (const [key, value] of Object.entries(cardsChosen)) {
      const shuffledDeck = getShuffledCards(value);
      shuffledDecks[key] = shuffledDeck;
   }

   return shuffledDecks;
}


//получаем колоду для каждого этапа
export function getStageDeck(stageSettings, cards) {
   let stageDeckColor = {};

   //получим колоду разделенную по цветам
   for (const [key, value] of Object.entries(stageSettings)) {
      const currentDeckArray = cards[key];
      const amountCardsNeed = value;
      let cardsOneColor = [];
      for (let i = 1; i <= amountCardsNeed; i++) {
         const randomIndex = getRandomIndex(currentDeckArray.length);
         const randomCard = currentDeckArray[randomIndex];
         cardsOneColor.push(randomCard);
         currentDeckArray.splice(randomIndex, 1);
      }
      stageDeckColor[key] = cardsOneColor;

   }


   //уберем цвета, чтобы получить единую колоду. одни массив
   let stageDeck = [];
   for (const value of Object.values(stageDeckColor)) {
      value.forEach(element => {
         stageDeck.push(element);
      });

   }

   return stageDeck;
   console.log('собранный этап= ', stageDeck);
}


function getRandomIndex(arrLength) {
   const idx = Math.floor(Math.random() * (arrLength - 1));
   return idx;
}