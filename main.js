// Subtle scroll-reveal — no custom cursor, no glow, no kinetic effects.
const io = new IntersectionObserver((entries) => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('in');
      io.unobserve(e.target);
    }
  });
}, { threshold: 0.15 });

document.querySelectorAll(
  '.strip-item, .service, .about-left, .about-right, .aud-item, .product-copy, .product-art, .contact h2, .contact p'
).forEach(el => {
  el.classList.add('reveal');
  io.observe(el);
});
