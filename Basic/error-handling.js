// try{
//     console.log(num)
// }catch(error){
//     console.error("An error occured: ", error.message)
// }


// try{
//     const response = fetch('https://jsonplaceholder.typicode.com/posts/2')
//     //wait for fetch -> gets response object

//     console.log(response)

//     const data = response.json()

//     console.log(data)
// }catch(error){
//     console.error('Error: ', error.message)
// }





// async function getdata() {
//     try {
//         console.log("Before fetch")
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/2')
//         //wait for fetch -> gets response object

//         // console.log(response)

//         const data = await response.json()

//         console.log(data)

//     } catch (error) {
//         console.error('Error: ', error.message)
//     }
// }

// getdata()

// console.log("After fetch")






// fetch('https://jsonplaceholder.typicode.com/posts/2')
//     .then(response => {
//         console.log(response)
//         return response.json()
//     })
//     .then(data => console.log(data))
//     .catch(error => console.error('ERROR: ',error.message))