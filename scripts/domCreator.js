
var domCreator =  {
   
    formCreate: function(i, Objects) {  // Method which will display type of Animal
        
        var f = document.getElementById("theForm");
		var box = document.createElement("div");
		box.className = "CouponBox";
		box.style.backgroundImage = Objects[i].src;
		

		//creates plus sign for each coupon 
		var Plus = document.createElement("div");
		Plus.className = "Plus";
		Plus.id = "PlusID";
		
		//Creates plus sign to put in Plus box
		var plusSign = document.createTextNode("+");
		plusSign.className = "plusSign";
		Plus.appendChild(plusSign);
		
		
		//adds bottom bar
		var bottomBar = document.createElement("div");
		bottomBar.className = "bottomBar";
		
		
		
		//creates label for save button
		var L = document.createElement("label");
		L.id = Objects[i].id;
		L.className = "bottomLabel";
		
		var labelText = document.createTextNode("SAVE");
		L.appendChild(labelText);
		bottomBar.appendChild(L);
		//creates save input button within bottom bar
		var saveButton = document.createElement("input");
		saveButton.type = "checkbox";
		saveButton.id = "SaveButton";
		//appends saveButton to label
		L.appendChild(saveButton);
		L.htmlfor = "SaveButton";
		
		
		
		//creates print input button within bottom bar
		var printButton = document.createElement("div");
		printButton.className = "PrintButton";
		printButton.value = "Print";
		var printText = document.createTextNode("PRINT");
		printButton.appendChild(printText);
		//appends print button to bottom bar
		bottomBar.appendChild(printButton);
		
		
		//adds Saved Bottom bar
		var bottomBarSaved = document.createElement("div");
		bottomBarSaved.className = "bottomBarSaved";
		var SavedText = document.createTextNode("\u2705 SAVED");
		bottomBarSaved.appendChild(SavedText);
		
		//Adds coupon box
		f.appendChild(box);
		//Adds plus sign to box
		box.appendChild(Plus);
		//Adds bottom bar to box
		box.appendChild(bottomBar);
		//Adds saved bottom bar to box
		box.appendChild(bottomBarSaved);
		
		
    }
    


};