//SELECTION
const currentOperationText = document.querySelector('#current-operations')
const previousOperationText = document.querySelector('#previous-operations')
const buttons = document.querySelectorAll('#buttons-container a')


//FUNCTIOS
class Calculator{

}

//EVENTS

buttons.forEach((btn) => {
  //? (e) é o objeto do evento, neste caso a ancora que foi clicada
  btn.addEventListener('click', (e) => {
    const value = e.target.innerText;
    
    //? lembrando que quando o e vem da ancora, chega como string 
    //? o + nesse caso, tenta converter o valor que foi recebido em number
    //? sendo assim apenas entra no if aqueles e que forem number (>= 0)
    if(+value >= 0 || value === '.'){
      console.log(value);
    }else{
      console.log('op' + value);
    }
  });
});

const dot = document.querySelector('#sevn')
const minus = document.querySelector('#sevn')
const equal = document.querySelector('#sevn')
const more = document.querySelector('#sevn')

const cheese = document.querySelector('#sevn')
const Divided = document.querySelector('#sevn')