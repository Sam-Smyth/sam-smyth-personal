// Disable scroll


// left: 37, up: 38, right: 39, down: 40,
// spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
var keys = { 37: 1, 38: 1, 39: 1, 40: 1 };

function preventDefault(e) {
  e.preventDefault();
}

function preventDefaultForScrollKeys(e) {
  if (keys[e.keyCode]) {
    preventDefault(e);
    return false;
  }
}

// modern Chrome requires { passive: false } when adding event
var supportsPassive = false;
try {
  window.addEventListener("test", null, Object.defineProperty({}, 'passive', {
    get: function () { supportsPassive = true; }
  }));
} catch (e) { }

var wheelOpt = supportsPassive ? { passive: false } : false;
var wheelEvent = 'onwheel' in document.createElement('div') ? 'wheel' : 'mousewheel';

// call this to Disable
function disableScroll() {
  window.addEventListener('DOMMouseScroll', preventDefault, false); // older FF
  window.addEventListener(wheelEvent, preventDefault, wheelOpt); // modern desktop
  window.addEventListener('touchmove', preventDefault, wheelOpt); // mobile
  window.addEventListener('keydown', preventDefaultForScrollKeys, false);
}

// call this to Enable
function enableScroll() {
  window.removeEventListener('DOMMouseScroll', preventDefault, false);
  window.removeEventListener(wheelEvent, preventDefault, wheelOpt);
  window.removeEventListener('touchmove', preventDefault, wheelOpt);
  window.removeEventListener('keydown', preventDefaultForScrollKeys, false);
}

if (document.getElementsByClassName("home-animation").length) {
  window.disableScroll()
}



var burger = document.querySelector(".burger");
var mobileMenu = document.querySelector(".nav");
var body = document.querySelector("body");

var navContainer = document.querySelector(".header");

for (var i = 0; i < document.querySelectorAll(".nav--container ul a").length; i++) {
  document.querySelectorAll(".nav--container ul a")[i].addEventListener("click", function () {
    setTimeout(function () {
      body.classList.remove("scroll-block");
    }, 400);

    burger.classList.remove("burger--show");
    navContainer.classList.remove("nav--container-show");
  });
}

burger.addEventListener("click", function (event) {
  if (burger.classList.contains('burger--show')) {
    setTimeout(function () {
      body.classList.remove("scroll-block");
    }, 300);
  } else {
    body.classList.add("scroll-block");
  }

  burger.classList.toggle("burger--show");
  navContainer.classList.toggle("nav--container-show");
  event.stopPropagation();
});



// sticky nav


var navBar = document.querySelector(".home .header");
var navBtn = document.querySelector(".menu-item:nth-child(4)");
var scrolled = false;

if (navBar) {
  window.addEventListener("scroll", function () {
    if (window.pageYOffset > 0 && scrolled !== true) {
      scrolled = true;
      navBar.classList.add("header-scrolled");
      navBtn.classList.add("header-btn-scrolled");
    } else if (window.pageYOffset <= 0 && scrolled !== false) {
      scrolled = false;
      navBar.classList.remove("header-scrolled");
      navBtn.classList.remove("header-btn-scrolled");
    }
  });
}



// Scroll to section on click

document.querySelector(".menu-item:nth-child(1)").addEventListener("click", function (event) {
  document
    .querySelector("#skills")
    .scrollIntoView({ behavior: "smooth", block: "start" });

  event.preventDefault();
});

document.querySelector(".menu-item:nth-child(2)").addEventListener("click", function (event) {
  document
    .querySelector("#portfolio")
    .scrollIntoView({ behavior: "smooth", block: "start" });

  event.preventDefault();
});

document.querySelector(".menu-item:nth-child(3)").addEventListener("click", function (event) {
  document
    .querySelector("#experience")
    .scrollIntoView({ behavior: "smooth", block: "start" });

  event.preventDefault();
});

if (document.getElementsByClassName("home").length) {
  document.querySelector(".home--button").addEventListener("click", function (event) {
    document
      .querySelector("#skills")
      .scrollIntoView({ behavior: "smooth", block: "start" });

    event.preventDefault();
  });
}

document.querySelector(".menu-item:nth-child(4)").addEventListener("click", function (event) {
  document
    .querySelector("#contact")
    .scrollIntoView({ behavior: "smooth", block: "start" });

  event.preventDefault();
});




// GSAP


document.addEventListener("DOMContentLoaded", function () {

  window.addEventListener("load", function () {

    if (document.getElementsByClassName("home").length) {
      gsap.registerPlugin(ScrollTrigger);

      // ScrollTrigger.saveStyles(".hero--image");

      ScrollTrigger.matchMedia({

        // desktop
        "(min-width: 1024px)": function () {


          if (document.querySelector('.home--button')) {
            let homeButton = document.querySelector('.home--button');
            let homeButtonTl = gsap.timeline();

            homeButtonTl
              .to(homeButton, {
                "--home-button-translate": "120%",
                delay: 1
              })
              .set(homeButton, {
                color: "rgb(255, 255, 255)"
              }, "<")
              .set(homeButton, {
                color: "rgb(32, 191, 85)"
              }, "<.2")
          }

          //Experience dots

          var experienceDots = gsap.utils.toArray('.experience--connector');

          experienceDots.forEach(dotBar => {

            gsap.to(dotBar, {
              x: 0,
              duration: 1,
              ease: "none",
              scrollTrigger: {
                trigger: dotBar,
                start: "center bottom"
              }
            })

          })



          // project boxes

          let projectBoxes = gsap.utils.toArray('.projects-card');

          projectBoxes.forEach(box => {
            let text = box.querySelectorAll('.curtain-text'),
              button = box.querySelector('.project-btn'),
              buttonToggle = box.querySelector('.project-btn button'),
              projectColourBlock = box.querySelector('.project-colour-block'),
              projectCardBody = box.querySelector('p'),
              projectTextAddition = box.querySelectorAll('.project-text-addition'),
              cardContent = box.querySelector('.projects-card-content'),
              cardVideoWrap = box.querySelector('.projects-card-video');

            let states = [cardContent, box, cardVideoWrap];

            let projectHover = gsap.timeline({ paused: true, defaults: { ease: "power2.out" } })
              .to(projectColourBlock, {
                backgroundColor: "#333332",
                duration: .3
              })

              .to(text, {
                height: "auto"
              })

              .to(button, {
                height: "auto"
              }, "<")

              .to(text, {
                "--translateY": "-110%",
                stagger: .2
              }, "-=.3")

              .to(button, {
                autoAlpha: 1
              }, "-=.3")


            if (!box.classList.contains('project-expand')) {
              box.addEventListener("mouseenter", () => projectHover.play());
              box.addEventListener("mouseleave", () => projectHover.reverse());
            }

            box.addEventListener("mouseleave", function () {
              if (box.classList.contains('project-expand')) {
                projectHover.pause()
              }
            });


            button.addEventListener("click", function () {

              if (!box.classList.contains('project-expand')) {
                let projectGrow = gsap.timeline()

                gsap.set(cardVideoWrap, {
                  y: 0
                })

                projectGrow

                  .to(cardContent, {
                    autoAlpha: 0,
                    duration: .25
                  })

                  .to(cardVideoWrap, {
                    autoAlpha: 0,
                    duration: .25
                  }, "<")

                  .call(disableScroll)

                  .call(flipFunction)

                  .to(cardContent, {
                    autoAlpha: 1,
                    delay: 1
                  })

                  .to(cardVideoWrap, {
                    autoAlpha: 1,
                    duration: 1
                  })

                  .from(cardVideoWrap, {
                    y: 100
                  }, "<")
              } else {
                let projectGrowRev = gsap.timeline()

                projectGrowRev

                  .to(cardContent, {
                    autoAlpha: 0,
                    y: 100,
                    duration: .5
                  })

                  .to(cardVideoWrap, {
                    autoAlpha: 0,
                    y: -100,
                    duration: .5
                  }, "<")

                  .to(cardContent, {
                    y: 0,
                    duration: 0
                  })

                  .call(flipFunction)

                  .call(enableScroll)

                  .to(cardContent, {
                    autoAlpha: 1,
                    delay: 1.5
                  })
              }


              function createVideo(source) {
                let videoCont = document.createElement("video")
                videoCont.setAttribute("autoplay", "")
                videoCont.setAttribute("muted", "")
                videoCont.setAttribute("loop", "")
                videoCont.setAttribute("playsinline", "")
                videoCont.setAttribute("src", source)

                cardVideoWrap.appendChild(videoCont)
              }

              function createProjectText(text) {
                let projectTextAddition = document.createElement("p")
                projectTextAddition.setAttribute("style", "height: auto; --translateY:-110%; margin-top: 25px;")
                projectTextAddition.setAttribute("class", "project-text-addition")
                projectTextAddition.innerHTML = text

                projectCardBody.after(projectTextAddition)
              }


              function flipFunction() {

                if (box.classList.contains('first-project') && !box.classList.contains('project-expand')) {


                  createVideo(window.location.href + "wp-content/uploads/2023/05/Imagine-Life-Coaching-Website-Video.mp4")

                  gsap.to(projectTextAddition, {
                    height: "auto",
                    marginTop: "20px"
                  })



                  buttonToggle.innerHTML = "Go Back"

                } else if (box.classList.contains('second-project') && !box.classList.contains('project-expand')) {


                  createVideo(window.location.href + "wp-content/uploads/2022/05/Eric-Brunt-Media-Website-Video.mp4")

                  gsap.to(projectTextAddition, {
                    height: "auto",
                    marginTop: "20px"
                  })

                  buttonToggle.innerHTML = "Go Back"

                } else {

                  box.querySelector("video").remove()

                  gsap.to(projectTextAddition, {
                    height: "0",
                    marginTop: "0px",
                    duration: 0
                  })

                  buttonToggle.innerHTML = "View Project"

                  projectHover.reverse()

                }



                let projectState = Flip.getState(states, {
                  props: "backgroundColor"
                });

                box.classList.toggle("project-expand");

                Flip.from(projectState, {
                  duration: 1,
                  ease: "power4.inOut",
                  zIndex: 10
                })


              }

            });

          })

        },

        // tablet up
        "(min-width: 600px)": function () {

        },

        // tablet down
        "(max-width: 1023px)": function () {

          // Project cards

          let projectBoxes = gsap.utils.toArray('.projects-card');

          projectBoxes.forEach(box => {
            let button = box.querySelector('.project-btn'),
              buttonToggle = box.querySelector('.project-btn button'),
              projectColourBlock = box.querySelector('.project-colour-block'),
              cardContent = box.querySelector('.projects-card-content'),
              cardVideoWrap = box.querySelector('.projects-card-video'),
              projectTextAddition = box.querySelectorAll('.project-text-addition'),
              projectVideoWrap = box.querySelector('.projects-card-video'),
              buttonLink = box.querySelector('.website-link');


            button.addEventListener("click", function () {

              if (!box.classList.contains('project-expand')) {
                let projectGrow = gsap.timeline()

                projectGrow

                  .to(projectColourBlock, {
                    backgroundColor: "#333332",
                    duration: .25
                  })

                  .to(cardContent, {
                    autoAlpha: 0,
                    duration: .25
                  }, "<")

                  .to(cardVideoWrap, {
                    autoAlpha: 0,
                    duration: .25
                  }, "<")

                  .call(flipFunction)

              } else {
                let projectGrowRev = gsap.timeline()

                projectGrowRev

                  .to(cardContent, {
                    autoAlpha: 0,
                    duration: .5
                  }, "<")

                  .to(cardVideoWrap, {
                    autoAlpha: 0,
                    duration: .5
                  }, "<")

                  .call(flipFunction)

                  .to(projectColourBlock, {
                    backgroundColor: "rgba(51, 51, 50, 0.7)",
                    duration: .25,
                    delay: .5
                  })

                  .to(cardContent, {
                    autoAlpha: 1
                  }, "<")
              }


              function createVideo(source) {
                let videoCont = document.createElement("video")
                videoCont.setAttribute("autoplay", "")
                videoCont.setAttribute("muted", "")
                videoCont.setAttribute("loop", "")
                videoCont.setAttribute("playsinline", "")
                videoCont.setAttribute("oncanplay", "this.play()")
                videoCont.setAttribute("onloadedmetadata", "this.muted = true")

                videoCont.setAttribute("src", source)

                cardVideoWrap.appendChild(videoCont)
              }


              function flipFunction() {

                if (box.classList.contains('first-project') && !box.classList.contains('project-expand')) {

                  createVideo(window.location.href + "wp-content/uploads/2023/05/Imagine-Life-Coaching-Website-Video-Mobile.mp4")

                  loadedVid = box.querySelector("video")

                  loadedVid.addEventListener("loadeddata", function () {
                    gsap.timeline()
                      .to(projectTextAddition, {
                        height: "auto",
                        marginTop: "15px",
                        duration: .25
                      })

                      .to(projectVideoWrap, {
                        height: "auto",
                        duration: .25
                      }, "<")

                      .to(buttonLink, {
                        visibility: "visible",
                        position: "relative",
                        left: "auto"
                      }, "<")

                      .to(cardContent, {
                        autoAlpha: 1,
                      })

                      .to(cardVideoWrap, {
                        autoAlpha: 1
                      }, "<")


                    box.classList.add("project-expand");
                  })


                  buttonToggle.innerHTML = "Go Back"


                } else if (box.classList.contains('second-project') && !box.classList.contains('project-expand')) {

                  createVideo(window.location.href + "wp-content/uploads/2022/05/Eric-Brunt-Media-Website-Mobile-Video.mp4")

                  loadedVid = box.querySelector("video")

                  loadedVid.addEventListener("loadeddata", function () {
                    gsap.timeline()
                      .to(projectTextAddition, {
                        height: "auto",
                        marginTop: "15px",
                        duration: .25
                      })

                      .to(projectVideoWrap, {
                        height: "auto",
                        duration: .25
                      }, "<")

                      .to(buttonLink, {
                        visibility: "visible",
                        position: "relative",
                        left: "auto"
                      }, "<")

                      .to(cardContent, {
                        autoAlpha: 1,
                      })

                      .to(cardVideoWrap, {
                        autoAlpha: 1
                      }, "<")


                    box.classList.add("project-expand");
                  })


                  buttonToggle.innerHTML = "Go Back"

                } else {

                  gsap.timeline()
                    .to(projectTextAddition, {
                      height: "0",
                      marginTop: "0px"
                    })

                    .to(projectVideoWrap, {
                      height: "0",
                    }, "<")

                    .to(buttonLink, {
                      visibility: "visible",
                      position: "relative",
                      left: "auto"
                    }, "<")

                    .to(buttonLink, {
                      visibility: "hidden",
                      position: "absolute",
                      left: "0"
                    }, "<")

                    .call(function () {
                      box.querySelector("video").remove()

                      box.classList.remove("project-expand");
                    })


                  buttonToggle.innerHTML = "View Project"
                }

              }

            });

          })
        },

        // just tablet
        "(min-width: 600px) and (max-width: 1023px)": function () {

        },

        // mobile
        "(max-width: 599px)": function () {

        },

        // all 
        "all": function () {

          // Loader

          if (document.getElementsByClassName("home").length) {
            gsap.to(".loader", {
              autoAlpha: 0
            })
          }

          //Skill bars

          var skillsBars = gsap.timeline({
            scrollTrigger: {
              trigger: ".skills",
              start: "center bottom",
            }
          })

          skillsBars

            .to(".project-management", {
              x: "-5%",
              ease: "power4.inOut"
            })

            .to(".marketing-strategy", {
              x: "-10%",
              ease: "power4.inOut"
            })

            .to(".web", {
              x: "-5%",
              ease: "power4.inOut"
            })

            .to(".copywriting", {
              x: "-15%",
              ease: "power4.inOut"
            })


          // hero image fade

          gsap.from(".hero--image", {
            autoAlpha: 0,
            duration: 1,
            ease: "none",
            delay: .5,
            x: 20,
            y: -50,
            ease: "power4"
          })

        }

      });
    }




  }, false)
})