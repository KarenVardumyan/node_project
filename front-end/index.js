
document.getElementById('button').addEventListener('click', async () => {
    fetch('http://localhost:3000/users/')
        .then(async (response) => {
            if (response.ok) {
                const json = await response.json();
                const ul = document.createElement('ul');
                for (let i = 0; i < json.length; ++i) {
                    const li = document.createElement('li');
                    li.innerHTML = json[i].name + ' ' + json[i].surname;
                    ul.appendChild(li);
                }
                document.body.appendChild(ul);
            } else {
                alert("Error HTTP: " + response.status);
            }
        })
        .catch(error => console.log(error))
})