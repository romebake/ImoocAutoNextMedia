// ==UserScript==
// @name         ImoocAutoNextMedia - 慕课网自动播放下一节视频
// @namespace    https://greasyfork.org/
// @version      0.1.0
// @date         2018-07-29
// @author       romebake
// @blog         https://www.romebake.com
// @code         https://github.com/romebake/ImoocAutoNextMedia
// @description  慕课网自动播放下一节视频
// @match        *://*.imooc.com/*
// @icon         https://www.imooc.com/favicon.ico
// @grant        none
// ==/UserScript==

var nextMask = document.querySelector('div#next-mask');

var loop = setInterval(function () {
    if (nextMask.classList.contains('in')) {
        //console.log("Click imooc next media");
        document.querySelector('a.js-next-media').dispatchEvent(new MouseEvent('click'));
    }
}, 1000);