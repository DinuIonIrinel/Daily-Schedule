let day_banner = document.getElementById("title_day");
let ul = document.querySelector(".list-group");
let date = new Date();
if (date.getDay() == 1 ){
    // monday shedule 
   day_banner.innerHTML = "FRIDAY";
   let li = document.createElement('li');
   let text = document.createTextNode("08:00-10:00 ALGEBRĂ LINIARĂ, GEOMETRIE ANALITICĂ ȘI ECUAȚII DIFERENȚIALE (Matematică 2) (c), Lector I. DUCA (PR 001)");
   li.classList.add("list-group-item");
   li.appendChild(text);
   ul.appendChild(li);

   let li2 = document.createElement('li');
   let text2 = document.createTextNode("10:00-12:00 (PL) PROIECTARE LOGICĂ (c), Conf. C. CHIRU (PR 001)");
   li2.classList.add("list-group-item");
   li2.appendChild(text2);
   ul.appendChild(li2);

   let li3 = document.createElement('li');
   let text3 = document.createTextNode("14:00-16:00 IR (s) CANTI CTI / (I) ");
   li3.classList.add("list-group-item");
   li3.appendChild(text3);
   ul.appendChild(li3);

   let li4 = document.createElement('li');
   let text4 = document.createTextNode("16:00-18:00 Educatie Fizica / (P) ");
   li4.classList.add("list-group-item");
   li4.appendChild(text4);
   ul.appendChild(li4);
}

if (date.getDay() == 2 ){
    // tuesday shedule 
   day_banner.innerHTML = "TUESDAY";
   let li = document.createElement('li');
   let text = document.createTextNode("10:00-12:00 UTILIZAREA SISTEMELOR DE OPERARE (c), Prof. R. RUGHINIȘ (EC 105)");
   li.classList.add("list-group-item");
   li.appendChild(text);
   ul.appendChild(li);

   let li2 = document.createElement('li');
   let text2 = document.createTextNode("12:00-14:00 (PROGRAMAREA CALCULATOARELOR (c), Prof. F. POP (AN 030)");
   li2.classList.add("list-group-item");
   li2.appendChild(text2);
   ul.appendChild(li2);

   let li3 = document.createElement('li');
   let text3 = document.createTextNode("14:00-16:00 CURS MATEMATICA 2 / MATEMATICA 1 ( I / P ) ");
   li3.classList.add("list-group-item");
   li3.appendChild(text3);
   ul.appendChild(li3);
}
if (date.getDay() == 3 ){
    // wednesday shedule 
   day_banner.innerHTML = "WEDNESDAY";
   let li = document.createElement('li');
   let text = document.createTextNode("08:00-10:00 Mat2 (s) PR 003");
   li.classList.add("list-group-item");
   li.appendChild(text);
   ul.appendChild(li);

   let li2 = document.createElement('li');
   let text2 = document.createTextNode("10:00-12:00 Mat1 (s) AN 213'");
   li2.classList.add("list-group-item");
   li2.appendChild(text2);
   ul.appendChild(li2);

   let li3 = document.createElement('li');
   let text3 = document.createTextNode("14:00-16:00 PL(l) EG 302");
   li3.classList.add("list-group-item");
   li3.appendChild(text3);
   ul.appendChild(li3);
}

if (date.getDay() == 4 ){
    // thursday shedule 
   day_banner.innerHTML = "THURSDAY";
   let li = document.createElement('li');
   let text = document.createTextNode("10:00-12:00 SEMINAR ENGLEZA (P)");
   li.classList.add("list-group-item");
   li.appendChild(text);
   ul.appendChild(li);

   let li2 = document.createElement('li');
   let text2 = document.createTextNode("12:00-14:00 LABORATOR PROGRAMARE REMUS");
   li2.classList.add("list-group-item");
   li2.appendChild(text2);
   ul.appendChild(li2);

   let li3 = document.createElement('li');
   let text3 = document.createTextNode("14:00-16:00 CURS MATEMATICA 1 - RADU GOLOGAN ");
   li3.classList.add("list-group-item");
   li3.appendChild(text3);
   ul.appendChild(li3);
}

if (date.getDay() == 5 ){
    // friday shedule 
   day_banner.innerHTML = "FRIDAY";
   let li = document.createElement('li');
   let text = document.createTextNode("14:00-16:00 CURS ISTORIA RELIGIILOR / CURS PROIECTARE LOGICA ( I / P ) ");
   li.classList.add("list-group-item");
   li.appendChild(text);
   ul.appendChild(li);

   let li2 = document.createElement('li');
   let text2 = document.createTextNode("16:00-18:00 LABORATOR USO ");
   li2.classList.add("list-group-item");
   li2.appendChild(text2);
   ul.appendChild(li2);


}
if ( date.getDay == 6) {
    day_banner.innerHTML = "Saturday";
   let li = document.createElement('li');
   let text = document.createTextNode("FREE TIME ");
   li.classList.add("list-group-item");
   li.appendChild(text);
   ul.appendChild(li);
}
if ( date.getDay == 7) {
    day_banner.innerHTML = "SUNDAY";
   let li = document.createElement('li');
   let text = document.createTextNode("FREE TIME ");
   li.classList.add("list-group-item");
   li.appendChild(text);
   ul.appendChild(li);
}