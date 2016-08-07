/**
 * Created by Weil on 16/2/18.
 */
'use strict';

let s1 = new Set([1, 3, 5, 6]);
let s2 = new Set([1, 5, 8, 9]);

let sbj = new Set([...s1, ...s2]);
let sjj = new Set([...s1].filter(item => s2.has(item)));
let scj = new Set([...s1].filter(item => !s2.has(item)));

console.log(sbj, sjj, scj);


let Math = function () {

};

Math.prototype.add = function () {

};

function ajax ({url = 'url_default', method = 'method_default'} = {}) {
  console.log(url, method);
}

function ajax2 ({url, method} = {url: 'url_default', method: 'method_default'}) {
  console.log(url, method);
}

ajax({
  url: 'https://www.baidu.com'
});

ajax2({
  url: 'https://www.baidu.com'
});







