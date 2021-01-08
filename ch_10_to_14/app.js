// JS chapter 10 to 14

// Make a Calculator

// 1- input a value from user for example num1 is 7

// var num1 = +prompt("num1 value is ", 7);

// 2- input a second value from user for example num2 is 3

// var num2 = +prompt("num2 value is ", 3);

// 3- input a third value from user for example sign is "+" or "-" or "*" or "/" or "%"

// operator = prompt("Type an operator e.g + , - , * , / , %");

// 4- print operation in alert() 7-3 =4, or 7*3 =21, or 7/3 =2.3, or 7+3 =10 or 7%3 =1


// if (operator == "+") {
//     alert(num1 + num2)
// } else if ( operator == "-"){
//    alert(num1 - num2)
// } else if ( operator == "*") {
//     alert( num1 * num2) 
// }else if ( operator == "/") {
//     alert (num1 / num2)
// }else if  ( operator == "%") {
//    alert ( z =num1 % num2)
// }
// else {
//     alert("Wrong selection")
// }

// Second Assignment - Make a Percentage Calculator

// 1- Get the 5-course number from the userfor example course1 is 70 var totalMarks = 500

var course1 = +prompt("Enter 1st Course Num", 70);
var course2 = +prompt("Enter 2nd Course Num", 60);
var course3 = +prompt("Enter 3rd Course Num", 90);
var course4 = +prompt("Enter 4th Course Num", 80);
var course5 = +prompt("Enter 5th Course Num", 50);
var totalMarks = 500;

// 2- Calculate the total percentage formula: obtainedMarks * 100/ totalMarks

var totalPercentage = (course1 + course2 + course3 + course4 + course5) *100 / totalMarks


// 3 - print output in alert.

alert(totalPercentage);
