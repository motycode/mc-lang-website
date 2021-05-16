// smooth navigation
document.querySelector(".nav").addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("nav__link")) {
    const id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// sticky navigation
const header = document.getElementsByClassName("header")[0];
const nav = document.getElementsByClassName("navigation")[0];
const stickyNav = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    nav.classList.add("navigation--sticky");
  } else {
    nav.classList.remove("navigation--sticky");
  }
};
const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  rootMargin: "-70px",
});
headerObserver.observe(header);
