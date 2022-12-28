fetch("https://jsonplaceholder.typicode.com/users")
    .then(function (response) {
        return response.json();
    })
    .then(function (users) {
        let placeholder = document.querySelector("#data");
        let output = "";
        for (let user of users) {
            output += `
        <tr>
           <td>${user.id}</td>
           <td>${user.name}</td>
           <td>${user.username}</td>
           <td>${user.email}</td>
           <td>${user.phone}</td>
           <td>${user.address.city}</td>
        </tr>
        `;
        }
        placeholder.innerHTML = output;
    })