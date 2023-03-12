// importamos el objeto `validator`, que contiene las funciones `isValid` y `maskify`
import validator from '../src/validator';

describe('validator', () => {
  it('debería ser un objeto', () => {
    expect(typeof validator).toBe('object');
  });

  describe('validator.isValid', () => {
    it('debería ser una función', () => {
      expect(typeof validator.isValid).toBe('function');
    });

    it('debería retornar true para "4083952015263"', () => {
      expect(validator.isValid('4083952015263')).toBe(true);
    });

    it('debería retornar true para "79927398713"', () => {
      expect(validator.isValid('79927398713')).toBe(true);
    });

    it('debería retornar false para "1234567890"', () => {
      expect(validator.isValid('1234567890')).toBe(false);
    });
  });

  describe('validator.maskify', () => {
    it('debería ser una función', () => {
      expect(typeof validator.maskify).toBe('function');
    });

    it('Debería retornar "############5616" para "4556364607935616"', () => {
      expect(validator.maskify('4556364607935616')).toBe('############5616');
    });

    it('Debería retornar "1" para "1"', () => {
      expect(validator.maskify('1')).toBe('1');
    });

    it('Debería retornar "######orld" para "helloworld"', () => {
      expect(validator.maskify('helloworld')).toBe('######orld');
    });
  });

  describe('validator.franquicia', () => {
   
    it('Debería retornar "MasterCard" para "5105105105105100"', () => {
      expect(validator.franquicia("5105105105105100")).toBe("MasterCard");
    });

    it('Debería retornar "Diners Club / Carte Blanche" para "30569309025904"', () => {
      expect(validator.franquicia("30569309025904")).toBe("Diners Club / Carte Blanche");
    });

    it('Debería retornar "JCB" para "3530111333300000"', () => {
      expect(validator.franquicia('3530111333300000')).toBe('JCB');
    });

    it('Debería retornar "Diners Club / enRoute" para "201477457246665"', () => {
      expect(validator.franquicia('201477457246665')).toBe('Diners Club / enRoute');
    });

    it('Debería retornar "Discover" para "6011111111111117"', () => {
      expect(validator.franquicia('6011111111111117')).toBe('Discover');
    });

    it('Debería retornar "Diners Club / Carte Blanche" para "30223171276472"', () => {
      expect(validator.franquicia('30223171276472')).toBe('Diners Club / Carte Blanche');
    });

    it('Debería retornar "American Express" para "371449635398431"', () => {
      expect(validator.franquicia('371449635398431')).toBe('American Express');
    });

    it('Debería retornar "Diners Club / International" para "36614750633428"', () => {
      expect(validator.franquicia('36614750633428')).toBe('Diners Club / International');
    });

    it('Debería retornar "JCB" para "3530111333300000"', () => {
      expect(validator.franquicia('3530111333300000')).toBe('JCB');
    });

    it('Debería retornar "Visa" para "4111111111111111"', () => {
      expect(validator.franquicia('4111111111111111')).toBe('Visa');
    });

    it('Debería retornar "Franquicia no identificada" para "0567548757478987"', () => {
      expect(validator.franquicia('0567548757478987')).toBe('Franquicia no identificada');
    });
  });
});
