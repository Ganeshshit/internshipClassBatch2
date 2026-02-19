

const url = 'https://jsonplaceholder.typicode.com/users';
const options = {
    method: 'GET',
    headers: {
        'x-rapidapi-key': 'e5a5ec8653msh67f0765cccb83eep1341e1jsn4132a54b08f5',
        'x-rapidapi-host': 'covid-19-data.p.rapidapi.com'
    }
};

// try {
//     const response = await fetch(url, options);
//     const result = await response.json();
//     console.log(result);
// } catch (error) {
//     console.error(error);
// }

let userList = document.getElementById("userList")
fetch(url, options)
    .then(response => response.json())
    .then(data => {
        data.forEach(user => {
            let li = document.createElement("li")
            li.textContent = user.name
            userList.appendChild(li)
        },
            data.forEach(user => {
                let li = document.createElement("li")
                li.textContent = user.email
                userList.appendChild(li)
            })
            )
    })
    .catch(err => console.error(err));
