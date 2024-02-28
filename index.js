import { toggleClassActive } from "./script/toggleClassActive.js";
import { getMessage } from "./script/getMessage.js";
import { checkEmail } from "./script//checkEmail.js";
import { sendEmail } from "./script/sendEmail.js";
import { firstPosition,  clickProcessingWithInterwal } from "./script/sliderCardPosition.js";

const form = document.querySelector("form");
const btnNav = document.querySelector(".wrapper_button_nav");
const backgroundMenu = document.querySelector(".wrapper_menu_nav");
const ulMenu = document.querySelector(".wrapper_menu_nav ul");
const btnMenu = document.querySelectorAll(".button_menue");
const basket = document.querySelectorAll(".basket");
const arrows = document.querySelectorAll(".arrow");
const sliderCards = document.querySelectorAll(".slider_block");
const btnBuy = document.querySelector(".button_white");
const btnSubmit = document.querySelector(".button_submit");
const inputEmail = document.getElementById("email");

window.addEventListener('resize', ()=>firstPosition(sliderCards));


firstPosition(sliderCards);

arrows.forEach(arrow => {
  arrow.addEventListener("click", (e) => {
    let direction = e.target.classList[1];
    clickProcessingWithInterwal(sliderCards, direction, arrow, 230);
  });
});






btnNav.addEventListener("click", () =>
  toggleClassActive(backgroundMenu, ulMenu)
);

backgroundMenu.addEventListener("click", () =>
  toggleClassActive(backgroundMenu, ulMenu)
);

btnMenu.forEach((btn) => {
  btn.addEventListener("click", () => getMessage());
});

basket.forEach((btn) => {
  btn.addEventListener("click", () => getMessage());
});

btnBuy.addEventListener("click", () => getMessage());

btnSubmit.addEventListener("click", (e) => {
  sendEmail(btnSubmit, inputEmail, e);
});

inputEmail.addEventListener("change", () => {
  checkEmail(inputEmail, btnSubmit, form);
});

inputEmail.addEventListener("keyup", () => {
  checkEmail(inputEmail, btnSubmit, form);
});

