/*
let userNumber;

do {
    userNumber = prompt("Please, enter a number higher than 100");
}  while (+userNumber < 100)
*/

/*
let input = document.querySelector('.numberInput');
let para = document.querySelector('p');
function squared(num) {
    return num * num;
}
function cubed(num) {
    return num * num * num;
}
function factorial(num) {
    let x = num;
    while(x > 1) {
        num *= x-1;
        x--;
    }
    return num;
}

input.onchange = function() {
    let num = input.value;
    if (isNaN(num)) {
        para.textContent = 'You need to enter a number!';
    } else {
        para.textContent = num + ' squared is ' + squared(num) + '. ' +
                        num + ' cubed is ' + cubed(num) + '. ' +
                        num + ' factorial is ' + factorial(num) + '.';
    }
}
*/


let inputUserName = document.querySelector('.userName');
let pUserName = document.querySelector('.p--user-name');

inputUserName.onchange = function() {
    let userInput = inputUserName.value;
    pUserName.textContent = 'Hello ' + userInput;
}


/*

function numPower(a, b) {
  let x = a;
  for(let i = b; i > 1; i--) {
    a *= x;
  }
  return a;
}

console.log(numPower(2, 3)); // 8
console.log(numPower(3, 5)); // 243
console.log(numPower(4, 4)); // 256
console.log(numPower(5, 4)); // 625
console.log(numPower(6, 2)); // 36

*/ 


/*
function checkAge(age) {
  if (age >= 18) {
    return true
  } else {
    return confirm('Do you have permission from your parents?');
  }
}

let userAge = prompt("How old are you?");

if (checkAge(userAge)) {
  alert('Access granted');
} else {
  alert('Access denied');
}
*/

/*
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}

function checkUserAge(age) {
  return age > 18 ? true : confirm('Did parents allow you?');
}

*/
/*
function checkUserAge(age) {
  return age >= 18 || confirm('Did parents allow you?')
}

let userAge = prompt('How old are you?');

console.log(checkUserAge(userAge));
*/

/*
function min(a, b) {
  return a > b ? a : b;
}

console.log(min(9, 13));
*/

function pow(a, b) {
    let x = a;
    
    for (let i = 1; i < b; i++){
      a *= x;
    }
    
    return a;
  }
  
  console.log(pow(2, 4));
  console.log(pow(3, 3));
  console.log(pow(5, 5));
  console.log(pow(6, 3));
  console.log(pow(3, 4));
