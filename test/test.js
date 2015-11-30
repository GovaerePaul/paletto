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
    assertEquals(e.addPiecesPlayer(1,"Black"), 1);

    assertEquals(e.checkPossiblePieces(5,5), true);

    assertEquals(e.deletePieces(5,5), 33);
    e.setPlayer2Pieces();
    assertEquals(e.getPlayer2Pieces(), 2);
    assertEquals(e.addPiecesPlayer(1,"Black"), 2);
};

PalettoTestCase.prototype.testStory5 = function () {
    assertEquals(e.checkPossiblePieces(3,0), true);
    assertEquals(e.checkPossiblePieces(5,0), true);
    assertEquals(e.checkPossiblePieces(4,2), true);
    assertEquals(e.checkPossiblePieces(0,3), true);
    assertEquals(e.checkPossiblePieces(1,4), true);
    assertEquals(e.checkPossiblePieces(2,5), true);

    assertEquals(e.checkPossiblePieces(2,2), true);

};