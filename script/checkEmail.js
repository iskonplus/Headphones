const regEmail =
  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/;

export function checkEmail(inputEmail, btnSubmit, form) {
  if (regEmail.test(inputEmail.value)) {
    btnSubmit.disabled = false;
    form.classList.remove("active");
  } else if (inputEmail.value.length === 0) {
    form.classList.remove("active");
    btnSubmit.disabled = true;
  } else {
    form.classList.add("active");
    btnSubmit.disabled = true;
  }
}
