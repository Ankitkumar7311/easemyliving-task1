const a = document.querySelector(".pop");
const b = document.querySelector(".close img")
document.querySelector(".users-foot").addEventListener("click",function(){
    if (a.style.bottom === "-60%") {
        a.style.bottom = "6%";
        b.style.bottom="68%"
      } else {
        a.style.bottom = "-60%";
        b.style.bottom="-20%"
      }
    



})
b.addEventListener("click",function(){
    a.style.bottom = "-60%";
    b.style.bottom="-20%"

})