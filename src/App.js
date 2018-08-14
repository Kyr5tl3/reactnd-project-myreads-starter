import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import BookShelf from './Bookshelf.js'
import Search from './Search.js'


class BooksApp extends Component {
  constructor(props) {
    super(props);
    this.handleChangeShelf = this.changeShelf.bind(this);
  }

  state = {books: []}

  componentDidMount() {

    BooksAPI.getAll().then((books) => {
      this.setState({books})
    })
  }



  changeShelf = (book, shelf) => {

        let moveBookID = book.target.id
        let currentBooks = [...this.state.books]
        let indexToMove = currentBooks.findIndex(book => book.id === moveBookID)
        let newBookToUpdate = Object.assign({}, currentBooks[indexToMove], {
            shelf: book.target.value
        });
        let newShelf = book.target.value

        if (indexToMove === -1){

          BooksAPI.get(moveBookID)
                  .then(addBook => {
                    let newBookToAdd = Object.assign({}, addBook, {
                      shelf: newShelf
                    })

                    console.log('newBookToAdd',newBookToAdd)
                    })
                    .then((newBook) => this.setState(state => ({
                      books: [currentBooks.push(newBook)]
                    })))

                    return this.state.books
                    console.log('state from new',this.state.books)

        } else {
          this.setState(state => ({
              books: [...currentBooks.slice(0, indexToMove), newBookToUpdate]
            }))
            console.log('state from existing',this.state.books)
            return this.state.books
      }
      console.log('overall state',this.state.books)
    }



  render() {
    console.log('check state again',this.state.books)
    return (
      <div className="app">
        <Route exact path ='/' render={() => (<BookShelf books={this.state.books} updateShelf={this.changeShelf}/>
        )}/>
      <Route path='/search' render={() => (<Search updateShelf={this.changeShelf} books={this.state.books}
      handlingClick={this.handleClick}/>
    )}/>
      </div>
    )
  }
}

export default BooksApp
