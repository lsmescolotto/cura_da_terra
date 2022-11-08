const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
mobileMenu = document.querySelector(".mobileMenu");

const handleOpenMobileMenu = () => {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
  } else {
    menu.classList.add("showMenu");
  }
};

mobileMenu.addEventListener("click", handleOpenMobileMenu);
