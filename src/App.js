import React, {Component} from 'react';
import { Route, Link } from 'react-router-dom';
import * as BooksAPI from './utils/BooksAPI';
import './css/App.css';
import Header from './components/Header';
import SearchBooks from './components/SearchBooks';
import BookShelf from './components/BookShelf';

class App extends Component {
  state = { 
    books: [],
    shelfBooks: [],
  };

  
  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({books});
  })
  }


  getShelfBooks(shelf){
  return this.state.books.filter((b) => b.shelf === shelf)
}

  bookUpdate = (book, newShelf) => {        
      BooksAPI.update(book, newShelf).then(() => {
        book.shelf = newShelf;
        this.setState(state => ({
          books: state.books.filter(b => b.id !== book.id).concat([ book ])
        }));
      });
      }
      

render() {
const       shelves = [
  {name: 'currentlyReading', title: 'Currently Reading'}, 
  {name: 'wantToRead', title: 'Want to Read'},
  {name: 'read', title: 'Read'}
]

    return (
      <div className="App">      
      <Header />
        <section className="section">
          <Route
            exact path="/" render={() => (
            <div>
              {shelves.map(shelf => (
              <div className="row" key={shelf.name}>                                 
              <BookShelf                   
                  title={shelf.title}
                  key={shelf.name}
                  books={this.getShelfBooks(shelf.name)}
                  bookUpdate={this.bookUpdate}
                />
                <br />
                </div>
              ))}              
               <Link to="/search">
                <div className="open-search">                 
                </div>
                </Link>
            </div>
            )}/> 
        </section>        
           <Route path="/search" render={() => (              
                <SearchBooks                                     
                bookUpdate={this.bookUpdate}
                 />
           )}/>
      </div>
    );
    
  }
}

export default App;