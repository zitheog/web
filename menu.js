

// Update total amount when quantity changes
function updateTotal() {
  var total = 0;
  var foodItems = document.querySelectorAll('.food-item');
  foodItems.forEach(function(item) {
    var quantity = parseInt(item.querySelector('select').value);
    var price = parseFloat(item.querySelector('.price').textContent);
    total += quantity * price;
  });

  // Apply discount if checkbox is checked
  if (document.getElementById('discount-checkbox').checked) {
    var discount = total * 0.1; // 10% discount
    total -= discount;
    document.getElementById('discount-amount').textContent = "-" + discount.toFixed(2);
  } else {
    document.getElementById('discount-amount').textContent = "0.00";
  }

  document.getElementById('total-amount').textContent = total.toFixed(2);
  document.getElementById('total-amount-value').textContent = total.toFixed(2); // Added this line
}

// Update bill display
function updateBill() {
  var bill = '';
  var foodItems = document.querySelectorAll('.food-item');
  foodItems.forEach(function(item) {
    var quantity = parseInt(item.querySelector('select').value);
    var food = item.querySelector('.food').textContent;
    if (quantity > 0) {
      bill += food + ' - ' + quantity + '<br>';
    }
  });

  document.getElementById('bill').innerHTML = bill;
  updateTotal();
}

