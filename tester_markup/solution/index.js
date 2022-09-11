/**
 * Сюда необходимо вставить разметку, которая будет находиться внутри тега <body>
 * ВАЖНО! тег <body> вставлять не надо, только то, что будет внутри (включая стили)
 */
const htmlFragment = `<style>
@font-face {
    font-family: inter;
    src: url(../fonts/inter-regular.otf);
    font-weight: 400;
    font-style: normal;
}

.wrapper {
    padding: 16px;
    background-color: #ffffff;
    width: 607px;
    height: 291px;
    margin: 0 auto;
}

.title {
    font-family: inter;
    font-weight: 400;
    font-style: normal;
    font-size: 18px;
    line-height: 22px;
    color: #000000;
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
    font-family: inter;
    font-weight: 400;
    font-style: normal;
    font-size: 12px;
    line-height: 15px;
    color: #000000;
    padding: 10px 54px;
    border-radius: 10px;
    border: none;
}

.card:last-child {
    margin-right: 0;
}
</style>
<div class="wrapper">
<span class="title">Список товаров</span>
<ul class="cards">
    <li class="card">
        <!--Скорее всего здесь должна быть картинка-->
        <!--<img src="" alt="">-->
        <div class="card-img"></div>
        <button class="card-btn">Купить</button>
    </li>
    <li class="card">
        <div class="card-img"></div>
        <button class="card-btn">Купить</button>
    </li>
    <li class="card">
        <div class="card-img"></div>
        <button class="card-btn">Купить</button>
    </li>
</ul>
</div>`;

module.exports = function () {
    return htmlFragment;
};