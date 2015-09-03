var Game = {
  init: function() {
    $('.spin').click(function() {
      Game.enoughPointsCheck();
      // Game.resetRoundScore();
      // Game.scoreUpdate();
      // Game.numberToGuess();
      // Game.roundCost();
      // Game.checkNumber();
      // Game.rangeThreeCheck();
      // Game.rangeTwoCheck();
      // Game.colorCheck();
      // Game.rowCheck();
      // Game.oddEvenCheck();
      // Game.gameOverCheck();
      // Game.clearSelection();
    }); 
    $('.num, .zero, .which-row, .range2, .range3').click(function() {
      Game.selectNumber($(this).html());
      $('.selections').html("CURRENT NUMBER OF SELECTIONS: " + Game.userSelection.length);
    });
    $('.num, .zero, .which-row, .range2, .range3').dblclick(function() {
      Game.removeSelection($(this).html());
      $('.selections').html("CURRENT NUMBER OF SELECTIONS: " + Game.userSelection.length);
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
    $('.new-game').click( function() {
      Game.newGame();
    });
    $('.clear-board').click( function() {
      Game.clearSelection();
      $('.selections').html("CURRENT NUMBER OF SELECTIONS: 0");
    });

  },
  userSelection: [],
  previousRoundScore: 0,
  numberRandom: -1,
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
    Game.numberRandom = Math.floor(Math.random() * limit);
    // console.log(numberRandom);
    $('.answer').html(Game.numberRandom);  
  },
  scoreUpdate: function() {
    Game.score = Game.score - Game.userSelection.length;
    $('.score').html("YOUR CURRENT SCORE IS: " + Game.score);
  },
  checkNumber: function() {
    var numInd = Game.userSelection.indexOf(''+Game.numberRandom);
    console.log(Game.numberRandom.toString());
    if(numInd != -1) {
      Game.score += 36;
      $('.score').html("YOUR CURRENT SCORE IS: " + Game.score);
      Game.previousRoundScore += 36;
      $('.winnings').html("WIN/LOSS: " + Game.previousRoundScore);
    }
  },
  rangeThreeCheck: function() {
    if (Game.numberRandom == 0) {
      Game.score += 0;
    }
    else if (Game.numberRandom < 13) {
      if (Game.userSelection.indexOf("1 to 12") != -1) {
        Game.score += 3;
        $('.score').html("YOUR CURRENT SCORE IS: " + Game.score);
        Game.previousRoundScore += 3;
        $('.winnings').html("WIN/LOSS: " + Game.previousRoundScore);  
      };
    }
    else if (Game.numberRandom > 24) {
      if (Game.userSelection.indexOf("25 to 36") != -1) {
        Game.score += 3;
        $('.score').html("YOUR CURRENT SCORE IS: " + Game.score);
        Game.previousRoundScore += 3;
        $('.winnings').html("WIN/LOSS: " + Game.previousRoundScore);  
      };
    }
    else {
      if (Game.userSelection.indexOf("13 to 24") != -1) {
        Game.score += 3;
        $('.score').html("YOUR CURRENT SCORE IS: " + Game.score);
        Game.previousRoundScore += 3;
        $('.winnings').html("WIN/LOSS: " + Game.previousRoundScore);  
      };
    }
  },
  rangeTwoCheck: function() {
    if (Game.numberRandom == 0) {
      Game.score += 0;
    }
    else if (Game.numberRandom < 19) {
      if (Game.userSelection.indexOf("1 to 18") != -1) {
        Game.score += 2;
        $('.score').html("YOUR CURRENT SCORE IS: " + Game.score);
        Game.previousRoundScore += 2;
        $('.winnings').html("WIN/LOSS: " + Game.previousRoundScore);
      };
    }
    else {
      if (Game.userSelection.indexOf("19 to 36") != -1) {
        Game.score += 2;
        $('.score').html("YOUR CURRENT SCORE IS: " + Game.score); 
        Game.previousRoundScore += 2;
        $('.winnings').html("WIN/LOSS: " + Game.previousRoundScore); 
      };
    }
  },
  colorCheck: function() {
    if (Game.numberRandom == 0) {
      Game.score += 0;
    }
    else if (Game.red.indexOf(''+Game.numberRandom) != -1) {
      if (Game.userSelection.indexOf("RED") != -1) {
        Game.score += 2;
        $('.score').html("YOUR CURRENT SCORE IS: " + Game.score);  
        Game.previousRoundScore += 2;
        $('.winnings').html("WIN/LOSS: " + Game.previousRoundScore);
      };  
    } 
    else {
      if (Game.userSelection.indexOf("BLACK") != -1) {
        Game.score += 2;
        $('.score').html("YOUR CURRENT SCORE IS: " + Game.score); 
        Game.previousRoundScore += 2;
        $('.winnings').html("WIN/LOSS: " + Game.previousRoundScore); 
      };
    }
  },
  rowCheck: function() {
    if (Game.numberRandom == 0) {
      Game.score += 0;
    }
    else if (Game.thirdRow.indexOf(''+Game.numberRandom) != -1) {
      if (Game.userSelection.indexOf("3RD ROW") != -1) {
        Game.score += 3;
        $('.score').html("YOUR CURRENT SCORE IS: " + Game.score); 
        Game.previousRoundScore += 3;
        $('.winnings').html("WIN/LOSS: " + Game.previousRoundScore); 
      };  
    }
    else if (Game.secondRow.indexOf(''+Game.numberRandom) != -1) {
      if (Game.userSelection.indexOf("2ND ROW") != -1) {
        Game.score += 3;
        $('.score').html("YOUR CURRENT SCORE IS: " + Game.score); 
        Game.previousRoundScore += 3;
        $('.winnings').html("WIN/LOSS: " + Game.previousRoundScore); 
      };  
    } 
    else {
      if (Game.firstRow.indexOf("1ST ROW") != -1) {
        Game.score += 3;
        $('.score').html("YOUR CURRENT SCORE IS: " + Game.score); 
        Game.previousRoundScore += 3;
        $('.winnings').html("WIN/LOSS: " + Game.previousRoundScore); 
      };
    }
  },
  oddEvenCheck: function() {
    if (Game.numberRandom == 0) {
      Game.score += 0;
    }
    else if (Game.numberRandom%2 == 0) {
      if (Game.userSelection.indexOf("EVEN") != -1) {
        Game.score += 2;
        $('.score').html("YOUR CURRENT SCORE IS: " + Game.score); 
        Game.previousRoundScore += 2;
        $('.winnings').html("WIN/LOSS: " + Game.previousRoundScore); 
      };
    }
    else {
      if (Game.userSelection.indexOf("ODD") != -1) {
        Game.score += 2;
        $('.score').html("YOUR CURRENT SCORE IS: " + Game.score); 
        Game.previousRoundScore += 2;
        $('.winnings').html("WIN/LOSS: " + Game.previousRoundScore); 
      };
    }
  },
  gameOverCheck: function() {
    if (Game.score < 1) {
      if (confirm("GAME OVER! Press ok to start a new game!") == true) {
        location.reload();
      }
    }
  },
  newGame: function () {
    if (confirm("Are you sure you want to start a new game? Click ok to confirm") == true) {
      location.reload();
    };
  },
  clearSelection: function() {
    Game.userSelection = [];
    $('.zero, .range3, .range2, .which-row').css('background', 'transparent');
    $('.red').css('background', 'red');
    $('.black').css('background', 'black');
    Game.previousRoundScore -= 0;
    $('.winnings').html("WIN/LOSS: 0");
  },
  roundCost: function() {
    Game.previousRoundScore -= Game.userSelection.length;
    $('.winnings').html("WIN/LOSS: " + Game.previousRoundScore);
  },
  resetRoundScore: function() {
    Game.previousRoundScore = 0;
    $('.winnings').html("WIN/LOSS: 0");
  },
  enoughPointsCheck: function() {
    if (Game.userSelection.length > Game.score) {
      alert("you do not have enough points to continue");
    }
    else {
      Game.resetRoundScore();
      Game.scoreUpdate();
      Game.numberToGuess();
      Game.roundCost();
      Game.checkNumber();
      Game.rangeThreeCheck();
      Game.rangeTwoCheck();
      Game.colorCheck();
      Game.rowCheck();
      Game.oddEvenCheck();
      Game.gameOverCheck();      
    }
  }
};

$(document).ready(function() {
  Game.init();
}); 