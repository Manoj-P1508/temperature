const textBox=document.getElementById("textBox");
const toFahrenheit=document.getElementById("toFahrenheit");
const toCelius=document.getElementById("toCelius");
const result=document.getElementById("result");

function convert(){
    if(toFahrenheit.checked){
        // result.textContent="you selected to fahrenheit";
      let  temp=Number(textBox.value);
        temp=temp * 9 / 5 + 32;
        result.textContent=temp+"°F";
      
    }
    else if(toCelius.checked){
        // result.textContent="you selected to Celsius";
       let temp=Number(textBox.value);
        temp=(temp - 32) * ( 5 / 9);
        result.textContent=temp+"°C";
    }
    else{
        result.textContent="select a unit to convert";
    }
}

