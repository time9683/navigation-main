document.addEventListener('DOMContentLoaded', function() {
let check = false



const MenuBtn = document.getElementById("menu");
const submenu1 = document.getElementById("sub-1")
const submenu2 = document.getElementById("sub-2")
const capa = document.getElementById("contrast")
MenuBtn.addEventListener("click",(e)=>{
console.log("click");
console.log(MenuBtn.lastElementChild.src)
  if(check){
      console.log("check");
      e.target.src = "./images/icon-menu.svg";
        document.getElementById("nav").classList.remove("nav_open");
        capa.classList.remove("container--active")
    }else{
        e.target.src = "./images/icon-close-menu.svg"
        capa.classList.add("container--active")
        document.getElementById("nav").classList.add("nav_open")
    }
  check = !check;
})



submenu1.addEventListener("click",(e)=>{
const submenu = e.target.parentElement.children[1]

activeMenu(submenu)



}
)


submenu2.addEventListener("click",(e)=>{
 
  const submenu = e.target.parentElement.children[1]
  activeMenu(submenu)


})










});




const activeMenu =  (submenu) =>{

  if(submenu.classList.contains("active")){
    submenu.classList.remove("active")
 }else{
submenu.classList.add("active")
 }
}



