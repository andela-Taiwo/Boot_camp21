function aritGeo(num){
	
	if(num.length === 0){
		return(0)
	}

	else{
		for(var i=0 ; i<num.length; i++){
			if(typeof(num[i]) !== 'number'){
				return(-1);
				
			}
			else{
				for(var j=i+1; j<num.length; j++){
					if(num[j] -num[i] !== num[j+1] - num[j]){
						return("Geometric");
					}
				return("Arithmetic");


				}
			}


		}
	}
}


function aritGeo(num){
	
	if(num.length === 0){
		return(0);
	}
	else{
		for(var i=0 ; i<num.length; i++){
		  
		  for(var j=i+1; j<num.length; j++){
		    if(num[j] -num[i] === num[j+1] - num[j]){
		      return("Arithmetic");
					}
				else if(num[j]/num[i] === num[j+i]/num[j]){
				  return("Geometric");
				}
			  else{
			    return(-1);
			    
			  }


				}
			}

	}


}



