

let songindex=0
let audio=new Audio('songs/1.mp3')
let playbutton=document.getElementById('playbutton')
let myprogressbar=document.getElementById('myprogressbar')
let gif=document.getElementById('gif')

let songs=[
{songname:"Haste Haste",filepath:"songs/1.mp3",path:"Song.jpg"},
{songname:"Haste Haste",filepath:"songs/1.mp3",path:"Song.jpg"},
{songname:"Haste Haste",filepath:"songs/1.mp3",path:"Song.jpg"},
{songname:"Haste Haste",filepath:"songs/1.mp3",path:"Song.jpg"},
{songname:"Haste Haste",filepath:"songs/1.mp3",path:"Song.jpg"},
{songname:"Haste Haste",filepath:"songs/1.mp3",path:"Song.jpg"},
{songname:"Haste Haste",filepath:"songs/1.mp3",path:"Song.jpg"},
{songname:"Haste Haste",filepath:"songs/1.mp3",path:"Song.jpg"},
{songname:"Haste Haste",filepath:"songs/1.mp3",path:"Song.jpg"},
{songname:"Haste Haste",filepath:"songs/1.mp3",path:"Song.jpg"}

]


playbutton.addEventListener("click",()=>{

    if(audio.paused || audio.currentTime<=0){
        audio.play();
        playbutton.classList.remove('fa-circle-play')
        playbutton.classList.add('fa-circle-pause')
        gif.style.opacity=1
    }

    else{
        audio.pause();
        playbutton.classList.remove('fa-circle-pause')
        playbutton.classList.add('fa-circle-play')
        gif.style.opacity=0
    }
})


audio.addEventListener('timeupdate',()=>{


    console.log("timeupdated")
    progress=parseInt((audio.currentTime/audio.duration)*100)
    console.log(progress)
    myprogressbar.value=progress
})


myprogressbar.addEventListener('change',()=>{

    audio.currentTime=(myprogressbar.value*audio.duration)/100
})