var option = document.querySelector('.fa'); {
option.addEventListener('click', hidenfirstblock, hidenSecondBlock);
}
function hidenfirstblock() {
  var hiden = document.getElementsByClassName("hide");
  for (var i = 0; i< hiden.length; i++) {
   hiden[i].classList.remove("hide");
}}
var option2 = document.querySelector('.fa-times'); {
option2.addEventListener('click', hidenSecondBlock);
}
function hidenSecondBlock() {
  var hiden = document.getElementsByClassName("container-green");
  for (var i = 0; i< hiden.length; i++) {
   hiden[i].classList.add("hide");
}}
