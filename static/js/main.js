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
