import addClassScroll from './scripts/addClassScroll.js';
import up from './scripts/up.js';
import scroll from './scripts/scroll.js';
import initializeClock from './scripts/timer.js';
import slider from './scripts/slider.js';
import slider2 from './scripts/slider2.js';
import addClass from './scripts/addClass.js';


import './styles.styl';

addClassScroll('#navbar');
up('up', -40);
scroll(0.5);
initializeClock('clockdiv', '2018-01-22 9:10:09');
slider('.slider', 3000);
slider2('.slider2', 3000);
//initMap('map');
addClass('.modal');
