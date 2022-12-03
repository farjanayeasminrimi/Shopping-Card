function getElementValueById(element){
  const theElement = document.getElementById(element);
  const valueInString = theElement.innerText;
  const value = parseInt(valueInString);
  return value;
}
function calculateSubTotal(){
  const phnPriceTotal = getElementValueById('phn-price');
  const phnCasePriceTotal = getElementValueById('case-price');
  const subTotalCost = phnPriceTotal + phnCasePriceTotal;
  const subTotal = document.getElementById('totalPrice');
  subTotal.innerText = subTotalCost;
  // calculate tax
  const totalTaxString = (subTotalCost * 0.1).toFixed(2);
  const tax = parseFloat(totalTaxString);
  const taxElement = document.getElementById('tax');
  taxElement.innerText = tax;
  // calculate total cost
  const totalCost = subTotalCost + tax;
  return totalCost;
}
document.getElementById('checkOutBtn').addEventListener('click', function(){
  const totalCostElement = document.getElementById('totalCost');
  totalCostElement.innerText =   calculateSubTotal();
})