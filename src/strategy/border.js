/**
 * 2019/1/16 下午2:37
 */
let {
    pos2precent
} = require("../util/pos2Precent");
let { print } = require("../util/print");

let $ = require("jquery");

function renderBorder($dom) {
    // print($dom)
    pos2precent($dom);
    // $dom.remove();
    // $dom.addClass("sk-border");
}

module.exports = renderBorder