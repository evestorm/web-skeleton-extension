let $ = require("jquery");
let index = 1;

function pos2precent($dom, ignore=false) {
   let deviceW = $(window).width();
   let deviceH = $(window).height();
   let domL = $dom.offset().left;
   let domT = $dom.offset().top;
   let innerW = $dom.innerWidth();
   let innerH = $dom.innerHeight();
   let zIdx = $dom.css("z-index");
   // console.log({
   //    dom: $dom[0].textContent,
   //    color: $dom.css("backgroundColor"),
   //    deviceH,
   //    domL,
   //    domT,
   //    innerW,
   //    innerH,
   // });
   // console.log($dom.css("backgroundColor"));
   let bg = $dom.css("backgroundColor");
   bg = bg ? bg : 'transparent'
   var $p = $("<p></p>").css({
		position: "absolute",
		zIndex: zIdx ? index + 1 : index,
		borderRadius: "0% / 0%",
		background: ignore ? bg : "#EEEEEE",
		width: 100 * (innerW / deviceW) + "%",
		paddingBottom: 100 * (innerH / deviceH / (deviceW / deviceH)) + "%",
		left: 100 * (domL / deviceW) + "%",
		marginTop: 100 * (domT / deviceH / (deviceW / deviceH)) + "%",
	});
   $p.attr("tagName", $dom.prop("tagName"));
   $p.attr("className", $dom.attr("class"))
   $("body").append($p);
   index++;
}

export { pos2precent };