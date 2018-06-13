import React from 'react';
import {Link, Route} from 'react-router-dom';
import  Product  from './Product';
import LogoImg from './images/logo.jpg';

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

const Products = ({match, data}) => {

    var linkList = data.map((product) => {
        return (
            <li key={product.id}>

                <Link className="col-md-12" style={{
                    display: 'flex',
                    borderBottom: '1px solid lightgray',
                    alignItems: 'center',
                    textDecoration: 'none',
                    width: '100%'
                }} to={`${match.url}/${product.id}`}>
                    <div className="col-md-3">
                        <img className="img-circle" src={getImage(product.name)} alt="logo" width={'100px'}
                             height={'100px'}/>
                    </div>
                    <div className="col-md-9">
                        <h4>{product.name}</h4>
                        <p>{product.description}</p>
                    </div>
                </Link>
            </li>
        )

    })

    return (
        <div>
            <div style={{
                paddingLeft: '0px',
                paddingRight: '0px',
                border: '1px solid lightgrey'
            }} className="col-md-4">
                <div><img src={LogoImg} alt="logo" width={'100%'} height={'auto'}/></div>
                <ul style={{listStyleType: 'none', padding: 0, fontSize: '15px'}}> {linkList} </ul>
            </div>

            <Route path={`${match.url}/:productId`} render={ (props) => <Product data={data} {...props} />}/>
            <Route exact path={match.url}
                   render={() => (
                       <div style={{textAlign: 'center'}}>Choose your meal</div>
                   )}/>
        </div>
    )
}

export default Products;