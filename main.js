function logout() {
    window.location = "login.html";
}
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");

  loader.classList.add("loader--hidden");

  loader.addEventListener("transitionend", () => {
    document.body.removeChild(loader);
  });
});

function ctg() {
  window.open("https://github.com/AxGhost1");
}

function java() {
  window.open("https://github.com/AxGhost1/Java-Beginner");
}