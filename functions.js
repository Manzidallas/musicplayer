
let progress = document.getElementById("progress");
// progress.max = song.duration;
let song = document.getElementById("song");
let ctrlicon = document.getElementById("play");
ctrlicon.innerHTML = "play_arrow";
let checker = '';

song.onloadedmetadata = function(){
    progress.max = song.duration;
    progress.value = song.currentTime;
    console.log(song.duration)
}


// console.log(song);



function playpause(){
    if(ctrlicon.innerHTML === "play_arrow"){
        song.play();
        checker = "Song is Playing Now";
        console.log(checker);
        ctrlicon.innerHTML = "stop";

        if(song.play()){
            setInterval(() => {
                progress.value = song.currentTime;
                // progress.max = song.duration;
            }, 500);
        }
    }else{
        song.pause();
        ctrlicon.innerHTML = "play_arrow";
        checker = "Song is Paused";
        console.log(checker);

    }

progress.onchange = function(){
    song.play();
    song.currentTime = progress.value;
    ctrlicon.innerHTML = "stop";
}
    
    
}
    


// if(song.play()){
//     setInterval(() => {
//         progress.value = song.currentTime;
//     }, 500);
// }

console.log(ctrlicon.innerHTML);