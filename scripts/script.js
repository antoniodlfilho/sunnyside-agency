const menuMonile = document.getElementById("menu_mobile");
const menuList = document.getElementById("menu_list");

function menuOnOff() {
  menuList.classList.toggle("active");
}

menuMonile.addEventListener("click", menuOnOff);
