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


function nameArr (objIn){
  let arrOfNames = [];  
  for (element of objIn) {
    arrOfNames.push(element.name);
  }
  return arrOfNames;
}

const arrNames = nameArr(freelancers);
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

const arrOccs = occArr(freelancers);
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

// NOT SURE HOW TO CHANGE BELOW TO WORK
// function nameLoop (arrNames){
//   let nameStr = "";
//   for(i = 0; i < arrNames.length; i++) {
//       nameStr = arrNames[i];
//       i++;
      
//   }
//     return nameStr;
// }

// function occLoop (arrOccs){
//   let occStr = "";
//   for(i = 0; i < arrOccs.length; i++) {
//       occStr = arrOccs[i];
//       i++;
      
//   }
//     return occStr;
// }

// function priceLoop (arrPrices){
//   let priceStr = "";
//   for(i = 0; i < arrPrices.length; i++) {
//       priceStr = arrPrices[i];
//       i++;
      
//   }
//     return priceStr;
// }

const body = document.querySelector("body");

const header = document.createElement("h1");
header.textContent = "Freelancer Forum"
body.append(header);

const avgHead = document.createElement("div");
avgHead.textContent = "The average price is: $" + avgPrice(arrPrices);
body.append(avgHead);

const tableHead = document.createElement("h2");
tableHead.textContent = "Available Freelancers";
body.append(tableHead);

const nameHead = document.createElement("h3");
nameHead.textContent = "Name";
body.append(nameHead);

const nameList = document.createElement("ul");
nameList.textContent = arrNames;
body.append(nameList);

const occHead = document.createElement("h3");
occHead.textContent = "Job";
body.append(occHead);

const occList = document.createElement("ul");
occList.textContent = arrOccs;
body.append(occList);

const priceHead = document.createElement("h3");
priceHead.textContent = "Price";
body.append(priceHead);

const priceList = document.createElement("ul");
priceList.textContent = "$" + arrPrices;
body.append(priceList);