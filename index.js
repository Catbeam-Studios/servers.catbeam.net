window.addEventListener("DOMContentLoaded", (event) => {
    const game = "steam://rungameid/700330";
    document.getElementById("ip").addEventListener("click", function() {
        location.href = game;
    })
    if (this.responseURL == game) {
        location.href = "https://store.steampowered.com/app/700330/SCP_Secret_Laboratory/";
    }

    if (document.body.id == "404") {
        if (location.href.endsWith(".html") != true) {
            location.href = (location.href + ".html")
        }
    }
})
