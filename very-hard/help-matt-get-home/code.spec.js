const getPathLength = require('./code');

describe('Tests', () => {
    
    
    test('the tests', () => {
        expect(getPathLength('m,.,.,.,t,.,.,.,h', 3, 3)).toEqual(3);
        expect(getPathLength('m,.,.,.,.,.,.,.,h', 3, 3)).toEqual(2);
        expect(getPathLength('m,h', 2, 1)).toEqual(1);
        expect(getPathLength('.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,m,.,.,.,.,.,.,.,t,t,t,.,.,.,.,.,.,.,t,h,.,.,.,.,.,.,.,.,t,t,.,.,.,.,.,.,.,.,.,.,.', 10, 10)).toEqual(9);
        expect(getPathLength('.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,m,.,.,.,.,.,.,.,t,t,t,.,.,.,.,.,.,.,t,h,t,.,.,.,.,.,.,.,t,t,t,.,.,.,.,.,.,.,.,.,.', 10, 10)).toEqual(-1);
        expect(getPathLength('m,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,t,t,.,.,.,.,.,.,.,.,.,t,h', 10, 10)).toEqual(14);
        expect(getPathLength('m,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,t,.,.,t,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,t,.,t,.,.,.,.,.,.,.,t,.,t,.,.,.,.,.,.,.,.,t,t,.,.,.,.,.,.,.,t,t,t,.,.,.,.,.,.,.,t,t,t,.,.,.,.,.,.,.,t,.,t,h', 10, 10)).toEqual(15);
        expect(getPathLength('m,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,h', 25, 25)).toEqual(24);
        expect(getPathLength('m,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,t,t,t,t,t,.,t,.,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,.,t,t,t,t,t,t,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,t,t,t,t,t,t,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,h', 25, 25)).toEqual(91);
        expect(getPathLength('m,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,t,t,t,t,t,.,t,.,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,.,t,t,t,t,t,t,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,t,t,t,t,t,t,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,t,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,.,t,h', 25, 25)).toEqual(-1);
    });
});