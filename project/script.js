function init() {

    const goods = [
        { title: 'Shirt', price: 150 },
        { title: 'Socks', price: 50 },
        { title: 'Jacket', price: 350 },
        { title: 'Shoes', price: 250 },
    ];

    const renderGoodsItem = ({ title = 'товар', price = 'н.у' }) => `<div class="goods-item"><h3>${title}</h3><p>Price: ${price}</p></div>`;

    const renderGoodsList = (list = []) => {
        let goodsList = list.map(item => renderGoodsItem(item)).join('');
        document.querySelector('.goods-list').innerHTML = goodsList;
    }

    function styleGoodsList() {
        let elementsToStyle = document.getElementsByClassName('goods-item')
        for (let i = 0; i < elementsToStyle.length; i++) {
            elementsToStyle[i].style.border = "solid 2px salmon";
            elementsToStyle[i].style.width = "100px";
            elementsToStyle[i].style.margin = "10px";
            elementsToStyle[i].style.padding = "5px";
        }
    }

    renderGoodsList(goods);
    styleGoodsList();

}

window.onload = init
