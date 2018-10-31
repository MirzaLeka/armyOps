
window.onload = () => {

getMedia();

}

function getMedia() {

let media = document.querySelector(".media");

let items = [
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

for (let i = 0; i < items.length; i++) {
    let mediaItem = document.createElement("img"); 
    mediaItem.setAttribute("src", items[i]);
    mediaItem.classList = "mediaItems";
    media.appendChild(mediaItem);
}

// for (let i of items) {
// let mediaItem = document.createElement("img");
// console.log(i);
// mediaItem.setAttribute("src", items[0]);
// mediaItem.classList = "mediaItems";
// media.appendChild(mediaItem);
//     }

}