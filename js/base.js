

function scrollToSection(sectionId) {
  
  var sectionTop = section.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top: sectionTop - 200, behavior: 'smooth' });
}
document.addEventListener('DOMContentLoaded', function() {

    window.addEventListener('scroll', myFunctionForSticky);
 
    var header1 = document.getElementById("header");
  
    var sticky = header1.offsetTop;
    
    function myFunctionForSticky() {
      if (window.pageYOffset > sticky) {
        document.getElementById("header").style.position = "fixed";
      } else {
        document.getElementById("header").style.position = "absolute";
      }
    }
  })

  

  
    