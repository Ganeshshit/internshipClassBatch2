let arr = [10, 20, 30, 40, 50]

function checkResult(marks) {
    if (marks > 35) {
        console.log("Pass")
    }
    else {
        console.log("Failed")
    }
}
function marksCalculation (marks) {
    for (let i = 0; i < marks.length; i++) {
        setTimeout(checkResult, 3000, marks[i])
    }
}
marksCalculation(arr)