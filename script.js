// Javascript til burgermenu.
function myFunction() {

    let x = document.querySelector("#myLinks");

    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }
}
