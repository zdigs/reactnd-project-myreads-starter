import React, {Component} from 'react';
import BookButton from './BookButton';
import PropTypes from 'prop-types';
import * as BooksAPI from '../utils/BooksAPI';
import placeholder from '../images/bookholder.png';

class BookCard extends Component {
static propTypes = {
    bookUpdate: PropTypes.func.isRequired,
}
constructor(props){
    super(props);
    this.state = { 
        shelf: this.props.book.shelf,
        currentShelf: '',
        cover: placeholder,
      }
      BooksAPI.get(this.props.book.id)
      .then(book => this.setState({currentShelf: book.shelf}))
  }

  getBookCover = () => {
    return (
    this.props.book.imageLinks &&  this.props.book.imageLinks.thumbnail.length
    ? this.props.book.imageLinks.thumbnail
    : placeholder
    )
  }
  
  componentDidMount() {

  }

render(){
    const { book, bookUpdate, resultBooks, ...other} = this.props;
    
        return (
            <div className="column">
                <div className="card book-card has-background-danger is-bold has-text-white" id={book.id}>
                    <div className="card-image">
                        <figure className="image book-cover" width="129px" height="193px"> 
                            <img src={this.getBookCover()} alt="book cover" width="129px" height="193px"/>
                        </figure>                    
                    </div>
                    <div className="card-content">
                        <div className="content book-info">
                        <span className="book-title has-text-white">{book && book.title.slice(0,50)}</span>
                        <hr className="book-info-line" />                                                                                          
                        <span className="author-label has-text-white">By:</span>
                             {book.authors &&
                                    book.authors.map((author, index) => (
                                <p className="book-author has-text-white" key={index}>
                                    {author}
                                    </p>
                            ))}                                  
                        <BookButton 
                        className="book-button" 
                        book={book}                                         
                        bookUpdate={bookUpdate}                                             
                        // shelf={this.props.shelf}
                        currentShelf={this.state.currentShelf}
                        {...other}
                        />
                </div>
            </div>
            </div>   
        </div>     
            
        )
    }
}

export default BookCard