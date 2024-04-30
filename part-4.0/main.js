//creating a new worker and giving it the code from generate.js
//I am assuming workers are objects?
const worker = new Worker("./generate.js")

//when the user clicks "Generate primes", send a message to the worker
//The message command is "generate". and the message also contains "quota"
//Is generate a JS command/method or something we make?
document.querySelector("#generate").addEventListener("click", 
()=>{
    const quota = document.querySelector("#quota").value;
    worker.postMessage({
        command: "generate",
        quota
    })
})

//when workers sends message back to main thread
//update the output box with message for user.
//including number of primes generated from message data

worker.addEventListener("message", (message)=>{
    document.querySelector("#output").textContent = 
    `Finished generating ${message.data} primes!`
})

document.querySelector("#reload".addEventListener("click"),
()=>{
    document.querySelector("#under-input").value=
    `Try typing in here immediately after pressing Generate primes`
    document.location.reload()
}
)
