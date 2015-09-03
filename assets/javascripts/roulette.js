var Game = {
  init: function() {
    $('.spin').click(function() {
      Game.numberToGuess();
    }); 
    $('.num, .zero, .which-row, .range2, .range3').click(function() {
      Game.selectNumber($(this).html());
      Game.scoreUpdate();
    });
    $('.num, .zero, .which-row, .range2, .range3').dblclick(function() {
      Game.removeSelection($(this).html());
      Game.scoreUpdate();
    });
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

  },
  userSelection: [],
  score: 100,
  red: ["1", "3", "5", "7", "9", "12", "14", "16", "18", "19", "21", "23", "25", "27", "30", "32", "34", "36"],
  black: ["2", "4", "6", "8", "10", "11", "13", "15", "17", "20", "22", "24", "26", "28", "29", "31", "33", "35"],
  thirdRow: ["3", "6", "9", "12", "15", "18", "21", "24", "27", "30", "33", "36"],
  secondRow: ["2", "5", "8", "11", "14", "17", "20", "23", "26", "29", "32", "35"],
  firstRow: ["1", "4", "7", "10", "13", "16", "19", "22", "25", "28", "31", "34"],

  selectNumber: function(num) {
    if(Game.userSelection.indexOf(num) == -1) {
      Game.userSelection.push(num);
    }
    console.log(Game.userSelection);
  },
  removeSelection: function(num) {
    var ind = Game.userSelection.indexOf(num);
    if(ind != -1) {
      Game.userSelection.splice(ind, 1);
    }
    console.log(Game.userSelection);
  },
  numberToGuess: function() {
    var limit= 37;
    var numberRandom = Math.floor(Math.random() * limit);
    console.log(numberRandom);
    $('.preview').html("THE RANDOM NUMBER THAT HAS BEEN GENERATED IS = " + numberRandom);  
  },
  scoreUpdate: function() {
    Game.score = 100;
    Game.score = Game.score - Game.userSelection.length;
    $('.score').html(Game.score);
  }

};

$(document).ready(function() {
  Game.init();
}); 