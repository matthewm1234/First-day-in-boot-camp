 describe("getPrimes if well defined ", function () {
  	it(" should return [7,5,3,1] for getPrimes(8) ",function (){
  	   expect(getPrimes(8)).toEqual([7,5,3,1]) 
  	 }) 
  	it('should return []  for getPrimes(1)', function (){
  		 expect (getPrimes(1)).toEqual([]) 
  		}) 
  		it (' should return " zero integer has no prime number" for 0 input', function (){
  			 expect (getPrimes(0)).toBe('zero integer has no prime number')
  			}) 
  			it("should return 'negative number not required'for negative input", function (){
  				 expect (getPrimes(-2)).toEqual('negative number not required')
  				}) 
  				it ('should return "not a valid number" for invalid input', function (){
  				expect (getPrimes('Matthew')).toBe('not a valid input')
  				}) 
  				}) 
