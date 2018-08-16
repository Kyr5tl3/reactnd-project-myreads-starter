import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {Route} from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './Bookshelf.js'
import Search from './Search.js'

class BooksApp extends Component {
  constructor(props) {
    super(props);
    this.handleChangeShelf = this.changeShelf.bind(this);
  }

  state = {
    books: []
  }

  componentDidMount() {
    this.updateStateWithLocalStorage();
    window.addEventListener("beforeunload", this.saveStateToLocalStorage.bind(this));
  }

  componentWillUnmount() {
    window.removeEventListener("beforeunload", this.saveStateToLocalStorage.bind(this));
    this.saveStateToLocalStorage();
  }

  updateStateWithLocalStorage() {
    // for all items in state
    for (let key in this.state) {
      // if the key exists in localStorage
      if (localStorage.hasOwnProperty(key)) {
        // get the key's value from localStorage
        let value = localStorage.getItem(key);

        // parse the localStorage string and setState
        try {
          value = JSON.parse(value);
          this.setState({[key]: value});
        } catch (e) {
          // handle empty string
          this.setState({[key]: value});
        }
      } else {
        BooksAPI.getAll().then(books => {
            this.setState({ books });
          });
      }
    }
  }

  saveStateToLocalStorage() {
    // for every item in React state
    for (let key in this.state) {
      // save to localStorage
      localStorage.setItem(key, JSON.stringify(this.state[key]));
    }
  }

  changeShelf = (book, shelf) => {

    let moveBookID = book.target.id
    let currentBooks = [...this.state.books]
    let indexToMove = currentBooks.findIndex(book => book.id === moveBookID)
    let bookToMove = Object.assign({}, currentBooks[indexToMove], {shelf: book.target.value});
    let newShelf = book.target.value
    let newBookToAdd = [];
    if (indexToMove === -1) {

      let newBookToAdd = BooksAPI.get(moveBookID).then(addBook => {
        addBook.shelf = newShelf
        return addBook
      }).then((book) => {
        currentBooks.push(book)
        this.setState({books: currentBooks})
        let message = book.title + ' added to ' + book.shelf;
        alert(message)
      })

    } else {
      currentBooks = currentBooks.filter(function(theBook) {
        return theBook.id !== moveBookID
      })
      currentBooks.push(bookToMove)
      this.setState(state => ({books: currentBooks}))
      return this.state.books
      let message = book.title + ' moved to ' + book.shelf;
      alert(message)
    }

  }

  render() {
    return (<div className="app">
      <Route exact="exact" path='/' render={() => (<BookShelf books={this.state.books} updateShelf={this.changeShelf}/>)}/>
      <Route path='/search' render={() => (<Search updateShelf={this.changeShelf} books={this.state.books} handlingClick={this.handleClick}/>)}/>
    </div>)
  }
}

export default BooksApp
