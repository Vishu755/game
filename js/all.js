












	 
$(document).ready(function () {
if ($(window).width() > 991){
$('.navbar-light .d-menu').hover(function () {
        $(this).find('.sm-menu').first().stop(true, true).slideDown(150);
    }, function () {
        $(this).find('.sm-menu').first().stop(true, true).delay(120).slideUp(100);
    });
    }
});












//change prev icon on hover
function prehover() {
    const prev = document.getElementById('prev');
    prev.setAttribute('src', 'https://img.icons8.com/dotty/80/000000/circled-chevron-left.png');
  }
  
 function prenothover() {
    const prev = document.getElementById('prev');
    prev.setAttribute('src', 'https://img.icons8.com/ios-glyphs/30/000000/circled-chevron-left.png');
  }
  
  //change next icon on hover
  function nexthover() {
    const next = document.getElementById('next');
    next.setAttribute('src', 'https://img.icons8.com/dotty/80/000000/circled-chevron-right.png');
  }
  
  function nextnothover() {
    const next = document.getElementById('next');
    next.setAttribute('src', 'https://img.icons8.com/ios-glyphs/30/000000/circled-chevron-right.png');
  }
  
  //Frames
  
  /* set initial index array to 0 */
  let startFrame = 0;
  showFrames(startFrame);
  
  /*move to next frame by increasing the index */
  function nextFrame() {
      showFrames(startFrame += 1);
  }
  
  /* move to previous frame by decreasing the index */
  function prevFrame() {
      showFrames(startFrame -= 1);  
  }
  
  
  function showFrames(changeTo) {
      let slides = document.getElementsByClassName("slide");
      
      if (changeTo > slides.length) {
        startFrame = 1
      }
      if (changeTo < 1) {
          startFrame = slides.length
      }
    
      for (let slide of slides) {
          slide.style.display = "none";
      }   
      slides[startFrame - 1].style.display = "block"; 
  }
  
  
  
  
  
  
  
  

  
  
  
  
  
