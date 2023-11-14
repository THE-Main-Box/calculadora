function insert(num){
    event.preventDefault()
    let resposta = document.querySelector("#resposta").innerHTML;
    document.querySelector("#resposta").innerHTML = resposta + num
}

function clean() {
    event.preventDefault()
    
    document.querySelector("#resposta").innerHTML = ""
}

function calculo (){
    event.preventDefault()
    let resposta = document.querySelector("#resposta").innerHTML;

    if(resposta){
        document.querySelector("#resposta").innerHTML = eval(resposta)
    }
}

function back() {
    event.preventDefault()

    let resposta = document.querySelector("#resposta").innerHTML;

    document.querySelector("#resposta").innerHTML = resposta.substring(0, resposta.length -1)
}