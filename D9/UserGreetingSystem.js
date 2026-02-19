const users = [
    { name: "Ganesh", age: 22 },
    { name: "Ravi", age: 25 },
    { name: "Anu", age: 20 }
];

// string + function
function formatName(name) {
    return name.toUpperCase();
}

// async simulation
function fetchUsers() {
    return new Promise((resolve) => {
        setTimeout(() => resolve(users), 1000);
    });
}

async function startGreeting() {
    const data = await fetchUsers();
    let index = 0;

    const intervalId = setInterval(() => {
        if (index < data.length) {
            console.log(`Hello ${formatName(data[index].name)} - Age: ${data[index].age}`);
            index++;
        }
    }, 2000);
    // stop interval
    setTimeout(() => clearInterval(intervalId), data.length * 2000 + 100);
}

startGreeting();
