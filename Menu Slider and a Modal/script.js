const toggle = document.getElementById("toggle")
const openBtn = document.getElementById("open")
const closeBtn = document.getElementById("close")
const modal = document.getElementById("modal")
//Show Navbar
toggle.addEventListener("click",()=>{
  document.body.classList.toggle("show-nav")
})
//Show Modal
openBtn.addEventListener("click",()=>{
  modal.classList.add("show-modal")
})
//Close Modal
closeBtn.addEventListener("click",()=>{
  modal.classList.remove("show-modal")
})
//Close modal on clicking anywhere outside of it
window.addEventListener("click",(e)=>{
  if(e.target === modal){
    modal.classList.remove("show-modal")
  }
  else{
    return false
  }
})