
function updateClock(){
const clockContainer = document.querySelector(".clock");
clockContainer.innerText = new Date().toLocaleTimeString('uk');
}
setInterval(updateClock, 1000);



const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("closes")[0];
const form = document.getElementById("my_form");

// btn.onclick = function() {
// modal.style.display = "block";
// }
  //   form.onsubmit = function(event) {
  //   event.preventDefault();
 
  // }
  //  modal.style.display = "block";
   form.addEventListener('submit', event => {
     event.preventDefault();
     // actual logic, e.g. validate the form
    modal.style.display = "block";
   });


span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
    
  }
 
}




