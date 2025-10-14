const arr = [92,45,67,89]
//asscending
 const newarr = arr.sort((a,b)=>a-b)
 //descending
 const newarr2 = arr.sort((a,b)=>b-a)
 console.log(newarr)
 console.log(newarr2)

 //check how many values are greater than for a particular number

  const newfil = arr.filter((val,index)=>val>45)
  console.log(newfil)


  //maparr

  const maparr = arr.map((val,ind)=>val*2)
  console.log(maparr)
  

  //add the values of the array

  const sum = arr.reduce((prev,curr)=>prev+=curr)
  console.log(sum)

  const summ = arr.reduce((prev,curr)=>prev+curr,0)
  console.log(summ)

  const summm = arr.reduce((prev,curr)=>prev*curr,1)
  console.log(summm)

  //find element
  const findele = arr.find((ele,ind)=>ele==45)
  console.log(findele)

// how to make object

const obj = {
  name:"abc",
  age:20,
  city:"sagar",
  country:"india",
  address:{
    pincode:2344
  },
  skill:["java","css"]
  
}
obj.age = 34
console.log(obj?.city)
console.log(obj?.phone)// ?=check 
console.log(obj.hasOwnProperty('city'))

console.log(obj?.address["pincode"])

console.log("NEW ONE")
obj.skill.push("python")

for(let key in obj){
  console.log(key,':',obj[key])
}


console.log("object ki  property")

const obj2 = obj
console.log(obj2)

obj2.age=45



