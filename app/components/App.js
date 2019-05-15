import React, {Component} from 'react';
import Container from './Container'; // Import a component from another file

document.body.style = 'background-color:#E4E4E4';

export default class App extends Component {
    render() {
        return (
            <div>
                <Container />
            </div>
        );
    }
}