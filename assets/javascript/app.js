$(document).ready(function () {
  // Add smooth scrolling to all links
  $("a").on('click', function (event) {

    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
      // Prevent default anchor click behavior
      event.preventDefault();

      // Store hash
      var hash = this.hash;

      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });

});



// picture slide show

function pageStart() {
  var slideNumber = 0;
  var slides = setInterval(slideShow, 4000);
  slides;
  function slideShow() {
    if (slideNumber < 4) {
      slideNumber++;
      var picId = "background-image" + slideNumber;
      document.getElementById(picId).style.animation = "fadeOut 1s linear forwards";
    }
    else if (slideNumber === 4) {
      clearInterval(slides);
    }
  }


}

function header() {
  $("header").css("opacity", "1");
  
}

// Open images in a seperate window

function openPicture(src) {
  var imageScreen = document.querySelector("#image-page");
  var imageSrc = src;
  var imageDisplay = document.querySelector("#open-img");
  imageScreen.style.display = "block";
  imageDisplay.src = imageSrc;
}

// Close window

function closePicture() {
  document.getElementById("image-page").style.display = "none";
}

// Mobile nav

function mobileNav(){
  if(document.getElementById("menu").innerHTML === "Menu"){
    document.getElementById("menu").innerHTML = "Exit";
    document.getElementById("mobile-hidden").style.display = "block";
    document.getElementById("mobile-hidden").style.animation = ".3s reveal3 forwards";
  } else if(document.getElementById("menu").innerHTML === "Exit"){
    document.getElementById("menu").innerHTML = "Menu";
    document.getElementById("mobile-hidden").style.display = "none";
  }

}

// image gallery



var slideIndex = 1;
showDivs(slideIndex);

var slideshow = setInterval(slideShow, 3000);

function slideShow(){
  showDivs(slideIndex += 1);
}

function plusDivs(n) {
  clearInterval(slideshow)
  showDivs(slideIndex += n);
}

function showDivs(n) {
  var i;
  var x = document.getElementsByClassName("mySlides");
  if (n > x.length) {slideIndex = 1}
  if (n < 1) {slideIndex = x.length}
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  x[slideIndex-1].style.display = "block";  
}