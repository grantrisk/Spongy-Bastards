window.onload=function(){
    const discord = document.querySelector(".discord")
    const opensea = document.querySelector(".opensea")
    const twitter = document.querySelector(".twitter")
    const armory = document.querySelector(".armory")

    discord.addEventListener("click", () => {
        window.open("https://discord.gg/AuvJpYWGQP", '_blank');
    })

    opensea.addEventListener("click", () => {
        window.open("https://opensea.io/collection/spongy-bastards", '_blank');
    })

    twitter.addEventListener("click", () => {
        window.open("https://twitter.com/spongybastards", '_blank');
    })

    armory.addEventListener("click", () => {
        window.open("https://oncyber.io/the-spongy-bastard-armory", '_blank');
    })
}