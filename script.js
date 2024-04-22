function animationLoad() {
  var tl = gsap.timeline();

  tl.from(".line h1", {
    y: 100,
    stagger: 0.25,
    delay: 0.2,
  });
  tl.from("#line1-part1", {
    opacity: 0,
    onStart: function () {
      var timer = document.querySelector("#line1-part1 h5");
      var grow = 0;
      setInterval(function () {
        if (grow < 100) {
          timer.innerHTML = grow++;
        } else {
          timer.innerHTML = grow;
        }
      }, 40);
    },
  });

  tl.to(".line h2", {
    animationName: "anime",
    opacity: 1,
  });
  tl.to("#loader", {
    opacity: 0,
    duration: 0.4,
    delay: 1,
  });

  tl.from("#page1", {
    delay: 0.2,
    y: 1600,
    duration: 0.6,
    opacity: 0,
  });

  tl.to("#loader", {
    display: "none",
  });
  tl.from("#nav", {
    opacity: 0,
  });
  tl.from("#hero1 h1,#hero2 h1,#hero3 h2,#hero4 h1", {
    y: 150,
    duration: 0.1,
    stagger: 0.1,
  });
  tl.from(
    "#hero1,#page2",
    {
      opacity: 0,
    },
    "-=1.2"
  );
}

function cursoranimation() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#crsor", {
      left: dets.x,
      top: dets.y,
    });
  });

  
 
  
  var videoContainer = document.querySelector("#video-container");
  var video = document.querySelector("#video-container video");

  videoContainer.addEventListener("mouseenter", function () {
    videoContainer.addEventListener("mousemove", function (dets) {
      gsap.to("#video-cursor", {
        left: dets.x - 570,
        top: dets.y - 300,
      });
    });
  });
  videoContainer.addEventListener("mouseleave", function () {
    gsap.to("#video-cursor", {
      left: "60%",
      top: "20%",
    });
  });
  var flag = 0;
  videoContainer.addEventListener("click", function () {
    if (flag == 0) {
      video.play();
      video.style.opacity = 1;
      document.querySelector(
        "#video-cursor"
      ).innerHTML = `<i class ="ri-pause-fill"></i>`;
      gsap.to("#video-cursor", {
        scale: 0.5,
      });
      flag = 1;
    } else {
      video.pause();
      video.style.opacity = 0;
      document.querySelector(
        "#video-cursor"
      ).innerHTML = `<i class ="ri-play-mini-fill"></i>`;
      gsap.to("#video-cursor", {
        scale: 1,
      });
      flag = 0;
    }
  });
}

cursoranimation();
animationLoad();

document.addEventListener("mousemove", function (dets) {
  gsap.to("#flag", {
    x: dets.x,
    y: dets.y,
  });
});

document.querySelector("#hero3").addEventListener("mouseenter", function () {
  gsap.to("#flag", {
    opacity:9,
  });
});
document.querySelector("#hero3").addEventListener("mouseleave", function () {
  gsap.to("#flag", {
    opacity: 0,
  });
});
