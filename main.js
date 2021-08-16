const navBarElements = document.querySelectorAll("a");
const navBarElement = document.getElementById("navBarItems");
navBarElement.addEventListener("click", onItemClick);
// console.log(navBarElements);
// for (let i = 0; i < navBarElements.length; i++) {
//   console.log(navBarElements[i]);
// }
function onItemClick(e) {
  // console.log(e.target);
  for (let i = 0; i < navBarElements.length; i++) {
    navBarElements[i].classList.remove("active");
  }
  //navBarElements.forEach();
  e.target.setAttribute("class", "active");
}

function load_home() {
  document.getElementById("content").innerHTML =
    '<object type="text/html" data="home.html" ></object>';
}
