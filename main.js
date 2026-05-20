// Reveal elements on scroll. Skip entirely if the user prefers reduced motion;
// CSS already pins .reveal to its end state via the same media query, so doing
// nothing here is the correct, accessible behavior.
const prefersReducedMotion = matchMedia('(prefers-reduced-motion: reduce)').matches;

const targets = document.querySelectorAll(
  '.strip-item, .service, .about-left, .about-right, .aud-item, .product-copy, .product-art, .contact h2, .contact p'
);

if (prefersReducedMotion) {
  targets.forEach(el => el.classList.add('in'));
} else {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach(el => {
    el.classList.add('reveal');
    io.observe(el);
  });
}
