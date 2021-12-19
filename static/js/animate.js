console.log('JS LOADED2')
var animateHTML = function() {
    var elems,
        windowHeight
    
    var init = function() {
      elems = document.getElementsByClassName("hidden");
      windowHeight = window.innerHeight;
      _addEventHandlers();
    }
    
    var _addEventHandlers = function() {
        window.addEventListener("scroll", _checkPosition);
        window.addEventListener("resize", init)
    }
    var _checkPosition = function() {
      for ( var i = 0; i < elems.length; i++ ) {
        var posFromTop = elems[i].getBoundingClientRect().top;
        if ( posFromTop - windowHeight <= 0) { 
          elems[i].className = elems[i].className.replace( "hidden", "fade-in" );
        }
      }    
    }
    
    return {
      init: init
    }
  }
  
  animateHTML().init();
  /* function getElemsHeight() {
      elemsHeight = [];
      for ( var i = 0; i < elems.length; i++ ) {
      elemsHeight.push(elems[i].getBoundingClientRect().top - windowHeight)
    }
  }
  getElemsHeight();
  
  window.onscroll = function() {
    for ( var j = 0; j < elems.length; j++ ) {
      //console.log("offset " + window.pageYOffset + " elemsHeight " + elemsHeight[j])
      if ( window.pageYOffset > elems[j].getBoundingClientRect().top ) {
        
         elems[j].className = elems[j].className.replace( "hidden", "fade-in" );
         getElemsHeight();
        
      }
    }
  }; */
  
  