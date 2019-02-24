

var couponBox = (function() {
 
    var bindFunctions = function() {
 
        jQuery(".CouponBox").click(function() {
            showBottomBarTwo(this);
             
         });

         jQuery("#theForm :checkbox").click(function() {
            
            respondToBoxClick(event, this);
             
         });

         jQuery(".bottomBarSaved").click(function() {
            unSave(this);
           
             
         });

   

    };


    function respondToBoxClick(event, checkBox) {
        
        //counter object singleton
        counter.increaseCounter();
        event.stopPropagation();
        jQuery(checkBox).closest('.bottomBar').hide();
        //toggles in saved bottom bar
        jQuery(checkBox).closest('.bottomBar').siblings('.bottomBarSaved').css("display", "block");
        

    }


    function unSave(bar) {

        jQuery(bar).hide();
        counter.decreaseCounter();
		jQuery(bar).siblings('.bottomBar').find('input').prop("checked", false);
		checkedTotal--;
		counterShower.innerHTML = checkedTotal;
		jQuery(bar).siblings('.bottomBar').show();
        //unsaves in local storage
        var labelID = jQuery(bar).siblings('.bottomBar').find('label').attr('id');
    
        formValues[labelID] = false;
        localStorage.setItem("formValues", JSON.stringify(formValues));



    }


    function showBottomBarTwo(CouponBox) {
        if ( jQuery(CouponBox).find('input').prop("checked") == false ) {
		
			jQuery(CouponBox).find('.bottomBar').show();
		}

    }

    function init() {
        bindFunctions();
    
    }
  
    return {
      init: init
    };


  }());



