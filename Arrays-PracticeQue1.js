/* For a given array with marks of student -> [85,97,44,37,76,60]
Find the average marks of the entire class. */

let marks = [85,97,44,37,76,60]
let sum = 0;

for(let mar of marks){
  sum+=mar
}

let avg = sum / marks.length
console.log(`Avarage marks of the class = ${avg}`)
