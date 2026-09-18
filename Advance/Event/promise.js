// console.log("Start")

// const obj = new Promise((resolve, reject)=>{
//     console.log("Promise <Pending>")
//     setTimeout(()=>{
//         const pin = 273
//         if(pin == 2731){
//             resolve("Promise <Resolved>")
//         }else{
//             reject(new Error("Promise <Rejected>"))
//         }
//     },4000)
// })
// obj.then(res=>console.log(res))
// .catch(err=>console.error(err))

// console.log("Stop")




//api
console.log("Start")

const objs = new Promise((resolve, reject)=>{
    console.log("Promise <Pending>")
    fetch('https://jsonplaceholder.typicode.com/posts/2')
    .then((response) => {
        if (!response.ok){
            throw new Error("API Error")
        }
        return response.json()
    })
    .then(data => {resolve(data)})
    .catch(err => {reject(err)})
})



objs.then(res=>console.log("Promise <Resolved>",res))
.catch(err=>console.error("Promise <Rejected>",err))

console.log("Stop")