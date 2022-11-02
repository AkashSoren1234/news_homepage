
let menubtn = document.querySelector(".nav-toggle");
let closebtn = document.querySelector(".close-btn");
let bodyelement = document.querySelector("body");
let sidebar = document.querySelector(".side-bar");
let overlay = document.querySelector(".overlay");


menubtn.addEventListener("click", () => {
  bodyelement.style.position = "fixed";
  sidebar.classList.add("show-sidebar");
  overlay.style.display = "block";
});

closebtn.addEventListener("click", () => {
  bodyelement.style.position = "relative";
  sidebar.classList.remove("show-sidebar");
  overlay.style.display = "none";
});

const sidelinks = document.querySelectorAll(".side-link");
sidelinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    bodyelement.style.position = "relative";
    sidebar.classList.remove("show-sidebar");
    overlay.style.display = "none";
    const id = e.target.getAttribute("href").slice(1);
    const element = document.getElementById(id);

    let position = element.offsetTop;
    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });
  });
});
