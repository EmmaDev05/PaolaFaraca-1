/* Sidebar menu*/
// close hamburger menu after click a
$(".menu-list li a").on("click", function () {
  $("#hamburger-menu").click();
});
document.addEventListener("DOMContentLoaded", function () {
  var menuLinks = document.querySelectorAll(".menu-link");

  for (var i = 0; i < menuLinks.length; i++) {
    menuLinks[i].addEventListener("click", function () {
      document.getElementById("menu_checkbox").checked = false;
    });
  }
});

console.clear();

gsap.registerPlugin(ScrollTrigger);

gsap
  .timeline({
    scrollTrigger: {
      trigger: "#pinContainer",
      pin: true,
      start: "top top",
      end: "+=200%",
      scrub: true,
      //   markers: true,
    },
  })
  .fromTo(".panel.turqoise", { xPercent: 100 }, { xPercent: 0 })
  .fromTo(".panel.bordeaux", { yPercent: 100 }, { yPercent: 0 });

// Animation button-cards
document
  .querySelector("#popup-open-btn")
  .addEventListener("click", function () {
    document.querySelector(".popup").classList.add("active");
  });

document
  .querySelector(".popup .popup-close-btn")
  .addEventListener("click", function () {
    document.querySelector(".popup").classList.remove("active");
  });

document
  .querySelector("#popup-open-btn-1")
  .addEventListener("click", function () {
    document.querySelector(".popup-1").classList.add("active");
  });

document
  .querySelector(".popup-1 .popup-close-btn")
  .addEventListener("click", function () {
    document.querySelector(".popup-1").classList.remove("active");
  });

document
  .querySelector("#popup-open-btn-2")
  .addEventListener("click", function () {
    document.querySelector(".popup-2").classList.add("active");
  });

document
  .querySelector(".popup-2 .popup-close-btn")
  .addEventListener("click", function () {
    document.querySelector(".popup-2").classList.remove("active");
  });
