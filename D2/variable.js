function ageInDays(ageInYears) {
    var ageInDays = ageInYears * 360;
    var ageInDays = ageInYears * 365.25;
    var ageindaysScopeValue=200
    return ageInDays;
}

// console.log("Age in day var value: " + ageindaysScopeValue)
// function ageinMonths(ageInYears) {
//     let ageInMonths = ageInYears * 12;
//     let ageInMonths = ageInYears * 10;
//     return ageInMonths;
// }
function ConstVariable(cost) {
    const tax = 0.18;
    cost = cost + (cost * tax);
    return cost;
}
console.log(ageInDays(25));
// console.log(ageinMonths(25));
console.log(ConstVariable(100));
let undifinedValue;
console.log("Undifined Value : " + undifinedValue);