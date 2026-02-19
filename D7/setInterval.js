let count = 0;

let id = setInterval(() => {
    count++;
    console.log(count);
console.log("Here the ID"+id)
    if (count === 5) {
        clearInterval(id);
    }
}, 1000);
console.log(id)

