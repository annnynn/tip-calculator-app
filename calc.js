const billPut = document.getElementById("billPut");
const numberOfPeople = document.getElementById("numberOfPeople");
const tipForPerson = document.getElementById("tip-amount");
const totalForPerson = document.getElementById("total-amount")
const customNumber = document.getElementById("custom");
const resetButton = document.getElementById("reset");
const percentage = document.getElementsByClassName("percentage");

for(let i = 0; i < percentage.length; i++){
  percentage[i].onclick = function(){
      this.classList.add("checked");
  }
  percentage[i].addEventListener("click", (event) => {
    console.log(parseInt(event.target.innerText));
  })
};


billPut.addEventListener("input", billFunction);
numberOfPeople.addEventListener("input", peopleFunction);
customNumber.addEventListener("input", customNumberFunction);


let bill = 0.0;
let people = 0;
let tip = 0;
let custom = 0;


function billFunction(event){
   bill = parseFloat(event.target.value);
   console.log(bill);
}

function peopleFunction(event){
    people = parseFloat(event.target.value);
    console.log(people);
}


function customNumberFunction(event){
   custom = event.target.value;
}
