// function takeANumber(katzDeliLine, person) {
//   katzDeliLine.push(person);
//   return `Welcome, ${person}. You are number ${katzDeliLine.length} in line.`
// }
var katzDeliLine = []
var number = 0;
 
function takeANumber (katzDeliLine) {
  number += 1
  katzDeliLine.push(number);
  console.log(katzDeliLine)
  return `Welcome. You are number ${number} in line.`;
}
takeANumber (katzDeliLine)
takeANumber (katzDeliLine)
takeANumber (katzDeliLine)
takeANumber (katzDeliLine)
takeANumber (katzDeliLine)

function nowServing (katzDeliLine) {
  let i = 0
  while (i < katzDeliLine.length) {
    i++
  }
  if (katzDeliLine.length === 0) {
    return "There is nobody waiting to be served!";
  }
  else
  return (`Currently serving ${katzDeliLine.shift()}.`);
}

function currentLine (katzDeliLine) {
  var line = []
  for (let i = 0; i < katzDeliLine.length; i++) {
    line.push(` ${i+1}. ${katzDeliLine[i]}`);
  }
  if (katzDeliLine.length === 0) {
    return "The line is currently empty.";
  } 
  else 
  return (`The line is currently:` + line);
}