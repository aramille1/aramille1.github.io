
var menu = document.getElementById('menu');
var contact = document.getElementById('contact');


// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  	if (event.target == menu) {
        menu.style.display = "none";
    }else if (event.target == contact) {
        contact.style.display = "none";
    }
}