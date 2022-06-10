// //function addNumbers(x, y){
// return x + y
// }

// const totalAge = addNumbers(30, 31);

// console.log(totalAge);
var inchesToCmsConverstionFactor = 2.54
const brianLenghtInches = 4.5;
const brianLenghtInchesWhenHard = 6.75;


 function convertInchestoCms(inch){
 return inch * inchesToCmsConverstionFactor
 }

 function differenceBetweenSoftAndHard(lenghtSoft, lenghtHard){
    return lenghtHard - lenghtSoft
 }

 const lenghtHard = 17.145
 const lenghtSoft = 11.43
 const brianLenghtCms = convertInchestoCms(brianLenghtInches);
 const brianLenghtCmsWhenHard = convertInchestoCms(brianLenghtInchesWhenHard);


console.log(brianLenghtCms, brianLenghtCmsWhenHard);
console.log(differenceBetweenSoftAndHard(lenghtSoft, lenghtHard));