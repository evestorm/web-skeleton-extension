let {
    pos2precent
} = require("../util/pos2Precent");
let { print } = require("../util/print");

let $ = require("jquery");
module.exports = function ($dom) {
    // print($dom)
    pos2precent($dom);
    // $dom.remove();
    // const classname = "sk-button";
	// $node.addClass(classname);
}