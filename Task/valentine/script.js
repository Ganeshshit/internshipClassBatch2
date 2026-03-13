const openBtn = document.getElementById("openLetter")
const envelope = document.getElementById("envelope")

openBtn.onclick = () => {

    document.querySelector(".hero").style.display = "none"

    document.querySelector(".letter-section").style.pointerEvents = "auto"

    envelope.classList.add("open")

}


// heart cursor

const cursor = document.createElement("div")
cursor.className = "heart-cursor"
document.body.appendChild(cursor)

document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px"
    cursor.style.top = e.clientY + "px"

})


// floating hearts background

const heartContainer = document.getElementById("hearts")

function createHeart() {

    const heart = document.createElement("div")

    heart.innerHTML = "❤️"

    heart.style.position = "absolute"
    heart.style.left = Math.random() * 100 + "vw"
    heart.style.fontSize = Math.random() * 20 + 10 + "px"

    heart.style.animation = "float 6s linear"

    heartContainer.appendChild(heart)

    setTimeout(() => heart.remove(), 6000)

}

setInterval(createHeart, 500)