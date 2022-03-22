console.log("welcome to spotify");
//

let songIndex=0;
let Gif = document.getElementById('Gif');
let masterplay = document.getElementById('masterplay');

let masterSongName = document.getElementById('masterSongName');
masterSongName.innerText="Warriyo - Mortals [NCS Release]";
let myProgressBar = document.getElementById('myProgressBar');
let songItems = Array.from(document.getElementsByClassName('songItem'));
let songs = [
    {songName: "Warriyo - Mortals [NCS Release]", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
    {songName: "Cielo - Huma-Huma", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
    {songName: "DEAF KEV - Invincible [NCS Release]-320k", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
    {songName: "Different Heaven & EH!DE - My Heart [NCS Release]", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
    {songName: "Janji-Heroes-Tonight-feat-Johnning-NCS-Release", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
    {songName: "Rabba - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/6.jpg"},
    {songName: "Sakhiyaan - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/7.jpg"},
    {songName: "Bhula Dena - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/8.jpg"},
    {songName: "Tumhari Kasam - Salam-e-Ishq", filePath: "songs/2.mp3", coverPath: "covers/9.jpg"},
    {songName: "Na Jaana - Salam-e-Ishq", filePath: "songs/4.mp3", coverPath: "covers/10.jpg"},
]


songItems.forEach((element, i)=>{ 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath; 
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName; 
})
 

 
    let audiop = new Audio('songs/1.mp3');
    //audiop.play();

    // Handle play/pause click
    masterplay.addEventListener('click',()=>{
        masterSongName.innerText = songs[songIndex].songName;
        if(audiop.paused || audiop.currentTime<=0)
        {
            audiop.play();
            masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add('fa-pause-circle');
            Gif.style.opacity =1;
        }
        else{
            audiop.pause();
            masterplay.classList.remove('fa-pause-circle');
            masterplay.classList.add('fa-play-circle');
            Gif.style.opacity=0;
        }

    })

    audiop.addEventListener('timeupdate',()=>{
    console.log('timeupdate')
    progress = parseInt((audiop.currentTime/audiop.duration)*100);
    console.log(progress);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change',()=>{
audiop.currentTime= (myProgressBar.value*audiop.duration)/100;
})

const makeAllPlays =()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach(element =>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
    
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((elements) => {
        elements.addEventListener('click', (e) => {
            console.log(e.target);
            makeAllPlays();
            songIndex =parseInt(e.target.id);
            masterSongName.innerText = songs[songIndex].songName;  
            e.target.classList.remove('fa-play-circle');
                e.target.classList.add('fa-pause-circle')
                audiop.src=`songs/${songIndex+1}.mp3`;
                audiop.currentTime =0;
                masterplay.classList.remove('fa-play-circle');
            masterplay.classList.add('fa-pause-circle');
                audiop.play();
                Gif.style.opacity =1;
        })
    })
    document.getElementById('next').addEventListener('click', ()=>{
        if(songIndex>=9)
        {
            songIndex=0;
        }
        else{
            songIndex=songIndex+1;

        }
        audiop.src=`songs/${songIndex+1}.mp3`;
        audiop.currentTime=0;
        audiop.play();
        Gif.style.opacity =1;
        masterSongName.innerText = songs[songIndex].songName;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
         
    })
    document.getElementById('previous').addEventListener('click',()=>{
        if(songIndex<=0)
        {
            songIndex=9;
        }
        else{
            songIndex=songIndex-1;

        }
        audiop.src=`songs/${songIndex+1}.mp3`;
        audiop.currentTime=0;
        audiop.play();
        Gif.style.opacity =1;
        masterSongName.innerText = songs[songIndex].songName;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })