const inputTypes = document.querySelector("#type-form #from");
const button = document.querySelector("#type-form button");
function onBtnClick() {
  console.log(inputTypes.value);
}

button.addEventListener("click", onBtnClick);
