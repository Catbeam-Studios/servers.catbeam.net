window.addEventListener("DOMContentLoaded", (event) => {
    $ (function() {
        $ ("#naviframe").load("/navigation.html");
    })

    $("body").prepend('<div id="topnavshadow"></div>')
    $("body").prepend('<div id="naviframe"></div>')

    window.addEventListener('load', function() {
        if (document.getElementById("nav" + document.body.id) != null) {
            document.getElementById("nav" + document.body.id).style.color = "white"
        }
    })
    
    if (document.body.id == "404") {
        if (location.href.endsWith(".html") != true) {
            location.href = (location.href + ".html")
        }
    }
})

function openSCPSL() {
    location.href = "steam://rungameid/700330"
}