//variables in js 

//var: reinitialized and redefines
//let
//const


//function declaration
function test(){
  //function define 
  console.log("hello")
}
//function call
test()

//Arrow functions

const test1 = () =>{
  console.log("urvashi")
}
 test1()

 //
 console.log(test2)
 var test2 = function(){
  console.log("hello again")
 }
 test2()

 //strings in javascript
 const name = "mahi"
 const str = `urvashi ${name}`
 console.log(str.toUpperCase())
 console.log(str.toLowerCase())
 console.log(str.replaceAll('r','s'))
 console.log(str.split(''))

 //loops in js

 for(let a =0; a<str.length; a++){
  console.log(str[a])
 }

 //for in loop access index
 for(let b in str){
  console.log(str[b])
 }

 //f of loop access element directly

 for(let c of str){
  console.log(c)
 }

 str.split('').forEach(element =>{
  console.log(element)
 })

 //palindrome aba = aba true and abc =cba false
 //reverse hello java script == script java hello
 //anagram listen = silent

 //now arrays _______________
 
 const arr = [1,'a',{a:1}]
 console.log(arr)

 console.log(arr.reverse())

 arr.push(5)
 console.log(arr)

 arr.pop()
 console.log(arr)
  
 arr.splice((1,0,2))
 console.log(arr)

 
 console.log(arr.slice(1))
 

 


