// JS chapter 31 to 34

// 1- input your name through prompt. for example name is "Ameen Alam"

var name = prompt("name is", "Ameen Alam");


// 2- input your DOB(date) through prompt. for example date is "24"

var date = prompt("date is", "24");


// 3- input your DOB(month) through prompt. for example month is "05"

var month = prompt("month is", "05");

// 4- input your DOB(year) through prompt. for example year is "1999"

var year = prompt("year is", "1999");

// Data Object 
var Current_Date = new Date()
var DOB = new Date(month+" "+date+' '+year)
// 5- print meassage in console.log() "Hello Ameen Alam, Good Morning, AfterNoon, Evening or Night"

console.log("Hello Ameen Alam, Good Morning, AfterNoon, Evening or Night");

// 6- print meassage in console.log() "Your DOB is {in pakistan standard time format}"


console.log("Your DOB is",DOB)
// 7- print meassage in console.log() "You are 20 years 7 Month 10 Days 19 Hours 20 Minutes 25 Seconds old"

// "Your Age in Days 7510"

var oldTime = DOB.getTime()
var newTime = Current_Date.getTime()
var msDiff = newTime - oldTime;
var days = msDiff / (1000 *60 * 60 * 24);
days = Math.floor(days);

var years = DOB.getFullYear() - Current_Date.getFullYear() 
var months = DOB.getMonth()-Current_Date.getMonth()
var day = DOB.getDate()-Current_Date.getDate()
var hours = Current_Date.getHours()-DOB.getHours();
var minutes = Current_Date.getMinutes()-DOB.getMinutes()
var seconds = Current_Date.getSeconds()-DOB.getSeconds()


console.log(`You are ${years} years ${months} Month ${day} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds old`)
console.log('Your Age in Days',days)

// 8- print meassage in console.log() "How much time left in your next birthday? 
// 161 days 4 hours 39 minutes 34 seconds" or "happy Birth Day Ameen Alam. Today is 
// Your 20th Birthday"

var newDate = new Date(month+' '+date+' '+ Current_Date.getFullYear())
var oldTime = newDate.getTime()
var newTime = Current_Date.getTime()
var msDiff = newTime - oldTime;
var days = msDiff / (1000 *60 * 60 * 24);
 days = Math.floor(days);

var months = newDate.getMonth()-Current_Date.getMonth()
var hours = Current_Date.getHours()-newDate.getHours();
var minutes = Current_Date.getMinutes()-newDate.getMinutes()
var seconds = Current_Date.getSeconds()-newDate.getSeconds()


console.log(`How much time left in your next birthday? ${days} Days ${hours} Hours ${minutes} Minutes ${seconds} Seconds old`)


