const button = document.getElementById('submit');
const preTotal = document.getElementById('preTotal');
const increaseTip = document.getElementById('increase');
const decreaseTip = document.getElementById('decrease');
const tipPercentage = document.getElementById('count');

let tip = 0;

// Tip Counter //
increaseTip.addEventListener('click', function(){
    tip += 1;
    tipPercentage.innerHTML =  tip + "%" ;
   
});

decreaseTip.addEventListener('click', function() {
    tip -= 1;
    tipPercentage.innerHTML = tip + "%" ;
})


// Total Calculation after Tip //
button.addEventListener('click', (e) => {
    e.preventDefault();

const customerText = document.getElementById('preTotal').value;
const costOfMeal = Number(customerText);

const tipAmount = document.getElementById('demo');
// Customer is able to see how much they are tipping //
tipAmount.innerHTML = "Tip: " + "$" + costOfMeal *tip / 100

const tipTotall = costOfMeal * tip / 100;
const tipTotal = Number(tipTotall);
console.log(typeof(tipTotal))
const finalTotal = document.getElementById('finalTotal');

// Customer is able to see total after tip and cost of meal is added //
finalTotal.innerHTML = `Total:  $${costOfMeal + tipTotal}`;

console.log(typeof(costOfMeal));
console.log(typeof(tipTotal));



})



