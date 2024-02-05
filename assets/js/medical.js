function setMenuActive() {
  const sections = document.querySelectorAll("section");
  const navLinks = document.querySelectorAll("ul.menus>a");

  window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;

      if (pageYOffset >= sectionTop - sectionHeight / 3) {
        current = section.getAttribute("id");
      }
    });

    navLinks.forEach((li) => {
      li.classList.remove("active");
      if (current == li.getAttribute("href").split("#")[1]) {
        li.classList.add("active");
      }
    });
  });
}

// setMenuActive();
