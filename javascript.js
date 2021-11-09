
function maiuscula(){
    var text = document.getElementById("text").value
    var result = document.getElementById("result")
    text = text.toUpperCase()
    result.innerHTML = text   
}
function minuscula(){
    var text = document.getElementById("text").value
    var result = document.getElementById("result")
    text = text.toLowerCase()
    result.innerHTML = text   
}