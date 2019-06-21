const split = require('./code');

describe('Tests', () => {
    test('the tests', () => {
        expect(split('()()()')).toEqual(['()', '()', '()']);
        expect(split('')).toEqual([]);
        expect(split('()()(())')).toEqual(['()', '()', '(())']);
        expect(split('(())(())')).toEqual(['(())', '(())']);
        expect(split('((()))')).toEqual(['((()))']);
        expect(split('()(((((((((())))))))))')).toEqual(['()', '(((((((((())))))))))']);
        expect(split('((())()(()))(()(())())(()())')).toEqual(['((())()(()))', '(()(())())', '(()())']);
        expect(split('((()))(())()()(()())')).toEqual(['((()))', '(())', '()', '()', '(()())']);
        expect(split('((())())(()(()()))')).toEqual(['((())())', '(()(()()))']);
        expect(split('(()(()()))()(((()))()(()))(()((()))(())())')).toEqual(['(()(()()))', '()', '(((()))()(()))', '(()((()))(())())']);
    });
});
