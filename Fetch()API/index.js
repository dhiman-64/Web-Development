fetch("https://jsonplaceholder.typicode.com/users")

.then(response => response.json())
.then(json=> {
    let li = `<tr><th>Name</th><th>Email></th></tr>`;
    json.forEach(user =>{
        li+= `<tr>
        <td>${user.name}</td>
        <td>${user.email}</td>
        </tr>`;
    });
    document.getElementById("users").innerHTML = li;
});