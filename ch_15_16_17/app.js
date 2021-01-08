// JS chapter 15 16 17

// Make a TODO

// 1- Create an empty array with the name is courses. ```example: var courses=[] ``


var courses = []; 


// 2- Get the 5-course name from the user, example: var course1 =prompt("course 1", 
// "computer") and save all 5 value in "courses" array. example: courses.push(course1)


var course1 = prompt("course1", "computer");
courses.push(course1)
var course2 = prompt("course2", "physics");
courses.push(course2)
var course3 = prompt("course3", "chemistry");
courses.push(course3)
var course4 = prompt("course4",  "maths");
courses.push(course4)
var course5 = prompt("course5", "urdu");
courses.push(course5)


// 3- print courses array in alertexample: alert(courses)

alert(courses);

// 4- print all full 5-course name one by one in prompt.
//  example: course1=prompt(course1, course1Value)

// 5- If the user edit any value (through prompt), 
// then that value is edit in the array. 
// example: course1=prompt(course1, course1ValueEdit) 
// use Array.splice() to replace and edit index in array
// courses.splice(2,1,"english")

for (var i=0;i < courses.length;i++){
    editCourse = prompt(courses[i],courses[i])
    courses.splice(i,1,editCourse)
}


// 6- print courses array in alertexample: alert(courses)

alert(courses);

