let button = document.getElementById('pobierz-dane');

const getData = () => {
    fetch('https://akademia108.pl/api/ajax/get-post.php')
    .then(response => response.json())
    .then((data) => {

        let id = document.createElement('p');
        let userId = document.createElement('p');
        let title = document.createElement('p'); 
        let body = document.createElement('p');

        // wstawienie lini horyzontalnej
        let hr = document.createElement('hr');

        id.innerText = `Post Id: ${data.id}`;
        userId.innerText = `User Id: ${data.userId}`;
        title.innerText = `Title: ${data.title}`;
        body.innerText = `Body: ${data.body}`; 

        document.body.appendChild(id);
        document.body.appendChild(userId);
        document.body.appendChild(title);
        document.body.appendChild(body);
        document.body.appendChild(hr)

        .catch(error => {
            console.error(error);
        })

        // console.log(data)
        // console.log(data.userId);
        // console.log(data.id);
        // console.log(data.title);
        // console.log(data.body);
    });
}

button.addEventListener('click', getData);

