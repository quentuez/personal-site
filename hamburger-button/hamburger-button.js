document
  .querySelector(".main__hamburger-button")
  .addEventListener("click", function () {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  });
