// 5 элементов, пять строк
let string_1 = "";
let string_2 = "";
let string_3 = "";
let string_4 = "";
let string_5 = "";
let result = document.getElementById('result_field');

/* вызываем функцию при нажатии на кнопку */
result.onclick = function() {   
    navigator.clipboard.writeText(result.innerText);
}

// Кнопка отправки основы запроса
document.getElementById('button_in_1').onclick = function() {
    let input_text = document.getElementById('input_query');
    string_1 = "( " + input_text.value + " ) ";
    result.innerText = string_1 + string_2 + string_3 + string_4 + string_5; // Вносим в результат содержимое
};

// Кнопка поиска pdf
document.getElementById('button_in_2').onclick = function() {
    string_2 = "( filetype:pdf ) ";
    result.innerText = string_1 + string_2 + string_3 + string_4 + string_5; // Вносим в результат содержимое
};

// Кнопка поиска текстовых файлов
document.getElementById('button_in_3').onclick = function() {
    string_2 = "( filetype:pdf OR filetype:doc OR filetype:odt OR filetype:docx) ";
    result.innerText = string_1 + string_2 + string_3 + string_4 + string_5; // Вносим в результат содержимое
};

// Кнопка поиска презентаций 
document.getElementById('button_in_4').onclick = function() {
    string_2 = "( filetype:ppt OR filetype:odp) ";
    result.innerText = string_1 + string_2 + string_3 + string_4 + string_5; // Вносим в результат содержимое
};

// Кнопка поиска таблиц 
document.getElementById('button_in_5').onclick = function() {
    string_2 = "( filetype:xls OR filetype:xlsx OR filetype:ods) ";
    result.innerText = string_1 + string_2 + string_3 + string_4 + string_5; // Вносим в результат содержимое
};

// Кнопка поиска latex 
document.getElementById('button_in_6').onclick = function() {
    string_2 = "( filetype:tex) ";
    result.innerText = string_1 + string_2 + string_3 + string_4 + string_5; // Вносим в результат содержимое
};

// Кнопка установки исключений
document.getElementById('button_in_7').onclick = function() {
    let input_text = document.getElementById('thow_query');
    string_3 = "( " + input_text.value + " ) ";
    result.innerText = string_1 + string_2 + string_3 + string_4 + string_5; // Вносим в результат содержимое
};

// Кнопка установки адреса
document.getElementById('button_in_8').onclick = function() {
    let input_text = document.getElementById('site_query');
    string_4 = "( site:" + input_text.value + " ) ";
    result.innerText = string_1 + string_2 + string_3 + string_4 + string_5; // Вносим в результат содержимое
};

// Кнопка настройки даты
document.getElementById('button_in_9').onclick = function() {
    let input_text1 = document.getElementById('after_query');
    let input_text2 = document.getElementById('before_query');
    string_5 = "( after:" + input_text1.value + " before:" + input_text2.value + " ) ";
    result.innerText = string_1 + string_2 + string_3 + string_4 + string_5; // Вносим в результат содержимое
};