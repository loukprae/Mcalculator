//Calculator

const  display = document.getElementById('display');

function toDisplay(input){
    display.value += input;
}

function clearBtn(){
    display.value = '';
}



function calculate(){
    
    let text = display.value;

    
    let cal = text.split(/([+\-*/])/).filter(x => x.trim != '');

    
    for(i = 0; i < cal.length; i++){
        if(cal[i] === '*' || cal[i] === '/'){
            let left = parseFloat(cal[i-1]);
            let right = parseFloat(cal[i+1]);
            let result = cal[i] === '*' ? left * right : left / right;
           
            cal.splice(i-1,3,result);
            i--;
        }
    }

    
    let result = parseFloat(cal[0]);

    for(let i = 1; i < cal.length; i += 2){
        let op = cal[i];
        let num = parseFloat(cal[i+1]);
        if (op === '+') result += num;
        else if (op === '-') result -= num;
    }

    display.value = result;


}

