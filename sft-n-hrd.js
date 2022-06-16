const inchesToCmsConvertionFactor = 2.54
let softLenghtInches = 4.5;
let hardLenghtInches = 6.75;


 function convertInchestoCms(inch){
 return inch * inchesToCmsConvertionFactor
 }

 function differenceBetweenSoftAndHard(hardLenght, softLenght){
    return hardLenght - softLenght
 }

 let softLenghtCms = convertInchestoCms(softLenghtInches);
 let hardLenghtCms = convertInchestoCms(hardLenghtInches);


console.log(softLenghtCms, hardLenghtCms, 'cm');
console.log(differenceBetweenSoftAndHard(hardLenghtCms, softLenghtCms), 'cm diff');
