function pageStart(){
  var slideNumber = 0;
  var slides = setInterval(slideShow, 4000);
slides;
  function slideShow(){
    if(slideNumber < 3){
      slideNumber++;
      var picId = "background-image" + slideNumber;
      document.getElementById(picId).style.animation = "fadeOut 1s linear forwards";
    }
    else if(slideNumber === 4){
      clearInterval(slides);
    }
  }
  

}