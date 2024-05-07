function fetchData() {
    // Replace the URL with the actual API endpoint
    const apiUrl = "https://dummy.restapiexample.com/api/v1/employees";
  
    return fetch(apiUrl)
      .then(response => {
        // Check if the response is successful (status code 200)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Parse the JSON response and return it
        return response.json();
      })
      .catch(error => {
        // Handle any errors that occur during the fetch operation
        console.error("Error fetching data:", error);
      });
  }
  
  // Using async/await to consume the Fetch API
  self.onmessage = async function fetchDataAsync() {
    try {
      // Calling the asynchronous function and awaiting its result
      const data = await fetchData();
      console.log(data); 
    } catch (error) {
      console.error(error);
    }
  }
  
  // Calling the async function
 