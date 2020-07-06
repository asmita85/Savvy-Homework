    

//1. Create an array of `pizzaToppings` with at least four different toppings
const arr =["onion","extra cheese","spinach","chicken","red pepper"];
let message = `Our topping today are: `; 
   
//2. Create a `greetCustomer` function that prints a message that welcomes a guest, then informs them of the available toppings by looping over `pizzaToppings` (don't worry about perfect grammar here yet, i.e. "a, b, _and_ c", see Bonus Challenge #9)
function greetCustomer() {
//   - i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."
    console.log(`Welcome to Pizza House. `);
    //9 challenge 
    listTopping(arr);
    console.log(message);
};
greetCustomer();   

//3. Create a `getPizzaOrder` function that
//- accepts a size, crust, and an indefinite amount of toppings as inputs
let customerOrder ="";
function getPizzaOrder(size, crust, ...toppings) {
//   - prints the order, i.e. "One large thick crust pizza with x, y, z, ... coming up!"
    let l=[size, crust,...toppings];
    let last = null;
    toppingArray = l[l.length-1];
    let arrLength = toppingArray.length-1;
    customerOrder=`One ${size} ${crust} crust pizza with `;
    fixMessageGetPizzaOrder(toppingArray);
    console.log(`${customerOrder}`);
    return l;
    }
    
//   - outputs a list with the size, crust, and toppings
let list = getPizzaOrder("large","thin",arr);

//4. Create a `preparePizza` function that
//   - accepts an array with three items: a size, a crust, and a list of toppings
let obj ={};
function preparePizza([size,crust,toppings]) {
//   - prints something like "...Cooking pizza..."
    console.log(`....Cooking pizza....`);
    obj =  {
            orderSize:"",
            orderCrust:"",
            orderToppings:[]
    };
    obj.orderSize=size;
    obj.orderCrust=crust;
    obj.orderToppings=toppings; 
    return obj;    
}
//- outputs a pizza Object with appropriate key-value pairs for size, crust, and toppings
let pizzaObj = preparePizza(list);
        
//5. Create a `servePizza` function that
//   - accepts a pizza Object
let pizza ="";    
function  servePizza(obj){
    
//- logs a message that the pizza is ready and repeats the order, i.e. "Order up! Here's your large thick crust pizza with x, y, z, ... Enjoy!"
    console.log('The pizza is ready!');
    pizza= `Oder up! Heres your ${obj.orderSize} ${obj.orderCrust} with `;
    let toppingList=[];
    toppingList = obj.orderToppings;
    fixMessageServePizza(toppingList);
    console.log(pizza);
    return obj;
    }
//   - outputs the same pizza Object that was passed in
let finalObj = servePizza(pizzaObj);


//6. Call each function and (starting with `preparePizza`) use the returned value from the previous function as its input
// preparePizza(list);
// servePizza(pizzaObj);

//9 Figure out how to add "and" before the last topping in a list of toppings so when we list toppings it is more grammatically correct. You could create a `listToppings` function that stores the functionality, and call the function each time we list toppings in a function.
function listTopping(toppingArr) {
    let last = toppingArr[toppingArr.length -1];
        if (toppingArr.length>0){
            for (let topping of toppingArr){
                 if (toppingArr.length!==0 & topping !== last){
                 message += `${topping}, `;
                 }else {
                 message += `and ${topping}.`;
                 }
            }
        }else if (toppingArr.length===0){
           message =`no toppings available today!`}
        return message;
}     

//10 In `getPizzaOrder`, if an order is placed with no toppings, print a slightly different message, like "One large thick crust cheese pizza coming up!" (Instead of "One large thick crust pizza with coming up!"). 

function fixMessageGetPizzaOrder(toppingList){
    let last = toppingList[toppingList.length -1];
        if (toppingList.length>0){
            for (let topping of toppingList){
                 if (toppingList.length!==0 & topping !== last){
                 customerOrder += `${topping}, `;
                 }else {
                 customerOrder += `and ${topping} coming up!`;
                 }
            }
        }else if (toppingList.length===0){
           customerOrder =`One large thick crust cheese pizza coming up!`;
        }
        return customerOrder;
}
//Alter `servePizza` in a similar way to fix its grammar when serving a "plain" cheese pizza.
function fixMessageServePizza(toppingList){
    let last = toppingList[toppingList.length -1];
        if (toppingList.length>0){
            for (let topping of toppingList){
                 if (toppingList.length!==0 & topping !== last){
                 pizza += `${topping}, `;
                 }else {
                 pizza += `and ${topping}.`;
            }
        }
    }else if (toppingList.length===0){
          pizza =`Oder up! Heres your plain ${obj.orderSize} ${obj.orderCrust} pizza.`;
        
        }
        return pizza;
}
//11. In `getPizzaOrder`, check the toppings the customer ordered against your list of available toppings. 
//If they order a topping you don't offer, print a message that informs them you don't offer that topping and to order again.
function notAvailableTopping(){
    customerTopping = "carrot";
    for (let topping of toppingArr)
        if(topping!==customerTopping){
            console.log("we do not offer this topping please reorder again");
        }
 
}
