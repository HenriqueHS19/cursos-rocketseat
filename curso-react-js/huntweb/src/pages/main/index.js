import React, { Component } from 'react';
import api from '../../services/api';

export default class Main extends Component{
    state = {
        products: [],
    }

    //metodo executado assim que o componente é mostrado em tela
    componentDidMount(){

    }

    loadProducts = async () => {
        const response = await api.get('/products');
        this.setState( {products: response.data.docs} );
    };

    render(){
        return(
            <div className="list-products">
                { this.state.products.map(product => (
                    <h2 key="product._id"> {product.title} </h2>
                ))}
            </div>
        );
    }
}