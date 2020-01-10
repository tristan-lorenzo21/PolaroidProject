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

let comValidator = imgInput.value.includes(".com");
let netValidator= imgInput.value.includes(".net");

document.getElementById("submit-button").addEventListener("click", function(event){
    event.preventDefault();

    img.setAttribute("src", newImg.value);
    desc.innerHTML = newDesc.value;

    if (imgInput.value.length === 0 || descInput.value.length === 0 || comValidator === true || netValidator === true) {
        img.setAttribute("src", greece);
        desc.innerHTML = "Santorini, Greece";

        alert("You need to input a new image and description")
    } 
    
    let PictureObj = {
        link: imgInput.value,
        name: descInput.value
    }

    objArray.push(PictureObj);

    log(objArray);

    counter == objArray.length - 1;
})

function darkMode() {
    log (state);

    let elem = document.getElementById("mode-button");

    if(state === 0){
        document.body.style.background = "#494949";
        state = 1;
        elem.value = "Light Mode";
        document.body.style.color = "white";
        document.getElementById("text-description").style.color = "black";
        document.getElementById("submit-button").style.background = "white";
        document.getElementById("submit-button").style.color = "#494949";
    }else{
        document.body.style.background = "initial";
        state = 0;
        elem.value = "Dark Mode";
        document.body.style.color = "initial"
        document.getElementById("submit-button").style.background = "#494949";
        document.getElementById("submit-button").style.color = "white";
    }
}

function nextImg () {
    if(counter == objArray.length - 1) {
        counter = objArray.length - 1
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
    objArray.length = 0;

    img.setAttribute("src", greece);
    desc.innerHTML = "Santorini, Greece";
}) 

function helloWorld() {
    log("Hello World!");
}
