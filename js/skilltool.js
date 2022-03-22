const stDevelopment = document.querySelector("#st_development");
const stDesign = document.querySelector("#st_design");
const stBtn = document.querySelector(".st_wrap .sub");

function changeSkillTool() {
  if (stDesign.classList.contains(HIDDEN_CLASS)) {
    stBtn.innerText = "Design";
    stDevelopment.classList.add(HIDDEN_CLASS);
    stDesign.classList.remove(HIDDEN_CLASS);
  } else {
    stBtn.innerText = "Front-end";
    stDevelopment.classList.remove(HIDDEN_CLASS);
    stDesign.classList.add(HIDDEN_CLASS);
  }
}

stBtn.addEventListener("click", changeSkillTool);
