function getPrime(num){

  var n=2;
  primeNumbers =[];
  if(typeof(num) === 'number'){


	  while(n<num){
	      prime = true;
	      for(var j=2; j<n;j++){
	          if (n%j===0){
	              prime = false;
	          }
	      }
	      if (prime){
	        primeNumbers.push(n);
	      
	         
	      }
	    n +=1;
	         
	  }
	  return(primeNumbers)
	}else{
		return(undefined);
	}
}