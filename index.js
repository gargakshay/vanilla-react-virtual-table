import React, { Component } from 'react';
import { render } from 'react-dom';

import Table from './components/table';
import Readme from './components/readme';

import { getGeneratedData } from './app.helpers';
import './style.css';

class App extends Component {
  constructor() {
    super();
    const data = getGeneratedData();
    this.state = {
      data,
    };
  }

  updateTableData = (updatedTableData) => {
    this.setState({ data: updatedTableData });
  };

  handleLoadMoreData = () => {
    const data = getGeneratedData();
    const updatedData = [...this.state.data, ...data];
    this.setState({ data: updatedData });
  };

  handleDisplayData = () => {
    console.log(this.state.data);
  };

  render() {
    return (
      <div>
        <Readme />
        <Table
          data={this.state.data}
          onUpdateData={this.updateTableData}
          onLoadMoreData={this.handleLoadMoreData}
        />
        <button onClick={this.handleDisplayData}> Output in console</button>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
