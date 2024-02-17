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

// show/hide for faq answer

const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    //change icon

    const icon = faq.querySelector(".faqs__icon i");
    console.log(icon);

    if (icon.className === "fa-solid fa-plus") {
      icon.className = "fa-solid fa-minus";
    } else {
      icon.className = "fa-solid fa-plus";
    }
  });
});

//show /hide nav menu

const menu = document.querySelector(".nav__menu");
const menubtn = document.querySelector("#open-menu-btn");
const closebtn = document.querySelector("#close-menu-btn");

menubtn.addEventListener("click", () => {
  menu.style.display = "flex";
  closebtn.style.display = "inline-block";
  menubtn.style.display = "none";
});

//close nav menu
const closenav = () => {
  menu.style.display = "none";
  closebtn.style.display = "none";
  menubtn.style.display = "inline-block";
};

closebtn.addEventListener("click", closenav);

//change navbar styles on scroll

window.addEventListener("scroll", () => {
  document
    .getElementById("home")
    .classList.toggle("window-scroll", window.scrollY > 100);
});
