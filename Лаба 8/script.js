const text = document.querySelector('.text');
const textarea = document.querySelector('.textarea');
const button = document.querySelector('.output');

// Регулярные выражения
const firstUppercase = /[А-Я|Ё][а-я|ё]*/gm;
const moreThanThreeDigits = /[0-9][0-9][0-9][0-9]+/gm;

button.addEventListener('click', () => {
    // Копируем значение textarea
    const value = textarea.value;
    // Выполняем поиск первого совпадения по регулярному выражению
    let currentValue = firstUppercase.exec(value);
    let tempValue = value;
    let outputValue = '';
    // Пока поиск не окончен
    while (currentValue) {
        const valueToReplace = currentValue[0];
        // Если существует значение, находящееся за два индекса до нашего совпадени
        // И это значение равно букве, цифре или запятой
        if (value[currentValue.index - 2] && value[currentValue.index - 2].match(/[А-Яа-я0-9\,]/)) {
            // Значит найденное слово находится не в начале предложения
            tempValue = tempValue.replace(valueToReplace, `<span class="red">${currentValue}</span>`);

            const tempRegExp = new RegExp(`</span>`, 'g');
            let matchIndex = tempRegExp.exec(tempValue).index + 7;

            outputValue += tempValue.slice(0, matchIndex);
            const valueToSlice = tempValue.slice(0, matchIndex);
            tempValue = tempValue.replace(valueToSlice, '');
        } else {
            // Иначе оно является первым словом в предложении
            tempValue = tempValue.replace(valueToReplace, `<span class="underline">${currentValue}</span>`);

            const tempRegExp = new RegExp(`</span>`, 'g');
            let matchIndex = tempRegExp.exec(tempValue).index + 7;

            outputValue += tempValue.slice(0, matchIndex);
            const valueToSlice = tempValue.slice(0, matchIndex);
            tempValue = tempValue.replace(valueToSlice, '');
        }
        // Выполняем поиск следующего значения
        currentValue = firstUppercase.exec(value);
    }

    // Если после выделенияя остался ещё текст
    if(tempValue) {
        outputValue += tempValue;
    }

    // Также выполняем поиск по выражению, что ищет более трёх цифр
    let digitsValue = moreThanThreeDigits.exec(value);

    while (digitsValue) {
        const valueToReplace = digitsValue[0];
        outputValue = outputValue.replace(valueToReplace, `<span class="green">${digitsValue}</span>`);
        digitsValue = moreThanThreeDigits.exec(value);
    }

    // Выводим текст
    text.innerHTML = outputValue;
});
