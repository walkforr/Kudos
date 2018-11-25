var modal = document.getElementById('myModal');
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];
btn.onclick = function() {
    modal.style.display = "block";
}
span.onclick = function() {
    modal.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// var modal2 = document.getElementById('myModal2');
// var signin = document.getElementById("signIn");
// var span2 = document.getElementsByClassName("close2")[0];
// signin.onclick = function() {
//     modal2.style.display = "block";
// }
// span2.onclick = function() {
//     modal2.style.display = "none";
// }
// window.onclick = function(event) {
//     if (event.target == modal2) {
//         modal2.style.display = "none";
//     }
// }


var modal3 = document.getElementById('myModal3');
var signup = document.getElementById("signUp");
var span3 = document.getElementsByClassName("close3")[0];
signup.onclick = function() {
    modal3.style.display = "block";
}
span3.onclick = function() {
    modal3.style.display = "none";
}
window.onclick = function(event) {
    if (event.target == modal3) {
        modal3.style.display = "none";
    }
}