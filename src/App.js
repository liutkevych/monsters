import React, {Component} from 'react';
import {CardList} from './components/card-list/card-list.component';
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

  render(){
    return (
      <div className="App">
        <input 
          type="search" 
          placeholder="serach monster" 
          onChange={e => {
            this.setState({serachFeild: e.target.value}, () => console.log(this.state))
          }}
        />
        <CardList monsters={this.state.monsters}/>
      </div>
    );
  }
}

export default App;
