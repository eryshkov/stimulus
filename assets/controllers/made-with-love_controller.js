import { Controller } from 'stimulus';
import React from 'react';
import ReactDOM from 'react-dom';
import MadeWithLove from '../components/MadeWithLove';

export default class extends Controller {
    connect() {
        ReactDOM.render(<MadeWithLove/>, this.element);
    }
}
