import React, {Component} from 'react';
import {connect} from 'react-redux';
import {selectedBook} from '../actions/index';
import {bindActionCreators} from 'redux';

class BookList extends Component {
    renderList () {
        return this.props.books.map((book) =>  {
            return (
                <li
                    key={book.title}
                    className="list-group-item"
                    onClick={() => this.props.selectedBook(book)}>
                    { book.title}
                </li>
            );
        });
    }

    render () {
        return (
            <ul className="list-group">
                { this.renderList() }
            </ul>
        );
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({selectedBook: selectedBook}, dispatch);
}

function mapStateToProps(state) {
    return {
        books: state.books
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
