
// Event listener para las cajas de input
const enterButton= document.getElementById("enterbutton");
console.log(enterButton);

enterButton.addEventListener('click', function(){
  let softLenght = document.getElementById("softbox").value; 
});


//Conversion de pulgadas a centimetros 
const inchesToCmsConverstionFactor = 2.54
let softLenghtInches = 4.5;
let hardLenghtInches = 6.75;

 function convertInchestoCms(inch){
 return inch * inchesToCmsConvertionFactor
 }

 let softLenghtCms = convertInchestoCms(softLenghtInches);
 let hardLenghtCms = convertInchestoCms(hardLenghtInches);

 //Diferencia entre soft y hard
 function differenceBetweenSoftAndHard(hardLenght, softLenght){
    return hardLenght - softLenght
 }

console.log(differenceBetweenSoftAndHard(softLenght, hardLenght));
