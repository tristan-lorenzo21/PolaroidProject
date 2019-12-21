"use strict"
let log = console.log;
let state = 0;
let greece = "https://st2.depositphotos.com/1007905/8385/i/950/depositphotos_83857430-stock-photo-vintage-styled-santorini.jpg";
let objArray = [];
let counter = 0;

let newImg = document.getElementById("image-url2");
let newDesc = document.getElementById("image-desc2");

let img = document.getElementById("image2");
let desc = document.getElementById("text-description");

let imgInput = document.getElementById("image-url2");
let descInput = document.getElementById("image-desc2");

let PictureObj = {
    link: imgInput.value,
    name: descInput.value
}

document.getElementById("button").addEventListener("click", function(event){
    event.preventDefault();

    img.setAttribute("src", newImg.value)
    desc.innerHTML = newDesc.value;

    let urlValidator = imgInput.value.includes(".com");

    if (imgInput.value.length === 0 || descInput.value.length === 0 || urlValidator === false) {
        img.setAttribute("src", greece);
        desc.innerHTML = "Santorini, Greece";

        alert("You need to input a new image and description")
    } 

    objArray.push(PictureObj);

    log(objArray);
})

function darkMode() {
    log (state);

    let elem = document.getElementById("mode-button");

    if(state === 0){
        document.body.style.background = "#353C51";
        state = 1;
        elem.value = "Light Mode";
        document.body.style.color = "white";
        document.getElementById("text-description").style.color = "black"
    }else{
        document.body.style.background = "initial";
        state = 0;
        elem.value = "Dark Mode";
        document.body.style.color = "initial"
    }
}

function nextImg () {
    if(counter == objArray.length) {
        counter -= 1
    } else {
        counter++
    }

    img.setAttribute("src", objArray[counter].link);
    desc.innerHTML = objArray[counter].name;

    log(counter);
}

function previousImg() {
    if(counter <= 0) {
        counter = 0
    } else {
        counter--
    }

    img.setAttribute("src", objArray[counter].link);
    desc.innerHTML = objArray[counter].name;

    log(counter);
}

$("#target").click(function() {
    alert("What's up!")
}) 
