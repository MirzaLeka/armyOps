
window.onload = () => {

document.querySelector(".rights").textContent = `Copyright © 2013 - ${new Date().getFullYear()} Polygon Art`;

console.log(imgGrid);
}

let ifVideo = false;

document.querySelector('#playBtn').addEventListener('click', function() {
    document.querySelector('#videoPlayer').innerHTML = `<video width="768" height="450" controls autoplay>
    <source src="https://scontent-yyz1-1.xx.fbcdn.net/v/t66.18014-6/10000000_2303651236353034_5676491614531001921_n.mp4?_nc_cat=104&efg=eyJ2ZW5jb2RlX3RhZyI6Im9lcF9oZCJ9&_nc_ht=scontent-yyz1-1.xx&oh=92b4bd0893af3e35b194993ac72a5664&oe=5CA57469" type="video/mp4">
  </video>`;
ifVideo = true;
});


    // document.querySelector(".header").addEventListener('click', function() {

    //     if (ifVideo) {

    //         document.querySelector('#videoPlayer').innerHTML =`<div id="videoPlayer"> 
    //         <div id="videoContent">
    //             <i id="playBtn" class="fa fa-play" aria-hidden="true"></i>
    //             <br> <br>
    //             <p id="trailer">REVEAL TRAILER</p>
    //         </div>
    //     </div>`;
    //     ifVideo = false;

    //     }

    //   });


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


  // open gallery
  
var imgGrid = [...document.querySelectorAll('.imgGrid')];

imgGrid.map((item, i) => item.addEventListener('click', () => openModal(i) ));

