import React, { Component } from 'react' 

export default class GifSeach extends Component {
  state = {
    search: '',
  }

  render() {
    return(
      <div>
        <form onSubmit={event => { 
          event.preventDefault(); 
          this.props.fetchGifs(this.state.search)
        }} >
          <input 
            type="text"
            name="search"
            value={this.state.query}
            onChange={event => this.setState({ search: event.target.value })}
          ></input>
          <input type="submit" />
          
        </form>
      </div>
    )
  }
}