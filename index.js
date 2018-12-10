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
    document.getElementById("background").classList.add("is-hidden");
    document.getElementById("loading").classList.remove("is-hidden");
    Tesseract.recognize(doc, {
        lang: 'spa'
    }).then(function(result){
        console.log(result);
        document.getElementById("translation").innerHTML = result.html;
        translateWithAlternatives(result.html, 'EN')
            .then(res => {
                    console.log(res);
                    document.getElementById("translation").innerHTML = res.html;
                    document.getElementById("loading").classList.add("is-hidden");
                    document.getElementById("results").classList.remove("is-hidden");
                }
            )
            .catch(console.error);
    });
};

populateTitle();
generateBackground();