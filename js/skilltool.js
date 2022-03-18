const stDevelopment = document.querySelector("#st_development");
const stDesign = document.querySelector("#st_design");
const stBtn = document.querySelector(".st_wrap .sub");

const HIDDEN_CLASSNAME = "hidden";
const FADEIN_CLASSNAME = "fadein";
const FADEOUT_CLASSNAME = "fadeout";

function changeSkillTool() {
  if (stDesign.classList.contains(HIDDEN_CLASSNAME)) {
    stBtn.innerText = "Design";
    stDevelopment.classList.add(HIDDEN_CLASSNAME);
    stDesign.classList.remove(HIDDEN_CLASSNAME);
  } else {
    stBtn.innerText = "Front-end";
    stDevelopment.classList.remove(HIDDEN_CLASSNAME);
    stDesign.classList.add(HIDDEN_CLASSNAME);
  }
}

stBtn.addEventListener("click", changeSkillTool);
