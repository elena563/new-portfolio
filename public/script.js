//info form (now inactive)
function submit() {
    const user = document.getElementsByTagName("input").value;
    const uname = user[0];
    const umail = user[1];
    const umessage = document.querySelector("textarea").value;
    const form = {
        name: uname,
        mail: umail,
        message: umessage
    }
}

//responsive dropdown header (<=600px vw)
function show() {
    const menu = document.getElementById("menucont");
    const isMobile = window.matchMedia("(max-width: 850px)").matches

    if (isMobile) {
        menu.classList.toggle("open");
    }
}

// services manual slider
var swiper1 = new Swiper(".mySwiper1", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

// reviews automatic slider
const swiper2 = new Swiper(".mySwiper2", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {
            slidesPerView: 1,
            spaceBetween: 20
        },
        640: { 
            slidesPerView: 2,
            spaceBetween: 40
        },
        1000: { 
            slidesPerView: 3,
            spaceBetween: 20
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

// tab filter in portfolio page
function showProjects(evt, category) {

    const projects = document.querySelectorAll('.work');
    projects.forEach(function (proj) {
        proj.classList.add('hidden');
    });

    const buttons = document.querySelectorAll('.tab');
    buttons.forEach(function (btn) {
        btn.classList.remove("active");
    });

    const selected = document.querySelectorAll(category);
    console.log(selected)
    selected.forEach(proj => {
        proj.classList.remove('hidden');
    });
    evt.currentTarget.classList.add("active");
}

document.getElementById('featured-btn').addEventListener('click', (event) => showProjects(event, '.featured'))
document.getElementById('website-btn').addEventListener('click', (event) => showProjects(event, '.website'))
document.getElementById('webapp-btn').addEventListener('click', (event) => showProjects(event, '.webapp'))