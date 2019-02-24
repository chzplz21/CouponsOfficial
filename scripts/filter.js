

var filter = (function() {
 
    var bindFunctions = function() {

		//adds filter drop down depending
		jQuery("#CategoryButton").click(function() {
			showDropdown();
             
		 });
		 
		 jQuery("#TerminalButton").click(function() {
			showDropdownTwo();
             
         });

        jQuery("#FilterForm :checkbox").click(function() {
			filterFunction();
             
         });


	};

	function showDropdown() {
		jQuery("#Cat-arrow-right").toggle();
		jQuery("#Cat-arrow-down").toggleClass("arrow-inline-block");
		document.getElementById("CatDropdown").classList.toggle("show");
	}
	

	function showDropdownTwo() {
		jQuery("#Term-arrow-right").toggle();
		jQuery("#Term-arrow-down").toggleClass("arrow-inline-block");
		document.getElementById("TermDropdown").classList.toggle("show");
	}



    function filterFunction() {

        var checkedArray = [];
		var thisForm = document.getElementById("FilterForm");
		var inputs = thisForm.getElementsByClassName('inputs');
		
		for (var x = 0; x < inputs.length; x++) {
			if (inputs[x].checked == true) {
				checkedArray.push(inputs[x].id);
				
			}
		}
		
		var typeFlag = false;
		var terminalFlag = false;

		for (x = 0; x < checkedArray.length; x++) {
			if (checkedArray[x] == "dining" || checkedArray[x] == "shopping") {
				typeFlag = true;
			}
			
			if (checkedArray[x] == "north" || checkedArray[x] == "south" || checkedArray[x] == "central") {
				terminalFlag = true;
			}
				
		}
	
		if (typeFlag == false && terminalFlag == false) {
			ShowAll();
	
		}
		
		
		else if (typeFlag == true && terminalFlag == true) {
			BothFunction(checkedArray);
		}
		
		
		else if (typeFlag == false) {
			var property = "terminal";
			OnlyOne(checkedArray, property);
		}
		
		
		else if (terminalFlag == false) {	
			var property = "type";
			OnlyOne(checkedArray, property);
		}
		
    }


    //Both Function, for if at least one of Type and one of Terminal are checked
	function BothFunction(checkedArray) {
		
        //goes through each object
            for (var i = 0; i<couponObjects.length; i++) {
                
                var typeFlag = false;
                var terminalFlag = false;
                //The label
                var elementNow = document.getElementById(couponObjects[i].id);
                //Box is the actual coupon
                var Box = elementNow.parentNode.parentNode;
                //nested loop, goes through each checkedArray element, if both type and terminal
                //are found in checkedArray, then set those flags, typeFlag and terminalFlag, as true
                for (var y = 0; y < checkedArray.length; y++) {
                
                    if (couponObjects[i].type == checkedArray[y]) {
                        typeFlag = true;
                    }
                    
                    if (couponObjects[i].terminal == checkedArray[y]) {
                        terminalFlag = true;
                    }
                }
                //If they're both true, than display
                if (typeFlag == true && terminalFlag == true) {
                    if (Box.style.display == "none") {
                                Box.style.display = "inline-block";
                            }	
                        }
                
                    
                else  {
                    FormDisappear(i);
                    }
                
            }
        
        }


        //If only one of either is selected
	function OnlyOne(checkedArray, property) {
	
		for (var i = 0; i<couponObjects.length; i++) {
			//The label
			var elementNow = document.getElementById(couponObjects[i].id);
			//Box is the actual coupon
			var Box = elementNow.parentNode.parentNode;
			
		
			var Flag = false;
			for (var y = 0; y < checkedArray.length; y++) {
				if (couponObjects[i][property] == checkedArray[y]) {
					Flag = true;
					
				}
				
			}
			
			if (Flag == true) {
				if (Box.style.display == "none") {
							Box.style.display = "inline-block";
						}	
					}
			
				
				else  {
					FormDisappear(i);
				}
			
				
		}
		
					
	}
	
	
		//When Show All button is clicked
	function ShowAll() {
		
		var FilterForm = document.getElementById("FilterForm");
		var inputs = FilterForm.getElementsByClassName('inputs');
		console.log(inputs.length);
		for (var x = 0; x < inputs.length; x++) {
			inputs[x].checked = false;
		}
		
		
		
		for (var i = 0; i<couponObjects.length; i++) {
			//the label
			var elementCheck = document.getElementById(couponObjects[i].id);
			//the actual Coupon
			var Box = elementCheck.parentNode.parentNode;
				
				if (Box.style.display == "none") {
					Box.style.display = "inline-block";
					
					
				}
				
			}
			
    }
    

    //Makes element disappear

	function FormDisappear(i) {
		//the label
		var child = document.getElementById(couponObjects[i].id);
		//the actual coupon
		var Box = child.parentNode.parentNode;
		//console.log(child);
		
		Box.style.display = "none";
		
			
	}
	


  

    function init() {
        bindFunctions();
    
    }
  
    return {
      init: init
    };


  }());



