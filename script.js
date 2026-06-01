const navItems = document.querySelectorAll(".nav-item");
const pages = document.querySelectorAll(".page");

function hideAllPages() {
  pages.forEach(page => {
    page.classList.remove("active");
  });
}

function removeAllActiveButtons() {
  navItems.forEach(item => {
    item.classList.remove("active");
  });
}

navItems.forEach(item => {

  item.addEventListener("click", () => {

    const targetPage = item.getAttribute("data-page");

    hideAllPages();
    removeAllActiveButtons();

    document.getElementById(targetPage).classList.add("active");

    item.classList.add("active");

  });

});
