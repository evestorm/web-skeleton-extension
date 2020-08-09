
let { pos2precent } = require("../util/pos2Precent");
let { print } = require("../util/print");
let $ = require("jquery");

module.exports = function ($dom){
    // print($dom);
    // $dom.addClass("sk-bg");
    pos2precent($dom);
	// $dom.remove();
}
