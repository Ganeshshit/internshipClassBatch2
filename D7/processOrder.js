function processOrder() {
    // Step 1 – Immediately
    console.log("Order Received");

    // Step 2 – After 1 second
    setTimeout(() => {
        console.log("Processing Payment...");
    }, 1000);

    // Step 3 – After 3 seconds total
    setTimeout(() => {
        console.log("Payment Confirmed");
    }, 3000);

    // Step 4 – After 5 seconds total
    setTimeout(() => {
        console.log("Order Shipped");
    }, 5000);

    // Step 5 – After 7 seconds total
    setTimeout(() => {
        console.log("Order Delivered");
    }, 7000);
}

processOrder();
