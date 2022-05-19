gsap.registerPlugin(ScrollTrigger);
gsap.utils.toArray("section").forEach((section, i) => {
  ScrollTrigger.create({
    trigger: section,
    start: "top top",
    pin: true,
    pinSpacing: false,
    scrub: true,
  });
});
ScrollTrigger.create({
  snap: 1 / 4,
});
