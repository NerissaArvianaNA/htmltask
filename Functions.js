//alay word
function alay (string){
   string = string.split ('');

   for (var i=0; i<string.length; i++){
      if (string [i].toLowerCase() == "a") string[i] = 4;
      else if (string [i].toLowerCase() == "e") string [i] = 3;
      else if (string [i].toLowerCase() == "i") string [i] = 1;
      else if (string [i].toLowerCase() == "o") string [i] = 0;
   }

   string = string.join('');

   return string;
}

console.log(alay("NERISSA ARVIANA nerissa"));



function coupleInt(array, n) {
    	let result = 0;
    	for (let i = 0; i<array.length; i++) {
    		if (array.includes(n - array[i]) && array[i] != n/2){
    		    // console.log(array[i]);
    		    // console.log(n-array[i]);
    			result += 1;
    		}
    	}
    
    	return console.log(result/2);
      }
    
      coupleInt([4, 7, 3, 9, 1, 10], 12);
      coupleInt([1, 3, 5, 7, 8, 9, 12, 16, 15], 17)
    
    //FIZZBUZZ FUNCTION
    
    function fizzBuzz (array) {
        var num = 0;
        let ArrNum = [];
        for (var i = 0; i<=array.length-1; i++){ 
            if(array[i]%3==0) {
            num ++;
            console.log ("fizz");  
            } else if(array[i]%5==0){ 
            console.log ("Buzz");
            } else if(array[i]%3 == 0 && array[i]%5  == 0) {
            console.log ("fizzBuzz!");
            } else {console.log (array[i]);
            }
        } 	 
    }
    fizzBuzz ([1,2,3,4,8,12,69]); 
    console.log (ArrNum.push (num));
    
    
    
    const fizzBuzz = (num) => {
    	for (let i = 1; i <= num; i++) {
    	  if (i % 15 === 0) {
    		console.log('FizzBuzz');
    	  } else if (i % 3 === 0) {
    		console.log('Fizz');
    	  } else if (i % 5 === 0) {
    		console.log('Buzz');
    	  } else {
    		console.log(i);
    	  }
    	}
      };
    
      fizzBuzz(8);