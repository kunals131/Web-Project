//checking if Loaded!!
console.log("Loaded");

//Header Changes
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".home__bottom");
  const header_inside = document.querySelector(".home__bottom__header");
  document.addEventListener("scroll", () => {
    if (window.scrollY >= 0.9 * window.innerHeight) {
      header.classList.add("header-top");
    } else {
      if (header.classList.contains("header-top")) {
        header.classList.remove("header-top");
      }
    }
  });

  //Animations


});


const allScrollableGrids = document.querySelectorAll('.scrollGrid');

allScrollableGrids.forEach(gridITem=>{

console.log(window.innerWidth)
let prev = 0;
function tick() {
    gridITem.scrollLeft +=1;
    if (gridITem.scrollLeft===prev) gridITem.scrollLeft=0;
    prev = gridITem.scrollLeft;
    setTimeout(tick,50)

    // console.log(gridITem.scrollLeft)
}
tick();


})

//popup
const popup = document.querySelector('.popup');
document.addEventListener('DOMContentLoaded', ()=>{

  setTimeout(()=>popup.classList.toggle('popup-invisible'), 2000);
  setTimeout(()=>popup.classList.toggle('popup-invisible'), 8000)
})