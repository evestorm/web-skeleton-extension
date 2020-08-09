/**
 * 2019/1/16 上午11:35
 */
let {
	pos2precent
} = require("../util/pos2Precent");
let { print } = require("../util/print");

let $ = require("jquery");

function renderUniView($dom) {
	// print($dom);
	if ($dom.attr("class") && $dom.attr("class").includes("uni-tabbar")) {
		print($dom);
	}

	// let domL = $dom.offset().left;
	// let domT = $dom.offset().top;
	// let innerW = $dom.outerWidth(true);
	// let innerH = $dom.outerHeight(true);
	// let bg = $dom.css("backgroundColor");
	// bg = bg ? bg : "transparent";
	pos2precent($dom, true);
	// $dom.remove();
}

module.exports = renderUniView;