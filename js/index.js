
function finalPriceUpdate(currentTotalPrice){
    document.getElementById('final-price').innerText=currentTotalPrice*(0.8)
}


function totalUpdate(){
    const memeoryCost=parseInt(document.getElementById('memory-cost').innerText)
    const storageCost=parseInt(document.getElementById('storage-cost').innerText)
    const deliveryCost=parseInt(document.getElementById('delivery-cost').innerText)
    const currentPrice=memeoryCost+storageCost+deliveryCost+1299
    //total sum update
    document.getElementById('total-cost').innerText=currentPrice

    finalPriceUpdate(currentPrice)
}

function costUpdate(id,cost){
    document.getElementById(id).innerText=cost;
    totalUpdate();
}

//memery select update
document.getElementById('memory-1').addEventListener('click',function(){
    costUpdate('memory-cost',0)
   
})
document.getElementById('memory-2').addEventListener('click',function(){
    costUpdate('memory-cost',180)
})

//storage select uddate
document.getElementById('storage-1').addEventListener('click',function(){
    costUpdate('storage-cost',0)
   
})
document.getElementById('storage-2').addEventListener('click',function(){
    costUpdate('storage-cost',100)
})
document.getElementById('storage-3').addEventListener('click',function(){
    costUpdate('storage-cost',180)
})

//delivery select update
document.getElementById('delivery-1').addEventListener('click',function(){
    costUpdate('delivery-cost',0)
   
})
document.getElementById('delivery-2').addEventListener('click',function(){
    costUpdate('delivery-cost',20)
})

//promo code part stevekaku 
document.getElementById('apply-button').addEventListener('click',function(){
    const inputedField= document.getElementById('promo-input')
    const inputedValue=inputedField.value 
    inputedField.value='' 
    console.log( inputedValue,inputedField.value)

    if(inputedValue=='stevekaku'){
        const currentTotal=parseInt(document.getElementById('total-cost').innerText)
        finalPriceUpdate(currentTotal)
    }

})