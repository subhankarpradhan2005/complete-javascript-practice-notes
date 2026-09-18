//when a function remembers and can use variables from its outer scope even after the outer function has finished executing.

function outer(){
    let count = 0
    console.log(count)
    return function inner(){
        ++count
        console.log(count)
    }
}

const counter = outer()
counter()
counter()