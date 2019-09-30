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

var text2 = new Blotter.Text("now plays with code", {
    family: "serif",
    size: 40,
    fill: '#eceff4',
    paddingLeft: 70,
    paddingRight: 70
})

var text3 = new Blotter.Text("She used to play with pixels", {
    family: "serif",
    size: 30,
    fill: '#eceff4',
    paddingLeft: 40,
    paddingRight: 40
})


var rolling = new Blotter.RollingDistortMaterial(),
    liquid = new Blotter.LiquidDistortMaterial()

liquid.uniforms.uSpeed.value = 0.5
liquid.uniforms.uVolatility.value = 0.05
liquid.uniforms.uSeed.value = 0.05

var brolling = new Blotter(liquid, {
        texts: text3
    }),
    bliquid = new Blotter(rolling, {
        texts: text2
    })

var container3 = document.querySelector('.container3'),
    container4 = document.querySelector('.container4')

var bScopeR = brolling.forText(text3),
    bScopeL = bliquid.forText(text2)

bScopeR.appendTo(container3)
bScopeL.appendTo(container4)






