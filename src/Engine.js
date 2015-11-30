'use strict';

var Engine = function () {
    var board = new Array(6);
    var piecesOnBoard = 36;
    var player1Pieces = 0;
    var player2Pieces = 0;
    var currentPlayer = new Array("1", "2");
    currentPlayer["1"] = new Array("Red", "Green", "Black", "White", "Yellow", "Blue");
    currentPlayer["2"] = new Array("Red", "Green", "Black", "White", "Yellow", "Blue");
    for (var i = 0; i < 6; i++) {
        board[i] = new Array(6);
    }

    this.putRed = function () {
        board[0][4] = "Red";
        board[1][3] = "Red";
        board[2][5] = "Red";
        board[3][0] = "Red";
        board[3][2] = "Red";
        board[5][3] = "Red";
    };

    this.putGreen = function () {
        board[0][1] = "Green";
        board[1][2] = "Green";
        board[3][3] = "Green";
        board[4][1] = "Green";
        board[4][5] = "Green";
        board[5][4] = "Green";
    };

    this.putBlack = function () {
        board[0][0] = "Black";
        board[2][4] = "Black";
        board[3][1] = "Black";
        board[4][3] = "Black";
        board[5][2] = "Black";
        board[5][5] = "Black";
    };

    this.putWhite = function () {
        board[0][2] = "White";
        board[0][5] = "White";
        board[1][1] = "White";
        board[2][3] = "White";
        board[3][5] = "White";
        board[4][0] = "White";
    };

    this.putYellow = function () {
        board[1][0] = "Yellow";
        board[1][4] = "Yellow";
        board[2][1] = "Yellow";
        board[4][2] = "Yellow";
        board[4][4] = "Yellow";
        board[5][0] = "Yellow";
    };

    this.putBlue = function () {
        board[0][3] = "Blue";
        board[1][5] = "Blue";
        board[2][0] = "Blue";
        board[2][2] = "Blue";
        board[3][4] = "Blue";
        board[5][1] = "Blue";
    };

    this.initialisation = function () {
        this.putRed();
        this.putGreen();
        this.putBlack();
        this.putWhite();
        this.putYellow();
        this.putBlue();
    };

    this.isJuxtapose = function () {
        for (var i = 0; i < board.length; i++) {
            for (var j = 0; j < board.length; j++) {
                if (j != 5 && board[i][j] == board[i][j + 1]) {
                    return false;
                }

                if (j != 0 && board[i][j] == board[i][j - 1]) {
                    return false;
                }

                if (i != 5 && board[i][j] == board[i + 1][j]) {
                    return false;
                }

                if (i != 0 && board[i][j] == board[i - 1][j]) {
                    return false;
                }

                return true;
            }
        }
    };

    this.isInCorner = function (color) {
        if (board[0][0] == color || board[0][5] == color || board[5][0] == color || board[5][5] == color) {
            return true;
        }

        return false;
    };

    this.getColorPieces = function (x, y) {
        return board[x][y].value;
    }

    this.deletePieces = function (x, y) {
        board[x][y] == undefined;
        piecesOnBoard--;
        return piecesOnBoard;
    };

    this.setPlayer1Pieces = function () {
        player1Pieces++;
    };

    this.getPlayer1Pieces = function () {
        return player1Pieces;
    };

    this.setPlayer2Pieces = function () {
        player2Pieces++;
    };

    this.getPlayer2Pieces = function () {
        return player2Pieces;
    };

    this.addPiecesPlayer = function (player, color) {
        if (currentPlayer[player][color] == undefined) {
            currentPlayer[player][color] = 1;
        }
        else {
            currentPlayer[player][color] += 1;
        }
        return currentPlayer[player][color];
    };

    this.playerWin = function(){
        var playerWin = this.getPiecesColor(1, "Black");

        if(playerWin = 6){
            return true;
        }

        return false;
    };

    this.getPiecesColor = function(player, color){
        return currentPlayer[player][color];
    };

    this.checkPossiblePieces = function (x,y) {
        var neighborNumber = 0;
 //       for (var i = 0; i < board.length; i++) {
   //         for (var j = 0; j < board.length; j++) {
                if (x != 0 && board[x-1][y] != undefined) {
                    neighborNumber ++;
                }

                if (x != 5 && board[x+1][y] != undefined) {
                    neighborNumber ++;
                }

                if (y != 0 && board[x][y-1] != undefined) {
                    neighborNumber ++;
                }

                if (y != 5 && board[x][y+1] != undefined) {
                    neighborNumber ++;
                }

                if(neighborNumber == 2){
                    return true;
                }

                return false;
            }
 //       }
 //   }
}
