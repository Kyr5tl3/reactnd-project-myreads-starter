import React, {Component} from 'react'
import './App.css'

class Shelf extends Component {
  var ShelfSelector = React.createClass({
      getInitialState:function(){
        return {selectValue:'currentlyReading'};
    },
      handleChange:function(e){
      this.setState({selectValue:e.target.value});
    },

  render(){
    function() {
      var message='Moved to '+this.state.selectValue;
    return(

              <div className="book-shelf-changer">
                <select
                  value={this.state.selectValue}
                  onChange={this.handleChange}
                >
                  <option value="move" disabled>Move to...</option>
                  <option value="currentlyReading">Currently Reading</option>
                  <option value="wantToRead">Want to Read</option>
                  <option value="read">Read</option>
                  <option value="none">None</option>
                </select>
                <p>{message}</p>
              </div>
          </div>
 )}
}

export default Shelfs
