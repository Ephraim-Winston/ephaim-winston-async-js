// Creating a new Promise using fetch
const myPromise = new Promise((resolve, reject) => {
    // Fetching data from an API (simulated)
    fetch("https://api.example.com/data")
        .then(response => {
            // Check if response is successful (status code in the range 200-299)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            // Parse the JSON response
            return response.json();
        })
        .then(data => {
            // Resolve the Promise with the fetched data
            resolve(data);
        })
        .catch(error => {
            // Reject the Promise with the error message
            reject(error);
        });
});

// Consuming the Promise
myPromise.then((result) => {
    console.log("Promise resolved:", result); // Output: Promise resolved: { ... } (data from API)
}).catch((error) => {
    console.error("Promise rejected:", error); // Output: Promise rejected: Error: HTTP error! Status: 404
});