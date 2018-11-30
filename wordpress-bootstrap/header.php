<!doctype html>  

<!--[if IEMobile 7 ]> <html <?php language_attributes(); ?>class="no-js iem7"> <![endif]-->
<!--[if lt IE 7 ]> <html <?php language_attributes(); ?> class="no-js ie6"> <![endif]-->
<!--[if IE 7 ]>    <html <?php language_attributes(); ?> class="no-js ie7"> <![endif]-->
<!--[if IE 8 ]>    <html <?php language_attributes(); ?> class="no-js ie8"> <![endif]-->
<!--[if (gte IE 9)|(gt IEMobile 7)|!(IEMobile)|!(IE)]><!--><html <?php language_attributes(); ?> class="no-js"><!--<![endif]-->
	
	<head>
		<meta charset="utf-8">
		<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">
		<title><?php wp_title( '|', true, 'right' ); ?></title>	
		<meta name="viewport" content="width=device-width, initial-scale=1.0">
		
  		<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>">
		
		<!-- wordpress head functions -->
		<?php wp_head(); ?>
		<!-- end of wordpress head -->
		<!-- IE8 fallback moved below head to work properly. Added respond as well. Tested to work. -->
			<!-- media-queries.js (fallback) -->
		<!--[if lt IE 9]>
			<script src="http://css3-mediaqueries-js.googlecode.com/svn/trunk/css3-mediaqueries.js"></script>			
		<![endif]-->

		<!-- html5.js -->
		<!--[if lt IE 9]>
			<script src="http://html5shim.googlecode.com/svn/trunk/html5.js"></script>
		<![endif]-->	
		
			<!-- respond.js -->
		<!--[if lt IE 9]>
		          <script type='text/javascript' src="http://cdnjs.cloudflare.com/ajax/libs/respond.js/1.4.2/respond.js"></script>
		<![endif]-->	
	</head>
	
	<body <?php body_class(); ?>>
				
		<header role="banner">
			
			<div class="navbar navbar-default navbar-fixed-top">
				<div class="container">
						
					<div class="navbar-header">
						<button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-responsive-collapse">
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
							<span class="icon-bar"></span>
						</button>
						
						<a class="navbar-brand" title="<?php echo get_bloginfo('description'); ?>" href="<?php echo home_url(); ?>"><?php bloginfo('name'); ?></a>
					</div>
					
					<div class="collapse navbar-collapse navbar-responsive-collapse">
						<?php wp_bootstrap_main_nav(); // Adjust using Menus in Wordpress Admin ?>

						<?php //if(of_get_option('search_bar', '1')) {?>
						<form class="navbar-form navbar-right" role="search" method="get" id="searchform" action="<?php echo home_url( '/' ); ?>">
							<div class="form-group">
								<input name="s" id="s" type="text" class="search-query form-control" autocomplete="off" placeholder="<?php _e('Search','wpbootstrap'); ?>">
							</div>
						</form>
						<?php //} ?>
					</div>

				</div> <!-- end .container -->
			</div> <!-- end .navbar -->
			
		</header> <!-- end header -->
		
		<div id = "top-bar">
			
			<div id = "printContainer">
				<div id = "MyCoupons">
					My Coupons	
				</div>
				
				<!--my coupons print box with counter -->
				
				<span id = "scissors"> &#x2701;</span	>
			
				<div id = "PrintSelected" target="_blank"> 
					<div id = "counterShower">
					</div>
				</div>
			</div>
			
		
			<div id = "RibbonBox"></div>
			</div>
		
		<div class = "sliderContainer">	
			<?php echo do_shortcode('[rev_slider alias="home"]'); ?>
			<!--<img src="<?php echo get_stylesheet_directory_uri(); ?>/Images/SantaSlide1.jpg"/> -->
			
		</div>
		<!--
		<div id = "BelowJumbotron"></div>
		-->
		
		<div class="container-fluid">
		
		<div id = "BelowJumbotron">
			<div id = "SaveBig" style = "font-size: 30px">Save Big during your holidays with these exclusive coupons.</div>
		
			<div id = "JustClick" style = "font-size: 20px">Just click to save on device or print. Present coupon at checkout.</div>
			
			<div id = "Expires" style = "font-size: 12px; margin-top: 0;">Coupons expire on 12/24/17 • Special Discounts only available at Miami Int'l Airport</div>
			
			<div id = "goldStripe">Use Category and Terminal menus to filter your search</div>
			
		</div>	
		
			
			  
				
			
		
			<form id = "FilterForm">
			
		
				
				<div class="filterButton" id = "CategoryButton" data-toggle="collapse" data-target="#CatDropdown">
					<div class = "arrow-right" id = "Cat-arrow-right"></div>
					<div class = "arrow-down" id = "Cat-arrow-down"></div>
					<div class = "toggleText">
						CATEGORY
					</div>
				</div>
				
				<div id = "CatDropdown" class="collapse cat-dropdown-content">
						<div class = "labelsContainer">
							<label for = "dining">
								<input type = "checkbox" id = "dining" class = "inputs">
								Dining
							</label>
							
							<label for = "shopping">
								<input type = "checkbox" id = "shopping" class = "inputs">
								Shopping
							</label>	
							
						</div>
				
				<!--
					<li>
						<input type = "checkbox" id = "dining" class = "inputs"></input>
						<label for = "dining">
								Dining
						</label>
					</li>
					<li>
						<input type = "checkbox" id = "shopping" class = "inputs"></input>
						<label for = "dining">
								Shopping
						</label>
					</li>
				-->					
				</div>
				
				
					
			
				
				
				
				<div class="filterButton" id = "TerminalButton" data-toggle="collapse" data-target="#TermDropdown">
					<div class = "arrow-right" id = "Term-arrow-right"></div>
					<div class = "arrow-down" id = "Term-arrow-down"></div>
					<div class = "toggleText">
						TERMINAL
					</div>
				</div>
				
					<div id = "TermDropdown" class="collapse term-dropdown-content">
						<div class = "labelsContainer">
							<label for = "north" style = "color: #3A5FA3">
								<input type = "checkbox" id = "north" class = "inputs">
								North
							</label>
							
							<label for = "central" style = "color: #E7C104">
								<input type = "checkbox" id = "central" class = "inputs">
								Central
							</label>
							
							<label for = "south" style = "color: #CD2024">
								<input type = "checkbox" id = "south" class = "inputs">
								South
							</label>
							
						</div>
			
						
		
					
					<!--
						<li>
							<input type = "checkbox" id = "north" class = "inputs"></input>
							<label for = "north" style = "color: #3A5FA3">
									North
							</label>
						</li>
						<li>
							<input type = "checkbox" id = "central" class = "inputs"></input>
							<label for = "Central" style = "color: #E7C104">
									Central
							</label>
						</li>
						<li>
							<input type = "checkbox" id = "south" class = "inputs"></input>
							<label for = "South" style = "color: #CD2024">
									South
							</label>
						</li>
						-->
					</div>
					</form>
					
						
				</div>
				
				
			 
		
				
				<!--
					
					-->
					
				
				
				<!--
				<div class = "filterButton">
					TERMINAL
					 <div id = "myDropdown" class="dropdown-content">
						<div class = "inputContainer" style="color:#486FB4"><input type = "checkbox" id = "north" class = "inputs"><p class = "word">North</p></input></div>
						<div class = "inputContainer" style="color:#E7C103"><input type = "checkbox" id = "central" class = "inputs"><p class = "word">Central</p></input></div>
						<div class = "inputContainer" style="color:#CD2024"><input type = "checkbox" id = "south" class = "inputs"><p class = "word">South</p></input></div>
						
					</div>
				</div>
				-->
			
	
		
		<form id = "theForm">
			
		</form>
		
		
		
		