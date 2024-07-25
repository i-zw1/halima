//Burger Menu Coding 

let linksCont = document.querySelector(".mobileLinks");
let links = document.querySelectorAll(".mobileLinks ul li a");
let menuBtn = document.querySelector(".menuBtn");

// When Burger Icon is clicked remove or add "active class" to Burger Icon Element

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  // And If BIE Have "active" class let left of links menu 0 Else it will be normal
  if (menuBtn.classList.contains("active")) {
    linksCont.style.left = 0;
  } else {
    linksCont.style.left = "100%";
  }
});

// if one of links is clicked remove "active" class from BIE and return links menu to normal
links.forEach((link) => {
  link.addEventListener("click", () => {
    menuBtn.classList.remove("active");
    linksCont.style.left = "100%";
  });
});


// fetch data of images

fetch("https://i-zw1.github.io/hJSON/")
.then((data) => data.json())
.then(urls => extractData(urls));

// loop in data and add args to another func to add elements to the page
function extractData(images) {
  for (image of images) {
    createElementOfImages(image.image);
  }
};

// Vars For Create Elements And Add Some Methods
let imageContainer = document.querySelector("#projects .container");
let pop = document.querySelector("#projects .pop");
let popImage = document.querySelector("#projects .pop img");
let closeIcon = document.querySelector("#projects .pop i");

popImage.oncontextmenu = () => false;

function createElementOfImages(src) {
  // Vars of Elements
  let box = document.createElement("div");
  let zoomInBox = document.createElement("div");
  let zoomInIcon = document.createElement("i");
  let image = document.createElement("img");

  // Event Of Main Box
  image.oncontextmenu = () => false;
  
  // Add Classes
  zoomInBox.className = "zoom-in"
  zoomInBox.id = src
  zoomInIcon.classList.add("fas", "fa-expand")

  // Add Attr Values
  image.src = src
  image.alt = "image of projects" 

  // Pop Up Method
  zoomInBox.onclick = (e) => {
    pop.style.display = "flex";
    closeIcon.onclick = () => pop.style.display = "none";
    popImage.src = e.currentTarget.id 
  };

  // Append Elements
  box.append(zoomInBox);
  box.append(image);
  zoomInBox.append(zoomInIcon)
  imageContainer.prepend(box)
}