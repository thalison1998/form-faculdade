const buttonCancel = document.querySelector(".cancel");
const forms = document.querySelectorAll(".input-login")

const cleanForm = () => forms.forEach((inputs) => inputs.value = "");

buttonCancel.addEventListener("click",cleanForm)