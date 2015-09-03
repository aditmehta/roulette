var selected_numbers = [];
var unique_selection = [];

$(document).ready(function() {
  $('.spin').click(function() {
    number_to_guess();
  }); 
  $('.num, .zero, .which-row, .range2, .range3').click(function() {
    selected_numbers.push($(this).html());
    var unique_selection = selected_numbers.reduce(function(a,b) {
      if (a.indexOf(b) < 0) a.push(b);
      return a;
    }, []);
    console.log(unique_selection);
  });
  $('.num, .zero, .which-row, .range2, .range3').dblclick(function() {
    selected_numbers.pop($(this).html());
    console.log(selected_numbers);
  });
});

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
  $('.preview').html("THE RANDOM NUMBER THAT HAS BEEN GENERATED IS = " + number_random);
}


