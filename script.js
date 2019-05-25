window.addEventListener("load", sidenVises);



//---------------------------------BURGER MENU----------------------
function sidenVises() {
    console.log("sidenVises");

    document.querySelector("#menuknap").addEventListener("click", toggleMenu);


}


function toggleMenu() {
    console.log("toggleMenu");
    document.querySelector("#menu").classList.toggle("hidden");

    let erSkjult = document.querySelector("#menu").classList.contains("hidden");

    if (erSkjult == true) {
        document.querySelector("#menuknap").textContent = "☰";
    } else {
        document.querySelector("#menuknap").textContent = "X";
    }
}
//---------------------------------BURGER MENU SLUT----------------------

//---------------------------------LOGIN SKÆRM------------------------

function clickMaterialer() {
    console.log("clickMaterialer");
    document.querySelector(".flexwrapper").addEventListener("click", clickMaterialer.html);
}


//---------------------------------LOGIN SKÆRM SLUT------------------------

function myFunction() {
    document.querySelector("flexwrapper").addEventListener location.replace("click", "https://www.w3schools.com")
}
