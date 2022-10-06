const body = document.querySelector("body");
const switchBg = document.querySelector(".switch");
const darkMood = document.querySelector(".smd-darkmood");
const btnSwitch = document.querySelector(".switch-button");
const lightMood = document.querySelector(".smd-lightmood");
const smdHeadSmall = document.querySelector(".smd-head-small");
const darkHeadSmall = document.querySelector(".dark-head-small");

btnSwitch.addEventListener("click", () => {
  if (!btnSwitch.classList.contains("animation")) {
    body.classList.add("body-color");
    lightMood.classList.add("active");
    darkMood.classList.add("unactive");
    switchBg.classList.add("switch-bg");
    btnSwitch.classList.remove("backward");
    btnSwitch.classList.toggle("animation");
    darkHeadSmall.classList.add("dark-color");
    smdHeadSmall.classList.remove("smd-pale-color");
  } else {
    body.classList.toggle("body-color");
    lightMood.classList.toggle("active");
    darkMood.classList.toggle("unactive");
    btnSwitch.classList.toggle("backward");
    switchBg.classList.toggle("switch-bg");
    btnSwitch.classList.toggle("animation");
    darkHeadSmall.classList.toggle("dark-color");
    smdHeadSmall.classList.toggle("smd-pale-color");
  }
});
