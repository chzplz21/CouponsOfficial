
        //All coupon objects
        var couponObjects =  [
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
            {id: "fourteen", src: 'url('+ localize_vars.KFC_north_dining_traveler + ')', noURL: localize_vars.KFC_north_dining_traveler, type: "dining", terminal: "north", foodOk: "yes", termOk: "yes"},
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
    
        
    
  
    
    
    
    
    
    
    
    