var submitButtonPushed = document.getElementById("submitbutton");
var deleteButtonPushed = document.getElementById("deletebutton");
var optionsMenu = document.getElementsByClassName("selectmenu");
var IgnoreCapLet = document.getElementById("ignoreupperleters");
var customword = document.getElementById("customword");
var result = document.getElementById("result");
var textbox = document.getElementById("text");
var aparitions = document.getElementById("aparitions");
const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
var colorIndex;

//save input
submitButtonPushed.addEventListener("click", function(e){
    var inpText = removeAngleBrakets(textbox.value);
    
    var keyExpresion = removeAngleBrakets(customword.value);
    
    noNullKeyExpresion();
    if(IgnoreCapLet.checked)
    result.innerHTML = colorKeywords(inpText.toLowerCase(),keyExpresion.toLowerCase());
    else
    result.innerHTML = colorKeywords(inpText,keyExpresion);

    document.getElementById("aparitions").innerHTML = 'the expression "' + '<span style="background-color: red ;">' + keyExpresion + '</span>' +  '" appeared'  + '<span style="background-color: red ;">' + colorIndex + '</span>' + " times in the provided text";

    });
//delete input
deleteButtonPushed.addEventListener("click",function(e){textbox.value = "";});
//removeAngleBrakets
function removeAngleBrakets(arg){return arg.replace(/<|>/g,'');}
//checks if keyexpresion is null
function noNullKeyExpresion() {
    if (customword.value.trim() == "") {
        customword.value = "add a valid expresion";
    }
}
//color keywords
function colorKeywords(arg1, arg2) {
    let regex = RegExp(arg2, 'g');
     colorIndex = 0;
    
    return arg1.replace(regex, function (match) {
        let color = colors[colorIndex % colors.length];
        colorIndex++;
        return '<span style="background-color: ' + color + ';">' + match + '</span>';
    });
}
//get random element
function getRandomElement(array) {
    let randomIndex = Math.floor(Math.random() * array.length);
    return array[randomIndex];
}