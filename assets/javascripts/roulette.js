$(document).ready(function() {
  $('.spin').click(function() {
    "The generated number is" + number_to_guess();
  }); 
})

$(function() {
  $('.zero, .range3, .range2, .which-row').click( function() {
    $(this).css('background', 'blue')
  });
  $('.zero, .range3, .range2, .which-row').dblclick( function() {
    $(this).css('background', 'transparent')
  });
  $('.red').click( function() {
    $(this).css('background', 'blue')
  });
  $('.red').dblclick( function() {
    $(this).css('background', 'red')
  });
  $('.black').click( function() {
    $(this).css('background', 'blue')
  });
  $('.black').dblclick( function() {
    $(this).css('background', 'black')
  });
});

function number_to_guess() {
  var limit= 37;
  var number_random = Math.floor(Math.random() * limit);
  console.log(number_random);
  $('.preview').html(number_random);
}
