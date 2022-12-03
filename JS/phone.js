function phnUpdateNumber(isIncrease){
  const phnInputField = document.getElementById('phn-input-field');
  const phnInputValueString = phnInputField.value;
  const previousPhnNumber = parseInt(phnInputValueString);
  let phnNumbers;
  if(isIncrease === true){
    phnNumbers = previousPhnNumber + 1;
  }
  else{
    phnNumbers = previousPhnNumber - 1;
  }
  phnInputField.value = phnNumbers;
  return phnNumbers;
}
function updatePhnPrice(phnNumber){
  const phnPriceElement = document.getElementById('phn-price');
  const phnPrice = phnNumber * 1219;
  phnPriceElement.innerText = phnPrice;
}
document.getElementById('phn-plus-btn').addEventListener('click', function(){
  const phnNumbers =  phnUpdateNumber(true);
  updatePhnPrice(phnNumbers);
  calculateSubTotal();
})
document.getElementById('phn-minus-btn').addEventListener('click', function(){
  const phnNumbers =  phnUpdateNumber(false);
  updatePhnPrice(phnNumbers);
  calculateSubTotal();
})