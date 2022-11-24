const menu = document.querySelector(".menu");
const menuItems = document.querySelectorAll(".menuItem");
mobileMenu = document.querySelector(".mobileMenu");

const handleOpenMobileMenu = () => {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    mobileMenu.classList.remove("fixedMenuButton");
  } else {
    menu.classList.add("showMenu");
    mobileMenu.classList.add("fixedMenuButton");
  }
};

mobileMenu.addEventListener("click", handleOpenMobileMenu);
