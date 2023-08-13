subBtn = document.getElementById("sub");
pChange = document.getElementById("catSays");
imgItem = document.getElementById("catImg");
wishItem = document.querySelector("input");
titleItem = document.getElementById("pageTitle");

let newCat;
let newTxt;

subBtn.addEventListener("click", event =>{
    event.preventDefault();
    fetch("https://api.thecatapi.com/v1/images/search?api_key=live_09KLPTd9892Jyfre3NF81kMf1fT2AQHapOhHCHpwvTVFOfYNp1Tk1SWvEJsDGczW")
        .then(function(response) {
            return response.json();
        })
        .then(function(myJson){
            newCat = myJson[0].url
            imgItem.innerHTML = `<img src = "${newCat}" width = "395px" height = "363px">` 
        });

    fetch(`https://api.funtranslations.com/translate/pirate.json?text=${wishItem.value}`)
        .then(function(response2) {
            return response2.json();
        })
        .then(function(myJson2){
            newTxt = myJson2.contents.translated;
            pChange.innerHTML = `Aye bruh, I can't make your wishes come true. I am a cat. But here is the translation of your wish in Pirate language -> ${newTxt}`
        });
    
    titleItem.innerHTML = "The Fraudulent, Pirate Translating Cats"
    
})