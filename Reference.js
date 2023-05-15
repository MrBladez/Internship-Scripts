var myVariable = "Hello World";
function myFunction() {
    document.getElementById("myParagraph").innerHTML = myVariable
}
function NumEntered() {
    const Dot = document.getElementById("Create").value
    const message = `Your Number is ${Dot}.`
    alert(message);
}

