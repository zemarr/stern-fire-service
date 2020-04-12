console.log('working');

window.onscroll = function() {stick()};

// Sticky Nav
var navbar = document.getElementById("nav");
var sticky = navbar.offsetTop;
function stick() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
// Sticky Nav