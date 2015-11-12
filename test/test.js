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
    e.setPlayerPieces();
    assertEquals(e.getPlayerPieces(), 1);
    assertEquals(e.addPiecesPlayer(1,"Yellow"), 1);
};

PalettoTestCase.prototype.testStory4 = function () {
    assertEquals(e.deletePieces(0,0), 34);
    e.setPlayerPieces();
    assertEquals(e.getPlayerPieces(), 1);
    assertEquals(e.addPiecesPlayer(1,"Black"), 1);

    assertEquals(e.deletePieces(5,5), 33);
    e.setPlayerPieces();
    assertEquals(e.getPlayerPieces(), 2);
    assertEquals(e.addPiecesPlayer(1,"Black"), 2);
};