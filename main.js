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
  var fileName =
    `<object class="h-100 d-inline-block w-100" style="width: 100%" type="text/html" data=html/` +
    e.target.id +
    `.html>"`;
  console.log(fileName);
  document.getElementById("content").innerHTML = fileName;
}

function load_home() {
  document.getElementById("content").innerHTML = "";
}
