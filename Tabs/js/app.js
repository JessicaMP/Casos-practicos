var tabs1 = document.getElementById('tab1'); {
tabs1.addEventListener('click', showContent1);
}

function showContent1() {
  var tab1 = document.getElementsByClassName("tab1");
    for (var i = 0; i < tab1.length; i++) {
    tab1[i].classList.add("tabs_white");
  }
  var section1 = document.getElementsByClassName("section1");
    for (var j = 0; j < section1.length; j++) {
    section1[j].classList.remove("hidden");
  }
  var section2 = document.getElementsByClassName("section2");
    for (k = 0; k < section2.length; k++) {
    section2[k].classList.add("hidden");
  }
  var section3 = document.getElementsByClassName("section3");
    for (var k = 0; k < section3.length; k++) {
    section3[k].classList.add("hidden");
  }
  var tab2 = document.getElementsByClassName("tab2");
    for (var l = 0; l < tab1.length; l++) {
    tab2[l].classList.remove("tabs_white");
  }
  var tab3 = document.getElementsByClassName("tab3");
    for (var m = 0; m < tab1.length; m++) {
    tab3[m].classList.remove("tabs_white");
  }
}

var tabs2 = document.getElementById('tab2'); {
tabs2.addEventListener('click', showContent2);
}

function showContent2() {
  var tab2 = document.getElementsByClassName("tab2");
    for (var i = 0; i < tab2.length; i++) {
    tab2[i].classList.add("tabs_white");
  }
  var section1 = document.getElementsByClassName("section1");
    for (var j = 0; j < section1.length; j++) {
    section1[j].classList.add("hidden");
  }
    var section2 = document.getElementsByClassName("section2");
      for (k = 0; k < section2.length; k++) {
      section2[k].classList.remove("hidden");
   }
   var section3 = document.getElementsByClassName("section3");
    for (var k = 0; k < section3.length; k++) {
    section3[k].classList.add("hidden");
  }
   var tab1 = document.getElementsByClassName("tab1");
    for (var l = 0; l < tab1.length; l++) {
    tab1[l].classList.remove("tabs_white");
  }
  var tab3 = document.getElementsByClassName("tab3");
  for (var m = 0; m < tab1.length; m++) {
   tab3[m].classList.remove("tabs_white");
 }
}

var tabs3 = document.getElementById('tab3'); {
tabs3.addEventListener('click', showContent3);
}

function showContent3() {
  var tab3 = document.getElementsByClassName("tab3");
  for (var i = 0; i < tab3.length; i++) {
   tab3[i].classList.add("tabs_white");
  }
   var section1 = document.getElementsByClassName("section1");
   for (var j = 0; j < section1.length; j++) {
    section1[j].classList.add("hidden");
  }
  var section2 = document.getElementsByClassName("section2");
  for (var o = 0; o < section2.length; o++) {
   section2[o].classList.add("hidden");
  }
    var section3 = document.getElementsByClassName("section3");
    for (var k = 0; k < section3.length; k++) {
     section3[k].classList.remove("hidden");
   }
   var tab1 = document.getElementsByClassName("tab1");
   for (var l = 0; l < tab1.length; l++) {
    tab1[l].classList.remove("tabs_white");
  }
    var tab2 = document.getElementsByClassName("tab2");
    for (var m = 0; m < tab2.length; m++) {
     tab2[m].classList.remove("tabs_white");
 }
}
