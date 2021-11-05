// Business logic
function Pizza(size, toppings) {
  this.size = size;
  this.toppings = [];
}

Pizza.prototype.addTopping  = function(topping) {
  this.toppings.push(topping);
};

Pizza.prototype.getPrice = function() {
  let price = 0;

  if (this.size === "s") {
    price = 15;
  } else if (this.size === "m") {
    price = 18;
  } else if (this.size === "l") {
    price = 21;
  } else if (this.size === "xl") {
    price = 24
  } else {
    return "Choose a size!"
  }

  this.toppings.forEach(function() {
    price += 1;
  });

  return price;
};

// UI logic