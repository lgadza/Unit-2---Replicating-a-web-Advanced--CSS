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
let profile = document.querySelector(".profile-pic");
let profileSettings = document.querySelector(".settings");

profile.addEventListener("mouseover", () => {
  profileSettings.style.display = "block";
});
// profile.addEventListener("mouseout", () => {
//   profileSettings.style.display = "none";
// });
let settings = document.querySelector(".settings");

let settingsInfo1 = document.querySelectorAll(".profilei");
let settingsInfo2 = document.querySelector(".name-info");
let profilePic = document.querySelector(".profile-pic.name-email-pic");
let hr = document.querySelector(".hr");
let signOut = document.querySelector(".signout");
console.log(settings);
let onlineDiv = document.querySelector(".afterr");

profilePic.addEventListener("click", () => {
  for (let i = 0; i < settingsInfo1.length; i++) {
    settingsInfo1[i].style.display = "none";

    settingsInfo2.style.display = "none";
    profilePic.classList.remove("profile-pic");
    profilePic.style.borderRadius = "10px";
    settings.style.backgroundColor = "transparent";
    hr.style.display = "none";
    signOut.style.display = "none";
    onlineDiv.remove();
  }
});
profilePic.addEventListener("mouseout", () => {
  for (let i = 0; i < settingsInfo1.length; i++) {
    settingsInfo1[i].style.display = "block";

    settingsInfo2.style.display = "block";
    profilePic.classList.add("profile-pic");
    // profilePic.style.borderRadius = "10px";
    settings.style.backgroundColor = "lightgrey";
    // hr.style.display = "none";
    signOut.style.display = "block";
  }
});
