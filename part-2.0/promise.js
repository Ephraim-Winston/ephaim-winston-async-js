//Storing the fetch response in a variable. As the variable name suggest the fetch method retrieves 
//The Promise object from the 

//EX1

/*const fetchPromise = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
)

console.log(fetchPromise)
//Is response the Promise Object and is status a property of that object?
        //Reponse is the reponse from the server. The promise returns immediately 
        //As I thought earlier fetchPromise is the promise.
fetchPromise.then((response)=>{
    
    console.log(`Received response: ${response.status}`)
   
});
//Fetch returns a promise immediately, the response doesn't.
//This is why the bellow console log shows before the fetch response
console.log("Started request...")*/

//WE CAN ALSO CHAIN PROMISES

/*const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");

fetchPromise.then((response) => {
    const jsonPromise = response.json()
    jsonPromise.then((data)=> {
        console.log(data[0].name)
    })

})*/

//THE ABOVE CAN BE REWRITTEN AS 

const fetchPromise = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")

fetchPromise
            .then((response)=> response.json())
            .then ((data) => console.log(data[0].name))


//The if statement checks if the server was able to handle the request
            fetchPromise
            .then((response)=> {
                if (!response.ok){
                    throw new Error (`HTTP error: ${response.status}`)
                }
                return response.json()
            })
            .then ((data) => {
                console.log(data[0].name)
            })
            .catch((error)=>{
                console.error(`Could not get products: ${error}`)
            })

//COMBINING MULTIPLE PROMISES         

const fetchPromise1 = fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  )

  const fetchPromise2= fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
  )

  const fetchPromise3 = fetch(
    "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
  )
/*Promise.all requires all of the fetch promises to resolve. Otherwise and error will be thrown */
  Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
    .then((responses)=> {
        for (const response of responses){
            console.log(`${response.url}: ${response.status}`)
        }
    })
    .catch((error) =>{
        console.error(`Failed to fetch: ${error}`)
    })

//async and await 

async function myFunction(){
    try{
        // await makes function have to wait for fetch response before continuing.
        const response = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"

        )
        if (!response.ok){
            throw new Error (`HTTP error: ${response.status}`)
        }
        const data = await response.json()
        console.log(data[0].name)
    } catch (error){
        console.error(`Could not get products: ${error}`)
    }
}

fetchProducts()


async function fetchProducts() {
    try {
      const response = await fetch(
        "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
      );
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      return data;
    } catch (error) {
      console.error(`Could not get products: ${error}`);
    }
  }
  //notice that promise is is a promise object so using then is needed 
  const promise = fetchProducts();
  promise.then((data) => console.log(data[0].name));