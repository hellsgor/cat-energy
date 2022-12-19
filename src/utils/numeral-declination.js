function getWord (modulo, word) {
  let wordEnding;
  if (modulo === 1) {
    wordEnding = '';
  } else if (modulo < 5) {
    wordEnding = 'а';
  } else {
    wordEnding = 'ов';
  }
  return (' ' + word + wordEnding);
}

export function numeralDeclination (number, word) {
  if (number > 20) {
    let modulo = number % 10;
    return getWord(modulo, word);
  } else {
    return getWord(number, word);
  }
}
