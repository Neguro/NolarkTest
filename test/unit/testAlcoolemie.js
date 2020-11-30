/**
 * Test unitaires du projet alcoolemie
 * 
 */

MesTestsUnitaires = TestCase('AlcoolemieTest');
MesTestsUnitaires.prototype.testGetAlcoolPur = function() {
    assertEquals('0 verre', 0, getAlcoolPur(0));
    assertEquals('10 verre', 10, getAlcoolPur(1));
};

MesTestsUnitaires.prototype.testGetCoefDiffusion = function () {
    assertEquals('Homme', 0.7, getCoefDiffusion('homme'));
    assertEquals('Femme', 0.6, getCoefDiffusion('femme'));
};
