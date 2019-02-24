var print = (function() {
    

    var bindFunctions = function() {
        //prints multiple
        jQuery("#PrintSelected").click(function() {
            PrintMultiple();
            
         });

         //prints individual
         jQuery("#theForm .PrintButton").click(function() {
            printIndividual();
            
         });

   

    };


    function PrintMultiple() {
        var pictureCollection = [];

		//goes through each object
		for (var i = 0; i<couponObjects.length; i++) {
			//gets id of Label element for each input
			var ElementNow = document.getElementById(couponObjects[i].id);
			
			//gets input value, whether it is checked or not
			var input =  ElementNow.getElementsByTagName('input')[0];
			
			if (input.checked == true) {
                var readyForPrint = printSetUp(i);
                 //push the Image string to the pictures array
                 pictureCollection.push(readyForPrint);
				
            }

        }

        ActuallyPrint(pictureCollection);

    }


    function printIndividual() {
     
		var pictureCollection = [];
		//parent  box of the selected print
		var parentBoxOfSelected = jQuery("#theForm .PrintButton").parent();
		//Gets ID of label within that parent box
		var idOfLabel = parentBoxOfSelected.find("label").prop("id");
      
		//Goes through each object to find where the id of that label equals the id within that specific object
		for (var i = 0; i<couponObjects.length; i++) {
			if (couponObjects[i].id == idOfLabel) {
                var readyForPrint = printSetUp(i);      
                //push the Image string to the pictureCollection array
                pictureCollection.push(readyForPrint);
				
			}
			
		}
			
		ActuallyPrint(pictureCollection);		
    }
    

    function printSetUp(i) {
        //gets just the raw image url of that input. Can be found as a value in the Object
            var picURL = couponObjects[i].noURL;
            //creates a new image.. the raw url will be added to it
            var Image = document.createElement("IMG");
            Image.style.height = '120px';
            Image.style.width = '200px';
            
            //This is where the raw url is added
            Image.setAttribute("src", picURL);
            //Must do this function to convert Image object to string
            Image = outerHTML(Image);
        
            function outerHTML(node){
                return node.outerHTML || new XMLSerializer().serializeToString(node);
            }

            return Image;
         
    }


        function ActuallyPrint(pictureCollection) {

                var windowUrl = 'about:blank';
				var uniqueName = new Date();
				var windowName = 'Print' + uniqueName.getTime();
				
				var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
				
				if ( (iOS) == true) {
					
					var printWindow = window.open('url', '_self'); 
				}
				
				else {
					
					var printWindow = window.open(windowUrl, windowName, 'left=50000,top=50000');
				}
			
				//goes through pictures array
				for (var m = 0; m<pictureCollection.length; m++) {
					
					printWindow.document.write(pictureCollection[m] + " " + " ");
					
				}
				
				//Weird thing, but is necessary to correctly print the pictures
			
				printWindow.document.write(' <button onclick="PrintPage();">Print!</button> ');
				
				printWindow.document.write('<scr' + 'ipt type="text/javascript">'  + 'function PrintPage() { window.print(); }' + '</sc' + 'ript>');
				printWindow.document.close();
				printWindow.focus();

        }









    

    function init() {
        bindFunctions();
    
    }
  
    return {
      init: init
    };


  }());