function go() {
fetch('https://opendata.stif.info/service/api-stif-horaires/stop_areas/stop_area%3A0%3ASA%3A60%3A340/lines/line%3A0%3A016096001%3A14/departures?count=5&apikey=')
  .then(response => {
    return response.json()
  })
  .then(data => {
    let timeLeft;
// Work with JSON data here
      let i = 0;
      let y = 0;
      let direction;
      let depart;
      let date = new Date();
      let currentMinutes = date.getMinutes();
      while (y === 0) {
          direction = data['departures'][i]['display_informations']['direction'];
          if (direction === "GARE D'ENGHIEN-LES-BAINS (Enghien-les-Bains)") {
              depart = data['departures'][i]['stop_date_time']['arrival_date_time'];
              y = y + 1;
          }
          else {
              i = i + 1;

          }
      }
      timeLeft = parseInt(depart.slice(11, 13));
      if (timeLeft  < currentMinutes){
          timeLeft = 60-currentMinutes+timeLeft ;
      }
      else {
          timeLeft = timeLeft  - currentMinutes;
      }
      console.log("a");
document.getElementById("go").innerHTML = "Le prochain bus en direction de " +direction.slice(0,24)+ " est à " +depart.slice(9,11)+ "h" +depart.slice(11,13)+" dans "+timeLeft+" minutes!";
})

  .catch(err => {
console.log("no Internet");
      const busSchedulesGo = [9, 39, 69, 120, 180, 277, 292, 307, 322, 337, 352, 367, 377, 387, 397, 407, 417, 427, 437, 448, 458, 467, 477, 487, 497, 507, 518, 531, 540, 549, 558, 573, 588, 603, 618, 633, 648, 663, 678, 692, 706, 719, 729, 739, 749, 759, 769, 779, 789, 799, 809, 819, 829, 839, 857, 872, 887, 902, 917, 932, 947, 961, 977, 994, 1005, 1015, 1025, 1035, 1045, 1055, 1065, 1075, 1085, 1095, 1105, 1115, 1125, 1135, 1144, 1154, 1164, 1176, 1190, 1206, 1221, 1236, 1251, 1267, 1282, 1297, 1312, 1328, 1343, 1358, 1373, 1389, 1404, 1419];
      let selectedSchedule = 0;
      let date = new Date();
      let currentMinutes = date.getMinutes();
      let currentHours = date.getHours();
      let totalMinutes = currentHours * 60 + currentMinutes;
      let nextMinBus;
      let count = 0;
      let i;
      let b = "";
      let plural = "";
      for(i=0; count === 0; i++){
          if (busSchedulesGo[i] > totalMinutes){
              selectedSchedule = busSchedulesGo[i];
              count += 1;
          }
      }
      nextMinBus = selectedSchedule;
      let nb = 0;
      nextMinBus = nextMinBus-currentHours*60;
      while (nextMinBus >= 60){
          nb = nb + 1;
          nextMinBus = nextMinBus-nb*60;
      }
      if (nextMinBus < currentMinutes){
          nextMinBus = 60-currentMinutes+nextMinBus;
      }
      if (nextMinBus < 10){
          b = "0";
      }
      let c;
      if (nextMinBus<currentMinutes){
          c = 60-currentMinutes+nextMinBus;
      }
      else {
      c = nextMinBus - currentMinutes ;
      }
      let h = currentHours + nb;
      if (c >= 2) {
          plural = "s";
      }
      document.getElementById("go").innerHTML = "Le prochain bus est à "+h+"h"+b+String(nextMinBus)+" dans "+c+" minute"+plural+"!";
  })
}
function back() {
fetch('https://opendata.stif.info/service/api-stif-horaires/stop_areas/stop_area%3A0%3ASA%3A60%3A334/departures?count=5&apikey=')
  .then(response => {
    return response.json()
  })
  .then(data => {
    // Work with JSON data here
      let timeLeft;
      let i = 0;
      let y = 0;
      let direction;
      let depart;
      let date = new Date();
      let currentMinutes = date.getMinutes();
      while (y === 0) {
          direction = data['departures'][i]['display_informations']['direction'];
          if (direction === "GARE D'ERMONT-EAUBONNE (Ermont)") {
              depart = data['departures'][i]['stop_date_time']['arrival_date_time'];
              y = y + 1;
          }
          else {
              i = i + 1;

          }

      }
      timeLeft = parseInt(depart.slice(11, 13));
      if (timeLeft  < currentMinutes){
          timeLeft = 60-currentMinutes+timeLeft ;
      }
      else {
          timeLeft = timeLeft  - currentMinutes;
      }
document.getElementById("back").innerHTML = "Le prochain bus en direction de " +direction.slice(0,23)+ " est à " +depart.slice(9,11)+ "h" +depart.slice(11,13)+" dans "+timeLeft+" minutes!";
})

  .catch(err => {
console.log("No Internet too");
const busSchedulesReturn = [9, 24, 54, 84, 368, 380, 390, 400, 421, 432, 447, 457, 467, 477, 487, 497, 511, 521, 531, 540, 550, 554, 565, 579, 595, 610, 625, 640, 655, 670, 685, 700, 713, 722, 733, 743, 753, 763, 773, 783, 793, 803, 813, 823, 832, 843, 853, 863, 878, 894, 909, 924, 939, 954, 971, 987, 1006, 1017, 1027, 1037, 1047, 1057, 1067, 1077, 1087, 1097, 1107, 1117, 1126, 1136, 1144, 1154, 1164, 1174, 1184, 1193, 1205, 1220, 1235, 1251, 1266, 1281, 1296, 1312, 1327, 1342, 1357, 1373, 1388, 1403, 1418, 1434];
      let selectedSchedule = 0;
      let date = new Date();
      let currentMinutes = date.getMinutes();
      let currentHours = date.getHours();
      let totalMinutes = currentHours * 60 + currentMinutes;
      let b = "";
      let count = 0;
      let nextMinBus;
      let i;
      let plural = "";
      for(i=0; count === 0; i++){
          if (busSchedulesReturn[i] > totalMinutes){
              selectedSchedule = busSchedulesReturn[i];
              count += 1;
          }
      }
      nextMinBus = selectedSchedule;
      let nb = 0;
      nextMinBus = nextMinBus-currentHours*60;
      while (nextMinBus >= 60){
          nb = nb + 1;
          nextMinBus = nextMinBus-nb*60;
      }
      if (nextMinBus < currentMinutes){
          nextMinBus = 60-currentMinutes+nextMinBus
      }
      if (nextMinBus < 10){
          b = "0"
      }
      let c;
      if (nextMinBus<currentMinutes){
          c = 60-currentMinutes+nextMinBus;
      }
      else {
          c = nextMinBus - currentMinutes ;
      }
      let h = currentHours + nb;
      if (c >= 2){
          plural = "s";
      }

      document.getElementById("back").innerHTML = "Le prochain bus est à "+h+"h"+b+String(nextMinBus)+" dans "+c+" minute"+plural+"!";

  })
}
	
	
	
	
