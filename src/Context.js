import React, { Component } from 'react';
import { storeProducts, detailProduct } from './Data';

const ProductContext = React.createContext();

class ProductProvider extends Component {
    state = {
        products: storeProducts,
        detailProduct: detailProduct
    };
    componentDidMount() {
        this.setProducts();
    }
    setProducts = () => {
        let tempProducts = [];
        storeProducts.forEach(item => {
            const singleItem = {...item };
            tempProducts = {...tempProducts, singleItem};
        })
        
    }
    
    handleDetail = () => {
        console.log("hello from detail");
    };
    addToCart = (id) => {
        console.log(`hello from add to cart.id is ${id}`);
    };
//     tester = () => {
//         console.log('State products :', this.state.products[0].inCart);
//         console.log('Data products :', storeProducts[0].inCart);
        
//         const tempProducts = [...this.state.products];
//         tempProducts[0].inCart = true
//     this.setState (()=>{
//         return {products:tempProducts}
//     }, ()=>{
//         console.log('State products :', this.state.products[0].inCart);
//         console.log('Data products :', storeProducts[0].inCart);
//     });
// }
    
    render() {
        return (
            <ProductContext.Provider
                value={{
                    ...this.state,
                    handleDetail: this.handleDetail,
                    addToCart: this.addToCart
                }}
            >
                {/* <button onClick={this.tester}>test me</button> */}
                {this.props.children}
            </ProductContext.Provider>
        );
    }
}

const ProductConsumer = ProductContext.Consumer;

export { ProductProvider, ProductConsumer };
