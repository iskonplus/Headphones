import { getMessage } from "./getMessage.js";

export function sendEmail(btnSubmit, inputEmail, e) {
    e.preventDefault();
    getMessage(inputEmail.value);
    btnSubmit.disabled = true;
    inputEmail.value = '';
}