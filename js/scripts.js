// Business logic
function Pizza(size, vegToppings, meatToppings) {
  this.size = size;
  this.vegToppings = [];
  this.meatToppings = [];
}

Pizza.prototype.addVegTopping  = function(veg) {
  this.vegToppings.push(veg);
};

Pizza.prototype.addMeatTopping  = function(meat) {
  this.meatToppings.push(meat);
};

Pizza.prototype.getPrice = function() {
  let basePrice = 0;
  let vegPrice = 0;
  let meatPrice = 0;
  let totalPrice = 0;

  if (this.size === "s") {
    basePrice = 15;
  } else if (this.size === "m") {
    basePrice = 18;
  } else if (this.size === "l") {
    basePrice = 21;
  } else if (this.size === "xl") {
    basePrice = 24
  } else {
    return "Choose a size!"
  }

  this.vegToppings.forEach(function() {
    vegPrice += 1;
  });
  console.log(this.vegToppings.length);

  this.meatToppings.forEach(function() {
    meatPrice += 2;
  });
  console.log(this.meatToppings.length);

  totalPrice = basePrice + vegPrice + meatPrice;
  return totalPrice;
  
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
      return vegToppings;
    });

    $("input:checkbox[name=meat]:checked").each(function(element) {
      meatToppings.push($(this).val());
    });

    if (vegToppings.length !== 0) {
      newPizza.addVegTopping(vegToppings);
    }
    
    if (meatToppings.length !== 0) {
      newPizza.addMeatTopping(meatToppings);
    }
    
    console.log(size);
    console.log(vegToppings);
    console.log(meatToppings);
    console.log(newPizza);
    console.log(newPizza.getPrice());
    
  });

});