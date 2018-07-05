/*Types
Undefined: array[6] is undefined below. Which does not have value yet.
NAN: Not a number
*/

//Arrays
var array = [1,2,3,4, null];
console.log(array.length);
console.log(array[2]);
console.log(array[4]);

//NAN example
array1 = "James";
console.log(array1 * 5);
console.log(isNaN(array1));

//Objects
var user = {
    firstName: 'James',
    lastName: 'Bond'
};

console.log(user);
console.log(user.firstName  + "  " + user.lastName);

//If Statements
//For loop with break statement and continue statement
for(var i = 1; i < 10; i++){
    console.log(i);
    if(i === 8){
        break;
    }

    if(i === 5){
        continue;
    }
}

//Equal
console.log(2 == '2');    //true
console.log(2 === '2');   //false Type is also checked.

//Ternary Operators
console.log("============================================");
console.log('Ternary Operators');
var x = 10;
var y = 10;

var result = x === y ? console.log("Equal") : console.log("Not Equal");

console.log("Function ============================================");
function add(){
    return 4 + 5;
}

function subtract(firstNum, secondNum){
    return firstNum - secondNum;
}

console.log(add());
console.log(subtract(5, 3));

console.log("Scope ============================================");
var myFirstName = 'Rukesh';
function car (){
    var brand = "Ford";
    console.log(myFirstName);
    console.log(brand);
}
car();
console.log(myFirstName);
console.log("DOM ============================================");
console.log('window -> Document');
console.log(window);
console.log('window Inner width ' + window.innerWidth);
//console.log('Open window ' + window.open('http:www.google.com'));

console.log('Title: ' + document.title);

console.log(document.getElementsByTagName('<div>'));
console.log("Creating html with JS");
var div = document.createElement('div');
div.textContent = 'Hello Again from Rukesh';
div.style.color = 'red';
div.style.fontSize = '20px';

console.log(div);
 







