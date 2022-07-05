function repaintImage() {
    let calcElem = document.getElementById('firstColorElem');
    let changeImage = document.getElementById('firstImage');
    let stylesOfCalcElem = getComputedStyle(calcElem);
    let blockHeight = stylesOfCalcElem.height;

    changeImage.style.height = blockHeight;
    changeImage.style.display = 'block';

    calcElem = document.getElementById('secondColorElem');
    changeImage = document.getElementById('secondImage');
    stylesOfCalcElem = getComputedStyle(calcElem);
    blockHeight = stylesOfCalcElem.height;

    changeImage.style.height = blockHeight;
    changeImage.style.display = 'block';

    calcElem = document.getElementById('thirdColorElem');
    changeImage = document.getElementById('thirdImage');
    stylesOfCalcElem = getComputedStyle(calcElem);
    blockHeight = stylesOfCalcElem.height;

    changeImage.style.height = blockHeight;
    changeImage.style.display = 'block';
    
    console.log("repaint");
}

function waitForDOM() {
     /* 
        Функция необходима - импортированные шрифты загружаются последними, 
        поэтому все размеры вычисляются для Tahoma, а не для Roboto. Эти два шрифта
        имеют разные размеры, поэтому могут возникать проблемы с отображением.
        (Tahoma идет сразу за Roboto в стилях, поэтому пока Roboto на загрузился, 
        используется Tahoma)
    */
    if (window.innerWidth < 1080) {
        changeImage = document.getElementById('firstImage');
        changeImage.style.display = 'none';
        changeImage = document.getElementById('secondImage');
        changeImage.style.display = 'none';
        changeImage = document.getElementById('thirdImage');
        changeImage.style.display = 'none';
    } else if (document.fonts.check("16px Roboto") == true) {
        repaintImage();
    } else {
        setTimeout(waitForDOM, 50); // Попробовать снова через 50 миллисекунд
    }
}

document.addEventListener("DOMContentLoaded", function(event)
{
    window.onresize = function() {
        waitForDOM();
    };
});

waitForDOM();

