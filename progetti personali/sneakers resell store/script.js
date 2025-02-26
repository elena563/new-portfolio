//ham menu on mobile
function show() {
  const menu = document.getElementById("menucont");
  const isMobile = window.matchMedia("(max-width: 860px)").matches;

  if (isMobile) {
      menu.classList.toggle("openmenu");
  }
}

//menu favorites and cart
function dropdown(menu, icon, othMenu, othIcon) {
  const dropmenu = document.getElementById(menu);
  const menuicon = document.getElementById(icon);
  const otherMenu = document.getElementById(othMenu);
  const otherIcon = document.getElementById(othIcon);

  if (!dropmenu.classList.contains('openmenu')){
    otherMenu.classList.remove('openmenu');
    otherIcon.classList.remove('wicon');
  }
  dropmenu.classList.toggle('openmenu');
  menuicon.classList.toggle('wicon');

  document.addEventListener("click", function closeMenu(event) {
    if (!dropmenu.contains(event.target) && !menuicon.contains(event.target)) {
      dropmenu.classList.remove("openmenu");
      menuicon.classList.remove("wicon");
      document.removeEventListener("click", closeMenu);
    }
  }); 
}
document.addEventListener("click", function(event) {
  const favs = event.target.closest("#favs");
  const cart = event.target.closest("#cart");
  if (favs) {
    dropdown('dropdownf', 'favs', 'dropdownc', 'cart');
  } else if (cart) {
    dropdown('dropdownc', 'cart', 'dropdownf', 'favs');
  }
});

document.addEventListener("DOMContentLoaded", () => {
  console.log("DOMContentLoaded triggerato!");
  updateDropdown("fav");
  updateDropdown("cart");
});


function showMessage(key) {
  let message = document.getElementById(`${key}-message`);
  console.log(message);
  message.classList.add("show");
  message.classList.remove("hidden");

  setTimeout(() => {
    message.classList.remove("show");
    message.classList.add("hidden");
  }, 3000);
}

function updateStorage(event, action, key, id) {
  let list = JSON.parse(localStorage.getItem(key)) || [];
  console.log(`Lista iniziale (${key}):`, list);
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }
  console.log(list)

  if (action === "add" && !list.includes(id)) {
    list.push(id);
    showMessage(key);
  } else if (action === "remove") {
    list = list.filter(prodId => prodId !== id);
  }

  localStorage.setItem(key, JSON.stringify(list));
  updateDropdown(key);
}


function updateDropdown(key) {
  let dropdownId = key === "fav" ? "dropdownf" : "dropdownc"; 
  let dropdown = document.getElementById(dropdownId);
  dropdown.innerHTML = "";  

  let list = JSON.parse(localStorage.getItem(key)) || [];
  console.log(list);
  if (list.length === 0) {
    dropdown.innerHTML = "<p>Nothing here</p>";
    return;
  }

  list.forEach(id => {
    let product = document.querySelector(`.product[data-id="${id}"]`);
    if (product) {
      let name = product.querySelector(".name").textContent;
      let item = document.createElement("div");
      item.classList.add("dropdown-item");
      item.innerHTML = `<p>${name}</p> <button data-id="${id}" data-type="${key}">✖</button>`;

      item.querySelector("button").addEventListener("click", (event) => {
        updateStorage(event, "remove", key, id);
        updateDropdown(key, dropdownId);
      });

      dropdown.appendChild(item);
    }
  });
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