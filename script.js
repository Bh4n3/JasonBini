var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
	var currentScrollPos = window.pageYOffset;
	if (prevScrollpos > currentScrollPos) {
		document.getElementById("navbar").style.opacity = "1";

		if (document.documentElement.scrollTop < 1) {
			document.getElementById("navbar").style.backgroundColor = "transparent";
		} else {
			document.getElementById("navbar").style.backgroundColor = "black";
			document.getElementById("navbar").style.height = "100px";
		}
	} else {
		document.getElementById("navbar").style.opacity = "0";
		document.getElementById("navbar").style.height = "0px";
	}
	prevScrollpos = currentScrollPos;
};
