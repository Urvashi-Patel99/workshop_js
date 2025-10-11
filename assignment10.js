// 1.Destructure Nested Object

// Extract age and city using destructuring
 const user = { name: "Alice",
   details: {
     age: 25,
      city: "Paris" 
    } };

    const{
      details:{age,city}
    } = user

console.log(age)
console.log(city)


// 2.Merge Objects
// Merge obj1 and obj2 so that obj2 values override obj1
 const obj1 = { a: 1, b: 2 };
 const obj2 = { b: 3, c: 4 };
 const merged = {...obj1,...obj2}
 //The spread operator ... copies all enumerable properties from an object.
 console.log(merged)
 //alternative
 const merge2 = Object.assign({},obj1,obj2)
 console.log(merge2)


//  3.Convert Object to Array
// Convert this object to an array of key-value pairs
const product = { id: 1, name: "Laptop", price: 1000 };

//Object.keys(obj) → returns an array of keys.

// Object.values(obj) → returns an array of values.

// Object.entries(obj) → returns array of [key, value] pairs.

const arr =Object.entries(product)
console.log(arr)


// 4.Update Nested Value Without Mutation
// Create a new object with city changed to "Tokyo" (don’t mutate original)
 const person = { name: "John", address: { city: "London", zip: 12345 } };
  const person2 = {...person,address: { city: "London", zip: 12345 } }
  person2.address.city = "Tokyo"
  console.log(person2)
  console.log(person)






//  5.Filter Object Keys by Condition
// Create a new object with only students scoring 60 or above


 const scores = { Alice: 85, Bob: 58, Charlie: 90, Dave: 45 };
 const newscore = Object.fromEntries(
  Object.entries(scores).filter(([name,score])=>score>=60))
  console.log(newscore)
 
//  Remove duplicates and return a unique array

 const arr1 = [1, 2, 2, 3, 4, 4, 5];
 const newarr3 = arr1.filter((index,value)=>arr1.indexOf(index)===value)
 console.log(newarr3)

//  Flatten this array to a single level
 const arr4 = [1, [2, [3, [4, 5]]]];
 const newarr4 = arr4.flat(3)
 console.log(newarr4)


//  Sort users by age (ascending)
const users = [ 
  { name: "John", age: 30 },
   { name: "Alice", age: 25 },
    { name: "Bob", age: 28 }
   ];
   
   users.sort((a,b)=>a.age-b.age)
   console.log(users)


// Group people by gender (output an object with male/female arrays)
const people = [ 
  { name: "Tom", gender: "male" },
   { name: "Sara", gender: "female" },
    { name: "Alex", gender: "male" }
   ];
 const grouped = {male:[], female:[]}
   people.forEach(person=>{
    if(person.gender =="male"){
   grouped.male.push(person)
  }
  else if(person.gender=="female"){
    grouped.female.push(person)

  }
   })
  
console.log(grouped)


//Convert this to { 1: "John", 2: "Jane" }
const user1 = [ 
  { id: 1, name: "John" },
   { id: 2, name: "Jane" }
   ];
const newuser2 = {...user1}
console.log(newuser2)
