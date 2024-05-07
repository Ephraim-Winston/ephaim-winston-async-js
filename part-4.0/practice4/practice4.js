// Create a new worker, giving it the code in "worker.js"
const worker = new Worker("./start-task.js");

// When the user clicks "Start Task", send a message to the worker.
document.querySelector("#start-task").addEventListener("click", () => {
  worker.postMessage("start");
});

// When the worker sends a message back to the main thread,
// update the output box with the result of the task.
worker.addEventListener("message", (event) => {
  document.querySelector("#output").textContent = event.data;
});