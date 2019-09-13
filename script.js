let apiUrl = "https://api.github.com/users/AlisonYoon/repos?sort=updated";


var printHere = document.getElementsByClassName('repo-link')
var obj;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => obj = data)
    .then(() => console.log(obj))
    .then(()=> printHere.innerHTML = obj[0]["name"])
