//javascript for oblig2
var slideIndex = 0;
autoslide();

function autoslide(){
    var i;
    var x = document.getElementsByClassName("slider");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > x.length) { slideIndex = 1}
        x[slideIndex - 1].style.display = "block";
    setTimeout(autoslide, 3000);
}

function validerskjema(){
    var x = document.forms["validasjon"];
    if (x["fname"].value.length < 1 || x["fname"].value.length> 250 ){
        alert("Ugyldig fornavn!");
        return false;
    }
    if (x["lname"].value.length < 1 || x["lname"].value.length> 250 ){
        alert("Ugyldig etternavn!");
        return false;
    }
    if (x["age"].value < 3 || x["age"].value > 150 ){
        alert("Ugyldig alder");
        return false;
    }
    if (x["adr"].value.length < 1 || x["adr"].value.length > 100 ){
        alert("Ugyldig email");
        return false;
    }
    if (x["adr"].value < 8 || x["adr"].value > 8 ){
        alert("Ugyldig telefonnummer");
        return false;
    }
    if (x = true){
        alert("Takk for din hendvendelse!")
        return true;
    }

}
