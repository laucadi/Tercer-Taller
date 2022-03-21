////////coin converse

const values = document.querySelector('.form-control');
const dollar = document.querySelector('.dollar');
const euro = document.querySelector('.euro');
const yuan = document.querySelector('.yuan');
const cad = document.querySelector('.cad');
const btnContact = document.querySelector('.btnContact');
const options = document.querySelectorAll("option");
const resultCoins = document.querySelector('.resultCoins');

const selection = document.querySelector('.form-select');

btnContact.addEventListener("click", function(e){
  e.preventDefault();

  let numberValues = +values.value;
  let numberCurrency = +selection.value
  
  switch(numberCurrency){
    case 1:
      const one = numberValues / 3890;
      //console.log(one);
      resultCoins.innerText = ` ${one.toFixed(2)} dollars`; 
      break;
    case 2:
      const two = numberValues / 4212.10;
      //console.log(two);
      resultCoins.innerText = ` ${two.toFixed(2)} Euros`; 
      break;
    case 3:
      const three = numberValues / 600;
      //console.log(three);
      resultCoins.innerText = ` ${three.toFixed(2)} Yuans `; 
      break;
      case 4:
        const four = numberValues / 3019.81;
        //console.log(four);
        resultCoins.innerText = ` ${four.toFixed(2)} Canadian Dollars`; 
      break;
    default:
      resultCoins.innerText = `Choose a currency please`; 
     
  }
  
}) 
