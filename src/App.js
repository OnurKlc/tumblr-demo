import React from 'react';
import './App.css';
import Layout from './layout';

class App extends React.Component {
    constructor(props) {
    super(props);

    this.state = {
      data: null,
    };
  }

  componentDidMount() {
    fetch('data.json')
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }
  render() {
  return (
    <div className="App">
      {this.state.data === null ? true : <Layout data={this.state.data}/>}
    </div>
  );
}
}

export default App;
