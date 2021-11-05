// Business logic
function Pizza(size, vegToppings, meatToppings) {
  this.size = size;
  this.vegToppings = [];
  this.meatToppings = [];
}

Pizza.prototype.addVegTopping  = function(vegTopping) {
  this.vegToppings.push(vegTopping);
};

Pizza.prototype.addMeatTopping  = function(meatTopping) {
  this.meatToppings.push(meatTopping);
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

  this.vegToppings.forEach(function() {
    price += 1;
  });

  this.meatToppings.forEach(function() {
    price += 2;
  });

  return price;
};

// UI logic