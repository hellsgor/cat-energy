import {insertElement} from "Utils/insert-element";

export function fillGoodCard(card, counter, goodsArray, cardPropertyTemplate) {
  card.querySelector('.good-card__title').innerHTML = goodsArray[counter]['name'];
  card.querySelector('.good-card__image img').src = require('Img/goods/' + goodsArray[counter]['image']);
  card.querySelector('.good-card__image img').alt = goodsArray[counter]['name'];

  let cardPropertiesContainer = card.querySelector('.good-card__properties');
  let properties = Object.keys(goodsArray[counter]['properties']);

  for (let k = 0; k < properties.length; k++) {

    let postfix = '';
    switch(properties[k]) {
      case 'масса':
        postfix = ' г.';
        break
      case 'цена':
        postfix = ' ₽';
        break
      default:
        postfix = '';
        break
    }

    let cardProperty = cardPropertyTemplate.cloneNode(true);
    cardProperty.querySelector('.good-card__property-name').innerText = properties[k];
    cardProperty.querySelector('.good-card__property-value').innerText = goodsArray[counter]['properties'][properties[k]] + postfix;

    insertElement(cardProperty, cardPropertiesContainer);
  }
  let nameClass = 'for-animation-' + counter;
  card.querySelector('.good-card').classList.add(nameClass);
}

export function animGoodCard(container, counter) {
  let nameClass = '.for-animation-' + counter;
  document.querySelector(nameClass).classList.add('good-card_animation');
}
