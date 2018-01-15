function addClass(selector) {
  const rootElement = document.querySelector(selector);
  const button = rootElement.querySelector('.btn');
  const button2 = rootElement.querySelector('.btn2');
  const modal = rootElement.querySelector('.addClass');

  function addClass() {
    modal.classList.add('showed');
  }

  function removeClass() {
    modal.classList.remove('showed');
  }

  button.addEventListener('click', function () {
    console.log(2);
    addClass()
  });

  button2.addEventListener('click', function () {
    console.log(4);
    removeClass()
  });

}

export default addClass;