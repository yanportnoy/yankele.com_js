const navBarElements = document.getElementById("navBarItems");
navBarElements.addEventListener("click", onItemClick);
console.log(navBarElements);
Array.from(navBarElements).forEach(function (item) {
  console.log(item.id);
});

function onItemClick(e) {
  console.log(e.target.id);
  //navBarElements.forEach();
  e.target.setAttribute("class", "active");
}
