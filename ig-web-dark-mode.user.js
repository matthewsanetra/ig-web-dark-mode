// ==UserScript==
// @name         Official Instagram Dark Mode for web
// @namespace    https://github.com/matthewsanetra/ig-web-dark-mode
// @version      0.1
// @description  Activates the official Instagram dark mode on the web browser
// @author       Matthew Sanetra
// @icon         https://www.google.com/s2/favicons?sz=256&domain=instagram.com
// @grant        none
// @match        https://*.instagram.com/*
// @run-at       document-start
// ==/UserScript==

(function () {
  "use strict";

  if (window.location.search === "") window.location.search += "theme=dark";
  else if (window.location.search.lastIndexOf("theme=dark") === -1)
    window.location.search += "&theme=dark";
})();
