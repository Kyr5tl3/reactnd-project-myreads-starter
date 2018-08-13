import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'
import Book from './Book.js'


class Search extends Component {

  constructor(){
    super();
    this.state = {
      query:'',
      searchedBooks: [],
      searchErr: false
    };
  }

  searchBooks(query){
    this.setState({query})
    BooksAPI.search(query).then((results) => {
      if(results) {
        this.setState({searchedBooks:results})
        console.log(`search query: ${this.state.query}`)
        console.log(`search results: ${this.state.searchedBooks}`)
        this.setState({searchErr:false})
      } else {
        this.setState({searchedBooks:[]});
        this.setState({searchErr:true})
    }})
    }


  render(){
    const { query, searchedBooks, searchErr } = this.state
    const { books, updateShelf } = this.props

    return(
        <div className="search-books">
          <div className="search-books-bar">
            <Link className="close-search" to="/">Close</Link>
            <div className="search-books-input-wrapper">
              {/*
                NOTES: The search from BooksAPI is limited to a particular set of search terms.
                You can find these search terms here:
                https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md
                However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                you don't find a specific author or title. Every search is limited by search terms.
              */}
              <input type="text" placeholder="Search by title or author" value={this.state.query} onChange={(e) => {this.searchBooks(e.target.value)}} />
            </div>
          </div>
          <div className="search-books-results">
            <ol className="books-grid">
            {this.state.searchedBooks.length > 0 &&
            (this.state.searchedBooks.map(book =>{
              return <Book book={book} key={book.id} toUpdateShelf={this.props.updateShelf} />}
            ))}
            {this.state.searchErr  && (
              <div>
                <div className=''>
                  <h3>Incorect Search Term - Please try again!</h3>
                  </div>
                </div>
            )}
            </ol>
          </div>
        </div>
    )
  }
}

export default Search
