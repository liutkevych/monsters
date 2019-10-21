import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
import {SearchBox} from './components/search-box/search-box.component';
// import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchFeild: ''
    }
  }

  componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(resp => resp.json())
    .then(users => this.setState({monsters: users}));
  }

  handleChange = e => {
    this.setState({searchFeild: e.target.value});
  }

  render(){
    const { monsters, searchFeild } = this.state; 
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchFeild.toLowerCase())
    );
    return (
      <div className="App">
        <h1>Monsters High</h1>
        <SearchBox 
          placeholder="serach monster"
          handleChange = {this.handleChange}
        />
        <CardList monsters={filteredMonsters}/>
      </div>
    );
  }
}

export default App;
