/**
 * 2019/1/16 上午11:35
 */
let {
    pos2precent
} = require("../util/pos2Precent");
let {
    print
} = require("../util/print");

let $ = require("jquery");

function renderBlock($dom) {
    // print($dom)
    // $dom.addClass("sk-block");
    pos2precent($dom);
    // $dom.remove();
}

module.exports = renderBlock