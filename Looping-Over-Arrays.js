/* Looping over an Arrays
- Print all elements of an array
*/


let marks = [89,89,65,76,45,34,64,67,35]
// for loop
for(let i =0; i<marks.length;i++){
  console.log(marks[i])
}

let heroes = ["thor","hulk","shaktiman","antman","batman"]
for(let i =0; i<heroes.length;i++){
  console.log(heroes[i])
}



// for of loop
for(let mar of marks){
  console.log(mar)
}

for(let hero of heroes){
  console.log(hero.toUpperCase())
}

let cities = ["mumbai","delhi","pune","hyderbad","gurgaon"]
for(let city of cities){
  console.log(city.toUpperCase())
}
