var select = document.getElementById('select');
select.onchange = function() {
  if (select.value == 'Original') {
    var filter = document.getElementsByClassName('filter');
    for (var i = 0; i < filter.length; i++) {
      filter[i].classList.remove('black-white');
      filter[i].classList.remove('negative-colors');
      filter[i].classList.remove('sepia');
    }
  }
  else if (select.value == 'Blanco y negro') {
    var filter = document.getElementsByClassName('filter');
    for (var i = 0; i < filter.length; i++) {
      /*filterimage[i].classList.remove('original');*/
      filter[i].classList.remove('negative-colors');
      filter[i].classList.remove('sepia');
      filter[i].classList.add('black-white');
    }
  }
  else if (select.value == 'Sepia') {
    var filter = document.getElementsByClassName('filter');
    for (var i = 0; i < filter.length; i++) {
      /*filterimage[i].classList.remove('original');*/
      filter[i].classList.remove('negative-colors');
      filter[i].classList.add('sepia');
      filter[i].classList.remove('black-white');
    }
  }
  else if (select.value == 'Invertir Colores') {
    var filter = document.getElementsByClassName('filter');
    for (var i = 0; i < filter.length; i++) {
      /*filterimage[i].classList.remove('original');*/
      filter[i].classList.add('negative-colors');
      filter[i].classList.remove('sepia');
      filter[i].classList.remove('black-white');
    }
  }
}
