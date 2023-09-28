const {can, obj, obj2} = require('../toBe')
  // string, number, undefined, null, Object, Function, boolean, 
  describe('the can', () => {
    test('has 12 ounces', () => {
      expect(can.ounces).toBe(12);
    });
  
    test('has a sophisticated name', () => {
      expect(can.name).toBe('pamplemousse');
    });


    test('has a NaN value', () => {
        expect(can.noValue).toBe(NaN);
      });


    //   test('has a Object value', () => {
    //     expect(can.obj).toBe(obj2); // case 会失败
    //   });

      test('has a null value', () => {
        expect(can.nullV).toBe(null); 
      });

      test('has a undefined value', () => {
        expect(can.undefinedV).toBe(undefined); 
      });

      test('has a Symbol value', () => {
        expect(can.SymbolV).toBe(Symbol.for('for')); 
      });
  });