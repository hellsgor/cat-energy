'use strict'

import adGoods from 'JSON/additional-goods.json';
import {cloneElement} from 'Utils/clone-element.js'
import {insertElement} from 'Utils/insert-element';
import {addListenerForOrder} from 'Utils/add-listener-for-order.js';

const adGoodsContainer = document.querySelector('.additional-goods__goods-container');
const adGoodCardTemplate = document.getElementById('additional-good-card-template').content;

addAdditionalGood();
function addAdditionalGood() {

  for (let i = 0; i < adGoods.length; i++) {
    let good = adGoods[i];
    let cloneCard = cloneElement(adGoodCardTemplate);

    cloneCard.querySelector('.additional-good-card__name').innerText = good['name'];
    cloneCard.querySelector('.additional-good-card__amount').innerText = good['amount'] + ' ' + good['units'];

    if(good['weight']) {
      cloneCard.querySelector('.additional-good-card__weight').innerText = ' (' + good['weight'] + ' ' + good['weight-units'] + ')';
    }

    cloneCard.querySelector('.additional-good-card__price').innerText = good['price'] + ' ₽';

    addListenerForOrder(cloneCard, '.additional-good-card__button-add-to-order');

    insertElement(cloneCard, adGoodsContainer);
  }
}
