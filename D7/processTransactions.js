const transactions = [
    { type: "deposit", amount: 1000 },
    { type: "withdraw", amount: 500 },
    { type: "deposit", amount: 200 },
    { type: "withdraw", amount: 1500 }
];

let balance = 1000; // Starting balance

function processTransactions(queue) {
    let index = 0;

    const interval = setInterval(() => {
        if (index >= queue.length) {
            clearInterval(interval);
            console.log("Final Balance:", balance);
            return;
        }

        const tx = queue[index];
        console.log(`Processing: ${tx.type} ₹${tx.amount}`);

        if (tx.type === "deposit") {
            balance += tx.amount;
            console.log("New Balance:", balance);
        }

        if (tx.type === "withdraw") {
            if (balance >= tx.amount) {
                balance -= tx.amount;
                console.log("New Balance:", balance);
            } else {
                console.log("Insufficient funds. Skipping transaction.");
            }
        }

        index++;
    }, 1000); // 1 second interval
}

processTransactions(transactions);
