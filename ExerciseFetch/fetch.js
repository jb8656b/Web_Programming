"use strict";
(function() {

  //write your solution here
  window.onload = function() {

    $("fetch").onclick = goFetch;
    //JS
    fetchit = document.getElementById("fetch");
    fetchit.onclick = goFetch;
  };


  /* ============================ Helper Functions ============================ */
  function checkStatus(response) {
    if (response.status >= 200 && response.status < 300 || response.status == 0) {
      return response.text();
    } else {
      return Promise.reject(new Error(response.status + ": " + response.statusText));
    }
  }

  function $(id) {
    return document.getElementById(id);
  }
})();
