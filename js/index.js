const initScrollSuave = () => {
  const linksInternosMenu = document.querySelectorAll('.js-menu a[href^="#"');

  const scrollToSection = (ev) => {
    ev.preventDefault();
    const href = ev.currentTarget.getAttribute("href");
    const section = document.querySelector(href);

    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  linksInternosMenu.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
};

const initAnimationScroll = () => {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const windowMetadeView = window.innerHeight * 0.8;
    const animaScroll = () => {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetadeView < 0;
        if (isSectionVisible) {
          section.classList.add("ativo");
        }
      });
    };
    animaScroll();
    window.addEventListener("scroll", animaScroll);
  }
};

initAnimationScroll();
initScrollSuave();

//Animação
if (window.SimpleAnime) {
  new SimpleAnime();
}
