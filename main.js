//display content in calculator Screen
function displayContent(content){
    result.value += content
}

//Clear Button
function screenClear(){
    result.value =""
}

//Output
function calcOutput(){
   result.value = eval(result.value)
}
//backspace
function removeLastDigit(){
    result.value =result.value.slice(0,-1);
}
