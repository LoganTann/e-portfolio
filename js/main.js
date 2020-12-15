
function closeMenu(e) {
  const body = document.querySelector("body");
  if (body instanceof Element && body.classList.contains("openMenu") ) {
    body.classList.remove("openMenu");
    if (e) { // e détruit dans "nav a", cf + bas
      e.preventDefault();
    }
  }
}
function openMenu(e) {
  const body = document.querySelector("body");
  if (body instanceof Element) {
    body.classList.add("openMenu");
  }
}

document.addEventListener("DOMContentLoaded", function() {
  const toggleMenu = document.getElementById("menu-toggle");
  const view = document.getElementById("view");
  toggleMenu.addEventListener("click", openMenu);
  view.addEventListener("click", closeMenu);

  const allLinks = document.querySelectorAll("nav a");
  for (link of allLinks) {
    // utilistaion d'une fn anonymous pour supprimer l'argument d'event
    link.addEventListener("click", () => closeMenu(null) );
  }
});
