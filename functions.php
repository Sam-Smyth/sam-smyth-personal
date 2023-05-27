<?php
function theme_scripts()
{
  wp_enqueue_script('jquery', true);

  // CSS

  if (in_array($_SERVER['REMOTE_ADDR'], array('127.0.0.1', '::1'))) {
    wp_enqueue_style('theme-style', get_template_directory_uri() . '/scss/style.css');
  } else {
    wp_enqueue_style('theme-style', get_template_directory_uri() . '/scss/style.min.css');
  }

  // GSAP

  wp_enqueue_script('gsap-js', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/gsap.min.js', array(), false, true);
  wp_enqueue_script('gsap-js2', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/ScrollTrigger.min.js', array(), false, true);
  wp_enqueue_script('gsap-js3', 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.11.4/Flip.min.js', array(), false, true);

  // JS

  wp_enqueue_script('theme-script', get_template_directory_uri() . '/js/script.min.js', array(), '', true);
}

add_action('wp_enqueue_scripts', 'theme_scripts');


// Add new menu
function wpb_custom_new_menu()
{
  register_nav_menu('menu-1', __('Main Menu'));
}

add_action('init', 'wpb_custom_new_menu');



/**
 * Disable the emoji's
 */
function disable_emojis()
{
  remove_action('wp_head', 'print_emoji_detection_script', 7);
  remove_action('admin_print_scripts', 'print_emoji_detection_script');
  remove_action('wp_print_styles', 'print_emoji_styles');
  remove_action('admin_print_styles', 'print_emoji_styles');
  remove_filter('the_content_feed', 'wp_staticize_emoji');
  remove_filter('comment_text_rss', 'wp_staticize_emoji');
  remove_filter('wp_mail', 'wp_staticize_emoji_for_email');
  add_filter('tiny_mce_plugins', 'disable_emojis_tinymce');
}
add_action('init', 'disable_emojis');

/**
 * Filter function used to remove the tinymce emoji plugin.
 * 
 * @param    array  $plugins  
 * @return   array             Difference betwen the two arrays
 */
function disable_emojis_tinymce($plugins)
{
  if (is_array($plugins)) {
    return array_diff($plugins, array('wpemoji'));
  } else {
    return array();
  }
}

// Remove WP favicon

add_filter('get_site_icon_url', '__return_false');
