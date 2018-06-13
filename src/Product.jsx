import React from 'react';
import { Link,Route } from 'react-router-dom';
import Order from './Order'
import Meat from './images/meat.jpg';
import Fish from './images/fish.jpg';
import Dairy from './images/dairyandeggs.jpg';
import Fruit from './images/fruit.jpg';
import Vegetables from './images/vegetables.jpg';

const getImage = (image) => {
    let imagePath = '';
    switch (image){
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
const Product = ({match,data}) => {
    var linkList = data.map( (product) => {
        return(
            <li key={product.id}>

                <Link className="col-md-12" style={{
                    display: 'flex',
                    borderBottom: '1px solid lightgray',
                    alignItems: 'center',
                    textDecoration: 'none',
                    width: '100%'}} to={`${match.url}/${product.id}`}>
                    <div className="col-md-3">
                        <img className="img-circle img-responsive" src={getImage(product.name)} alt="logo" width={'100%'} height={'auto'} />
                    </div>
                    <div className="col-md-9">
                        <h4>{product.name}</h4>
                        <p>{product.description}</p>
                    </div>
                </Link>
            </li>
        )

    })

  var product= data.find(p => p.id === Number(match.params.productId));
  var productData;

    var linkList = product.Category.map( (productItem) => {
        return(
            <li key={productItem.id}>

                <Link className="col-md-12" style={{
                    display: 'flex',
                    borderBottom: '1px solid lightgray',
                    alignItems: 'center',
                    textDecoration: 'none',
                    width: '100%'}} to={`${''}/Order/${product.id}/${productItem.id}`}>
                    <div className="col-md-3">
                        <img className="img-circle" src={getImage(product.name)} alt="logo" width={'150px'} height={'150px'} />
                    </div>
                    <div className="col-md-9">
                        <h4>{productItem.name}</h4>
                        <p>{productItem.description}</p>
                    </div>
                </Link>
            </li>
        )

    })

  if(product)
    productData = <div>
                  <h3> {product.name} </h3>
                  <p>{product.description}</p>
                  <hr/>
                    <div style={{
                        paddingLeft: '0px',
                        paddingRight: '0px',
                        border: '1px solid lightgrey'}} className="col-md-12">
                        <ul  style={{ listStyleType: 'none', padding: 0, fontSize:'15px' }}> {linkList} </ul>
                    </div>
                    <Route path={`${''}/Order/:productId/:orderId`} render={ (props) => <Order data= {product} {...props} />}/>
    </div>;
  else
    productData = <h2> Sorry. Product doesnt exist </h2>;

  return (
    <div className="col-md-8">
         {productData}
    </div>
  )    
}
      
export default Product;