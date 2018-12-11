const { translate, translateWithAlternatives } = require('./deepl-translator-tate/index');

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
    let img = document.getElementById("before-img");
    if(window.FileReader) {
        let reader = new FileReader();
        if (doc && doc.type.match('image.*')) {
            reader.readAsDataURL(doc);
        } else {
            img.src = "";
        }
        reader.onloadend = function (e) {
            img.src = reader.result;
        }
    }
    document.getElementById("background").classList.add("is-hidden");
    document.getElementById("loading").classList.remove("is-hidden");
    Tesseract.recognize(doc).then(function(result){
        document.getElementById("progress").innerText = "Successfully scanned document with " + result.confidence + "% confidence. Dope";
        translateWithAlternatives(result.text, 'EN')
            .then(res => {
                    document.getElementById("translation").innerHTML = res.translation;
                    document.getElementById("loading").classList.add("is-hidden");
                    document.getElementById("results").classList.remove("is-hidden");
                }
            )
            .catch(console.error);
    });
};

populateTitle();
generateBackground();