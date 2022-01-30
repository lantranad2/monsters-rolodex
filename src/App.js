import { Component } from 'react';
import { SearchBox } from './components/SearchBox';
import { CardList } from './components/CardList';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchText: '',
    };
  }

  async componentDidMount() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/');
    const data = await response.json();
    const users = data.map(({ id, name, email }) => {
      const image = `https://robohash.org/${id}?set=set2&size=180x180`;
      return { id, image, name, email };
    });
    this.setState({ monsters: users });
  }

  _handleSearch = (e) => {
    this.setState({ searchText: e.target.value });
  };

  _searchMonsters = (searchText) => {
    return this.state.monsters.filter((m) =>
      m.name.toLowerCase().includes(this.state.searchText.toLowerCase())
    );
  };

  render() {
    const monsters = this._searchMonsters(this.state.searchText);
    return (
      <div className="App">
        <h1 className="App__heading">Monsters Rolodex</h1>
        <SearchBox
          placeholder="search monsters"
          handleSearch={this._handleSearch}
        />
        <CardList monsters={monsters} />
      </div>
    );
  }
}

export default App;
