//https://teachablemachine.withgoogle.com/models/0a59h8Dm7/

function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/0a59h8Dm7/model.json', modelReady)
}

function modelReady() {
    console.log("Model Is Ready");
    classifier.classify(gotResults);
}

function gotResults(error, results) {
    if (error) {
        console.log(error);
    } else {
        console.log(results);
        document.getElementById("result_label").innerHTML = results[0].label;
        document.getElementById("result_confidence").innerHTML = results[0].confidence.toFixed(3);
        img = document.getElementById("Img")

        if (results[0].label == "Meowing") {
            img.src = "meowing.gif";
        } else if (results[0].label == "Mooing") {
            img.src = "mooing.gif";
        } else if (results[0].label == "barking") {
            img.src = "barking.gif";
        } else if (results[0].label == "roaring") {
            img.src = "tiger_roaring.gif";
        } else {
            img.src = "background_noise.gif";
        }
    }

}