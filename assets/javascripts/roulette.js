$(document).ready(function() {
  $('.spin').click(function() {
    number_to_guess();
  })
})


function number_to_guess() {
  var limit= 37;
  var number_random = Math.floor(Math.random() * limit);
  console.log(number_random);
}