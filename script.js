//info form
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
        // Se la media query è attiva, mostra/nascondi il menu
        menu.classList.toggle("open");
    }
}

//swiper to let services banners move
var swiper1 = new Swiper(".mySwiper1", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

const swiper2 = new Swiper(".mySwiper2", {
    spaceBetween: 20,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
        0: {slidesPerView: 1.05},
        640: { slidesPerView: 2 },
        1000: { slidesPerView: 3 },
    },
    autoplay: {
    delay: 5000,
    },
    loop: true,
  });

//code related to hotel project
    const roomOptions = document.querySelectorAll('.room-option');
    const roomGalleries = document.querySelectorAll('.room_gallery');

    roomOptions.forEach(function (roomOption, index) {
        roomOption.addEventListener('click', function () {
            // Nascondi tutte le room_gallery tranne quella corrente
            roomGalleries.forEach(function (roomGallery, galleryIndex) {
                if (index === galleryIndex) {
                    if (roomGallery.classList.contains('padding')) {
                        roomGallery.classList.toggle('open');
                        setTimeout(function () {
                            roomGallery.classList.remove('padding');
                        }, 500);
                    } else {
                        roomGallery.classList.toggle('padding');
                        setTimeout(function () {
                            roomGallery.classList.toggle('open');
                        }, 500);
                    }
                } else {
                    roomGallery.classList.remove('open');
                    setTimeout(function () {
                        roomGallery.classList.remove('padding');
                    }, 500); 
                }
            });
        });
    });

