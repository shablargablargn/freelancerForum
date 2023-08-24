const container = document.querySelector('.container');
const freelancers = [
    { name: "Dr. Slice", price: 25, occupation: "gardener" },
    { name: "Dr. Pressure", price: 51, occupation: "programmer" },
    { name: "Prof. Possibility", price: 43, occupation: "teacher" },
    { name: "Prof. Prism", price: 81, occupation: "teacher" },
    { name: "Dr. Impulse", price: 43, occupation: "teacher" },
    { name: "Prof. Spark", price: 76, occupation: "programmer" },
    { name: "Dr. Wire", price: 47, occupation: "teacher" },
    { name: "Prof. Goose", price: 72, occupation: "driver" },
  ];
  const body = document.querySelector("body");
  const header = document.createElement("h1");
  header.textContent = "Freelancer Forum"
  body.append(header);
  

function nameArr (objIn){
  let arrOfNames = [];  
  for (element of objIn) {
    arrOfNames.push(element.name);
  }
  return arrOfNames;
}
//console.log(nameArr(freelancers));

function priceArr (objIn){
  let arrOfPrices = [];  
  for (element of objIn) {
    arrOfPrices.push(element.price);
  }
  return arrOfPrices;
}
const arrPrices = priceArr(freelancers);
//console.log(priceArr(freelancers));

function occArr (objIn){
  let arrOfOccs = [];  
  for (element of objIn) {
    arrOfOccs.push(element.occupation);
  }
  return arrOfOccs;
}
//console.log(occArr(freelancers));



function avgPrice (numArray){
  let total = 0;
  let count = 0;
  
  arrPrices.forEach(function(num, index){
    total += num;
    count++;
  }, 0);
  return total / count;
}
//console.log(avgPrice(arrPrices));

const avgHead = document.querySelector('.avgPrice');

function render(){
  const avgHTML = avgPrice(arrPrices).map(function(num){
    return `<div>${num}</div>`;
  });
}

