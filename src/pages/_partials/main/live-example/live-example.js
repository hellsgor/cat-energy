import 'Components/was-became/was-became.js';
import {mediaQueryTablet} from 'Utils/variables.js';

const liveExampleBackground = document.querySelector('.live-example__background-for-was-became');
const wasBecame = document.querySelector('.live-example__was-became');

if (mediaQueryTablet.matches) {
  liveExampleBackground.appendChild(wasBecame);
}
