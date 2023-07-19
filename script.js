const sections = document.querySelectorAll("[sectionscroll]");
const dots = document.querySelectorAll('[dots]');

function fadeInOnScroll() {

  let screenPosition = window.innerHeight * 0.6;


  for (i = 0; i < sections.length; i++) {
    let section = sections[i];
    let sectionPosition = section.getBoundingClientRect().top;

    if (sectionPosition < screenPosition) {
      section.classList.add('fade-in');
    }
  }
}


function mark() {
  const scrollPosition = window.scrollY || document.documentElement.scrollTop;

  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop - 50;
    const sectionHeight = section.offsetHeight - 50;

    if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
      dots.forEach((dot) => dot.classList.remove('destaque'));
      dots[index].classList.add('destaque');
    }
  });
}

function page() {
  mark()
  fadeInOnScroll()
}

window.addEventListener('scroll', page);


