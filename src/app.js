import addClassScroll from './scripts/addClassScroll.js';
import up from './scripts/up.js';
import scroll from './scripts/scroll.js';
import initializeClock from './scripts/timer.js';
import slider from './scripts/slider.js';
import slider2 from './scripts/slider2.js';
import addClass from './scripts/addClass.js';
import addBlind from './scripts/addBlind.js';

import './styles.styl';

addClassScroll('#navbar');
up('up', -40);
scroll(0.5);
initializeClock('clockdiv', '2018-02-17 15:00:00');
slider('.slider', 3000);
slider2('.slider2', 3000);
//initMap('map');
addClass('.gifts', '.btn_1', '.modal_1');
addClass('.gifts', '.btn_2', '.modal_2');
addClass('.gifts', '.btn_3', '.modal_3');
addClass('.gifts', '.btn_4', '.modal_4');
addClass('.gifts', '.btn_5', '.modal_5');
addClass('.gifts', '.btn_6', '.modal_6');
addClass('.gifts', '.btn_7', '.modal_7');
addClass('.gifts', '.btn_8', '.modal_8');
addBlind('.navbar', '.btn__blind', '.btnClosedBlind1');
addBlind('.navbar', '.btn__blind', '.btnClosedBlind2');
addBlind('.navbar', '.btn__blind', '.btnClosedBlind3');
addBlind('.navbar', '.btn__blind', '.btnClosedBlind4');
addBlind('.navbar', '.btn__blind', '.btnClosedBlind5');

