"use strict";

import jsonFile from '../input.json' assert { type: 'json'};


const lineHTML = markUp(jsonFile);

document.body.insertAdjacentHTML('afterbegin', `${lineHTML}`);

function markUp(jsonFile) {

    //let container = document.getElementsByClassName('wrapper')[0];
    
    const styleTitle = jsonFile.document.children[0].children[0].children[0].children[0];

    const styleBtn = jsonFile.document.children[0].children[0].children[1].children[0].children[1].children[0];

    const markupStyle = `
            <style>
                .wrapper {
                    padding: 16px;
                    background-color: #ffffff;
                    width: 607px;
                    height: 291px;
                    margin: 0 auto;
                }

                .title{
                    font-family:${styleTitle.style.fontFamily};
                    font-weight:${styleTitle.style.fontWeight};
                    font-size:${styleTitle.style.fontSize}px;
                    line-height:${styleTitle.style.lineHeightPx}px;
                    color: rgba(${styleTitle.fills[0].color.r}, ${styleTitle.fills[0].color.g, styleTitle.fills[0].color.b}, ${styleTitle.fills[0].color.a});
                    display: block;
                    margin-bottom: 16px;
                }
                .cards {
                    list-style-type: none;
                    display: -webkit-box;
                    display: -ms-flexbox;
                    display: flex;
                    padding: 16px;
                    margin: 0;
                }
                
                .card {
                    background-color: #f8f8f8;
                    margin-right: 16px;
                    padding: 16px;
                    border-radius: 24px;
                }
                
                .card-img {
                    width: 149px;
                    height: 138px;
                    background-color: #c4c4c4;
                    border-radius: 16px;
                    margin-bottom: 16px;
                }
                
                .card-btn {
                    font-family: ${styleBtn.style.fontFamily};
                    font-weight: ${styleBtn.style.fontWeight};
                    font-style: normal;
                    font-size: ${styleBtn.style.fontSize}px;
                    line-height: ${styleBtn.style.lineHeightPx}px;
                    color: rgba(${styleBtn.fills[0].color.r}, ${styleBtn.fills[0].color.g, styleBtn.fills[0].color.b}, ${styleBtn.fills[0].color.a});
                    padding: 10px 54px;
                    border-radius: 10px;
                    border: none;
                }
                
                .card:last-child {
                    margin-right: 0;
                }
            </style>
            `;

    const markup = `
            <span class="title">${styleTitle.name}</span>
            <ul class="cards">
                <li class="card">
                    <div class="card-img"></div>
                    <button class="card-btn">${styleBtn.name}</button>
                </li>
                <li class="card">
                    <div class="card-img"></div>
                    <button class="card-btn">${styleBtn.name}</button>
                </li>
                <li class="card">
                    <div class="card-img"></div>
                    <button class="card-btn">${styleBtn.name}</button>
                </li>
            </ul>
            `;

    //container.insertAdjacentHTML('beforebegin', `${markupStyle}`);
    //container.insertAdjacentHTML('afterbegin', `${markup}`);

    const htmlmarkup = `${markupStyle} <div class="wrapper">${markup}</div> `;
    return htmlmarkup;
}