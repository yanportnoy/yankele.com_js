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

  e.target.setAttribute("class", "active");

  var fileName =
    '<object type="text/html" data=html/' + e.target.id + ".html></object>";
  console.log(fileName);
  document.getElementById("content").innerHTML = fileName;
}

function load_home() {
  document.getElementById("content").innerHTML =
    '<object type="text/html" data="html/2.html" ></object>';
}
