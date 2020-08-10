//Pošto je relatativno malo, jednostavnog koda, nisam koristio Babel, pa sam zbog IE pisao ES5

//Mobile menu
var hamburger = document.getElementById("hamburger-menu");
var hamburgerLines = Array.prototype.slice.call(
  document.querySelectorAll(".header__hamburger-menu__line")
);
var mobileMenu = document.querySelector(".header-main");
var body = document.body;
var mainContainer = document.getElementById("mainContainer");

hamburger.addEventListener("click", function () {
  if (hamburger.classList.contains("is-active")) {
    hamburger.classList.remove("is-active");
    hamburgerLines[0].style.transform = "rotate(0deg)";
    hamburgerLines[0].style.bottom = "0px";
    hamburgerLines[1].style.opacity = "1";
    hamburgerLines[2].style.transform = "rotate(0deg)";
    hamburgerLines[2].style.top = "0px";
    mobileMenu.style.left = "-100vw";
    /*    mainContainer.classList.remove("blur"); */
    body.classList.remove("no-scroll");
  } else {
    hamburger.classList.add("is-active");
    hamburgerLines[0].style.transform = "rotate(45deg)";
    hamburgerLines[0].style.bottom = "-6px";
    hamburgerLines[1].style.opacity = "0";
    hamburgerLines[2].style.transform = "rotate(-45deg)";
    hamburgerLines[2].style.top = "-8px";
    mobileMenu.style.left = "0";
    /*      mainContainer.classList.add("blur"); */
    body.classList.add("no-scroll");
  }
});

//Tabs
document.addEventListener("DOMContentLoaded", function (e) {
  if (window.innerWidth >= 800) {
    tabsButtons[0].parentElement.classList.add("steps__button--active");
    tabsContents[0].style.display = "flex";
  } else {
    tabsContents.forEach(function (content) {
      content.style.display = "flex";
    });
  }
});

var tabsButtons = Array.prototype.slice.call(
  document.querySelectorAll(".steps__button-image")
);
var tabsContents = Array.prototype.slice.call(
  document.querySelectorAll(".steps__content")
);

tabsButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    tabsButtons.forEach(function (btn) {
      btn.parentElement.classList.remove("steps__button--active");
    });

    tabsContents.forEach(function (content) {
      content.style.display = "none";

      if (button.dataset.id == content.dataset.id) {
        content.style.display = "flex";
        button.parentElement.classList.add("steps__button--active");
      }
    });
  });
});

//Youtube
var modalTriggers = Array.prototype.slice.call(
  document.querySelectorAll(".js-trigger-video-modal")
);
var iFrame = document.getElementById("youtube");

document.addEventListener("DOMContentLoaded", function (e) {
  var toggle_video_modal = function () {
    modalTriggers.forEach(function (trigger) {
      trigger.addEventListener("click", function (e) {
        e.preventDefault();

        let id = trigger.getAttribute("data-youtube-id");
        let autoplay = "?autoplay=1";
        let related_no = "&rel=0";
        let src = "//www.youtube.com/embed/" + id + autoplay + related_no;

        iFrame.setAttribute("src", src);

        body.classList.add("show-video-modal");
        body.classList.add("no-scroll");
      });
    });

    var close_video_modal = function () {
      e.preventDefault();
      body.classList.remove("show-video-modal");
      body.classList.remove("no-scroll");
      iFrame.setAttribute("src", "");
    };

    body.addEventListener("click", function (e) {
      e.preventDefault();

      if (
        e.target.classList.contains("close-video-modal") ||
        e.target.classList.contains("overlay")
      ) {
        close_video_modal();
      }
    });

    body.addEventListener("keyup", function (e) {
      if (e.keyCode == 27) {
        close_video_modal();
      }
    });
  };
  toggle_video_modal();
});
