function updateCaseNumber(isIncrease , inputId){
  const caseInputField = document.getElementById("input-value");
  const caseNumberString = caseInputField.value;
  const previousCaseNumber = parseInt(caseNumberString);
  let newCaseNumber;
  if(isIncrease === true){
    newCaseNumber = previousCaseNumber + 1;
  }
  else{
    newCaseNumber = previousCaseNumber - 1;
  }
  caseInputField.value = newCaseNumber;
  return newCaseNumber;
}
function updateCasePrice(newCaseNumber){
  const caseTotalPrice = newCaseNumber * 59;
  const casePrice = document.getElementById('case-price');
  casePrice.innerText = caseTotalPrice;
}
document.getElementById("plus-btn").addEventListener("click", function () {
  const newCaseNumber = updateCaseNumber(true);
  updateCasePrice(newCaseNumber);
  calculateSubTotal();
});
document.getElementById('minus-btn').addEventListener('click', function(){
  const newCaseNumber =  updateCaseNumber(false);
  updateCasePrice(newCaseNumber);
  calculateSubTotal();
})