function getPrimes(n){
	if(n===0){
		return 'zero integer has no prime number'
	}
	if (n<0){
		return "negative number not required"
	}
	if(n.constructor!==Number){
		 return ('not a valid input') 
	}
	if(n===1){
		return [] 
	}
	myPrimes=[ ] 
	for(i= 0;i!=n;i++){
		g=n-i
		if(g%2!=0){
			myPrimes.push(g) 
		}
		} 
		return myPrimes
	
}