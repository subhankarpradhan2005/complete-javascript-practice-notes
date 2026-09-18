function orderFood(customer, callback){
    console.log("Order placed by "+customer)

    setTimeout(()=>{
        console.log("Order accepted")

        setTimeout(()=>{
            console.log("preparng")
            setTimeout(()=>{
                console.log("Out of delivery")
                callback()
            },2000)
        },2000)
    },2000)
}

function deliverFood(){
    console.log("Food Delverd")
}

orderFood("Subha", deliverFood)





// //Using Promise

// function orderFood(customer) {

//     return new Promise((resolve, reject) => {
//         console.log("Order placed by " + customer)

//         setTimeout(() => {
//             console.log("Order accepted")

//             setTimeout(() => {
//                 console.log("preparng")
//                 setTimeout(() => {
//                     console.log("Out of delivery")
//                     resolve("Food is delvered")
//                     reject("Delivery Faild")
//                 }, 2000)
//             }, 2000)
//         }, 2000)
//     })
// }

// async function runOrder(){
//     try{
//         const result = await orderFood("Subha")
//         console.log(result)
//     }catch(error){
//         console.log("Error",error)
//     }
// }

// runOrder()