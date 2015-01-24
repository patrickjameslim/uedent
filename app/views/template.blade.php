<!DOCTYPE html>
<!--[if lt IE 7]>      <html class="no-js lt-ie9 lt-ie8 lt-ie7"> <![endif]-->
<!--[if IE 7]>         <html class="no-js lt-ie9 lt-ie8"> <![endif]-->
<!--[if IE 8]>         <html class="no-js lt-ie9"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js"> <!--<![endif]-->
<head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>UE Dentistry System</title>
    <meta name="description" content="">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    
    <!-- 3rd party css libraries -->
    {{HTML::style('assets/css/vendor.css');}}

	
	<!-- your css -->
    {{HTML::style('assets/css/style.css');}}

</head>
<body>
    
	
	<section class="header">
		<!-- navigation and accoiunts + settings -->
		<div class="acc-desc-container">
			<div class="hold-pic">
				<img src="assets/images/userimage/no-image.jpg">
			</div>
			<div class="acc-desc">
				<h4>Patrick James G. Lim</h4>
				<h6>Administrator</h6>
			</div>
		</div>
		<div class="main-nav-container">
			<div class="main-nav">
				<ul>
					<li>home</li>
					<li>users</li>
					<li>patients</li>
					<li>cases</li>
				</ul>
			</div>
		</div>
		<div class="nav-settings-container">
			<div class="nav-settings">
				<ul>
					<li>search</li>
					<li>messages</li>
					<li>settings</li>
					<li>logout</li>
				</ul>
			</div>
		</div>
	</section>

	<section class="main-content">
		<div class="row">
			<!-- content here !! :)) -->
			@yield('content');
		</div>
	</section>

	<section class="footer">
		<!-- footer here !! :)) doesn't necessary but for copyright :)) -->
	</section>

	
	<!-- 3rd party js libraries -->
	{{HTML::script('assets/js/vendor.js')}}

	<!-- your css -->
	{{HTML::script('assets/js/scripts.js')}}

</body>
</html>
