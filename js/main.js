$(function(){

	var winW1 = window.innerWidth;
	var winH1 = window.innerHeight;

	if (winW1 < winH1 ) {
		$('#imgaccueil').css("width",winW1);
		$('#imgaccueil').css("height","auto");
	} else {
		$('#imgaccueil').css("height",winH1);
		$('#imgaccueil').css("width","auto");
	}
	
	$(window).resize(function () {
		var winW2 = window.innerWidth;
		var winH2 = window.innerHeight;

		if (winW2 < winH2 ) {
			$('#imgaccueil').css("width",winW2);
			$('#imgaccueil').css("height","auto");
		} else {
			$('#imgaccueil').css("height",winH2);
			$('#imgaccueil').css("width","auto");
		}
	});
	
	$(window).scroll(function () {
		if ($(this).scrollTop() > 250) {
			$('#manavbar').css("margin-top","0px");
		} else {
			$('#manavbar').css("margin-top","-51px");
		}
	});
});

	
