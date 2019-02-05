"use strict";
// declare acceptable keys
const keys = ' 0123456789';

// Input validator by Xotic750
// https://stackoverflow.com/questions/17526406/form-text-field-to-only-accept-nuvmbers-and-whitespace
let input = document.getElementById('number');
//watch for key press event, 
input.addEventListener('keypress', (e) => {
    //see if the key is included in the ones earlier declared,
    if (keys.includes(e.key) === false) {
        //remove unwanted presses from the event loop.
        e.stopPropagation();
        e.preventDefault();
    }
}, false);

const button = document.getElementById('button');
let display = document.getElementById('display');

button.addEventListener('click', (e)=>{
    let num = document.getElementById('number').value;
    num = num.replace(/\D/g, "");

    if (num.length < 2){
        display.innerHTML = 'ENTER A VALID NUMBER LENGTH' 
    } else {

        num = num.split(""); //convert 'num' to array
        //num = num.reverse(); //reverse 'num' order 
        //num = num.join("");

        console.log(num);
        checkLuhn(num);
    }
})

function checkLuhn(num){
    
    let sum = num.length-1;
    let total = 0;
    //let x = sum;
    let x = false;
    
    for(let i=sum; i>=0; i--){
        //let n;
        let n = parseInt(num[i]);
            if(x){
                let y = n*2
                if(y > 9){
                    total+=((y%10) + 1);
                } else {
                    total+=y;
                }
            } else {
                total+=n;
            }
        x=!x;
    }

    if(total%10 == 0){
        display.innerHTML = 'VALID NUMBER';
    } else if (total%10 !== 0){
        display.innerHTML = 'INVALID NUMBER';
    }
    
}

