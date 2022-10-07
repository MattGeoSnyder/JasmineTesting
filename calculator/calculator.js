window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
    setupIntialValues();
    form.addEventListener("submit", function(e) {
      e.preventDefault();
      update();
    });
  }
});

function getCurrentUIValues() {
  return {
    amount: +(document.getElementById("loan-amount").value),
    years: +(document.getElementById("loan-years").value),
    rate: +(document.getElementById("loan-rate").value),
  }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
  let inputs = document.querySelectorAll('#calc-form input');
  inputs[0].value = 200000;
  inputs[1].value = 20;
  inputs[2].value = .03;
}

// Get the current values from the UI
// Update the monthly payment
function update() {
  let values = getCurrentUIValues();
  updateMonthly(calculateMonthlyPayment(values));
}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
  const p = values['amount'];
  const n = values['years']*12;
  const i = values['rate'];
  return `${Math.round((p*i*100)/(1 - Math.pow(1+i,-n)))/100}`;
}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthly) {
  let moPay = document.querySelector('#monthly-payment');
  moPay.innerText = monthly;
}
