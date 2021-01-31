function getRandomNumber() {
    const generateRandom = Math.round(Math.random()*10000)+'';
    if(generateRandom.length === 4){
        document.getElementById('generated-input').value = generateRandom;
    }
}
document.getElementById('btn-area').addEventListener('click',function(event){
     const btnArea = event.target.innerText;
     if (isNaN(btnArea)){
        if (btnArea === 'C'){
            document.getElementById('typed-value').value= '';
        }
        else if ( btnArea === 'B'){
            const value =document.getElementById('typed-value').value;
            const slice = value.slice(0, -1);
            document.getElementById('typed-value').value= slice;
        }
     }
     else{
       const input =  document.getElementById('typed-value').value;
       const inputVal = input + btnArea;
       document.getElementById('typed-value').value= inputVal;
     }
})


function verifyValue() {
    const generateVal = document.getElementById('generated-input').value;
    const typedVal = document.getElementById('typed-value').value;
    if(generateVal === typedVal){
        document.getElementById('right').style.display= 'block'
        document.getElementById('wrong').style.display= 'none'
    }
    else {
        document.getElementById('right').style.display= 'none'
        document.getElementById('wrong').style.display= 'block'
    }
}