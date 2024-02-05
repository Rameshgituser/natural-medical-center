const navToggle = document.querySelector(".nav-toggle");
const navlinks = document.querySelectorAll("ul.menus>li>a");

navToggle.addEventListener("click", changemenustate);

function changemenustate() {
  const headermenu = document.querySelector("ul.menus");

  const navicon = document.querySelectorAll(".nav-icon");

  /*show menu */
  headermenu.classList.toggle("show");
  // headermenu.remove.toggle('ul.header--menu')
  navicon.forEach((icon) => {
    icon.classList.toggle("hidden");
  });
}

function fixednavbar() {
  const headerdom = document.querySelector(".navbar-fixed");
  const navheight = headerdom.clientHeight;
  //  console.log(navheight);

  window.addEventListener("scroll", () => {
    let scroll = window.pageYOffset || document.documentElement.scrollTop;
    //  console.log(scroll);

    if (scroll >= navheight) {
      headerdom.classList.add(".navbar-fixed");
    } else {
      headerdom.classList.remove(".navbar-fixed");
    }
  });
}

function onmenuclick() {
  //   console.log(navlinks);

  for (let i = 0; i < navlinks.length; i++) {
    navlinks[i].addEventListener("click", changemenustate);
  }
}

window.addEventListener("scroll", reveal);

function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150;

    if (revealtop < windowheight - revealpoint) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].remove.classList.remove("active");
    }
  }
}

fixednavbar();
onmenuclick();
