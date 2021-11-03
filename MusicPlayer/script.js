console.log("Welcome");
let songIndex =0;
let audioElement =new Audio("Beggin.mp3");
let masterPlay = document.getElementById('masterPlay');
let myPlayer = document.getElementById('myPlayer');
let gif = document.getElementById('gif');
let songs =[
    {songName: "Beggin" , filePath: "Beggin.mp3" , coverPath: "beggin.jpg"},
    {songName: "dead to me" , filePath: "Beggin.mp3" , coverPath: "dead.png"},
    {songName: "goosebumps" , filePath: "Beggin.mp3" , coverPath: "gb.jpg"},
    {songName: "heat waves" , filePath: "Beggin.mp3" , coverPath: "heat.jpg"},
    {songName: "mama said" , filePath: "Beggin.mp3" , coverPath: "mama.jpg"},
    {songName: "wildest dreams" , filePath: "Beggin.mp3" , coverPath: "wild.jpg"},
    {songName: "into you" , filePath: "Beggin.mp3" , coverPath: "into.jpg"}
]

//audioElement.play();
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime <=0)
    {
        // if paused ==true ot song time is less than or equal to zero that it hasnt began playing
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity =1;
    }
    else 
    {
         audioElement.pause();
         masterPlay.classList.remove('fa-pause-circle');
         masterPlay.classList.add('fa-play-circle');
         gif.style.opacity =0;
    }
})
// listen to events 
audioElement.addEventListener('timeupdate', ()=>
{
    console.log('timeupdate');
    progress =parseInt((audioElement.currentTime/audioElement.duration)*100);
    myPlayer.value =progress;
})

myPlayer.addEventListener('change', ()=>{
    audioElement.currentTime = myPlayer.value *audioElement.duration/100;

})