<?php

/**
 *  Template Name: Contact
 */

get_header();
?>

<div class="width--inner spacing--largest">
	<h2 class="text-align--centre">404</h2>
	<p class="spacing--medium">
		This page does not exisit! Please click the link below to return to the home page or use the navigation at the top of the page to go to another page.
	</p>

	<div class="text-align--centre spacing--large">
		<a href="<?php echo get_site_url() ?>/" class="button button--alt">Back Home</a>
	</div>
</div>

<?php get_footer();
