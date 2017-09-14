import { sum } from './module1';

const el = document.querySelector('#someHeader') as HTMLElement;
if (el) {
  el.innerText = `2 + 2 = ${sum(2, 2)}`;
};
