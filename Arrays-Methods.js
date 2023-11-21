/* Arrays Methods
- Push() : add to end
- Pop() : delete from end & return 
- toString() : converts array to string
- concat() : joins multiple arrays & returns result
- unshift() : add to start 
- shift() : delete from start & return
-  slice() : returns a piece of the array(slice(strtIndx,endIndx))
- splice() : change original array (add,remove,replace) splice(startIndx,delCount,newEl..)
*/

// push() Method :- add to end
let foodItems = ["apple","Banana","Mango","Litchi"]
foodItems.push("Chips","Burger","Paneer")
console.log(foodItems)

//pop() Method :- delete from end & return 
let foodItems2 = ["apple","Banana","Mango","Litchi"]
let deletedItem = foodItems2.pop()
console.log(foodItems2)
console.log(deletedItem)

//toString() Method :- converts array to string
let foodItems3 = ["apple","Banana","Mango","Litchi"]
console.log(foodItems3.toString())
console.log(foodItems3)

//concat() Method :- joins multiple arrays & returns result
let marvel = ["Captain America", "ironman","antman","spiderman","thor","hulk"]

let dcHeroes = ["batman","superman"]

let indianHeroes = ["shaktiman","krish"]
 let allheroes = marvel.concat(dcHeroes,indianHeroes)
console.log(allheroes)


// unshift() Method :- add to start 

let items = ["banana","tomato",]
 items.unshift("Apple")
console.log(items)

// shift() Method :- delete from start & return

let val = items.shift()
console.log("deleted value :",val)


// slice() Method :- returns a piece of the array(slice(strtIndx,endIndx))

let Marvel = ["Captain America", "ironman","antman","spiderman","thor","hulk"]

console.log(Marvel.slice(1,3))

// splice() Method :- change original array (add,remove,replace) splice(startIndx,delCount,newEl..)

let num = [1,2,3,4,5,6,7,8]
num.splice(2,0,101,102) // add element
console.log(num)

let num1 = [1,2,3,4,5,6,7]
num1.splice(3,2) // delete element
console.log(num1)

let num2 = [1,2,3,4,5,6,7,8]
num2.splice(4,1,101) // replace element
console.log(num2)
