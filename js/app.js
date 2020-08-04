const song1 = document.querySelector("#song1");
const song2 = document.querySelector("#song2");
const song3 = document.querySelector("#song3");
const song4 = document.querySelector("#song4");
const song5 = document.querySelector("#song5");

let posterSong = document.querySelector("#posterSong");

// const canciones = [
//   {
//     name: "Another Life",
//   },
//   {
//     name: "Ten feet Tall",
//   },
// ];

// console.log();

// let songs = document.querySelectorAll(".song");

// const player = document.querySelector("#player");

// songs.forEach((song) => {
//   song.addEventListener("click", function (e) {
//     switch (song.innerHTML) {
//       case "Another Life":
//         player.src = "img/another_life.mp4";
//         player.play();

//         break;
//       case "Ten Feet Tall":
//         player.src = "img/ten_feet_tall.mp4";
//         player.play();
//         break;

//       case "Gone":
//         player.src = "img/gone.mp4";
//         player.play();
//         break;
//         case "No Beef":
//             player.src = "img/nobeef.mp4";
//             player.play();
//             break;
    
//           case "It Goes Like":
//             player.src = "img/itgoes.mp4";
//             player.play();
//             break;

//       default:
//         break;
//     }
//   });
// });

var handler1=false;

song1.addEventListener("click",function (){
    player.src="img/another_life.mp3";
    posterSong.src="img/another_life.jpg"

    if (handler1==false) {
    song1.classList.add("fa-pause-circle")
    song1.classList.remove("fa-play-circle")
    song2.classList.add("fa-play-circle")
    song3.classList.add("fa-play-circle")
    song4.classList.add("fa-play-circle")
    song5.classList.add("fa-play-circle")
    handler1=true

    player.play()
    }else{
        song1.classList.remove("fa-pause-circle")
        song1.classList.add("fa-play-circle")
        handler1=false;
        player.pause()
    }

})

song2.addEventListener("click",function (){
    player.src="img/ten_feet_tall.mp3";
    posterSong.src="img/ten_feet_tall.jpg"
    if (handler1==false) {

    song1.classList.add("fa-play-circle")
    song2.classList.add("fa-pause-circle")
    song2.classList.remove("fa-play-circle")
    song3.classList.add("fa-play-circle")
    song4.classList.add("fa-play-circle")
    song5.classList.add("fa-play-circle")
    handler1=true
    player.play()
    }else{
        song2.classList.remove("fa-pause-circle")
        song2.classList.add("fa-play-circle")
        handler1=false;
        player.pause()
    }

})

song3.addEventListener("click",function (){

    player.src="img/gone.mp3";
    posterSong.src="img/gone.jpg"
    if (handler1==false) {
   
    song1.classList.add("fa-play-circle")
    song2.classList.add("fa-play-circle")
    song3.classList.add("fa-pause-circle")
    song3.classList.remove("fa-play-circle")
    song4.classList.add("fa-play-circle")
    song5.classList.add("fa-play-circle")
    handler1=true
    player.play()
    }else{
        song3.classList.remove("fa-pause-circle")
        song3.classList.add("fa-play-circle")
        handler1=false;
        player.pause()
    }

})

song4.addEventListener("click",function (){
    player.src="img/nobeef.mp3";
    posterSong.src="img/nobeef.jpg"

    if (handler1==false) {
        song1.classList.add("fa-play-circle")
        song2.classList.add("fa-play-circle")
        song3.classList.add("fa-play-circle")
        song4.classList.add("fa-pause-circle")
        song4.classList.remove("fa-play-circle")
        song5.classList.add("fa-play-circle")
    handler1=true
    player.play()
    }else{
        song4.classList.remove("fa-pause-circle")
        song4.classList.add("fa-play-circle")
        handler1=false;
        player.pause()
    }

})

song5.addEventListener("click",function (){
    player.src="img/itgoes.mp3";
    posterSong.src="img/itgoes.jpg"
    if (handler1==false) {
        song1.classList.add("fa-play-circle")
        song2.classList.add("fa-play-circle")
        song3.classList.add("fa-play-circle")
        song4.classList.add("fa-play-circle")
        song5.classList.add("fa-pause-circle")
        song5.classList.remove("fa-play-circle")
    handler1=true
    player.play()
    }else{
        song5.classList.remove("fa-pause-circle")
        song5.classList.add("fa-play-circle")
        handler1=false;
        player.pause()
    }

})

//console.log(video)
// https://youtu.be/zDJTI4pT4eE


///Burger Menu
const btn = document.querySelector('.burgerBtn');
const burgerMenu = document.querySelector(".burgerMenu");
const menuIcon = document.querySelector("#menuIcon")

btn.addEventListener('click',()=>
{
        menuIcon.classList.toggle("fa-times")

        if (menuIcon.className !== "fas fa-bars") {
            burgerMenu.style.display="block";
        } else {
            burgerMenu.style.display="none";
        }
   
    
})