//assegno una classe ad un oggetto
const numbersElement = document.querySelector(`.numbers`)

//apro un ciclo for che mi conti da 1 a 101 incrementando sempre di un indice
for (i = 1; i < 101; i++) {
    //creo una condizione if che mi dica: se divido per 3 E divido per 5 il risultato sarà un numero intero??
    if (Number.isInteger(i / 3) && Number.isInteger(i / 5)) {
        //se si allora mi creo una classe "number fizzbuzz" e ci scivo dentro FizzBuzz
        const markupLi = `
    <div class="number fizzbuzz">
        <div>FizzBuzz</div>
    </div>`
            //stampo il div che ho appena creato
        numbersElement.insertAdjacentHTML(`beforeend`, markupLi)
    }
    //creo una condizione if else che mi dica: se divido per 3 il risultato sarà un numero intero??
    else if (Number.isInteger(i / 3)) {
        //se si allora mi creo una classe "number fizz" e ci scivo dentro Fizz
        const markupLi = `
    <div class="number fizz">
        <div>Fizz</div>
    </div>`
            //stampo il div che ho appena creato
        numbersElement.insertAdjacentHTML(`beforeend`, markupLi)
    }
    //creo una condizione if else che mi dica: se divido per 5 il risultato sarà un numero intero??
    else if (Number.isInteger(i / 5)) {
        //se si allora mi creo una classe "number fizz" e ci scivo dentro buzz
        const markupLi = `
    <div class="number buzz">
        <div>Buzz</div>
    </div>`
            //stampo il div che ho appena creato
        numbersElement.insertAdjacentHTML(`beforeend`, markupLi)
    } else {
        // in tutti gli altri casi scrivo semplicemente il numero
        const markupLi = `
    <div class="number">
        <div>${i}</div>
    </div>`
            //stampo il div che ho appena creato
        numbersElement.insertAdjacentHTML(`beforeend`, markupLi)
    }
}