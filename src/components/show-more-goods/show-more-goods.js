'use strict'

import {numeralDeclination} from 'Utils/numeral-declination';

export function fillShowMoreCard(card, goodsArray, shownGoodsCounter, word) {

  let sumHiddenGoods = goodsArray.length - shownGoodsCounter;

  if (sumHiddenGoods > 0) {
    card.querySelector('.show-more-goods__number-of-goods').innerText = sumHiddenGoods;
    card.querySelector('.show-more-goods__last-word').innerText = numeralDeclination(sumHiddenGoods, word);
  }
}

export function hideShowMoreCard(card, goodsArray, step, shownGoodsCounter) {
  if (goodsArray.length === shownGoodsCounter) {
    card.classList.add('show-more-goods_hidden');
  }
}

