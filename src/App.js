import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      kitties: [],
      searchField: ''
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({kitties:users}));
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }

  render() {
    const {kitties, searchField} = this.state;
    const filteredKitties = kitties.filter(kitty =>
      kitty.name.toLowerCase().includes(searchField.toLowerCase()) ||
      kitty.username.toLowerCase().includes(searchField.toLowerCase()) ||
      kitty.email.toLowerCase().includes(searchField.toLowerCase()) ||
      kitty.phone.toLowerCase().includes(searchField.toLowerCase())
      );

    return (
      <div className = 'App'>
        <h1>KittyGram</h1>
        <SearchBox 
          placeholder = 'Search'
          handleChange = {this.handleChange}
        />
        <CardList kitties = {filteredKitties} />
      </div> 
    );
  }
}

export default App;