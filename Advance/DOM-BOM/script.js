const hd = document.querySelector("#heading")

hd.classList.add("red-text")

const p = document.createElement("p")
p.textContent = "This is pg added by JS"

document.body.appendChild(p)

const div = document.getElementById("div")
div.style.backgroundColor="green"
div.style.color="pink"