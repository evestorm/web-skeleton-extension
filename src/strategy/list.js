let {
    pos2precent
} = require("../util/pos2Precent");
let { print } = require("../util/print");

let $ = require("jquery");
module.exports = function renderList($dom) {
    // print($dom)
    pos2precent($dom);
    // $dom.remove();
    // $dom.addClass("sk-list");

    // let $children = $dom.children();
    // let $child = $children.first();
    // let len = $children.length;

    // // 列表元素子节点统一，保证页面骨架整齐
    // for (let i = 1; i < len; ++i) {
    //     $children.eq(i).remove();
    // }
    // for (let i = 1; i < len; i++) {
    //     let tmp = $child.clone(true);
    //     $dom.append(tmp);
    // }
}