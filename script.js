function calcular(){

    let numero = document.getElementById("txtn")
    let tab = document.getElementById("seltab")
    let tabuada = document.getElementById("tabuadado")

    if(numero.value.length == 0){
        window.alert("Por favor, digite um número!")
    }else{
        let num = Number(numero.value)
        let contador = 1
        tab.innerHTML = ""
        numero.value = ""
        

        while(contador<= 10){
            let item = document.createElement("option")
         item.text = `${num} x ${contador} = ${num*contador}`
         tab.appendChild(item)
         contador++
        tabuada.innerHTML= `Tabuada do: ${num}`
        }
    }

}