
it('should calculate the monthly rate correctly', function () {
  values = {
    amount: 20000,
    years: 4,
    rate: 12
  }
  expect(calculateMonthlyPayment(values)).toEqual('526.68')
 
  console.log(calculateMonthlyPayment(values));
  
});


it("should return a result with 2 decimal places", function() {
  // ..
  const values = {
    amount: 10043,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('131.00');
});

/// etc
it("should calculate high interest rates", function()
{
  const values = {
    amount: 1000,
    years: 5,
    rate: 200
  };
  expect(calculateMonthlyPayment(values)).toEqual('166.68');
  
})