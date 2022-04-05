// Функция в процессе разработки.
function changeTheme() {
  if (this.checked) {
    document.body.classList.add("body_theme_dark");
    document.body.classList.remove("body_theme_light");
  } else {
    document.body.classList.add("body_theme_light");
    document.body.classList.remove("body_theme_dark");
  }
}

switcher.addEventListener("change", changeTheme);
