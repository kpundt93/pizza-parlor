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
$(document).ready(function() {
  $("form#order-form").submit(function(event) {
    event.preventDefault();
    const size = $("input:radio[name=size]:checked").val();
    let vegToppings = [];
    let meatToppings = [];
    let newPizza = new Pizza(size, vegToppings, meatToppings);

    $("input:checkbox[name=veg]:checked").each(function(element) {
      vegToppings.push($(this).val());
    });

    $("input:checkbox[name=meat]:checked").each(function(element) {
      meatToppings.push($(this).val());
    });

    newPizza.addVegTopping(vegToppings);
    newPizza.addMeatTopping(meatToppings);

    console.log(size);
    console.log(vegToppings);
    console.log(meatToppings);
    console.log(newPizza);
    

  });
});