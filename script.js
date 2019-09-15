let apiUrl = "https://api.github.com/users/AlisonYoon/repos?sort=updated";


var printHere = document.getElementById('testId')
var obj;

let getApiResponse = (apiUrl) => {
    fetch(apiUrl)
        .then(response => response.json())
        .then(data => obj = data)
        .then(
            function(obj) {
                for(let i = 0; i < 6; i++) {
                    printHere.innerHTML += "<a href='' target='_blank' class='repo_link'>" + obj[i]["name"] + "</a><br/>"
                    let repoLinkHref = document.querySelectorAll('.repo_link')
                    repoLinkHref[i].href = obj[i]["html_url"]
                }
            })
}

getApiResponse(apiUrl);
