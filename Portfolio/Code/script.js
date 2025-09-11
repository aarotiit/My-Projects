// Header nav: hamburger toggle + a11y
const hamMenu = document.querySelector(".ham-menu");
const offScreenMenu = document.querySelector(".off-screen-menu");
const body = document.body;

function setExpanded(isOpen) {
  hamMenu.setAttribute("aria-expanded", String(isOpen));
  hamMenu.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
}

function openMenu() {
  hamMenu.classList.add("active");
  offScreenMenu.classList.add("active");
  body.classList.add("no-scroll");
  setExpanded(true);
}

function closeMenu() {
  hamMenu.classList.remove("active");
  offScreenMenu.classList.remove("active");
  body.classList.remove("no-scroll");
  setExpanded(false);
}

hamMenu.addEventListener("click", () => {
  const isOpen = hamMenu.classList.toggle("active");
  offScreenMenu.classList.toggle("active");
  body.classList.toggle("no-scroll");
  setExpanded(isOpen);
});

// Close on Escape
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    closeMenu();
  }
});

// Close when a menu link is clicked (useful on mobile)
offScreenMenu.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    closeMenu();
  });
});
