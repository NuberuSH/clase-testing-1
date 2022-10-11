
export const calculateSum = (string = "") =>{
  let arrayNumbers = string.split(",");
  arrayNumbers = arrayNumbers.flatMap((element) => element.split("\n"));
  let summary = 0;
  arrayNumbers.forEach(e => summary += parseInt(e));
  return summary;
}


// :) 
/**
 * Nos faltaron los comentarios estos jajajaja
 */


 export const calculateSum1 = (string = "") =>{
  return string.split(",").flatMap((element) => element.split("\n")).map((number) => parseInt(number)).reduce((a,b) => a + b);
}



