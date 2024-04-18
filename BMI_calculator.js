const form= document.querySelector('form');
 form.addEventListener('submit',(e)=>{
    e.preventDefault();
    // it will not allow the value to store in the url
    const height= parseInt(document.querySelector('#height').value);
    // we get the value in the form of string so parse int convert it to integer
    const weight= parseInt(document.querySelector('#weight').value);
    const result= document.querySelector('#result');
    const bmi_check= document.querySelector('#bmi_check');
    if( height===''|| height<0 || isNaN(height)){
        result.innerHTML='Please enter a valid height';
    }
     else if( weight===''|| weight<0 || isNaN(weight)){
        result.innerHTML='Please enter a valid weight';
    }
     else{
        const bmi= (weight / ((height*height) /10000)).toFixed(2);
        result.innerHTML= `Result:${bmi}`;
        if(bmi<18.6){
            bmi_check.innerHTML= 'You are underweight';
        }
        else if (bmi>18.6 && bmi<24.9){
            bmi_check.innerHTML= 'Your bmi is normal';

        }
        else if(bmi>24.9) {
            bmi_check.innerHTML= 'you are overweight';
        }

     }

 })