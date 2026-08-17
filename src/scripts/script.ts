import Swiper from 'swiper';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

//info form (now inactive)
/* function submit() {
  const user = document.getElementsByTagName('input').value;
  const uname = user[0];
  const umail = user[1];
  const umessage = document.querySelector('textarea').value;
  const form = {
    name: uname,
    mail: umail,
    message: umessage,
  };
} */

//responsive dropdown header (<=600px vw)
function show() {
  const menu = document.getElementById('menucont');
  const isMobile = window.matchMedia('(max-width: 850px)').matches;

  if (isMobile && menu) {
    menu.classList.toggle('open');
  }
}

document.getElementById('ham')?.addEventListener('click', show);

// services manual slider
if (document.querySelector('.mySwiper1')) {
  var swiper1 = new Swiper('.mySwiper1', {
    modules: [Navigation],
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      851: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
    },
  });
}

// reviews automatic slider
if (document.querySelector('.mySwiper2')) {
  const swiper2 = new Swiper('.mySwiper2', {
    modules: [Autoplay],
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      1000: {
        slidesPerView: 3,
        spaceBetween: 20,
      },
    },
    autoplay: {
      delay: 5000,
    },
    loop: true,
    observer: true,
    observeParents: true,
    watchOverflow: true,
  });

  window.addEventListener('resize', () => {
    swiper2.update();
  });
}

// tab filter in portfolio page
function showProjects(evt: Event, category: string) {
  const projects = document.querySelectorAll('.work');
  projects.forEach(function (proj) {
    proj.classList.add('hidden');
  });

  const buttons = document.querySelectorAll('.tab');
  buttons.forEach(function (btn) {
    btn.classList.remove('active');
  });

  const selected = document.querySelectorAll(category);
  console.log(selected);
  selected.forEach((proj) => {
    proj.classList.remove('hidden');
  });
  (evt.currentTarget as HTMLElement).classList.add('active');
}

const projectFilters = [
  { id: 'featured-btn', selector: '.featured' },
  { id: 'website-btn', selector: '.website' },
  { id: 'webapp-btn', selector: '.webapp' },
  { id: 'data-btn', selector: '.data' },
];

projectFilters.forEach(({ id, selector }) => {
  document.getElementById(id)?.addEventListener('click', (event) => {
    showProjects(event, selector);
  });
});

const projects = document.querySelectorAll('.work');
projects.forEach(function (proj) {
  if (!proj.classList.contains('featured')) {
    proj.classList.add('hidden');
  }
});
