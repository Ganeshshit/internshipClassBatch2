let count = 10
function Timer(count) {
    let interval=Setinterval(() => {
        console.log(count)
        count--
    }, 1000);
}
Timer(count)