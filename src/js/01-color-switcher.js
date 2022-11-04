const refs = {
  btnStart: document.querySelector('[data-start]'),
  btnStop: document.querySelector('[data-stop]'),
};

let timerId = null;

const getRandomHexColor = function () {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};

refs.btnStart.addEventListener('click', () => {
  refs.btnStop.disabled = false;
  refs.btnStart.disabled = true;

  timerId = setInterval(() => {
    document.body.style.backgroundColor = `${getRandomHexColor()}`;
  }, 1000);
});

refs.btnStop.addEventListener('click', () => {
  refs.btnStop.disabled = true;
  refs.btnStart.disabled = false;

  clearInterval(timerId);
});
