import { Controller } from 'stimulus';
import React from 'react';
import ReactDOM from 'react-dom';
import FeaturedProduct from '../components/FeaturedProduct';

export default class extends Controller {
    static values = {
        product: Object,
    }

    connect() {
        ReactDOM.render(<FeaturedProduct product={this.productValue} />, this.element);
    }
}
