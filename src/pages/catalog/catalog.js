'use strict'

import 'Components/common/header/header.js';
import 'Components/common/footer-big/footer-big.js';
import 'Components/show-more-goods/show-more-goods.js';

import {cloneElement} from 'Utils/clone-element';
import {fillGoodCard} from 'Components/good-card/good-card.js';
import {animGoodCard} from 'Components/good-card/good-card.js';
import {insertElement} from 'Utils/insert-element';
import {fillShowMoreCard} from 'Components/show-more-goods/show-more-goods.js';
import {hideShowMoreCard} from 'Components/show-more-goods/show-more-goods.js';

import goods from 'JSON/goods.json';

const goodCardTemplate = document.getElementById('good-card-template').content;
const goodCardPropertyTemplate = goodCardTemplate.getElementById('good-card-property-template').content;
const goodsContainer = document.getElementById('goods');
const showMoreGoodsCard = document.getElementById('show-more-goods-template');
const showMoreButton = document.querySelector('.show-more-goods__show-more-button');

let shownGoodsCounter = 0;
let timeout = 0;
let step = 7;

if(goods.length < step) {
  step = goods.length;
}

showGoods();
step = 8;
hideShowMoreCard(showMoreGoodsCard, goods, step, shownGoodsCounter);

showMoreButton.addEventListener('click', (env) => {
  env.preventDefault();
  showGoods();
  hideShowMoreCard(showMoreGoodsCard, goods, step, shownGoodsCounter);
})

function showGoods() {
  let beginNumber = shownGoodsCounter;
  let endNumber = shownGoodsCounter + step;
  if (goods.length < step + shownGoodsCounter) {
    endNumber = goods.length;
  }
  for (let i = beginNumber; i < endNumber; i++) {
    let cardClone = cloneElement(goodCardTemplate);
    fillGoodCard(cardClone, i, goods, goodCardPropertyTemplate);
    insertElement(cardClone, goodsContainer);
    ++shownGoodsCounter;
    setTimeout( () => {
      animGoodCard(goodsContainer, i);
    }, timeout);
    timeout = timeout + 100;
  }
  fillShowMoreCard(showMoreGoodsCard, goods, shownGoodsCounter, 'товар');
  timeout = 0;
}
