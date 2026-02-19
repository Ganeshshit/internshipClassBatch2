const data = [
    { name: "X", mark: 10 },
    { name: "Y", mark: 20 }
];
let count = 0;

const intervalId = setInterval(() => {
    data.forEach(d => d.mark += 5);
    console.log(data);

    count++;
    if (count === 5) {
        clearInterval(intervalId);
        console.log("Stopped!");
    }
}, 3000);
console.log(intervalId._idleTimeout)


