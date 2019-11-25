import React, {Component} from 'react';
// import * as BooksAPI from './BooksAPI';

class BookCard extends Component {
state: {
    cover: '',
    title: '',
    author: ''
}
  
    render() {
        return (
             <li>
                <div className="card">
                    <div className="card-image">
                        <figure className="image is-2by3 book-cover">                          
                            <img src={this.state.cover} alt={this.state.title} className="image"></img>
                        </figure>                    
                    </div>
                    <div className="card-content">
                        <div className="content book-info">
                            <p className="bookTitle">Title: {this.state.title}</p>
                            <p className="bookAuthor">Author: {this.state.author}</p>
                        </div>
                    </div>
                    <div className="card-footer">
                        <div className="book-shelf-changer has-background-dark is-bold">
                            <select>
                                        <option value="move" disabled>Move to...</option>
                                        <option value="currentlyReading">Currently Reading</option>
                                        <option value="wantToRead">Want to Read</option>
                                        <option value="read">Read</option>
                                        <option value="none">None</option>
                            </select>
                        </div>
                    </div>
                </div>
            </li>
        )
    }
}

export default BookCard