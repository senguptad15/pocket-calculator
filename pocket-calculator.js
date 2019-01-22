var executed = false;
var expressionArray= [];
var decimalStatus = false;
var piStatus = false;
var decimalInserted = false;
var firstPercent = false;
var symbolStatus = false;
var i = 7;
var operationInserted = false;
var finalSym = false;
var exponential;
var firstNegate = false;
  console.log("statusOnLoad", finalSym, operationInserted, executed, decimalStatus, piStatus, decimalInserted);

function insert(num){
  if(executed == false){
  document.calculator.display.value = "";
  executed = true;
}

if(num === '*' || num === '/' || num === '+'|| num === '-'){
  if(expressionArray[expressionArray.length - 1] == '+' || expressionArray[expressionArray.length - 1] == '-' || expressionArray[expressionArray.length -1] == '*' || expressionArray[expressionArray.length - 1] == '/'){
    expressionArray.pop();
    expressionArray.push(num);
    operationInserted = true;
    console.log("raw array" , expressionArray);
  }
}


  if(operationInserted == false){
    document.calculator.display.value = document.calculator.display.value + num;
    expressionArray.push(num);
      console.log("joined array" , expressionArray.join(''));
  }

  if(Number(document.calculator.display.value.length) <= 10){
    document.calculator.display.value = document.calculator.display.value;
  }else{
    document.getElementById("zero_button").disabled = true;
    document.getElementById("button1").disabled = true;
    document.getElementById("button2").disabled = true;
    document.getElementById("button3").disabled = true;
    document.getElementById("button4").disabled = true;
    document.getElementById("button5").disabled = true;
    document.getElementById("button6").disabled = true;
    document.getElementById("button7").disabled = true;
    document.getElementById("button8").disabled = true;
    document.getElementById("button9").disabled = true;
    document.getElementById("decimal").disabled = true;
    document.getElementById("pi_Button").disabled = true;
  }

  if(decimalInserted == false){
 let commaInput = Number(document.calculator.display.value.split(",").join("")).toLocaleString();
 document.calculator.display.value = commaInput;
  }
}

function clean(){
  finalSym = false;
  operationInserted = false;
  document.calculator.display.value=0;
   i = i = 7;
  executed = false;
  decimalStatus = false;
  piStatus = false;
  decimalInserted = false;
  firstNegate = false;
  console.log("status", finalSym, operationInserted, executed, decimalStatus, piStatus, decimalInserted);
    expressionArray = [];

    document.getElementById("zero_button").disabled = false;
    document.getElementById("button1").disabled = false;
    document.getElementById("button2").disabled = false;
    document.getElementById("button3").disabled = false;
    document.getElementById("button4").disabled = false;
    document.getElementById("button5").disabled = false;
    document.getElementById("button6").disabled = false;
    document.getElementById("button7").disabled = false;
    document.getElementById("button8").disabled = false;
    document.getElementById("button9").disabled = false;
    document.getElementById("pi_Button").disabled = false;
    document.getElementById("decimal").disabled = false;
}
function clearOnOp(){
  operationInserted = false;
   i = i = 7;
  symbolStatus = false;
  firstPercent = false;
  document.calculator.display.value= 0;
  executed = false;
  decimalStatus = false;
  piStatus = false;
  decimalInserted = false;
  firstNegate = true;

  document.getElementById("zero_button").disabled = false;
  document.getElementById("button1").disabled = false;
  document.getElementById("button2").disabled = false;
  document.getElementById("button3").disabled = false;
  document.getElementById("button4").disabled = false;
  document.getElementById("button5").disabled = false;
  document.getElementById("button6").disabled = false;
  document.getElementById("button7").disabled = false;
  document.getElementById("button8").disabled = false;
  document.getElementById("button9").disabled = false;
 document.getElementById("pi_Button").disabled = false;
  document.getElementById("decimal").disabled = false;
}
function equal(){
  symbolStatus = false;
  firstPercent = false;
  piStatus = false;
  finalSym = true;

  document.getElementById("decimal").disabled = true;
  document.getElementById("zero_button").disabled = true;
  document.getElementById("button1").disabled = true;
  document.getElementById("button2").disabled = true;
  document.getElementById("button3").disabled = true;
  document.getElementById("button4").disabled = true;
  document.getElementById("button5").disabled = true;
  document.getElementById("button6").disabled = true;
  document.getElementById("button7").disabled = true;
  document.getElementById("button8").disabled = true;
  document.getElementById("button9").disabled = true;
  document.getElementById("pi_Button").disabled = true;

  let calcAnswer= eval(expressionArray.join(''));
  if(expressionArray.join(",").includes("e")){
     exponential = true;
  }
  console.log(exponential);

    expressionArray = [];
    expressionArray.push(calcAnswer);
    console.log("evaluated raw", calcAnswer);
  if(calcAnswer > 999999999 || calcAnswer < -999999999){
    document.calculator.display.value = calcAnswer.toExponential(9);
  }else{
    document.calculator.display.value=calcAnswer.toLocaleString("en");
  }
  if(exponential == true){
    document.calculator.display.value = calcAnswer;
  }

  if(document.calculator.display.value === "Infinity" || document.calculator.display.value === "NaN" || document.calculator.display.value === "∞") {
    document.calculator.display.value = "ERROR";
  }
}
function negation(){
  let neg = 1;
  document.calculator.display.value = document.calculator.display.value.split(",").join("");
  document.calculator.display.value = Number(document.calculator.display.value) * -1;
  document.calculator.display.value = Number(document.calculator.display.value).toLocaleString("en");
  document.calculator.display.value = "(" + document.calculator.display.value + ")";
//   for(let i = 0; i < expressionArray.length; i++){
//   //for(let num of expressionArray){
//   let num = String(expressionArray[i]);
//   if(num === 0 || num === 1 || num === 2 || num === 3 || num === 4 || num === 5 || num === 6 || num === 7 || num === 8 || num === 9){
//     var numNums = numNums+String(num);}
// //   }else if (num === "-") {
// //       neg = neg * -1;
// }
//   parseInt(numNums);
//   console.log(numNums);
//   numNums = numNums * neg;
//   console.log(numNums);
// }
// final bracket- for loop
//  expressionArray[expressionArray.length] = "(" + (String(expressionArray[expressionArray.length] * -1)) + ")";
// let numNums = parseInt(expressionArray);
// numNums * -1;
// console.log(numNums);
// expressionArray.pop();
let negNum = expressionArray * -1;
expressionArray[expressionArray.length-1] = (String(expressionArray[expressionArray.length-1]));
expressionArray.unshift("-");

  // parseInt(expressionArray);
  // expressionArray * -1;
  console.log(expressionArray);
  decimalInserted = true;
  decimalStatus = true;
  document.getElementById("decimal").disabled = true;
  document.getElementById("zero_button").disabled = true;
  document.getElementById("button1").disabled = true;
  document.getElementById("button2").disabled = true;
  document.getElementById("button3").disabled = true;
  document.getElementById("button4").disabled = true;
  document.getElementById("button5").disabled = true;
  document.getElementById("button6").disabled = true;
  document.getElementById("button7").disabled = true;
  document.getElementById("button8").disabled = true;
  document.getElementById("button9").disabled = true;
  document.getElementById("pi_Button").disabled = true;
}

function percentage(){
  document.calculator.display.value = document.calculator.display.value.split(",").join("");
  if(finalSym == false){
  if(firstPercent == false){
  let numberCount = document.calculator.display.value.length;
  numberCount = numberCount -1;
  console.log("nums", numberCount);
  let removed = expressionArray.length - numberCount;

  while(expressionArray.length >= removed){
  expressionArray.pop();
  }

  document.calculator.display.value = Number(document.calculator.display.value) / 100;
  expressionArray[removed] = document.calculator.display.value;
  console.log(expressionArray);
  firstPercent = true;

}else{
  let numberCount2 = document.calculator.display.value.length;
  numberCount2 = numberCount2 - i;
  console.log("nums2", numberCount2);
  let amountToBeRemoved2 = expressionArray.length - numberCount2;
  expressionArray.splice(expressionArray.length -1);
  document.calculator.display.value = document.calculator.display.value / 100;
  expressionArray.push(document.calculator.display.value);
  console.log("array", expressionArray);
  console.log("doc", document.calculator.display.value);
  if(document.calculator.display.value>= 0.9999999){
    let expon= Number(document.calculator.display.value);
    console.log(typeof expon);
    document.calculator.display.value = expon.toExponential(9);
  }
  console.log("percentaged array", expressionArray);
}
}else{
  document.calculator.display.value = document.calculator.display.value / 100;
  expressionArray = [];
  expressionArray.push(document.calculator.display.value);
  let expon= Number(document.calculator.display.value);
  console.log(typeof expon);
  if(document.calculator.display.value>= 0.9999999){
  document.calculator.display.value = expon.toExponential(9);
    }
  }
}

function decimalInsert(num){
  if(decimalStatus == false){
    document.calculator.display.value = document.calculator.display.value + num;
    expressionArray.push(num);
    console.log("decimal array", expressionArray);
    decimalStatus = true;
    decimalInserted = true;
    document.getElementById("decimal").disabled = true;
  }
}
function piInsert(num){
  if(piStatus == false){
    document.calculator.display.value = '';
    document.calculator.display.value = document.calculator.display.value + num;
    expressionArray.push(num);
    console.log("array and pi", expressionArray);
    piStatus = true;
  }
}
