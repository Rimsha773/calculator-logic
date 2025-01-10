 const displayBtn= document.getElementById("display");

function appendtoDisplay(value){
    console.log("button was clicked")
    displayBtn.value += value;
}

function clearDisplay(){
    displayBtn.value="";
}

function deleteLast(){
    let display=displayBtn.value;
    displayBtn.value=display.slice(0,-1);
}

function Calculate(){
    try{
        let display=displayBtn.value;
        displayBtn.value= eval(display);
    }catch(error){
        displayBtn.value="error";
    }
}