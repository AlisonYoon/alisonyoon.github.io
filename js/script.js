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
                    printHere.innerHTML += "<a href='' target='_blank' class='repo_link underlined underlined-gradient'>" + obj[i]["name"] + "</a><br/>"
                    let repoLinkHref = document.querySelectorAll('.repo_link')
                    repoLinkHref[i].href = obj[i]["html_url"]
                }
            })
}

getApiResponse(apiUrl);

const blotterContainer = document.getElementById("blotterContainer");
let text = new Blotter.Text("Hello", {
    family : "serif",
    size : 120,
    fill : "#171717"
});
let material = new Blotter.ChannelSplitMaterial();
let blotter = new Blotter(material, { texts : text });
let scope = blotter.forText(text);
scope.appendTo(blotterContainer);

blotterContainer.addEventListener("mouseenter", function(e){
    material.uniforms.uOffset.value = 0.3;
    material.uniforms.uRotation.value = 135;
    setTimeout(function() {
        material.uniforms.uOffset.value = 0.05;
        material.uniforms.uRotation.value = 45;
    }, 500);
}, false)






