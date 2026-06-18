(() => {
  const body = document.body;
  const cursor = document.querySelector(".potu-cursor");
  const header = document.querySelector("header");
  const loader = document.querySelector(".potu-loader");

  if (loader) {
    window.addEventListener("load", () => {
      window.setTimeout(() => loader.remove(), 1800);
    });
  }

  if (cursor && window.matchMedia("(pointer: fine)").matches) {
    window.addEventListener("mousemove", event => {
      cursor.style.left = `${event.clientX}px`;
      cursor.style.top = `${event.clientY}px`;
      cursor.classList.add("is-visible");
    });

    document.querySelectorAll("a, button, .project-img, .skill-grid article").forEach(element => {
      element.addEventListener("mouseenter", () => cursor.classList.add("is-hovering"));
      element.addEventListener("mouseleave", () => cursor.classList.remove("is-hovering"));
    });
  }

  const syncHeader = () => {
    if (!header) return;
    header.classList.toggle("fixed-header", window.scrollY > 90);
  };
  syncHeader();
  window.addEventListener("scroll", syncHeader, { passive: true });

  const revealTargets = document.querySelectorAll(
    ".hero-grid, .capability-proof, .skill-grid article, .capability-engagement, .projects article, .quote, .contact form"
  );
  revealTargets.forEach(element => element.classList.add("potu-reveal"));
  revealTargets.forEach((element, index) => {
    if (element.matches(".skill-grid article")) {
      element.style.setProperty("--potu-delay", `${Math.min(index * 45, 180)}ms`);
    }
  });

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealTargets.forEach(element => observer.observe(element));
  body.classList.add("potu-ready");
})();
