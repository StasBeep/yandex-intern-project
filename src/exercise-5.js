"use strict";

function renderWaterfall (rootNode, columnCount, elementGap) {
    // ширина родительского блока
    const rootWidth = rootNode.offsetWidth;

    // размеры суммы отступов
    const sumColumn = (columnCount - 1) * elementGap;

    // ширина колонки
    const columnWidth = rootWidth / columnCount - sumColumn;

    console.log(rootNode.children)

    let key = 1;

    for(let element of rootNode.children){
        element.style.width = `${columnWidth}px`;
        element.style.marginBottom = `${elementGap}px`;
        element.style.marginRight = `${elementGap}px`;
        if(key % columnCount == 0) {
            if(!key == 0) {
                element.style.marginRight = 0;
            }
        }
        key++;
    }

    let arrayHeight = [];

    for(let i = 0; i < rootNode.children.length; i++) {
        arrayHeight.push(rootNode.children[i].offsetHeight);
    }

    for(let i = 0; i < arrayHeight.length; i++) {
        
    }
}

const rootElement = document.querySelector('.root');

renderWaterfall(rootElement, 2, 10);