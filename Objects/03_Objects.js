// De-Structuring Objects
const course = {
    courseName : "JavaScript" ,
    price : "999" ,
    coursePeriod : "1 months"
}
const {courseName} = course 
console.log(courseName)  // JavScript
const {coursePeriod : duration} = course
console.log(duration)