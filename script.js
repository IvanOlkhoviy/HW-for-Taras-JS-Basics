
// First task:
alert("Hello world!");


// Second task:
let admin;
let name = "Jhon";
admin = name;

alert(admin);

//3-rd task:
let planetName;
let currentUserName;

const BIRTHDAY = "19.01.1996";

//4-rd task:
console.log(`hello ${1}`); // hello 1;
console.log(`hello ${name}`); // hello Jhon;
console.log(`hello ${"name"}`); // hello name;

//5-rd task:
let age = prompt("How old are you?");
console.log(age);

//6-rd task:
let a = prompt("first",1);
let b = prompt("second",2);

a = Number(a);
b = Number(b);

console.log(a + b);

//7-rd task:

let answer = prompt("What is official name of js?");

if(answer == "ECMAscript"){
    console.log("correct");
}else{
    console.log("Have you ever heard about ECMAscript?");
}


let secondAnswer = prompt("Enter some number:");

if(secondAnswer > 1){
    console.log("1");
}else if(secondAnswer < 1 && secondAnswer !=0){
    console.log("-1");
}else if(secondAnswer == 0){
    console.log("0");
}

let result = a + b < 4 ? "little" : "many"; 


//8-rd task
function Calculator(){
    
    this.firstNum = 0,
    this.secondNum = 0,

    this.read = function(){
        this.firstNumb = prompt("first number:");
        this.secondNubm = prompt("second number:");
    }

    this.sum = () => this.firstNumb + this.secondNubm;

    this.mul = () => this.firstNumb * this.secondNubm;
    
}

let calculator = new Calculator();
calculator.read();

//9-rd task
function checkAge(age) {
    return (age > 18) ? true : confirm('Did parents allow you?');
}

function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
  }

  function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result = result * x;
    }
  
    return result;
  }
  
  let x = prompt("x = ");
  let n = prompt("n = ");
  
  if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
  } else {
    alert( pow(x, n) );
  }



  function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
      sum = sum + i;
    }
    return sum;
  }
  
  alert( sumTo(20) );



  function byField(fieldName){
    return (a, b) => a[fieldName] > b[fieldName] ? 1 : -1;
  }


  function makeCounter() {
    let count = 0;
  
    function counter() {
      return count++;
    }
  
    counter.set = value => count = value;
  
    counter.decrease = () => count--;
  
    return counter;
  }




