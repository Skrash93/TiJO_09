describe('app', function () {
    'use strict';

    var answer = window.app;

    describe('calculateArea', function () {
        it('should return area of figure & message', function () {
            expect(answer.calculateArea(5, 2, 3, 'Ok', 'Fail')).toEqual({area: 3, message: 'Ok'});
            expect(answer.calculateArea(6, 5, 5, 'Ok', 'Fail')).toEqual({area: -6, message: 'Fail'});
            expect(answer.calculateArea(9, 9, 9, 'Ok', 'Fail')).toEqual({area: -30, message: 'Fail'});
            expect(answer.calculateArea(12, 5, 3, 'Ok', 'Fail')).toEqual({area: 1, message: 'Ok'});
            expect(answer.calculateArea(4, 1, 1, 'Ok', 'Fail')).toEqual({area: 4, message: 'Ok'});

        });
        it('should return area of figure & message', function () {
            expect(answer.calculateArea(5, "x", 2, 'Ok', 'Fail')).toEqual(false);
            expect(answer.calculateArea(5, 1, '', 'Ok', 'Fail')).toEqual(false);
            expect(answer.calculateArea("", 1, '', 'Ok', 'Fail')).toEqual(false);
        });

        it('should return area 0 & message "Big null"', function () {
            expect(answer.calculateArea(0, 0, 0, 'Ok', 'Fail')).toEqual({area: 0, message: 'Big null'});

        });

    });
});
 
