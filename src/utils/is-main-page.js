import {currentUrl} from 'Utils/variables.js';
export function isMainPage() {
  return (currentUrl === '/')
}
