// const handleCallBack=(a,b,add)=>{
//   add(a+b)


// }
// handleCallBack(4,7,(sum)=>{
//   console.log(sum)
// })
// //set timeout function take call back function and delay also
// setTimeout(()=>{
//   console.log("urvashi")
// },1000)

// let count = 0
// setInterval(()=>{
//  if(count<10){
//   console.log(count)
//   count++
//  }
// },)


// function add (a,b){
//   return a+b
// }
// console.log(add(12,56))

// function add2(a,b){
//   return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//       resolve(a+b)
//     },0)
//   })
// }
// console.log("promise")
// add2(12,3)
// .then(data=>console.log(data))
// .catch(error=>console.log(error))

// function hanldleAsync = async()=>{
//   const sum = await add(10,12)
// console.log(sum)
// const mult = await multiply(sum)
// console.log(mult)
// }


const renderUsers = (users)=>{
  const container = document.getElementById('container')
  for(let user of users){
    console.log(container)
    container.innerHTML =container.innerHTML+'<p>URVASHI</p>'
  }
  
}
const getUsers = () =>{
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((res)=>res.json())
    .then(data => console.log(data))
    .catch((err)=>console.log(err))
}
getUsers()



