let width = 840; // Ширина блока
if (window.innerWidth < 1080) {
    width = 440;
}
if (window.innerWidth < 520) {
    width = 280;
}
let maxNumberOfBlocks = 4; // Количество блоков - 1
let numberOfBlocks = 0; // Номер текущего блока 
let before = 0; // Номер предыдущего блока - нужен для прыжков между radiusButtom
let position = 0; // Положение ленты прокрутки

let tape = document.getElementById('carousel_move');

document.getElementById('button_left').onclick = function() {
    let radiusButton = document.getElementById('button' + numberOfBlocks); // Выбираем круглую кнопку
    radiusButton.style.border = 'none'; // Изменяем границу текущей кнопки
    radiusButton.style.backgroundColor = 'var(--color-white-text)';

    position += width; // Сдвиг влево
    numberOfBlocks--; // Уменьшение номера позиции текущего блока

    if(position > 0) {
        position = -width*(maxNumberOfBlocks); // Прокрутка в конец 
    }

    if(numberOfBlocks < 0) {
        numberOfBlocks = 4; // Прокрутка в конец 
    }

    before = numberOfBlocks; // Записываем номер предыдущего блока

    radiusButton = document.getElementById('button' + numberOfBlocks); // Выбираем круглую кнопку
    radiusButton.style.backgroundColor = 'var(--color-main-text)';
    radiusButton.style.border = '2px solid var(--color-white-text)'; // Изменяем границу текущей кнопки

    //tape.style.transform = 'translateX(' + position + 'px)';  // Изменение стилей
    tape.style.marginLeft = position + 'px';  // Изменение стилей
};

document.getElementById('button_right').onclick = function() {
    let radiusButton = document.getElementById('button' + numberOfBlocks); // Выбираем круглую кнопку
    radiusButton.style.border = 'none'; // Изменяем границу текущей кнопки
    radiusButton.style.backgroundColor = 'var(--color-white-text)';

    position -= width; // Сдвиг вправо
    numberOfBlocks++; // Увеличение номера позиции текущего блока

    if(position < -width*(maxNumberOfBlocks)) {
        position = 0; // Прокрутка в начало 
    }

    if(numberOfBlocks > 4) {
        numberOfBlocks = 0; // Прокрутка в конец 
    }

    before = numberOfBlocks; // Записываем номер предыдущего блока

    radiusButton = document.getElementById('button' + numberOfBlocks); // Выбираем круглую кнопку
    radiusButton.style.backgroundColor = 'var(--color-main-text)';
    radiusButton.style.border = '2px solid var(--color-white-text)'; // Изменяем границу текущей кнопки

    //tape.style.transform = 'translateX(' + position + 'px)'; // Изменение стилей
    tape.style.marginLeft = position + 'px'; // Изменение стилей
};

/* RadiusButto ------------------------------------------------------------------------- */

document.getElementById('button0').onclick = function() {
    let radiusButton = document.getElementById('button' + before);
    radiusButton.style.backgroundColor = 'var(--color-white-text)'; // Изменяем цвет предыдущей кнопки
    radiusButton.style.border = 'none'; // Изменяем границу текущей кнопки
    
    before = 0; // Текущий блок, который в следующий раз будет предыдущим

    radiusButton = document.getElementById('button' + before); // Выбираем текущий блок
    radiusButton.style.backgroundColor = 'var(--color-main-text)'; // Изменяем цвет текущей кнопки
    radiusButton.style.border = '2px solid var(--color-white-text)'; // Изменяем границу текущей кнопки
    position = -width * before; // Обновляем позицию
    numberOfBlocks = before; // Обновляем актуальный блок

    tape.style.marginLeft = position + 'px'; // Изменение стилей
};

document.getElementById('button1').onclick = function() {
    let radiusButton = document.getElementById('button' + before);
    radiusButton.style.backgroundColor = 'var(--color-white-text)'; // Изменяем цвет предыдущей кнопки
    radiusButton.style.border = 'none'; // Изменяем границу текущей кнопки
    
    before = 1; // Текущий блок, который в следующий раз будет предыдущим

    radiusButton = document.getElementById('button' + before); // Выбираем текущий блок
    radiusButton.style.backgroundColor = 'var(--color-main-text)'; // Изменяем цвет текущей кнопки
    radiusButton.style.border = '2px solid var(--color-white-text)'; // Изменяем границу текущей кнопки
    position = -width * before; // Обновляем позицию
    numberOfBlocks = before; // Обновляем актуальный блок

    tape.style.marginLeft = position + 'px'; // Изменение стилей
};

document.getElementById('button2').onclick = function() {
    let radiusButton = document.getElementById('button' + before);
    radiusButton.style.backgroundColor = 'var(--color-white-text)'; // Изменяем цвет предыдущей кнопки
    radiusButton.style.border = 'none'; // Изменяем границу текущей кнопки
    
    before = 2; // Текущий блок, который в следующий раз будет предыдущим

    radiusButton = document.getElementById('button' + before); // Выбираем текущий блок
    radiusButton.style.backgroundColor = 'var(--color-main-text)'; // Изменяем цвет текущей кнопки
    radiusButton.style.border = '2px solid var(--color-white-text)'; // Изменяем границу текущей кнопки
    position = -width * before; // Обновляем позицию
    numberOfBlocks = before; // Обновляем актуальный блок

    tape.style.marginLeft = position + 'px'; // Изменение стилей
};

document.getElementById('button3').onclick = function() {
    let radiusButton = document.getElementById('button' + before);
    radiusButton.style.backgroundColor = 'var(--color-white-text)'; // Изменяем цвет предыдущей кнопки
    radiusButton.style.border = 'none'; // Изменяем границу текущей кнопки
    
    before = 3; // Текущий блок, который в следующий раз будет предыдущим

    radiusButton = document.getElementById('button' + before); // Выбираем текущий блок
    radiusButton.style.backgroundColor = 'var(--color-main-text)'; // Изменяем цвет текущей кнопки
    radiusButton.style.border = '2px solid var(--color-white-text)'; // Изменяем границу текущей кнопки
    position = -width * before; // Обновляем позицию
    numberOfBlocks = before; // Обновляем актуальный блок

    tape.style.marginLeft = position + 'px'; // Изменение стилей
};

document.getElementById('button4').onclick = function() {
    let radiusButton = document.getElementById('button' + before);
    radiusButton.style.backgroundColor = 'var(--color-white-text)'; // Изменяем цвет предыдущей кнопки
    radiusButton.style.border = 'none'; // Изменяем границу текущей кнопки
    
    before = 4; // Текущий блок, который в следующий раз будет предыдущим

    radiusButton = document.getElementById('button' + before); // Выбираем текущий блок
    radiusButton.style.backgroundColor = 'var(--color-main-text)'; // Изменяем цвет текущей кнопки
    radiusButton.style.border = '2px solid var(--color-white-text)'; // Изменяем границу текущей кнопки
    position = -width * before; // Обновляем позицию
    numberOfBlocks = before; // Обновляем актуальный блок

    tape.style.marginLeft = position + 'px'; // Изменение стилей
};