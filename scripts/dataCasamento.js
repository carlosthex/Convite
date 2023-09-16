// Set the date we're counting down to
var countDownDate = new Date("Oct 18, 2023 23:59:59").getTime();
        
// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = "18.10.2023 - Casamento em " + days +" dias ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "18.10.2023 - Casados há " + -(days) +" dias ";
  }
}, 1000);

window.addEventListener("scroll", function() {
  let header = document.querySelector('#header');
  header.classList.toggle('rolagem', window.scrollY > 0);
});