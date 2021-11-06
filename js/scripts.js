// Business logic
function Pizza(size, vegToppings, meatToppings) {
  this.size = size;
  this.vegToppings = vegToppings;
  this.meatToppings = meatToppings;
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
    $("input:checkbox[name=veg]:checked").each(function(element) {
      vegToppings.push($(this).val());
    });

    let meatToppings = [];
    $("input:checkbox[name=meat]:checked").each(function(element) {
      meatToppings.push($(this).val());
    });

    let pizza = new Pizza(size, vegToppings, meatToppings);
    let total = pizza.getPrice();

    console.log(size);
    console.log(vegToppings);
    console.log(meatToppings);
    console.log(pizza);
    console.log(pizza.getPrice());

    $("#price").text(total);
  });

  $("button#reset").click(function(event) {
    $("#price").text("");
  });

});