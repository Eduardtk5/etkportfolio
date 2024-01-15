"use strict";

function toggleDropdown() {
  const dropdown = document.getElementById("myDropdown");
  dropdown.classList.toggle("menu--show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
  const dropdown = document.getElementById("myDropdown");
  if (event.target !== dropdown && !event.target.matches(".hamburger")) {
    dropdown.classList.remove("menu--show");
  }
};
//masna javaScript jako smrdi
