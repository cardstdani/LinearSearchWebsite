var templateButton;
var number;
var maxLength;

var working = false;

window.onload = function () {
  templateButton = document.getElementById("templateButton");
  working = false;

  start();
};

function start() {
  var parent = document.getElementById("mainDiv");
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }

  parent = document.getElementById("mainDiv2");
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild);
  }

  var n = Math.floor(Math.random() * (120 - 15 + 1)) + 15;
  maxLength = n;
  for (var i = 0; i < n; i += 1) {
    cloneButton("b" + i.toString(), i, "#mainDiv");
    cloneButton("c" + i.toString(), i, "#mainDiv2");
  }
}

function cloneButton(newId, num, parent) {
  let clone = document.querySelector('#templateButton').cloneNode(true);
  clone.setAttribute('id', newId);

  document.querySelector(parent).appendChild(clone);
  document.getElementById(newId).style.visibility = "visible";
  document.getElementById(newId).innerText = num.toString();
}

function pressed() {
  if (working == false) {
    var id = parseInt(event.srcElement.id.toString().substring(1));
    number = id;
    working = true;

    var index = 0;
    var index2 = maxLength - 1;
    const interval = setInterval(function () {
      if (index == number && index2 == number) {
        document.getElementById("b" + (index).toString()).style.background = '#f53f3a';
        document.getElementById("c" + (index2).toString()).style.background = '#f53f3a';

        clearInterval(interval);
      } else {
        if (index != number) {
          document.getElementById("b" + (index).toString()).style.background = '#48e073';
          index += 1;
        } //else { document.getElementById("b" + (index).toString()).style.background = '#f53f3a'; }

        if (index2 != number) {
          //document.getElementById("c" + (index).toString()).style.background = '#48e073';
          document.getElementById("c" + (index2).toString()).style.background = '#48e073';
          index2 -= 1;
        }
      }
    }, 50);
  } else {
    start();
    working = false;
  }
}