

//1. Create an array of `pizzaToppings` with at least four different toppings
const arr =["onion","extra cheese","spinach","chicken","red pepper"];
const sizeArr =["small","medium","large"];
const crustArr =["thin","thick","brooklyn"];
let message = `Our toppings are: `;

//2. Create a `greetCustomer` function that prints a message that welcomes a guest, then informs them of the available toppings by looping over `pizzaToppings` (don't worry about perfect grammar here yet, i.e. "a, b, _and_ c", see Bonus Challenge #9)
function greetCustomer() {
    let welcome= `Welcome to Pizza House. `;

//   - i.e. "Welcome to Pizza House, our toppings are: a, b, c, ..."
    //9 challenge
    listTopping(arr);
    console.log(message);
    document.getElementById(`h1_Id`).innerHTML = welcome;
    document.getElementById(`p1_Id`).innerHTML = message;
}
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

//my challenge
//-print in html arrays in list
function printInHtml(array) {
    let str =`<ul>`;
    for (let top of array){
        str += `<li>`+top+`</li>`;
    }
    str += `</ul>`;
    return str;
//open orderHere.html
}
// document.getElementById("id_of_div1").innerHTML += printInHtml(sizeArr);
// document.getElementById("id_of_div2").innerHTML += printInHtml(arr);
// document.getElementById("id_of_div3").innerHTML += printInHtml(crustArr);

//-button to open new html file
function openOrderHere(){
    window.open("orderHere.html");
    }

//-open checkbox

function checkBoxHtml(array) {
    let str =`<ul>`;
    for (let top of array){
        str += `<li>`+top+`</li>`;
    }
    str += `</ul>`;
    return str;
}

function printChecked(){
    let items1=document.getElementsByClassName(`items1`);
    let items2=document.getElementsByClassName(`items2`);
    let items3=document.getElementsByClassName(`items3`);

    let selectedItems4="";
    let selectedItems3="";
    let selectedItems1="";
    let selectedItems2="";
    let selectedItems5="";

    for(let i=0; i<items1.length; i++){
        if(items1[i].type=='checkbox' && items1[i].checked==true)
            selectedItems1+=` `+items1[i].value;
    }
    for(let i=0; i<items2.length; i++){
        if(items2[i].type=='radio' &&  items2[i].checked==true)
            selectedItems2+=` `+items2[i].value;
    }
    for(let i=0; i<items3.length; i++){
        if(items3[i].type=='radio' &&  items3[i].checked==true)
            selectedItems3+=` `+items3[i].value;
    }
    selectedItems4=`your ` +selectedItems3+ ` `+selectedItems2+  ` pizza with : ` +selectedItems1+ ` coming up!`;
    selectedItems5=`your ` +selectedItems3+` `+selectedItems2+ ` pizza with : ` +selectedItems1+ ` coming up!`;
    selectedItems5= selectedItems3+` `+selectedItems2+` pizza with`+ selectedItems1;

    alert("Please click ok after confirming your selection: "+selectedItems5);
    document.getElementById("h3Id").innerHTML = `.....coming.....`;
    document.getElementById("h4Id").innerHTML = selectedItems4;

}
let arrayToppings =[];
let arrayCrust =[];
let arraySize =[];

function readyToppings(){
    let items=document.getElementsByClassName(`items1`);
    for(let i=0; i<items.length; i++){
        if(items[i].type=='checkbox' && items[i].checked==true){
            arrayToppings.push(items[i].value);
        }
    }
    console.log(`toppings`+arrayToppings);
    return arrayToppings;
}




function readyCrust(){
     item=document.getElementsByClassName(`items2`);
    for(let i=0; i<item.length; i++){
        if(item[i].type=='radio' && item[i].checked==true){
            arrayCrust.push(item[i].value);
        }
    }
    console.log(arrayCrust[0]);
    console.log(`crust`+arrayCrust.length);
    return arrayCrust[0];
}




function readySize(){
    items1=document.getElementsByClassName(`items3`);
    for(let i=0; i<items1.length; i++){
    if(items1[i].type=='radio' && items1[i].checked==true){
    arraySize.push(items1[i].value);
    }
   }
   console.log(arraySize[0]);
   console.log(`size`+arraySize.length);
   return arraySize[0];
}




function final(){
    alert("ok");
    let customer = "";
    let toppingList=[];
    document.getElementById("h5Id").innerHTML = `.....ready.....`;
    //document.getElementById("h4Id").innerHTML = `your `+readySize()+` `+readyCrust()+` pizza`;
    toppingList = readyToppings();
    console.log(toppingList);
    let last = toppingList[toppingList.length -1];
    if (toppingList.length>0){
        for (let topping of toppingList){
        if (toppingList.length!==0 & topping !== last){
        customer += `${topping}, `;
        }else {
        customer += `and ${topping} is ready!`;
        }
        }
    }else if (toppingList.length===0){
    customer =`One large thick crust cheese pizza coming up!`;
    }
    console.log(customer);
    let m = `your `+readySize()+` `+readyCrust()+` pizza with `+ customer;
    alert(m);

    document.getElementById("h6Id").innerHTML = `your `+readySize()+` `+readyCrust()+` pizza with `+ customer;

}
let string =``;
function topp(){
    alert(`please click ok to check the status `);
    let customer = "";
    let toppingList=[];
    document.getElementById("h5Id").innerHTML = `.....ready.....`;
    //document.getElementById("h4Id").innerHTML = `your `+readySize()+` `+readyCrust()+` pizza`;
    toppingList = readyToppings();
for (let i = 0; i < toppingList.length; i++) {
    // if only one topping ordered
    if (toppingList.length === 1) {
      string += `${toppingList[i]}. `;
    } else if (toppingList.length === 2 && !i) {
      // ! this else if statement is the new part
      // if 2 toppings ordered and current topping is first (index 0)
      string += `${toppingList[i]} `;
    } else if (i === toppingList.length - 1) {
      // if more than one topping ordered and current topping is last in list
      string += `and ${toppingList[i]} `;
    } else {
      // if more than two toppings ordered and current topping is NOT last in array
      string += `${toppingList[i]}, `;
    }
  }
    document.getElementById("h7Id").innerHTML = `your `+readySize()+` `+readyCrust()+` pizza with `+ string +`is ready`;

}




document.getElementById("id_of_div1").innerHTML += printInHtml(sizeArr);
document.getElementById("id_of_div2").innerHTML += printInHtml(arr);
document.getElementById("id_of_div3").innerHTML += printInHtml(crustArr);


