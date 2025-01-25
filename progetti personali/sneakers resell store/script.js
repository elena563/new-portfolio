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