const cursorDot = document.querySelector("[data-curser-dot]");
const cursorOutline = document.querySelector("[data-curser-outline]");

window.addEventListener("mousemove", function (e) {
  const posX = e.clientX;
  const posY = e.clientY;
  cursorDot.style.left = `${posX}px`;
  cursorDot.style.top = `${posY}px`;

  // cursorOutline.style.left =  `${posX}px`;
  // cursorOutline.style.top =  `${posY}px`;

  cursorOutline.animate({
    left:`${posX}px`,
    top:`${posY}px`
  
  },{duration: 500,fill:"forwards"})



});

var tl = gsap.timeline({
  scrollTrigger: {
    trigger: ".two",
    start: "0% 95%",
    end: "50% 50%",
    scrub: true,
    // markers: true,
  },
});
// page one animation
tl.to(
  "#realme",
  {
    top: "110%",
    left: "0%",
  },
  "kaka"
);

tl.to(
  "#man",
  {
    rotate: "-60deg",
  },
  "kaka"
);

tl.to("#meao", {
  top: "100%",
  left: "20%",
});

var tl2 = gsap.timeline({
  scrollTrigger: {
    trigger: ".three",
    start: "0% 95%",
    end: "50% 50%",
    scrub: true,
    // markers: true,
  },
});
// page2 animtion
tl2.from(
  "#Boat",
  {
    rotate: "-90deg",
    left: "-80%",
    top: "10%",
  },
  "kaka2"
);

tl2.from(
  "#Oppo",
  {
    rotate: "90deg",
    left: "40vw",
  },
  "kaka2"
);

// page three animation
tl2.to(
  "#realme",
  {
    left: "35%",
    top: "217%",
    width: "30%",
  },
  "kaka2"
);
