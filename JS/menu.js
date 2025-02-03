window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
    document.querySelector('.nav-bar ul').style.backgroundColor = '#333'; 
  } else {
    document.querySelector('.nav-bar ul').style.backgroundColor = "rgba(36, 35, 35, 0.27)"; 
  }
}

document.getElementById("my-svg").addEventListener("click", function () {
  var currentColor = window.getComputedStyle(this).fill;
  this.style.fill = (currentColor === "rgb(255, 255, 255)") ? "orange" : "white";
});


