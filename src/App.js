import React, { Component } from 'react';
import Header from './components/header.js';
import CoinList from './components/coinList';

import 'bootstrap/dist/css/bootstrap.min.css';
import './reset.css'
import './App.css';


class App extends Component {
  state = {
    selectCate: "KRW",
    assetName: [],
    assetList: [],
    input: ''
  };

  changeMoney = select => {
    this.setState({
      selectCate: select
    });
  };

  handleChange = e => {
    this.setState({
      input: e.target.value
    });
  };

  getAssetNames = async () => {
    try {
      const res = await fetch('/assets')
        .then(res => res.json());
      this.setState({
        assetName: res
      })
    } catch (e) {
      console.log(e);
    }

  }

  getTraidingPairs = async () => {
    try {
      const res = await fetch('/trading-pairs/stats')
        .then(res => res.json());
      this.setState({
        assetList: res
      })
    } catch (e) {
      console.log(e);
    }
  }

  componentDidMount() {
    this.getAssetNames();
    this.getTraidingPairs();
  }


  render() {
    const { input, assetName, assetList, selectCate } = this.state;
    return (
      <div className="App">
        <Header
          changeMoney={this.changeMoney}
          input={input}
          onChange={this.handleChange} />
        <CoinList
          selectCate={selectCate}
          assetName={assetName}
          assetList={assetList}
        />
      </div>
    );
  }
}

export default App;
