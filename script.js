


function help() {
    event.preventDefault()
    alert("1[soma] \n 2[subtração] \n 3[multiplicação] \n 4[divisao]")
}

function contar() {
    event.preventDefault()
    
    const Al1 = parseFloat(document.querySelector("#firstN").value)
    const Al2 = parseFloat(document.querySelector("#secondN").value)

    const OP = Number(prompt("1[soma] \n 2[subtração] \n 3[multiplicação] \n 4[divisao]"))



    switch (OP) {
        case 1:
            
            alert(soma(Al1, Al2))
            break;
        case 2:
            
            alert(sub(Al1, Al2))
            break;
        case 3:
            
            alert(mult(Al1, Al2))
            break;
        case 4:
            
            alert(div(Al1, Al2))
            break;
        default:
            alert("houve um erro tente novamente")
            break;
    }

    
}