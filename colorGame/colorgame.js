var numSquares = 6;
var colors = [];
var pickedColor;
var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var modeButtons = document.querySelectorAll(".mode");

init();

function init(){
	setupModeButtons();
	setupSquares();
	reset();
}

function setupSquares(){
	for (var i = 0; i < squares.length; i++){
		squares[i].addEventListener("click", function(){
			//grab color of clicked square
			var clickedColor = this.style.backgroundColor;
			//compare color to pickedColor
			if (clickedColor === pickedColor) {
				messageDisplay.textContent = "correct!";
				resetButton.textContent = "PLAY AGAIN?";
				changeColors(clickedColor);
				h1.style.backgroundColor = clickedColor;
			}else{
				this.style.backgroundColor = "#232323";
				messageDisplay.textContent = "Try again!";
			}
		})
	}
}

function setupModeButtons(){
	for ( var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
		});
	}
}


function reset(){
	colors = generateRandomColors(numSquares);
	//pick a new random color from array
	pickedColor = pickColor();
	//change colorDisplay to match pickedColor;
	colorDisplay.textContent = pickedColor;
	resetButton.textContent = "New Colors";
	messageDisplay.textContent = "";
	//change colors of squares	
	for (var i = 0; i < squares.length; i++){
		if (colors[i]) {
			squares[i].style.display = "block";
			squares[i].style.backgroundColor = colors[i];	
		} else{
			squares[i].style.display = "none";
		}
	}
	h1.style.backgroundColor = "steelblue";
}

resetButton.addEventListener("click", function(){
	reset();
})

function changeColors(color){
	for(var i = 0; i < colors.length; i++){
		squares[i].style.backgroundColor = color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	//make an array
	var arr = [];
	//repeat num times
	for (var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	//return that arr 
	return arr;
}

function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")";
}

