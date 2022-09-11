/**
 * Функция расчёта размеров фоторамки(ок)
 * @param { number } n количество фоторамок
 * @param { number } width ширина фоторамок
 * @param { number } height высота фоторамок
 * @returns { 
 *      
 * }
 */
export function solution(n, width, height) {
    // Количество столбцов
    let columns = Math.ceil(Math.sqrt(n));

    // Количество строк
    let lines = Math.round(Math.sqrt(n));

    // Определение ширины фоторамок
    let photoWidth = Number(Math.round(width / columns));

    // Определение высоты фоторамок
    let photoHeight = Math.round(height / columns);

    // Объект с координатами
    let arrX = new Array();
    let p;
    // количество элементов в верхнем ряду
    const nElement = columns * lines - n;


    // Координаты крепежа по х
    for (let i = 0; i < n; i++) {
        p = Number(photoWidth / 2 + photoWidth * i);
        
        if(Number.isInteger(Math.sqrt(n))) {
            arrX[i] = equity(p, width)
        } else {
            if(nElement % 2 == 0 && columns % 2 == 0) {
                arrX = even(arrX, n, columns, lines, width, photoWidth)
                break;
            }
        }
    }

    // Координаты крепежа по y


    return {
        n,
        columns,
        lines,
        photoWidth,
        photoHeight,
        arrX
    };
}

/**
 * Функция при расчёте n*n
 * @param {number} result 
 * @param {number} width 
 * @returns Значение
 */
function equity( result, width ) {
    while(result > width) {
        result -= width;
    }

    return result;
}

function even(array, kol, stolbik, stroka, width, photoWidth) {
    // определение количества элементов с заполненными ячейками
    let lin = (stroka - 1) * stolbik;

    // количество оставшееся наверху
    let upElement = kol - lin;
    console.log(upElement);

    // количество недостающих
    let delElement = stolbik - upElement;

    for(let i = delElement / 2; i <= upElement; i++) {
        array.push(photoWidth / 2 + photoWidth * i)
    }

    let counter = 0;
    let sleshEnter = 0;

    while(lin > counter){
        if(sleshEnter == stolbik) {
            sleshEnter = 0;
        }
        array.push(photoWidth / 2 + photoWidth * sleshEnter)
        counter++;
        sleshEnter++;
    }

    return array;
}