/* This Source Code Form is subject to the terms of the Mozilla Public
 * License, v. 2.0. If a copy of the MPL was not distributed with this
 * file, You can obtain one at http://mozilla.org/MPL/2.0/. */

(function (Mozilla) {
    'use strict';

    var hero = document.querySelector('.hero');
    var classes = new Array('a', 'b', 'c');
    var index = 0;

    (function() {
        setInterval(function () {
            hero.className = 'hero ' + classes[index];
            index = (index + 1) % classes.length;
        }, 1200);
    }());

})(window.Mozilla);
