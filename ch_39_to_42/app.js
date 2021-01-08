// 1- Make a Percentage Calculator
function calculator(obtain,total){
    return obtain *100 / totalMarks
}

// 2- Get the 5-course number from the userfor example course1 is 70 var totalMarks = 500
var course1 = +prompt("Enter 1st Course Num", 70);
var course2 = +prompt("Enter 2nd Course Num", 60);
var course3 = +prompt("Enter 3rd Course Num", 90);
var course4 = +prompt("Enter 4th Course Num", 80);
var course5 = +prompt("Enter 5th Course Num", 50);
var totalMarks = 500;
var obtainMarks = course1+course2+course3+course4+course5;

// 3- Calculate the total percentage formula: obtainedMarks * 100/ totalMarks

var percentage = calculator(obtainMarks,totalMarks) 
// 4- Calculate the grade use switch case Grade A+ 90% to 100% , 
// Grade A 75% to 89% , Grade B 60% to 74% , 
// Grade C 45% to 60% , Grade D 30% to 44% Grade F 0% to 29%



switch(true){
    case percentage>= 90:
        alert('Grade A+')
        break
    case percentage>=75:
        alert('Grade A')
        break
    case percentage>=60:
        alert('Grade B')
        break
    case percentage>=45:
        alert('Grade C')
        break
    case percentage>=30:
        alert('Grade D')
        break
    default:
        alert('Fail')
        break
}

// 5- print output in alert.
