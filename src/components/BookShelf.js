import React, { Component } from 'react';
import BookCard from './BookCard';
import PropTypes from 'prop-types';

class BookShelf extends Component {
  static propTypes = {
    title: PropTypes.string.isRequired,
    bookUpdate: PropTypes.func.isRequired
   };


  render() {  
    const {bookUpdate,books, ...other} = this.props;
    return (
      <div className="bookshelf has-background-primary is-bold">
        <figure className="title has-background-warning is-bold">
             <h2 className="title is-inline is-size-6 has-text-danger">{this.props.title}</h2>
        </figure>       
      <div className="columns is-multiline" id="shelfcolumns">
        {books.map(book => (        
          <BookCard
            book={book}
            key={book.id}                        
            bookUpdate={bookUpdate}
            shelf={book.shelf}
            {...other}            
          />                  
        ))}
      </div>
      </div> 
    );
  }
}

export default BookShelf;