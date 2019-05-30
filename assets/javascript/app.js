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

function pageStart() {
  var slideNumber = 0;
  var slides = setInterval(slideShow, 4000);
  slides;
  function slideShow() {
    if (slideNumber < 3) {
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

function openPicture(src) {
  var imageScreen = document.querySelector("#image-page");
  var imageSrc = src;
  var imageDisplay = document.querySelector("#open-img");
  imageScreen.style.display = "block";
  imageDisplay.src = imageSrc;
}

function closePicture() {
  document.getElementById("image-page").style.display = "none";
}
