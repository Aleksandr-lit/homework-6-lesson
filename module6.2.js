window.onload = function () {
	var divMove = document.querySelector(".div-move");
	var startRolling;
	var position = 0;
	var stopButton = document.querySelector("#stop-button");
	var screenWidth = screen.width - 150;

	stopButton.addEventListener('click', stopMove)
	divMove.addEventListener('click', startMovement);

	function startMovement() {
		startRolling = setInterval(() => {
			if (position == screenWidth) {
				position = 0;
			} else {
				++position
				divMove.style = `left: ${position}px`
			};
		}, 2);
	};

	function stopMove() {
		clearInterval(startRolling);
	};
};