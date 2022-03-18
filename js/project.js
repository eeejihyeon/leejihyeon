const container = document.querySelector(".fade");
const development = document.querySelector("#development");
const design = document.querySelector("#design");
const btn = document.querySelector(".proj_wrap .sub");

const HIDDEN_CLASS = "hidden";
const FADEIN_CLASS = "fadein";
const FADEOUT_CLASS = "fadeout";

function changeProject() {
  if (design.classList.contains(HIDDEN_CLASS)) {
    btn.innerText = "Design";
    development.classList.add(HIDDEN_CLASS);
    design.classList.remove(HIDDEN_CLASS);

    // // fadein & fadeout //
    // development.classList.remove(FADEIN_CLASS);
    // development.classList.add(FADEOUT_CLASS);
    // design.classList.add(FADEIN_CLASS);
  } else {
    btn.innerText = "Front-end";
    development.classList.remove(HIDDEN_CLASS);
    design.classList.add(HIDDEN_CLASS);

    // // fadein & fadeout //
    // design.classList.remove(FADEIN_CLASS);
    // design.classList.add(FADEOUT_CLASS);
    // development.classList.add(FADEIN_CLASS);
  }
}

btn.addEventListener("click", changeProject);
