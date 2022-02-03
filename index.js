const changeImage = document.querySelector('.video-container');
let changeImageStyles = changeImage.style;
changeImageStyles.backgroundImage = 'url("assets/img/forest.jpg")';

const playButton = document.querySelector('.video-container img');
let flagBtn = 0;

const audio = document.querySelector('audio');
audio.src = 'assets/audio/forest.mp3';

const navItem = document.querySelectorAll('.nav-list a');

navItem.forEach(x => {
    x.addEventListener('mouseenter', function (){
        x.style.color = 'goldenrod';
    });

    x.addEventListener('mouseleave', function (){
        if (x.style.color !== 'darkgoldenrod') {
            x.style.color = 'white';
        }
    });
});

function changeColorBtn(b1){
    navItem.forEach(x => {
        x.style.color = 'white';
    });
    navItem[b1].style.color = 'darkgoldenrod';
}

function player(){
    if (flagBtn === 1){
        playButton.setAttribute('src', 'assets/svg/play.svg');
        audio.pause();
        flagBtn = 0;
    } else {
        playButton.setAttribute('src', 'assets/svg/pause.svg');
        audio.currentTime = 0;
        audio.play();
        flagBtn = 1;
    }
}

playButton.addEventListener('click', player);

const solovey = document.querySelector('.nav-list #solovey');
solovey.addEventListener('click', function (){
    audio.src = 'assets/audio/solovey.mp3';
    changeImageStyles.backgroundImage = 'url("assets/img/solovey.jpg")';
    flagBtn = 0;
    changeColorBtn(0);
    player();
});
const drozd = document.querySelector('.nav-list #drozd');
drozd.addEventListener('click', function (){
    audio.src = 'assets/audio/drozd.mp3';
    changeImageStyles.backgroundImage = 'url("assets/img/drozd.jpg")';
    flagBtn = 0;
    changeColorBtn(1);
    player();
});
const malinovka = document.querySelector('.nav-list #malinovka');
malinovka.addEventListener('click', function (){
    audio.src = 'assets/audio/zarynka.mp3';
    changeImageStyles.backgroundImage = 'url("assets/img/zarynka.jpg")';
    flagBtn = 0;
    changeColorBtn(2);
    player();
});
const zhavoronok = document.querySelector('.nav-list #zhavoronok');
zhavoronok.addEventListener('click', function (){
    audio.src = 'assets/audio/javoronok.mp3';
    changeImageStyles.backgroundImage = 'url("assets/img/javoronok.jpg")';
    flagBtn = 0;
    changeColorBtn(3);
    player();
});
const slavka = document.querySelector('.nav-list #slavka');
slavka.addEventListener('click', function (){
    audio.src = 'assets/audio/slavka.mp3';
    changeImageStyles.backgroundImage = 'url("assets/img/slavka.jpg")';
    flagBtn = 0;
    changeColorBtn(4);
    player();
});

