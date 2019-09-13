let apiUrl = "https://api.github.com/users/AlisonYoon/repos?sort=updated";


var printHere = document.getElementById('testId')
var obj;

fetch(apiUrl)
    .then(response => response.json())
    .then(data => obj = data)
    .then(() => console.log(obj))
    .then(()=> printHere.innerHTML = obj[0]["name"])
    .then(()=> printHere.href = obj[0]["html_url"])
