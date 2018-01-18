webpackJsonp([0],{

/***/ 126:
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(90);
module.exports = __webpack_require__(328);


/***/ }),

/***/ 328:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _addClassScroll = __webpack_require__(329);

var _addClassScroll2 = _interopRequireDefault(_addClassScroll);

var _up = __webpack_require__(330);

var _up2 = _interopRequireDefault(_up);

var _scroll = __webpack_require__(331);

var _scroll2 = _interopRequireDefault(_scroll);

var _timer = __webpack_require__(332);

var _timer2 = _interopRequireDefault(_timer);

var _slider = __webpack_require__(333);

var _slider2 = _interopRequireDefault(_slider);

var _slider3 = __webpack_require__(334);

var _slider4 = _interopRequireDefault(_slider3);

var _addClass = __webpack_require__(335);

var _addClass2 = _interopRequireDefault(_addClass);

var _addBlind = __webpack_require__(336);

var _addBlind2 = _interopRequireDefault(_addBlind);

__webpack_require__(337);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(0, _addClassScroll2.default)('#navbar');
(0, _up2.default)('up', -40);
(0, _scroll2.default)(0.5);
(0, _timer2.default)('clockdiv', '2018-02-17 15:00:00');
(0, _slider2.default)('.slider', 3000);
(0, _slider4.default)('.slider2', 3000);
//initMap('map');
(0, _addClass2.default)('.gifts', '.btn_1', '.modal_1');
(0, _addClass2.default)('.gifts', '.btn_2', '.modal_2');
(0, _addClass2.default)('.gifts', '.btn_3', '.modal_3');
(0, _addClass2.default)('.gifts', '.btn_4', '.modal_4');
(0, _addClass2.default)('.gifts', '.btn_5', '.modal_5');
(0, _addClass2.default)('.gifts', '.btn_6', '.modal_6');
(0, _addClass2.default)('.gifts', '.btn_7', '.modal_7');
(0, _addClass2.default)('.gifts', '.btn_8', '.modal_8');
(0, _addClass2.default)('.gifts', '.btn_9', '.modal_9');
(0, _addClass2.default)('.gifts', '.btn_10', '.modal_10');
(0, _addBlind2.default)('.navbar', '.btn__blind', '.btnClosedBlind1');
(0, _addBlind2.default)('.navbar', '.btn__blind', '.btnClosedBlind2');
(0, _addBlind2.default)('.navbar', '.btn__blind', '.btnClosedBlind3');
(0, _addBlind2.default)('.navbar', '.btn__blind', '.btnClosedBlind4');
(0, _addBlind2.default)('.navbar', '.btn__blind', '.btnClosedBlind5');

/***/ }),

/***/ 329:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function addClassScroll(selector) {

  var navbarElement = document.querySelector(selector);

  var navbarSourceBottom = navbarElement.getBoundingClientRect().bottom + window.pageYOffset;

  window.onscroll = function () {
    if (navbarElement.classList.contains('fixed') && window.pageYOffset < navbarSourceBottom) {
      navbarElement.classList.remove('fixed');
    } else if (window.pageYOffset > navbarSourceBottom) {
      navbarElement.classList.add('fixed');
    }
  };
}

exports.default = addClassScroll;

/***/ }),

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function up(id, time) {
  var button = document.getElementById(id);

  function vverh() {
    window.scrollBy(0, time);
    if (window.pageYOffset > 0) {
      requestAnimationFrame(vverh);
    }
  }

  button.addEventListener('click', function (e) {
    e.preventDefault();
    vverh();
  }, false);
}

exports.default = up;

/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function scroll(V) {
  var linkNav = document.querySelectorAll('[href^="#nav"]');
  for (var i = 0; i < linkNav.length; i++) {
    linkNav[i].addEventListener('click', function (e) {
      e.preventDefault();
      var w = window.pageYOffset,
          // прокрутка
      hash = this.href.replace(/[^#]*(.*)/, '$1'); // id элемента, к которому нужно перейти
      var t = document.querySelector(hash).getBoundingClientRect().top,
          // отступ от окна браузера до id
      start = null;
      requestAnimationFrame(step); // подробнее про функцию анимации [developer.mozilla.org]
      function step(time) {
        if (start === null) start = time;
        var progress = time - start,
            r = t < 0 ? Math.max(w - progress / V, w + t) : Math.min(w + progress / V, w + t);
        window.scrollTo(0, r);
        if (r != w + t) {
          requestAnimationFrame(step);
        } else {
          location.hash = hash; // URL с хэшем
        }
      }
    }, false);
  }
}

exports.default = scroll;

/***/ }),

/***/ 332:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function initializeClock(id, endtime) {
  var clock = document.getElementById(id);
  var daysSpan = clock.querySelector('.days');
  var hoursSpan = clock.querySelector('.hours');
  var minutesSpan = clock.querySelector('.minutes');
  var secondsSpan = clock.querySelector('.seconds');

  function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor(t / 1000 % 60);
    var minutes = Math.floor(t / 1000 / 60 % 60);
    var hours = Math.floor(t / (1000 * 60 * 60) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    if (t <= 0) {
      return {
        'total': 0,
        'days': 0,
        'hours': 0,
        'minutes': 0,
        'seconds': 0
      };
    } else {
      return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds

      };
    }
  }

  function updateClock() {
    var t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

  updateClock();
  var timeinterval = setInterval(updateClock, 1000);
}

exports.default = initializeClock;

/***/ }),

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function slider(cssSelectorOfElement) {
  var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5000;

  var parentContainer = document.querySelector(cssSelectorOfElement);
  var slides = document.querySelectorAll('.slider__slides .slider__slides_slide');

  var slideInterval = setInterval(nextSlide, interval);
  var currentSlide = 0;
  var isEnabled = false;
  var next = document.getElementById('next');
  var previous = document.getElementById('previous');
  var playing = true;

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function previousSlide() {
    goToSlide(currentSlide - 1);
  }

  function goToSlide(n) {
    slides[currentSlide].className = 'slider__slides_slide';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'slider__slides_slide showing';
  }

  function pauseSlideshow() {
    playing = false;
    clearInterval(slideInterval);
  }

  function playSlideshow() {
    playing = true;
    slideInterval = setInterval(nextSlide, interval);
  }

  next.addEventListener('click', function () {
    nextSlide();
  });

  previous.addEventListener('click', function () {
    previousSlide();
  });

  parentContainer.addEventListener('mouseenter', function () {
    clearInterval(slideInterval);
  });

  parentContainer.addEventListener('mouseleave', function () {
    isEnabled = !isEnabled;
    if (isEnabled) {
      playSlideshow();
    }
  });
}

exports.default = slider;

/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function slider2(cssSelectorOfElement) {
  var interval = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5000;

  var parentContainer = document.querySelector(cssSelectorOfElement);
  var slides = document.querySelectorAll('.slider2__slides .slider2__slides_slide');

  var slideInterval = setInterval(nextSlide, interval);
  var currentSlide = 0;
  var isEnabled = false;
  var next = document.getElementById('next2');
  var previous = document.getElementById('previous2');
  var playing = true;

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function previousSlide() {
    goToSlide(currentSlide - 1);
  }

  function goToSlide(n) {
    slides[currentSlide].className = 'slider2__slides_slide';
    currentSlide = (n + slides.length) % slides.length;
    slides[currentSlide].className = 'slider2__slides_slide showing';
  }

  function pauseSlideshow() {
    playing = false;
    clearInterval(slideInterval);
  }

  function playSlideshow() {
    playing = true;
    slideInterval = setInterval(nextSlide, interval);
  }

  next.addEventListener('click', function () {
    nextSlide();
  });

  previous.addEventListener('click', function () {
    previousSlide();
  });

  parentContainer.addEventListener('mouseenter', function () {
    clearInterval(slideInterval);
  });

  parentContainer.addEventListener('mouseleave', function () {
    isEnabled = !isEnabled;
    if (isEnabled) {
      playSlideshow();
    }
  });
}

exports.default = slider2;

/***/ }),

/***/ 335:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function addClass(selector, btn, modal2) {
  var rootElement = document.querySelector(selector);
  var button = rootElement.querySelector(btn);
  var button2 = rootElement.querySelector('.btnClosed');
  var addClass1 = rootElement.querySelector('.addClass');
  var modal = rootElement.querySelector(modal2);

  function addClass() {
    addClass1.classList.add('showed');
  }

  function addModal() {
    modal.classList.add('showed2');
  }

  function removeClass() {
    addClass1.classList.remove('showed');
  }

  function removeModal() {
    modal.classList.remove('showed2');
  }

  function hiden() {
    document.body.style.overflow = 'hidden';
  }

  function removeHiden() {
    document.body.style.overflow = '';
  }

  button.addEventListener('click', function () {
    addClass();
    addModal();
    hiden();
  });

  button2.addEventListener('click', function () {
    removeClass();
    removeModal();
    removeHiden();
  });
}

exports.default = addClass;

/***/ }),

/***/ 336:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
function addBlind(selector, btn, btn2) {
  var rootElement = document.querySelector(selector);
  var button3 = rootElement.querySelector(btn);
  var button4 = rootElement.querySelector(btn2);
  var addClass3 = rootElement.querySelector('.addClass2');

  function addClass2() {
    addClass3.classList.add('showed');
  }

  function removeClass2() {
    addClass3.classList.remove('showed');
  }

  button3.addEventListener('click', function () {
    addClass2();
    console.log(10);
  });

  button4.addEventListener('click', function () {
    removeClass2();
    console.log(15);
  });
}

exports.default = addBlind;

/***/ }),

/***/ 337:
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })

},[126]);