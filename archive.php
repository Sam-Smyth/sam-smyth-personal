<?php get_header(); ?>



<?php if (have_posts()) : ?>

  <header class="page-header alignwide">
    <h1 class="page-title"><?php the_archive_title(); ?></h1>
  </header><!-- .page-header -->

  <?php while (have_posts()) : ?>
    <?php the_post(); ?>


    <article id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
      <header class="entry-header">
        <?php if (is_singular()) : ?>
          <?php the_title('<h1 class="entry-title default-max-width">', '</h1>'); ?>
        <?php else : ?>
          <?php the_title(sprintf('<h2 class="entry-title default-max-width"><a href="%s">', esc_url(get_permalink())), '</a></h2>'); ?>
        <?php endif; ?>

      </header><!-- .entry-header -->


      <footer class="entry-footer default-max-width">
        <p>Footer</p>
      </footer><!-- .entry-footer -->
    </article><!-- #post-<?php the_ID(); ?> -->



  <?php endwhile; ?>

<?php endif; ?>

<?php get_footer(); ?>