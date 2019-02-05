//let num = [4,5,3,9,1,4,8,8,0,3,4,3,6,4,6,7];
let num = [4,8,4,7,3,5,2,9,8,9,2,6,3,0,9,4]
function checkLuhn(num){
    
    let sum = num.length-1;   
    
    let total = 0;
    let x = sum;

    for(let i=sum; i>=0; i--){
        let n = num[i];
        //let n = parseInt(num.charAt(i));
            if(x%2 == 0){
            let y = n*2
                if(y > 9){
                    total+=((y%10) + 1);
                } else {
                    total+=y;
                }
            } else if (x%2 !== 0){
                total+=n;
            }
            x--;
    }

    console.log (total%10);
    
}

checkLuhn(num)

/*
 * JavaScript implementation of the Luhn algorithm, with calculation and validation functions
 */

/* luhn_checksum
 * Implement the Luhn algorithm to calculate the Luhn check digit.
 * Return the check digit.
 */
// function luhn_checksum(code) {
//     var len = code.length
//     var parity = len % 2
//     var sum = 0
//     for (var i = len-1; i >= 0; i--) {
//         var d = parseInt(code.charAt(i))
//         if (i % 2 == parity) { d *= 2 }
//         if (d > 9) { d -= 9 }
//         sum += d
//     }
//     return sum % 10
// }

// /* luhn_caclulate
//  * Return a full code (including check digit), from the specified partial code (without check digit).
//  */
// function luhn_caclulate(partcode) {
//     var checksum = luhn_checksum(partcode + "0")
//     return checksum == 0 ? 0 : 10 - checksum
// }

// /* luhn_validate
//  * Return true if specified code (with check digit) is valid.
//  */
// function luhn_validate(fullcode) {
//     return luhn_checksum(fullcode) == 0
// }

// // takes the form field value and returns true on valid number
// function valid_credit_card(value) {
//   // accept only digits, dashes or spaces
// 	if (/[^0-9-\s]+/.test(value)) return false;

// 	// The Luhn Algorithm. It's so pretty.
// 	var nCheck = 0, nDigit = 0, bEven = false;
// 	value = value.replace(/\D/g, "");

// 	for (var n = value.length - 1; n >= 0; n--) {
// 		var cDigit = value.charAt(n),
// 			  nDigit = parseInt(cDigit, 10);

// 		if (bEven) {
// 			if ((nDigit *= 2) > 9) nDigit -= 9;
// 		}

// 		nCheck += nDigit;
// 		bEven = !bEven;
// 	}

// 	return (nCheck % 10) == 0;
// }