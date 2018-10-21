import React, { Component } from 'react';
import './App.css';
import CharactersHP from './component/characters'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      characters: []
    }
  }

componentDidMount() {

  // ***************** Harry Potter ********************
  // This API take the key and the properties of the objects (characters, houses, spells) as params in the URL (known this with URL Query Parameters)

  // API key
  const key = '$2a$10$2E3rE93HPhMw7awlouG3Tu6wrLUaWE7Z62pWr2EdnI3Vg77wLP3SW';
  //Params -> URLSearchParams() creates an object allowing access to the GET query arguments contained in the URL
  const params = new URLSearchParams({key: key, house: "Gryffindor"}) 
  // Creation of the URL
  const url = `https://www.potterapi.com/v1/characters?${params}`;

  // ************* Another way to do create the url *************
      //const url = new URL('https://www.potterapi.com/v1/characters/')
      // const params = {key: key, house: 'Slytherin'}
      // Object.keys(params).map(key => url.searchParams.append(key, params[key]));
      //fetch(url, {key})

  // Get datas from the API
  fetch(url)
  .then(response => response.json())
  .then(data => {this.setState(() => {return {characters: data}})});

  console.log(this.state.characters)
}




  render() {
    return (
      <div className="App">

        <CharactersHP charactersTab={this.state.characters}/> {/** establish the array as a prop for its child */}

      </div>
    );
  }
}

export default App;
