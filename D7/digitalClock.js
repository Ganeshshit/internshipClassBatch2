// function displayTime() {
//     const now = new Date();
//     const timeString = now.toLocaleTimeString()
//     console.log(timeString)

// }
// setInterval(displayTime,1000)
console.log("Start");
setInterval(() => { console.log("Interval callback"); },
    1000);
    
console.log("End"); // Output: // Start // End // (1 second later) Interval
//callback // (1 second later) Interval callback // ... // Notice: "End" prints before
// the first interval callback!