
// JS chapter 35 to 38

// 1- input value from user in String var inputValue="cloUd naTive computinG"


var inputValue = prompt('Enter Something','cloUd naTive computinG');

// 2- Convert every first letter of the content in Capitalize case. 
// inputValue="Cloud Native Computing" use Function

function upperCase(str) {
    var splitStr = str.toLowerCase().split(' ');
    for (var i = 0; i < splitStr.length; i++){
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring
    (1);
    }
    return splitStr.join(' ');

}

// 3- print value in console.log() console.log(inputValue) | 
// check result in browser console

var capitilize = upperCase(inputValue)
console.log(capitilize)


// Second Assignment
// 1- User input value in Number through prompt Example value=5

var inputNumber = +prompt('Enter any Number','5')

// 2- Factorialize a Number use Function

function factorial(n){
    let answer = 1;
    if (n == 0 || n == 1){
      return answer;
    }else{
      for(var i = n; i >= 1; i--){
        answer = answer * i;
      }
      return answer;
    }  

    
  }

// 3- print value in console.log() console.log(value); the result is 120

var factorialNumber = factorial(inputNumber)
console.log(factorialNumber)

// var value= multiply(4,3,6);

var  value = multiply(4,3,6)

// console.log("value", value); // The result is ?
console.log("value", value)
// function add(a, b){ var z= a+b; return z; };
function add(a, b){ var z= a+b; return z; };

// function multiply(a, b, c){ var z= a* add(b, c); return z; };
function multiply(a, b, c){ var z= a* add(b, c); return z; };
// console.log("course", course); // The result is ? console.log("z", z); // The result is ?
console.log("course", course)
// var course="cloud native computing";
var course="cloud native computing";