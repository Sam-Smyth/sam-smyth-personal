<?php

/**
 * Template Name: Home
 */

get_header();
?>

<div class="hero">

  <div class="hero--content width--content">

    <div class="text-block">
      <h2>Marketer, Web Designer and Project Manager</h2>

      <p>I specialize in creating, facilitating and optimizing marketing solutions. Marketing strategy, project management, copywriting, web design and digital marketing are what I do best.</p>

      <a href="" class="button button--alt home--button">
        Find out more
      </a>
    </div>

    <div class="hero--image">
      <?php
      $img_src = wp_get_attachment_image_url(8, "large");
      ?>

      <img width="400" height="565" src="<?php echo esc_url($img_src); ?>" alt="Sam Smyth portrait">
    </div>

  </div>

</div>

<div class="skills width--content spacing--largest">

  <div id="skills" class="scroll-anchor"></div>

  <div class="skills--bars">

    <div class="skills--bar-wrap">
      <h3>Project Management</h3>

      <div class="skills--bar">
        <div class="skills--bar-fill project-management"></div>
      </div>
    </div>

    <div class="skills--bar-wrap">
      <h3>Marketing Strategy</h3>

      <div class="skills--bar">
        <div class="skills--bar-fill marketing-strategy"></div>
      </div>
    </div>

    <div class="skills--bar-wrap">
      <h3>Web Design</h3>

      <div class="skills--bar">
        <div class="skills--bar-fill web"></div>
      </div>
    </div>

    <div class="skills--bar-wrap">
      <h3>Copywriting</h3>

      <div class="skills--bar">
        <div class="skills--bar-fill copywriting"></div>
      </div>
    </div>

  </div>

  <div class="text-block">
    <h2>Skills and interests</h2>

    <p>I love making things work better and I love asking questions. "Why are we doing this?" "Who are we speaking to?" "Are we reaching our goals?" "How can we do this faster and more effectively?" Optimizing processes while creating some killer content is what drives my interest.</p>
  </div>

</div>

<div class="projects width--content spacing--largest">

  <div id="portfolio" class="scroll-anchor"></div>

  <div class="text-block">
    <h2>Portfolio</h2>

    <p>Below are some of my latest projects. I love to create web projects that are both visually stunning and convey your company or organization's strengths in the best way possible.</p>
  </div>

  <div class="project-cards">
    <div class="projects-card first-project">

      <div class="projects-card-content">
        <h3>Eric Brunt Media</h3>

        <h4 class="curtain-text">Development, Design, Project Management</h4>

        <p class="curtain-text">Eric Brunt is a Canadian filmmaker and storyteller who is telling the stories of Canada's last remaining WWII veterans.</p>

        <p class="project-text-addition">Although Eric is a filmmaker at heart, the stories are what drive his projects. He was running into a problem where he didn't have enough promotion materials in between films.</p>

        <p class="project-text-addition">I created a plan to move Eric into the more general content creation space, allowing him to put out more regular content. The new website features Eric's stories in a way that is both engaging and easy to navigate.</p>

        <div class="project-btn">
          <div>
            <button class="button">View Project</button>
          </div>

          <div>
            <a class="button website-link" href="https://ericbruntmedia.com" target="_blank">Visit Website</a>
          </div>

        </div>
      </div>

      <div class="projects-card-video"></div>

      <div class="project-colour-block"></div>

      <img loading="lazy" src="<?php get_site_url() ?>wp-content/uploads/2022/05/Eric-Brunt-Media-website-image.jpg" alt="Eric Brunt Media website image with WWII veterans holding up their portraits">

    </div>

    <div class="projects-card second-project">

      <div class="projects-card-content">
        <h3>Staerk Hair</h3>

        <h4 class="curtain-text">Development</h4>

        <p class="curtain-text">Staerk Hair is a Victoria, BC-based salon specializing in bespoke colour and hair services.</p>

        <p class="project-text-addition">I developed the website to show off Staerk's tantalizing hair creations by using a series of animations, sliding galleries and a custom, animating consultation request form. The website reflects the feel you get from a Staerk hair treatment; creative, bold and one of a kind.</p>


        <div class="project-btn">
          <div>
            <button class="button">View Project</button>
          </div>

          <div>
            <a class="button website-link" href="https://staerkhair.com" target="_blank">Visit Website</a>
          </div>

        </div>
      </div>

      <div class="projects-card-video"></div>

      <div class="project-colour-block"></div>

      <img loading="lazy" src="<?php get_site_url() ?>wp-content/uploads/2022/05/Staerk-Hair.jpg" alt="Staerk Hair website image showing woman with coloured hair">

    </div>
  </div>

</div>

<div class="experience width--content spacing--largest">

  <div id="experience" class="scroll-anchor"></div>

  <div class="text-block">
    <h2>Experience</h2>
  </div>

  <div class="experience--block">

    <div>
      <h4>Freelance</h4>

      <h3>Web design, Marketing</h3>
    </div>

    <div class="experience--connector-wrap">
      <div class="experience--connector">
      </div>
    </div>

    <div>
      <p>September 2020 - Present</p>
    </div>

  </div>

  <div class="experience--description">
    <p class="experience--description-body">I create web experiences that play a central role in your marketing strategy. I believe it's important to serve your users content that lets them know exactly what you do best - everything on your website should have a well-defined place and purpose. In addition to creating carefully crafted websites, my project management and marketing strategy skills are what set me apart from the usual web developer. I know how to work with people and ask the right questions to understand how I can create a product that addresses your needs.
    </p>
  </div>

  <div class="experience--block">

    <div>
      <h4>Lighthouse Labs</h4>

      <h3>Sr Website Manager</h3>
    </div>

    <div class="experience--connector-wrap">
      <div class="experience--connector">
      </div>
    </div>

    <div>
      <p>January 2023 - Present</p>
    </div>

  </div>

  <div class="experience--description">
    <p class="experience--description-body">I manage all updates for the Lighthouse website, subdomains and microsites. Working with our marketing team leads and internal development staff, I'm responsible for maintaining and improving our customer facing website content. 
    </p>
  </div>

  <div class="experience--block">

    <div>
      <h4>LaneLight Traffic Technologies</h4>

      <h3>Marketing Manager</h3>
    </div>

    <div class="experience--connector-wrap">
      <div class="experience--connector">
      </div>
    </div>

    <div>
      <p>May 2021 - January 2023</p>
    </div>

  </div>

  <div class="experience--description">
    <p class="experience--description-body">Handled a wide range of marketing tasks including digital advertising, SEO, copywriting, website design and marketing strategy. Managed and upgraded the company website while creating a robust online digital advertising campaign.
    </p>
  </div>

  <div class="experience--block">

    <div>
      <h4>Tempo Web Solutions</h4>

      <h3>Co-Founder/Project Manager</h3>
    </div>

    <div class="experience--connector-wrap">
      <div class="experience--connector">
      </div>
    </div>

    <div>
      <p>January 2020 - July 2020</p>
    </div>

  </div>

  <div class="experience--description">
    <p class="experience--description-body">Co-Founded and operated a web solutions company. Handled all inbound and outbound sales, client communication, project management/coordination and content creation. Built and managed custom WordPress websites from requirements to launch, working with HTML, CSS(SCSS), JavaScript and PHP. Greatly improved knowledge of Google Analytics, Google Ads, content creation, SEO skills and communication/management abilities.
    </p>
  </div>



  <div class="experience--block">

    <div>
      <h4>Caorda Web Solutions</h4>

      <h3>Account/Project Manager</h3>
    </div>

    <div class="experience--connector-wrap">
      <div class="experience--connector"></div>
    </div>

    <div>
      <p>February 2018 - January 2020</p>
    </div>

  </div>

  <div class="experience--description">
    <p class="experience--description-body">Created a link between my team and our clients. Gained skills such as writing proposals, defining and writing formal requirements, managing a team and problem-solving. Learned about content management systems, managing projects with large budgets, writing quality content and working independently. Managed a book of 200+ clients and launched 30+ projects over two years, providing marketing strategy for clients such as the BC Provincial Government, United Way of Greater Victoria, Roy Group and Victoria Hospitals Foundation.
    </p>
  </div>
</div>


<div id="contact" class="contact width--content spacing--largest">

  <div class="contact-form--wrapper">
    <?php echo do_shortcode('[contact-form-7 id="17" title="Contact form 1"]'); ?>
  </div>

  <div class="text-block">
    <h2>Contact</h2>

    <p>I love making new connections and starting conversations. Send me a message through the attached form and I will get back to you shortly.</p>

    <p>I am currently taking on new clients, so feel free to reach out for a free consultation if you are interested in seeing what I can do for your business.</p>
  </div>
</div>


<?php
get_footer();
