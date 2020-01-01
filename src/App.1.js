import React, { Component } from 'react';
import { CardList } from "./components/card-list/card-list.component";
import { SearchBox } from "./components/search-box/search-box.component";

export class App extends Component {
  constructor() {
    super();
    this.state = {
      users: [],
      searchField: ''
    };
  };

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(Response => Response.json())
    .then(users => this.setState({users: users}));
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }

  render() {
    const { users, searchField} = this.state;
    const filteredUsers = users.filter(user => 
      user.name.toLowerCase().includes(searchField.toLowerCase())
      );
    return (
    <div className="App">
      <h1> Monsters Rolodex </h1>
      <SearchBox
        placeholder='search users'
        handleChange={this.handleChange}
      />
      <CardList users={filteredUsers}/>
    </div>
    );
  };
}
