
   
    const  music = document.querySelector("audio");
    const img =  document.querySelector("img");
    const play = document.getElementById("play");
   const artist = document.getElementById("artist");
    const title = document.getElementById("title");
    const prev = document.getElementById("prev");
    const next = document.getElementById("next");

   const songs =  [ 
      {
        name: "Clouds",
        name1: "direction1.jpg",
        title: "Clouds",
        artist:" One direction",
    
    },
    {
        name: "justin-bebber.mp3",
        name1: "love_me",
        title: "love me like u ",
        artist: "Justin biber",
    },
    {
     name: "Cold",
     name1: "coldwater",
        title: "cold water" ,
        artist:  "Major lazer" ,
    }
    ] 
   

   let run = false;
         const playmusic    =() =>{
       run = true;
       music.play();
       play.classList.replace('fa-play', "fa-pause")

       img.classList.add('anime');
   } ;


      const   pausemusic = () =>{
       run = false;
       music.pause();
       play.classList.replace( "fa-pause" , 'fa-play'   );

       img.classList.remove('anime');
   } ;

   play.addEventListener("click",() => {
      if(run)
      {
          pausemusic();
      }
      else {
          playmusic();
      }
   } );


const loadsong = (songs) => {
title.textContent = songs.title;
artist.textContent = songs.artist;

music.src=""+ songs.name + ".mp3" ;
img.src=""+ songs.name1 + ".jpg";
};

songindex = 0;


const nextsong =() =>{
songindex = ( songindex  + 1)  % songs.length;

loadsong(songs[songindex]);
playmusic() ;
};

const prevsong =() =>{
songindex = ( songindex  - 1 + songs.length) %  songs.length ;

loadsong(songs[songindex]);
playmusic() ;
};

next.addEventListener("click", nextsong);
prev.addEventListener("click", prevsong);
