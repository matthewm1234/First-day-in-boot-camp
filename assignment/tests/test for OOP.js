 describe("Car class well defined", function() {

  it(" should be a type of `object`, and an instance of the `Car` class", function() {
   var honda = new Car('Honda');
   expect(typeof honda).toEqual(typeof {});
  });
  it("The car name and model should be a property of the car", function() {
   var toyota = new Car('Toyota', 'Corolla');
   expect(toyota.name).toBe('Toyota');
   expect(toyota.model).toBe('Corolla');
  });
 });

