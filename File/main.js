console.log("Main Js file");



// ============== INPUT VALUE 
function ValueOfInputTag(inputTag){
    const theTag=document.getElementById(inputTag);
    const theTagString = theTag.value;
    const theInputValue= parseInt(theTagString);
    return theInputValue;
}

// ============== INNER TEXT VALUE 
function elementToValue(elementName){
    const theElement = document.getElementById(elementName);
    const theElementString = theElement.innerText;
    const theElementValue = parseInt(theElementString);
        return theElementValue;
}
// SET VALUE ON THE DIPLAY  
function setValueDisplay(theTag, theValue){
    const tag= document.getElementById(theTag);
    tag.value= theValue;
}

// SET TEXT ON THE DIPLAY  
function setTextDisplay(theTag, theValue){
    const tag= document.getElementById(theTag);
    tag.innerText= theValue;
}


// INCREASE AND DECREASE Function 



// ---------- LAPTOP 
function increase(increase){
    const qtyField= ValueOfInputTag('LaptopQty');

    let theFunctionalSum;
        if (increase){
            theFunctionalSum =  qtyField +1;    
        }
        else {
            theFunctionalSum = qtyField -1;
        }
    setValueDisplay('LaptopQty', theFunctionalSum)
    return theFunctionalSum;
}


// =================  
document.getElementById('increaseLptpqty').addEventListener('click',function(){ 
    const LaptopValue= increase(true);
    const sumOFLaptop= LaptopValue * 1200;
    setTextDisplay("PriceTotalMobile", sumOFLaptop);
})

document.getElementById('decreaseLptpqty').addEventListener('click',function(){ 
    const LaptopValue= increase(false);
    const sumOFLaptop= LaptopValue * 1200;
    setTextDisplay("PriceTotalMobile", sumOFLaptop);
})



// ------------  MOBILE 
function increaseMbile(increase){
    const qtyField= ValueOfInputTag('mobileQty');

    let theFunctionalSum;
        if (increase){
            theFunctionalSum =  qtyField +1;    
        }
        else {
            theFunctionalSum = qtyField -1;
        }
    setValueDisplay('mobileQty', theFunctionalSum)
    return theFunctionalSum;
}


document.getElementById('mobileIncrement').addEventListener('click',function(){ 
    const MobileValue = increaseMbile(true)    
    const sumOFMobile =  MobileValue * 850;
    setTextDisplay("PriceTotal", sumOFMobile);
})

document.getElementById('mobileDecrement').addEventListener('click',function(){ 
    const MobileValue = increaseMbile(false)    
    const sumOFMobile =  MobileValue * 850;
    setTextDisplay("PriceTotal", sumOFMobile);
})

// =================== FOR CHECK BUTTON 


function total(){
    const PriceTotalMobile = elementToValue("PriceTotalMobile")
    const PriceTotal = elementToValue("PriceTotal");
    const total= PriceTotalMobile+PriceTotal;
    setTextDisplay('total', total)
    return total
}


function tax(){
    const cartTotal = total();
    const Tax = cartTotal*0.1;
    setTextDisplay('tax',Tax)
    return Tax;
}


 document.getElementById('chkBtn').addEventListener('click', function(){
        total();
        tax();


    // console.log(Tax)


 })