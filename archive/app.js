//SELECTION
const currentOperationText = document.querySelector('#current-operations')
const previousOperationText = document.querySelector('#previous-operations')
const buttons = document.querySelectorAll('#buttons-container a')


//FUNCTIOS
class Calculator{
  constructor(previousOperationText, currentOperationText) {
    this.currentOperationText = currentOperationText;
    this.previousOperationText = previousOperationText;
    this.currantOperation = ""; //? esta digitando
  }

  //? add digito na tela da calculadora
  addDigit(digit){

    //? verifica se já tem um .
    if(digit === "." && this.currentOperationText.innerText.includes(".")) {
      return;
    }

    this.currantOperation = digit;
    this.updateScreen();
  }

  processOperation(operation){

    if(this.currentOperationText.innerText === "" && operation !== "C") {
      if(this.previousOperationText.innerText !== "") {
        this.changeOperation(operation);
      }
      return;
    }

    let operationValue
    //? +this = convert valor para number
    //? .split = separa o texto do previous de agordo com o espaço entre
    //? enes (" "), sendo assim é criado um array ex (0: 455; 1: +)
    const previous = +this.previousOperationText.innerText.split(" ")[0]; //? anterior 
    const current = +this.currentOperationText.innerText; //? atuals

    switch (operation) {
      case "+":
        operationValue = previous + current; //? valor de cima + valor de baixo do screen
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "-":
        operationValue = previous - current; //? valor de cima + valor de baixo do screen
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "/":
        operationValue = previous / current; //? valor de cima + valor de baixo do screen
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "*":
        operationValue = previous * current; //? valor de cima + valor de baixo do screen
        this.updateScreen(operationValue, operation, current, previous);
        break;
      case "DEL":
        this.processDelOperator();
        break;
      case "CE":
        this.processClearCurrentOperator();
        break;
      case "C":
        this.processClearAll();
        break;
      case "=":
        this.processEqualOperator();
        break;
      default:
        return;
    }
  }

  updateScreen(
    //? inicia como null
    operationValue = null, //? resuntado das operaçoes
    operation = null, //? usuario envia pelo processOperation
    current = null, //? numeros digitados
    previous = null //? numeros digitados anteriormente
  ) {

    //? o que for digitado sera add ao texto da oper atual
    if(operationValue === null) {
      this.currentOperationText.innerText += this.currantOperation;
    }else {
      if(previous === 0) {
        operationValue = current;
      }
      this.previousOperationText.innerText = `${operationValue} ${operation}`;
      this.currentOperationText.innerText = "";
    }
  }
  changeOperation(operation) {
    const mathOperation = ["*", "/", "+", "-"]

    if(!mathOperation.includes(operation)){
      return;
    }
    //? .slice = para retirar o ultimo digito do previous
    //? ex: 23 + (o digito retirado seria o +), assim ficando apenas numeros
    //? e após é colocado o novo operador
    this.previousOperationText.innerText = this.previousOperationText.innerText.slice(0, -1) + operation;
  }

  //? deleta o ultimo digito
  processDelOperator() {
    this.currentOperationText.innerText = 
    this.currentOperationText.innerText.slice(0, -1);
  }

  //?deleta o numero atual digitado
  processClearCurrentOperator() {
    this.currentOperationText.innerText = "";
  }

  //? deleta o atual e o anterior
  processClearAll() {
    this.previousOperationText.innerText = "";
    this.currentOperationText.innerText = "";
  }

  processEqualOperator() {
    const operation = previousOperationText.innerText.split(" ")[1];
    this.processOperation(operation);
  }
}

const calc = new Calculator(previousOperationText, currentOperationText);

//EVENTS

buttons.forEach((btn) => {
  //? (e) é o objeto do evento, neste caso a ancora que foi clicada
  btn.addEventListener('click', (e) => {
    const value = e.target.innerText;
    
    //? lembrando que quando o e vem da ancora, chega como string 
    //? o + nesse caso, tenta converter o valor que foi recebido em number
    //? sendo assim apenas entra no if aqueles e que forem number (>= 0)
    if(+value >= 0 || value === '.'){
      calc.addDigit(value);
    }else{
      calc.processOperation(value);
    }
  });
});
