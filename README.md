# _Pizza Parlor_

#### By: _**Katie Pundt**_

#### _A website for a fictional pizza company. Created to demonstrate understanding of JavaScript constructors and prototypes._

## Technologies Used

* _HTML_
* _CSS_
* _Bootstrap_
* _JavaScript_
* _jQuery_
* _GitHub repositories_
* _GitHub Pages_

## Description

_The website will allow users to choose the size of their pizza as well as one or more toppings and display the final cost of the pizza._

## Tests

```
Describe: Pizza()

Test: It will return a Pizza object with properties for size and toppings.
Code: let newPizza = Pizza("m", ["olives", "mushrooms"], ["pepperoni"]);
Expected Output:
  Pizza {
    size: "m"
    veg toppings: ["olives", "mushrooms"]
    meat toppings: ["pepperoni"]
  }
```
```
Describe: Pizza.prototype.addVegTopping

Test: It will add a new topping to the veggie toppings array.
Code: 
  newPizza.addVegTopping("mushrooms");
  newPizza;
Expected Output:
  Pizza {
    size: "m"
    veg toppings: ['mushrooms']
    meat toppings: []
  }
```

```
Describe: Pizza.prototype.addMeatTopping

Test: It will add a new topping to the meat toppings array.
Code: 
  newPizza.addMeatTopping("pepperoni");
  newPizza;
Expected Output:
  Pizza {
    size: "m"
    veg toppings: []
    meat toppings: ['pepperoni']
  }
```

```
Describe: Pizza.prototype.getPrice

Test: It will determine the price of the pizza, based on size.
Code: 
  let newPizza = new Pizza("m");
  newPizza.getPrice();
Expected Output: 18

Test: It will determine the price of the pizza, based on size and toppings.
Code: 
  let newPizza = new Pizza("m", ['mushrooms'])
  newPizza.getPrice();
Expected Output: 19

Test: It will determine the price of the pizza, based on size and toppings.
Code: 
  let newPizza = new Pizza("m", ['mushrooms'], ['pepperoni'])
  newPizza.getPrice();
Expected Output: 21
```

## GitHub Pages
_View the project here: https://kpundt93.github.io/pizza-parlor/_

## Setup/Installation Requirements

* _Navigate to https://github.com/kpundt93/pizza-parlor_
* _Click on the green "Code" button and copy the repository URL or click on the copy button_
* _Open the terminal on your desktop_
* _Once in the terminal, use it to navigate to your desktop folder_
* _Once inside your desktop folder, use the command "git clone https://github.com/kpundt93/pizza-parlor.git"_
* _After cloning the project, navigate into it using the command "cd pizza-parlor"_
* _Use the command "git remote" to confirm the creation of the new local repository_
* _Open the project with the code editor of your choice_

_Note: when using the commands listed above, do not include the quotation marks. They are used here for readability._

## Known Bugs

* _No known bugs_

## Contact Information
_Katie Pundt, kzpundt@gmail.com_

## License

_MIT License: https://opensource.org/licenses/MIT_

Copyright (c) _2021_ _Katie Pundt_