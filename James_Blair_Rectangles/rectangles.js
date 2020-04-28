// color the rectangle and move them randomlyi
// Today's goal :
//   - rectangles randomly are colored when the color button is clicked
//   - when the select is changed the number of rectangles changes to match it

// in the next class we will make the move function work

// here is a road map of the functions you need to implement.

//Note at the bottom
//    -James

(function() {
	"use strict";

	window.onload = function() {
		var colorButton = document.getElementById("color");
		colorButton.onclick = colorIt;

		var moveButton = document.getElementById("move");
		moveButton.onclick = moveIt;

		var numSelect = document.getElementById("count");
		numSelect.onchange = createRectangles;

		createRectangles();
		colorIt();
		moveIt();
	};

	// creates the number of rectangles specified in the select.
	function createRectangles() {
		document.getElementById("rectanglearea").innerHTML = "";
		var count = document.getElementById("count").value;
		let rectanglearea = document.getElementById("rectanglearea");
		for(let i = count; i > 0; i--){
			let newRectangle = document.createElement("div");
			newRectangle.classList.add("rectangle");
			//console.log("Loop needs to run", i, "more times");
			rectanglearea.appendChild(newRectangle);
		}
		// finish the functions here

	}

   	// Randomly color all of the rectangles
    function colorIt() {
			let allRectangles = document.getElementsByClassName("rectangle");
			for (let i = 0; i < allRectangles.length; i++){
				var r = Math.floor(Math.random() * 256);
				var g = Math.floor(Math.random() * 256);
				var b = Math.floor(Math.random() * 256);
				let rgbaValue = "rgba(" + r + "," + b + "," + g + "," + 0.65 + ")";
				//console.log(rgbaValue);
				allRectangles[i].style.backgroundColor = rgbaValue;
				//console.log(allRectangles[i]);
				//console.log(r, g, b);
				//console.log("rgb(", r, ",", b, ",", g, ")");
			}
    	// your code goes here
    	//you might find the following code snippts useful
    	//var r = Math.floor(Math.random() * 256);
    }

    // // WARNING: incomplete
	// Randomly position all the rectangles
	function moveIt() {
		var rects = document.querySelectorAll("#rectanglearea .rectangle");
		var area = document.getElementById("rectanglearea");
		for(var i = 0; i < rects.length; i++) {
			rects[i].style.position = "absolute";
			var leftPosition = Math.floor(Math.random() * 647);
			var topPosition = Math.floor(Math.random() * 447);
			rects[i].style.left = leftPosition + "px";
			rects[i].style.top = topPosition + "px";
			//console.log(rects[i]);
		}
	}
//Wasn't sure if I should exclude the rectangles outside the box from
//being affected by the colorIt function, but it was in one of the examples
//so I figured it was fine.


})();
