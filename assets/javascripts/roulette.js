var selected_numbers = [];
var unique_selection = [];
var index = -1;

$(document).ready(function() {
  $('.spin').click(function() {
    number_to_guess();
  }); 
  $('.num, .zero, .which-row, .range2, .range3').click(function() {
    selected_numbers.push($(this).html());
    unique_selection = selected_numbers.reduce(function(a,b) {
      if (a.indexOf(b) < 0) a.push(b);
      return a;
    }, []);
    console.log(unique_selection);
  });
  $('.num, .zero, .which-row, .range2, .range3').dblclick(function() {
    index = unique_selection.indexOf($(this).html());
    if (index > -1) {
      splice_index(index, unique_selection);
    };
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
  $('.preview').html("THE RANDOM NUMBER THAT HAS BEEN GENERATED IS = " + number_random);
}

function splice_index(n, x) {
  x.splice(n, 1);
  console.log(x);
}
