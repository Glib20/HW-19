// №1
const formNode = document.querySelector('form');
document.body.style.backgroundColor = formNode.elements.color.value;

formNode.addEventListener('change', event => {
  if (event.target.name === 'color') {
    document.body.style.backgroundColor = event.target.value;
  }
});

// №2
const nameInputNode = document.querySelector('#name-input');
const nameOutputNode = document.querySelector('#name-output');

nameInputNode.addEventListener('input', event => {
  const value = event.target.value.trim();
  nameOutputNode.textContent = value !== '' ? value : 'незнайомець';
});

const validationInputNode = document.querySelector('#validation-input');

validationInputNode.addEventListener('blur', event => {
  const requiredLength = Number(event.target.dataset.length);
  const currentLength = event.target.value.trim().length;

  if (currentLength === requiredLength) {
    event.target.classList.add('valid');
    event.target.classList.remove('invalid');
  } else {
    event.target.classList.add('invalid');
    event.target.classList.remove('valid');
  }
});

// №3
const fontSizeControlNode = document.querySelector('#font-size-control');
const textNode = document.querySelector('#text');

textNode.style.fontSize = `${fontSizeControlNode.value}px`;

fontSizeControlNode.addEventListener('input', event => {
  textNode.style.fontSize = `${event.target.value}px`;
});