// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');

  let price = product.querySelector('.price span');
  let quantity= product.querySelector('.quantity input');;
  price = Number(price.innerHTML);
  quantity = Number(quantity.value);
  let calculated = price * quantity;

  let subtotal = product.querySelector('.subtotal span');
  subtotal.innerHTML = calculated;

  return Number(subtotal.innerHTML);
} 

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
  /*const singleProduct = document.querySelector('.product');
  updateSubtotal(singleProduct);*/
  // end of test

  // ITERATION 2
  let products = document.querySelectorAll(".product");
  let total = 0;
  products.forEach((product) => {
    total += updateSubtotal(product);
  } )


  // ITERATION 3
  let totalHTML = document.querySelector("#total-value span")
  totalHTML.innerHTML = total;

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
