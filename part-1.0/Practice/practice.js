document.querySelector("#user-input").addEventListener("input", (event) => {
    const inputValue = event.target.value;
    console.log("Input value changed:", inputValue);
});