"use strict";

//js from internet

document.addEventListener("DOMContentLoaded", setup);

function setup() {
  var elements = document.getElementsByClassName("cssText");
  for (let i = 0; i < elements.length; i++) 
    makeTextWeird(elements[i]);
}

function makeTextWeird(element) {
  var rawtxt = element.innerHTML;
  var newtext = '';
  var onTag = false;
  var tagStart, tagEnd;
  for (var i = 0; i < rawtxt.length; i ++) {
    var rng = Math.floor(Math.random() * 5) + 1;
    var currentchar = rawtxt.charAt(i);
    if (currentchar == '<') {
      onTag = true;
      tagStart = i;
    } else if (currentchar == '>') {
      onTag = false;
      tagEnd = i;
      newtext += rawtxt.slice(tagStart, tagEnd + 1);
      continue;
    }
    if (onTag) {
      continue;
    }
    if (currentchar == ' ') {
      var newchar = '<span class="space"></span>';
    } else {
      var newchar = '<span class="effect' + rng + '">' + currentchar + '</span>';
    }
    newtext = newtext + newchar;
  }
  element.innerHTML = newtext; 
}

