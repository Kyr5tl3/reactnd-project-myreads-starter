import Reach from 'react'

import './App.css'

class Book extends Component {
  render(){
    return{
      <li>
        <div className="book">
          <div className="book-top">
            <div className="book-cover" style={{ width: 128, height: 188, backgroundImage:`url(${books.coverURL})`}}></div>
              <div className="book-shelf-changer">
                <select>
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
              </div>
            </div>
            <div className="book-title">{{books.title}}</div>
            <div className="book-authors">{{books.author}}</div>
          </div>
      </li>
    }
  }
}
