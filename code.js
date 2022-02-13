let enterCodePage = document.getElementById("entercodepage");
let mapPage = document.getElementById("mappage");
let guidePage = document.getElementById("guidepage");
let codeInput = document.getElementById("codeinput");
let loadMapButton = document.getElementById("loadmapbutton");
let newMapButton = document.getElementById("newmapbutton");
let guideButton = document.getElementById("guidebutton");
let guideBackButton = document.getElementById("guidebackbutton");

enterCodePage.style.display = "block";
mapPage.style.display = "none";
guidePage.style.display = "none";

let mapOpen = false;

function loadMapButtonClicked(){
    enterCodePage.style.display = "none";
    mapPage.style.display = "block";
}
loadMapButton.addEventListener("click", loadMapButtonClicked);

function newMapButtonClicked(){
    enterCodePage.style.display = "none";
    mapPage.style.display = "block";
}
newMapButton.addEventListener("click", newMapButtonClicked);

function guideButtonClicked(){
    enterCodePage.style.display = "none";
    guidePage.style.display = "block";
    document.body.style.background = "#ffb3b3";
}
guideButton.addEventListener("click", guideButtonClicked);

function guideBackButtonClicked(){
    if (mapOpen) {
        mapPage.style.display = "block";
    } else {
        enterCodePage.style.display = "block";
        document.body.style.background = "#b3987d";
    }
    guidePage.style.display = "none";
}
guideBackButton.addEventListener("click", guideBackButtonClicked);