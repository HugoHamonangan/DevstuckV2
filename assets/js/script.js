window.addEventListener('load', () => {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 1);

  document.documentElement.style.overflow = 'hidden';
  document.body.style.overflow = 'hidden';

  setTimeout(() => {
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';

    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    lenis.on('scroll', () => {
      let isScrolled = window.scrollY > 100;
      const navbar = document.querySelector('.navbar');
      if (navbar) {
        navbar.classList.toggle('blurBg', isScrolled);
      }
    });
  }, 2400);
});

// GSAP animations after DOM content is loaded
document.addEventListener('DOMContentLoaded', function () {
  gsap.registerPlugin(ScrollTrigger);

  // GSAP Animation for navbar opacity
  const navbar = document.querySelector('.navbar');
  if (navbar) {
    gsap.fromTo(
      navbar,
      { opacity: 0, scale: 1 },
      { opacity: 1, scale: 1, duration: 1, ease: 'power3.out', delay: 2.7 }
    );
  }

  // GSAP Animations for various elements
  if (typeof gsap !== 'undefined') {
    gsap.from('.jumbotron-heading', {
      opacity: 0,
      y: 100,
      duration: 1,
      stagger: 0.3,
      ease: 'power3.out',
      delay: 3,
    });

    gsap.from('.specialize-text', {
      opacity: 0,
      y: 50,
      scale: 0.6,
      duration: 1.5,
      ease: 'power3.out',
      delay: 4.2,
    });

    gsap.from('.contact-us', {
      opacity: 0,
      y: 40,
      scale: 1,
      duration: 1,
      ease: 'power1.out',
      delay: 4.5,
    });

    gsap.from('.decoration', {
      opacity: 0,
      scale: 1,
      duration: 1,
      ease: 'power1.out',
      delay: 4.5,
    });

    gsap.fromTo(
      '.bg',
      {
        opacity: 1,
      },
      {
        opacity: 0.2,
        duration: 1,
        ease: 'power3.out',
        delay: 2.4,
      }
    );

    gsap.from('.reveal', {
      opacity: 0,
      y: 100,
      scale: 1,
      ease: 'power1.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.reveal',
        start: 'top 100%',
        end: 'top 50%',
        scrub: true,
      },
    });

    gsap.utils.toArray('.revealCard2').forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 100,
        scale: 1,
        ease: 'power1.out',
        scrollTrigger: {
          trigger: card,
          start: 'top 95%',
          end: 'top 40%',
          scrub: true,
        },
      });
    });

    gsap.from('.reveal2', {
      opacity: 0,
      y: 100,
      scale: 1,
      ease: 'power1.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.reveal2',
        start: 'top 100%',
        end: 'top 50%',
        scrub: true,
      },
    });

    gsap.from('.service-reveal', {
      opacity: 0,
      y: 100,
      scale: 1,
      ease: 'power1.out',
      stagger: 0.2,
      scrollTrigger: {
        trigger: '.service-reveal',
        start: 'top 100%',
        end: 'top 50%',
        scrub: true,
      },
    });

    gsap.from('.card-reveal', {
      opacity: 0,
      y: 100,
      scale: 1,
      ease: 'power1.out',
      stagger: 0.1,
      scrollTrigger: {
        trigger: '.card-reveal',
        start: 'top 90%',
        end: 'top 40%',
        scrub: true,
      },
    });
  }
});
