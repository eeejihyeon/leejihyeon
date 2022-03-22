const body = document.body;
const header = body.querySelector("header");
const main = body.querySelector("main");
const footer = body.querySelector("footer");

const modeBtn = document.querySelector(".btn");
const gnb = document.querySelector(".gnb");
const introImgDay = document.querySelector("#introDay");
const introImgNight = document.querySelector("#introNight");
const introName = document.querySelector(".intro_name");
const title = document.querySelectorAll(".title");
const anchors = document.querySelectorAll("a");
const paras = document.querySelectorAll("p");
const divTexts = document.querySelectorAll("div");
const questions = document.querySelectorAll(".faq_btn");
const hrs = document.querySelectorAll(".line, .st_line, .foo_line");

const NIGHT_BG = "night_bg";
const NIGHT_A = "night_a";
const NIGHT_TEXT = "night_text";
const NIGHT_POINT_TEXT = "night_point_text";
const NIGHT_BTN = "night_btn";

function introChange() {
  // intro image //
  if (introImgNight.classList.contains(HIDDEN_CLASS)) {
    introImgNight.classList.remove(HIDDEN_CLASS);
    introImgDay.classList.add(HIDDEN_CLASS);
  } else {
    introImgDay.classList.remove(HIDDEN_CLASS);
    introImgNight.classList.add(HIDDEN_CLASS);
  }

  // intro text //
  introName.classList.toggle(NIGHT_POINT_TEXT);
}

function pointText() {
  const langs = document.querySelectorAll(".lang");
  const stNames = document.querySelectorAll(".st_name");
  const subs = document.querySelectorAll(".sub");

  langs.forEach((lang) => {
    lang.classList.toggle(NIGHT_POINT_TEXT);
  });

  stNames.forEach((name) => {
    name.classList.toggle(NIGHT_POINT_TEXT);
  });

  // change button //
  subs.forEach((sub) => {
    sub.classList.toggle(NIGHT_BTN);
  });
}

function handleDayNightMode() {
  // body & gnb background color //
  body.classList.toggle(NIGHT_BG);
  gnb.classList.toggle(NIGHT_BG);

  // mode button //
  if ((modeBtn.innerText = "Night")) {
    modeBtn.innerText = "Day";
  } else {
    modeBtn.innerText = "Night";
  } // !!!!!!!!!! Day - Night 변경 왜 안 되지...
  modeBtn.classList.toggle(NIGHT_BTN);

  // text color //
  anchors.forEach((anchor) => {
    anchor.classList.toggle(NIGHT_A);
  });

  divTexts.forEach((divText) => {
    divText.classList.toggle(NIGHT_TEXT);
  });

  questions.forEach((question) => {
    question.classList.toggle("night_faq");
  });

  // hr //
  hrs.forEach((hr) => {
    hr.classList.toggle("night_hr");
  });

  introChange();
  pointText();
}

modeBtn.addEventListener("click", handleDayNightMode);
