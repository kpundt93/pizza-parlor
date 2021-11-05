// Business logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.addTopping  = function(topping) {
  this.toppings.push(topping);
}

// UI logic