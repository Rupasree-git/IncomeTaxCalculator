const form=document.querySelector('form')
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    const amount=parseInt(document.getElementById('income').value)
    
    let totalTax = 0;
    if(amount<=1200000)
        totalTax=0;
    else if(amount<=160000){
        totalTax= (amount-1200000)*0.15;
    }
    else if(amount<=2000000){
        totalTax= (amount-1600000)*0.20 + 60000;
    }
    else if(amount<=2400000){
        totalTax= (amount-2000000)*0.25 + 60000+ 80000;
    }
    else{
        totalTax = (amount-2400000)*0.30 + 60000+ 80000+ 100000;
    }
    const result=document.querySelector('h2')
    result.textContent=`Result : ${totalTax}`
    form.reset()

})