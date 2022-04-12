import React from 'react';
import { Grid } from '@material-ui/core';

import Product from './products/products';

const products = [
    {id: 1, name: 'T-shirt', description: 'T-shirt.',price: '$5'},
    {id: 2, name: 'Desktop', description: 'Apple.', price: '$100'},

];

const Products = () => {
    return(
    <main>
        <Grid containear justify="center" specing={4}>
            {products.map((product) =>(
                <Grid item key= {product.id} xs={12} sm={6} md={4} lg={3}>
                    <Product product={product}/>
                </Grid>
            ))}
        </Grid>
    </main>
    );
}

export default Products;