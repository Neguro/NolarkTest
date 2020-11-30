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

MesTestsUnitaires.prototype.testsGetAlcoolemie =function(){
    assertEquals('Homme 100 kg 1 verre',0.14,getAlcoolemie('homme',100,1));
    assertEquals('Femme 100 kg 1 verre',0.17,getAlcoolemie('femme',100,1));
};