//We have to get a function and also request user enter the students marks here.
function gradeGenerator() {
    const marks = prompt("Enter the student's marks (0 - 100):");
    const score = parseInt(marks);
//we have to give the range of the marks entered by user not to exceed 100 and not to go below 0
if (score < 0 || score > 100 || isNaN(score)) {
        console.log("Invalid input. Please enter a number between 0 and 100.");
// Now we have to give the range and grades of each marks gained by the student
} else if (score > 79) {
        console.log("Grade: A");
} else if (score >= 60) {
        console.log("Grade: B");
} else if (score >= 49) {
        console.log("Grade: C");
} else if (score >= 40) {
        console.log("Grade: D");
} else {
        console.log("Grade: E");
    }
}
//Now we have to give output to user for the marks entered
gradeGenerator();
