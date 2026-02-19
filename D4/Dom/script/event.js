// // // document.getElementById("btn").addEventListener('click', function () {

// // //     this.style.backgroundColor = 'yellow'
// // //     this.style.color = 'red'
// // //     this.style.fontSize = '30px'
// // //     this.style.fontFamily = 'cursive'
// // // })

// // // let button = document.getElementById("btn")
// // // let text = document.getElementById("text")
// // // button.addEventListener("click", function () {
// // //    alert("Button Clicked!")
// // // })

// // document.getElementById("eventBtn")
// //     .addEventListener("click", function () {
// //         alert("Button Clicked!");
// //     })
// let btn = document.getElementById("toggleBtn")
// btn.innerHTML = "Shaw"
// function toggle() {
//     let text = document.getElementById("toggleText")

//     console.log(btn)
//     if (text.style.display == "none") {
//         text.style.display = "block"


//     }
//     else {
//         text.style.display = "none"
//         btn.innerHTML = "Hide"
//     }
// }
// function validate() {
//     let name = document.getElementById("name").value
//     if (name.length == "") {
//         alert("Please enter the name")
//     }
//     else {
//         alert("Sucess")
//     }
// }

// let pgraph = document.getElementById("pgraph")
// pgraph.addEventListener("click", function () {
//     // pgraph.style.color = "red"
//     pgraph.innerHTML = "You have clicked the paragraph!"
// })
document.getElementById("pgraph").addEventListener("click", function () {
    this.innerHTML = "You have clicked the paragraph!"
    this.style.color = "red"
    this.style.fontSize = "30px"
    this.style.fontFamily = "cursive"
})