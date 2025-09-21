const menuEle = document.querySelector("#menu-btn")
const hideEle = document.querySelector(".hide")
const closeEle = document.querySelector(".close")
menuEle.addEventListener("click", ()=>{
    hideEle.style.display = "block"
})
closeEle.addEventListener("click", ()=>{
    hideEle.style.display = "none"
})