//ham menu on mobile
function show() {
  const menu = document.getElementById("menucont");
  const isMobile = window.matchMedia("(max-width: 860px)").matches;

  if (isMobile) {
      menu.classList.toggle("openmenu");
  }
}
//favs and cart dropdown
function dropdownf() {
  const favs = document.getElementById("dropdownf");
  const ficon = document.getElementById('favs');
  ficon.classList.toggle("white");
  favs.classList.toggle("openmenu");
}
function dropdownc() {
  const cart = document.getElementById("dropdownc");
  const cicon = document.getElementById('cart');
  cicon.classList.toggle("white");
  cart.classList.toggle("openmenu");
}

//product filter
document.addEventListener("change", function(event) {
  if (event.target.matches('.category')){
    const  categoryClass = event.target.dataset.category;
    const elements = document.querySelectorAll(`.product.${categoryClass}`);
    elements.forEach(element => {
      element.closest("a").classList.toggle('hidden', !event.target.checked);
    });
  }
});

//filters menu
const filtersmenu = document.querySelector('.filters');
const overlay = document.getElementById('overlay');
const toggleBtn = document.getElementById('togglefilters');
const closeBtn = document.getElementById('closefilters');

toggleBtn.addEventListener("click", () => {
  filtersmenu.classList.add("visible");
  overlay.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  filtersmenu.classList.remove("visible");
  overlay.classList.remove("active");
});
overlay.addEventListener("click", () => {
  filtersmenu.classList.remove("visible");
  overlay.classList.remove("active");
});