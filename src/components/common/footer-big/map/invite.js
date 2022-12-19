import {isMainPage} from "Utils/is-main-page";
import {isTablet} from "Utils/is-tablet";

const classNamePart = '_grey';
const mapBlock = document.querySelector('.map');
const inviteBlock = mapBlock.querySelector('.map__invite');

if (!(isMainPage()) && isTablet()) {
  mapBlock.classList.add('map' + classNamePart);
  inviteBlock.classList.add('map__invite' + classNamePart);
}
