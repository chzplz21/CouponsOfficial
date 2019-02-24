
    var topBar =  (function() {
        
        var doc = jQuery(document);
        var startchange = jQuery('#printContainer');
	    var offset = startchange.offset();
       
        var bindFunctions = function() {
 
            jQuery(doc).scroll(function() {  
                trackScroll();
                 
             });
    
    
        };


        function trackScroll() {
            scroll_start = jQuery(doc).scrollTop();
            if(scroll_start > offset.top) {
                jQuery("#top-bar").css('background-color', 'white');
            }
            
            else {
                jQuery('#top-bar').css('background-color', 'transparent');
            }
		 
        }
    
        function init() {
            bindFunctions();
        }
      
        return {
          init: init
        };
    
    
      }());
    
    
    
    
    
    
    
    
    
    
    
   