// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span1 = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span1.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


// Get the modal
var sign = document.getElementById('myModalSign');
// Get the button that opens the modal
var btnSign = document.getElementById("signBtn");
// Get the <span> element that closes the modal
var span2 = document.getElementsByClassName("close")[1];
// When the user clicks on the button, open the modal 
btnSign.onclick = function() {
    sign.style.display = "block";
}
// When the user clicks on <span> (x), close the modal
span2.onclick = function() {
    sign.style.display = "none";
}
// When the user clicks anywhere outside of the modal, close it
// window.onclick = function(event) {
    
// }




var currentSlide = 0;

showSlides ( 0 );

function showSlides( n ) {
	
	var slides = document.getElementsByClassName('review__slide');

	if (n == slides.length) {
		n = 0;
	}

	if (n < 0) {
		n = slides.length-1;
	}

	for( var i = 0; i < slides.length; i++){
		slides[i].style.display = "none";
	}

	slides[n].style.display = "flex";

	currentSlide = n;

	// setTimeout(clickRight, 3000);

}

function clickRight() {
	currentSlide++;
	showSlides( currentSlide );
}

function clickLeft() {
	currentSlide--;
	showSlides( currentSlide);
}


function myFunction(x) {
    document.getElementById("myDropdown").classList.toggle("show");
    x.classList.toggle("change");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  	if (event.target == sign) {
        sign.style.display = "none";
    }else if (event.target == modal) {
        modal.style.display = "none";
    }

  else if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
        document.getElementsByClassName('dropbtn')[0].classList.toggle("change");
        ;
      }
    }
  }
}