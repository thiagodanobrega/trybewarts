const btnLogin = document.getElementById('btn-login');
const email = document.getElementById('email');
const senha = document.getElementById('senha');
const btnEnviar = document.getElementById('submit-btn');
const chkBox = document.getElementById('agreement');
const cont = document.getElementById('counter');
const textArea = document.getElementById('textarea');
const form = document.getElementById('evaluation-form');
const subjectBox = document.getElementsByClassName('subject');
const inputName = document.getElementById('input-name');
const inputLastName = document.getElementById('input-lastname');
const inputEmail = document.getElementById('input-email');
const house = document.querySelector('#house');
let obj = {};

function acesso() {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}
btnLogin.addEventListener('click', acesso);

function verificaCheck() {
  if (chkBox.checked) {
    btnEnviar.disabled = false;
  }
}
chkBox.addEventListener('click', verificaCheck);

cont.innerHTML = 500;
function contador(event) {
  cont.innerHTML = 500;
  cont.innerHTML -= event.target.value.length;
}
textArea.addEventListener('keyup', contador);

// Array.from() cria uma nova instância de um Array
// ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Array/from
function checkContents() {
  let contents = '';
  Array.from(subjectBox).forEach((content) => {
    if (content.checked === true) {
      if (contents === '') {
        contents += content.value;
      } else {
        contents = `${contents}, ${content.value}`;
      }
    }
  });
  return contents;
}
// Object.keys() retorna um array de propriedades enumeraveis de um objeto
// ref: https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Object/keys

const body = document.querySelector('body');
function criarFicha() {
  const containerForm = document.createElement('section');
  const divImage = document.createElement('div');
  const div = document.createElement('div');
  form.innerHTML = '';
  form.style.border = '0';
  form.appendChild(containerForm);
  containerForm.appendChild(divImage);
  containerForm.appendChild(div);
  containerForm.classList = 'container-form';
  Object.keys(obj).forEach((key) => {
    const paragraph = document.createElement('p');
    paragraph.innerHTML = `<strong>${key}: </strong>${obj[key]}`;
    div.appendChild(paragraph);
    if (key === 'Casa') {
      divImage.classList.add(`${obj[key]}`);
      containerForm.classList.add(`container${obj[key]}`);
      div.classList.add(`div${obj[key]}`);
    }
    console.log(body);
  });
}

function submitForm(event) {
  event.preventDefault();
  obj = {
    Nome: `${inputName.value} ${inputLastName.value}`,
    Email: `${inputEmail.value}`,
    Casa: `${house.value}`,
    Família: `${document.querySelector('input[name=family]:checked').value}`,
    Matérias: `${checkContents()}`,
    Avaliação: `${document.querySelector('input[name=rate]:checked').value}`,
    Observações: `${textArea.value}`,
  };
  criarFicha();
}
btnEnviar.addEventListener('click', submitForm);
