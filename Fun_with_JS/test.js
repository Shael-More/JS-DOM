const myArr = []

// %DebugPrint(myArr)

// Types of Array in JS
// - continious(PACKED) 
// - Holey

// SMI (small integer)
// Packed Element
//  Double (float, string, function)

const arr2 = [1,2,3,4,5]
// Packed_SMI_Elements

arr2.push(6.0)
// PACKED_DOUBLE_ELEMENTS

arr2.push('7')
// PACKED_ELEMENTS

arr2[10] = 11
// Holey_Elements

console.log(arr2);
console.log(arr2.length);
console.log(arr2[9]);

// bound check
// hasOwnProperty(arr2, 9)
// hasOwnProperty(arr2.prototype, 10)
// hasOwnProperty(Object.prototype, 10)

// Holes are very expensive in JS


const arrThree = [1,2,3,4,5]

// console.log(arrThree[2]);

// Continious : SMI > DOUBLE > PACKED
// hole : H_SMI > H_DOUBLE > H_PACKED

const arrFour = new Array(3)
// just 3 holes. H_SMI_ELEMENTS

arrFour[0] = '1' // H_Elem
arrFour[1] = '2' // H_Elem
arrFour[2] = '3' // H_Elem
// console.log(arrFour);


const arrrFive = []
arrrFive.push("1") // PACKED_ELEM
arrrFive.push("2") // PACKED_ELE
arrrFive.push("3") // PACKED_ELE


