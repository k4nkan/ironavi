export function removeClassHide(className) {
  const target = document.getElementById(className);
  target.classList.remove("hide");
}

export function addClassHide(className) {
  const target = document.getElementById(className);
  target.classList.add("hide");
}
