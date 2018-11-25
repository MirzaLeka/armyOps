
window.onload = () => {

document.querySelector(".rights").textContent = `Copyright © 2013 - ${new Date().getFullYear()} Polygon Art`;

getMedia();

}

const items = [
    "../Resources/img/media/1.png",
    "../Resources/img/media/2.jpg",
    "../Resources/img/media/3.png",
    "../Resources/img/media/4.jpg",
    "../Resources/img/media/5.jpeg",

    "../Resources/img/media/6.jpg",
    "../Resources/img/media/7.jpg",
    "../Resources/img/media/8.jpg",
    "../Resources/img/media/9.jpg",
    "../Resources/img/media/10.jpg",

    "../Resources/img/media/11.jpg",
    "../Resources/img/media/12.jpg",
    "../Resources/img/media/13.jpg",
    "../Resources/img/media/14.jpg",
    "../Resources/img/media/15.png",
]

function getMedia() {

const images = items.map((item, i) => `<img src="${item}" onclick="openModal(${i})" class='mediaItems'/>`).join('');
document.querySelector('.media').innerHTML = images;

}



let globalSrc = 0;
let changeCaption = 0;
let modal =  document.querySelector("#myModal");

// open modal

function openModal(src) {

    modal.style.display = "flex";

    document.querySelector(".modalImg").setAttribute("src", items[src])

   globalSrc = src;

   }


function nextImg() {
    globalSrc++;

    if (globalSrc == items.length) {
        globalSrc = 1;
    }

    document.querySelector(".modalImg").setAttribute("src", items[globalSrc])    
 
}

function prevImg() {
    globalSrc--;

    if (globalSrc < 1) {
        globalSrc = items.length-1;
    }

    document.querySelector(".modalImg").setAttribute("src", items[globalSrc])

}

  // Close modal when you press X
  let closeModal = document.querySelectorAll(".closeModal");
  
  closeModal.forEach(item => {
      item.addEventListener("click", () => {
        modal.style.display = "none";
        });
  });

  // Close modal when you click anywhere on window

  window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";    
      }
  }