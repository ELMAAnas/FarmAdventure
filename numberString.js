const numbersText = [
    { nombre: 0, texte: 'zéro' },
    { nombre: 1, texte: 'un' },
    { nombre: 2, texte: 'deux' },
    { nombre: 3, texte: 'trois' },
    { nombre: 4, texte: 'quatre' },
    { nombre: 5, texte: 'cinq' },
    { nombre: 6, texte: 'six' },
    { nombre: 7, texte: 'sept' },
    { nombre: 8, texte: 'huit' },
    { nombre: 9, texte: 'neuf' },
    { nombre: 10, texte: 'dix' },
    { number: 11, text: 'onze'},
    { number: 12, text: 'douze'},
    { number: 13, text: 'treize'},
    { number: 14, text: 'quatorze'},
    { number: 15, text: 'quinze'},
    { number: 16, text: 'seize'},
    { number: 17, text: 'dix-sept'},
    { number: 18, text: 'dix-huit'},
    { number: 19, text: 'dix-neuf'},
    { nombre: 20, texte: 'vingt' },
    { nombre: 30, texte: 'trente' },
    { nombre: 40, texte: 'quarante' },
    { nombre: 50, texte: 'cinquante' },
    { nombre: 60, texte: 'soixante' },
    { nombre: 70, texte: 'soixante-dix' },
    { nombre: 80, texte: 'quatre-vingts' },
    { nombre: 90, texte: 'quatre-vingt-dix' },
    { nombre: 100, texte: 'cent' },
    { nombre: 1000, texte: 'mille' },
    { nombre: 1000000, texte: 'million' },
    { nombre: 1000000000, texte: 'milliard' }
];

function numberToText(num) {
    if (num == 0){
        return;
    }

    const number = numbersText.find(item => item.nombre == num);

    process.stdout.write(number.texte + " ");
}

function divideNumberByThree(num) {
    const str = num.toString();    
    const remainder = str.length % 3;    
    const zerosToAdd = remainder === 0 ? 0 : 3 - remainder;
    const paddedStr = '0'.repeat(zerosToAdd) + str;

    const result = [];
    for (let i = 0; i < paddedStr.length; i += 3) {
        result.push(parseInt(paddedStr.substring(i, i + 3), 10));
    }
    
    return result.filter(n => n !== 0);
}

function thousandsAdd(num) {
    switch (num) {
        case 2 :
            process.stdout.write(numberToText(1000) + " ");
            break;
        case 3 :
            process.stdout.write(numberToText(1000000) + " ");
            break;
        case 4 :
            process.stdout.write(numberToText(1000000000) + " ");
            break;
    }
}

function splitting(num) {
    const tab = divideNumberByThree(num);
    
    for (let i = 0; i < tab.length; i++) {
        // console.log("position : " + (tab.length - i))
        let hundreds = tab[i] - tab[i]%100;
        const tens = tab[i]%100 - tab[i]%10;
        const units = tab[i]%10;

        if (tab[i] >= 100) {
            // console.log("100 true")
            if (tab[i] >= 200) {
                numberToText(hundreds/100)
                hundreds = hundreds/(hundreds/100)
            }
            numberToText(hundreds)
            numberToText(tens)
            numberToText(units)
            thousandsAdd(tab.length - i)
        } else if (tab[i] >= 10) {
            // console.log("10 true")
            numberToText(tens)
            numberToText(units)
            thousandsAdd(tab.length - i)
        } else if (tab[i] < 10) {
            // console.log("1 true")
            if (!(units == 1 && (tab.length - i) == 2)) {
                numberToText(units)
            }
            thousandsAdd(tab.length - i)
        }
    }
}

console.log("<-- démarrage -->")
splitting(1123633)