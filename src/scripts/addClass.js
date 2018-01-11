function addClass(selector) {
  const rootElement = document.querySelectorAll(selector);
  const button = rootElement.querySelectorAll('.btn');
  const modal = rootElement.querySelectorAll('.addClass');

  function addClassActive() {
    modal.classList.toggle('active');
  }

  button.addEventListener('click', addClassActive);

  button.addEventListener('click', function () {

    if (addClassActive == true) {
    } else {
      addClassActive
    }
  });
}

export default addClass;
