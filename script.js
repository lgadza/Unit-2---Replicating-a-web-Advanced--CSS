let nextSlide = document.querySelectorAll(".next");
let slide = document.querySelectorAll(".recommended");
let overflow = document.querySelectorAll(".overflow ");
let firstItemSlide = document.querySelectorAll(".first-item-slide");
let back = document.querySelectorAll(".back");
console.log(slide);

for (let i = 0; i < nextSlide.length; i++) {
  nextSlide[i].addEventListener("mouseover", () => {
    slide[i].style.transform = "translateX(-250px)";
    slide[i].style.transition = "2s";
    overflow[i].style.visibility = "visible";
    nextSlide[i].style.display = "none";
    nextSlide[i].style.transition = "2.5s";
    firstItemSlide[i].style.visibility = "hidden";
    // back[i].style.visibility = "visible";
    back[i].style.display = "block";
  });
}

for (let i = 0; i < back.length; i++) {
  back[i].addEventListener("mouseover", () => {
    slide[i].style.transform = "translateX(0)";
    slide[i].style.transition = "2s";
    overflow[i].style.visibility = "hidden";
    nextSlide[i].style.display = "block";
    nextSlide[i].style.transition = "2.5s";
    firstItemSlide[i].style.visibility = "visible";
    // back[i].style.visibility = "visible";
    back[i].style.display = "none";
  });
}
