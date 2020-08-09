let $ = require("jquery");

function print($dom) {
   // console.log($dom);
	// let deviceW = $(window).width();
	// let deviceH = $(window).height();
	let domL = $dom.offset().left;
	let domT = $dom.offset().top;
	let innerW = $dom.outerWidth();
	let innerH = $dom.outerHeight();
	console.log({
	   dom: $dom[0].textContent,
	   color: $dom.css("backgroundColor"),
	   // deviceH,
	   domL,
	   domT,
	   innerW,
	   innerH,
	});
}

export { print };
