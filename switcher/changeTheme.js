function changeTheme() {
  let ElementsWithLightTheme = document.querySelectorAll(
    "[class*='theme_light']"
  );
  if (this.checked) {
    for (let elem of ElementsWithLightTheme) {
      elem.className = elem.className.replace(/theme_light/, "theme_dark");
    }
  } else {
    let ElementsWithDarkTheme = document.querySelectorAll(
      "[class*='theme_dark']"
    );
    for (let elem of ElementsWithDarkTheme) {
      elem.className = elem.className.replace(/theme_dark/, "theme_light");
    }
  }
}

switcher.addEventListener("change", changeTheme);
