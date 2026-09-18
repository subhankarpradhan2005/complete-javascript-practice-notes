//Synchronous JS
console.log("Hello")

function greet(){
    console.log("Hello")
}

greet()

console.log("End")


//Asynchronous JS
console.log("Hello")

setTimeout(()=>{
    console.log("Hello after 2")
}, 2000)

console.log("End")