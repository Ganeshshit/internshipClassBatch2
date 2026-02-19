// function timerCount(i) {
//     console.log(i)

// }
// for (let i = 5; i > 0; i--) {
//     setTimeout(timerCount,(6-i)*1000,i)
// }
// // console.log("GO!")
// setTimeout(() => {
//     console.log("Go!")
// }, 3000);

function timerCount(i) {
    let count = i
    if (count === 0) {
        console.log("Go!")
    }
    else {
        console.log(count)
    }
    count--;
}

// for (let i = 5; i > 0; i--) {
//     setTimeout(() => timerCount(i), (6 - i) * 1000);
// }
// setTimeout(() => {
//     console.log("Go!")
// }, 7000);

// setTimeout(() => console.log("Go!"), 6000);

setInterval(timerCount, 1000, 5)


