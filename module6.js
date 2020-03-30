window.onload = function () {
	var movingElement = document.getElementById('movingelement');

	movingElement.onmousedown = function(e) {
		var coords = getCoords(movingElement); 
		var shiftX = e.pageX - coords.left; 
		var shiftY = e.pageY - coords.top; 
		document.body.appendChild(movingElement); 
		moveAt(e); 

		function moveAt(e) { 
			movingElement.style.left = e.pageX - shiftX + 'px'; 
			movingElement.style.top = e.pageY - shiftY + 'px'; 
		}; 

		document.onmousemove = function(e) { 
			moveAt(e); 
		}; 

		movingElement.onmouseup = function() { 
			document.onmousemove = null; 
			movingElement.onmouseup = null; 
		};
	}; 

	movingElement.ondragstart = function() {
		return false;
	};

	function getCoords(elem) { 
		var box = elem.getBoundingClientRect(); 
		return { 
			top: box.top + pageYOffset, 
			left: box.left + pageXOffset 
		}; 
	};
};