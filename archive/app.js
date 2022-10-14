//SELECTION
const currentOperationText = document.querySelector('#current-operations')
const previousOperationText = document.querySelector('#previous-operations')
const buttons = document.querySelectorAll('#buttons-container a')


//FUNCTIOS
class Calculator{

}

//EVENTS

buttons.forEach((btn) => {
  //? (e) é o objeto do evento
  btn.addEventListener('click', (e) => {
    const value = e.target.innerText;
    console.log(value);
  });
});

const dot = document.querySelector('#sevn')
const minus = document.querySelector('#sevn')
const equal = document.querySelector('#sevn')
const more = document.querySelector('#sevn')

const cheese = document.querySelector('#sevn')
const Divided = document.querySelector('#sevn')