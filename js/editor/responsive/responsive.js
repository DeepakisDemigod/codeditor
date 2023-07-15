const adjust_btn = document.getElementById("responsive")


adjust_btn.addEventListener("click", () => {
  changeDimension()
  alert("Also Try dragging Notch at Bottom Right 🤙")
})


function changeDimension() {
  let web = document.getElementById('output')
  
  let height = prompt("set height to?")
  let width = prompt("set width to?")
  
  web.style.width = `${height}`
  web.style.height = `${width}`
}