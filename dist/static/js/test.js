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

