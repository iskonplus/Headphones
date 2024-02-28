import { toggleClassActive } from "./toggleClassActive.js";
let width;
let lastMove = 0;


function firstPosition(sliderCards) {
    let positionNow = 0;

    sliderCards.forEach((card) => {
        width = card.offsetWidth;

        card.style.left = `${positionNow}px`;
        positionNow += width;
    });
}

function changePosition(sliderCards, direction) {
    sliderCards.forEach((card) => {
        let cardPosition = +card.style.left.slice(0, -2);
        card.style.left = directionMove(direction, cardPosition);
    });
}



function slideRecursion(sliderCards, direction) {

    sliderCards.forEach(card => {

        let cardPosition = +(card.style.left.slice(0, -2));
        const conditionMoveRight = cardPosition < 0 && direction === 'right';
        const conditionMoveLeft = cardPosition > width * 2 && direction === 'left';

        if (conditionMoveRight || conditionMoveLeft) {
            card.style.display = 'none';
            direction === "right"
                ? card.style.left = `${getMaxMinPosition(sliderCards, direction) + width}px`
                : card.style.left = `${getMaxMinPosition(sliderCards, direction) - width}px`;

            setTimeout(() => card.style.display = 'flex', 150);
        }
    });
}

function clickProcessingWithInterwal(sliderCards, direction, arrow, ms) {
    if (Date.now() - lastMove > ms) {
      toggleClassActive(arrow);
      setTimeout(() => toggleClassActive(arrow), 200);
  
      slideRecursion(sliderCards, direction);
      setTimeout(() => changePosition(sliderCards, direction), 200);
      lastMove = Date.now();
    }
  }


function directionMove(direction, cardPosition) {
    return direction === "right"
        ? `${cardPosition - width}px`
        : `${cardPosition + width}px`;
}

function getMaxMinPosition(sliderCards, direction) {
    return [...sliderCards].reduce((acc, card) => {
        let position = +(card.style.left.slice(0, -2));
        direction === 'right'
            ? position > acc && (acc = position)
            : position < acc && (acc = position);
        return acc;
    }, 0);
}



export { firstPosition, changePosition, slideRecursion, clickProcessingWithInterwal };


