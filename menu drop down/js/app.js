/*Al hacer click se despliega otras opciones*/
var menu = document.getElementsByClassName('menu');{
  for (var i = 0; i < menu.length; i++) {
    menu[i].addEventListener('click', showMenu);
  }
}

function showMenu() {
  var containers = this.getElementsByClassName('container')[0];
  console.log(containers);

  if (containers.classList.contains('hide')){
    containers.classList.remove('hide');
    containers.classList.add('show');
    console.log(containers);
  } else {
    containers.classList.remove('show');
    containers.classList.add('hide');
    console.log(containers);
  }
}
