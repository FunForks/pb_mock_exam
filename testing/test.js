
const { hasDoubleVowels, isMultipleOfNine, polygonType, rockAndRoll, powerOutput, secretSanta } = require("../index");


describe('hasDoubleVowels', () => {
    test.each`
    input| expected 
    ${"aardvark"} | ${"aardvark"}
    ${"BEE"} | ${"BEE"}
    ${"SKIing"} | ${"SKIing"}
    ${"good"} | ${"good"}
    ${"Continuum"} | ${"Continuum"}
    ${"INN"} | ${"The input has no double vowels"}
    ${"edge"} | ${"The input has no double vowels"}
    `('check if $input contains double vowel: $expected', ({input, expected}) => {
        expect(hasDoubleVowels(input)).toBe(expected);
    });
});

describe('isMultipleOfNine', () => {
    test.each`
    input| expected 
    ${9} | ${true}
    ${"117"} | ${true}
    ${9e9} | ${true}
    ${0b1001} | ${true}
    ${0x12} | ${true}
    ${6} | ${false}
    ${"66"} | ${false}
    `('check if $input is a multiple of 9: $expected', ({input, expected}) => {
        expect(isMultipleOfNine(input)).toBe(expected);
    });
});

describe('polygonType', () => {
    test.each`
    input | expected 
    ${[3,4,5]} | ${"triangle"}
    ${[2,4,5]} | ${"triangle"}
    ${[4, 4, 4]} | ${"equilateral triangle"}
    ${[3,4,5,6]} | ${"quadrilateral"}
    ${[9,9,9,9]} | ${"square"}
    ${[3,4,5,6,7]} | ${"pentagon"}
    ${[7,7,7,7,7]} | ${"regular pentagon"}
    ${[3,4,5,6,7,8]} | ${"hexagon"}
    ${[3,3,3,3,3,3]} | ${"regular hexagon"}
    ${[1,1,1,1,1,1,1]} | ${"unexpected number of sides"}
    ${[2,1]} | ${"unexpected number of sides"}
    ${[1,2,3,4,5,6,7,8,9]} | ${"unexpected number of sides"}
    `('$input describes the shape: $expected', ({input, expected}) => {
        expect(polygonType(...input)).toBe(expected);
    });
});

describe('rockAndRoll', () => {
    test.each`
    input| expected 
    ${"🥁"} | ${"roll"}
    ${"🧻"} | ${"roll"}
    ${"🙄"} | ${"roll"}
    ${"🎸"} | ${"rock"}
    `('Rock or roll?: if $input then $expected', ({input, expected}) => {
        expect(rockAndRoll(input)).toBe(expected);
    });
});

// //loops

test('powerOutput', () => {
    expect(powerOutput()).toBe("1 4 27 256 3125 46656");
})

describe('secretSanta', () => {
    test.each`
    input| expected 
    ${"There's no business like show business"} | ${1}
    ${"E.T. phone home"} | ${2}
    ${"A whole holiday in Holland"} | ${3}
    ${"Homer is our household hotshot with horseshoes."} | ${7}
    ${"Shoshone, Idaho"} | ${3}
    ${"Toledo, Ohio"} | ${0}
    `('$input contains $expected occurrences of "ho"', ({input, expected}) => {
        expect(secretSanta(input)).toBe(expected);
    });
});
