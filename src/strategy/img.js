/**
 * 2019/1/16 上午11:05
 */
let {
    pos2precent
} = require("../util/pos2Precent");
let { print } = require("../util/print");

let $ = require("jquery");

function renderImg($img) {
    // print($img);
    pos2precent($img);
    // $img.remove();
    // let width = $img.width();
    // let height = $img.height();

    // let emptyImage =
    //     "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7";
    // $img.attr("src", emptyImage);

    // $img.css({
    //     background: "#eee",
    //     width: width + "px",
    //     height: height + "px",
    // });
}

module.exports = renderImg