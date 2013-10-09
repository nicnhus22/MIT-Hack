
<?php #xml version = "1.0" encoding = "utf-8" ?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN"
  "http://www.w3.org/TR/xhtml11/DTD/xhtml1-strict.dtd">
<html>
<head> <title> Test | Concordia University </title>
  <link rel="stylesheet" type="text/css" href="css/main.css"/>
  <link rel="stylesheet" type="text/css" href="css/key_frame.css"/>
  <link rel="stylesheet" type="text/css" href="css/cube.css"/>
  <link rel="stylesheet" type="text/css" href="css/weather.css"/>
  <script src="//connect.soundcloud.com/sdk.js"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/jquery/1.5.1/jquery.min.js"></script>
  <script>

  </script>
</head>
<body>
    <div id="global_container">
    	<div id="header">
    		<input type="text" name="word_search" id="search_bar" placeholder="Enter a word to find a related video..."></input>
    		<div id="title"></div>
    	</div>

    	<div id="inner_container">
    		<div onclick="rightPressed()" id="left_label"><img src="images/prev_arr.png" height="30" width="30"/><span id="left_name">Wunderground</span></div>
    		<div onclick="leftPressed()" id="right_label"><span id="right_name">SoundCloud</span><img src="images/next_arr.png" height="30" width="30"/></div>
    		<div id="cube_c">
	    		<section class="cube_container">
			    	<div id="cube">

				        <figure id="front" class="explode">
				        	<div  class="logo" id="logo_yt"><img src="images/yt.png" width="125" height="125" alt="Youtube"/></div>
				        </figure>

				        <figure id="back" class="explode">
				        	<div class="logo" id="logo_tw"><img src="images/twitter.png" width="125" height="125" alt="Twitter"/></div>

				        </figure>

				        <figure id="up" class="explode"></figure>

				        <figure id="down" class="explode"></figure>

				        <figure id="left" class="explode">
				        	<div class="logo" id="logo_w"><img src="images/wunder.png" width="125" height="75" alt="Wunderground"/></div>
				        	<div id="weather_layout">
				        		<div id="first_row">
				        			<div id="temp"></div>
					        		<div id="weather"></div>
				        		</div>
					        	
					        	<div id="location"></div>
					        	<div id="humidity"></div>
					        	<div id="wind"></div>
					        	<div id="date"></div>
					        </div>
				        </figure>

				        <figure id="right" class="explode">
				        	<div class="logo" id="logo_sc"><img src="images/sc.png" width="125" height="125" alt="SoundCloud"/></div>
				        	<div id="track0"></div>
							<div id="track1"></div>
							<div id="track2"></div>
				        </figure>
		    		</div>
				</section>
			</div>
    	</div>

    	<!-- <div id="footer">
    	</div> -->
    </div>
<script src="javas/javas.js"></script>
<script src="javas/ajax_req.js"></script>
</body>
</html>