// JS chapter 18 19 20

// Make a TODO
// Customize previous assignment "ch_15_16_17" with for loop...

var courses = []; 

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

alert(courses);

for (var i=0;i < courses.length;i++){
    editCourse = prompt(courses[i],courses[i])
    courses.splice(i,1,editCourse)
}

alert(courses);