// class rectegal {
//     constructor(width, height) {
//         this.width = width,
//             this.height = height
//     }
//     area() {
//         return this.height * this.width
//     }
// }
// let rec = new rectegal(2, 3)
// console.log(rec.area())

// Parent class
// class Animal {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     eat() {
//         return this.name + " is eating";
//     }
//     sleep() {
//         return this.name + " is sleeping";
//     }
// }
// // Child class
// class Dog extends Animal {
//     constructor(name, age, breed) {
//         super(name, age); // Call parent constructor
//         this.breed = breed;
//     }
//     // Override parent method
//     makeSound() {
//         return this.name + " barks: Woof!";
//     }
//     // New method
//     fetch() {
//         return this.name + " is fetching the ball";
//     }
// }

// let dog = new Dog("Max", 3, "Golden Retriever");
// console.log(dog.eat()); // "Max is eating" (inherited)
// console.log(dog.makeSound()); // "Max barks: Woof!" (own)
// console.log(dog.fetch()); // "Max is fetching the ball" (own)


// let date=new Date()
// date.getTime()
// date.getUTCMonth()
// Creating a Map
let userMap = new Map();
userMap.set('john', { age: 30, city: 'NY' });
userMap.set('jane', { age: 25, city: 'LA' });
console.log(userMap.get('john')); // { age: 30, city: 'NY' }
console.log(userMap.has('jane')); // true
console.log(userMap.size); // 2
// Iterate
for (let [key, value] of userMap) {
    console.log(key + ": " + value.age);
}
