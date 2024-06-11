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
    { nombre: 1000000, texte: 'un million' },
    { nombre: 1000000000, texte: 'un milliard' }
];

function convert(num) {
    let numberToText = numbersText.find(item => item.nombre === num);

    return numberToText.texte;
}

function splitting(num) {
    let tab = num.toString().split('');
    let tab_zero = [tab[0], ...tab.slice(1).map(() => '0')];

    console.log(num)
    if (tab_zero.length > 2 && tab_zero[0] > 1) {
        console.log(convert(+tab_zero[0]))
        tab_zero[0] = 1;
    }

    let tabToNumber = +tab_zero.join('');
    let numberToText = numbersText.find(item => item.nombre === tabToNumber);

    // Résultat
    if (numberToText) {
        console.log(numberToText.texte);
    } else {
        console.log(`Le nombre ${tabToNumber} n'a pas de correspondance textuelle.`);
    }

    // Récursion
    if (tab.length > 1) {
        let remainingNum = +num.toString().slice(1);
        splitting(remainingNum);
    }
}




