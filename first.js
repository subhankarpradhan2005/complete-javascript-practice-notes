function print(){
    console.log("This is print fn")
}

function add(a, b){
    console.log("This is add function")
    print();
    return a + b
}

let result = add(5, 3)

console.log(result)
console.log(++result)
console.log(++result)
console.log(++result)

document.getElementById("output").innerHTML = "Result: " + result