const { translate } = require('deepl-translator');
// const cors = require('cors');
// const express = require('express');
// let app = express();
// app.use(cors());
// app.options('*', cors());
// const translate = require('@k3rn31p4nic/google-translate-api');


let file = document.getElementById("document");

function populateTitle() {
    let potentialTitles = [
        "traductor",
        "tradukisto",
        "traduttore",
        "kääntäjä",
        "vertaler",
        "مترجم",
        "traducteur"
    ];
    let index = Math.floor(Math.random() * Math.floor(potentialTitles.length));
    document.getElementById("title").innerText = potentialTitles[index];
}

function generateBackground() {
    let hero = document.getElementById("background");
    let photo = new UnsplashPhoto();
    photo.randomize()
        .fromCategory("nature")
        .of(["mountains", "snow"])
        .size(1000, 1200)
        .fetch();
    hero.style.backgroundImage = "url(" + photo.url + ")";
    hero.style.backgroundRepeat = "no-repeat";
    hero.style.backgroundSize = "cover";
    hero.style.backgroundPosition = "center";
    console.log();
}

file.onchange = function(event) {
    let doc = file.files[0];
    document.getElementById("background").classList.add("is-hidden");
    document.getElementById("loading").classList.remove("is-hidden");
    Tesseract.recognize(doc, {
        lang: 'spa'
    }).then(function(result){
        console.log(result);
        document.getElementById("translation").innerHTML = result.html;
        document.getElementById("loading").classList.add("is-hidden");
        document.getElementById("results").classList.remove("is-hidden");
        // translate(result.text, {to: 'en'}).then(res => {
        //     console.log(res);
        //     document.getElementById("translation").innerHTML = res.text;
        //     document.getElementById("loading").classList.add("is-hidden");
        //     document.getElementById("results").classList.remove("is-hidden");
        // }).catch(err => {
        //     console.error(err);
        // });
        translate(result.html, 'EN')
            .then(res => {
                    document.getElementById("translation").innerHTML = result.html;
                    document.getElementById("loading").classList.add("is-hidden");
                    document.getElementById("results").classList.remove("is-hidden");
                }
            )
            .catch(console.error);
        // translate(result.text, { to: 'en' }).then(res => {
        //     console.log(res.text); // OUTPUT: You are amazing!
        // }).catch(err => {
        //     console.error(err);
        // });
    });
};

populateTitle();
generateBackground();