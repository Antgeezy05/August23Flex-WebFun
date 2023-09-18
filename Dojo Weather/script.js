function Loading() {
    alert("Loading weather report...");

    console.log("Loading weather report...");
}
function accept(element) {
    element.remove();
} 

var nameCo = document.querySelector("#cook");

console.log(cook);

function hide(element) {
    element.remove(nameCo)
}

/*function to convert fahrenheit to celsius*/


function convertFtoC() {
    var fTemp = document.getElementById("fahrenheit").value;
    var cTemp = (fTemp - 32) * 5 / 9;
    document.getElementById("celsius").value = cTemp;
}
