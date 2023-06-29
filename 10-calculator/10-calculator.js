let calculation = '0';

function updateCalculation(add){
  if (add===' = '){
    calculation=eval(calculation);
    document.querySelector('.js-result').innerHTML = calculation;
    calculation = '0';
  }
  else if (add==='clear'){
    calculation = '0';
    document.querySelector('.js-result').innerHTML = calculation;
  }
  else{
    if(calculation==='0'){
      calculation = '';
    }
    calculation += add;
    document.querySelector('.js-result').innerHTML = calculation;
  }
}


