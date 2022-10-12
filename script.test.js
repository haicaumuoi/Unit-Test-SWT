import { calculator, capitalize, reverseString, analyzeArray } from "./script";

test('Capitalize Successfully', () => {
    expect(capitalize('brady')).toBe('Brady');
})

test('Reverse String', () => {
    expect(reverseString('haianh')).toBe('hnaiah');
})

test('Calculator plus', () => {
    expect(calculator(1,2,'plus')).toEqual(3);
})

test('Calculator minus', () => {
    expect(calculator(1,2,'minus')).toEqual(-1);
})

test('Calculator multiply', () => {
    expect(calculator(1,2,'multiply')).toEqual(2);
})

test('Calculator divide =/= 0', () => {
    expect(calculator(1,2,'divide')).toBeCloseTo(0.5);
})

test('Calculator divide = 0', () => {
    expect(calculator(1,0,'divide')).toBe("Can't divide 0");
})

test('analyze array', () => {
    expect(analyzeArray(1,5,3,5,7,8).toBe());
})