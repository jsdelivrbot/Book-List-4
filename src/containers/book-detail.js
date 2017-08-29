import React, {Component} from 'react';
import {connect} from 'react-redux';

class BookDetails extends Component {
    render() {
        if (!this.props.book) {
            return <div className="empty-msg">Please select a book</div>
        }
        return (
            <div>
                <div className="book-detail-header">Book Details</div>
                <hr />
                <span className="book-title">{this.props.book.title}</span>
                <span> by </span>
                <span className="book-auther">{this.props.book.auther}</span>
                <span className={"book-ratings-"+Math.floor(this.props.book.ratings)}> Ratings:
                    <span className="one">☆</span>
                    <span className="two">☆</span>
                    <span className="three">☆</span>
                    <span className="four">☆</span>
                    <span className="five">☆</span>
                </span>
                <p className="book-description">{this.props.book.description}</p>
                <span className="book-pages-count">{this.props.book.pages}</span>
            </div>
        );
    }
}


function mapStateToProps(state) {
    return {
        book: state.activeBook
    }
}

export default connect(mapStateToProps)(BookDetails);
