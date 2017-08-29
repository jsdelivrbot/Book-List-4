import React, { Component } from 'react';
import ReactDom from 'react-dom';
import BookList from '../containers/book-list';
import BookDetails from '../containers/book-detail';

import Clock from './clock.js';

class App extends Component {
    render () {
        return (
            <div className='app-container'>
                <div className='header'>
                    <span className='title'>My Book App</span>
                    <span className='clock'><Clock /></span>
                </div>

                <div className='contents'>
                    <BookList />
                    <div className="details">
                        <BookDetails />
                    </div>
                </div>
            </div>
        )
    }
}

export default App;
