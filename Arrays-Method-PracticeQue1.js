/* Create an array to store companies -> "Blooming","Microsoft","Uber","Google","IBM","Netflix"

a. Remove the first company from the array.

b. Remove Uber & Add Ola in its place.

c. Add amazon at the end.

*/

let companies = ["Blooming","Microsoft","Uber","Google","IBM","Netflix"]
// a. Remove the first company from the array.
companies.shift()
console.log(companies)

let companies1 = ["Blooming","Microsoft","Uber","Google","IBM","Netflix"]
//b. Remove Uber & Add Ola in its place.
companies1.splice(2,1,"Ola")
console.log(companies1)

// c. Add amazon at the end.
let companies2 = ["Blooming","Microsoft","Uber","Google","IBM","Netflix"]
companies2.push("Amazon")
console.log(companies2)
