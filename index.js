let firstNum = document.getElementById("first-num");
let sign = document.getElementById("sign")
let result = document.getElementById("result")
let secondNum = document.getElementById("second-num")
let lastone = 0
let lasttwo = 0
let procria;
let middle;

firstNum.textContent += "\xa0" 

function one(){
    if (sign.textContent != "") {
        secondNum.textContent += 1 
        lasttwo++;
    }
    else{
        firstNum.textContent += 1
        lastone++;
    }
}
function two(){
    if (sign.textContent != "") {
        secondNum.textContent += 2
        lasttwo++;
    }
    else{
        firstNum.textContent += 2
        lastone++;
    }
}
function three(){
    if (sign.textContent != "") {
        secondNum.textContent += 3
        lasttwo++;
    }
    else{
        firstNum.textContent += 3
        lastone++;
    }
}
function four(){
    if (sign.textContent != "") {
        secondNum.textContent += 4
        lasttwo++;
    }
    else{
        firstNum.textContent += 4
        lastone++;
    }
}
function space(){
    if (sign.textContent != "") {
        secondNum.textContent += "\xa0"
        lasttwo++;
    }
    else{
        firstNum.textContent += "\xa0"
        lastone++;
    }
}
function five(){
    if (sign.textContent != "") {
        secondNum.textContent += 5
        lasttwo++;
    }
    else{
        firstNum.textContent += 5
        lastone++;
    }
}
function six(){
    if (sign.textContent != "") {
        secondNum.textContent += 6
        lasttwo++;
    }
    else{
        firstNum.textContent += 6
        lastone++;    
    }
}
function seven(){
    if (sign.textContent != "") {
        secondNum.textContent += 7
        lasttwo++;
    }
    else{
        firstNum.textContent += 7
        lastone++;
    }
}
function eight(){
    if (sign.textContent != "") {
        secondNum.textContent += 8
        lasttwo++;
    }
    else{
        firstNum.textContent += 8
        lastone++;
    }
}
function nine(){
    if (sign.textContent != "") {
        secondNum.textContent += 9
        lasttwo++;
    }
    else{
        firstNum.textContent += 9
        lastone++;
    }
}
function zero(){
    if (sign.textContent != "") {
        secondNum.textContent += 0
        lasttwo++;
    }
    else{
        firstNum.textContent += 0
        lastone++;
    }
}
function plus(){
    sign.textContent += "+"
    console.log(firstNum.textContent)
    middle++
    procria = "+"
}
function minus(){
    sign.textContent += "-"
    console.log(firstNum.textContent)
    middle++
    procria = "-"
}
function gun(){
    sign.textContent += "x"
    console.log(firstNum.textContent)
    middle++
    procria = "*"
}
function divide(){
    sign.textContent += "/"
    console.log(firstNum.textContent)
    middle++
    procria = "/"
}
function equal(){
    let firstnum = Number(firstNum.textContent)
    let secondnum = Number(secondNum.textContent)
    if (procria == "") {
        result.textContent = " = "
        result.textContent += firstnum + 0

    }
    if (procria == "+") {
        result.textContent = "=" + "\xa0\xa0"
        result.textContent += firstnum + secondnum
    }
    if (procria == "-") {
        result.textContent = " = "
        result.textContent += firstnum - secondnum
    }
    if (procria == "*") {
        result.textContent = " = "
        result.textContent += firstnum * secondnum
    }
    if (procria == "/") {
        result.textContent = " = "
        result.textContent += firstnum / secondnum
    }
}

function del(){
    firstNum.textContent = ""
    secondNum.textContent = ""
    sign.textContent = ""
    result.textContent = ""
}
