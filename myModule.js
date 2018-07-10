;(function() {
	var stringWelcome = "Welcome";

	function main(name) {
		stringWelcome += " " + name;
		return stringWelcome;
	}
	window.Welcome = main;
})();