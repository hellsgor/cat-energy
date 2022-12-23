'use strict'

export function getInputNumbersValue(input) {
  return input.value.replace(/\D/g, '');
}
