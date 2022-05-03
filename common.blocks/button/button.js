document
  .querySelector(".intro-content__button")
  .addEventListener("click", function () {
    alert(
      `Ширина окна: ${window.innerWidth}px, высота: ${window.innerHeight}px.`
    );
  });
