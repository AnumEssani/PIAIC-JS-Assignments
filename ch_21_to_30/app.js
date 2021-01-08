// JS chapter 21 to 30

// Java-script assignments chapter 21 to 30

// 1- Take a input from user in number with decimal point user input is 3.4

var num = prompt("decimal point user point is ",3.4); 

// 2- Convert it into greater number Example: Math.ceil(3.4); to 4

var greaterNum = Math.ceil(3.4);


// 3- Declear a variable of string and assign some text 
//    var text="This is my dummy text"

var text = "This is my dummy text";


// 4- Slice the text into a new variable from 0 to the 
//    rounded number 0 to 4; Example: text.slice(0, 4) | sliceText = This

var newText = text.slice(0,greaterNum)


// 5- Use for loop and concatination to reverse the sliced string; 0==>4 ==> This ===> shiT

let reverseString = "";

    for (let character of newText) {
        reverseString = character + reverseString;
    }

// 6- print value in alert "shiT"
alert(reverseString)