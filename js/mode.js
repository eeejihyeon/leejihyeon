const body = document.body;
const modeBtn = document.querySelector(".btn");
const gnb = document.querySelector(".gnb");
const title = document.querySelectorAll(".title");
const anchors = document.querySelectorAll("a");

const DARK_COLOR = "#121213";
const LIGHT_COLOR = "#f4f4f4";

function handleDayNightMode() {
  // body & gnb background color //
  body.style.backgroundColor = DARK_COLOR;
  gnb.style.backgroundColor = DARK_COLOR;

  // mode button //
  modeBtn.innerText = "Day";

  // anchor color //
  anchors.forEach((anchor) => {
    anchor.classList.toggle("night_a");
  });

  // const textP = document.querySelectorAll("p");
  // const textDiv = document.querySelectorAll("div");
  // const textSpan = document.querySelectorAll(".st_det span");

  // if (modeBtn.innerText === "Day") {
  //   gnbA.classList.add("a_night");
  // }

  // for (i = 0; i <= 30; ++i) {
  //   title[i].style.color = LIGHT_COLOR;

  // }
}

modeBtn.addEventListener("click", handleDayNightMode);
