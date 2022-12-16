'use strict'

import adGoods from 'JSON/additional-goods.json';
import {cloneElement} from 'Utils/clone-element.js'
import {insertElement} from 'Utils/insert-element';

const adGoodsContainer = document.querySelector('.additional-goods__goods-container');
const adGoodCardTemplate = document.getElementById('additional-good-card-template').content;
// const weightTemplate = document.getElementById('additional-good-card-weight').content;
// console.log(weightTemplate);

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




    // if (adGoods[i]['weight']) {
    //   console.log(adGoods[i]['weight']);
    //   console.log(adGoods[i]['weight-units']);
    //   console.log(cloneCard.querySelector('.additional-good-card__weight'));
    //   // cloneCard.querySelector('.additional-good-card__weight').innerText = ;
    // }

    insertElement(cloneCard, adGoodsContainer);
  }






}
