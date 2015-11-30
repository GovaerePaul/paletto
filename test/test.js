'use strict';

var PalettoTestCase = TestCase("PalettoTestCase");

var e = new Engine();

PalettoTestCase.prototype.testStory1 = function () {
    e.initialisation();
    assertEquals(e.isJuxtapose(), true);
};

PalettoTestCase.prototype.testStory2 = function () {
    assertEquals(e.isInCorner("Yellow"), true);
};

PalettoTestCase.prototype.testStory3 = function () {
    assertEquals(e.deletePieces(5,0), 35);
    e.setPlayer1Pieces();
    assertEquals(e.getPlayer1Pieces(), 1);
    assertEquals(e.addPiecesPlayer(1,"Yellow"), 1);
};

PalettoTestCase.prototype.testStory4 = function () {
    assertEquals(e.checkPossiblePieces(0,0), true);

    assertEquals(e.deletePieces(0,0), 34);
    e.setPlayer2Pieces();
    assertEquals(e.getPlayer2Pieces(), 1);
    assertEquals(e.addPiecesPlayer(2,"Black"), 1);

    assertEquals(e.checkPossiblePieces(5,5), true);

    assertEquals(e.deletePieces(5,5), 33);
    e.setPlayer2Pieces();
    assertEquals(e.getPlayer2Pieces(), 2);
    assertEquals(e.addPiecesPlayer(2,"Black"), 2);
};

PalettoTestCase.prototype.testStory5 = function () {
    e.goToState();

    assertEquals(e.checkPossiblePieces(0,3), true);
    assertEquals(e.checkPossiblePieces(0,5), true);
    assertEquals(e.checkPossiblePieces(2,4), true);
    assertEquals(e.checkPossiblePieces(3,0), true);
    assertEquals(e.checkPossiblePieces(4,1), true);
    assertEquals(e.checkPossiblePieces(5,2), true);

    assertEquals(e.checkPossiblePieces(2,2), false);

};

var d = new Engine();

PalettoTestCase.prototype.testStory6 = function () {
    d.initialisation();

    assertEquals(d.deletePieces(0, 0), 35);
    d.setPlayer1Pieces();
    assertEquals(d.getPlayer1Pieces(), 1);
    assertEquals(d.addPiecesPlayer(1, "Black"), 1);

    assertEquals(d.deletePieces(5, 5), 34);
    d.setPlayer1Pieces();
    assertEquals(d.getPlayer1Pieces(), 2);
    assertEquals(d.addPiecesPlayer(1, "Black"), 2);

    assertEquals(d.deletePieces(1, 0), 33);
    d.setPlayer2Pieces();
    assertEquals(d.getPlayer2Pieces(), 1);
    assertEquals(d.addPiecesPlayer(2, "Green"), 1);

    assertEquals(d.deletePieces(4, 5), 32);
    d.setPlayer2Pieces();
    assertEquals(d.getPlayer2Pieces(), 2);
    assertEquals(d.addPiecesPlayer(2, "Green"), 2);

    assertEquals(d.deletePieces(5, 4), 31);
    d.setPlayer2Pieces();
    assertEquals(d.getPlayer2Pieces(), 3);
    assertEquals(d.addPiecesPlayer(2, "Green"), 3);

    assertEquals(d.deletePieces(0, 1), 30);
    d.setPlayer1Pieces();
    assertEquals(d.getPlayer1Pieces(), 3);
    assertEquals(d.addPiecesPlayer(1, "Yellow"), 1);

    assertEquals(d.deletePieces(0, 5), 29);
    d.setPlayer1Pieces();
    assertEquals(d.getPlayer1Pieces(), 4);
    assertEquals(d.addPiecesPlayer(1, "Yellow"), 2);

    assertEquals(d.deletePieces(0, 2), 28);
    d.setPlayer2Pieces();
    assertEquals(d.getPlayer2Pieces(), 4);
    assertEquals(d.addPiecesPlayer(2, "Blue"), 1);

    assertEquals(d.deletePieces(0, 4), 27);
    d.setPlayer1Pieces();
    assertEquals(d.getPlayer1Pieces(), 5);
    assertEquals(d.addPiecesPlayer(1, "White"), 1);

    assertEquals(d.deletePieces(5, 3), 26);
    d.setPlayer1Pieces();
    assertEquals(d.getPlayer1Pieces(), 6);
    assertEquals(d.addPiecesPlayer(1, "White"), 2);

    assertEquals(d.deletePieces(5, 0), 25);
    d.setPlayer1Pieces();
    assertEquals(d.getPlayer1Pieces(), 7);
    assertEquals(d.addPiecesPlayer(1, "White"), 3);

    assertEquals(d.deletePieces(2, 0), 24);
    d.setPlayer1Pieces();
    assertEquals(d.getPlayer1Pieces(), 8);
    assertEquals(d.addPiecesPlayer(1, "White"), 4);

    assertEquals(d.deletePieces(4, 0), 23);
    d.setPlayer2Pieces();
    assertEquals(d.getPlayer2Pieces(), 5);
    assertEquals(d.addPiecesPlayer(2, "Red"), 1);

    assertEquals(d.deletePieces(5, 2), 22);
    d.setPlayer2Pieces();
    assertEquals(d.getPlayer2Pieces(), 6);
    assertEquals(d.addPiecesPlayer(2, "Red"), 2);

    assertEquals(d.deletePieces(3, 5), 21);
    d.setPlayer2Pieces();
    assertEquals(d.getPlayer2Pieces(), 7);
    assertEquals(d.addPiecesPlayer(2, "Red"), 3);

    assertEquals(d.deletePieces(0, 3), 20);
    d.setPlayer2Pieces();
    assertEquals(d.getPlayer2Pieces(), 8);
    assertEquals(d.addPiecesPlayer(2, "Red"), 4);

    assertEquals(d.deletePieces(3, 2), 19);
    d.setPlayer1Pieces();
    assertEquals(d.getPlayer1Pieces(), 9);
    assertEquals(d.addPiecesPlayer(1, "Blue"), 1);

    assertEquals(d.deletePieces(5, 1), 18);
    d.setPlayer1Pieces();
    assertEquals(d.getPlayer1Pieces(), 10);
    assertEquals(d.addPiecesPlayer(1, "Blue"), 2);

    assertEquals(d.deletePieces(1, 5), 17);
    d.setPlayer1Pieces();
    assertEquals(d.getPlayer1Pieces(), 11);
    assertEquals(d.addPiecesPlayer(1, "Blue"), 3);

    assertEquals(d.deletePieces(1, 2), 16);
    d.setPlayer2Pieces();
    assertEquals(d.getPlayer2Pieces(), 9);
    assertEquals(d.addPiecesPlayer(2, "Yellow"), 1);

    assertEquals(d.deletePieces(4, 1), 15);
    d.setPlayer2Pieces();
    assertEquals(d.getPlayer2Pieces(), 10);
    assertEquals(d.addPiecesPlayer(2, "Yellow"), 2);

    assertEquals(d.deletePieces(4, 4), 14);
    d.setPlayer2Pieces();
    assertEquals(d.getPlayer2Pieces(), 11);
    assertEquals(d.addPiecesPlayer(2, "Yellow"), 3);

    assertEquals(d.deletePieces(1, 3), 13);
    d.setPlayer1Pieces();
    assertEquals(d.getPlayer1Pieces(), 12);
    assertEquals(d.addPiecesPlayer(1, "Black"), 3);

    assertEquals(d.deletePieces(2, 5), 12);
    d.setPlayer1Pieces();
    assertEquals(d.getPlayer1Pieces(), 13);
    assertEquals(d.addPiecesPlayer(1, "Black"), 4);

    assertEquals(d.deletePieces(3, 4), 11);
    d.setPlayer1Pieces();
    assertEquals(d.getPlayer1Pieces(), 14);
    assertEquals(d.addPiecesPlayer(1, "Black"), 5);

    assertEquals(d.deletePieces(4, 2), 10);
    d.setPlayer1Pieces();
    assertEquals(d.getPlayer1Pieces(), 15);
    assertEquals(d.addPiecesPlayer(1, "Black"), 6);

    assertEquals(d.playerWin(), true);
};

var f = new Engine();

PalettoTestCase.prototype.testStory7 = function () {
    f.initialisation();

    assertEquals(f.deletePieces(0,0), 35);
    f.setPlayer1Pieces();
    assertEquals(f.getPlayer1Pieces(), 1);
    assertEquals(f.addPiecesPlayer(1,"Black"), 1);

    assertEquals(f.deletePieces(5,5), 34);
    f.setPlayer1Pieces();
    assertEquals(f.getPlayer1Pieces(), 2);
    assertEquals(f.addPiecesPlayer(1,"Black"), 2);

    assertEquals(f.deletePieces(0,1), 33);
    f.setPlayer2Pieces();
    assertEquals(f.getPlayer2Pieces(), 1);
    assertEquals(f.addPiecesPlayer(2,"Yellow"), 1);

    assertEquals(f.deletePieces(0,5), 32);
    f.setPlayer2Pieces();
    assertEquals(f.getPlayer2Pieces(), 2);
    assertEquals(f.addPiecesPlayer(2,"Yellow"), 2);

    assertEquals(f.deletePieces(0,4), 31);
    f.setPlayer1Pieces();
    assertEquals(f.getPlayer1Pieces(), 3);
    assertEquals(f.addPiecesPlayer(1,"White"), 1);

    assertEquals(f.deletePieces(5,4), 30);
    f.setPlayer1Pieces();
    assertEquals(f.getPlayer1Pieces(), 4);
    assertEquals(f.addPiecesPlayer(1,"White"), 2);

    assertEquals(f.deletePieces(4,5), 29);
    f.setPlayer2Pieces();
    assertEquals(f.getPlayer2Pieces(), 3);
    assertEquals(f.addPiecesPlayer(2,"Green"), 1);

    assertEquals(f.deletePieces(1,0), 28);
    f.setPlayer2Pieces();
    assertEquals(f.getPlayer2Pieces(), 4);
    assertEquals(f.addPiecesPlayer(2,"Green"), 2);

    assertEquals(f.deletePieces(5,4), 27);
    f.setPlayer2Pieces();
    assertEquals(f.getPlayer2Pieces(), 5);
    assertEquals(f.addPiecesPlayer(2,"Green"), 3);

    assertEquals(f.deletePieces(0,2), 26);
    f.setPlayer1Pieces();
    assertEquals(f.getPlayer1Pieces(), 5);
    assertEquals(f.addPiecesPlayer(1,"Blue"), 1);

    assertEquals(f.deletePieces(5,1), 25);
    f.setPlayer1Pieces();
    assertEquals(f.getPlayer1Pieces(), 6);
    assertEquals(f.addPiecesPlayer(1,"Blue"), 2);

    assertEquals(f.deletePieces(2,0), 24);
    f.setPlayer2Pieces();
    assertEquals(f.getPlayer2Pieces(), 6);
    assertEquals(f.addPiecesPlayer(2,"White"), 1);

    assertEquals(f.deletePieces(5,3), 23);
    f.setPlayer2Pieces();
    assertEquals(f.getPlayer2Pieces(), 7);
    assertEquals(f.addPiecesPlayer(2,"White"), 2);

    assertEquals(f.deletePieces(4,0), 22);
    f.setPlayer1Pieces();
    assertEquals(f.getPlayer1Pieces(), 7);
    assertEquals(f.addPiecesPlayer(1,"Red"), 1);

    assertEquals(f.deletePieces(3,5), 21);
    f.setPlayer1Pieces();
    assertEquals(f.getPlayer1Pieces(), 8);
    assertEquals(f.addPiecesPlayer(1,"Red"), 2);

    assertEquals(f.deletePieces(0,3), 20);
    f.setPlayer1Pieces();
    assertEquals(f.getPlayer1Pieces(), 9);
    assertEquals(f.addPiecesPlayer(1,"Red"), 3);

    assertEquals(f.deletePieces(5,2), 19);
    f.setPlayer1Pieces();
    assertEquals(f.getPlayer1Pieces(), 10);
    assertEquals(f.addPiecesPlayer(1,"Red"), 4);

    assertEquals(f.deletePieces(3,0), 18);
    f.setPlayer2Pieces();
    assertEquals(f.getPlayer2Pieces(), 8);
    assertEquals(f.addPiecesPlayer(2,"Blue"), 1);

    assertEquals(f.deletePieces(1,5), 17);
    f.setPlayer2Pieces();
    assertEquals(f.getPlayer2Pieces(), 9);
    assertEquals(f.addPiecesPlayer(2,"Blue"), 2);

    assertEquals(f.deletePieces(4,1), 16);
    f.setPlayer1Pieces();
    assertEquals(f.getPlayer1Pieces(), 11);
    assertEquals(f.addPiecesPlayer(1,"Yellow"), 1);

    assertEquals(f.deletePieces(4,4), 15);
    f.setPlayer1Pieces();
    assertEquals(f.getPlayer1Pieces(), 12);
    assertEquals(f.addPiecesPlayer(1,"Yellow"), 2);

    assertEquals(f.deletePieces(2,5), 14);
    f.setPlayer2Pieces();
    assertEquals(f.getPlayer2Pieces(), 10);
    assertEquals(f.addPiecesPlayer(2,"Black"), 1);

    assertEquals(f.deletePieces(3,4), 13);
    f.setPlayer2Pieces();
    assertEquals(f.getPlayer2Pieces(), 11);
    assertEquals(f.addPiecesPlayer(2,"Black"), 2);

    assertEquals(f.deletePieces(4,2), 12);
    f.setPlayer2Pieces();
    assertEquals(f.getPlayer2Pieces(), 12);
    assertEquals(f.addPiecesPlayer(2,"Black"), 3);

    assertEquals(f.deletePieces(1,4), 11);
    f.setPlayer1Pieces();
    assertEquals(f.getPlayer1Pieces(), 13);
    assertEquals(f.addPiecesPlayer(1,"Green"), 1);

    assertEquals(f.deletePieces(3,1), 10);
    f.setPlayer2Pieces();
    assertEquals(f.getPlayer2Pieces(), 13);
    assertEquals(f.addPiecesPlayer(2,"Red"), 1);

    assertEquals(f.deletePieces(1,1), 9);
    f.setPlayer1Pieces();
    assertEquals(f.getPlayer1Pieces(), 14);
    assertEquals(f.addPiecesPlayer(1,"White"), 3);

    assertEquals(f.deletePieces(3,2), 8);
    f.setPlayer1Pieces();
    assertEquals(f.getPlayer1Pieces(), 15);
    assertEquals(f.addPiecesPlayer(1,"White"), 4);

    assertEquals(f.deletePieces(4,3), 7);
    f.setPlayer2Pieces();
    assertEquals(f.getPlayer2Pieces(), 14);
    assertEquals(f.addPiecesPlayer(2,"Blue"), 3);

    assertEquals(f.deletePieces(2,4), 6);
    f.setPlayer1Pieces();
    assertEquals(f.getPlayer1Pieces(), 16);
    assertEquals(f.addPiecesPlayer(1,"Yellow"), 3);

    assertEquals(f.deletePieces(1,2), 5);
    f.setPlayer1Pieces();
    assertEquals(f.getPlayer1Pieces(), 17);
    assertEquals(f.addPiecesPlayer(1,"Yellow"), 4);

    assertEquals(f.deletePieces(3,3), 4);
    f.setPlayer2Pieces();
    assertEquals(f.getPlayer2Pieces(), 15);
    assertEquals(f.addPiecesPlayer(2,"Green"), 4);

    assertEquals(f.deletePieces(2,1), 3);
    f.setPlayer2Pieces();
    assertEquals(f.getPlayer2Pieces(), 16);
    assertEquals(f.addPiecesPlayer(2,"Green"), 5);

    assertEquals(f.deletePieces(2,2), 2);
    f.setPlayer1Pieces();
    assertEquals(f.getPlayer1Pieces(), 18);
    assertEquals(f.addPiecesPlayer(1,"Blue"), 3);

    assertEquals(f.deletePieces(1,3), 1);
    f.setPlayer2Pieces();
    assertEquals(f.getPlayer2Pieces(), 17);
    assertEquals(f.addPiecesPlayer(2,"Black"), 4);

    assertEquals(f.deletePieces(2,3), 0);
    f.setPlayer1Pieces();
    assertEquals(f.getPlayer1Pieces(), 19);
    assertEquals(f.addPiecesPlayer(1,"Red"), 5);

    assertEquals(f.noMarbleWinner(), true);
};