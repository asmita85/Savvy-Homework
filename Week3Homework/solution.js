// BASIC SOLUTION
const pizzaToppings = ["pepperoni", "sausage", "onions", "peppers"];
function greetCustomer() {
  let greeting = `Welcome to The Pizza House, our toppings are: `;
  for (let topping of pizzaToppings) {
    greeting += `${topping}, `;
  }
  console.log(greeting);
}
greetCustomer();
function getPizzaOrder(size, crust, ...toppings) {
  let order = `One ${size} ${crust} crust pizza with `;
  for (let topping of toppings) {
    order += `${topping}, `;
    // order = order + `${topping}, `;
  }
  console.log(`${order}. Coming up!`);
  return [size, crust, toppings];
}
let customerOrder = getPizzaOrder(
  "large",
  "thin",
  "sausage",
  "onions",
  "peppers"
);
function preparePizza([orderSize, orderCrust, orderToppings]) {
  console.log("...your pizza is cooking...");
  return {
    size: orderSize,
    crust: orderCrust,
    toppings: orderToppings
  };
}
let cookedPizza = preparePizza(customerOrder);
function servePizza(pizza) {
  let orderReady = `Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with `;
  for (let topping of pizza.toppings) {
    orderReady += `${topping}, `;
  }
  console.log(`${orderReady}. Enjoy!`);
  return pizza;
}
servePizza(cookedPizza);
// // ALL TOGETHER
// greetCustomer();
// const myPizza = servePizza(
//   preparePizza(getPizzaOrder("small", "thin", "mushrooms", "banana peppers"))
// );
// console.log(myPizza);
// BONUS SOLUTIONS
// #9
function addListElementsToString(string, list) {
  for (let i = 0; i < list.length; i++) {
    // if only one topping ordered
    if (list.length === 1) {
      string += `${list[i]}. `;
    } else if (i === list.length - 1) {
      // if more than one topping ordered and current topping is last in list
      string += `and ${list[i]}. `;
    } else {
      // if more than one topping ordered and current topping is NOT last in array
      string += `${list[i]}, `;
    }
  }
  return string;
}
console.log(
  addListElementsToString("Here is my formatted Array: ", ["onions", "peppers"])
);
// #10
function checkForToppings(toppings) {
  if (!toppings[0]) {
    return false;
  }
  return true;
}
function getPizzaOrderAndCheckForPlain(size, crust, ...toppings) {
  if (checkForToppings(toppings)) {
    let order = `One ${size} ${crust} crust pizza with `;
    order = addListElementsToString(order, toppings);
    console.log(`${order}Right away!`);
    return [size, crust, toppings];
  }
  console.log(`One ${size} ${crust} crust cheese pizza, coming up!`);
  return [size, crust, toppings];
}
// WITH TOPPINGS
getPizzaOrderAndCheckForPlain("small", "thin", "garlic");
// WITHOUT TOPPINGS
getPizzaOrderAndCheckForPlain("medium", "thick");
// #11
function checkOrderedToppings(orderedToppings, availableToppings) {
  for (let ordered of orderedToppings) {
    let toppingAvailable = false;
    for (let available of availableToppings) {
      if (ordered === available) {
        toppingAvailable = true;
      }
    }
    if (toppingAvailable) {
      continue;
    } else {
      return false;
    }
  }
  return true;
}
function getPizzaOrderAndCheckForToppingAvailability(size, crust, ...toppings) {
  if (checkForToppings(toppings)) {
    if (checkOrderedToppings(toppings, pizzaToppings)) {
      let order = `One ${size} ${crust} crust pizza with `;
      order = addListElementsToString(order, toppings);
      console.log(`${order}Right away!`);
      return [size, crust, toppings];
    }
    let wrongToppingMessage =
      "I'm sorry, one or more of the toppings you ordered is unavailable. Our toppings are: ";
    wrongToppingMessage = addListElementsToString(
      wrongToppingMessage,
      pizzaToppings
    );
    console.log(`${wrongToppingMessage}Please order again.`);
    return false;
  }
  console.log(`One ${size} ${crust} crust cheese pizza, coming up!`);
  return [size, crust, toppings];
}
// AVAILABLE TOPPINGS
getPizzaOrderAndCheckForToppingAvailability(
  "large",
  "thin",
  "onions",
  "peppers"
);
// UNAVAILABLE TOPPINGS
getPizzaOrderAndCheckForToppingAvailability(
  "medium",
  "thick",
  "rock salt",
  "avocado toast"
);
function addListElementsToString_AllCases(string, list) {
  for (let i = 0; i < list.length; i++) {
    // if only one topping ordered
    if (list.length === 1) {
      string += `${list[i]}. `;
    } else if (list.length === 2 && !i) {
      // ! this else if statement is the new part
      // if 2 toppings ordered and current topping is first (index 0)
      string += `${list[i]} `;
    } else if (i === list.length - 1) {
      // if more than one topping ordered and current topping is last in list
      string += `and ${list[i]}. `;
    } else {
      // if more than two toppings ordered and current topping is NOT last in array
      string += `${list[i]}, `;
    }
  }
  return string;
}
console.log(addListElementsToString_AllCases("hello: ", ["one"]));
console.log(addListElementsToString_AllCases("hello: ", ["one", "two"]));
console.log(addListElementsToString_AllCases("hello: ", ["one", "one", "two"]));
