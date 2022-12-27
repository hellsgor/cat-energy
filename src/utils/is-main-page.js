import {currentUrl} from 'Utils/variables.js';
export function isMainPage() {
  let mainPageHref = '/';
  if(window.location.hostname === 'hellsgor.github.io') {
    mainPageHref = '/cat-energy/';
  }
  return (currentUrl === mainPageHref || currentUrl === 'index.html')
}
