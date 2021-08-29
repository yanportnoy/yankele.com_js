const navBarElements = document.querySelectorAll("a");
const navBarElement = document.getElementById("navBarItems");
const carousel = document.getElementById("myCarousel");
const startCard = document.getElementById("content");
const setOfCircles = document.getElementById("setOfCircles");
const navBtn = document.getElementById("navBtn");
console.log(navBtn);
navBtn.addEventListener("click", onNavBtbClck);
setOfCircles.addEventListener("click", onBtnClck);
navBarElement.addEventListener("click", onItemClick);

const links = [
  "https://lh3.googleusercontent.com/yfjy0WXblhG6CFUUsOEi3GfHu2JVIbMXzYa9yTyj3974aWsTJWYuteAbjZK30jG2lcmMDSKlLh_MMEkaUAoHjWe07rGD88CtilU65ySrIvVEmFVgUciJaU2DBp0NgakudNJNFkHi3ZQ=w1920-h1080",
  "https://lh3.googleusercontent.com/31JLCohGB26StrE6oSSHdTBPZKMlxBijWpS8QTNl9RoBVuSmViJVEdwIZZkUSHavbQUuXR3VXwB8fYLIkpp-7BYPwUr5DQuGUc6XuzvET3FAJ7olVDbvoewy8cJYRBwp-IXjM71pccI=w1920-h1080",
  "https://lh3.googleusercontent.com/dGRnMAz0E54vwi9gj3ae2G6qnkJ4QSlDIt_hpHWKrW9WUXxIcH5Ng2bFuXnJTALETjM-7l3F9CFO49HXRfSBeqRo2_VZn4SnOQ8ye2gyzI03ckXVnWRDaOrH-tNpA2bKaT7Kn7m2NSA=w1920-h1080",
  "https://lh3.googleusercontent.com/XZrQ-WYZHlAOxWmc6R7FtAxFFbDALgFxWOzjYTw8bX0X25N5SGJ615722PvgtKP3VAU2bKaqy4u0svsTlrpNxJYD7AwHQfo63aOic8S6PUXFdQDD2FIQRNjLxGB-1NjdWo9WZi8ugVQ=w1920-h1080",
  "https://lh3.googleusercontent.com/Ecdjcq5HKOzRegdJt77zxdn1eDkfKuQBqe-Wn9b0cBYG2ChnBkbSIVwKb-ZZ3-1DQ6noJ7GGpRICvo0UiLtsVhnjnXZZmu0pYkMjAAKmtugD_oRE-K1h9wNtlhJjbWMkeQ50dtHjm6E=w1920-h1080",
  "https://lh3.googleusercontent.com/DzDYaqHsPZtDUVePlfdFUVWJ9YCuE6D10muFANlKv7uoiyDr-fikjlGwVGTOGjRaRnXXQqGP8Q2jSWML1ffPCbF1jl4ZBAfR7GauzJNN0sq4DzAUBCbF6hsTIcIeHfadjBxBCvfS-SE=w1920-h1080",
];

let count = 0;

function onItemClick(e) {
  console.log(e.target.id);
  // if (e.target.id === "h1") {
  //   e.target.id = "home";
  //   console.log(e.target.id);
  //   return;
  // }
  for (let i = 0; i < navBarElements.length; i++) {
    navBarElements[i].classList.remove("active");
  }

  //navBarElements.forEach();
  e.target.setAttribute("class", "active");

  if (e.target.id === "photo") {
    //console.log(startCard);
    startCard.hidden = true;
    myCarousel.hidden = false;
    console.log(e);
  } else if (e.target.id === "easter-egg") {
    (async () => {
      getHTML(e.target.id);
      joke = await getQuote();
      //console.log(joke);
      // let content = document.getElementById("content");
      // let message = content.firstChild.firstChild.nextSibling;
      let message = document.getElementById("quote");
      message.innerHTML = joke;
    })();
    //let joke = getQuote();
  } else {
    startCard.hidden = false;
    myCarousel.hidden = true;
    getHTML(e.target.id);
  }
}

function onBtnClck(e) {
  console.log(e.target.id);
  document.getElementById("aImg").src = links[e.target.id];
  count = e.target.id;
}

function onNavBtbClck(e1) {
  //console.log(e1.target.id);

  if (e1.target.id === "nxtBtn") {
    console.log("next");
    count++;
    if (count >= links.length) {
      count = 0;
    }
    console.log(count);
    document.getElementById("aImg").src = links[count];
  } else if (e1.target.id === "prvBtn") {
    console.log("prv");
    count--;
    if (count < 0) {
      count = links.length - 1;
    }
    console.log(count);
    document.getElementById("aImg").src = links[count];
  }
  //document.getElementById("aImg").src = links[e.target.id];
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

async function getQuote1() {
  url = "https://api.chucknorris.io/jokes/random";
  // await fetch(url)
  //   .thenresponse) => return response.text())
  //   .then((data) => console.log(data));
  //console.log(myData);
  const response = await fetch(url);
  return response;

  // return await fetch(url).then((response) => {
  //   return response;
}

async function getQuote() {
  url = "https://api.chucknorris.io/jokes/random";
  const response = await fetch(url);
  var data = await response.json();
  const myData = data.value;
  return myData;
}
