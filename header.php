<!doctype html>

<html <?php language_attributes(); ?>>

<head>

	<!-- Global site tag (gtag.js) - Google Analytics -->
	<script async src="https://www.googletagmanager.com/gtag/js?id=UA-135887331-1"></script>
	<script>
		window.dataLayer = window.dataLayer || [];

		function gtag() {
			dataLayer.push(arguments);
		}
		gtag('js', new Date());

		gtag('config', 'UA-135887331-1');
	</script>

	<link rel="preconnect" href="https://fonts.gstatic.com">
	<link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap" rel="stylesheet">
	<meta name="viewport" content="width=device-width, initial-scale=1">

	<title><?php wp_title(' ') ?></title>

	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>

	<?php if (is_front_page()) : ?>
		<div class="loader"></div>
	<?php endif ?>

	<header class="header">
		<div class="header--wrap width--content">
			<div class="logo">
				<a class="logo--link" href="<?php echo get_site_url() ?>/">
					<h1 style="margin: 0">SAM SMYTH</h1>
				</a>
			</div>
			<div class="nav--container">
				<nav class="nav">

					<div class="nav--inner">
						<?php
						wp_nav_menu(array(
							'theme_location' => 'menu-1',
							'menu_id'        => 'primary-menu',
						));
						?>
					</div>
				</nav>
			</div>
		</div>


		<span class="burger">
			<i class="burger--condiment burger--condiment-top"></i>
			<i class="burger--condiment"></i>
			<i class="burger--condiment burger--condiment-bottom"></i>

			<i class="burger--close-top"></i>
			<i class="burger--close-bottom"></i>
		</span>

	</header>