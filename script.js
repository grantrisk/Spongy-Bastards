window.onload=function(){
    const discord = document.querySelector(".discord")
    const opensea = document.querySelector(".opensea")
    const twitter = document.querySelector(".twitter")

    discord.addEventListener("click", () => {
        window.open("https://discord.gg/AuvJpYWGQP", '_blank');
    })

    opensea.addEventListener("click", () => {
        window.open("https://opensea.io/collection/spongy-bastards", '_blank');
    })

    twitter.addEventListener("click", () => {
        window.open("google.com", '_blank');
    })
}