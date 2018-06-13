import React from 'react';

import Meat from './images/meat.jpg';
import Fish from './images/fish.jpg';
import Dairy from './images/dairyandeggs.jpg';
import Fruit from './images/fruit.jpg';
import Vegetables from './images/vegetables.jpg';

const getImage = (image) => {
    let imagePath = '';
    switch (image) {
        case 'Meat':
            imagePath = Meat;
            break;
        case 'Fish':
            imagePath = Fish;
            break;
        case 'Dairy':
            imagePath = Dairy;
            break;
        case 'Fruit':
            imagePath = Fruit;
            break;
        case 'Vegetables':
            imagePath = Vegetables;
            break;
    }
    return imagePath;
};
const Order = ({match, data}) => {

    debugger;
    console.log(data);
    var product = data[Number(match.params.productId) - 1].Category.find(p => p.id === Number(match.params.orderId));
    var productData;


    if (product)
        productData =
            <div className="col-md-3" style={{textAlign: 'center', margin: '10px', border: '1px solid lightgray'}}>
                <div>
                    <img src={getImage(data[Number(match.params.productId) - 1].name)} alt="logo" width={'300px'}
                          height={'300px'}/></div>
                <h3> {product.name} </h3>
                <p>{product.description}</p>
                <p>{`Your Order No is #${Math.floor(100000 + Math.random() * 900000)}`}</p>
                <a href="/products" className="btn btn-primary">New Order </a>
                <hr/>
            </div>;
    else
        productData = <h2> Sorry. Product doesn't exist </h2>;

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }} className="col-md-12">
            {productData}
        </div>
    )
}

export default Order;