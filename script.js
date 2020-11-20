//========== BUTTON ==========
let buttonCymbalCrash = document.getElementById("cymbalCrash")
let buttonTom = document.getElementById("tom")
let buttonTom2 = document.getElementById("tom2")
let buttonCymbalRide = document.getElementById("cymbalRide")

let buttonHihatClose = document.getElementById("hihatClose")
let buttonSnare = document.getElementById("snare")
let buttonFlorTom = document.getElementById("florTom")
let buttonHihatOpen= document.getElementById("hihatOpen")

let buttonBassDrum = document.getElementById("bassDrum")

//============== SUARA ==============

let suaraCymbalCrash = document.getElementById("cymbalCrashSong")
let suaraTom = document.getElementById("tomSong")
let suaraTom2 = document.getElementById("tom2Song")
let suaraCymbalRide = document.getElementById("cymbalRideSong")

let suaraHihatClose = document.getElementById("hihatCloseSong")
let suaraSnare = document.getElementById("snareSong")
let suaraFlorTom = document.getElementById("floorTomSong")
let suaraHihatOpen= document.getElementById("hihatOpenSong")

let suaraBassDrum = document.getElementById("bassDrumSong")
alert("whatsap bro!! This is Room for the Drummers")
// prompt("pleas input your name", "name")
prompt("pleas input your name", "name")
// let divPembukaan = document.getElementById("pembukaan")
// if(nama){
//     let hasil = nama
// }
//==========================BUAT PRESS KEYBOARD=======================

//=====> line1 <=======
document.addEventListener("keypress", function (e){
    console.log(e.key)
    if(e.key === "r"){
        suaraCymbalCrash.play()
    }
})
document.addEventListener("keypress", function (e){
    console.log(e.key)
    if(e.key === "f"){
        suaraTom.play()
    }
})
document.addEventListener("keypress", function (e){
    console.log(e.key)
    if(e.key === "g"){
        suaraTom2.play()
    }
})
document.addEventListener("keypress", function (e){
    console.log(e.key)
    if(e.key === "u"){
        suaraCymbalRide.play()
    }
})

//=======> line 2 <=======

document.addEventListener("keypress", function (e){
    console.log(e.key)
    if(e.key === "c"){
        suaraHihatClose.play()
    }
})
document.addEventListener("keypress", function (e){
    console.log(e.key)
    if(e.key === "v"){
        suaraSnare.play()
    }
})
document.addEventListener("keypress", function (e){
    console.log(e.key)
    if(e.key === "h"){
        suaraFlorTom.play()
    }
})
document.addEventListener("keypress", function (e){
    console.log(e.key)
    if(e.key === "x"){
        suaraHihatOpen.play()
    }
})

//========> line 3 <=========

document.addEventListener("keypress", function (e){
    console.log(e.key)
    if(e.key === "b"){
        suaraBassDrum.play()
    }
})
//=================================BUAT TOMBOL========================
buttonCymbalCrash.addEventListener("click", function(){
    suaraCymbalCrash.play()
})
buttonTom.addEventListener("click", function(){
    suaraTom.play()
})
buttonTom2.addEventListener("click", function(){
    suaraTom2.play()
})
buttonCymbalRide.addEventListener("click", function(){
    suaraCymbalRide.play()
})

buttonHihatClose.addEventListener("click", function(){
    suaraHihatClose.play()
})
buttonSnare.addEventListener("click", function(){
    suaraSnare.play()
})
buttonFlorTom.addEventListener("click", function(){
    suaraFlorTom.play()
})
buttonHihatOpen .addEventListener("click", function(){
    suaraHihatOpen .play()
})

buttonBassDrum.addEventListener("click", function(){
    suaraBassDrum.play()
})

