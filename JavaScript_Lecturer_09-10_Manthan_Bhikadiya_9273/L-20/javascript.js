const button = document.getElementById('btn');
const result = document.getElementById('lodedata');

button.addEventListener('click', () => {
    const http= new XMLHttpRequest();
    
    http.open("GEt","https://jsonplaceholder.typicode.com/comments",true);

    http.onload = function(){
        if(this.status===200){
            const user = JSON.parse(this.responseText);

            result.innerHTML = `<span>${user[0].email}</span>`;
        }else{
            result.innerHTML = `Error: ${this.status}`;
        }
    }

    http.send();
});