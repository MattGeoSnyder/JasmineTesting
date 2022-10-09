
it('should calculate the monthly rate correctly', function () {
  let values = {
    amount: 100000,
    years: 20,
    rate: 0.03
  };
  expect(calculateMonthlyPayment(values)).toEqual('3002.49');
  values['amount'] = 1000;
  values['years'] = 1;
  values['rate'] = 0.10;
  expect(calculateMonthlyPayment(values)).toEqual('146.76');
});


it("should return a result with 2 decimal places", function() {
  let values = {
    amount: 200000,
    years: 20,
    rate: 0.03
  };
  let payment = Array.from(calculateMonthlyPayment(values));
  let decInd = 0;
  for (let place of payment){
    if(place === '.'){
      break;
    }
    decInd +=1;
  }
  expect(decInd).toEqual(payment.length - 3);

});


