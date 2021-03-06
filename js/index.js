//clock\\
function updateClock() {
  const clockContainer = document.querySelector(".clock");
  clockContainer.innerText = new Date().toLocaleTimeString("uk");
}
setInterval(updateClock, 1000);

//modal window\\
const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("closes")[0];
const form = document.getElementById("my_form");

form.addEventListener("submit", (event) => {
  event.preventDefault();
  modal.style.display = "block";
});

span.onclick = function () {
  modal.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
  
     //map//

 function initMap(){
   const opt = {
     center: {lat: 49.80481558782664, lng: 24.075710465259668},
    zoom: 17
   }
   
   const map = new google.maps.Map(document.getElementById("map"),opt);
 }
 ///////

 