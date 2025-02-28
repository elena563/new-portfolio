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

//cart and favs system
document.addEventListener("DOMContentLoaded", () => {
  updateDropdown("fav");
  updateDropdown("cart");
});

function showMessage(key) {
  let message = document.getElementById(`${key}-message`);
  message.classList.add("show");
  message.classList.remove("hidden");

  setTimeout(() => {
    message.classList.remove("show");
    message.classList.add("hidden");
  }, 3000);
}

function updateStorage(event, action, key, id) {
  let list = JSON.parse(localStorage.getItem(key)) || [];
  if (event) {
    event.preventDefault();
    event.stopPropagation();
  }

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

//modal window
const modal = document.getElementById('modal');
const modalContent = document.querySelector('.modal-content');
const closeModal = document.querySelector('.close');
const products = document.querySelectorAll(".product");

const productChoices = {
  "1": { colors: ["#B6A084", "red", "black"], sizes: ["S", "M", "L", "XL"] },
  "2": { colors: ["Black", "White", "pink"], sizes: ["size fits all"] },
  "3": { colors: ["white", "navy", "black"], sizes: ["S", "M", "L", "XL"] },
  "4": { colors: ["#CB5073", "yellow", "blueviolet"], sizes: ["XS", "S", "M", "L"] },
  "5": { colors: ["grey", "white", "black"], sizes: ["S", "M", "L", "XL"] },
  "6": { colors: ["black", "white", "olive"], sizes: ["S", "M", "L", "XL"] },
  "7": { colors: ["#9E2823", "navy", "black"], sizes: ["S", "M", "L", "XL"] },
  "8": { colors: ["#ABDE00", "pink", "white"], sizes: ["S", "M", "L", "XL"] },
  "9": { colors: ["black", "wheat", "navy"], sizes: ["S", "L"] },
  "10": { colors: ["#344465", "maroon", "black"], sizes: ["S", "M", "L", "XL"] },
  "11": { colors: ["black", "grey"], sizes: ["XS", "S", "M", "XL"] },
  "12": { colors: ["black", "blue", "white"], sizes: ["S", "M", "L", "XL"] },
  "13": { colors: ["white", "black", "gray"], sizes: ["38", "39", "40", "41", "42"] },
  "14": { colors: ["#C67889", "turquoise", "wheat"], sizes: ["36", "37", "38", "39", "40"]  },
  "15": { colors: ["#ABAFB4", "red", "blue"], sizes: ["38", "39", "40", "41", "42"]  },
  "16": { colors: ["#9A2618", "#C2840F", "#C6C8C9"], sizes: ["36", "37", "38", "39", "40"]  },
  "17": { colors: ["white", "black"], sizes: ["36", "37", "38", "39", "40"]  },
  "18": { colors: ["white", "black", "orangered"], sizes: ["40", "41",  "42", "43", "44"]  },
  "19": { colors: ["#8E788B", "#9B5593", "black"], sizes: ["40", "41",  "42", "43", "44"]  },
  "20": { colors: ["#BCAA97", "black", "gray"], sizes: ["40", "41",  "42", "43", "44"]   },
  "21": { colors: ["#294261", "red", "skyblue"], sizes: ["40", "41",  "42", "43", "44"]  },
  "22": { colors: ["black", "white", "#60799D"], sizes: ["40", "41",  "42", "43", "44"]   },
  "23": { colors: ["#CFC6BD", "navy", "red"], sizes: ["36", "37", "38", "39", "40"]  },
  "24": { colors: ["#8ED2C8"], sizes: ["36", "37", "38", "39", "40"]  }
};


function openModal(productId) {
  modalContent.innerHTML = ""; 
  const productElement = document.querySelector(`.product[data-id="${productId}"]`);
  const productName = productElement.querySelector('.name').textContent;
  const productPrice = productElement.querySelector('.price').textContent;
  const { colors, sizes } = productChoices[productId];
  const image = productElement.querySelector("img").src;

  const colorCircles = colors.map(color => 
    `<span class="color-circle" style="background-color: ${color};"></span>`
  ).join("");
  
  const sizeBoxes = sizes.map(size => 
    `<span class="size-box">${size}</span>`
  ).join("");

  const modalItem = document.createElement('div');
  modalItem.classList.add('modal-item');
  modalItem.innerHTML = `
  <div class="prodimg">
    <img src="${image}" alt="${productName}">
  </div>
  <div class="prodiv">
    <span class="close">&times;</span>
    <h3>${productName}</h3>
    <h4>Color</h4>
    <div class="color-container">${colorCircles}</div>
    <h4>Size</h4>
    <div class="size-container">${sizeBoxes}</div>
    <p>${productPrice}</p>
    <button onclick="updateStorage(event, 'add', 'cart', ${productId})" class="negbtn2 cart">Add to Cart</button>
  </div>
`;
  modalContent.appendChild(modalItem);
  let scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
  document.body.style.overflow = "hidden";
  document.body.style.paddingRight = `${scrollbarWidth}px`;
    modal.classList.remove('hidden');
}

// click event
products.forEach((productElement) => {
  productElement.addEventListener('click', () => {
    const productId = productElement.dataset.id;
    openModal(productId);
    modal.setAttribute('data-id', productId);
  });
});

document.addEventListener('click', (event) => {
  if (event.target.matches(".close")) {
    modal.classList.add("hidden");
    document.body.style.overflow = "";
  document.body.style.paddingRight = "";
  }
});

// closing modal by clicking out
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.classList.add('hidden');
  }
});


//product filter
document.addEventListener("change", function(event) {
  console.log(event.target.matches('.category'))
  if (event.target.matches('.category')) {
    const categoryClass = event.target.dataset.category;
    const elements = document.querySelectorAll('.product');
    console.log("Elementi trovati:", document.querySelectorAll('.product'));


    elements.forEach(element => {
      if (element.classList.contains(categoryClass)){
        element.classList.toggle('hidden', !event.target.checked);
      }
     
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