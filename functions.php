<?php
add_action( 'wp_enqueue_scripts', 'enqueue_child_theme_styles', PHP_INT_MAX);

function enqueue_child_theme_styles() {
  wp_enqueue_style( 'parent-style', get_template_directory_uri().'/style.css' );
}

$defaults = array(
	'default-color'          => '',
	'default-image'          => '',
	'default-repeat'         => '',
	'default-position-x'     => '',
	'default-attachment'     => '',
	'wp-head-callback'       => '_custom_background_cb',
	'admin-head-callback'    => '',
	'admin-preview-callback' => ''
);
add_theme_support( 'custom-background', $defaults );


add_action('wp_enqueue_scripts', 'child_scripts');

function child_scripts() {
	//wp_enqueue_script('MyScripts', get_stylesheet_directory_uri() . '/scripts/scripts.js',  array('jquery'), null, true);
	wp_enqueue_script('App', get_stylesheet_directory_uri() . '/scripts/app.js',  array('jquery'), null, true);
	wp_enqueue_script('domCreator', get_stylesheet_directory_uri() . '/scripts/domCreator.js',  array('jquery'), null, true);
	wp_enqueue_script('createCoupons', get_stylesheet_directory_uri() . '/scripts/createCoupons.js',  array('jquery'), null, true);
	
	
	
	  wp_localize_script( 
        'createCoupons', 
        'localize_vars', 
        array( 
            'url' => get_stylesheet_directory_uri(),
            'path' => get_stylesheet_directory(),
			//North Terminal
			'Airessentials_north_shopping_traveler' => get_stylesheet_directory_uri() . '/images/NorthTerminal/Airessentials_north_shopping_traveler.jpg',
			'BacardiMojito_north_dining_traveler' => get_stylesheet_directory_uri() . '/images/NorthTerminal/BacardiMojito_north_dining_traveler.jpg',
			'BijouxTerner_north_shopping_traveler' => get_stylesheet_directory_uri() . '/images/NorthTerminal/BijouxTerner_north_shopping_traveler.jpg',
			'BooklinkCafe_north_shopping_traveler' => get_stylesheet_directory_uri() . '/images/NorthTerminal/BooklinkCafe_north_shopping_traveler.jpg',
			'Brito_north_shopping_traveler' => get_stylesheet_directory_uri() . '/images/NorthTerminal/Brito_north_shopping_traveler.jpg',
			'CalvinKlein_north_shopping_traveler' => get_stylesheet_directory_uri() . '/images/NorthTerminal/CalvinKlein_north_shopping_traveler.jpg',
			'DutyFree_north_shopping_traveler' => get_stylesheet_directory_uri() . '/images/NorthTerminal/DutyFree_north_shopping_traveler.jpg',
			'EstefanKitchen_north_dining_traveler' => get_stylesheet_directory_uri() . '/images/NorthTerminal/EstefanKitchen_north_dining_traveler.jpg',
			'Fridays_north_dining_traveler' => get_stylesheet_directory_uri() . '/images/NorthTerminal/Fridays_north_dining_traveler.jpg',
			'HudsonNews_north_shopping_traveler' => get_stylesheet_directory_uri() . '/images/NorthTerminal/HudsonNews_north_shopping_traveler.jpg',
			'Inmotion1_north_shopping_traveler' => get_stylesheet_directory_uri() . '/images/NorthTerminal/Inmotion1_north_shopping_traveler.jpg',
			'JuanValdez_north_dining_traveler' => get_stylesheet_directory_uri() . '/images/NorthTerminal/JuanValdez_north_dining_traveler.jpg',
			'KFC_north_dining_traveler' => get_stylesheet_directory_uri() . '/images/NorthTerminal/KFC_north_dining_traveler.jpg',
			'MiamiGifttoGo_north_shopping_traveler' => get_stylesheet_directory_uri() . '/images/NorthTerminal/MiamiGifttoGo_north_shopping_traveler.jpg',
			'MiamiNewsNow_north_shopping_traveler' => get_stylesheet_directory_uri() . '/images/NorthTerminal/MiamiNewsNow_north_shopping_traveler.jpg',
			'Newslink_north_shopping_traveler' => get_stylesheet_directory_uri() . '/images/NorthTerminal/Newslink_north_shopping_traveler.jpg',
			'NewslinkExplorer_north_shopping_traveler' => get_stylesheet_directory_uri() . '/images/NorthTerminal/NewslinkExplorer_north_shopping_traveler.jpg',
			'Penguin_north_shopping_traveler' => get_stylesheet_directory_uri() . '/images/NorthTerminal/Penguin_north_shopping_traveler.jpg',
			'PizzaHut1_north_dining_traveler' => get_stylesheet_directory_uri() . '/images/NorthTerminal/PizzaHut1_north_dining_traveler.jpg',
			'PizzaHut2_north_dining_traveler' => get_stylesheet_directory_uri() . '/images/NorthTerminal/PizzaHut2_north_dining_traveler.jpg',
			'SoundBalance_north_shopping_traveler' => get_stylesheet_directory_uri() . '/images/NorthTerminal/SoundBalance_north_shopping_traveler.jpg',
			'SweetIndulgencies_north_shopping_traveler' => get_stylesheet_directory_uri() . '/images/NorthTerminal/SweetIndulgencies_north_shopping_traveler.jpg',
			'TacoBell_north_dining_traveler' => get_stylesheet_directory_uri() . '/images/NorthTerminal/TacoBell_north_dining_traveler.jpg',
			'TechOnTheGo_north_shopping_traveler' => get_stylesheet_directory_uri() . '/images/NorthTerminal/TechOnTheGo_north_shopping_traveler.jpg',
			'TheMiamiHeat_north_shopping_traveler' => get_stylesheet_directory_uri() . '/images/NorthTerminal/TheMiamiHeat_north_shopping_traveler.jpg',
			'TheShoppesod_north_shopping_traveler' => get_stylesheet_directory_uri() . '/images/NorthTerminal/TheShoppesod_north_shopping_traveler.jpg',
			'TropicalNews_north_shopping_traveler' => get_stylesheet_directory_uri() . '/images/NorthTerminal/TropicalNews_north_shopping_traveler.jpg',
			'Xpresspa_north_shopping_traveler' => get_stylesheet_directory_uri() . '/images/NorthTerminal/Xpresspa_north_shopping_traveler.jpg',
			
			//Central Terminal
			'Affordableluxuries_central_shopping_traveler' => get_stylesheet_directory_uri() . '/images/CentralTerminal/Affordableluxuries_central_shopping_traveler.jpg',
			'BaysideBrush_central_shopping_traveler' => get_stylesheet_directory_uri() . '/images/CentralTerminal/BaysideBrush_central_shopping_traveler.jpg',
			'BijouTerner_central_shopping_traveler' => get_stylesheet_directory_uri() . '/images/CentralTerminal/BijouTerner_central_shopping_traveler.jpg',
			'Books4travel_central_shopping_traveler' => get_stylesheet_directory_uri() . '/images/CentralTerminal/Books4travel_central_shopping_traveler.jpg',
			'Brookstone_central_shopping_traveler' => get_stylesheet_directory_uri() . '/images/CentralTerminal/Brookstone_central_shopping_traveler.jpg',
			'BurgerKing_central_dining_traveler' => get_stylesheet_directory_uri() . '/images/CentralTerminal/BurgerKing_central_dining_traveler.jpg',
			'Chilis_central_dining_traveler' => get_stylesheet_directory_uri() . '/images/CentralTerminal/Chilis_central_dining_traveler.jpg',
			'DunkinDunuts_central_dining_traveler' => get_stylesheet_directory_uri() . '/images/CentralTerminal/DunkinDunuts_central_dining_traveler.jpg',
			'DutyFree_central_shopping_traveler' => get_stylesheet_directory_uri() . '/images/CentralTerminal/DutyFree_central_shopping_traveler.jpg',
			'gnc_central_shopping_traveler' => get_stylesheet_directory_uri() . '/images/CentralTerminal/gnc_central_shopping_traveler.jpg',
			'HavanaCollection_central_shopping_traveler' => get_stylesheet_directory_uri() . '/images/CentralTerminal/HavanaCollection_central_shopping_traveler.jpg',
			'HudsoNews_central_shopping_traveler' => get_stylesheet_directory_uri() . '/images/CentralTerminal/HudsoNews_central_shopping_traveler.jpg',
			'Inmotion1_central_shopping_traveler' => get_stylesheet_directory_uri() . '/images/CentralTerminal/Inmotion1_central_shopping_traveler.jpg',
			'Inmotion2_central_shopping_traveler' => get_stylesheet_directory_uri() . '/images/CentralTerminal/Inmotion2_central_shopping_traveler.jpg',
			'LeatherandCo_central_shopping_traveler' => get_stylesheet_directory_uri() . '/images/CentralTerminal/LeatherandCo_central_shopping_traveler.jpg',
			'Mercadomiami_central_shopping_traveler' => get_stylesheet_directory_uri() . '/images/CentralTerminal/Mercadomiami_central_shopping_traveler.jpg',
			'Mindworks_central_shopping_traveler' => get_stylesheet_directory_uri() . '/images/CentralTerminal/Mindworks_central_shopping_traveler.jpg',
			'Newslink_central_shopping_traveler' => get_stylesheet_directory_uri() . '/images/CentralTerminal/Newslink_central_shopping_traveler.jpg',
			'PizzaHut_central_dining_traveler' => get_stylesheet_directory_uri() . '/images/CentralTerminal/PizzaHut_central_dining_traveler.jpg',
			'RonJon_central_shopping_traveler' => get_stylesheet_directory_uri() . '/images/CentralTerminal/RonJon_central_shopping_traveler.jpg',
			'Sbarro_central_dining_traveler' => get_stylesheet_directory_uri() . '/images/CentralTerminal/Sbarro_central_dining_traveler.jpg',
			'Techonthego_central_shopping_traveler' => get_stylesheet_directory_uri() . '/images/CentralTerminal/Techonthego_central_shopping_traveler.jpg',
			'time4shades_central_shopping_traveler' => get_stylesheet_directory_uri() . '/images/CentralTerminal/time4shades_central_shopping_traveler.jpg',
			'TravelBags_central_shopping_traveler' => get_stylesheet_directory_uri() . '/images/CentralTerminal/TravelBags_central_shopping_traveler.jpg',
			'WorldWideCafe_central_dining_traveler' => get_stylesheet_directory_uri() . '/images/CentralTerminal/WorldWideCafe_central_dining_traveler.jpg',
			'WorldWideMarket_central_dining_traveler' => get_stylesheet_directory_uri() . '/images/CentralTerminal/WorldWideMarket_central_dining_traveler.jpg',
			
			//South Terminal
			'Adixion_south_shopping_traveler' => get_stylesheet_directory_uri() . '/images/SouthTerminal/Adixion_south_shopping_traveler.jpg',
			'BijouxTerner_south_shopping_traveler' => get_stylesheet_directory_uri() . '/images/SouthTerminal/BijouxTerner_south_shopping_traveler.jpg',
			'BriocheDoree_south_dining_traveler' => get_stylesheet_directory_uri() . '/images/SouthTerminal/BriocheDoree_south_dining_traveler.jpg',
			'Brookstone_south_shopping_traveler' => get_stylesheet_directory_uri() . '/images/SouthTerminal/Brookstone_south_shopping_traveler.jpg',
			'BudweiserBrewCo_south_dining_traveler' => get_stylesheet_directory_uri() . '/images/SouthTerminal/BudweiserBrewCo_south_dining_traveler.jpg',
			'Coach_south_shopping_traveler' => get_stylesheet_directory_uri() . '/images/SouthTerminal/Coach_south_shopping_traveler.jpg',
			'Cubavera_south_shopping_traveler' => get_stylesheet_directory_uri() . '/images/SouthTerminal/Cubavera_south_shopping_traveler.jpg',
			'Desigual_south_shopping_traveler' => get_stylesheet_directory_uri() . '/images/SouthTerminal/Desigual_south_shopping_traveler.jpg',
			'DutyFree_south_shopping_traveler' => get_stylesheet_directory_uri() . '/images/SouthTerminal/DutyFree_south_shopping_traveler.jpg',
			'Famiglia_south_dining_traveler' => get_stylesheet_directory_uri() . '/images/SouthTerminal/Famiglia_south_dining_traveler.jpg',
			'Gilberts_south_dining_traveler' => get_stylesheet_directory_uri() . '/images/SouthTerminal/Gilberts_south_dining_traveler.jpg',
			'HudsonNews_south_shopping_traveler' => get_stylesheet_directory_uri() . '/images/SouthTerminal/HudsonNews_south_shopping_traveler.jpg',
			'HugoBoss_south_shopping_traveler' => get_stylesheet_directory_uri() . '/images/SouthTerminal/HugoBoss_south_shopping_traveler.jpg',
			'Inmotion1_south_shopping_traveler' => get_stylesheet_directory_uri() . '/images/SouthTerminal/Inmotion1_south_shopping_traveler.jpg',
			'Inmotion2_south_shopping_traveler' => get_stylesheet_directory_uri() . '/images/SouthTerminal/Inmotion2_south_shopping_traveler.jpg',
			'JambaJuice_south_dining_traveler' => get_stylesheet_directory_uri() . '/images/SouthTerminal/JambaJuice_south_dining_traveler.jpg',
			'LittleHavanaToGo_south_shopping_traveler' => get_stylesheet_directory_uri() . '/images/SouthTerminal/LittleHavanaToGo_south_shopping_traveler.jpg',
			'MAC_south_shopping_traveler' => get_stylesheet_directory_uri() . '/images/SouthTerminal/MAC_south_shopping_traveler.jpg',
			'McDonals_south_dining_traveler' => get_stylesheet_directory_uri() . '/images/SouthTerminal/McDonals_south_dining_traveler.jpg',
			'McDonals2_south_dining_traveler' => get_stylesheet_directory_uri() . '/images/SouthTerminal/McDonals2_south_dining_traveler.jpg',
			'MiamiGiftToGo_south_shopping_traveler' => get_stylesheet_directory_uri() . '/images/SouthTerminal/MiamiGiftToGo_south_shopping_traveler.jpg',
			'MiamiNewsConnection_south_shopping_traveler' => get_stylesheet_directory_uri() . '/images/SouthTerminal/MiamiNewsConnection_south_shopping_traveler.jpg',
			'MiamiNewsNow_south_shopping_traveler' => get_stylesheet_directory_uri() . '/images/SouthTerminal/MiamiNewsNow_south_shopping_traveler.jpg',
			'NewsExpress_south_shopping_traveler' => get_stylesheet_directory_uri() . '/images/SouthTerminal/NewsExpress_south_shopping_traveler.jpg',
			'Newslink_south_shopping_traveler' => get_stylesheet_directory_uri() . '/images/SouthTerminal/Newslink_south_shopping_traveler.jpg',
			'PizzaHut_south_dining_traveler' => get_stylesheet_directory_uri() . '/images/SouthTerminal/PizzaHut_south_dining_traveler.jpg',
			'Quiznos_south_dining_traveler' => get_stylesheet_directory_uri() . '/images/SouthTerminal/Quiznos_south_dining_traveler.jpg',
			'SoundBalance_south_shopping_traveler' => get_stylesheet_directory_uri() . '/images/SouthTerminal/SoundBalance_south_shopping_traveler.jpg',
			'StellarNews_south_shopping_traveler' => get_stylesheet_directory_uri() . '/images/SouthTerminal/StellarNews_south_shopping_traveler.jpg',
			'SunglassIcon_south_shopping_traveler' => get_stylesheet_directory_uri() . '/images/SouthTerminal/SunglassIcon_south_shopping_traveler.jpg',
			'TheBeadFactory_south_shopping_traveler' => get_stylesheet_directory_uri() . '/images/SouthTerminal/TheBeadFactory_south_shopping_traveler.jpg',
			'Tous_south_shopping_traveler' => get_stylesheet_directory_uri() . '/images/SouthTerminal/Tous_south_shopping_traveler.jpg',
			'Tumi_south_shopping_traveler' => get_stylesheet_directory_uri() . '/images/SouthTerminal/Tumi_south_shopping_traveler.jpg',
			
			
            
			
		) 
    );
	
}



?>