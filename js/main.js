let icon = document.querySelector("header .contener .links .icon");
let span2 = document.querySelector("header .contener .links .icon span:nth-child(2)");
let ul = document.querySelector("header .contener .links ul");
let load = document.querySelector(".loading")
window.addEventListener("resize",function(){
  if (innerWidth <=992) {
    ul.style.display="none";
    span2.style.width="60%";
    // icon.classList.toggle("show");
    icon.addEventListener("click",function(e){
      if (e.target.classList.contains("show")) {
        ul.style.display="block";
        span2.style.width="100%";
        icon.classList.toggle("show");
      }else {
        ul.style.display="none";
        span2.style.width="60%";
        icon.classList.toggle("show");
      }
    });
  }else {
    ul.style.display="flex";
  }
  });
  window.addEventListener("load",()=>{load.style.display="none"})
  