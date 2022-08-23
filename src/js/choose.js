import { firstStage, secondStage, thirdStage, greenCardsAmount, brownCardsAmount, blueCardsAmount } from './index';
import cardsDataBlue from '../assets/data/blue_cards_data';
import cardsDataBrown from '../assets/data/brown_cards_data';
import cardsDataGreen from '../assets/data/green_cards_data';

//===================================================================


let greenCardsChosen;
let brownCardsChosen;
let blueCardsChosen;

export function chooseCardsForDifficulties(level) {

   if (level === 'veryLow') {
      greenCardsChosen = cardsDataGreen.filter(el => el.difficulty === 'easy');
      brownCardsChosen = cardsDataBrown.filter(el => el.difficulty === 'easy');
      blueCardsChosen = cardsDataBlue.filter(el => el.difficulty === 'easy');
   }

   if (level === 'Low') {
      greenCardsChosen = cardsDataGreen.filter(el => el.difficulty != 'hard');
      brownCardsChosen = cardsDataBrown.filter(el => el.difficulty != 'hard');
      blueCardsChosen = cardsDataBlue.filter(el => el.difficulty != 'hard');
   }

   if (level === 'normal') {
      greenCardsChosen = cardsDataGreen;
      brownCardsChosen = cardsDataBrown;
      blueCardsChosen = cardsDataBlue;
   }

   if (level === 'high') {
      greenCardsChosen = cardsDataGreen.filter(el => el.difficulty != 'easy');
      brownCardsChosen = cardsDataBrown.filter(el => el.difficulty != 'easy');
      blueCardsChosen = cardsDataBlue.filter(el => el.difficulty != 'easy');
   }

   if (level === 'veryHigh') {
      greenCardsChosen = cardsDataGreen.filter(el => el.difficulty === 'hard');
      brownCardsChosen = cardsDataBrown.filter(el => el.difficulty === 'hard');
      blueCardsChosen = cardsDataBlue.filter(el => el.difficulty === 'hard');
   }

}

function addNormalDifficultiesIfNotEnoughCards() {

   if (greenCardsChosen.length < greenCardsAmount) {
      const allGreenNormalCards = cardsDataGreen.filter(el => el.difficulty === 'normal');
      const amountNotEnoughGreenCards = greenCardsAmount - greenCardsChosen.length;
      getRandomCard();
   }

   if (brownCardsChosen.length < brownCardsAmount) {
      const allBrownNormalCards = cardsDataBrown.filter(el => el.difficulty === 'normal');
      const amountNotEnoughBrownCards = brownCardsAmount - brownCardsChosen.length;
   }

   if (blueCardsChosen.length < blueCardsAmount) {
      const allBlueNormalCards = cardsDataBlue.filter(el => el.difficulty === 'normal');
      const amountNotEnoughBlueCards = blueCardsAmount - blueCardsChosen.length;
   }
}

function getRandomCard() {

}
