//declarar un array que representara los asientos de nuestros avion con false indicandp que estos estan vacios
//ocupado = true

var airlineSeats = [
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
  false,
];

//Contador que nos ayudara a rastrear el numero de asientos ocupados
var busySeats = 0;

var paintSeats = function (array) {
  var containerSeats = document.getElementById('seats');

  for (var i = 0; i < array.length; i++) {
    var seat = document.createElement('div');
    seat.className = 'seats';

    //del primer elemento al cuarto , en nuestro arreglo va a ser de Primera Clase que seria del indice 0 al indice 3
    if (i < 4) {
      seat.style.background = 'purple';
    } else {
      seat.style.background = 'yellow';
    }
    containerSeats.appendChild(seat);
  }

};

var reserve = function() {
  var btn = document.getElementById('btn');
  btn.addEventListener('click', chooseZone);
};

var chooseZone = function() {
  var choice = prompt(
    'En que zona prefieres reservar \n 1. Primera Clase \n 2. Clase Economica \n \n Por favor ingrese el numero de su preferencia'
  );
  if (choice == 1) {
    checkFirstClassZone();
  } else if (choice == 2) {
    checkEconomicZone();
  } else {
    alert('Por favor ingresa un numero valido');
  }
};

var checkFirstClassZone = function(){
   var zone  = 'Primera Clase';
   //recoree del elemento 0 al 3 y verifica cuales estan disponibles
   for(var index = 0; index < 4; index++) {
     if (airlineSeats[index] == false) {
       airlineSeats[index] = true;
       //al reservar un asiento no necesitamos seguir recorriendo dicho asientos
       //rompemos el for con un break
       reserSeat(index);
       paintTicket(index, zone);
       busySeats++;
       break;
     } else if (index == 3 && airlineSeats[index] == true) {
       reasingnEconomicZone(zone);
     }
   }
};

var checkEconomicZone = function(){
  var zone  = 'Economica';
  for(var index = 4; index < 10; index++) {
    if (airlineSeats[index] == false) {
      airlineSeats[index] = true;
      reserSeat(index);
      paintTicket(index, zone);
      busySeats++;
      break;
    } else if(index == 9 && airlineSeats[index] == true) {
      reasingnFirstClassZone(zone);
    }
  }
};

var reserSeat = function(indexToPaint) {
  var seat = document.getElementsByClassName('seats');
  seat[indexToPaint].textContent = 'Ocupado';

  seat[indexToPaint].style.color = "white";
  seat[indexToPaint].style.fontSize = "30px";
  seat[indexToPaint].style.textAlign = "center";
};

var  reasingnEconomicZone = function(zone) {
  if(busySeats == 10) {
    noSeats();
    nextFlight();
  } else {
    var reasign = confirm(
      'Ya no queda asientos disponibles ' +
      zone +
      ' :( \n Quieres reservar en zona economica?'
      );

    if (reasign == true) {
      checkEconomicZone();
    } else {
      nextFlight();
    }
  }
};

var  reasingnFirstClassZone = function(zone) {
  if(busySeats == 10) {
    noSeats();
    nextFlight();
  } else {
    var reasign = confirm(
      'Ya no queda asientos disponibles ' +
      zone +
      ' :( \n Quieres reservar en Primera Clase?'
    );
    if (reasign == true) {
      checkFirstClassZone();
    } else {
      nextFlight();
    }
  }
};

var paintTicket = function(index, zone) {
  var containerTickets = document.getElementById('tickets');
  var ticket = document.createElement('div');
  ticket.className = 'boleto';
  var title = document.createElement('p');
  var reservedSeating = document.createElement('p');
  var zoneClass = document.createElement('p');
  title.textContent = 'PASE DE ABORDAR';
  reservedSeating.textContent = 'N°. de asiento: ' + (index + 1);
  zoneClass.textContent = zone;
  ticket.appendChild(title);
  ticket.appendChild(reservedSeating);
  ticket.appendChild(zoneClass);
  containerTickets.appendChild(ticket);
};

var nextFlight = function () {
  alert('Nuestro proximo vuelo sale en 3 horas!');
};

var noSeats = function() {
  alert('Lo sentimos :( \n Ya no quedan asientos disponibles en este avión.');
};

paintSeats(airlineSeats);
reserve();
