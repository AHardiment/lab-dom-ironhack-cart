// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  const priceElement = product.querySelector('.price span');
  const quantityElement = product.querySelector('.quantity input');

  const priceValue = priceElement.innerHTML;
  const quantityValue = quantityElement.value;

  let totalCost = priceValue * quantityValue;

  const subtotalElement = product.querySelector('.subtotal span');

  subtotalElement.innerHTML = '';

  subtotalElement.append(totalCost);

  return totalCost;
}

function calculateAll() {
  totalCost = 0;

  const allProducts = document.getElementsByClassName('product');

  for (let product of allProducts) {
    updateSubtotal(product);
  }

  const totalElement = document.querySelector('#total-value span');
  const subtotalElements = document.querySelectorAll('.subtotal span');

  for (let price of subtotalElements) {
    totalCost += Number(price.innerHTML);
  }

  totalElement.innerHTML = totalCost;
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
  
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});
