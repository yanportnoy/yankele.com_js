const navBarElements = document.querySelectorAll("a");
const navBarElement = document.getElementById("navBarItems");
const myBody = document.getElementById("body");
navBarElement.addEventListener("click", onItemClick);
myBody.addEventListener("onload", homeLoad);
// console.log(navBarElements);
// for (let i = 0; i < navBarElements.length; i++) {
//   console.log(navBarElements[i]);
// }
function homeLoad() {
  page = "html/home.html";
  fetch(page)
    .then((data) => data.text())
    .then((html) => (document.getElementById("content").innerHTML = html));
}

function onItemClick(e) {
  // console.log(e.target);
  for (let i = 0; i < navBarElements.length; i++) {
    navBarElements[i].classList.remove("active");
  }
  //navBarElements.forEach();
  e.target.setAttribute("class", "active");
  getHTML(e.target.id);

  // var fileName =
  //   `<object class="h-100 d-inline-block w-100" style="width: 100%" type="text/html" data=html/` +
  //   e.target.id +
  //   `.html>"`;
  // console.log(fileName);
  // document.getElementById("content").innerHTML = fileName;
}

function getHTML(id) {
  page = "html/" + id + ".html";
  fetch(page)
    .then((data) => data.text())
    .then((html) => (document.getElementById("content").innerHTML = html));
}

function load_home() {
  document.getElementById("content").innerHTML = "";
}
