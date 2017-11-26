document.addEventListener("DOMContentLoaded", function(event) { 
	jQuery(document).ready(function($) {
		console.log( localize_vars.url ); 
		 //$("body").prepend('<img src="'+ localize_vars.daisy + '" />');
	
	
	//All objects
	var Objects = [
	//north terminal 
		{id: "one", src: 'url('+ localize_vars.Airessentials_north_shopping_traveler + ')', noURL: localize_vars.Airessentials_north_shopping_traveler, type: "shopping", terminal: "north", foodOk: "yes", termOk: "yes"},
		{id: "two", src: 'url('+ localize_vars.BacardiMojito_north_dining_traveler + ')', noURL: localize_vars.BacardiMojito_north_dining_traveler, type: "dining", terminal: "north", foodOk: "yes", termOk: "yes"},
		{id: "three", src: 'url('+ localize_vars.BijouxTerner_north_shopping_traveler + ')', noURL: localize_vars.BijouxTerner_north_shopping_traveler, type: "shopping", terminal: "north", foodOk: "yes", termOk: "yes"},
		{id: "four", src: 'url('+ localize_vars.BooklinkCafe_north_shopping_traveler + ')', noURL: localize_vars.BooklinkCafe_north_shopping_traveler, type: "shopping", terminal: "north", foodOk: "yes", termOk: "yes"},
		{id: "five", src: 'url('+ localize_vars.Brito_north_shopping_traveler + ')', noURL: localize_vars.Brito_north_shopping_traveler, type: "shopping", terminal: "north", foodOk: "yes", termOk: "yes"},
		{id: "six", src: 'url('+ localize_vars.CalvinKlein_north_shopping_traveler + ')', noURL: localize_vars.CalvinKlein_north_shopping_traveler, type: "shopping", terminal: "north", foodOk: "yes", termOk: "yes"},
		{id: "seven", src: 'url('+ localize_vars.DutyFree_north_shopping_traveler + ')', noURL: localize_vars.DutyFree_north_shopping_traveler, type: "shopping", terminal: "north", foodOk: "yes", termOk: "yes"},
		{id: "eight", src: 'url('+ localize_vars.EstefanKitchen_north_dining_traveler + ')', noURL: localize_vars.EstefanKitchen_north_dining_traveler, type: "dining", terminal: "north", foodOk: "yes", termOk: "yes"},
		{id: "nine", src: 'url('+ localize_vars.Fridays_north_dining_traveler + ')', noURL: localize_vars.Fridays_north_dining_traveler, type: "dining", terminal: "north", foodOk: "yes", termOk: "yes"},
		{id: "ten", src: 'url('+ localize_vars.HudsonNews_north_shopping_traveler + ')', noURL: localize_vars.HudsonNews_north_shopping_traveler, type: "shopping", terminal: "north"},
		{id: "twelve", src: 'url('+ localize_vars.Inmotion1_north_shopping_traveler + ')', noURL: localize_vars.Inmotion1_north_shopping_traveler, type: "shopping", terminal: "north", foodOk: "yes", termOk: "yes"},
		{id: "thirteen", src: 'url('+ localize_vars.JuanValdez_north_dining_traveler + ')', noURL: localize_vars.JuanValdez_north_dining_traveler, type: "dining", terminal: "north", foodOk: "yes", termOk: "yes"},
		{id: "fourteen", src: 'url('+ localize_vars.KFC_north_dining_traveler + ')', noURL: localize_vars.KFC_north_dining_traveler, type: "cars", terminal: "north", foodOk: "yes", termOk: "yes"},
		{id: "fifteen", src: 'url('+ localize_vars.MiamiGifttoGo_north_shopping_traveler + ')', noURL: localize_vars.MiamiGifttoGo_north_shopping_traveler, type: "shopping", terminal: "b", foodOk: "yes", termOk: "yes"},
		{id: "sixteen", src: 'url('+ localize_vars.MiamiNewsNow_north_shopping_traveler + ')', noURL: localize_vars.MiamiNewsNow_north_shopping_traveler, type: "shopping", terminal: "b", foodOk: "yes", termOk: "yes"},
		{id: "seventeen", src: 'url('+ localize_vars.Newslink_north_shopping_traveler + ')', noURL: localize_vars.Newslink_north_shopping_traveler, type: "shopping", terminal: "b", foodOk: "yes", termOk: "yes"},
		{id: "eighteen", src: 'url('+ localize_vars.NewslinkExplorer_north_shopping_traveler + ')', noURL: localize_vars.NewslinkExplorer_north_shopping_traveler, type: "shopping", terminal: "b", foodOk: "yes", termOk: "yes"},
		{id: "nineteen", src: 'url('+ localize_vars.Penguin_north_shopping_traveler + ')', noURL: localize_vars.Penguin_north_shopping_traveler, type: "shopping", terminal: "north", foodOk: "yes", termOk: "yes"},
		{id: "twenty", src: 'url('+ localize_vars.PizzaHut1_north_dining_traveler + ')', noURL: localize_vars.PizzaHut1_north_dining_traveler, type: "dining", terminal: "north", foodOk: "yes", termOk: "yes"},
		{id: "twentyOne", src: 'url('+ localize_vars.PizzaHut2_north_dining_traveler + ')', noURL: localize_vars.PizzaHut2_north_dining_traveler, type: "dining", terminal: "north", foodOk: "yes", termOk: "yes"},
		{id: "twentyTwo", src: 'url('+ localize_vars.SoundBalance_north_shopping_traveler + ')', noURL: localize_vars.SoundBalance_north_shopping_traveler, type: "shopping", terminal: "north", foodOk: "yes", termOk: "yes"},
		{id: "twentyThree", src: 'url('+ localize_vars.SweetIndulgencies_north_shopping_traveler + ')', noURL: localize_vars.SweetIndulgencies_north_shopping_traveler, type: "shopping", terminal: "north", foodOk: "yes", termOk: "yes"},
		{id: "twentyFive", src: 'url('+ localize_vars.TacoBell_north_dining_traveler + ')', noURL: localize_vars.TacoBell_north_dining_traveler, type: "dining", terminal: "north", foodOk: "yes", termOk: "yes"},
		{id: "twentySix", src: 'url('+ localize_vars.TechOnTheGo_north_shopping_traveler + ')', noURL: localize_vars.TechOnTheGo_north_shopping_traveler, type: "shopping", terminal: "north", foodOk: "yes", termOk: "yes"},
		{id: "twentySeven", src: 'url('+ localize_vars.TheMiamiHeat_north_shopping_traveler + ')', noURL: localize_vars.TheMiamiHeat_north_shopping_traveler, type: "shopping", terminal: "north", foodOk: "yes", termOk: "yes"},
		{id: "twentyEight", src: 'url('+ localize_vars.TheShoppesod_north_shopping_traveler + ')', noURL: localize_vars.TheShoppesod_north_shopping_traveler, type: "shopping", terminal: "north", foodOk: "yes", termOk: "yes"},
		{id: "twentyNine", src: 'url('+ localize_vars.TropicalNews_north_shopping_traveler + ')', noURL: localize_vars.TropicalNews_north_shopping_traveler, type: "shopping", terminal: "north", foodOk: "yes", termOk: "yes"},
		{id: "thirty", src: 'url('+ localize_vars.Xpresspa_north_shopping_traveler + ')', noURL: localize_vars.Xpresspa_north_shopping_traveler, type: "shopping", terminal: "north", foodOk: "yes", termOk: "yes"},
	//central terminal
		{id: "thirtyone", src: 'url('+ localize_vars.Affordableluxuries_central_shopping_traveler + ')', noURL: localize_vars.Affordableluxuries_central_shopping_traveler, type: "shopping", terminal: "central", foodOk: "yes", termOk: "yes"},
		{id: "thirtytwo", src: 'url('+ localize_vars.BaysideBrush_central_shopping_traveler + ')', noURL: localize_vars.BaysideBrush_central_shopping_traveler, type: "shopping", terminal: "central", foodOk: "yes", termOk: "yes"},
		{id: "thirtythree", src: 'url('+ localize_vars.BijouTerner_central_shopping_traveler + ')', noURL: localize_vars.BijouTerner_central_shopping_traveler, type: "shopping", terminal: "central", foodOk: "yes", termOk: "yes"},
		{id: "thirtyfour", src: 'url('+ localize_vars.Books4travel_central_shopping_traveler + ')', noURL: localize_vars.Books4travel_central_shopping_traveler, type: "shopping", terminal: "central", foodOk: "yes", termOk: "yes"},
		{id: "thirtyfive", src: 'url('+ localize_vars.Brookstone_central_shopping_traveler + ')', noURL: localize_vars.Brookstone_central_shopping_traveler, type: "shopping", terminal: "central", foodOk: "yes", termOk: "yes"},
		{id: "thirtysix", src: 'url('+ localize_vars.BurgerKing_central_dining_traveler + ')', noURL: localize_vars.BurgerKing_central_dining_traveler, type: "dining", terminal: "central", foodOk: "yes", termOk: "yes"},
		{id: "thirtyseven", src: 'url('+ localize_vars.Chilis_central_dining_traveler + ')', noURL: localize_vars.Chilis_central_dining_traveler, type: "dining", terminal: "central", foodOk: "yes", termOk: "yes"},
		{id: "thirtyeight", src: 'url('+ localize_vars.DunkinDunuts_central_dining_traveler + ')', noURL: localize_vars.DunkinDunuts_central_dining_traveler, type: "dining", terminal: "central", foodOk: "yes", termOk: "yes"},
		{id: "thirtynine", src: 'url('+ localize_vars.DutyFree_central_shopping_traveler + ')', noURL: localize_vars.DutyFree_central_shopping_traveler, type: "shopping", terminal: "central", foodOk: "yes", termOk: "yes"},
		{id: "forty", src: 'url('+ localize_vars.gnc_central_shopping_traveler + ')', noURL: localize_vars.gnc_central_shopping_traveler, type: "shopping", terminal: "central"},
		{id: "fortyOne", src: 'url('+ localize_vars.HavanaCollection_central_shopping_traveler + ')', noURL: localize_vars.HavanaCollection_central_shopping_traveler, type: "shopping", terminal: "central", foodOk: "yes", termOk: "yes"},
		{id: "fortyTwo", src: 'url('+ localize_vars.HudsoNews_central_shopping_traveler + ')', noURL: localize_vars.HudsoNews_central_shopping_traveler, type: "shopping", terminal: "central", foodOk: "yes", termOk: "yes"},
		{id: "fortyThree", src: 'url('+ localize_vars.Inmotion1_central_shopping_traveler + ')', noURL: localize_vars.Inmotion1_central_shopping_traveler, type: "shopping", terminal: "central", foodOk: "yes", termOk: "yes"},
		{id: "fortyFour", src: 'url('+ localize_vars.Inmotion2_central_shopping_traveler + ')', noURL: localize_vars.Inmotion2_central_shopping_traveler, type: "shopping", terminal: "central", foodOk: "yes", termOk: "yes"},
		{id: "fortyFive", src: 'url('+ localize_vars.LeatherandCo_central_shopping_traveler + ')', noURL: localize_vars.LeatherandCo_central_shopping_traveler, type: "shopping", terminal: "central", foodOk: "yes", termOk: "yes"},
		{id: "fortySix", src: 'url('+ localize_vars.Mercadomiami_central_shopping_traveler + ')', noURL: localize_vars.Mercadomiami_central_shopping_traveler, type: "shopping", terminal: "central", foodOk: "yes", termOk: "yes"},
		{id: "fortySeven", src: 'url('+ localize_vars.Mindworks_central_shopping_traveler + ')', noURL: localize_vars.Mindworks_central_shopping_traveler, type: "shopping", terminal: "central", foodOk: "yes", termOk: "yes"},
		{id: "fortyEight", src: 'url('+ localize_vars.Newslink_central_shopping_traveler + ')', noURL: localize_vars.Newslink_central_shopping_traveler, type: "shopping", terminal: "central", foodOk: "yes", termOk: "yes"},
		{id: "fortyNine", src: 'url('+ localize_vars.PizzaHut_central_dining_traveler + ')', noURL: localize_vars.PizzaHut_central_dining_traveler, type: "dining", terminal: "central", foodOk: "yes", termOk: "yes"},
		{id: "fifty", src: 'url('+ localize_vars.RonJon_central_shopping_traveler + ')', noURL: localize_vars.RonJon_central_shopping_traveler, type: "shopping", terminal: "central", foodOk: "yes", termOk: "yes"},
		{id: "fiftyOne", src: 'url('+ localize_vars.Sbarro_central_dining_traveler + ')', noURL: localize_vars.Sbarro_central_dining_traveler, type: "dining", terminal: "central", foodOk: "yes", termOk: "yes"},
		{id: "fiftyThree", src: 'url('+ localize_vars.Techonthego_central_shopping_traveler + ')', noURL: localize_vars.Techonthego_central_shopping_traveler, type: "shopping", terminal: "central", foodOk: "yes", termOk: "yes"},
		{id: "fiftyFour", src: 'url('+ localize_vars.time4shades_central_shopping_traveler + ')', noURL: localize_vars.time4shades_central_shopping_traveler, type: "shopping", terminal: "central", foodOk: "yes", termOk: "yes"},
		{id: "fiftySix", src: 'url('+ localize_vars.TravelBags_central_shopping_traveler + ')', noURL: localize_vars.TravelBags_central_shopping_traveler, type: "shopping", terminal: "central", foodOk: "yes", termOk: "yes"},
		{id: "fiftySeven", src: 'url('+ localize_vars.WorldWideCafe_central_dining_traveler + ')', noURL: localize_vars.WorldWideCafe_central_dining_traveler, type: "dining", terminal: "central", foodOk: "yes", termOk: "yes"},
		{id: "fiftyEight", src: 'url('+ localize_vars.WorldWideMarket_central_dining_traveler + ')', noURL: localize_vars.WorldWideMarket_central_dining_traveler, type: "dining", terminal: "central", foodOk: "yes", termOk: "yes"},
		
		//south terminal
		{id: "fiftyNine", src: 'url('+ localize_vars.Adixion_south_shopping_traveler + ')', noURL: localize_vars.Adixion_south_shopping_traveler, type: "shopping", terminal: "south", foodOk: "yes", termOk: "yes"},
		{id: "sixty", src: 'url('+ localize_vars.BijouxTerner_south_shopping_traveler + ')', noURL: localize_vars.BijouxTerner_south_shopping_traveler, type: "shopping", terminal: "south", foodOk: "yes", termOk: "yes"},
		{id: "sixtyOne", src: 'url('+ localize_vars.BriocheDoree_south_dining_traveler + ')', noURL: localize_vars.BriocheDoree_south_dining_traveler, type: "dining", terminal: "south", foodOk: "yes", termOk: "yes"},
		{id: "sixtyTwo", src: 'url('+ localize_vars.Brookstone_south_shopping_traveler + ')', noURL: localize_vars.Brookstone_south_shopping_traveler, type: "shopping", terminal: "south", foodOk: "yes", termOk: "yes"},
		{id: "sixtyThree", src: 'url('+ localize_vars.BudweiserBrewCo_south_dining_traveler + ')', noURL: localize_vars.BudweiserBrewCo_south_dining_traveler, type: "dining", terminal: "south", foodOk: "yes", termOk: "yes"},
		{id: "sixtyFour", src: 'url('+ localize_vars.Coach_south_shopping_traveler + ')', noURL: localize_vars.Coach_south_shopping_traveler, type: "shopping", terminal: "south", foodOk: "yes", termOk: "yes"},
		{id: "sixtyFive", src: 'url('+ localize_vars.Cubavera_south_shopping_traveler + ')', noURL: localize_vars.Cubavera_south_shopping_traveler, type: "shopping", terminal: "south", foodOk: "yes", termOk: "yes"},
		{id: "sixtySix", src: 'url('+ localize_vars.Desigual_south_shopping_traveler + ')', noURL: localize_vars.Desigual_south_shopping_traveler, type: "shopping", terminal: "south", foodOk: "yes", termOk: "yes"},
		{id: "sixtySeven", src: 'url('+ localize_vars.DutyFree_south_shopping_traveler + ')', noURL: localize_vars.DutyFree_south_shopping_traveler, type: "shopping", terminal: "south", foodOk: "yes", termOk: "yes"},
		{id: "sixtyEight", src: 'url('+ localize_vars.Famiglia_south_dining_traveler + ')', noURL: localize_vars.Famiglia_south_dining_traveler, type: "dining", terminal: "south"},
		{id: "sixtyNine", src: 'url('+ localize_vars.Gilberts_south_dining_traveler + ')', noURL: localize_vars.Gilberts_south_dining_traveler, type: "dining", terminal: "south", foodOk: "yes", termOk: "yes"},
		{id: "seventy", src: 'url('+ localize_vars.HudsonNews_south_shopping_traveler + ')', noURL: localize_vars.HudsonNews_south_shopping_traveler, type: "shopping", terminal: "south", foodOk: "yes", termOk: "yes"},
		{id: "seventyOne", src: 'url('+ localize_vars.HugoBoss_south_shopping_traveler + ')', noURL: localize_vars.HugoBoss_south_shopping_traveler, type: "shopping", terminal: "south", foodOk: "yes", termOk: "yes"},
		{id: "seventyTwo", src: 'url('+ localize_vars.Inmotion1_south_shopping_traveler + ')', noURL: localize_vars.Inmotion1_south_shopping_traveler, type: "shopping", terminal: "south", foodOk: "yes", termOk: "yes"},
		{id: "seventyThree", src: 'url('+ localize_vars.Inmotion2_south_shopping_traveler + ')', noURL: localize_vars.Inmotion2_south_shopping_traveler, type: "shopping", terminal: "south", foodOk: "yes", termOk: "yes"},
		{id: "seventyFour", src: 'url('+ localize_vars.JambaJuice_south_dining_traveler + ')', noURL: localize_vars.JambaJuice_south_dining_traveler, type: "dining", terminal: "south", foodOk: "yes", termOk: "yes"},
		{id: "seventyFive", src: 'url('+ localize_vars.LittleHavanaToGo_south_shopping_traveler + ')', noURL: localize_vars.LittleHavanaToGo_south_shopping_traveler, type: "shopping", terminal: "south", foodOk: "yes", termOk: "yes"},
		{id: "seventySix", src: 'url('+ localize_vars.MAC_south_shopping_traveler + ')', noURL: localize_vars.MAC_south_shopping_traveler, type: "shopping", terminal: "south", foodOk: "yes", termOk: "yes"},
		{id: "seventySeven", src: 'url('+ localize_vars.McDonals_south_dining_traveler + ')', noURL: localize_vars.McDonals_south_dining_traveler, type: "dining", terminal: "south", foodOk: "yes", termOk: "yes"},
		{id: "seventyEight", src: 'url('+ localize_vars.McDonals2_south_dining_traveler + ')', noURL: localize_vars.McDonals2_south_dining_traveler, type: "dining", terminal: "south", foodOk: "yes", termOk: "yes"},
		{id: "seventyNine", src: 'url('+ localize_vars.MiamiGiftToGo_south_shopping_traveler + ')', noURL: localize_vars.MiamiGiftToGo_south_shopping_traveler, type: "shopping", terminal: "south", foodOk: "yes", termOk: "yes"},
		{id: "eighty", src: 'url('+ localize_vars.MiamiNewsConnection_south_shopping_traveler + ')', noURL: localize_vars.MiamiNewsConnection_south_shopping_traveler, type: "shopping", terminal: "south", foodOk: "yes", termOk: "yes"},
		{id: "eightyOne", src: 'url('+ localize_vars.MiamiNewsNow_south_shopping_traveler + ')', noURL: localize_vars.MiamiNewsNow_south_shopping_traveler, type: "shopping", terminal: "south", foodOk: "yes", termOk: "yes"},
		{id: "eightyTwo", src: 'url('+ localize_vars.NewsExpress_south_shopping_traveler + ')', noURL: localize_vars.NewsExpress_south_shopping_traveler, type: "shopping", terminal: "south", foodOk: "yes", termOk: "yes"},
		{id: "eightyThree", src: 'url('+ localize_vars.Newslink_south_shopping_traveler + ')', noURL: localize_vars.Newslink_south_shopping_traveler, type: "shopping", terminal: "south", foodOk: "yes", termOk: "yes"},
		{id: "eightyFour", src: 'url('+ localize_vars.PizzaHut_south_dining_traveler + ')', noURL: localize_vars.PizzaHut_south_dining_traveler, type: "dining", terminal: "south", foodOk: "yes", termOk: "yes"},
		{id: "eightyFive", src: 'url('+ localize_vars.Quiznos_south_dining_traveler + ')', noURL: localize_vars.Quiznos_south_dining_traveler, type: "dining", terminal: "south", foodOk: "yes", termOk: "yes"},
		{id: "eightySix", src: 'url('+ localize_vars.SoundBalance_south_shopping_traveler + ')', noURL: localize_vars.SoundBalance_south_shopping_traveler, type: "shopping", terminal: "south", foodOk: "yes", termOk: "yes"},
		{id: "eightySeven", src: 'url('+ localize_vars.StellarNews_south_shopping_traveler + ')', noURL: localize_vars.StellarNews_south_shopping_traveler, type: "shopping", terminal: "south", foodOk: "yes", termOk: "yes"},
		{id: "eightyEight", src: 'url('+ localize_vars.SunglassIcon_south_shopping_traveler + ')', noURL: localize_vars.SunglassIcon_south_shopping_traveler, type: "shopping", terminal: "south", foodOk: "yes", termOk: "yes"},
		{id: "eightyNine", src: 'url('+ localize_vars.TheBeadFactory_south_shopping_traveler + ')', noURL: localize_vars.TheBeadFactory_south_shopping_traveler, type: "shopping", terminal: "south", foodOk: "yes", termOk: "yes"},
		{id: "ninety", src: 'url('+ localize_vars.Tous_south_shopping_traveler + ')', noURL: localize_vars.Tous_south_shopping_traveler, type: "shopping", terminal: "south", foodOk: "yes", termOk: "yes"},
		{id: "ninetyOne", src: 'url('+ localize_vars.Tumi_south_shopping_traveler + ')', noURL: localize_vars.Tumi_south_shopping_traveler, type: "shopping", terminal: "south", foodOk: "yes", termOk: "yes"}
		
	]
	
	//On page load, creates everything
	for (var i = 0; i<Objects.length; i++) {
			FormCreate(i);
		
		}
		
		
	//Initially creates everything
	function FormCreate(i) {
		var f = document.getElementById("theForm");
		var box = document.createElement("div");
		box.className = "CouponBox";
		
		box.style.backgroundImage = Objects[i].src;
		
		var L = document.createElement("label");
		L.id = Objects[i].id;
		
		//console.log(L);
		var c = document.createElement("input");
		c.type = "checkbox";
		
		f.appendChild(L);
		L.appendChild(c);
		
		L.appendChild(box);
		$("body").append(f);
	}
	
	
	console.log(Objects[0].id);
		
		
	//adds border depending
	$(".CouponBox").on( "click",  addBorder );
	function addBorder() {
		
		$(this).toggleClass("toggleBorder");
	}
	
	
	//popUp box on click 
	/*
	$(".CouponBox").on( "click",  popUp );
	function popUp() {
		$('#popUp').css("display", "block");
	}
	
	
	$('#popUp').on( "click",  popUpReaction );
	function popUpReaction() {
		$('#popUp').css("display", "none");
	}
	*/
	
	//Stuff that takes care of the check counter!
	var checkedTotal = 0;
	counterShower.innerHTML = checkedTotal;
	//counter for checks
	$("#theForm :checkbox").on( "click",  countChecked );
	
	function countChecked() {
		if (this.checked == true) {
			checkedTotal++;
			
		}
		
		else {
			checkedTotal--;
			
		}
		counterShower.innerHTML = checkedTotal;
	}
	
	
	
	
	
	
	//Prints Function
	$("#PrintSelected").on("click", PrintFunction);
	function PrintFunction() {
		
		//creates empty array of pictures
		var pictures = [];
		//goes through each object
		for (var i = 0; i<Objects.length; i++) {
			//gets id of Label element for each input
			var ElementNow = document.getElementById(Objects[i].id);
			//gets input value, whether it is checked or not
			var input =  ElementNow.getElementsByTagName('input')[0];
			
			
			if (input.checked == true) {
				//gets just the raw image url of that input. Can be found as a value in the Object
				var picURL = Objects[i].noURL;
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
				//push the Image string to the pictures array
				pictures.push(Image);
				
			}
			
			
		}
			
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
				for (var m = 0; m<pictures.length; m++) {
					
					printWindow.document.write(pictures[m] + " " + " ");
					
				}
				
				//Weird thing, but is necessary to correctly print the pictures
				printWindow.document.write('<scr' + 'ipt type="text/javascript">' + 'window.onload = function() { window.print();  };' + '</sc' + 'ript>');
				
				
				printWindow.document.close();
				printWindow.focus();
		
	}
	
	
	
	//adds filter drop down depending

	$("#CategoryButton").on( "click",  showDropdown );
	function showDropdown() {
	
		 $("#Cat-arrow-right").toggle();
		 
		 $("#Cat-arrow-down").toggleClass("arrow-inline-block");
		
		 
		document.getElementById("CatDropdown").classList.toggle("show");
	}

	$("#TerminalButton").on( "click",  showDropdownTwo );
	function showDropdownTwo() {
		 $("#Term-arrow-right").toggle();
		 
		 $("#Term-arrow-down").toggleClass("arrow-inline-block");
		
		document.getElementById("TermDropdown").classList.toggle("show");
	}
	

	
	//FILTER FUNCTION!
	$("#FilterForm :checkbox").on( "click",  filterFunction);
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
		for (var i = 0; i<Objects.length; i++) {
			
			
			var typeFlag = false;
			var terminalFlag = false;
			var elementNow = document.getElementById(Objects[i].id);
			
			//nested loop, goes through each checkedArray element, if both type and terminal
			//are found in checkedArray, then set those flags, typeFlag and terminalFlag, as true
			for (var y = 0; y < checkedArray.length; y++) {
			
				if (Objects[i].type == checkedArray[y]) {
					typeFlag = true;
				}
				
				if (Objects[i].terminal == checkedArray[y]) {
					terminalFlag = true;
				}
			}
			//If they're both true, than display
			if (typeFlag == true && terminalFlag == true) {
				if (elementNow.style.display == "none") {
							elementNow.style.display = "inline-block";
						}	
					}
			
				
			else  {
				FormDisappear(i);
				}
			
		}
	
	}
	
	
	
	
	//If only one of either is selected
	function OnlyOne(checkedArray, property) {
	
		
		for (var i = 0; i<Objects.length; i++) {
			var elementNow = document.getElementById(Objects[i].id);
			var Flag = false;
			for (var y = 0; y < checkedArray.length; y++) {
				
				if (Objects[i][property] == checkedArray[y]) {
					Flag = true
					
					
				}
				
			
			}
			
			if (Flag == true) {
				if (elementNow.style.display == "none") {
							elementNow.style.display = "inline-block";
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
		
		for (var x = 0; x < inputs.length; x++) {
			inputs[x].checked = false;
		}
		
		var cool = document.getElementById(Objects[0].id);
		cool.style.display = "inline-block";
		console.log(cool);
		
		for (var i = 0; i<Objects.length; i++) {
			var elementCheck = document.getElementById(Objects[i].id);
				
				if (elementCheck.style.display == "none") {
					elementCheck.style.display = "inline-block";
					
					
				}
				
			}
			
	}
	
	
	
	
	
	//Makes element disappear

	function FormDisappear(i) {
		
		var child = document.getElementById(Objects[i].id);
		//console.log(child);
		
		child.style.display = "none";
		
			
	}
	
	
	//Changes top bar on scroll
	var startchange = $('#printContainer');
	var offset = startchange.offset();
	 $(document).scroll(function() {  
		 scroll_start = $(this).scrollTop();
		 if(scroll_start > offset.top) {
			$("#top-bar").css('background-color', 'white');
		 }
		 
		 else {
          $('#top-bar').css('background-color', 'transparent');
       }
		 
	 });
	
	
	/*
	window.onclick = function(event) {
		
		if (!event.target.matches('.dropdown-content')) {
			var dropdowns = document.getElementsByClassName("dropdown-content");
			
			for (var i = 0; i < dropdowns.length; i++) {
				var openDropdown = dropdowns[i];
				if (openDropdown.classList.contains('show')) {
					
					openDropdown.classList.remove('show');
				}
			}
		}
	}
	*/	
			
			
			
			
			
			
			
			
	
	
	
	
	
	

	
	
	//end of jquery
		});
		
	//end of javascript 
	});

