import React, { Component } from 'react'

import NavBar from './NavBar'
import GifListContainer from '../containers/GifListContainer'
import GifSeach from './GifSearch'

var _ = require('lodash');

class App extends Component {
  state = {
    gifs: []
  }

  render() {
    return (
      <div>
          < NavBar color='black' title="Giphy Search" />
          < GifSeach fetchGifs={this.fetchGifs}/>
          < GifListContainer gifs={this.state.gifs} fetchGifs={this.fetchGifs} />
      </div>
    )
  }


  fetchGifs = (search) => {
    fetch(`https://api.giphy.com/v1/gifs/search?q=${search}&api_key=YQzUkTpm06xyqaocxLngqyQhsYJu6mRD`)
    .then(response => response.json())
    .then(response => this.setState({
      gifs: _.sampleSize(response.data, 3)
    }))
  }
}

export default App
