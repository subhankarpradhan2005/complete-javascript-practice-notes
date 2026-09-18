// // Var variable (re-declaration & re-assign)
var a = 10
console.log(a)

var a = 20
console.log(a)

var a = 30
console.log(a)


// //const variable (not possible re-declaration & re-assign)
const a = 10
console.log(a)

//const a = 20 not possible

a = 30
console.log(a)


// // //let variable (not possible re-declaration but possible re-assign)
let a = 10
console.log(a)

// let a = 20 not possible
a = 20
console.log(a)


//const --> Best
//let  --> when value need to be changed
//var  -- due to scope issue

// if (true){
//     var x = 10
// }
// console.log(x)

if (true){
    const x = 10
}
console.log(x)