var executed = false;
var expArray= [];
var deciStat = false;
var piStat = false;
var deciInserted = false;
var firstPercent = false;
var symbolStatus = false;
var i = 7;
var operationInserted = false;
var finalSym = false;
var exponential;
var firstNegate = false;
  console.log("statusOnLoad", finalSym, operationInserted, executed, deciStat, piStat, deciInserted);

function insert(num){
  if(executed == false){
  document.calculator.display.value = "";
  executed = true;
}

if(num === '*' || num === '/' || num === '+'|| num === '-'){
  if(expArray[expArray.length - 1] == '+' || expArray[expArray.length - 1] == '-' || expArray[expArray.length -1] == '*' || expArray[expArray.length - 1] == '/'){
    expArray.pop();
    expArray.push(num);
    operationInserted = true;
    console.log("raw array" , expArray);
  }
}


  if(operationInserted == false){
    document.calculator.display.value = document.calculator.display.value + num;
    expArray.push(num);
      console.log("joined array" , expArray.join(''));
  }

  if(Number(document.calculator.display.value.length) <= 10){
    document.calculator.display.value = document.calculator.display.value;
  }else{
    document.getElementsByClassName("button").disabled = false;
  }

  if(deciInserted == false){
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
  deciStat = false;
  piStat = false;
  deciInserted = false;
  firstNegate = false;
  console.log("status", finalSym, operationInserted, executed, deciStat, piStat, deciInserted);
    expArray = [];

    document.getElementsByClassName("button").disabled = false;
}
function clearOnOp(){
  operationInserted = false;
   i = i = 7;
  symbolStatus = false;
  firstPercent = false;
  document.calculator.display.value= 0;
  executed = false;
  deciStat = false;
  piStat = false;
  deciInserted = false;
  firstNegate = true;

  document.getElementsByClassName("button").disabled = false;
}
function equal(){
  symbolStatus = false;
  firstPercent = false;
  piStat = false;
  finalSym = true;

  document.getElementsByClassName("button").disabled = false;

  let calcAnswer= eval(expArray.join(''));
  if(expArray.join(",").includes("e")){
     exponential = true;
  }
  console.log(exponential);

    expArray = [];
    expArray.push(calcAnswer);
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
let negNum = expArray * -1;
expArray[expArray.length-1] = (String(expArray[expArray.length-1]));
expArray.unshift("-");

  console.log(expArray);
  deciInserted = true;
  deciStat = true;
  document.getElementsByClassName("button").disabled = false;
}

function percentage(){
  document.calculator.display.value = document.calculator.display.value.split(",").join("");
  if(finalSym == false){
  if(firstPercent == false){
  let numberCount = document.calculator.display.value.length;
  numberCount = numberCount -1;
  console.log("nums", numberCount);
  let removed = expArray.length - numberCount;

  while(expArray.length >= removed){
  expArray.pop();
  }

  document.calculator.display.value = Number(document.calculator.display.value) / 100;
  expArray[removed] = document.calculator.display.value;
  console.log(expArray);
  firstPercent = true;

}else{
  let numberCount2 = document.calculator.display.value.length;
  numberCount2 = numberCount2 - i;
  console.log("nums2", numberCount2);
  let amountToBeRemoved2 = expArray.length - numberCount2;
  expArray.splice(expArray.length -1);
  document.calculator.display.value = document.calculator.display.value / 100;
  expArray.push(document.calculator.display.value);
  console.log("array", expArray);
  console.log("doc", document.calculator.display.value);
  if(document.calculator.display.value>= 0.9999999){
    let expon= Number(document.calculator.display.value);
    console.log(typeof expon);
    document.calculator.display.value = expon.toExponential(9);
  }
  console.log("percentaged array", expArray);
}
}else{
  document.calculator.display.value = document.calculator.display.value / 100;
  expArray = [];
  expArray.push(document.calculator.display.value);
  let expon= Number(document.calculator.display.value);
  console.log(typeof expon);
  if(document.calculator.display.value>= 0.9999999){
  document.calculator.display.value = expon.toExponential(9);
    }
  }
}

function decimalInsert(num){
  if(deciStat == false){
    document.calculator.display.value = document.calculator.display.value + num;
    expArray.push(num);
    console.log("decimal array", expArray);
    deciStat = true;
    deciInserted = true;
    document.getElementById("decimal").disabled = true;
  }
}
function piInsert(num){
  if(piStat == false){
    document.calculator.display.value = '';
    document.calculator.display.value = document.calculator.display.value + num;
    expArray.push(num);
    console.log("array and pi", expArray);
    piStat = true;
  }
}
