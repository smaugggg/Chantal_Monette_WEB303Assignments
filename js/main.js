// WEB303 Assignment 2
// Chantal Monette W0800871
// started20220923 due0928


// onclick functions
$(document).ready(function () {
    $("#prospect").click(function () {
      $("#content").fadeIn(1500, function () {
        
      });
      loadProspect();
    });
  
    $("#convert").click(function () {
      $("#content").fadeIn(1500, function () {

      });
      loadConvert();
    });
  
    $("#retain").click(function () {
      $("#content").fadeIn(1500, function () {

      });
      loadRetain();
    });
  });

// AJAX stuff to load the new content
function loadProspect() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "prospect.html");

    xhr.onload = function (){
        if (xhr.status === 200) {
            let content = document.getElementById("content1");
            content.innerHTML = xhr.responseText;     
        }
    };
    xhr.send();
}


function loadConvert() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "convert.html");

    xhr.onload = function (){
        if (xhr.status === 200) {
            let content = document.getElementById("content1");
            content.innerHTML = xhr.responseText;     
        }
    };
    xhr.send();
}


function loadRetain() {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', "retain.html");

    xhr.onload = function (){
        if (xhr.status === 200) {
            let content = document.getElementById("content1");
            content.innerHTML = xhr.responseText;     
        }
    };
    xhr.send();
}
